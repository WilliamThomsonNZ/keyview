import { handleAccordion } from "./helpers.js";
import { gsap } from "gsap";
const capitalButton = document.getElementById("capital-button");
const capitalHeader = document.getElementById("capital-header");
const capitalContainer = document.getElementById("capital-container");
let capitalOpen = false;
const capitalInitialHeight = capitalContainer.clientHeight;

handleAccordion({
  button: capitalButton,
  header: capitalHeader,
  container: capitalContainer,
  open: capitalOpen,
  initialHeight: capitalInitialHeight,
  headerPadding: 0,
});

const attractiveButton = document.getElementById("attractive-button");
const attractiveHeader = document.getElementById("attractive-header");
const attractiveContainer = document.getElementById("attractive-container");
let attractiveOpen = false;
const attractiveInitialHeight = attractiveContainer.clientHeight;

handleAccordion({
  button: attractiveButton,
  header: attractiveHeader,
  container: attractiveContainer,
  open: attractiveOpen,
  initialHeight: attractiveInitialHeight,
  headerPadding: 0,
});

const alignmentButton = document.getElementById("alignment-button");
const alignmentHeader = document.getElementById("alignment-header");
const alignmentContainer = document.getElementById("alignment-container");
let alignmentOpen = false;
const alignmentInitialHeight = alignmentContainer.clientHeight;

handleAccordion({
  button: alignmentButton,
  header: alignmentHeader,
  container: alignmentContainer,
  open: alignmentOpen,
  initialHeight: alignmentInitialHeight,
  headerPadding: 0,
});

const marginButton = document.getElementById("margin-button");
const marginHeader = document.getElementById("margin-header");
const marginContainer = document.getElementById("margin-container");
let marginOpen = false;
const marginInitialHeight = marginContainer.clientHeight;

handleAccordion({
  button: marginButton,
  header: marginHeader,
  container: marginContainer,
  open: marginOpen,
  initialHeight: marginInitialHeight,
  headerPadding: 0,
});

//Set up subscribe.
const checkbox = document.getElementById("checkbox-home");
const subscribeButton = document.getElementById("subscribe-button");
const emailInput = document.getElementById("email-home");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const cantSubscribeText = document.getElementById("cant-subscribe-text");

let checkboxChecked = false;
checkbox.addEventListener("click", () => {
  checkboxChecked = !checkboxChecked;
});

async function subscribe(e) {
  e.preventDefault();

  if (emailInput.value === "") {
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
    cantSubscribeText.style.display = "none";
    return;
  }

  if (!checkboxChecked) {
    cantSubscribeText.style.display = "block";
    errorMessage.style.display = "none";
    successMessage.style.display = "none";
    return;
  }
  cantSubscribeText.style.display = "none";
  errorMessage.style.display = "none";
  successMessage.style.display = "none";

  subscribeButton.classList.add("loading");
  try {
    const response = await fetch(
      "https://api-bay-beta.vercel.app/api/v1/newsletter-home",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: emailInput.value,
          investorType: checkbox.checked,
        }),
      }
    );
    const data = await response.json();
    subscribeButton.classList.remove("loading");
    successMessage.style.display = "block";
    emailInput.value = "";
    checkbox.checked = false;
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 6000);
  } catch (error) {
    console.log(error);
  }
}

subscribeButton.addEventListener("click", subscribe);

let selected = [];

const investorTypes = document.querySelectorAll(".radiobutton");
investorTypes.forEach((type) => {
  type.classList.remove("selected");
  type.addEventListener("click", () => {
    const value = type.getAttribute("data-value");
    const isSelected = handleInvestorType(value, selected);
    if (isSelected) {
      type.classList.add("selected");
    } else {
      type.classList.remove("selected");
    }
  });
});

function handleInvestorType(investorType, selected) {
  if (selected.includes(investorType)) {
    selected = selected.filter((type) => type !== investorType);
    return false;
  } else {
    selected.push(investorType);
    return true;
  }
}

//Manage home page slider.
// The idea is that we load the content of the slider.
// Extract out the data from the posts.
// Set up the slider so that it runs continously or when the button is clicked.

const slides = document.querySelectorAll("#hero-carousel .list-item");
let startingSlideText;
let startingButton;
let startingImage;

let slideData = [];

slides.forEach((slide, index) => {
  if (index === 0) {
    startingSlideText = slide.querySelector(".herotext");
    startingButton = slide.querySelector(".herobuttonslider");
    startingImage = slide.querySelector(".heroimage");
  }
  slideData.push({
    text: slide.querySelector(".herotext").textContent,
    button: slide.querySelector(".herobuttonslider").href,
    image: slide.querySelector(".heroimage").srcset,
  });
});

console.log(slideData);

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 10000);
const mobileButtons = document.querySelectorAll(".herobutton");

