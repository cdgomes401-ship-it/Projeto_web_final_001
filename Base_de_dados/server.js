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

//Coletar dados do html
//const input = document.querySelector('task-input');


app.use(express.json());
 
// - CONFIGURAÇÃO MYSQL
const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    port:process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit:0
})
 

const tarefas = [
   {
    id: 1,
    nome_tarefa: "Criar uma tarefa",
    frequencia: "diario",
    prioridade: 1, //'1 = mais alta, 4 = normal',
    favorita: false,
    tempo_estimado_min: 1,// 'minutos',
    nivel_energia: 0, // '0 = pouca energia, 3 = muita energia'
    divisao: "WC",
    data_criacao: "2026-05-18T17:25:00.000Z", 
    data_ultima_vez_feita: "2026-05-18T17:25:00.000Z",
  },
  
];
 
app.get("/", (req, res) => {
  res.send("Olá mundo");
});
 

async function carregarTarefas() {

  const resposta = await fetch('/api/tarefas');

  const tarefas = await resposta.json();
 
  const lista = document.getElementById('listaTarefas');

  tarefas.forEach((t) => {

    const li = document.createElement('li');

    li.textContent = t.descricao;

    lista.appendChild(li);

  });

}
 
//carregarTarefas();
 

// --- GET /api/tarefas ---
app.get("/api/tarefas", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM musica");

    res.status(200).json(rows);
  } catch (error) {
    console.log("Erro GET /api/musicas", error.message);
    res.status(500).json({ Erro: "Erro ao tentar encontrar a música" });
  }
});
 
// --- GET /api/tarefas ---  encontrar uma música em especifico
app.get("/api/tarefas/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const [musica] = await pool.execute(
      "SELECT * FROM musica WHERE id = ?", [id]
      //'SELECT * FROM musica WHERE id = ${id}'  CUIDADO PODE SER USADO MAS ABRE PARA COLOCAR UM HTML E INTERFERIR NO SERVIDOR APAGANDO OU COLETANDO
    );
    if(musica.length === 0){
      res.status(404).json({msg: "Música não existe"});
    }
    res.status(200).json(musica);
  } catch (error) {
    console.log("Erro GET /api/musicas/id", error.message);
    res.status(500).json({ Erro: "Erro ao tentar encontrar a música" });
  }
});
// --- POST /api/tarefas ---  Criar uma nova música
app.post("/api/tarefas", async (req, res) => {
  const { titulo, artista, genero, ano } = req.body;
 
  if (!titulo || !artista || !genero || !ano) {
    res.status(400).json({ msg: "Insira todos os dados" });
  }
 
  try {
    const [resultado] = await pool.execute(
      `INSERT INTO musica (titulo, artista, genero, ano) VALUES(?, ?, ?, ?)`,
      [titulo, artista, genero, ano],
    );
    res.status(200).json(resultado);
  } catch (error) {
    console.log("Erro POST /api/musicas", error.message);
    res.status(500).json({ Erro: "Erro ao tentar encontrar a música" });
  }
 
  res.status(201).json({});
});
 
 
// --- PUT /api/tarefas ---  Atualizar uma  música
 
app.put("/api/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);
  const musica = musicas.find((m) => m.id === id);
 
  if (!musica) return res.status(404).json({ msg: "Música não existe!" });
 
  musica.titulo = req.body.titulo || musica.titulo;
  musica.artista = req.body.artista || musica.artista;
  musica.genero = req.body.genero || musica.genero;
  musica.ano = req.body.ano || musica.ano;
 
  res.status(200).json({ msg: "Música foi atualizada", musica: musica });
});

// --- PATCH /api/tarefas/:id/favorita ---
 
app.patch("/api/tarefas/:id/favorita", (req, res) => {
  const id = Number(req.params.id);
  const musica = musicas.find((m) => m.id === id);
 
  if (!musica) return res.status(404).json({ msg: "Música não existe!" });
 
  musica.favorita = !musica.favorita;
 
  res
    .status(200)
    .json({ msg: "Música foi atualizada para " + musica.favorita });
});

// --- DELETE /api/tarefas ---  Eliminar uma  música
 
app.delete("/api/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = musicas.findIndex((m) => m.id === id);
 
  if (indice === -1) return res.status(404).json({ msg: "Música não existe!" });
 
  musicas.splice(indice, 1);
 
  res.status(200).json({ msg: "Música foi eliminada" });
});

app.listen(PORT, async () => {
  console.log(`Servidor a rolar na porta ${PORT}`);
  try {
    await pool.execute("SELECT 1");
    console.log("Ligação ao MYSQL efetuada com sucesso");
  } catch (error) {
    console.log(error);
  }
});
 

