// Modal for modifier details
(function () {
    'use strict';


    function createModalMarkup() {
        const overlay = document.createElement('div');
        overlay.className = 'modifier-modal-overlay';
        overlay.innerHTML = `
            <div class="modifier-modal" role="dialog" aria-modal="true">
                <img src="" alt="modal image" class="modal-image">
                <div class="modal-content modal-fields"></div>
                <div>
                    <button class="modal-close" aria-label="Close">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        return overlay;
    }

    const overlay = createModalMarkup();
    const modalImage = overlay.querySelector('.modal-image');
    const modalFields = overlay.querySelector('.modal-fields');
    const closeButton = overlay.querySelector('.modal-close');

    function openModalFromElement(el) {
        // Modifier or troop
        if (el.classList.contains('modifier-item')) {
            const name = el.getAttribute('data-name') || el.querySelector('p')?.textContent || '';
            const effect = el.getAttribute('data-effect') || '';
            const league = el.getAttribute('data-league') || '';
            const image = el.getAttribute('data-image') || el.querySelector('img')?.src || '';
            modalFields.innerHTML = `
                <h2 class="modal-title">${name}</h2>
                <p class="modal-effect">${effect}</p>
                <p class="modal-league">${league ? 'League: ' + league : ''}</p>
            `;
            modalImage.src = image;
            modalImage.alt = name;
        } else if (el.classList.contains('unit-card')) {
            // Troop card
            const name = el.getAttribute('data-name') || el.querySelector('.unit-name')?.textContent || '';
            const cost = el.getAttribute('data-cost') || '';
            const trait1 = el.getAttribute('data-trait1') || '';
            const trait2 = el.getAttribute('data-trait2') || '';
            const hitpoints = el.getAttribute('data-hitpoints') || '';
            const damage = el.getAttribute('data-damage') || '';
            const speed = el.getAttribute('data-speed') || '';
            const range = el.getAttribute('data-range') || '';
            const hitspeed = el.getAttribute('data-hitspeed') || '';
            const image = el.getAttribute('data-image') || el.querySelector('img')?.src || '';
            modalFields.innerHTML = `
                <h2 class="modal-title">${name}</h2>
                <p><strong>Cost:</strong> ${cost}</p>
                <p><strong>Traits:</strong> ${trait1} / ${trait2}</p>
                <p><strong>Hitpoints:</strong> ${hitpoints}</p>
                <p><strong>Damage:</strong> ${damage}</p>
                <p><strong>Speed:</strong> ${speed}</p>
                <p><strong>Range:</strong> ${range}</p>
                <p><strong>Hit Speed:</strong> ${hitspeed}</p>
            `;
            modalImage.src = image;
            modalImage.alt = name;
        }

        overlay.classList.add('open');
        closeButton.focus();
        document.addEventListener('keydown', onKeyDown);
    }

    function closeModal() {
        overlay.classList.remove('open');
        document.removeEventListener('keydown', onKeyDown);
    }
    function onKeyDown(e) {
        if (e.key === 'Escape') closeModal();
    }
    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });

    function init() {
        // Modifier items
        document.querySelectorAll('.modifier-item').forEach(item => {
            const link = item.closest('a');
            if (link) {
                link.addEventListener('click', function (evt) {
                    evt.preventDefault();
                    openModalFromElement(item);
                });
            } else {
                item.addEventListener('click', function (evt) {
                    openModalFromElement(item);
                });
            }
        });
        // Troop cards
        document.querySelectorAll('.unit-card').forEach(card => {
            const link = card.closest('a');
            if (link) {
                link.addEventListener('click', function (evt) {
                    evt.preventDefault();
                    openModalFromElement(card);
                });
            } else {
                card.addEventListener('click', function (evt) {
                    openModalFromElement(card);
                });
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
