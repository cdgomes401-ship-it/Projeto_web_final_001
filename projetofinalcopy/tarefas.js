const CAT_ICON = {
  Casa: "🏠",
  Autocuidado: "🌸",
  "Jardim": "🪴",
  Outros: "📦",
  WC: "🏠",
  "Sala de estar": "🏠"
};

let tasks = [];
let categories = [];
let activeCat = "todas";
let errorMessage = "";

async function requestTasks(path = "", options = {}) {
  const response = await fetch(`/api/tarefas${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options
  });
  const body = await response.json();

  if (!response.ok) {
    throw new Error(body.msg || "Não foi possível concluir a operação.");
  }

  return body;
}


async function loadTasks() {
  try {
    const [loadedTasks, loadedCategories] = await Promise.all([
      requestTasks(),
      requestTasks("/categorias")
    ]);
    tasks = loadedTasks;
    categories = loadedCategories;
    if (activeCat !== "todas" && !categories.includes(activeCat)) {
      activeCat = "todas";
    }
    errorMessage = "";
  } catch (error) {
    errorMessage = error.message;
  }

  render();
}

function render() {
  const completedOnly = document.getElementById("completed-only").checked;
  const visible = tasks.filter((task) =>
    (activeCat === "todas" || (task.cat === activeCat)) &&
    (!completedOnly || task.done)
  );
  const listEl = document.getElementById("task-list");
  const filtersEl = document.getElementById("cat-filters");
  const categoryInput = document.getElementById("cat-input");
  const xpBar = document.getElementById("xp-bar");
  const progressText = document.getElementById("progress-text");
  const progressPct = document.getElementById("progress-pct");

  filtersEl.replaceChildren();
  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = `cat-btn${activeCat === "todas" ? " active" : ""}`;
  allButton.dataset.cat = "todas";
  allButton.textContent = "Todas";
  filtersEl.appendChild(allButton);
  categories.forEach((categoryName) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `cat-btn${activeCat === categoryName ? " active" : ""}`;
    button.dataset.cat = categoryName;
    button.textContent = `${CAT_ICON[categoryName] || "📦"} ${categoryName}`;
    filtersEl.appendChild(button);
  });

  const selectedCategory = categoryInput.value;
  categoryInput.replaceChildren();
  const availableCategories = categories.length > 0 ? categories : ["Outros"];
  availableCategories.forEach((categoryName) => {
    const option = document.createElement("option");
    option.value = categoryName;
    option.textContent = `${CAT_ICON[categoryName] || "📦"} ${categoryName}`;
    categoryInput.appendChild(option);
  });
  if (availableCategories.includes(selectedCategory)) {
    categoryInput.value = selectedCategory;
  }

  listEl.replaceChildren();

  if (errorMessage) {
    const message = document.createElement("p");
    message.className = "empty-msg";
    message.setAttribute("role", "alert");
    message.textContent = errorMessage;
    listEl.appendChild(message);
  } else if (visible.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-msg";
    message.textContent = "Nenhuma tarefa aqui ainda. Adicione uma acima 🌱";
    listEl.appendChild(message);
  }

  visible.forEach((task) => {
    const row = document.createElement("div");
    row.className = `item-frame${task.done ? " done" : ""}`;

    const check = document.createElement("button");
    check.type = "button";
    check.className = "check";
    check.dataset.id = task.id;
    check.setAttribute("aria-label", task.done ? "Marcar como por fazer" : "Concluir tarefa");
    check.setAttribute("aria-pressed", String(task.done));
    check.textContent = task.done ? "✓" : "";

    const details = document.createElement("div");
    details.style.flex = ".8";

    const text = document.createElement("div");
    text.className = "task-text";
    text.textContent = task.text;

    const category = document.createElement("div");
    category.className = "task-cat";
    category.textContent = `${CAT_ICON[task.cat] || "📦"} ${task.cat}`;
    category.style.flex = "1";

    const estimatedTime = document.createElement("div");
    estimatedTime.className = "task-time";
    estimatedTime.textContent = task.tempo_estimado_min > 0
      ? `⏱ Estimativa: ${task.tempo_estimado_min} min`
      : "⏱ Sem estimativa";

    const controls = document.createElement("div");
    controls.className = "task-controls";

    const priority = document.createElement("select");
    priority.className = "task-field";
    priority.id = `task-priority-${task.id}`;
    priority.dataset.id = task.id;
    priority.dataset.field = "prioridade";
    [
      [1, "1 - Muito alta"],
      [2, "2 - Alta"],
      [3, "3 - Média"],
      [4, "4 - Normal"]
    ].forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      priority.appendChild(option);
    });
    priority.value = String(task.prioridade);

    const energy = document.createElement("select");
    energy.className = "task-field";
    energy.id = `task-energy-${task.id}`;
    energy.dataset.id = task.id;
    energy.dataset.field = "nivel_energia";
    [
      [0, "0 - Muito baixa"],
      [1, "1 - Baixa"],
      [2, "2 - Média"],
      [3, "3 - Alta"]
    ].forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      energy.appendChild(option);
    });
    energy.value = String(task.nivel_energia);
    const timerButton = document.createElement("button");
    timerButton.type = "button";
    timerButton.className = "timer-open";
    timerButton.dataset.id = task.id;
    timerButton.textContent = "⏱ Timer";
    timerButton.setAttribute("aria-label", `Abrir timer para ${task.text}`);
    //controls.append(priority, energy, timerButton);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-btn";
    remove.dataset.id = task.id;
    remove.setAttribute("aria-label", "Remover tarefa");
    remove.textContent = "✕";

    const priorityGroup = document.createElement("div");
    priorityGroup.className = "task-field-group";
    const priorityLabel = document.createElement("label");
    priorityLabel.className = "task-field-label";
    priorityLabel.htmlFor = priority.id;
    priorityLabel.textContent = "Prioridade";
    priorityGroup.append(priorityLabel, priority);

    const energyGroup = document.createElement("div");
    energyGroup.className = "task-field-group";
    const energyLabel = document.createElement("label");
    energyLabel.className = "task-field-label";
    energyLabel.htmlFor = energy.id;
    energyLabel.textContent = "Energia";
    energyGroup.append(energyLabel, energy);

    details.append(text, estimatedTime);
    row.append(check, details, category, priorityGroup, energyGroup, timerButton, remove);
    listEl.appendChild(row);
  });

  const done = visible.filter((visible) => visible.done).length;
  const pct = visible.length === 0 ? 0 : Math.round((done / visible.length) * 100);
  progressText.textContent = `${done} de ${visible.length} tarefas concluídas hoje`;
  progressPct.textContent = `${pct}%`;

  xpBar.replaceChildren();
  for (let index = 0; index < 10; index += 1) {
    const segment = document.createElement("div");
    segment.className = `xp-seg${index < Math.round((pct / 100) * 10) ? " filled" : ""}`;
    xpBar.appendChild(segment);
  }
}

const timerDialog = document.getElementById("timer-dialog");
const timerTaskName = document.getElementById("timer-task-name");
const timerDisplay = document.getElementById("timer-display");
const timerMinutes = document.getElementById("timer-minutes");
const timerError = document.getElementById("timer-error");
let timerTaskId = null;
let timerRemaining = 0;
let timerInterval;

function updateTimerDisplay() {
  const minutes = Math.floor(timerRemaining / 60);
  const seconds = timerRemaining % 60;
  timerDisplay.textContent = timerRemaining > 0
    ? `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    : "Acabou!";
}

function readTimerMinutes() {
  const minutes = Number(timerMinutes.value);
  if (!Number.isInteger(minutes) || minutes < 1 || minutes > 2147483647) {
    timerError.textContent = "Indique uma duração válida, superior a zero.";
    return null;
  }

  timerError.textContent = "";
  return minutes;
}

function resetTimer() {
  clearInterval(timerInterval);
  const minutes = readTimerMinutes();
  if (minutes === null) {
    timerRemaining = 0;
    timerDisplay.textContent = "00:00";
    return false;
  }

  timerRemaining = minutes * 60;
  updateTimerDisplay();
  return true;
}

function openTaskTimer(task) {
  timerTaskId = String(task.id);
  timerTaskName.textContent = task.text;
  timerMinutes.value = String(task.tempo_estimado_min > 0 ? task.tempo_estimado_min : 5);
  timerError.textContent = "";
  resetTimer();
  timerDialog.showModal();
}

document.getElementById("task-list").addEventListener("click", async (event) => {
  const timerButton = event.target.closest(".timer-open");
  if (timerButton) {
    const task = tasks.find((item) => String(item.id) === timerButton.dataset.id);
    if (task) openTaskTimer(task);
    return;
  }

  const check = event.target.closest(".check");
  const remove = event.target.closest(".remove-btn");
  const taskId = check?.dataset.id || remove?.dataset.id;

  if (!taskId) return;

  try {
    if (check) {
      const task = tasks.find((item) => String(item.id) === taskId);
      if (!task) return;
      await requestTasks(`/${taskId}`, {
        method: "PATCH",
        body: JSON.stringify({ done: !task.done })
      });
    } else if (remove) {
      await requestTasks(`/${taskId}`, { method: "DELETE" });
    }
    await loadTasks();
  } catch (error) {
    errorMessage = error.message;
    render();
  }
});

document.getElementById("timer-start").addEventListener("click", () => {
  if (!resetTimer()) return;

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerRemaining -= 1;
    updateTimerDisplay();
    if (timerRemaining <= 0) clearInterval(timerInterval);
  }, 1000);
});

