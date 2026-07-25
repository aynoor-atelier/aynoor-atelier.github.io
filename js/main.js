/* ==========================================================
   AYNOOR ATELIER
   MAIN SCRIPT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const book = document.getElementById("book");

    const seal = document.getElementById("sealTrigger");

    const enterBtn = document.getElementById("enterVault");

    const sealSound = document.getElementById("sealSound");

    const pageSound = document.getElementById("pageSound");

   console.log(book);
console.log(seal);

    let opened = false;

    /* ----------------------------------------
       Unlock Audio (Mobile Browsers)
    ---------------------------------------- */

    function unlockAudio() {

        [sealSound, pageSound].forEach(audio => {

            if (!audio) return;

            audio.play()
                .then(() => {
                    audio.pause();
                    audio.currentTime = 0;
                })
                .catch(() => {});
        });

        window.removeEventListener("touchstart", unlockAudio);
        window.removeEventListener("click", unlockAudio);
    }

    window.addEventListener("touchstart", unlockAudio);
    window.addEventListener("click", unlockAudio);

    /* ----------------------------------------
       Open Book
    ---------------------------------------- */

    function openBook() {

        if (opened) return;

        opened = true;

        if (sealSound) {

            sealSound.pause();
            sealSound.currentTime = 0;

            sealSound.play().catch(() => {});
        }

        book.classList.add("open");
    }

    /* ----------------------------------------
       Seal Click
    ---------------------------------------- */

   seal.addEventListener("click", openBook);

   if (seal) {
    seal.addEventListener("click", openBook);
   }

    /* ----------------------------------------
       Enter Vault
    ---------------------------------------- */

    if (enterBtn) {

        enterBtn.addEventListener("click", () => {

            if (pageSound) {

                pageSound.pause();

                pageSound.currentTime = 0;

                pageSound.play().catch(() => {});
            }

            setTimeout(() => {

                window.location.href = "home.html";

            }, 500);

        });

    }

});

