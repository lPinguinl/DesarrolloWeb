document.addEventListener('DOMContentLoaded', function () {
    const historyExpanded = document.getElementById('history-expanded');
    const buttonIcon = document.getElementById('buttonIcon');
    const buttonText = document.getElementById('buttonText');

    if (historyExpanded && buttonIcon && buttonText) {
        

        // Escucha el evento cuando el colapso comienza a ocultarse (hide.bs.collapse)
        historyExpanded.addEventListener('hide.bs.collapse', function () {
            buttonIcon.classList.remove('bi-chevron-up');
            buttonIcon.classList.add('bi-chevron-down');
            buttonText.textContent = 'View more';
        });
    }
});