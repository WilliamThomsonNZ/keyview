export function handleNewsletter() {
  const newsletterContainer = document.getElementById("newsletter-popout");
  const newsletterCloseSubscribed = document.getElementById(
    "newsletter-close-desktop-subscribed"
  );
  const newsletterFormContainer = document.getElementById(
    "newsletter-form-container"
  );
  const newsletterOverlay = document.getElementById("newsletter-overlay");
  const desktopNewsletterClose = document.getElementById(
    "newsletter-close-desktop"
  );

  function showNewsletter() {
    const newsletterShown = sessionStorage.getItem("newsletterShown");
    if (newsletterShown === null) {
      setTimeout(() => {
        openNewsletter();
      }, 60000);
    }
  }

  function openNewsletter() {
    sessionStorage.setItem("newsletterShown", "true");
    newsletterContainer.style.transform = "translateX(0)";
    newsletterOverlay.style.display = "block";
    if (window.innerWidth < 991) {
      document.body.style.overflow = "hidden";
    }
    setTimeout(() => {
      newsletterOverlay.style.opacity = "1";
    }, 500);
  }

  // showNewsletter();

  function closeNewsletter() {
    if (window.innerWidth > 992) {
      newsletterContainer.style.transform = "translateX(100%)";
    } else {
      newsletterContainer.style.transform = "translateX(120%)";
    }
    document.body.style.overflow = "auto";
    newsletterOverlay.style.opacity = "0";
    setTimeout(() => {
      newsletterOverlay.style.display = "none";
    }, 500);
  }

  desktopNewsletterClose.addEventListener("click", closeNewsletter);
  newsletterCloseSubscribed.addEventListener("click", closeNewsletter);
  newsletterOverlay.addEventListener("click", closeNewsletter);

  const subscribeButton = document.getElementById("subscribe-button");
  // subscribeButton.addEventListener("click", handleNewsletterSubmit);
}

function validateInputField(value) {
  if (value === "") {
    return false;
  } else {
    return true;
  }
}

// function showError(element) {
//   element.querySelector(".errormessage").style.display = "block";
//   element.querySelector(".forminput").style.border = "1px solid red";
// }

// function handleNewsletterSubmit() {
//   const form = document.getElementById("email-form-container");
//   const successState = document.getElementById("success-state");
//   const formWelcome = document.getElementById("form-welcome");
//   const subscribeButton = document.getElementById("subscribe-button");
//   //Containers that require validation.
//   const firstNameContainer = document.getElementById("first-name-container");
//   const lastNameContainer = document.getElementById("last-name-container");
//   const emailContainer = document.getElementById("email-container");
//   const investorContainer = document.getElementById("investor-container");

//   //Inputs that do not require validation.
//   const qualifyToggle = document.getElementById("qualify-toggle");
//   const findOUt = document.getElementById("find-out");
//   let errors = false;
//   //Validate
//   //1. First Name
//   if (
//     !validateInputField(firstNameContainer.querySelector("#first-name").value)
//   ) {
//     errors = true;
//     showError(firstNameContainer);
//   }

//   if (
//     !validateInputField(lastNameContainer.querySelector("#last-name").value)
//   ) {
//     errors = true;
//     showError(lastNameContainer);
//   }

//   if (
//     !validateInputField(emailContainer.querySelector("#email-address").value)
//   ) {
//     errors = true;
//     showError(emailContainer);
//   }
//   if (!errors) return;
//   //Work radio for newsletter..
//   form.style.display = "none";
//   formWelcome.style.display = "none";
//   successState.style.display = "flex";
//   //Steps
//   //1. Grab all the inputs.
//   //2. Validate the inputs.
//   //3. Fire the inputs off to serverless function.
//   //4. Show success state.
// }
