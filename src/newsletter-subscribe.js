import {
  handleErrorStates,
  handleEmailErrorStates,
  clearInputs,
} from "./helpers.js";

export function newsletterSubmit() {
  //Manage drop downs:
  const container = document.getElementById("dropdown-container-i");
  const button = document.getElementById("dropdown-button-i");
  const icon = document.getElementById("dropdown-icon-i");
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

  const contactSubmit = document.getElementById("subscribe-button-n");

  const firstNameContainer = document.getElementById("first-name-container-n");
  const firstNameInput = document.getElementById("first-name-n");

  const lastNameContainer = document.getElementById("last-name-container-n");
  const lastNameInput = document.getElementById("last-name-n");

  //   const phoneContainer = document.getElementById("phone-container");
  //   const phoneInput = document.getElementById("Phone-Number");

  const emailContainer = document.getElementById("email-container-n");
  const emailInput = document.getElementById("email-address-n");

  const messageInput = document.getElementById("find-out-n");
  const cantApply = document.getElementById("cant-apply");
  const successMessage = document.getElementById("success-message");

  let isSophisticatedInvestor = true;
  let dropdownOpen = false;

  const dropdownContainer = document.getElementById("dropdown-container-n");
  const dropDownButton = document.getElementById("dropdown-button-n");
  const dropDownIcon = document.getElementById("dropdown-icon-n");
  const dropdownText = document.getElementById("dropdown-text-n");

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

  document.getElementById("yes-button-n").addEventListener("click", () => {
    isSophisticatedInvestor = true;
    dropdownText.textContent = "Yes";
    dropdownContainer.style.display = "none";
    dropDownIcon.style.transform = "rotate(0deg)";
    contactSubmit.style.display = "block";
    cantApply.style.display = "none";
  });

  document.getElementById("no-button-n").addEventListener("click", () => {
    isSophisticatedInvestor = false;
    contactSubmit.style.display = "none";
    cantApply.style.display = "block";
    dropdownText.textContent = "No";
    dropdownContainer.style.display = "none";
    dropDownIcon.style.transform = "rotate(0deg)";
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
    console.log("click");

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
          "#investor-container .errormessage"
        ).style.display = "block";
      } else {
        document.querySelector(
          "#investor-container .errormessage"
        ).style.display = "none";
      }
      contactSubmit.classList.remove("loading");
      return;
    }

    //Handle signup.
    try {
      const response = await fetch(
        "https://api-bay-beta.vercel.app/api/v1/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            emailAddress: emailInput.value,
            findOut: messageInput.value,
            investorType: selected,
            isSophisticatedInvestor,
          }),
        }
      );
      const data = await response.json();

      contactSubmit.classList.remove("loading");

      const form = document.getElementById("email-form-container");
      const successState = document.getElementById("success-state");
      const formWelcome = document.getElementById("form-welcome");
      form.style.display = "none";
      formWelcome.style.display = "none";
      successState.style.display = "flex";

      clearInputs([firstNameInput, lastNameInput, emailInput, messageInput]);
    } catch (err) {
      console.log(err);
    }
  }

  contactSubmit.addEventListener("click", submitContactForm);
}
