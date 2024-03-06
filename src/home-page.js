import { handleAccordion } from "./helpers.js";

const capitalButton = document.getElementById("capital-button");
const capitalHeader = document.getElementById("capital-header");
const capitalContainer = document.getElementById("capital-container");
let capitalOpen = open;
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
