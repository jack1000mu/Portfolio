// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const links = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Demo form (no backend yet)
function fakeSubmit(e){
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  msg.textContent = "Thanks! This form is currently a demo. Add Formspree/Netlify Forms to receive emails.";
  return false;
}
window.fakeSubmit = fakeSubmit;
