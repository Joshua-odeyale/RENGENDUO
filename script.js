// Preloader dismissal
function closePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
}

window.addEventListener("load", function () {
  setTimeout(closePreloader, 1500);
});

// Helper alert functions
function clickButton() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert('Make an appointment down👇');
  }
}

function fun() {
  alert("Kindly make an appointment 👆");
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      duration: 1000
    });
  }

  // Hamburger Menu Logic
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking any nav link
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // Dark Mode Toggle Logic
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Form Submission Logic
  const form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
      alert("Appointment made successfully! We will contact you soon.");
      form.reset(); // Reset form fields
    });
  }
});