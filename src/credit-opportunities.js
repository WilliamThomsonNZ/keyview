import { handleAccordion } from "./helpers";
import {
  handleErrorStates,
  handleEmailErrorStates,
  clearInputs,
} from "./helpers.js";
const allFaqAccordions = [...document.querySelectorAll(".accordioncontainer")];

allFaqAccordions.forEach((accordion, index) => {
  const header = accordion.querySelector(`.faqheader`);
  const button = accordion.querySelector(`.accordionbutton`);
  const container = accordion;
  let open = index == 0 ? true : false;
  const initialHeight = container.clientHeight;
  const headerPadding = 0;

  handleAccordion({
    button,
    header,
    container,
    open,
    initialHeight,
    headerPadding,
  });
});

const downloadButton = document.getElementById("fund-download");
const closeDownloadButton = document.getElementById("close-fund-download");
const newsletterOverlay = document.getElementById("newsletter-overlay");
const downloadContainer = document.getElementById("download-container");

if (downloadContainer) {
  downloadContainer.style.opacity = "0";
  downloadContainer.style.display = "none";
}

if (newsletterOverlay) {
  newsletterOverlay.addEventListener("click", () => {
    newsletterOverlay.style.opacity = "0";
    downloadContainer.style.opacity = "0";
    setTimeout(() => {
      newsletterOverlay.style.display = "none";
      downloadContainer.style.display = "none";
    }, 300);
  });
}
if (downloadButton) {
  downloadButton.addEventListener("click", () => {
    newsletterOverlay.style.display = "block";
    downloadContainer.style.display = "block";
    setTimeout(() => {
      newsletterOverlay.style.opacity = "1";
      downloadContainer.style.opacity = "1";
    }, 300);
    // handleFundDownload(downloadButton);
  });
}

if (closeDownloadButton) {
  closeDownloadButton.addEventListener("click", () => {
    newsletterOverlay.style.opacity = "0";
    downloadContainer.style.opacity = "0";

    setTimeout(() => {
      newsletterOverlay.style.display = "none";
      downloadContainer.style.display = "none";
    }, 300);
    // handleFundDownload(downloadButton);
  });
}

//Manage drop downs:
const container = document.getElementById("dropdown-container-f");
const button = document.getElementById("dropdown-button-f");
const icon = document.getElementById("dropdown-icon-f");
const dropdownButtons = document.querySelectorAll(".dropdowninvestor");

let investorDropdownOpen = false;
let selected;
button.addEventListener("click", () => {
  if (investorDropdownOpen) {
    container.style.display = "none";
    icon.style.transform = "rotate(0deg)";
    investorDropdownOpen = false;
  } else {
    container.style.display = "block";
    icon.style.transform = "rotate(180deg)";
    investorDropdownOpen = true;
  }
});

dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selected = button.textContent;
    document.getElementById("investor-text").textContent = selected;
    container.style.display = "none";
    icon.style.transform = "rotate(0deg)";
    investorDropdownOpen = false;
  });
});

const contactSubmit = document.getElementById("subscribe-button-f");

const firstNameContainer = document.getElementById("first-name-container-f");
const firstNameInput = document.getElementById("first-name-f");

const lastNameContainer = document.getElementById("last-name-container-f");
const lastNameInput = document.getElementById("last-name-f");

//   const phoneContainer = document.getElementById("phone-container");
//   const phoneInput = document.getElementById("Phone-Number");

const emailContainer = document.getElementById("email-container-f");
const emailInput = document.getElementById("email-address-f");

const messageInput = document.getElementById("find-out-f");
const cantApply = document.getElementById("cant-subscribe-text-f");
const successMessage = document.getElementById("success-message-f");

let isSophisticatedInvestor = true;
let dropdownOpen = false;

const dropdownContainer = document.getElementById("dropdown-container-f");
const yesButton = document.getElementById("yes-button-f");
const noButton = document.getElementById("no-button-f");

yesButton.addEventListener("click", () => {
  isSophisticatedInvestor = true;
  contactSubmit.style.display = "block";
  cantApply.style.display = "none";
  yesButton.classList.add("selected");
  noButton.classList.remove("selected");
});

noButton.addEventListener("click", () => {
  isSophisticatedInvestor = false;
  contactSubmit.style.display = "none";
  cantApply.style.display = "block";
  noButton.classList.add("selected");
  yesButton.classList.remove("selected");
});

const investorTypes = document.querySelectorAll(".radiobutton-newsletter");

investorTypes.forEach((button) => {
  button.addEventListener("click", () => {
    selected = button.getAttribute("data-value");
    investorTypes.forEach((button) => {
      button.classList.remove("selected");
    });
    button.classList.add("selected");
  });
});

async function submitContactForm(e) {
  e.preventDefault();
  const pdf = e.target.href ? e.target.href : e.target.parentElement.href;

  if (!isSophisticatedInvestor) return;
  contactSubmit.classList.add("loading");
  //handle
  const fNameValidation = handleErrorStates(
    firstNameInput.value,
    firstNameContainer
  );

  const lNameValidation = handleErrorStates(
    lastNameInput.value,
    lastNameContainer
  );

  const emailValidation = handleEmailErrorStates(
    emailInput.value,
    emailContainer
  );

  if (!fNameValidation || !lNameValidation || !emailValidation || !selected) {
    if (!selected) {
      document.querySelector(
        "#investor-container-f .errormessage"
      ).style.display = "block";
    } else {
      document.querySelector(
        "#investor-container-f .errormessage"
      ).style.display = "none";
    }
    contactSubmit.classList.remove("loading");
    return;
  }

  if (pdf) {
    window.open(pdf, "_blank");
  }

  // Handle signup.
  try {
    const response = await fetch(
      "https://api-bay-beta.vercel.app/api/v1/fund",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          emailAddress: emailInput.value,
          investorType: selected,
          fundType: "credit-opportunities",
        }),
      }
    );
    const data = await response.json();

    contactSubmit.classList.remove("loading");
    const form = document.getElementById("email-form-container");
    const successState = document.getElementById("success-state");
    const formWelcome = document.getElementById("form-welcome");
    // form.style.display = "none";
    // formWelcome.style.display = "none";
    // successState.style.display = "flex";
    if (pdf) {
      window.open(pdf, "_blank");
    }
    clearInputs([firstNameInput, lastNameInput, emailInput, messageInput]);
  } catch (err) {
    console.log(err);
  }
}

contactSubmit.addEventListener("click", submitContactForm);
