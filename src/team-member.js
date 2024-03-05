const teamCards = document.querySelectorAll(".team-card-teampage");
// teamCards.forEach((card) => {
//   const rolesText = card.querySelector(".cardposition");
//   const rolesContainer = card.querySelector(".team-card-container");
//   rolesText.style.display = "none";
//   const roles = rolesText.textContent;
//   roles.split(",").forEach((role) => {
//     const roleElement = document.createElement("div");
//     roleElement.classList.add("teamroles");
//     roleElement.textContent = role;
//     rolesContainer.appendChild(roleElement);
//   });
//   rolesContainer.style.opacity = 1;
// });

const roles = document.getElementById("team-positions");
const container = document.getElementById("positions-container");
const textContent = roles.textContent.split(",");

textContent.forEach((role, index) => {
  const roleElement = document.createElement("div");
  roleElement.classList.add("teamrole");
  roleElement.textContent = role;
  if (index < textContent.length - 1 && textContent.length > 1) {
    roleElement.textContent = `${role},`;
  }
  container.appendChild(roleElement);
});

roles.style.display = "none";
container.style.opacity = 1;
