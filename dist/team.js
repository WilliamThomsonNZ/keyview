!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("team",[],t):"object"==typeof exports?exports.team=t():e.team=t()}(this,(()=>(()=>{document.querySelectorAll(".team-card-teampage").forEach((e=>{const t=e.querySelector(".cardposition"),o=e.querySelector(".team-card-container");t.style.display="none",t.textContent.split(",").forEach((e=>{const t=document.createElement("div");t.classList.add("teamroles"),t.textContent=e,o.appendChild(t)})),o.style.opacity=1}));const e=document.getElementById("everyone-button"),t=[e,document.getElementById("board-members-button"),document.getElementById("investment-committee-button"),document.getElementById("investment-team-button"),document.getElementById("investor-relations-button"),document.getElementById("operations-button"),document.getElementById("corporate-button")];e.classList.add("selected");const o=document.getElementById("selected-text");function n(e,n,d){var c;d&&(o.textContent=d),t.forEach((e=>{e.classList.remove("selected")})),e.target.classList.add("selected"),"everyone"===n?document.querySelectorAll(".collection-item").forEach((e=>{e.style.display=""})):(c=n,document.querySelectorAll(".collection-item").forEach((e=>{e.querySelector(".card-container").getAttribute("data-positions").split(",").includes(c)?e.style.display="":e.style.display="none"})))}t.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-value");n(e,t)}))}));const d=document.querySelectorAll(".dropdown-button");let c=!1;d.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-value");n(e,t,e.target.textContent),c=!1,r.style.transform="rotate(0deg)",a.style.display="none"}))}));const l=document.getElementById("dropdown-button"),r=document.getElementById("drop-down-arrow"),a=document.getElementById("dropdown-box");return l.addEventListener("click",(()=>{c?(r.style.transform="rotate(0deg)",a.style.display="none"):(r.style.transform="rotate(180deg)",a.style.display="block"),c=!c})),{}})()));