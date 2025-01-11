document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const arabicButton = document.getElementById("arabic-button");
  const englishButton = document.getElementById("english-button");
  const welcomePage = document.getElementById("welcome-page");

  let currentLanguage = "en"; // Default language is English

  // Smooth scroll function
  let currentSection = 0;
  const scrollToSection = (index) => {
    sections[index].scrollIntoView({ behavior: "smooth" });
    currentSection = index;
  };

  // Language toggle function
  const toggleLanguage = (lang) => {
    const englishContent = document.querySelectorAll(".english");
    const arabicContent = document.querySelectorAll(".arabic");

    if (lang === "ar") {
      currentLanguage = "ar";
      englishContent.forEach((el) => (el.style.display = "none"));
      arabicContent.forEach((el) => (el.style.display = "block"));
    } else {
      currentLanguage = "en";
      englishContent.forEach((el) => (el.style.display = "block"));
      arabicContent.forEach((el) => (el.style.display = "none"));
    }
  };

  // Event listeners for language buttons on the welcome page
  englishButton.addEventListener("click", () => {
    toggleLanguage("en");
    welcomePage.style.display = "none"; // Hide the welcome page
    scrollToSection(0); // Scroll to the first section
  });

  arabicButton.addEventListener("click", () => {
    toggleLanguage("ar");
    welcomePage.style.display = "none"; // Hide the welcome page
    scrollToSection(0); // Scroll to the first section
  });

  // Countdown Functionality
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const weddingDate = new Date("2025-04-02T00:00:00");

  function updateCountdown() {
    const now = new Date();
    const timeDifference = weddingDate - now;

    if (timeDifference <= 0) {
      daysElement.textContent = "0";
      hoursElement.textContent = "0";
      minutesElement.textContent = "0";
      secondsElement.textContent = "0";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
});

// attendance function
document
  .getElementById("submit-response")
  .addEventListener("click", function () {
    // Get the input values
    const guestName = document.getElementById("guest-name").value.trim();
    const attendanceStatus = document.getElementById("attendance").value;

    // Validate if the guest has entered a name
    if (guestName === "") {
      alert("Please enter your name.");
      return;
    }

    // Get the response message container
    const responseMessage = document.getElementById("response-message");

    // Determine the message based on attendance choice
    if (attendanceStatus === "yes") {
      responseMessage.textContent = `I'm glad you can make it, ${guestName}! See you there.`;
    } else {
      responseMessage.textContent = `I'm sorry, ${guestName}, you can't make it.`;
    }

    // Show the response message
    responseMessage.style.display = "block";

    // Optionally, clear the form after submission
    document.getElementById("guest-name").value = "";
    document.getElementById("attendance").value = "yes";
  });

window.onload = () => {
  ScrollReveal().reveal(".slow-motion-left", {
    distance: "70px",
    duration: 2000,
    delay: 500,
    opacity: 0,
    reset: true,
    easing: "ease-out",
    origin: "left",
    interval: 300,
  });

  ScrollReveal().reveal(".slow-motion-right", {
    distance: "70px",
    duration: 2000,
    delay: 500,
    opacity: 0,
    reset: true,
    easing: "ease-out",
    origin: "right",
    interval: 300,
  });

  ScrollReveal().reveal(".slow-motion-bottom", {
    distance: "70px",
    duration: 3000,
    delay: 500,
    opacity: 0,
    reset: true,
    easing: "ease-out",
    origin: "bottom",
    interval: 300,
  });
};
