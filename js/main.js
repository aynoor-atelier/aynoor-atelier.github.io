function openArchiveBook() {
    const sealSound = document.getElementById("sealSound");
    const pageSound = document.getElementById("pageSound");

    if (sealSound) {
        sealSound.currentTime = 0;
        sealSound.play().catch(() => {});
    }

    setTimeout(() => {
        if (pageSound) {
            pageSound.currentTime = 0;
            pageSound.play().catch(() => {});
        }
    }, 300);

    const book = document.getElementById("book") || document.querySelector(".book");
    if (book) {
        book.classList.add("open");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const sealTrigger = document.getElementById("sealTrigger");
    if (sealTrigger) {
        sealTrigger.addEventListener("click", openArchiveBook);
    }

    const enterVaultBtn = document.getElementById("enterVault");
    if (enterVaultBtn) {
        enterVaultBtn.addEventListener("click", () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                window.location.href = "home.html";
            }, 500);
        });
    }
});
