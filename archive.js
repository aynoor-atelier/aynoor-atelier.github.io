/*==================================================
AYNOOR ATELIER
ARCHIVE.JS
VOLUME V
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* Page Title & Chapter */
    document.title = "The Archive | Aynoor Atelier";
    document.body.dataset.chapter = "archive";

    /* Hero & Intro Animations */
    const hero = document.querySelector(".hero");
    if(hero) hero.classList.add("show");

    const intro = document.querySelector(".intro");
    if(intro) intro.classList.add("show");

    /* ================================= */
    /* ACCORDION CLICK TOGGLE */
    /* ================================= */
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const accordion = header.closest(".accordion");
            if(accordion) {
                accordion.classList.toggle("active");
            }
        });
    });

    /* ================================= */
    /* ARCHIVE LIGHTBOX */
    /* ================================= */
    const lightbox = document.getElementById("archiveLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.querySelector(".lightbox-close");

    if(lightbox && lightboxImage && closeLightbox) {

        document.querySelectorAll(".archive-image").forEach(image => {
            image.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevents image click from toggling accordion
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
            if (event.target === lightbox) hideLightbox();
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") hideLightbox();
        });
    }

    console.log("%cVolume V Loaded - Accordion Fixed", "color:#A67C52;font-size:15px;font-family:Cinzel,serif;");
});
