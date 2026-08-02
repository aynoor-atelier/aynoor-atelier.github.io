/* ==========================================
   AYNOOR ATELIER - ISOLATED CHILD ENGINE
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
    
    const childHeaders = document.querySelectorAll(".lexicon-entry > .accordion-header");

    childHeaders.forEach((header) => {
        header.addEventListener("click", function (e) {
         
            e.stopPropagation();

            const childEntry = this.parentElement;
            
   
            childEntry.classList.toggle("active");
        });
    });
});
