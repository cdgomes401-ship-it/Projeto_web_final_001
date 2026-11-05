const registrationForm = document.getElementById("formularioRegisto");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");
const registrationMessage = document.getElementById("registrationMessage");
const submitButton = registrationForm.querySelector('button[type="submit"]');

function showRegistrationMessage(message, isError = false) {
  registrationMessage.textContent = message;
  registrationMessage.classList.toggle("error", isError);
  registrationMessage.hidden = false;
}

function passwordsMatch() {
  const match = passwordInput.value === confirmPasswordInput.value;
  passwordError.hidden = match || confirmPasswordInput.value.length === 0;
  return match;
}

confirmPasswordInput.addEventListener("input", passwordsMatch);
passwordInput.addEventListener("input", passwordsMatch);

registrationForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  registrationMessage.hidden = true;

  if (!passwordsMatch()) {
    confirmPasswordInput.focus();
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "A REGISTAR...";

  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementById("username").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: passwordInput.value
      })
    });
    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.message || "Não foi possível concluir o registo.");
    }

    window.location.assign("/Tarefas_Prototipo.html");
  } catch (error) {
    showRegistrationMessage(error.message, true);
    submitButton.disabled = false;
    submitButton.textContent = "REGISTAR";
  }
});