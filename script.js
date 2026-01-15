document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const links = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});
