/* ==========================================================
   AYNOOR ATELIER - ARCHIVAL BOOK INTERACTION LOGIC
   FIXED: Inline CSS Conflicts, Audio Execution & Clean Class Toggles
========================================================== */

function openArchiveBook() {
    console.log("Wax Seal Clicked - Unlocking Vault...");

    // 1. Audio Playback Sync
    const sealSound = document.getElementById("sealSound");
    const pageSound = document.getElementById("pageSound");

    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(err => console.warn("Audio autoplay blocked by browser:", err));
    }

    // Play paper flip sound slightly after seal breaks
    setTimeout(() => {
        if (pageSound) {
            pageSound.currentTime = 0;
            pageSound.play().catch(() => {});
        }
    }, 400);

    // 2. Pure CSS Driven 3D Open State Trigger
    const book = document.getElementById("book") || document.querySelector(".book");
    
    if (book) {
        // Class-based trigger keeps CSS keyframes & 3D translateZ fully intact
        book.classList.add("open");
    }
}

// ---------------- Event Listeners Initialization ----------------
document.addEventListener("DOMContentLoaded", () => {
    
    // Royal Seal Trigger Binding
    const sealTrigger = document.getElementById("sealTrigger");
    if (sealTrigger) {
        sealTrigger.addEventListener("click", openArchiveBook);
    }

    // Vault Button Redirection Listener
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    if (enterVaultBtn) {
        enterVaultBtn.addEventListener("click", () => {
            if (pageSound) {
                pageSound.currentTime = 0;
                pageSound.play().catch(() => {});
            }

            // Smooth transition before redirecting
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.6s ease';

            setTimeout(() => {
                // Change "home.html" to your actual main landing/vault URL
                window.location.href = "home.html"; 
            }, 600);
        });
    }
});
