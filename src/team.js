const teamCards = document.querySelectorAll(".team-card-teampage");

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("filter");

teamCards.forEach((card) => {
  const rolesText = card.querySelector(".cardposition");
  const rolesContainer = card.querySelector(".team-card-container");
  rolesText.style.display = "none";
  const roles = rolesText.textContent;
  roles.split(",").forEach((role) => {
    const roleElement = document.createElement("div");
    roleElement.classList.add("teamroles");
    roleElement.textContent = role;
    rolesContainer.appendChild(roleElement);
  });
  rolesContainer.style.opacity = 1;
});

const everyoneButton = document.getElementById("everyone-button");
const boardMembersButton = document.getElementById("board-members-button");
const investmentButton = document.getElementById("investment-committee-button");
const investmentTeamButton = document.getElementById("investment-team-button");
const investorRelationsButton = document.getElementById(
  "investor-relations-button"
);
const operationsButton = document.getElementById("operations-button");
const corporateButton = document.getElementById("corporate-button");

const buttons = [
  everyoneButton,
  boardMembersButton,
  investmentButton,
  investmentTeamButton,
  investorRelationsButton,
  operationsButton,
  corporateButton,
];
const filters = [
  "everyone",
  "board-members",
  "investment-committee",
  "investment-team",
  "investor-relations",
  "operations",
  "corporate",
];
let selectedFilter = "everyone";

everyoneButton.classList.add("selected");

//Todo:
// Handle selection of buttons and manage adding selected.

function filterByPosition(position) {
  // Get all team cards
  const cards = document.querySelectorAll(".collection-item");

  // Loop through each card
  cards.forEach((card) => {
    // Get positions from data-attribute and split into an array
    const positions = card
      .querySelector(".card-container")
      .getAttribute("data-positions")
      .split(",");
    // Check if the desired position is in the card's positions
    if (positions.includes(position)) {
      card.style.display = ""; // Show card if it matches
    } else {
      card.style.display = "none"; // Hide card if it doesn't match
    }
  });
}

function filterEveryone() {
  const cards = document.querySelectorAll(".collection-item");
  cards.forEach((card) => {
    card.style.display = "";
  });
}

const selectedText = document.getElementById("selected-text");

function handleButtonClickfilter(e, value, textContent) {
  if (textContent) {
    selectedText.textContent = textContent;
  }
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
  e.target.classList.add("selected");
  if (value === "everyone") {
    filterEveryone();
  } else {
    filterByPosition(value);
  }
}

if (myParam === "investment-team") {
  everyoneButton.classList.remove("selected");
  investmentTeamButton.classList.add("selected");
  selectedFilter = "investment-team";
  filterByPosition("investment-team");
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.getAttribute("data-value");
    handleButtonClickfilter(e, value);
  });
});

const dropdownButtons = document.querySelectorAll(".dropdown-button");

let dropdownOpen = false;

dropdownButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.getAttribute("data-value");
    const textContent = e.target.textContent;
    handleButtonClickfilter(e, value, textContent);
    dropdownOpen = false;
    dropdownArrow.style.transform = "rotate(0deg)";
    dropdownBox.style.display = "none";
  });
});

//Handle dropdown button click
const dropdownToggle = document.getElementById("dropdown-button");
const dropdownArrow = document.getElementById("drop-down-arrow");
const dropdownBox = document.getElementById("dropdown-box");

dropdownToggle.addEventListener("click", () => {
  if (dropdownOpen) {
    dropdownArrow.style.transform = "rotate(0deg)";
    dropdownBox.style.display = "none";
  } else {
    dropdownArrow.style.transform = "rotate(180deg)";
    dropdownBox.style.display = "block";
  }
  dropdownOpen = !dropdownOpen;
});

//handle no bio
const cards = document.querySelectorAll(".bio-check");
cards.forEach((card) => {
  if (!card.firstChild) {
    card.parentElement.style.pointerEvents = "none";
  }
});
