document.addEventListener("DOMContentLoaded", () => {

    const book = document.getElementById("book");
    const seal = document.getElementById("sealTrigger");

    const sealSound = document.getElementById("sealSound");
    const pageSound = document.getElementById("pageSound");

    const enterBtn = document.getElementById("enterVault");

    let opened = false;

    // ---------- Seal Click ----------

    seal.addEventListener("click", function (e) {

        e.preventDefault();

        if (opened) return;

        opened = true;

        if (sealSound) {
            sealSound.currentTime = 0;
            sealSound.play().catch(()=>{});
        }

        book.classList.add("open");

    });

    // ---------- Vault Button ----------

    enterBtn.addEventListener("click", function () {

        if(pageSound){

            pageSound.currentTime=0;

            pageSound.play().catch(()=>{});

        }

        setTimeout(()=>{

            window.location.href="home.html";

        },700);

    });

});
