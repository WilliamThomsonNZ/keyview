!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("team-member",[],t):"object"==typeof exports?exports["team-member"]=t():e["team-member"]=t()}(this,(()=>(()=>{document.querySelectorAll(".team-card-teampage");const e=document.getElementById("team-positions"),t=document.getElementById("positions-container");return e.textContent.split(",").forEach((e=>{const o=document.createElement("div");o.classList.add("teamrole"),o.textContent=e,t.appendChild(o)})),e.style.display="none",t.style.opacity=1,{}})()));