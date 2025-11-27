// 1. Inicialización de AOS
AOS.init({
    duration: 800, // Duración de 0.8s para igualar la animación anterior
    once: true     // Para que la animación se ejecute solo una vez al hacer scroll
});


// 2. Lógica para el botón "View more/View less" (Collapse de Bootstrap)

// Obtener los elementos HTML
const collapseElement = document.getElementById('history-expanded');
const buttonText = document.getElementById('buttonText');
const buttonIcon = document.getElementById('buttonIcon');

// Escuchar los eventos de Bootstrap
if (collapseElement) {
    collapseElement.addEventListener('show.bs.collapse', function (event) {
        // Solo cambia el texto si el elemento que se está abriendo es el contenedor principal
        if (event.target === collapseElement) {
            if (buttonText) buttonText.textContent = 'View less';
            if (buttonIcon) {
                buttonIcon.classList.remove('bi-chevron-down');
                buttonIcon.classList.add('bi-chevron-up');
            }
        }
    });

    collapseElement.addEventListener('hide.bs.collapse', function (event) {
        // Solo cambia el texto si el elemento que se está cerrando es el contenedor principal
        if (event.target === collapseElement) {
            if (buttonText) buttonText.textContent = 'View more';
            if (buttonIcon) {
                buttonIcon.classList.remove('bi-chevron-up');
                buttonIcon.classList.add('bi-chevron-down');
            }
        }
    });
}