const buttons = document.querySelectorAll(".newslink");

let filters = [];
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = button.textContent;
    handleButtonClickfilter(e, value);
  });
  filters.push(button.textContent);
});

let selectedFilter = "everyone";

buttons[0].classList.add("selected");

//Todo:
// Handle selection of buttons and manage adding selected.

function filterByTag(tag) {
  // Get all team cards
  const cards = document.querySelectorAll(".card");
  // Loop through each card
  cards.forEach((card) => {
    // Get positions from data-attribute and split into an array
    const tags = card.getAttribute("tags").toLowerCase().split(",");
    // Check if the desired position is in the card's positions
    if (tags.includes(tag.toLowerCase())) {
      card.style.display = ""; // Show card if it matches
    } else {
      card.style.display = "none"; // Hide card if it doesn't match
    }
  });
}

function filterEveryone() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.display = "";
  });
}

//   const selectedText = document.getElementById("selected-text");

function handleButtonClickfilter(e, value, textContent) {
  // if (textContent) {
  //   selectedText.textContent = textContent;
  // }
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
  e.target.classList.add("selected");
  if (value === "All") {
    filterEveryone();
  } else {
    filterByTag(value);
  }
}
