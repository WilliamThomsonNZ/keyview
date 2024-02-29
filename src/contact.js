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

const phoneContainer = document.getElementById("phone-container");
const phoneInput = document.getElementById("Phone-Number");

const emailContainer = document.getElementById("email-container");
const emailInput = document.getElementById("Contact-Email");

const messageContainer = document.getElementById("message-container");
const messageInput = document.getElementById("message-input");

const successMessage = document.getElementById("success-message");

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
  const phoneValidation = handleErrorStates(phoneInput.value, phoneContainer);

  const emailValidation = handleEmailErrorStates(
    emailInput.value,
    emailContainer
  );

  const messageValidation = handleErrorStates(
    messageInput.value,
    messageContainer
  );

  if (
    !fNameValidation ||
    !lNameValidation ||
    !phoneValidation ||
    !emailValidation ||
    !messageValidation
  ) {
    contactSubmit.classList.remove("loading");
    return;
  }
  //Handle signup.
  try {
    const response = await fetch(
      "https://api-bay-beta.vercel.app/api/v1/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          emailAddress: emailInput.value,
          message: messageInput.value,
          phoneNumber: phoneInput.value,
        }),
      }
    );
    const data = await response.json();

    contactSubmit.classList.remove("loading");
    successMessage.style.opacity = "1";

    clearInputs([
      firstNameInput,
      lastNameInput,
      phoneInput,
      emailInput,
      messageInput,
    ]);
    setTimeout(() => {
      successMessage.style.opacity = "0";
    }, 6000);
  } catch (err) {
    console.log(err);
  }
}

contactSubmit.addEventListener("click", submitContactForm);
