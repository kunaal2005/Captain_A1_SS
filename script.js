// //navbar sticky js

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// carousiel funcationaliy

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;

  // Show the first slide initially
  showSlide(currentSlide);

  // Next/prev control
  document.querySelector(".next").addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  document.querySelector(".prev").addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Dot control
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }
});

// Contact us form funcationality

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contact-form");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Get form values
//     const firstName = document.getElementById("first-name").value.trim();
//     const lastName = document.getElementById("last-name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();

//     // Simple form validation
//     if (!firstName || !lastName || !email || !message) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     if (!validateEmail(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     // If validation passes
//     alert(
//       "Thank you for contacting us, " +
//         firstName +
//         " " +
//         lastName +
//         "! We will get back to you shortly."
//     );

//     // Reset form
//     form.reset();
//   });

//   function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   }
// });

// Button functionality JS

const myButton = document.getElementById("our-services-main-btn");
const targetElementId = "our-services-main-content"; // Replace with the actual ID

myButton.addEventListener("click", () => {
  window.location.href = `about.html#${targetElementId}`;
});

const aboutButton = document.getElementById("learn-more-btn");
const targetElementId2 = "about-us-section"; // Replace with the actual ID

aboutButton.addEventListener("click", () => {
  window.location.href = `about.html#${targetElementId2}`;
});
