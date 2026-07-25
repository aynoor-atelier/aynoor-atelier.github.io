// Function to Open Book & Play Seal Sound
function openArchiveBook() {
    console.log("Wax Seal Clicked!");

    // 1. Audio Playback
    const sealSound = document.getElementById("sealSound");
    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(err => console.log("Audio notice:", err));
    }

    // 2. Add 'open' class to Main Book Container
    const book = document.getElementById("book") || document.querySelector(".book");
    if (book) {
        book.classList.add("open");
        console.log("Class 'open' added successfully!");
    } else {
        console.error("Book element missing!");
    }
}

// Global Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    // Seal Click Listener
    const sealTrigger = document.getElementById("sealTrigger");
    if (sealTrigger) {
        sealTrigger.addEventListener("click", openArchiveBook);
    }

    // Vault Navigation Listener
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    if (enterVaultBtn) {
        enterVaultBtn.addEventListener("click", (e) => {
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
