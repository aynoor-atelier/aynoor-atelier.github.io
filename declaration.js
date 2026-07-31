/* ==========================================
   THE FOUNDING DECLARATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Smooth fade-in

    const sections = document.querySelectorAll(
        ".hero, .document-section, .document-status"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },{

        threshold:0.15

    });

    sections.forEach(section=>{

        section.classList.add("fade-section");

        observer.observe(section);

    });

});
