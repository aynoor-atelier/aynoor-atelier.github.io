// Audio Engine Unlock Tracker
let isAudioUnlocked = false;

function unlockAudioEngine() {
    if (isAudioUnlocked) return;

    const sealSound = document.getElementById("sealSound");
    const pageSound = document.getElementById("pageSound");

    [sealSound, pageSound].forEach(audio => {
        if (audio) {
            audio.play().then(() => {
                audio.pause();
                audio.currentTime = 0;
            }).catch(() => {});
        }
    });

    isAudioUnlocked = true;
    console.log("Audio Unlocked!");

    window.removeEventListener("click", unlockAudioEngine);
    window.removeEventListener("touchstart", unlockAudioEngine);
}

// User Action Unlocks Audio
window.addEventListener("click", unlockAudioEngine);
window.addEventListener("touchstart", unlockAudioEngine);

// Global Function for Wax Seal Click
function openArchiveBook() {
    console.log("Seal Clicked!");
    
    const book = document.getElementById("book");
    const sealSound = document.getElementById("sealSound");

    // 1. Play Sound
    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(err => console.log("Seal Audio Error:", err));
    }

    // 2. Open Book Animation
    if (book) {
        book.classList.add("open");
    } else {
        console.error("Book element not found!");
    }
}

// Event Listeners Binding
document.addEventListener("DOMContentLoaded", () => {
    const sealTrigger = document.getElementById("sealTrigger");
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    // Bind Seal Click
    if (sealTrigger) {
        sealTrigger.onclick = openArchiveBook; // Direct inline assignment for 100% reliability
    }

    // Bind Vault Button Click
    if (enterVaultBtn) {
        enterVaultBtn.addEventListener("click", (e) => {
            if (pageSound) {
                pageSound.currentTime = 0;
                pageSound.play().catch(() => {});
            }
            
            // Smooth delay for sound before opening home.html
            setTimeout(() => {
                window.location.href = "home.html";
            }, 300);
        });
    }
});
