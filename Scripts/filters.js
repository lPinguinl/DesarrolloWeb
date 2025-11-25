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

// FILTER FUNCTION
function applyFilter(value) {
    items.forEach(item => {
        const categories = item.getAttribute("data-category").split(" ");

        if (value === "all" || categories.includes(value)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
