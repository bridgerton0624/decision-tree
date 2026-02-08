// ===== ELEMENTS =====
const popup = document.getElementById("popup");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const bgMusic = document.getElementById("backgroundMusic");
const noBtn = document.getElementById("noBtn");

// ===== FUNCTIONS (GLOBAL) =====

function closePopup() {
    popup.style.display = "none";
}

function selectYes() {
    bgMusic.play().catch(() => {});
    page1.classList.remove("active");
    page2.classList.add("active");

    if (typeof confetti === "function") {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
}

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function handleNoClick() {
    alert("Nice try 😏");
}

function selectChoice(choice) {
    if (choice === "kiss") alert("💋 Kiss incoming!");
    if (choice === "date") alert("🌹 Date night confirmed! - Tell me where");
    if (choice === "shopping") alert("🛍️ Wallet crying already! - Aab to le chal");
}