document.getElementById("timer-reset").addEventListener("click", resetTimer);

document.getElementById("timer-close").addEventListener("click", () => {
  timerDialog.close();
});

timerDialog.addEventListener("close", () => {
  clearInterval(timerInterval);
  timerTaskId = null;
});

document.getElementById("timer-save").addEventListener("click", async () => {
  if (!timerTaskId) return;

  const minutes = readTimerMinutes();
  if (minutes === null) return;
  const saveButton = document.getElementById("timer-save");
  saveButton.disabled = true;
  timerError.textContent = "";
  try {
    await requestTasks(`/${timerTaskId}`, {
      method: "PATCH",
      body: JSON.stringify({ tempo_estimado_min: minutes })
    });
    timerDialog.close();
    await loadTasks();
  } catch (error) {
    timerError.textContent = error.message;
  } finally {
    saveButton.disabled = false;
  }
});

document.getElementById("task-list").addEventListener("change", async (event) => {
  const field = event.target.closest(".task-field");
  if (!field) return;

  try {
    await requestTasks(`/${field.dataset.id}`, {
      method: "PATCH",
      body: JSON.stringify({ [field.dataset.field]: Number(field.value) })
    });
    await loadTasks();
  } catch (error) {
    errorMessage = error.message;
    render();
  }
});

