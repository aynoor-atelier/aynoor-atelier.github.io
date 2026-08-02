document.addEventListener("DOMContentLoaded", () => {

    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {

        header.addEventListener("click", function (e) {

            e.stopPropagation();

            const accordion = this.parentElement;
            const content = accordion.querySelector(":scope > .accordion-content");

            if (!content) return;

            // Close sibling accordions
            const parentContent = accordion.parentElement;

            parentContent.querySelectorAll(":scope > .accordion").forEach(item => {

                if (item !== accordion) {

                    item.classList.remove("active");

                    const siblingContent = item.querySelector(":scope > .accordion-content");

                    if (siblingContent) {
                        siblingContent.style.maxHeight = null;
                    }

                    const icon = item.querySelector(":scope > .accordion-header .accordion-icon");

                    if (icon) {
                        icon.textContent = "▸";
                    }

                }

            });

            // Toggle current accordion

            accordion.classList.toggle("active");

            const icon = accordion.querySelector(":scope > .accordion-header .accordion-icon");

            if (accordion.classList.contains("active")) {

                content.style.maxHeight = content.scrollHeight + "px";

                if (icon) icon.textContent = "▾";

            } else {

                content.style.maxHeight = null;

                if (icon) icon.textContent = "▸";

            }

        });

    });

});
