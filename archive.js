/*==================================================
AYNOOR ATELIER
ARCHIVE.JS
VOLUME V
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* Page Title */

    document.title = "The Archive | Aynoor Atelier";


    /* Active Chapter */

    document.body.dataset.chapter = "archive";


    /* Hero */

    const hero = document.querySelector(".hero");

    if(hero){

        hero.classList.add("show");

    }


    /* Intro */

    const intro = document.querySelector(".intro");

    if(intro){

        intro.classList.add("show");

    }


    /* Ready */

    console.log(

        "%cVolume V Loaded",

        "color:#A67C52;font-size:15px;font-family:Cinzel,serif;"

    );

});
