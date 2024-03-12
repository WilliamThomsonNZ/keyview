import { handleNewsletter } from "./newsletter";
import { newsletterSubmit } from "./newsletter-subscribe";
import { gsap } from "gsap";

newsletterSubmit();
//Handle mobile menu
const openButton = document.getElementById("mobile-open");
const closeButton = document.getElementById("mobile-close");
const mobileMenu = document.getElementById("mobile-menu");

//Add menu transition
mobileMenu.style.transition = "transform 0.3s ease-in-out";

function handleMobileOpen() {
  mobileMenu.style.transform = "translateX(0)";
}

function handleMobileClose() {
  mobileMenu.style.transform = "translateX(100%)";
}

openButton.addEventListener("click", handleMobileOpen);
closeButton.addEventListener("click", handleMobileClose);

//Handle mobile accordions
const fundAccordionContainer = document.getElementById("fund-mobile-accordion");
const fundAccordionButton = document.getElementById("fund-accordion-button");
const fundLabel = document.querySelector(
  "#fund-mobile-accordion .accordionlabel"
);
let fundOpen = false;
function handleFundAccordion() {
  if (fundOpen) {
    fundAccordionContainer.style.height = fundLabel.offsetHeight + 32 + "px";
    fundAccordionButton.querySelector(".lowerline").style.transform =
      "rotate(90deg)";
    fundOpen = false;
  } else {
    fundAccordionContainer.style.height = "unset";
    fundAccordionButton.querySelector(".lowerline").style.transform =
      "rotate(0deg)";
    fundOpen = true;
  }
}
fundLabel.addEventListener("click", () => handleFundAccordion());
fundAccordionContainer.style.height = fundLabel.offsetHeight + 32 + "px";

const newsAccordionContainer = document.getElementById("news-mobile-accordion");
const newsAccordionButton = document.getElementById("news-accordion-button");

const newsLabel = document.querySelector(
  "#news-mobile-accordion .accordionlabel"
);

let newsOpen = false;
function handleNewsAccordion() {
  if (newsOpen) {
    newsAccordionContainer.style.height = fundLabel.offsetHeight + 32 + "px";
    newsAccordionButton.querySelector(".lowerline").style.transform =
      "rotate(90deg)";
    newsOpen = false;
  } else {
    newsAccordionContainer.style.height = "unset";
    newsAccordionButton.querySelector(".lowerline").style.transform =
      "rotate(0deg)";
    newsOpen = true;
  }
}

newsLabel.addEventListener("click", () => handleNewsAccordion());
newsAccordionContainer.style.height = fundLabel.offsetHeight + 32 + "px";

//Handle desktop header drop down.
const headerFundButton = document.getElementById("fund-dropdown-button");
const headerContainer = document.getElementById("header-container");
const linksContainer = document.getElementById("fund-dropdown-container");
const fundArrow = document.getElementById("fund-arrow");

let headerOpen = false;

let headerOpenHeight = "206px";
let headerClosedHeight = "68px";
if (window.innerWidth < 992) {
  headerOpenHeight = "239px";
  headerClosedHeight = "59px";
}

headerFundButton.addEventListener("click", () => {
  if (!headerOpen) {
    headerContainer.style.height = headerOpenHeight;
    fundArrow.style.transform = "rotate(180deg)";

    headerOpen = true;
    setTimeout(() => {
      linksContainer.style.opacity = "1";
    }, 350);
  } else {
    fundArrow.style.transform = "rotate(0deg)";
    linksContainer.style.opacity = "0";
    setTimeout(() => {
      headerContainer.style.height = headerClosedHeight;
    }, 300);
    headerOpen = false;
  }
});

window.addEventListener("scroll", (e) => {
  if (!headerOpen) return;
  linksContainer.style.opacity = "0";
  fundArrow.style.transform = "rotate(0deg)";
  setTimeout(() => {
    headerContainer.style.height = headerClosedHeight;
  }, 300);
  headerOpen = false;
});

//Fix animation.
handleNewsletter();

const hasSeenCookies = localStorage.getItem("hasSeenCookies");
const cookieBanner = document.getElementById("cookie-bar");
const cookieButton = document.getElementById("close-cookies");

if (!hasSeenCookies && cookieBanner && cookieButton) {
  cookieBanner.style.transform = "translateY(0px)";
  cookieButton.addEventListener("click", () => {
    localStorage.setItem("hasSeenCookies", true);
    cookieBanner.style.transform = "translateY(100%)";
  });
}

//handle newsletter submit
//TODO:
//Implement validation.
//Send data to an end point.

// subscribeButton.addEventListener("click", subscribe);

// let selected = [];

// const investorTypes = document.querySelectorAll(".radiobutton");
// investorTypes.forEach((type) => {
//   type.classList.remove("selected");
//   type.addEventListener("click", () => {
//     const value = type.getAttribute("data-value");
//     const isSelected = handleInvestorType(value, selected);
//     if (isSelected) {
//       type.classList.add("selected");
//     } else {
//       type.classList.remove("selected");
//     }
//   });
// });

// function handleInvestorType(investorType, selected) {
//   if (selected.includes(investorType)) {
//     selected = selected.filter((type) => type !== investorType);
//     return false;
//   } else {
//     selected.push(investorType);
//     return true;
//   }
// }

const topLine = document.getElementById("top-line");
if (topLine) {
  gsap.fromTo(
    topLine,
    { width: 0 },
    {
      width: "100%",
      duration: 2.5,
      delay: 0,
      ease: "power4.inOut",
    }
  );
}
