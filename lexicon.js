/* =======================================
   THE AYNOOR LEXICON
   lexicon.js
   ======================================= */

document.addEventListener("DOMContentLoaded", () => {

    initLexicon();

});

function initLexicon() {

    const accordions = document.querySelectorAll(".lexicon-entry, .lexicon-section");

    accordions.forEach((accordion) => {

        const header = accordion.querySelector(":scope > .accordion-header");

        if (!header) return;

        updateLexiconIcon(accordion);

        header.addEventListener("click", (event) => {

            event.stopPropagation();

            const isOpen = accordion.classList.contains("active");

            closeSiblingEntries(accordion);

            if (isOpen) {

                accordion.classList.remove("active");

            } else {

                accordion.classList.add("active");

            }

            updateLexiconIcon(accordion);

        });

    });

}

function closeSiblingEntries(current) {

    const parent = current.parentElement;

    parent.querySelectorAll(":scope > .accordion.active").forEach((accordion) => {

        if (accordion !== current) {

            accordion.classList.remove("active");

            updateLexiconIcon(accordion);

        }

    });

}

function updateLexiconIcon(accordion) {

    const icon = accordion.querySelector(":scope > .accordion-header .accordion-icon");

    if (!icon) return;

    icon.textContent = accordion.classList.contains("active") ? "−" : "+";

}