function nextSlide() {
  const nextSlideIndex = (currentSlide + 1) % slideData.length;
  const nextSlide = slideData[nextSlideIndex];
  mobileButtons.forEach((button) => {
    button.classList.remove("selected");
  });
  mobileButtons[nextSlideIndex].classList.add("selected");
  gsap.to(startingSlideText, {
    opacity: 0,
    y: 25,
    duration: 0.5,
    onComplete: () => {
      startingSlideText.textContent = nextSlide.text;
      gsap.to(startingSlideText, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0,
      });
    },
  });

  gsap.to(startingButton, {
    opacity: 0,
    duration: 0.5,
    y: 25,
    onComplete: () => {
      startingButton.href = nextSlide.button;
      gsap.to(startingButton, {
        opacity: 1,
        duration: 0.5,
        y: 0,
        delay: 0.2,
      });
    },
  });

  gsap.to(startingImage, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      startingImage.srcset = nextSlide.image;
      gsap.to(startingImage, { opacity: 1, duration: 0.5 });
    },
  });
  currentSlide = nextSlideIndex;
}

const loadingElement = document.getElementById("loading-inner");
const animationDuration = 10000; // milliseconds
const animationDelay = 500; // milliseconds
let animation;

function animateLoadingElement() {
  animation = gsap.fromTo(
    loadingElement,
    { width: "0%" },
    {
      width: "100%",
      ease: "none",
      duration: animationDuration / 1000,
      onComplete: resetAndAnimateLoadingElement,
    }
  );
}

function resetAndAnimateLoadingElement() {
  animation.kill();
  animateLoadingElement();
}
if (loadingElement) {
  animateLoadingElement();
}

const nextButton = document.getElementById("next-hero-button");
const prevButton = document.getElementById("prev-hero-button");

if (nextButton) {
  nextButton.addEventListener("click", () => {
    clearInterval(slideInterval);
    nextSlide();
    resetAndAnimateLoadingElement();
    slideInterval = setInterval(nextSlide, 10000);
  });

  prevButton.addEventListener("click", () => {
    clearInterval(slideInterval);
    const previousSlideIndex = currentSlide == 0 ? 2 : currentSlide - 1;
    const previousSlide = slideData[previousSlideIndex];
    gsap.to(startingSlideText, {
      opacity: 0,
      y: 25,
      duration: 0.5,
      onComplete: () => {
        startingSlideText.textContent = previousSlide.text;
        gsap.to(startingSlideText, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0,
        });
      },
    });

    gsap.to(startingButton, {
      opacity: 0,
      duration: 0.5,
      y: 25,
      onComplete: () => {
        startingButton.href = previousSlide.button;
        gsap.to(startingButton, {
          opacity: 1,
          duration: 0.5,
          y: 0,
          delay: 0.2,
        });
      },
    });

    gsap.to(startingImage, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        startingImage.srcset = previousSlide.image;
        gsap.to(startingImage, { opacity: 1, duration: 0.5 });
      },
    });
    currentSlide = previousSlideIndex;
    resetAndAnimateLoadingElement();
    slideInterval = setInterval(nextSlide, 10000);
  });
}

function setNextSlide(index) {
  clearInterval(slideInterval);
  const nextSlideIndex = index % slideData.length;
  const nextSlide = slideData[nextSlideIndex];
  gsap.to(startingSlideText, {
    opacity: 0,
    y: 25,
    duration: 0.5,
    onComplete: () => {
      startingSlideText.textContent = nextSlide.text;
      gsap.to(startingSlideText, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0,
      });
    },
  });
  gsap.to(startingButton, {
    opacity: 0,
    duration: 0.5,
    y: 25,
    onComplete: () => {
      startingButton.href = nextSlide.button;
      gsap.to(startingButton, {
        opacity: 1,
        duration: 0.5,
        y: 0,
        delay: 0.2,
      });
    },
  });
  gsap.to(startingImage, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      startingImage.srcset = nextSlide.image;
      gsap.to(startingImage, { opacity: 1, duration: 0.5 });
    },
  });
  currentSlide = nextSlideIndex;
  resetAndAnimateLoadingElement();
  slideInterval = setInterval(nextSlide, 10000);
}
if (mobileButtons.length > 0) {
  mobileButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      setNextSlide(index);
      clearInterval(slideInterval);
      resetAndAnimateLoadingElement();
      slideInterval = setInterval(nextSlide, 10000);
      mobileButtons.forEach((button) => {
        button.classList.remove("selected");
      });
      button.classList.add("selected");
    });
  });
}
const numbers = document.querySelectorAll(".innernumber");
const container = document.querySelector(".div-block-191");

if (numbers.length > 0) {
  numbers.forEach((number) => {
    gsap.fromTo(
      number,
      { y: 0 },
      {
        y: (number.clientHeight - container.clientHeight - 5) * -1,

        duration: 1.5,
      }
    );
  });
}
