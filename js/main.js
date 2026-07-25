function openArchiveBook() {
    console.log("Seal Clicked!");

    // Audio Trigger
    const sealSound = document.getElementById("sealSound");
    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(err => console.log("Sound error:", err));
    }

    // Book Elements Search
    const bookById = document.getElementById("book");
    const bookByClass = document.querySelector(".book");
    const bookWrapper = document.querySelector(".book-wrapper") || document.querySelector(".archive-book");

    const targetBook = bookById || bookByClass || bookWrapper;

    if (targetBook) {
        // Toggle open class
        targetBook.classList.add("open");
        
        // Direct inline CSS force (Backup)
        targetBook.style.transform = "rotateY(-180deg)";
        
        console.log("Class 'open' added to:", targetBook);
    } else {
        alert("CRITICAL ERROR: JS ko HTML me book wala div nahi mila! HTML check karo.");
    }
}

// Vault Navigation
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
