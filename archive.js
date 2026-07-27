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

    /* Hero Animation */
    const hero = document.querySelector(".hero");
    if(hero){
        hero.classList.add("show");
    }

    /* Intro Animation */
    const intro = document.querySelector(".intro");
    if(intro){
        intro.classList.add("show");
    }

    /* ================================= */
    /* ACCORDION OPEN / CLOSE FIX */
    /* ================================= */
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        const header = accordion.querySelector(".accordion-header");
        const content = accordion.querySelector(".accordion-content");

        if(header && content) {
            header.addEventListener("click", () => {
                // Close all other accordions (Optional, comment out if you want multiple open)
                accordions.forEach(item => {
                    if(item !== accordion) {
                        item.classList.remove("active");
                        const itemContent = item.querySelector(".accordion-content");
                        if(itemContent) itemContent.style.maxHeight = null;
                    }
                });

                // Toggle Current Accordion
                accordion.classList.toggle("active");

                if (accordion.classList.contains("active")) {
                    // Set height dynamically with extra padding room for images & text
                    content.style.maxHeight = (content.scrollHeight + 800) + "px";
                } else {
                    content.style.maxHeight = null;
                }
            });
        }
    });

    /* Recalculate height when images load to avoid cutoffs */
    const archiveImages = document.querySelectorAll(".archive-image");
    archiveImages.forEach(img => {
        img.addEventListener("load", () => {
            const activeAccordion = img.closest(".accordion.active");
            if(activeAccordion) {
                const activeContent = activeAccordion.querySelector(".accordion-content");
                if(activeContent) {
                    activeContent.style.maxHeight = (activeContent.scrollHeight + 800) + "px";
                }
            }
        });
    });

    /* Ready Log */
    console.log(
        "%cVolume V Loaded - Accordion & Lightbox Active",
        "color:#A67C52;font-size:15px;font-family:Cinzel,serif;"
    );
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
            e.stopPropagation(); // Prevents clicking the image from toggling the accordion
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
}
