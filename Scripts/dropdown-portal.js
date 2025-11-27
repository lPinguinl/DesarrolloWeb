document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.dropdown-container');

    containers.forEach(container => {
        const selected = container.querySelector('.dropdown-selected') || container;
        const options = container.querySelector('.dropdown-options');
        if (!options) return;

        // Move the options list to the document body so it escapes parent stacking contexts
        if (options.parentElement !== document.body) {
            options.classList.add('portal');
            document.body.appendChild(options);
        }

        function positionOptions() {
            const rect = selected.getBoundingClientRect();
            const left = Math.max(8, rect.left + window.scrollX);
            const top = rect.bottom + window.scrollY + 8; // small offset

            options.style.left = `${left}px`;
            options.style.top = `${top}px`;
            options.style.width = `${rect.width}px`;
        }

        // Sync visibility when container is toggled by existing handlers
        container.addEventListener('click', () => {
            // allow other handlers to run first
            setTimeout(() => {
                if (container.classList.contains('open')) {
                    positionOptions();
                    options.classList.add('open');
                } else {
                    options.classList.remove('open');
                }
            }, 0);
        });

        // Close when clicking outside both the container and the moved options
        document.addEventListener('click', (e) => {
            if (!container.contains(e.target) && !options.contains(e.target)) {
                container.classList.remove('open');
                options.classList.remove('open');
            }
        });

        // When an option is clicked, also close the portal (existing page scripts may handle selection)
        options.addEventListener('click', (e) => {
            const li = e.target.closest && e.target.closest('li');
            if (li) {
                container.classList.remove('open');
                options.classList.remove('open');
            }
        });

        // Reposition on resize/scroll when open
        window.addEventListener('resize', () => { if (options.classList.contains('open')) positionOptions(); });
        window.addEventListener('scroll', () => { if (options.classList.contains('open')) positionOptions(); }, true);
    });
});
