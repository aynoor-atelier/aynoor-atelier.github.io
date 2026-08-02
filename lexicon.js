document.addEventListener("DOMContentLoaded", () => {

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {

        const header = accordion.querySelector(":scope > .accordion-header");
        const content = accordion.querySelector(":scope > .accordion-content");
        const icon = accordion.querySelector(":scope > .accordion-header .accordion-icon");

        if (!header || !content) return;

        // Initial State
        content.style.display = "none";
        icon.textContent = "▸";

        header.addEventListener("click", function (e) {

            e.stopPropagation();

            const parent = accordion.parentElement;

            // Close only sibling accordions
            parent.querySelectorAll(":scope > .accordion").forEach((item) => {

                if (item !== accordion) {

                    item.classList.remove("active");

                    const c = item.querySelector(":scope > .accordion-content");
                    const i = item.querySelector(":scope > .accordion-header .accordion-icon");

                    if (c) c.style.display = "none";
                    if (i) i.textContent = "▸";

                }

            });

            // Toggle current
            accordion.classList.toggle("active");

            if (accordion.classList.contains("active")) {

                content.style.display = "block";
                icon.textContent = "▾";

            } else {

                content.style.display = "none";
                icon.textContent = "▸";

            }

        });

    });

});
