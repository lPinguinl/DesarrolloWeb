// Back button simulation
document.querySelector(".back-btn").addEventListener("click", () => {
    window.history.back();
});

// Simple entry animation
window.addEventListener("load", () => {
    document.querySelectorAll(".stat-card").forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "0.4s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, i * 120);
    });
});
