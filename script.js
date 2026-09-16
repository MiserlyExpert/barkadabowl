document.getElementById("year").textContent = new Date().getFullYear();

// Phones have a coarse (touch) pointer and can actually place a call.
// Desktops/laptops don't, so turn tel: links into plain text there instead
// of letting the browser try (and fail) to hand off to a calling app.
const canCall = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
if (!canCall) {
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    const span = document.createElement("span");
    span.className = link.className;
    span.textContent = link.textContent;
    link.replaceWith(span);
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});
