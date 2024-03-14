const checkbox = document.getElementById("checkbox-home-w");
const subscribeButton = document.getElementById("subscribe-button-w");
const emailInput = document.getElementById("email-home-w");
const errorMessage = document.getElementById("error-message-w");
const successMessage = document.getElementById("success-message-w");
const cantSubscribeText = document.getElementById("cant-subscribe-text-w");

let checkboxChecked = false;
if (checkbox !== null) {
  checkbox.addEventListener("click", () => {
    checkboxChecked = !checkboxChecked;
  });
}

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

if (subscribeButton !== null) {
  subscribeButton.addEventListener("click", subscribe);
}

const checkboxB = document.getElementById("checkbox-home");
const subscribeButtonB = document.getElementById("subscribe-button");
const emailInputB = document.getElementById("email-home");
const errorMessageB = document.getElementById("error-message");
const successMessageB = document.getElementById("success-message");
const cantSubscribeTextB = document.getElementById("cant-subscribe-text");

console.log("blog");

let checkboxCheckedB = false;
if (checkboxB !== null) {
  checkboxB.addEventListener("click", () => {
    checkboxCheckedB = !checkboxCheckedB;
  });
}
async function subscribeB(e) {
  e.preventDefault();
  if (emailInputB.value === "") {
    errorMessageB.style.display = "block";
    successMessageB.style.display = "none";
    cantSubscribeTextB.style.display = "none";
    return;
  }

  if (!checkboxCheckedB) {
    cantSubscribeTextB.style.display = "block";
    errorMessageB.style.display = "none";
    successMessageB.style.display = "none";
    return;
  }
  cantSubscribeTextB.style.display = "none";
  errorMessageB.style.display = "none";
  successMessageB.style.display = "none";

  subscribeButtonB.classList.add("loading");
  try {
    const response = await fetch(
      "https://api-bay-beta.vercel.app/api/v1/newsletter-home",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: emailInputB.value,
          investorType: checkboxB.checked,
        }),
      }
    );
    const data = await response.json();
    subscribeButtonB.classList.remove("loading");
    successMessageB.style.display = "block";
    emailInputB.value = "";
    checkboxB.checked = false;
    setTimeout(() => {
      successMessageB.style.display = "none";
    }, 6000);
  } catch (error) {
    console.log(error);
  }
}

if (subscribeButtonB !== null) {
  subscribeButtonB.addEventListener("click", subscribeB);
}

//Handle share links.
const shareLinkedIn = document.getElementById("share-linkedIn");
shareLinkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`;
shareLinkedIn.target = "_blank";
shareLinkedIn.rel = "noopener noreferrer";

const shareButton = document.getElementById("share-button-linked");
shareButton.href = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`;
shareButton.target = "_blank";
shareButton.rel = "noopener noreferrer";

const shareTwitter = document.getElementById("twitter-share");
shareTwitter.href = `https://twitter.com/intent/tweet?url=${window.location.href}`;
shareTwitter.target = "_blank";
shareTwitter.rel = "noopener noreferrer";

const shareFacebook = document.getElementById("facebook-share");
shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
shareFacebook.target = "_blank";
shareFacebook.rel = "noopener noreferrer";

// const shareInstagram = document.getElementById("instagram-share");
