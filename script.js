// script.js - Enhanced version

document.addEventListener("DOMContentLoaded", () => {

    // Element references
    const popup = document.getElementById("popup");
    const popupBtn = document.querySelector(".popup-btn");
    const countdownPopup = document.getElementById("countdownPopup");
    const timerDisplay = document.getElementById("timerDisplay");

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const noBtn = document.getElementById("noBtn");
    const bgMusic = document.getElementById("backgroundMusic");
    const heartsContainer = document.getElementById("hearts-container");

    let timer;
    let timeLeft = 10;
    let noHoverCount = 0;

    // Define closePopup globally so HTML onclick works
    window.closePopup = function () {
        popup.classList.add("hidden");
        startTimer();
    };

    // Also bind click listener (backup)
    if (popupBtn) {
        popupBtn.addEventListener("click", () => {
            window.closePopup();
        });
    }

    function startTimer() {
        if (countdownPopup) {
            countdownPopup.classList.remove("hidden");
            timerDisplay.textContent = timeLeft;
        }

        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

    window.selectYes = function () {
        clearInterval(timer);
        countdownPopup.classList.add("hidden");

        bgMusic.play().catch(() => {});

        confetti({
            particleCount: 180,
            spread: 100,
            origin: { y: 0.6 }
        });

        page1.classList.remove("active");
        page2.classList.add("active");
    };

    window.moveNoButton = function () {
        noHoverCount++;
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = ${x}px;
        noBtn.style.top = ${y}px;

        const scale = Math.max(0.5, 1 - noHoverCount * 0.06);
        noBtn.style.transform = scale(${scale});
    };

    window.handleNoClick = function () {
        alert("Are you 100% sure? 😏");
    };

    window.selectChoice = function (choice) {
        if (choice === "kiss") {
            alert("💋 Come here… 😘");
        } else if (choice === "date") {
            alert("🌹 Romantic date plan!");
        } else {
            alert("🛍️ Shopping spree 😂");
        }
    };

    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 5 + Math.random() * 5 + "s";
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 10000);
    }, 600);

});
