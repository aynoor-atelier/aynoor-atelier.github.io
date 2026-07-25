// Function to Open Book & Play Sound
function openArchiveBook() {
    console.log("Wax seal clicked!");

    const book = document.getElementById("book");
    const sealSound = document.getElementById("sealSound");

    // 1. Play Audio
    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(err => console.log("Audio notice:", err));
    }

    // 2. Open 3D Cover Animation
    if (book) {
        book.classList.add("open");
        console.log("Book opened!");
    } else {
        console.error("Book element missing!");
    }
}

// Vault Button Event Handler
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
