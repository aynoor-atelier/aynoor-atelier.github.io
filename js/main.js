document.addEventListener("DOMContentLoaded", () => {
    // Select elements safely
    const sealTrigger = document.getElementById("sealTrigger");
    const book = document.getElementById("book");
    const enterVaultBtn = document.getElementById("enterVault");
    
    const sealSound = document.getElementById("sealSound");
    const pageSound = document.getElementById("pageSound");

    // 1. Wax Seal Click Event
    if (sealTrigger && book) {
        sealTrigger.addEventListener("click", (e) => {
            e.stopPropagation(); // Stop event bubbling
            
            // Audio Play Attempt (Safe Fail-Catch)
            if (sealSound) {
                sealSound.currentTime = 0;
                sealSound.play().catch(err => {
                    console.warn("Audio blocked or not found, opening book anyway:", err);
                });
            }

            // Force Open Book Class
            book.classList.add("open");
            console.log("Royal Seal Broken: Book Opened Successfully!");
        });
    } else {
        console.error("Seal trigger or Book element missing in DOM!");
    }

    // 2. Enter Vault Button Click Event
    if (enterVaultBtn) {
        enterVaultBtn.addEventListener("click", () => {
            if (pageSound) {
                pageSound.currentTime = 0;
                pageSound.play().catch(() => {});
            }
            
            // Redirect to Main Archive Index Page
            setTimeout(() => {
                window.location.href = "home.html"; // Change to your interior index filename if different
            }, 300);
        });
    }
});
