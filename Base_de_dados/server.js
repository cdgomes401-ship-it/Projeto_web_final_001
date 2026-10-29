// IMPORTAÇÃO EXPRESS
const express = require("express");
// INIT EXPRESS
const app = express();
// definir PORTA
const PORT = 3000;
 // IMPORTAR BIBLIOTECA PARA TRABALHAR COM SQL
const mysql = require("mysql2/promise");
// INJETAR VARIAVEIS DE AMBIENTE
require("dotenv").config();

const path = require("node:path");

require("dotenv").config({ path: path.join(__dirname, ".env") });



const frontendDirectory = path.join(__dirname, "..", "Aba_tarefas");
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT) || 3306,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
});

app.use(express.json());
app.use(express.static(frontendDirectory));

app.get("/", (req, res) => {
  res.sendFile(path.join(frontendDirectory, "Tarefas_Prototipo.html"));
});

app.get("/api/tarefas", async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT id, nome_tarefa AS text, categoria AS cat, concluida AS done FROM tarefas ORDER BY id"
    );
    res.json(rows.map((task) => ({ ...task, done: Boolean(task.done) })));
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error.message);
    res.status(500).json({ msg: "Não foi possível carregar as tarefas." });
  }
});

app.get("/api/tarefas/categorias", async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT DISTINCT categoria FROM tarefas WHERE categoria IS NOT NULL AND categoria <> '' ORDER BY categoria"
    );
    res.json(rows.map((row) => row.categoria));
  } catch (error) {
    console.error("Erro ao carregar categorias:", error.message);
    res.status(500).json({ msg: "Não foi possível carregar as categorias." });
  }
});

app.post("/api/tarefas", async (req, res) => {
  const { text, cat } = req.body;

  if (typeof text !== "string" || !text.trim() || typeof cat !== "string" || !cat.trim()) {
    return res.status(400).json({ msg: "Indique uma tarefa e uma categoria válidas." });
  }

  try {
    const [categoryRows] = await pool.execute(
      "SELECT DISTINCT categoria FROM tarefas WHERE categoria IS NOT NULL AND categoria <> ''"
    );
    const categories = categoryRows.map((row) => row.categoria);
    if (!categories.includes(cat) && !(categories.length === 0 && cat === "Outros")) {
      return res.status(400).json({ msg: "Selecione uma categoria disponível." });
    }

    const [result] = await pool.execute(
      "INSERT INTO tarefas (nome_tarefa, categoria) VALUES (?, ?)",
      [text.trim(), cat]
    );
    res.status(201).json({ id: result.insertId, text: text.trim(), cat, done: false });
  } catch (error) {
    console.error("Erro ao criar tarefa:", error.message);
    res.status(500).json({ msg: "Não foi possível guardar a tarefa." });
  }
});

app.patch("/api/tarefas/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { done } = req.body;

  if (!Number.isInteger(id) || id < 1 || typeof done !== "boolean") {
    return res.status(400).json({ msg: "Indique uma tarefa e um estado válidos." });
  }

  try {
    const [result] = await pool.execute(
      "UPDATE tarefas SET concluida = ? WHERE id = ?",
      [done, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Tarefa não encontrada." });
    }
    res.status(200).json({ id, done });
  } catch (error) {
    console.error("Erro ao atualizar tarefa:", error.message);
    res.status(500).json({ msg: "Não foi possível atualizar a tarefa." });
  }
});

app.delete("/api/tarefas/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ msg: "Indique uma tarefa válida." });
  }

  try {
    const [result] = await pool.execute("DELETE FROM tarefas WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Tarefa não encontrada." });
    }
    res.status(200).json({ msg: "Tarefa removida." });
  } catch (error) {
    console.error("Erro ao remover tarefa:", error.message);
    res.status(500).json({ msg: "Não foi possível remover a tarefa." });
  }
});

async function start() {
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS tarefas (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      nome_tarefa VARCHAR(255) NOT NULL,
      categoria VARCHAR(40) NOT NULL DEFAULT 'Outros',
      concluida BOOLEAN NOT NULL DEFAULT FALSE,
      data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  app.listen(PORT, () => {
    console.log(`Tarefinha disponível em http://localhost:${PORT}`);
  });
}

start().catch(async (error) => {
  console.error("Não foi possível iniciar a aplicação ou ligar à base de dados:", error.message);
  await pool.end();
  process.exitCode = 1;
});