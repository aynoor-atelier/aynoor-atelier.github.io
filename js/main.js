function openArchiveBook() {
    console.log("Wax Seal Clicked!");

    // 1. Play Seal Sound
    const sealSound = document.getElementById("sealSound");
    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(err => console.log("Audio notice:", err));
    }

    // 2. Target Book Elements
    const book = document.getElementById("book") || document.querySelector(".book");
    const cover = document.querySelector(".cover") || document.querySelector(".book-cover") || document.querySelector("article.page");

    if (book) {
        // Standard CSS class addition
        book.classList.add("open");

            // Hide page stack when book opens
    const stack = document.querySelector(".page-stack");
        if (stack) stack.style.display = "none";

    }

    // Force Open (Jab CSS class miss ho jaye to ye backup kaam karega)
    if (cover) {
        cover.style.transform = "rotateY(-180deg)";
        cover.style.transition = "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
    } else if (book) {
        book.style.transform = "rotateY(-180deg)";
        book.style.transition = "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
    }
}

// Event Binding
document.addEventListener("DOMContentLoaded", () => {
    const sealTrigger = document.getElementById("sealTrigger");
    if (sealTrigger) {
        sealTrigger.addEventListener("click", openArchiveBook);
    }

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
