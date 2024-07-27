let e,t,o;const n=document.getElementById("multiStepForm"),r=n.querySelector(".next"),i=n.querySelector(".back"),s=document.querySelectorAll(".progress-bar__step"),a=document.querySelectorAll(".form-step");let c=0;const l=e=>{a.forEach((t,o)=>{t.classList.remove("form-step--active"),o===e&&t.classList.add("form-step--active"),c<1?(i.style.opacity="0",i.style.visibility="hidden"):c>=1&&(i.style.opacity="1",i.style.visibility="visible")}),s.forEach((t,o)=>{t.classList.remove("progress-bar__step--active"),o<=e&&t.classList.add("progress-bar__step--active")})},u=e=>{let t=a[e].querySelectorAll("input[required]"),o=!0;return t.forEach(e=>{e.value?e.classList.remove("error"):(e.classList.add("error"),o=!1)}),o},p=e=>{gsap.to(a[c],{duration:.5,x:"next"===e?"-100%":"100%",opacity:0,onComplete:()=>{l(c+="next"===e?1:-1),gsap.fromTo(a[c],{x:"next"===e?"100%":"-100%",opacity:0},{duration:.5,x:"0%",opacity:1})}})};r.addEventListener("click",()=>{u(c)&&p("next"),2===c&&(r.textContent="Send")}),i.addEventListener("click",()=>{p("back"),c<=3&&(r.textContent="Next")}),n.addEventListener("submit",e=>{e.preventDefault(),u(c)&&alert("Form submitted!")}),l(c);const m=[{title:"Get Started",content:"Connect with our specialists today for personalized support"},{title:"Product Recommendations",content:"Looking for the best security camera for your home or business? Our experts can recommend the perfect solution"},{title:"Installation Assistance",content:"Need help installing your new security system? Our team is here to provide step-by-step guidance"},{title:"Technical Support",content:"Having trouble with your security system? Our technical support team is ready to assist you with any issues"},{title:"Upgrade Consultation",content:"Considering an upgrade to your current security system? We can help you choose the best options available"},{title:"Warranty and Repairs",content:"Questions about warranties or need a repair? Our customer service team is here to help you with all your concerns"},{title:"Remote Monitoring Setup",content:"Interested in setting up remote monitoring for your security cameras? Let us guide you through the process"},{title:"Custom Security Solutions",content:"Need a customized security solution for your business or home? We offer tailored security systems to meet your specific needs"},{title:"System Optimization",content:"Want to optimize your current security system for better performance? Our experts can provide tips and adjustments"},{title:"Security Assessment",content:"Looking for a comprehensive security assessment for your property? Our team can evaluate and recommend improvements"}];let d=0;const y=document.querySelector(".q-title"),g=document.querySelector(".q-content-wrapper"),f=document.querySelector(".q-content"),h=document.querySelector(".cursor");function w(e){y.textContent=e,y.style.animation="fadeInUp 1s forwards",y.style.opacity=1}function v(){h.style.opacity=1}function b(){d=0,clearInterval(e),clearTimeout(t),clearTimeout(o),y.style.opacity=0,g.style.opacity=0,h.style.opacity=0,y.style.animation="",g.style.animation="",h.style.animation=""}const S=new IntersectionObserver(n=>{n.forEach(n=>{n.isIntersecting?(b(),w(m[d].title),o=setTimeout(()=>{(function o(n){let r=0;f.textContent="",e=setInterval(()=>{r<n.length?(f.textContent+=n[r],r++,function(){let e=f.textContent.slice(-1),t=document.createElement("span");t.textContent=e,f.appendChild(t);let o=t.getBoundingClientRect(),n=f.getBoundingClientRect();h.style.left=`${o.right-n.left+window.scrollX}px`,t.remove()}()):(clearInterval(e),t=setTimeout(()=>{y.style.animation="fadeOutUp 0.5s forwards",g.style.animation="fadeOutUp 0.5s forwards",h.style.animation="fadeOutUp 0.5s forwards",setTimeout(()=>{d=(d+1)%m.length,y.style.opacity=0,g.style.opacity=0,h.style.opacity=0,y.style.animation="",g.style.animation="",h.style.animation="",w(m[d].title),setTimeout(()=>{o(m[d].content),v()},1e3)},1e3)},2400))},57),g.style.opacity=1})(m[d].content),v()},1e3)):b()})}),x=document.querySelector(".q");S.observe(x),document.addEventListener("DOMContentLoaded",()=>{let e=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".form-page",triggerHook:.1,duration:"100%"}).on("enter",()=>{gsap.to(document.body,{backgroundColor:"#1e0000",duration:.5})}).on("leave",()=>{gsap.to(document.body,{backgroundColor:"#fff",duration:.5})}).addTo(e),new ScrollMagic.Scene({triggerElement:".form-page",triggerHook:.5}).setTween(gsap.to(".form-page-container",{opacity:1,scale:1,duration:.2})).addTo(e)}),document.addEventListener("DOMContentLoaded",()=>{let e=[51.505,-.09],t=L.map("map").setView(e,13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19}).addTo(t),L.marker(e).addTo(t).bindPopup('<a href="#" onclick="window.open(`https://www.openstreetmap.org/?mlat=${location[0]}&mlon=${location[1]}&zoom=13`, `_blank`); return false;">view on Map &#129106;</a>',{className:"custom-popup"}).openPopup().on("click",function(){window.open(`https://www.openstreetmap.org/?mlat=${e[0]}&mlon=${e[1]}&zoom=13`,"_blank")}),t.on("click",function(){window.open(`https://www.openstreetmap.org/?mlat=${e[0]}&mlon=${e[1]}&zoom=13`,"_blank")})});
//# sourceMappingURL=index.908a35e6.js.map
