// Dropdown logic
const dropdown = document.getElementById("filterDropdown");
const selected = document.getElementById("filterSelected");
const optionsList = document.getElementById("filterOptions");
const items = document.querySelectorAll(".filter-item");

// Open / close dropdown
dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});

// Select a filter
optionsList.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", () => {
        const value = option.getAttribute("data-value");

        selected.textContent = option.textContent;
        dropdown.classList.remove("open");

        applyFilter(value);
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
    }
});

// Search input (exact or full-name contains rule)
const troopSearch = document.getElementById('troopSearch');
let activeSearch = '';

if (troopSearch) {
    troopSearch.addEventListener('input', (e) => {
        activeSearch = e.target.value.trim();
        applyCombinedFilter();
    });
}

// Track currently selected category
let currentCategory = 'all';

function applyFilter(value) {
    currentCategory = value;
    applyCombinedFilter();
}

function applyCombinedFilter() {
    items.forEach(item => {
        const categories = item.getAttribute('data-category').split(" ");
        const nameEl = item.querySelector('.unit-name') || item.querySelector('img');
        const name = (nameEl?.textContent || nameEl?.alt || '').trim();

        // Category check
        const categoryPass = (currentCategory === 'all') || categories.includes(currentCategory);

        // Search check: item stays visible only if search is empty OR search is a substring of the name (case-insensitive)
        let searchPass = true;
        if (activeSearch.length > 0) {
            const searchLower = activeSearch.toLowerCase();
            searchPass = name.toLowerCase().includes(searchLower);
        }

        item.style.display = (categoryPass && searchPass) ? 'block' : 'none';
    });
}

// Initialize to show all
applyCombinedFilter();
