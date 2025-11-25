// Fake matches (simple)
const matches = [
    { id: 1, result: "Win", cardsYou: ["Card A", "Card B", "Card C"], cardsEnemy: ["Card X", "Card Y", "Card Z"] },
    { id: 2, result: "Loss", cardsYou: ["Card D", "Card E", "Card F"], cardsEnemy: ["Card M", "Card N", "Card O"] },
    { id: 3, result: "Win", cardsYou: ["Card G", "Card H", "Card I"], cardsEnemy: ["Card Q", "Card R", "Card S"] },
    { id: 4, result: "Win", cardsYou: ["Card J", "Card K", "Card L"], cardsEnemy: ["Card T", "Card U", "Card V"] },
    { id: 5, result: "Loss", cardsYou: ["Card P", "Card R", "Card T"], cardsEnemy: ["Card W", "Card Y", "Card Z"] }
];

// HISTORY (last match + 5 matches list)
document.getElementById("last-match").textContent =
    `Match #${matches[0].id} - ${matches[0].result}`;

document.getElementById("showMoreBtn").addEventListener("click", () => {
    const list = document.getElementById("history-list");
    list.classList.toggle("d-none");

    list.innerHTML = matches
        .slice(0, 5)
        .map(m => `
            <div class="history-card">Match #${m.id} - ${m.result}</div>
        `)
        .join("");

    document.getElementById("showMoreBtn").textContent =
        list.classList.contains("d-none") ? "Show last 5 matches" : "Hide";
});

// STATS (last 3 matches)
const statsContainer = document.getElementById("stats-container");

matches.slice(0, 3).forEach((m, index) => {
    const statCard = document.createElement("div");
    statCard.className = "stat-card";
    statCard.textContent = `Match #${m.id} - ${m.result}`;
    statsContainer.appendChild(statCard);

    // Details (hidden)
    const details = document.createElement("div");
    details.className = "stat-details d-none";
    details.innerHTML = `
        <strong>Your Cards:</strong> ${m.cardsYou.join(", ")}<br>
        <strong>Enemy Cards:</strong> ${m.cardsEnemy.join(", ")}<br>
        <strong>Result:</strong> ${m.result}
    `;
    statsContainer.appendChild(details);

    // Toggle
    statCard.addEventListener("click", () => {
        details.classList.toggle("d-none");
    });
});
