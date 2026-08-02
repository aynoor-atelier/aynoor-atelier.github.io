/* ==========================================
   AYNOOR ATELIER - LEXICON ISOLATED ENGINE
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // 1. PARENT ACCORDION (Section A, B, C...)
    const parentHeaders = document.querySelectorAll(".accordion > .accordion-header");

    parentHeaders.forEach((header) => {
        header.addEventListener("click", function (e) {
            e.stopPropagation();
            const parent = this.parentElement;
            
            // Toggle Section A
            parent.classList.toggle("active");
        });
    });

    // 2. CHILD ACCORDION (A-01, A-02...)
    const childHeaders = document.querySelectorAll(".lexicon-entry > .accordion-header");

    childHeaders.forEach((header) => {
        header.addEventListener("click", function (e) {
            // Very critical: Prevent parent section from listening to this click!
            e.stopPropagation();
            e.stopImmediatePropagation();

            const child = this.parentElement;

            // Toggle only this child
            child.classList.toggle("active");
        });
    });

});
