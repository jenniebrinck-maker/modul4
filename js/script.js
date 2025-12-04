// ----------------------------
// FUNKTION FÖR BOKNING
// ----------------------------
function skickaBokning() {
  alert("Tack för din bokning! Vi återkommer till dig snart.");
  const fields = ["checkin", "checkout", "guests", "room", "name", "email", "phone", "message"];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}

// ----------------------------
// AUTOMATISKT ÅR I FOOTER
// ----------------------------
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ----------------------------
// HAMBURGER MENY
// ----------------------------
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isOpen);
    navMenu.classList.toggle("active");
  });

  // Stäng meny när man klickar på länk (bra på mobil)
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// ----------------------------
// TOGGLE BOXAR (mobil)
// ----------------------------
const boxToggle = document.getElementById("box-toggle");
const offerBoxes = document.querySelector(".two-boxes");

if (boxToggle && offerBoxes) {
  // Initial state
  const boxStyle = window.getComputedStyle(offerBoxes);
  if (boxStyle.display !== "flex" && window.innerWidth <= 768) {
    offerBoxes.style.display = "none";
  }

  boxToggle.addEventListener("click", () => {
    const isVisible = window.getComputedStyle(offerBoxes).display !== "none";
    offerBoxes.style.display = isVisible ? "none" : "flex";
    boxToggle.setAttribute("aria-expanded", !isVisible);
  });
}

// ----------------------------
// KONTAKTFORMULÄR
// ----------------------------
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Tack! Ditt meddelande har skickats.");
    contactForm.reset();
  });
}
