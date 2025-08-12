document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".UV-index_header_navBar_menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("is-active"); // Optional: for animating the hamburger icon
    });

    // Close menu when a link is clicked (optional, but good for UX)
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("is-active");
      });
    });

    // Close menu when clicking outside (optional, but good for UX)
    document.addEventListener("click", (event) => {
      if (
        !navMenu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("is-active");
      }
    });
  }
});
