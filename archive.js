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

/* ================================= */
/* ARCHIVE LIGHTBOX */
/* ================================= */

const lightbox = document.getElementById("archiveLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.querySelector(".lightbox-close");

document.querySelectorAll(".archive-image").forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

function hideLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}

closeLightbox.addEventListener("click", hideLightbox);

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        hideLightbox();

    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        hideLightbox();

    }

});
