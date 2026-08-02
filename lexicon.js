document.addEventListener("DOMContentLoaded", () => {

    initLexiconEntries();

});

function initLexiconEntries(){

    const entries=document.querySelectorAll(".lexicon-entry");

    entries.forEach((entry)=>{

        const header=
        entry.querySelector(":scope > .accordion-header");

        if(!header) return;

        updateEntryIcon(entry);

        header.addEventListener("click",(event)=>{

            event.stopPropagation();

            const parent=
            entry.parentElement;

            parent.querySelectorAll(":scope > .lexicon-entry.active").forEach((other)=>{

                if(other!==entry){

                    other.classList.remove("active");

                    updateEntryIcon(other);

                }

            });

            entry.classList.toggle("active");

            updateEntryIcon(entry);

        });

    });

}

function updateEntryIcon(entry){

    const icon=
    entry.querySelector(":scope > .accordion-header .accordion-icon");

    if(!icon) return;

    icon.textContent=
    entry.classList.contains("active")
    ? "−"
    : "+";

}