//----------------------------------------

  const CAT_ICON = {
    "Casa": "🏠",
    "Autocuidado": "🌸",
    "Plantas & Bichos": "🪴",
    "Outros": "📦"
  };

  let tasks = [
    { id: 1, text: "Regar as plantas", cat: "Plantas & Bichos", done: false },
    { id: 2, text: "Alimentar o cachorro", cat: "Plantas & Bichos", done: false },
    { id: 3, text: "Passar aspirador atrás do sofá", cat: "Casa", done: false },
    { id: 4, text: "Beber um copo de água", cat: "Autocuidado", done: false },
    { id: 5, text: "Noite de jogos em família", cat: "Outros", done: false }
  ];

  let activeCat = "todas";
  let nextId = 6;




  function render(){
    const visible = activeCat === "todas" ? tasks : tasks.filter(t => t.cat === activeCat);
    
    const listEl = document.getElementById("task-list");
    const xpBar = document.getElementById("xp-bar");
    const progressText = document.getElementById("progress-text");
    const progressPct = document.getElementById("progress-pct");
    const overlay = document.getElementById("overlay");



    listEl.innerHTML = "";
    if(visible.length === 0){
      listEl.innerHTML = '<p class="empty-msg">Nenhuma tarefa aqui ainda. Adicione uma acima 🌱</p>';
    }

    visible.forEach(t => {
      const row = document.createElement("div");
      row.className = "item-frame" + (t.done ? " done" : "");
      row.innerHTML = `
        <div class="check" data-id="${t.id}">${t.done ? "✓" : ""}</div>
        <div style="flex:1">
          <div class="task-text">${t.text}</div>
          <div class="task-cat">${CAT_ICON[t.cat]} ${t.cat}</div>
        </div>
        <button class="remove-btn" data-id="${t.id}" aria-label="Remover tarefa">✕</button>
      `;
      listEl.appendChild(row);
    });

    const total = tasks.length;
    const done = tasks.filter(t => t.done).length;
    const pct = total === 0 ? 0 : Math.round((done/total)*100);

    progressText.textContent = `${done} de ${total} tarefas concluídas hoje`;
    progressPct.textContent = `${pct}%`;

    xpBar.innerHTML = "";
    const segments = 10;
    const filledSegments = Math.round((pct/100) * segments);
    for(let i=0; i<segments; i++){
      const seg = document.createElement("div");
      seg.className = "xp-seg" + (i < filledSegments ? " filled" : "");
      xpBar.appendChild(seg);
    }
  }

  listEl.addEventListener("click", (e) => {
    const listEl = document.getElementById("task-list");



    const checkEl = e.target.closest(".check");
    const removeEl = e.target.closest(".remove-btn");
    if(checkEl){
      const id = Number(checkEl.dataset.id);
      const t = tasks.find(x => x.id === id);
      if(t) t.done = !t.done;
      render();
    }
    if(removeEl){
      const id = Number(removeEl.dataset.id);
      tasks = tasks.filter(x => x.id !== id);
      render();
    }
  });

  document.getElementById("cat-filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-btn");
    if(!btn) return;
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCat = btn.dataset.cat;
    render();
  });

  document.getElementById("add-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("task-input");
    const catInput = document.getElementById("cat-input");
    const text = input.value.trim();
    if(!text) return;
    tasks.push({ id: nextId++, text, cat: catInput.value, done: false });
    input.value = "";
    render();
  });

  const focusTaskText = document.getElementById("focus-task-text");
  const focusActions = document.getElementById("focus-actions");

  function currentFocusTask(){
    return tasks.find(t => !t.done);
  }

  function renderFocus(){
    const t = currentFocusTask();
    if(!t){
      focusTaskText.textContent = "Tudo feito por aqui 🎉";
      focusActions.style.display = "none";
    } else {
      focusTaskText.textContent = `${CAT_ICON[t.cat]} ${t.text}`;
      focusActions.style.display = "flex";
    }
  }

  document.getElementById("focus-btn").addEventListener("click", () => {
    renderFocus();
    overlay.classList.remove("hidden");
  });

  document.getElementById("focus-close").addEventListener("click", () => {
    overlay.classList.add("hidden");
    render();
  });

  document.getElementById("focus-done").addEventListener("click", () => {
    const t = currentFocusTask();
    if(t) t.done = true;
    renderFocus();
  });

  document.getElementById("focus-skip").addEventListener("click", () => {
    const t = currentFocusTask();
    if(t){
      tasks = tasks.filter(x => x.id !== t.id);
      tasks.push(t);
    }
    renderFocus();
  });

  render();