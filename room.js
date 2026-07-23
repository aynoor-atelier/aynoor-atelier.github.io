/*==================================================
AYNOOR ATELIER
ROOM.JS
VOLUME IV
THE READING ROOM
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    PAGE TITLE
    =========================================*/

    document.title = "The Reading Room | Aynoor Atelier";


    /*=========================================
    ACTIVE CHAPTER
    =========================================*/

    document.body.dataset.chapter = "reading-room";


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
        "%cVolume IV Loaded",
        "color:#A67C52;font-size:15px;font-family:Cinzel,serif;"
    );

});
