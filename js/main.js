// Browser Audio Unlock Logic
let isAudioUnlocked = false;

function unlockAudio() {
    if (isAudioUnlocked) return;
    
    const sealSound = document.getElementById("sealSound");
    const pageSound = document.getElementById("pageSound");

    [sealSound, pageSound].forEach(sound => {
        if (sound) {
            sound.play().then(() => {
                sound.pause();
                sound.currentTime = 0;
            }).catch(() => {});
        }
    });

    isAudioUnlocked = true;
    window.removeEventListener("touchstart", unlockAudio);
    window.removeEventListener("click", unlockAudio);
}

window.addEventListener("touchstart", unlockAudio);
window.addEventListener("click", unlockAudio);

// Original Open Functionality
function openArchiveBook() {
    const book = document.getElementById("book");
    const sealSound = document.getElementById("sealSound");

    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(() => {});
    }

    if (book) {
        book.classList.add("open");
    }
}

// Event Binding
document.addEventListener("DOMContentLoaded", () => {
    const sealTrigger = document.getElementById("sealTrigger");
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    if (sealTrigger) {
        sealTrigger.addEventListener("click", openArchiveBook);
    }

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