document.getElementById("cat-filters").addEventListener("click", (event) => {
  const button = event.target.closest(".cat-btn");
  if (!button) return;

  activeCat = button.dataset.cat;
  render();
});

document.getElementById("completed-only").addEventListener("change", render);

document.querySelector('a[href="#form-nova-tarefa"]').addEventListener("click", (event) => {
  event.preventDefault();
  const form = document.getElementById("form-nova-tarefa");
  form.scrollIntoView({ behavior: "smooth", block: "end" });
  document.getElementById("input-nova-tarefa").focus({ preventScroll: true });
});

document.getElementById("form-nova-tarefa").addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = document.getElementById("input-nova-tarefa");
  const category = document.getElementById("cat-input");
  const priority = document.getElementById("priority-input");
  const energy = document.getElementById("energy-input");
  const text = input.value.trim();
  if (!text) return;

  try {
    await requestTasks("", {
      method: "POST",
      body: JSON.stringify({
        text,
        cat: category.value,
        prioridade: Number(priority.value),
        nivel_energia: Number(energy.value)
      })
    });
    event.target.reset();
    await loadTasks();
  } catch (error) {
    errorMessage = error.message;
    render();
  }
});

const focusTaskText = document.getElementById("focus-task-text");
const focusActions = document.getElementById("focus-actions");
const overlay = document.getElementById("overlay");

function currentFocusTask() {
  return tasks.find((task) => !task.done);
}

function renderFocus() {
  const task = currentFocusTask();
  if (!task) {
    focusTaskText.textContent = "Tudo feito por aqui 🎉";
    focusActions.style.display = "none";
    return;
  }

  focusTaskText.textContent = `${CAT_ICON[task.cat] || "📦"} ${task.text}`;
  focusActions.style.display = "flex";
}

document.getElementById("focus-btn").addEventListener("click", () => {
  renderFocus();
  overlay.classList.remove("hidden");
});

document.getElementById("focus-close").addEventListener("click", () => {
  overlay.classList.add("hidden");
  render();
});

document.getElementById("focus-done").addEventListener("click", async () => {
  const task = currentFocusTask();
  if (!task) return;

  try {
    await requestTasks(`/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify({ done: true })
    });
    await loadTasks();
    renderFocus();
  } catch (error) {
    errorMessage = error.message;
    render();
  }
});

document.getElementById("focus-skip").addEventListener("click", () => {
  const task = currentFocusTask();
  if (!task) return;

  tasks = tasks.filter((item) => item.id !== task.id);
  tasks.push(task);
  renderFocus();
});

loadTasks();
/*
login.addEventListener("click", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!password) return;

  try {
    const resposta = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    event.target.reset();
    console.log(resposta);
  } catch (error) {
    errorMessage = error.message;
  }
  console.log("Deu certo");
  window.location.href = "/Tarefas_Prototipo.html"
});
*/