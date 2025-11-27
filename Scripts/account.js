// Nuevo JS para funcionar con la funcionalidad nativa de Bootstrap Collapse
// Y SOLUCIONAR EL BUG DE LOS ACORDEONES INTERNOS

// 1. Obtener los elementos HTML
const collapseElement = document.getElementById('history-expanded'); // El contenedor colapsable principal
const buttonText = document.getElementById('buttonText');           // El span con el texto
const buttonIcon = document.getElementById('buttonIcon');           // El icono

// 2. Escuchar el evento de 'mostrar' (SHOW) de Bootstrap
if (collapseElement) {
    collapseElement.addEventListener('show.bs.collapse', function (event) {
        // SOLUCIÓN: Solo cambia el texto si el elemento que se está abriendo es el contenedor principal
        if (event.target === collapseElement) {
            if (buttonText) buttonText.textContent = 'View less';
            if (buttonIcon) {
                buttonIcon.classList.remove('bi-chevron-down');
                buttonIcon.classList.add('bi-chevron-up');
            }
        }
    });

    // 3. Escuchar el evento de 'ocultar' (HIDE) de Bootstrap
    collapseElement.addEventListener('hide.bs.collapse', function (event) {
        // SOLUCIÓN: Solo cambia el texto si el elemento que se está cerrando es el contenedor principal
        if (event.target === collapseElement) {
            if (buttonText) buttonText.textContent = 'View more';
            if (buttonIcon) {
                buttonIcon.classList.remove('bi-chevron-up');
                buttonIcon.classList.add('bi-chevron-down');
            }
        }
    });
}