!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("global",[],t):"object"==typeof exports?exports.global=t():e.global=t()}(this,(()=>(()=>{"use strict";var e={};function t(e,t){return""===e?(t.querySelector(".errormessage").style.display="block",!1):(t.querySelector(".errormessage").style.display="none",!0)}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e),function(){const e=document.getElementById("dropdown-container-i"),n=document.getElementById("dropdown-button-i"),o=document.getElementById("dropdown-icon-i"),l=document.querySelectorAll(".dropdowninvestor");let s,d=!1;n.addEventListener("click",(()=>{d?(e.style.display="none",o.style.transform="rotate(0deg)",d=!1):(e.style.display="block",o.style.transform="rotate(180deg)",d=!0)})),l.forEach((t=>{t.addEventListener("click",(()=>{s=t.textContent,document.getElementById("investor-text").textContent=s,e.style.display="none",o.style.transform="rotate(0deg)",d=!1}))}));const r=document.getElementById("subscribe-button-n"),c=document.getElementById("first-name-container-n"),a=document.getElementById("first-name-n"),i=document.getElementById("last-name-container-n"),y=document.getElementById("last-name-n"),m=document.getElementById("email-container-n"),u=document.getElementById("email-address-n"),g=document.getElementById("find-out-n"),f=document.getElementById("cant-apply");document.getElementById("success-message");let p=!0,E=!1;const b=document.getElementById("dropdown-container-n"),v=document.getElementById("dropdown-button-n"),w=document.getElementById("dropdown-icon-n"),I=document.getElementById("dropdown-text-n");v.addEventListener("click",(()=>{if(E)return b.style.display="none",w.style.transform="rotate(0deg)",void(E=!1);b.style.display="flex",w.style.transform="rotate(180deg)",E=!0})),document.getElementById("yes-button-n").addEventListener("click",(()=>{p=!0,I.textContent="Yes",b.style.display="none",w.style.transform="rotate(0deg)",r.style.display="block",f.style.display="none"})),document.getElementById("no-button-n").addEventListener("click",(()=>{p=!1,r.style.display="none",f.style.display="block",I.textContent="No",b.style.display="none",w.style.transform="rotate(0deg)"}));const h=document.querySelectorAll(".radiobutton-newsletter");h.forEach((e=>{e.addEventListener("click",(()=>{s=e.getAttribute("data-value"),h.forEach((e=>{e.classList.remove("selected")})),e.classList.add("selected")}))})),r.addEventListener("click",(async function(e){e.preventDefault(),console.log("click"),r.classList.add("loading");const n=t(a.value,c),o=t(y.value,i),l=(d=u.value,f=m,""!==d&&/\S+@\S+\.\S+/.test(d)?(f.querySelector(".errormessage").style.display="none",!0):(f.querySelector(".errormessage").style.display="block",!1));var d,f;if(!(n&&o&&l&&s))return document.querySelector("#investor-container .errormessage").style.display=s?"none":"block",void r.classList.remove("loading");try{const e=await fetch("https://api-bay-beta.vercel.app/api/v1/newsletter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:a.value,lastName:y.value,emailAddress:u.value,findOut:g.value,investorType:s,isSophisticatedInvestor:p})});await e.json(),r.classList.remove("loading");const t=document.getElementById("email-form-container"),n=document.getElementById("success-state"),o=document.getElementById("form-welcome");t.style.display="none",o.style.display="none",n.style.display="flex",function(...e){e.forEach((e=>{e.value=""}))}([a,y,u,g])}catch(e){console.log(e)}}))}();const n=document.getElementById("mobile-open"),o=document.getElementById("mobile-close"),l=document.getElementById("mobile-menu");l.style.transition="transform 0.3s ease-in-out",n.addEventListener("click",(function(){l.style.transform="translateX(0)"})),o.addEventListener("click",(function(){l.style.transform="translateX(100%)"}));const s=document.getElementById("fund-mobile-accordion"),d=document.getElementById("fund-accordion-button"),r=document.querySelector("#fund-mobile-accordion .accordionlabel");let c=!1;r.addEventListener("click",(()=>{c?(s.style.height=r.offsetHeight+32+"px",d.querySelector(".lowerline").style.transform="rotate(90deg)",c=!1):(s.style.height="unset",d.querySelector(".lowerline").style.transform="rotate(0deg)",c=!0)})),s.style.height=r.offsetHeight+32+"px";const a=document.getElementById("news-mobile-accordion"),i=document.getElementById("news-accordion-button"),y=document.querySelector("#news-mobile-accordion .accordionlabel");let m=!1;y.addEventListener("click",(()=>{m?(a.style.height=r.offsetHeight+32+"px",i.querySelector(".lowerline").style.transform="rotate(90deg)",m=!1):(a.style.height="unset",i.querySelector(".lowerline").style.transform="rotate(0deg)",m=!0)})),a.style.height=r.offsetHeight+32+"px";const u=document.getElementById("fund-dropdown-button"),g=document.getElementById("header-container"),f=document.getElementById("fund-dropdown-container"),p=document.getElementById("fund-arrow");let E=!1,b="273px",v="68px";return window.innerWidth<992&&(b="239px",v="59px"),u.addEventListener("click",(()=>{E?(f.style.opacity="0",p.style.transform="rotate(0deg)",setTimeout((()=>{g.style.height=v}),300),E=!1):(g.style.height=b,p.style.transform="rotate(180deg)",E=!0,setTimeout((()=>{f.style.opacity="1"}),350))})),window.addEventListener("scroll",(e=>{E&&(f.style.opacity="0",p.style.transform="rotate(0deg)",setTimeout((()=>{g.style.height=v}),300),E=!1)})),function(){const e=document.getElementById("newsletter-popout"),t=document.getElementById("newsletter-close-desktop-subscribed"),n=(document.getElementById("newsletter-form-container"),document.getElementById("newsletter-overlay")),o=document.getElementById("newsletter-close-desktop");function l(){window.innerWidth>992?e.style.transform="translateX(100%)":e.style.transform="translateX(120%)",document.body.style.overflow="auto",n.style.opacity="0",setTimeout((()=>{n.style.display="none"}),500)}null===sessionStorage.getItem("newsletterShown")&&"/"===window.location.pathname&&setTimeout((()=>{sessionStorage.setItem("newsletterShown","true"),e.style.transform="translateX(0)",n.style.display="block",window.innerWidth<991&&(document.body.style.overflow="hidden"),setTimeout((()=>{n.style.opacity="1"}),500)}),5e3),o.addEventListener("click",l),t.addEventListener("click",l),n.addEventListener("click",l),document.getElementById("subscribe-button")}(),e})()));