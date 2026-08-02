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
      const content = accordion.children[1];
      const icon = this.querySelector(".accordion-icon");

      const isOpen = accordion.classList.contains("active");

      // close siblings
      const parent = accordion.parentElement;

      Array.from(parent.children).filter(el => el.classList.contains("accordion"))

        if (item !== accordion) {

          item.classList.remove("active");

          const c = item.children[1];
const i = item.children[0].querySelector(".accordion-icon");

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
