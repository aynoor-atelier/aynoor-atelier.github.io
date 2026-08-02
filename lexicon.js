document.addEventListener("DOMContentLoaded", () => {
  // start with all accordion contents closed
  document.querySelectorAll(".accordion").forEach(acc => {
    const content = acc.children[1];
    const icon = acc.children[0]?.querySelector(".accordion-icon");

    if (content) content.style.display = "none";
    if (icon) icon.textContent = "▸";
    acc.classList.remove("active");
  });

  function closeAccordion(acc) {
    if (!acc) return;

    acc.classList.remove("active");

    const content = acc.children[1];
    const icon = acc.children[0]?.querySelector(".accordion-icon");

    if (content) content.style.display = "none";
    if (icon) icon.textContent = "▸";

    // close any nested open accordions inside this one
    acc.querySelectorAll(".accordion.active").forEach(nested => {
      nested.classList.remove("active");
      const nestedContent = nested.children[1];
      const nestedIcon = nested.children[0]?.querySelector(".accordion-icon");
      if (nestedContent) nestedContent.style.display = "none";
      if (nestedIcon) nestedIcon.textContent = "▸";
    });
  }

  function openAccordion(acc) {
    if (!acc) return;

    acc.classList.add("active");

    const content = acc.children[1];
    const icon = acc.children[0]?.querySelector(".accordion-icon");

    if (content) content.style.display = "block";
    if (icon) icon.textContent = "▾";
  }

  document.addEventListener("click", (e) => {
    const header = e.target.closest(".accordion-header");
    if (!header) return;

    const accordion = header.parentElement;
    if (!accordion || !accordion.classList.contains("accordion")) return;

    const isOpen = accordion.classList.contains("active");
    const parent = accordion.parentElement;

    // close siblings at same level
    Array.from(parent.children)
      .filter(el => el.classList && el.classList.contains("accordion"))
      .forEach(item => {
        if (item !== accordion) closeAccordion(item);
      });

    // toggle current
    if (isOpen) {
      closeAccordion(accordion);
    } else {
      openAccordion(accordion);
    }
  });
});
