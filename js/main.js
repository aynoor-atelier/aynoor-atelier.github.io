// Open Archive Book Logic
function openArchiveBook() {
    const book = document.getElementById("book");
    const sealSound = document.getElementById("sealSound");

    console.log("Wax seal clicked directly!");

    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(err => {
            console.warn("Audio play prevented:", err);
        });
    }

    if (book) {
        book.classList.add("open");
        console.log("Book opened successfully!");
    } else {
        console.error("Book element missing!");
    }
}

// Event Listeners Initialization
document.addEventListener("DOMContentLoaded", () => {
    const sealTrigger = document.getElementById("sealTrigger");
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    // Seal Trigger Handler
    if (sealTrigger) {
        sealTrigger.addEventListener("click", openArchiveBook);
    }

    // Vault Button Handler
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

// Interactive Spotlight Tracker (Mouse & Mobile Touch)
const updateSpotlight = (e) => {
    let x, y;
    if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
    } else {
        x = e.clientX;
        y = e.clientY;
    }
    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);
};

window.addEventListener('mousemove', updateSpotlight);
window.addEventListener('touchmove', updateSpotlight);
