!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("credit-opportunities",[],t):"object"==typeof exports?exports["credit-opportunities"]=t():e["credit-opportunities"]=t()}(this,(()=>(()=>{"use strict";var e={};function t(e,t){return""===e?(t.querySelector(".errormessage").style.display="block",!1):(t.querySelector(".errormessage").style.display="none",!0)}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e),[...document.querySelectorAll(".accordioncontainer")].forEach(((e,t)=>{const n=e.querySelector(".faqheader");!function({button:e,header:t,container:n,open:o,initialHeight:l,headerPadding:s}){o?(n.style.height=l+"px",e.querySelector(".linelower").style.transform="rotate(0deg) translateY(-1px)"):(n.style.height=t.clientHeight+s+"px",e.querySelector(".linelower").style.transform="rotate(90deg) translateY(0px)"),e.addEventListener("click",(()=>{o?(n.style.height=t.clientHeight+s+"px",e.querySelector(".linelower").style.transform="rotate(90deg) translateY(0px)",o=!1):(n.style.height=l+"px",e.querySelector(".linelower").style.transform="rotate(0deg) translateY(-1px)",o=!0)}))}({button:e.querySelector(".accordionbutton"),header:n,container:e,open:0==t,initialHeight:e.clientHeight,headerPadding:0})}));const n=document.getElementById("fund-download"),o=document.getElementById("close-fund-download"),l=document.getElementById("newsletter-overlay"),s=document.getElementById("download-container");s&&(s.style.opacity="0",s.style.display="none"),l&&l.addEventListener("click",(()=>{l.style.opacity="0",s.style.opacity="0",setTimeout((()=>{l.style.display="none",s.style.display="none"}),300)})),n&&n.addEventListener("click",(()=>{l.style.display="block",s.style.display="block",console.log("click"),setTimeout((()=>{l.style.opacity="1",s.style.opacity="1"}),300)})),o&&o.addEventListener("click",(()=>{l.style.opacity="0",s.style.opacity="0",console.log("click"),setTimeout((()=>{l.style.display="none",s.style.display="none"}),300)}));const r=document.getElementById("dropdown-container-f"),d=document.getElementById("dropdown-button-f"),c=document.getElementById("dropdown-icon-f"),a=document.querySelectorAll(".dropdowninvestor");let i,y=!1;d.addEventListener("click",(()=>{y?(r.style.display="none",c.style.transform="rotate(0deg)",y=!1):(r.style.display="block",c.style.transform="rotate(180deg)",y=!0)})),a.forEach((e=>{e.addEventListener("click",(()=>{i=e.textContent,document.getElementById("investor-text").textContent=i,r.style.display="none",c.style.transform="rotate(0deg)",y=!1}))}));const u=document.getElementById("subscribe-button-f"),m=document.getElementById("first-name-container-f"),p=document.getElementById("first-name-f"),g=document.getElementById("last-name-container-f"),f=document.getElementById("last-name-f"),E=document.getElementById("email-container-f"),b=document.getElementById("email-address-f"),v=(document.getElementById("find-out-f"),document.getElementById("cant-subscribe-text-f"));document.getElementById("success-message-f");let h=!0;document.getElementById("dropdown-container-f");const S=document.getElementById("yes-button-f"),k=document.getElementById("no-button-f");S.addEventListener("click",(()=>{h=!0,u.style.display="block",v.style.display="none",S.classList.add("selected"),k.classList.remove("selected")})),k.addEventListener("click",(()=>{h=!1,u.style.display="none",v.style.display="block",k.classList.add("selected"),S.classList.remove("selected")}));const B=document.querySelectorAll(".radiobutton-newsletter");return B.forEach((e=>{e.addEventListener("click",(()=>{i=e.getAttribute("data-value"),B.forEach((e=>{e.classList.remove("selected")})),e.classList.add("selected")}))})),u.addEventListener("click",(async function(e){e.preventDefault();const n=e.target.href?e.target.href:e.target.parentElement.href;if(console.log(n),!h)return;u.classList.add("loading");const o=t(p.value,m),l=t(f.value,g),s=(r=b.value,d=E,""!==r&&/\S+@\S+\.\S+/.test(r)?(d.querySelector(".errormessage").style.display="none",!0):(d.querySelector(".errormessage").style.display="block",!1));var r,d;if(!(o&&l&&s&&i))return document.querySelector("#investor-container-f .errormessage").style.display=i?"none":"block",void u.classList.remove("loading");n&&window.open(n,"_blank")})),e})()));