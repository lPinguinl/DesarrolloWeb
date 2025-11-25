// Compare Panel Logic
const openCompareBtn = document.getElementById("openCompare");
const closeCompareBtn = document.getElementById("closeCompare");
const comparePanel = document.getElementById("comparePanel");

openCompareBtn.addEventListener("click", () => {
    comparePanel.classList.add("show");
});

closeCompareBtn.addEventListener("click", () => {
    comparePanel.classList.remove("show");
});

// Optional: haptic-like tap feedback for mobile pressable elements
const pressables = document.querySelectorAll(".pressable");

pressables.forEach(el => {
    el.addEventListener("touchstart", () => {
        el.style.transform = "scale(0.96)";
    });

    el.addEventListener("touchend", () => {
        el.style.transform = "scale(1)";
        setTimeout(() => el.style.transform = "", 150);
    });
});
