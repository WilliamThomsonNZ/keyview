import {
  handleErrorStates,
  handleEmailErrorStates,
  clearInputs,
} from "./helpers.js";

const contactSubmit = document.getElementById("contact-submit");
const firstNameContainer = document.getElementById("fName-container");
const firstNameInput = document.getElementById("First-Name-Contact");

const lastNameContainer = document.getElementById("lName-container");
const lastNameInput = document.getElementById("Last-Name-Contact");

// const phoneContainer = document.getElementById("phone-container");
// const phoneInput = document.getElementById("Phone-Number");

const emailContainer = document.getElementById("email-container");
const emailInput = document.getElementById("Contact-Email");

const messageContainer = document.getElementById("message-container");
const messageInput = document.getElementById("message-input");

let investorType = "Yes";
let dropdownOpen = false;

const dropdownContainer = document.getElementById("dropdown-container");
const dropDownButton = document.getElementById("dropdown-button");
const dropDownIcon = document.getElementById("dropdown-icon");
const dropdownText = document.getElementById("dropdown-text");

dropDownButton.addEventListener("click", () => {
  if (dropdownOpen) {
    dropdownContainer.style.display = "none";
    dropDownIcon.style.transform = "rotate(0deg)";
    dropdownOpen = false;
    return;
  } else {
    dropdownContainer.style.display = "flex";
    dropDownIcon.style.transform = "rotate(180deg)";
    dropdownOpen = true;
  }
});

document.getElementById("yes-button").addEventListener("click", () => {
  investorType = "Yes";
  dropdownText.textContent = "Yes";
  dropdownContainer.style.display = "none";
  dropDownIcon.style.transform = "rotate(0deg)";
});

document.getElementById("no-button").addEventListener("click", () => {
  investorType = "No";
  dropdownText.textContent = "No";
  dropdownContainer.style.display = "none";
  dropDownIcon.style.transform = "rotate(0deg)";
});

async function submitContactForm(e) {
  e.preventDefault();

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
  // const phoneValidation = handleErrorStates(phoneInput.value, phoneContainer);

  const emailValidation = handleEmailErrorStates(
    emailInput.value,
    emailContainer
  );

  if (
    !fNameValidation ||
    !lNameValidation ||
    // !phoneValidation ||
    !emailValidation
  ) {
    contactSubmit.classList.remove("loading");
    return;
  }
  //Handle signup.
  try {
    const response = await fetch(
      "https://api-bay-beta.vercel.app/api/v1/application",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          emailAddress: emailInput.value,
          message: messageInput.value !== "" ? messageInput.value : "",
          investorType,
        }),
      }
    );
    const data = await response.json();
    window.location.href = "/apply-success";
    contactSubmit.classList.remove("loading");
    clearInputs([
      firstNameInput,
      lastNameInput,
      phoneInput,
      emailInput,
      messageInput,
    ]);
  } catch (err) {
    console.log(err);
  }
}

contactSubmit.addEventListener("click", submitContactForm);
