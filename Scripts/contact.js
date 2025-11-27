// 💡 CAMBIO 1: Inicialización de AOS
AOS.init({
    duration: 800, // Duración de 0.8s para igualar la animación anterior
    once: true     // Para que la animación se ejecute solo una vez al hacer scroll
});


const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
e.preventDefault();

let isValid = true;

clearErrors();

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

if (name.value.trim().length < 3) {
setError(name, "Name must be at least 3 characters.");
isValid = false;
}

if (!email.value.trim().match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
setError(email, "Enter a valid email address.");
isValid = false;
}

if (message.value.trim().length < 10) {
setError(message, "Message must be at least 10 characters.");
isValid = false;
}

if (isValid) {
form.reset();
alert("Your message has been sent successfully!");
}
});

function setError(input, message) {
const group = input.parentElement;
const error = group.querySelector('.error');
error.textContent = message;

input.style.borderColor = "var(--royal-red)"; 
}

function clearErrors() {
document.querySelectorAll('.error').forEach(e => e.textContent = "");
document.querySelectorAll('input, textarea').forEach(input => {
input.style.borderColor = "var(--blue-dark)"; 
});
}