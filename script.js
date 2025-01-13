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
    currentLanguage = lang;

    if (lang === "ar") {
      englishContent.forEach((el) => (el.style.display = "none"));
      arabicContent.forEach((el) => (el.style.display = "block"));
      updateCountdownLanguage(true);
    } else {
      englishContent.forEach((el) => (el.style.display = "block"));
      arabicContent.forEach((el) => (el.style.display = "none"));
      updateCountdownLanguage(false);
    }
  };

  // Countdown Functionality
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const weddingDate = new Date("2025-04-02T00:00:00");

  function convertToArabicNumbers(number) {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .split("")
      .map((digit) => arabicNumbers[digit])
      .join("");
  }

  function updateCountdown() {
    const now = new Date();
    const timeDifference = weddingDate - now;

    if (timeDifference <= 0) {
      daysElement.textContent = currentLanguage === "ar" ? "٠" : "0";
      hoursElement.textContent = currentLanguage === "ar" ? "٠" : "0";
      minutesElement.textContent = currentLanguage === "ar" ? "٠" : "0";
      secondsElement.textContent = currentLanguage === "ar" ? "٠" : "0";
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

    daysElement.textContent =
      currentLanguage === "ar" ? convertToArabicNumbers(days) : days;
    hoursElement.textContent =
      currentLanguage === "ar" ? convertToArabicNumbers(hours) : hours;
    minutesElement.textContent =
      currentLanguage === "ar" ? convertToArabicNumbers(minutes) : minutes;
    secondsElement.textContent =
      currentLanguage === "ar" ? convertToArabicNumbers(seconds) : seconds;
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  function updateCountdownLanguage(isArabic) {
    const dayLabel = document.querySelector("#days + span");
    const hourLabel = document.querySelector("#hours + span");
    const minuteLabel = document.querySelector("#minutes + span");
    const secondLabel = document.querySelector("#seconds + span");

    if (isArabic) {
      dayLabel.textContent = "يوم";
      hourLabel.textContent = "ساعة";
      minuteLabel.textContent = "دقيقة";
      secondLabel.textContent = "ثانية";
      document.getElementById("countdown").style.direction = "rtl";
    } else {
      dayLabel.textContent = "DAY";
      hourLabel.textContent = "HOURS";
      minuteLabel.textContent = "MINUTES";
      secondLabel.textContent = "SECONDS";
      document.getElementById("countdown").style.direction = "ltr";
    }
  }

  // Event listeners for language buttons
  englishButton.addEventListener("click", () => {
    toggleLanguage("en");
    welcomePage.style.display = "none";
    scrollToSection(0);
  });

  arabicButton.addEventListener("click", () => {
    toggleLanguage("ar");
    welcomePage.style.display = "none";
    scrollToSection(0);
  });

  // Add Scroll Indicators
  function addScrollIndicators() {
    sections.forEach((section, index) => {
      if (index < sections.length - 1) {
        const arrow = document.createElement("div");
        arrow.classList.add("scroll-indicator");
        arrow.innerHTML = "&#8595;"; // Down arrow
        section.appendChild(arrow);

        arrow.addEventListener("click", () => {
          sections[index + 1].scrollIntoView({ behavior: "smooth" });
        });
      }
    });
  }

  addScrollIndicators();
});

// attendance function
// Attendance form submission logic
document.addEventListener("DOMContentLoaded", () => {
  // Function to handle form submission
  const handleSubmit = (lang) => {
    const nameField = document.getElementById(`guest-name-${lang}`);
    const attendanceField = document.getElementById(`attendance-${lang}`);
    const responseMessage = document.getElementById(`response-message-${lang}`);

    const guestName = nameField.value.trim();
    const attendanceStatus = attendanceField.value;

    // Validate input
    if (!guestName) {
      alert(lang === "ar" ? "يرجى إدخال اسمك." : "Please enter your name.");
      return;
    }

    // Set response message based on language
    responseMessage.textContent =
      lang === "ar"
        ? attendanceStatus === "yes"
          ? `سعداء بحضورك يا ${guestName}! `
          : `عذرًا يا ${guestName}, لن تستطيع الحضور.`
        : attendanceStatus === "yes"
        ? `I'm glad you can make it, ${guestName}! See you there.`
        : `I'm sorry, ${guestName}, you can't make it.`;

    // Show the response message
    responseMessage.style.display = "block";

    // Clear form inputs
    nameField.value = "";
    attendanceField.value = "yes";
  };

  // Attach event listeners for both English and Arabic forms
  document
    .getElementById("submit-response-en")
    .addEventListener("click", () => handleSubmit("en"));
  document
    .getElementById("submit-response-ar")
    .addEventListener("click", () => handleSubmit("ar"));

  // Clear inputs on page reload for both languages
  window.addEventListener("load", () => {
    document.querySelectorAll(".attendance-form input").forEach((input) => {
      input.value = "";
    });
    document.querySelectorAll(".attendance-form select").forEach((select) => {
      select.value = "yes";
    });
  });
});

// Clear form inputs on page load
window.addEventListener("load", () => {
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
