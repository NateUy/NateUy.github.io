document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll("details");

  accordions.forEach((accordion) => {
    accordion.addEventListener("toggle", () => {
      let lastAccordion = accordion;

      if (accordion.open) {
        accordions.forEach((otherAccordion) => {
          if (otherAccordion !== accordion) {
            otherAccordion.open = false;
          }
        });
      }
      setTimeout(() => {
        AOS.refresh();
        lastAccordion.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    });
  });

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = document.querySelectorAll(".menu-link");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    });
  });
});
