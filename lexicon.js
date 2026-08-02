document.addEventListener("DOMContentLoaded", () => {

  // hide all accordion contents
  document.querySelectorAll(".accordion-content").forEach(content => {
    content.style.display = "none";
  });

  // only direct headers
  document.querySelectorAll(".accordion > .accordion-header").forEach(header => {

    header.addEventListener("click", function (e) {

      e.stopPropagation();

      const accordion = this.parentElement;
      const content = accordion.querySelector(":scope > .accordion-content");
      const icon = this.querySelector(".accordion-icon");

      const isOpen = accordion.classList.contains("active");

      // close siblings
      const parent = accordion.parentElement;

      parent.querySelectorAll(":scope > .accordion").forEach(item => {

        if (item !== accordion) {

          item.classList.remove("active");

          const c = item.querySelector(":scope > .accordion-content");

          const i = item.querySelector(":scope > .accordion-header .accordion-icon");

          if (c) c.style.display = "none";

          if (i) i.textContent = "▸";
        }

      });

      if (isOpen) {

        accordion.classList.remove("active");

        content.style.display = "none";

        icon.textContent = "▸";

      } else {

        accordion.classList.add("active");

        content.style.display = "block";

        icon.textContent = "▾";

      }

    });

  });

});
