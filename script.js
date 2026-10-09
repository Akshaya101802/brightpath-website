const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const enquiryForm = document.getElementById("enquiryForm");
const formStatus = document.getElementById("formStatus");

// Set the current year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation menu.
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link.
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

// Preselect a course when its enquiry link is clicked.
document.querySelectorAll("[data-course]").forEach((link) => {
  link.addEventListener("click", () => {
    const courseSelect = document.getElementById("course");
    courseSelect.value = link.dataset.course;
  });
});

// Handle the enquiry form.
enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "";

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value.trim();

  // Replace this with the real business WhatsApp number.
  // Use country code + number, digits only. Example format: 919876543210
  const businessWhatsApp = "919876543210";

  if (businessWhatsApp === "919876543210") {
    formStatus.textContent =
      "Demo mode: replace the sample WhatsApp number in script.js with the business owner's number before using this form.";
    return;
  }

  const text = [
    "Hello BrightPath Learning Centre!",
    "",
    "Name: " + name,
    "Phone: " + phone,
    "Interested Program: " + course,
    "Message: " + (message || "No additional message"),
  ].join("\n");

  const whatsappURL =
    "https://wa.me/" + businessWhatsApp + "?text=" + encodeURIComponent(text);

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});
