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

// Builds the menu section from the plain-text list in menu.js, so
// updating the menu never requires touching this file or index.html.
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderMenu() {
  const grid = document.getElementById("menu-grid");
  if (!grid || typeof MENU_TEXT === "undefined") return;

  const categories = [];
  let current = null;

  MENU_TEXT.split("\n").forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) return;

    if (line.startsWith("- ")) {
      if (current) current.items.push(line.slice(2).trim());
    } else {
      current = { name: line, items: [] };
      categories.push(current);
    }
  });

  grid.innerHTML = categories
    .map(
      (category) => `
        <div class="menu-card">
          <h3>${escapeHtml(category.name)}</h3>
          <ul>
            ${category.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>`
    )
    .join("");
}

renderMenu();
