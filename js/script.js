function skickaBokning() {
  alert("Tack för din bokning! Vi återkommer till dig snart.");
  document.getElementById("checkin").value = "";
  document.getElementById("checkout").value = "";
  document.getElementById("guests").value = "";
  document.getElementById("room").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}
// Uppdatera år automatiskt i footern
document.getElementById("year").textContent = new Date().getFullYear();

// Hamburger-meny funktionalitet
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.setAttribute("aria-expanded", !expanded);
  navMenu.classList.toggle("active");
});

// Stäng meny vid klick på länk
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Kontaktformulär – alert och reset
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Tack! Ditt meddelande har skickats.");
  contactForm.reset();
});
