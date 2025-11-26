document.addEventListener('DOMContentLoaded', () => {

    // Logic to change the History button text (View more / View less)
    const historyCollapse = document.getElementById('history-expanded');
    const historyBtn = document.querySelector('button[data-bs-target="#history-expanded"]');

    if(historyCollapse && historyBtn) {
        historyCollapse.addEventListener('show.bs.collapse', () => {
            historyBtn.innerHTML = 'View less <i class="bi bi-chevron-up"></i>';
        });

        historyCollapse.addEventListener('hide.bs.collapse', () => {
            historyBtn.innerHTML = 'View more <i class="bi bi-chevron-down"></i>';
        });
    }


});