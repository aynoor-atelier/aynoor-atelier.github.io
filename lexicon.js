document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  // Hide all accordion contents on load
  accordions.forEach(acc => {
    const content = acc.children[1];
    const icon = acc.querySelector(":scope > .accordion-header .accordion-icon");
    if (content) content.style.display = "none";
    if (icon) icon.textContent = "▸";
  });

  // Attach click only to direct headers
  document.querySelectorAll(".accordion > .accordion-header").forEach(header => {
    header.addEventListener("click", function (e) {
      e.stopPropagation();

      const accordion = this.parentElement;
      const content = accordion.children[1];
      const icon = this.querySelector(".accordion-icon");
      const isOpen = accordion.classList.contains("active");

      // Close sibling accordions at same level
      const parent = accordion.parentElement;
      Array.from(parent.children)
        .filter(el => el.classList && el.classList.contains("accordion"))
        .forEach(item => {
          if (item !== accordion) {
            item.classList.remove("active");

            const c = item.children[1];
            const i = item.children[0].querySelector(".accordion-icon");

            if (c) c.style.display = "none";
            if (i) i.textContent = "▸";

            // Also close any nested accordions inside sibling
            item.querySelectorAll(".accordion.active").forEach(nested => {
              nested.classList.remove("active");
              const nc = nested.children[1];
              const ni = nested.children[0].querySelector(".accordion-icon");
              if (nc) nc.style.display = "none";
              if (ni) ni.textContent = "▸";
            });
          }
        });

      // Toggle current accordion
      if (isOpen) {
        accordion.classList.remove("active");
        content.style.display = "none";
        icon.textContent = "▸";

        // Close nested accordions when parent closes
        accordion.querySelectorAll(".accordion.active").forEach(nested => {
          nested.classList.remove("active");
          const nc = nested.children[1];
          const ni = nested.children[0].querySelector(".accordion-icon");
          if (nc) nc.style.display = "none";
          if (ni) ni.textContent = "▸";
        });
      } else {
        accordion.classList.add("active");
        content.style.display = "block";
        icon.textContent = "▾";
      }
    });
  });
});
