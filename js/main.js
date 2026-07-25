// Function to Open Book & Play Sound
function openArchiveBook() {
    console.log("Seal Clicked! Triggering Animation...");

    // 1. Play Seal Audio
    const sealSound = document.getElementById("sealSound");
    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(err => console.log("Audio Error:", err));
    }

    // 2. Trigger CSS Animation
    const book = document.getElementById("book") || document.querySelector(".book");
    if (book) {
        book.classList.add("open");
        console.log("Animation class '.open' added!");
    } else {
        alert("Error: HTML mein book element nahi mila!");
    }
}

// Vault Navigation Logic
document.addEventListener("DOMContentLoaded", () => {
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    if (enterVaultBtn) {
        enterVaultBtn.addEventListener("click", () => {
            if (pageSound) {
                pageSound.currentTime = 0;
                pageSound.play().catch(() => {});
            }
            setTimeout(() => {
                window.location.href = "home.html";
            }, 300);
        });
    }
});
