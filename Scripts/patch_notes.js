const patches = {
    "1.3": `
        <div class='patch-card'>
            <h2 class='section-title'>Summary</h2>
            <p>This update reworks several merge units, improves late-game performance, and adds new tactical options.</p>

            <h2 class='section-title'>New Features</h2>
            <ul>
                <li>Added new <strong>Chain Lightning Mage</strong>.</li>
                <li>New emote for 5 win streak.</li>
            </ul>

            <h2 class='section-title'>Unit Reworks</h2>
            <ul>
                <li><strong>Archer</strong>: +8% attack speed.</li>
                <li><strong>Bomber</strong>: +20% explosion radius.</li>
                <li><strong>Knight</strong>: Gains shield on merge.</li>
            </ul>

            <h2 class='section-title'>UI / UX</h2>
            <ul>
                <li>Improved merge animation.</li>
                <li>Added Tier bonus tooltips.</li>
            </ul>

            <h2 class='section-title'>Bug Fixes</h2>
            <ul>
                <li>Fixed merge attack bug.</li>
                <li>Fixed icon overlap on mobile.</li>
            </ul>
        </div>
    `,
    "1.2": `
        <div class='patch-card'>
            <h2 class='section-title'>Summary</h2>
            <p>Balance-focused patch improving fairness across Tier 1-3 gameplay.</p>

            <h2 class='section-title'>Balance Changes</h2>
            <ul>
                <li><strong>Archer</strong>: -5% damage.</li>
                <li><strong>Ice Wizard</strong>: Longer slow.</li>
                <li><strong>Giant Skeleton</strong>: +10% bomb damage.</li>
            </ul>

            <h2 class='section-title'>Performance</h2>
            <ul><li>Improved swarm FPS.</li></ul>

            <h2 class='section-title'>Bug Fixes</h2>
            <ul>
                <li>Fixed drag-crash.</li>
                <li>Fixed looping victory sound.</li>
            </ul>
        </div>
    `,
    "1.1": `
        <div class='patch-card'>
            <h2 class='section-title'>Bug Fixes</h2>
            <ul>
                <li>Fixed merging at max population.</li>
                <li>Fixed Tier icons on Android.</li>
                <li>Fixed melee pathfinding.</li>
            </ul>

            <h2 class='section-title'>Performance</h2>
            <ul>
                <li>Reduced memory usage.</li>
            </ul>
        </div>
    `
};

const container = document.getElementById("patchContainer");
const dropdown = document.getElementById("dropdown");
const dropdownSelected = document.getElementById("dropdownSelected");
const dropdownOptions = document.getElementById("dropdownOptions");

function loadPatchNotes(version = "1.3") {
    container.innerHTML = patches[version];
}

dropdownSelected.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});

dropdownOptions.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
        dropdownSelected.textContent = item.textContent;
        loadPatchNotes(item.getAttribute("data-value"));
        dropdown.classList.remove("open");
    });
});

document.addEventListener("click", e => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove("open");
});

loadPatchNotes();
