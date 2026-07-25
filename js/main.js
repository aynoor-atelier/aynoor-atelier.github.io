let isAudioUnlocked = false;

// Function to unlock mobile browser audio engine on first screen interaction
function unlockAudioEngine() {
    if (isAudioUnlocked) return;

    const sealSound = document.getElementById("sealSound");
    const pageSound = document.getElementById("pageSound");

    [sealSound, pageSound].forEach(audio => {
        if (audio) {
            audio.play().then(() => {
                audio.pause();
                audio.currentTime = 0;
            }).catch(() => {
                // Silently bypass restrictions
            });
        }
    });

    isAudioUnlocked = true;
    console.log("Audio Engine Ready & Unlocked!");

    // Clean up listeners
    window.removeEventListener("click", unlockAudioEngine);
    window.removeEventListener("touchstart", unlockAudioEngine);
}

// User First Action Listeners
window.addEventListener("click", unlockAudioEngine);
window.addEventListener("touchstart", unlockAudioEngine);

// Open Archive Book Logic
function openArchiveBook() {
    const book = document.getElementById("book");
    const sealSound = document.getElementById("sealSound");

    console.log("Wax seal clicked!");

    // Play Seal Breaking Sound
    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(err => {
            console.warn("Audio error:", err);
        });
    }

    // Flip Open Book Cover
    if (book) {
        book.classList.add("open");
    }
}

// Navigation & Interactive Listeners
document.addEventListener("DOMContentLoaded", () => {
    const sealTrigger = document.getElementById("sealTrigger");
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    // Seal Trigger Event
    if (sealTrigger) {
        sealTrigger.addEventListener("click", openArchiveBook);
    }

    // Vault Button Event
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
