!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("application",[],t):"object"==typeof exports?exports.application=t():e.application=t()}(this,(()=>(()=>{"use strict";var e={};function t(e,t){return""===e?(t.querySelector(".errormessage").style.display="block",!1):(t.querySelector(".errormessage").style.display="none",!0)}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const n=document.getElementById("contact-submit"),o=document.getElementById("fName-container"),a=document.getElementById("First-Name-Contact"),l=document.getElementById("lName-container"),s=document.getElementById("Last-Name-Contact"),d=document.getElementById("email-container"),r=document.getElementById("Contact-Email"),c=(document.getElementById("message-container"),document.getElementById("message-input"));let i="Yes",m=!1;const y=document.getElementById("dropdown-container"),u=document.getElementById("dropdown-button"),p=document.getElementById("dropdown-icon"),g=document.getElementById("dropdown-text");return u.addEventListener("click",(()=>{if(m)return y.style.display="none",p.style.transform="rotate(0deg)",void(m=!1);y.style.display="flex",p.style.transform="rotate(180deg)",m=!0})),document.getElementById("yes-button").addEventListener("click",(()=>{i="Yes",g.textContent="Yes",y.style.display="none",p.style.transform="rotate(0deg)"})),document.getElementById("no-button").addEventListener("click",(()=>{i="No",g.textContent="No",y.style.display="none",p.style.transform="rotate(0deg)"})),n.addEventListener("click",(async function(e){e.preventDefault(),n.classList.add("loading");const m=t(a.value,o),y=t(s.value,l),u=(p=r.value,g=d,""!==p&&/\S+@\S+\.\S+/.test(p)?(g.querySelector(".errormessage").style.display="none",!0):(g.querySelector(".errormessage").style.display="block",!1));var p,g;if(m&&y&&u)try{const e=await fetch("https://api-bay-beta.vercel.app/api/v1/application",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:a.value,lastName:s.value,emailAddress:r.value,message:""!==c.value?c.value:"",investorType:i})});await e.json(),window.location.href="/apply-success",n.classList.remove("loading"),function(...e){e.forEach((e=>{e.value=""}))}([a,s,phoneInput,r,c])}catch(e){console.log(e)}else n.classList.remove("loading")})),e})()));