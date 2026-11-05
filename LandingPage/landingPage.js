const nuvem = document.querySelectorAll(".pixel-cloud");
let updatePending = false;

function updateCloudPosition() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  const horizontalShift = `${scrollProgress * window.innerWidth * 0.6}px`;

  nuvem.forEach((nuvem) => {
    nuvem.style.setProperty("--cloud-shift", horizontalShift);
  });

  updatePending = false;
}

function requestCloudPositionUpdate() {
  if (!updatePending) {
    window.requestAnimationFrame(updateCloudPosition);
    updatePending = true;
  }
}

window.addEventListener("scroll", requestCloudPositionUpdate, { passive: true });
window.addEventListener("resize", requestCloudPositionUpdate);
updateCloudPosition();

const modal = document.getElementById('loginModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const form = document.getElementById('loginForm');
const pickaxe = document.querySelector('#picareta_imag img');
const loginButton = form.querySelector('.login-btn');
const loginStatus = document.createElement('p');
loginStatus.id = 'login-status';
loginStatus.setAttribute('role', 'alert');
form.appendChild(loginStatus);

form.addEventListener('input', (event) => {
  if (!(event.target instanceof HTMLInputElement) || event.target.type === 'checkbox') {
    return;
  }

  pickaxe.classList.remove('swing');
  void pickaxe.offsetWidth;
  pickaxe.classList.add('swing');
});

    // Abre o modal como uma janela sobreposta (com o fundo escuro)
    openBtn.addEventListener('click', () => {
      modal.showModal();
    });

    // Fecha o modal ao clicar em Cancelar
    closeBtn.addEventListener('click', () => {
      modal.close();
    });

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginStatus.textContent = "";
  loginButton.disabled = true;
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value
      })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Não foi possível iniciar sessão.");
    }

    window.location.href = "/Tarefas_Prototipo.html";
  } catch (error) {
    loginStatus.textContent = error.message || "Erro ao comunicar com o servidor.";
    loginButton.disabled = false;
  }
});