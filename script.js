// ===== Helpers =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const header = $(".site-header");
const navToggle = $("#navToggle");
const navLinks = $("#navLinks");
const yearEl = $("#year");

// Set year
yearEl.textContent = new Date().getFullYear();

// Sticky header shadow on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// Mobile menu toggle
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

// Close menu after clicking a link (mobile)
$$(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Active section highlight (scroll spy)
const sections = [...$$("section[id]")];
const navMap = new Map(
  [...$$(".nav-link")]
    .map(a => [a.getAttribute("href").replace("#",""), a])
);

const setActive = () => {
  const y = window.scrollY + 120;
  let current = sections[0]?.id;

  for (const sec of sections) {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) {
      current = sec.id;
      break;
    }
  }

  navMap.forEach(a => a.classList.remove("active"));
  const active = navMap.get(current);
  if (active) active.classList.add("active");
};

window.addEventListener("scroll", setActive);
setActive();
