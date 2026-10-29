const CAT_ICON = {
  Casa: "🏠",
  Autocuidado: "🌸",
  "Plantas & Bichos": "🪴",
  Outros: "📦",
  WC : "🏠",
  "Sala de estar" : "🏠"
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
  const visible = activeCat === "todas"
    ? tasks
    : tasks.filter((task) => task.cat === activeCat);
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
    details.style.flex = "1";

    const text = document.createElement("div");
    text.className = "task-text";
    text.textContent = task.text;

    const category = document.createElement("div");
    category.className = "task-cat";
    category.textContent = `${CAT_ICON[task.cat] || "📦"} ${task.cat}`;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-btn";
    remove.dataset.id = task.id;
    remove.setAttribute("aria-label", "Remover tarefa");
    remove.textContent = "✕";

    details.append(text, category);
    row.append(check, details, remove);
    listEl.appendChild(row);
  });

  const done = tasks.filter((task) => task.done).length;
  const pct = tasks.length === 0 ? 0 : Math.round((done / tasks.length) * 100);
  progressText.textContent = `${done} de ${tasks.length} tarefas concluídas hoje`;
  progressPct.textContent = `${pct}%`;

  xpBar.replaceChildren();
  for (let index = 0; index < 10; index += 1) {
    const segment = document.createElement("div");
    segment.className = `xp-seg${index < Math.round((pct / 100) * 10) ? " filled" : ""}`;
    xpBar.appendChild(segment);
  }
}

document.getElementById("task-list").addEventListener("click", async (event) => {
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
    } else {
      await requestTasks(`/${taskId}`, { method: "DELETE" });
    }
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

document.getElementById("add-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = document.getElementById("task-input");
  const category = document.getElementById("cat-input");
  const text = input.value.trim();
  if (!text) return;

  try {
    await requestTasks("", {
      method: "POST",
      body: JSON.stringify({ text, cat: category.value })
    });
    input.value = "";
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
