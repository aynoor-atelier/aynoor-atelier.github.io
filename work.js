/*==================================================
AYNOOR ATELIER
WORK.JS
VOLUME III
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    PAGE TITLE
    =========================================*/

    document.title = "Our Work | Aynoor Atelier";


    /*=========================================
    ACTIVE CHAPTER
    =========================================*/

    document.body.setAttribute(
        "data-chapter",
        "work"
    );


    /*=========================================
    HERO REVEAL
    =========================================*/

    const hero = document.querySelector(".hero");

    if (hero) {
        hero.classList.add("show");
    }


    /*=========================================
    INTRO REVEAL
    =========================================*/

    const intro = document.querySelector(".intro");

    if (intro) {
        intro.classList.add("show");
    }


    /*=========================================
    PAGE READY
    =========================================*/

    console.log(
        "%cVolume III Loaded",
        "color:#A67C52;font-size:15px;font-family:Cinzel,serif;"
    );

});
