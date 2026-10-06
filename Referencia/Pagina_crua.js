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