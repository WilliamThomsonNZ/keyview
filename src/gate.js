import {
  handleErrorStates,
  handleEmailErrorStates,
  clearInputs,
} from "./helpers.js";

let selected;

const watchButton = document.getElementById("watch-button");
const yesButton = document.getElementById("yes-button-f");
const noButton = document.getElementById("no-button-f");

let isSophisticatedInvestor = true;

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

const container = document.getElementById("dropdown-container-f");
const button = document.getElementById("dropdown-button-f");
const icon = document.getElementById("dropdown-icon-i");
const dropdownButtons = document.querySelectorAll(".dropdowninvestor");

let investorDropdownOpen = false;
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

yesButton.addEventListener("click", () => {
  isSophisticatedInvestor = true;
  watchButton.style.display = "block";
  cantApply.style.display = "none";
  yesButton.classList.add("selected");
  noButton.classList.remove("selected");
});

noButton.addEventListener("click", () => {
  isSophisticatedInvestor = false;
  watchButton.style.display = "none";
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
  console.log("hi");
  const link = document.getElementById("watch-link").href;
  if (!isSophisticatedInvestor) return;
  e.target.classList.add("loading");
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
    e.target.classList.remove("loading");
    return;
  }
  // Handle signup.
  try {
    const response = await fetch(
      "https://api-bay-beta.vercel.app/api/v1/gate",
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
        }),
      }
    );
    const data = await response.json();

    e.target.classList.remove("loading");

    if (link) {
      window.open(link);
    }
    // clearInputs([firstNameInput, lastNameInput, emailInput, messageInput]);
  } catch (err) {
    console.log(err);
  }
}

watchButton.addEventListener("click", submitContactForm);
