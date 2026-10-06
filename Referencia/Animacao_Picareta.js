const picareta = document.querySelector(".picareta");
const nome = document.querySelector("#nome");
let rodada = false;

function movimento() {
    rodada = !rodada;
    picareta.style.transform = rodada ? "rotate(-45deg)" : "rotate(45deg)";
}
nome.addEventListener("input", movimento);