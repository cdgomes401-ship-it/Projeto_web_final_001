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

    // Abre o modal como uma janela sobreposta (com o fundo escuro)
    openBtn.addEventListener('click', () => {
      modal.showModal();
    });

    // Fecha o modal ao clicar em Cancelar
    closeBtn.addEventListener('click', () => {
      modal.close();
    });

    // Processa os dados quando o formulário é submetido
    form.addEventListener('submit', (e) => {
      // Se não quiser usar o comportamento nativo de fechar no submit, 
      // pode usar e.preventDefault() aqui para validar com AJAX/Fetch.
      
      const email = document.getElementById('email').value;
      console.log('Tentativa de login com:', email);
      
      // Opcional: limpa os campos após fechar
      form.reset();
    });