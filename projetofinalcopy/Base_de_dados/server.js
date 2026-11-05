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
// PARA USUARIO
const bcrypt = require("bcrypt");
const session =require("express-session");
app.use(session({
  secret: "segredoSuperSecret",
  resave:false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: "lax"
  }
}));

const path = require("node:path");

require("dotenv").config({ path: path.join(__dirname, ".env") });



const landingPageDirectory = path.join(__dirname, "..", "LandingPage");
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
app.use(express.static(landingPageDirectory));
app.use(express.static(frontendDirectory));

app.get("/", (req, res) => {
  res.sendFile(path.join(landingPageDirectory, "landingPage.html")); /*Tarefas_Prototipo.html"));*/
});

app.get("/api/tarefas", async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT id, tarefa AS text, divisao AS cat, concluido AS done, prioridade, nivel_energia, tempo_estimado_min FROM tarefas ORDER BY id"
    );
    res.json(rows.map((task) => ({ ...task, done: Boolean(task.done) })));
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error.message);
    res.status(500).json({ msg: "Não foi possível carregar as tarefas." });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const [users] = await pool.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  console.log(users);
  const user = users[0];
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({
      message: "Login inválido"
    });
  }
  // Guardar o utilizador na sessão
  req.session.userId = users.id;
  res.json({ message: "Login efetuado!", user });
});

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  // Verificar se os campos foram preenchidos
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Preenche todos os campos"
    });
  }
  // Verificar se o email já existe
  const [users] = await pool.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  if (users.length > 0) {
    return res.status(409).json({
      message: "Email já registado"
    });
  }
  // Proteger a password
  const hash = await bcrypt.hash(password, 10);
  // Inserir utilizador na base de dados
  await pool.execute(
    "INSERT INTO users (nome_utilizador, email, password) VALUES (?, ?, ?)",
    [name, email, hash]
  );
  res.status(201).json({
    message: "Utilizador registado com sucesso!"
  });
});

app.get("/api/tarefas/categorias", async (req, res) => {

  try {
    const [rows] = await pool.execute(
      "SELECT DISTINCT divisao FROM tarefas WHERE id_user = ? and divisao IS NOT NULL AND divisao <> '' ORDER BY divisao", [req.session.id]
    );
    res.json(rows.map((row) => row.divisao));
  } catch (error) {
    console.error("Erro ao carregar categorias:", error.message);
    res.status(500).json({ msg: "Não foi possível carregar as categorias." });
  }
});

app.post("/api/tarefas", async (req, res) => {
  const { text, cat, prioridade, nivel_energia } = req.body;

  if (
    typeof text !== "string" ||
    !text.trim() ||
    typeof cat !== "string" ||
    !cat.trim() ||
    !Number.isInteger(prioridade) ||
    prioridade < 1 ||
    prioridade > 4 ||
    !Number.isInteger(nivel_energia) ||
    nivel_energia < 0 ||
    nivel_energia > 3
  ) {
    return res.status(400).json({ msg: "Indique uma tarefa, categoria, prioridade e energia válidas." });
  }

  try {
    const [categoryRows] = await pool.execute(
      "SELECT DISTINCT divisao FROM tarefas WHERE divisao IS NOT NULL AND divisao <> ''"
    );
    const categories = categoryRows.map((row) => row.divisao);
    if (!categories.includes(cat) && !(categories.length === 0 && cat === "Outros")) {
      return res.status(400).json({ msg: "Selecione uma categoria disponível." });
    }

    const [result] = await pool.execute(
      "INSERT INTO tarefas (tarefa, divisao, frequencia, prioridade, tempo_estimado_min, nivel_energia) VALUES (?, ?, 'Não definida', ?, 0, ?)",
      [text.trim(), cat, prioridade, nivel_energia]
    );
    res.status(201).json({
      id: result.insertId,
      text: text.trim(),
      cat,
      done: false,
      prioridade,
      nivel_energia
    });
  } catch (error) {
    console.error("Erro ao criar tarefa:", error.message);
    res.status(500).json({ msg: "Não foi possível guardar a tarefa." });
  }
});

app.patch("/api/tarefas/:id", async (req, res) => {
  const id = Number(req.params.id);
  const fields = [];
  const values = [];
  const { done, prioridade, nivel_energia, tempo_estimado_min } = req.body;

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ msg: "Indique uma tarefa válida." });
  }
  if (Object.hasOwn(req.body, "done")) {
    if (typeof done !== "boolean") {
      return res.status(400).json({ msg: "Indique um estado válido." });
    }
    fields.push("concluido = ?");
    values.push(done);
  }
  if (Object.hasOwn(req.body, "prioridade")) {
    if (!Number.isInteger(prioridade) || prioridade < 1 || prioridade > 4) {
      return res.status(400).json({ msg: "A prioridade deve estar entre 1 e 4." });
    }
    fields.push("prioridade = ?");
    values.push(prioridade);
  }
  if (Object.hasOwn(req.body, "nivel_energia")) {
    if (!Number.isInteger(nivel_energia) || nivel_energia < 0 || nivel_energia > 3) {
      return res.status(400).json({ msg: "O nível de energia deve estar entre 0 e 3." });
    }
    fields.push("nivel_energia = ?");
    values.push(nivel_energia);
  }
  if (Object.hasOwn(req.body, "tempo_estimado_min")) {
    if (!Number.isInteger(tempo_estimado_min) || tempo_estimado_min < 1 || tempo_estimado_min > 2147483647) {
      return res.status(400).json({ msg: "O tempo estimado deve ser um número inteiro de minutos superior a zero." });
    }
    fields.push("tempo_estimado_min = ?");
    values.push(tempo_estimado_min);
  }
  if (fields.length === 0) {
    return res.status(400).json({ msg: "Indique um estado, prioridade, nível de energia ou tempo estimado para atualizar." });
  }

  try {
    values.push(id);
    const [result] = await pool.execute(`UPDATE tarefas SET ${fields.join(", ")} WHERE id = ?`, values);
    if (result.affectedRows === 0) {
      const [rows] = await pool.execute("SELECT id FROM tarefas WHERE id = ?", [id]);
      if (rows.length === 0) {
        return res.status(404).json({ msg: "Tarefa não encontrada." });
      }
    }
    res.status(200).json({ id, done, prioridade, nivel_energia, tempo_estimado_min });
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
      id INT AUTO_INCREMENT PRIMARY KEY,
      divisao VARCHAR(50) NOT NULL COMMENT 'divisão da casa a que pertence a tarefa',
      tarefa VARCHAR(255) NOT NULL,
      frequencia VARCHAR(50) NOT NULL,
      prioridade INT NOT NULL COMMENT '1 = mais alta, 4 = normal',
      tempo_estimado_min INT NOT NULL COMMENT 'minutos',
      nivel_energia INT NOT NULL COMMENT '0 = pouca energia, 3 = muita energia',
      concluido BOOLEAN NOT NULL DEFAULT FALSE COMMENT 'FALSE = por concluir, TRUE = concluída',
      ultima_conclusao DATE NULL DEFAULT NULL COMMENT 'data da última conclusão (vazio por agora)',
      id_user int,
	    foreign key(id_user)
	    references users(id)
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

// post para registo
// post para login