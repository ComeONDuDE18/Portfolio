import{A as M,S as f,N as P,K as I,a as E,i as S}from"./assets/vendor-DQFbmjRP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const w of i.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&a(w)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const O=document.querySelector(".swiper-button-next-aboutme"),A=document.querySelector(".swiper-aboutme"),B=document.querySelector(".accordion-container-aboutme");new M(B,{duration:600,openOnInit:[0],elementClass:"ac-aboutme",triggerClass:"ac-header-aboutme",panelClass:"ac-panel-aboutme",activeClass:"is-active-aboutme",showMultiple:!0});const N=new f(A,{wrapperClass:"swiper-wrapper-aboutme",slideClass:"swiper-slide-aboutme",slideActiveClass:"swiper-slide-active-aboutme",direction:"horizontal",loop:!0,modules:[P,I],slidesPerView:1,spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-button-next-aboutme"},nested:!0,keyboard:{enabled:!0,onlyInViewport:!1}});O.addEventListener("click",e=>{N.slideNext()});new f(".project-swiper-container",{slidesPerView:1,spaceBetween:16,watchOverflow:!1,loop:!1,direction:"horizontal",speed:600,navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},pagination:{el:".swiper-pagination",clickable:!0}});const T=document.querySelectorAll(".faq-item");T.forEach(e=>{e.querySelector(".faq-header").addEventListener("click",()=>{e.classList.toggle("active")})});const q=document.querySelector(".reviews-swiper-wrapper");let h;async function z(e){const t=e.map(({author:s,avatar_url:a,review:o})=>`
   
        <li class=" swiper-slide reviews-list-item">
          <img
            class="reviews-avatar"
            src="${a}"
            alt="avatar"
          />
          <div class="reviews-item-content">
            <h3 class="reviews-item-title">${s}</h3>
            <p class="reviews-item-text">
              ${o}
            </p>
    
        </li>
        `);q.innerHTML=`${t.join(" ")}`}async function D(){try{h=(await E.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){S.error({message:`Sorry, a ${e} error occurred`,position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),q.innerHTML='<p class="error-text">Not found</p>';return}z(h)}D();new f(".reviews-swiper-container",{slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},watchOverflow:!1,loop:!1,direction:"horizontal",speed:600,navigation:{nextEl:".reviews-swiper-right",prevEl:".reviews-swiper-left"}});const n={overlay:document.querySelector(".modal-overlay"),openBtn:document.querySelector(".menu-btn"),closeBtn:document.querySelector(".modal-close-btn"),menuItems:document.querySelectorAll(".menu-item")},c={menu:document.querySelector(".dropdown"),toggleBtn:document.querySelector(".menu-tab")},$=()=>n.overlay.style.display="block",y=()=>n.overlay.style.display="none";n.openBtn.addEventListener("click",$);n.closeBtn.addEventListener("click",y);n.overlay.addEventListener("click",e=>{e.target===n.overlay&&y()});n.menuItems.forEach(e=>e.addEventListener("click",y));const V=()=>c.menu.classList.toggle("hidden"),j=()=>c.menu.classList.add("hidden");c.toggleBtn.addEventListener("click",V);c.menu.addEventListener("click",V);document.addEventListener("click",e=>{!c.toggleBtn.contains(e.target)&&!c.menu.contains(e.target)&&j()});const R=document.querySelector("body"),d=document.querySelector(".modal-worktogether"),K=document.querySelector(".modal-window-btn"),C="is-open",F=e=>{d.classList.add(C),R.style.overflow="hidden",U(e)};function U({title:e="",message:t=""}){const s=document.createElement("h2");s.classList.add("modal-title"),s.textContent=e;const a=document.createElement("p");a.classList.add("modal-message"),a.textContent=t,x();const o=document.querySelector(".modal-window");o.appendChild(s),o.appendChild(a)}K.addEventListener("click",()=>{g()});d.addEventListener("click",e=>{e.target===d&&g()});document.addEventListener("keydown",e=>{e.key==="Escape"&&g()});function g(){d.classList.remove(C),document.body.style.overflow="auto",x()}function x(){const e=document.querySelector(".modal-title"),t=document.querySelector(".modal-message");e&&e.remove(),t&&t.remove()}const v=document.querySelector(".submit-form-js"),[m,u]=v,b=document.querySelector(".email-text-success"),k=document.querySelector(".email-text-error"),p=document.querySelector(".comments-text-error"),_=async({email:e,comment:t})=>{const s="https://portfolio-js.b.goit.study/api/requests",{data:a}=await E.post(s,{email:e,comment:t});return a},r={valid:"valid-input",invalid:"invalid-input",isVisible:"is-visible"},H=e=>{const s=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e);return s?(m.classList.add(r.valid),b.classList.add(r.isVisible)):(m.classList.add(r.invalid),k.classList.add(r.isVisible)),s},J=e=>(e?u.classList.add(r.valid):(u.classList.add(r.invalid),p.classList.add(r.isVisible)),!!e),W=e=>{const t=e.name;t==="userEmail"&&(b.classList.remove(r.isVisible),p.classList.remove(r.isVisible)),t==="userComments"&&p.classList.remove(r.isVisible),e.classList.remove(r.valid),e.classList.remove(r.invalid)},Z=()=>{[b,k,p].forEach(s=>{s.classList.remove(r.isVisible)}),[m,u].forEach(s=>{s.classList.remove(r.valid),s.classList.remove(r.invalid)})},L="storegeForm",l=Q()||{userEmail:"",userComments:""};m.value=l.userEmail;u.value=l.userComments;v.addEventListener("input",e=>{W(e.target);const{name:t,value:s}=e.target;l[t]=s.trim(),G(l)});v.addEventListener("submit",Y);async function Y(e){e.preventDefault();const{userEmail:t,userComments:s}=l,a=H(t),o=J(s);if(!(!a||!o))try{const i=await _({email:t,comment:s});F(i),X()}catch(i){S.error({title:"Error",message:i.message})}}function G(e,t=L){localStorage.setItem(t,JSON.stringify(e))}function Q(e=L){return JSON.parse(localStorage.getItem(e))}function X(e=L){localStorage.removeItem(e),v.reset(),Z(),l.userEmail="",l.userComments=""}
//# sourceMappingURL=index.js.map
