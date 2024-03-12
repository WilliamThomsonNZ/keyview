import { handleAccordion } from "./helpers";
import { gsap } from "gsap";
const numbers = document.querySelectorAll(".innernumber");
const container = document.querySelector(".numbercontainer");

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

const corporateAdvisorButton = document.getElementById(
  "corporate-advisor-button"
);
const corporateHeader = document.getElementById("corporate-header");
const corporateContainer = document.getElementById("corporate-container");
let corporateContainerOpen = open;
const corporateInitialHeight = corporateContainer.clientHeight;

const headerPadding = window.innerWidth > 991 ? 64 : 32;

handleAccordion({
  button: corporateAdvisorButton,
  header: corporateHeader,
  container: corporateContainer,
  open: corporateContainerOpen,
  initialHeight: corporateInitialHeight,
  headerPadding: headerPadding,
});

const companyAssetButton = document.getElementById("company-asset-button");
const companyAssetHeader = document.getElementById("company-asset-header");
const companyContainer = document.getElementById("company-asset-container");
let companyAssetContainerOpen = false;
const companyInitialHeight = companyContainer.clientHeight;

//Init accordions on corportate page.
handleAccordion({
  button: companyAssetButton,
  header: companyAssetHeader,
  container: companyContainer,
  open: companyAssetContainerOpen,
  initialHeight: companyInitialHeight,
  headerPadding: headerPadding,
});

const loansButton = document.getElementById("loans-button");
const loansHeader = document.getElementById("loans-header");
const loansContainer = document.getElementById("loans-container");
let loansOpen = true;
const loansInitialHeight = loansContainer.clientHeight;

handleAccordion({
  button: loansButton,
  header: loansHeader,
  container: loansContainer,
  open: loansOpen,
  initialHeight: loansInitialHeight,
  headerPadding: 32,
});

const realestateButton = document.getElementById("realestate-button");
const realestateHeader = document.getElementById("realestate-header");
const realestateContainer = document.getElementById("realestate-container");
let realestateOpen = false;
const realestateInitialHeight = realestateContainer.clientHeight;

handleAccordion({
  button: realestateButton,
  header: realestateHeader,
  container: realestateContainer,
  open: realestateOpen,
  initialHeight: realestateInitialHeight,
  headerPadding: 32,
});

const specialButton = document.getElementById("special-button");
const specialHeader = document.getElementById("special-header");
const specialContainer = document.getElementById("special-container");
let specialOpen = false;
const specialInitialHeight = specialContainer.clientHeight;

handleAccordion({
  button: specialButton,
  header: specialHeader,
  container: specialContainer,
  open: specialOpen,
  initialHeight: specialInitialHeight,
  headerPadding: 32,
});

//cubic-bezier(.645, .045, .355, 1)
