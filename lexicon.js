/* ==========================================
   AYNOOR ATELIER - ISOLATED LEXICON ENGINE
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const childHeaders = document.querySelectorAll(".lexicon-entry > .accordion-header");

    childHeaders.forEach((header) => {
        header.addEventListener("click", function (e) {
            // Parent alphabet accordion ko collapse hone se rokne ke liye
            e.stopPropagation();

            const currentEntry = this.parentElement;
            const parentAlphabetContainer = currentEntry.closest('.alphabet-content') || currentEntry.parentElement;

            // 1. Same alphabet group ke saare sibling entries ko close karo
            const siblingEntries = parentAlphabetContainer.querySelectorAll('.lexicon-entry');
            siblingEntries.forEach((entry) => {
                if (entry !== currentEntry) {
                    entry.classList.remove("active");
                    const siblingBody = entry.querySelector('.accordion-body') || entry.querySelector('.lexicon-entry-body');
                    if (siblingBody) {
                        siblingBody.style.maxHeight = null;
                    }
                }
            });

            // 2. Current clicked entry ko toggle karo
            currentEntry.classList.toggle("active");
            const currentBody = currentEntry.querySelector('.accordion-body') || currentEntry.querySelector('.lexicon-entry-body');

            if (currentBody) {
                if (currentEntry.classList.contains("active")) {
                    currentBody.style.maxHeight = currentBody.scrollHeight + "px";
                } else {
                    currentBody.style.maxHeight = null;
                }
            }
        });
    });
});
