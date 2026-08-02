
/* ==========================================
   AYNOOR ATELIER - LEXICON ISOLATED ENGINE
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Lexicon Multi-Level Engine Active.");

    // LEVEL 1: Alphabet Sections (Section A, B, C...)
    const sectionHeaders = document.querySelectorAll(".lexicon-section-header");

    sectionHeaders.forEach((header) => {
        header.addEventListener("click", function (e) {
            e.stopPropagation(); // Event ko parent tak hi simit rakho

            const currentSection = this.parentElement;

            // Toggle parent section (A, B, C)
            currentSection.classList.toggle("active");

            // Safeguard: Parent khulte hi saare child terms closed hi rahenge
            const childTerms = currentSection.querySelectorAll(".lexicon-term-item");
            childTerms.forEach((term) => {
                // Ensure initial state stays collapsed unless individually clicked
                if (!term.dataset.userOpened) {
                    term.classList.remove("active");
                }
            });
        });
    });

    // LEVEL 2: Sub-terms (01 Atelier, 02 Admission...)
    const termHeaders = document.querySelectorAll(".lexicon-term-header");

    termHeaders.forEach((header) => {
        header.addEventListener("click", function (e) {
            e.stopPropagation(); // Parent section ko close hone se roko!

            const currentTerm = this.parentElement;
            const parentSection = currentTerm.closest(".lexicon-section");

            // Section ke andar baki terms ko close karo taaki ek time par 1 hi sub-term khula rahe
            if (parentSection) {
                const siblingTerms = parentSection.querySelectorAll(".lexicon-term-item");
                siblingTerms.forEach((term) => {
                    if (term !== currentTerm) {
                        term.classList.remove("active");
                        delete term.dataset.userOpened;
                    }
                });
            }

            // Target term ko toggle karo
            currentTerm.classList.toggle("active");

            if (currentTerm.classList.contains("active")) {
                currentTerm.dataset.userOpened = "true";
            } else {
                delete currentTerm.dataset.userOpened;
            }
        });
    });
});
