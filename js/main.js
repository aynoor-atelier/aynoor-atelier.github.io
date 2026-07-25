function openArchiveBook() {
    const book = document.getElementById("book");
    const sealSound = document.getElementById("sealSound");

    console.log("Wax seal clicked directly!");

    // Play Sound Safely
    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(err => {
            console.warn("Audio play prevented:", err);
        });
    }

    // Toggle 3D Open Class
    if (book) {
        book.classList.add("open");
        console.log("Book opened successfully!");
    } else {
        console.error("Book element missing!");
    }
}

// Vault Navigation Handler
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

