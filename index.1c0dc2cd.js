document.addEventListener("DOMContentLoaded",function(){let e;let t=document.getElementById("loading-bar"),o=document.getElementById("spinner-container"),d=document.getElementById("video-container"),n=document.getElementById("background-video"),s=document.querySelector(".navigation__button"),i=document.getElementById("navbar"),a=document.getElementById("header_container"),l=document.getElementById("header"),r="",c=setInterval(()=>{let e=document.images,o=0;for(let t=0;t<e.length;t++)e[t].complete&&o++;let d=Math.floor(o/e.length*100);t.style.width=d+"%",t.style.backgroundColor=`rgb(${255-2.55*d}, ${255-2.55*d}, ${255-2.55*d})`,100===d&&(clearInterval(c),t.style.width="100%",t.style.backgroundColor="black")},100),m=()=>{o.classList.add("hidden"),d.style.display="block"},v=e=>{g()},g=()=>{window.innerWidth<=768&&"mobile"!==r?(console.log("Selecting mobile video"),n.src="mobile-Land-video.webm",n.type="video/webm",d.classList.remove("bg-video--desktop"),n.classList.remove("bg-video--desktop__content_desk"),d.classList.add("bg-video--mobile"),n.classList.add("bg-video--mobile__content_mobile"),n.loop=!1,l.insertBefore(d,l.firstChild),r="mobile"):window.innerWidth>768&&"desktop"!==r&&(console.log("Selecting desktop video"),n.src="video.mp4",n.type="video/mp4",d.classList.remove("bg-video--mobile"),n.classList.remove("bg-video--mobile__content_mobile"),d.classList.add("bg-video--desktop"),n.classList.add("bg-video--desktop__content_desk"),a.insertBefore(d,a.firstChild),r="desktop"),n.onloadeddata=m,n.onerror=v};g(),window.addEventListener("resize",g);let u=()=>{window.scrollY>100?(i.classList.add("scrolled"),s.classList.add("btn-darkin")):(i.classList.remove("scrolled"),s.classList.remove("btn-darkin"))},b=()=>{h||(h=!0,window.requestAnimationFrame(()=>{u(),h=!1}))},h=!1;window.addEventListener("scroll",()=>{window.clearTimeout(e),e=setTimeout(()=>{b()},100)});let p=new IntersectionObserver(function(e,t){e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("animate"),t.unobserve(e.target))})},{threshold:.1});document.querySelectorAll(".target").forEach(e=>{p.observe(e)});let w=document.getElementById("navi-toggle"),L=document.createElement("div");L.classList.add("overlay"),w.addEventListener("change",()=>{w.checked?(document.body.appendChild(L),setTimeout(()=>L.classList.add("show"),10)):(L.classList.remove("show"),L.addEventListener("transitionend",()=>{L.classList.contains("show")||L.remove()},{once:!0}))}),L.addEventListener("click",()=>{w.checked=!1,L.classList.remove("show"),L.addEventListener("transitionend",()=>{L.classList.contains("show")||L.remove()},{once:!0})});let y=gsap.timeline();y.to(".header",{duration:2.5,x:0,opacity:1,ease:"power2.out"},"-=0.4"),y.to(".header__spans",{duration:1,x:0,opacity:1,ease:"power2.out"},"-=0.4"),y.to(".header__title",{duration:1.1,x:0,opacity:1,ease:"power2.out"},"-=0.4"),y.to(".header__buttons",{duration:1.1,x:0,opacity:1,ease:"power2.out"},"-=0.4"),y.to(".header__paragraph",{duration:1.2,x:0,opacity:1,ease:"power2.out"},"-=0.4")});
//# sourceMappingURL=index.1c0dc2cd.js.map
