import{S as c,N as a,K as d}from"./assets/vendor-CnGUHUXy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=document.querySelector(".swiper-button-next-aboutme"),p=document.querySelector(".swiper-aboutme"),m=new c(p,{wrapperClass:"swiper-wrapper-aboutme",slideClass:"swiper-slide-aboutme",slideActiveClass:"swiper-slide-active-aboutme",direction:"horizontal",loop:!0,modules:[a,d],slidesPerView:1,spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-button-next-aboutme"},nested:!0,keyboard:{enabled:!0,onlyInViewport:!1}});u.addEventListener("click",o=>{m.slideNext()});new c(".project-swiper-container",{slidesPerView:1,spaceBetween:16,watchOverflow:!1,loop:!1,direction:"horizontal",speed:600,navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},pagination:{el:".swiper-pagination",clickable:!0}});document.querySelectorAll(".faq-header").forEach(o=>{o.addEventListener("click",()=>{const r=o.parentElement;document.querySelectorAll(".faq-item").forEach(i=>{i!==r&&i.classList.remove("active")}),r.classList.toggle("active")})});const f=document.querySelector(".menu-btn"),y=document.querySelector(".menu-tab"),w=document.querySelector(".modal-close-btn"),n=document.querySelector(".modal-overlay"),b=document.querySelectorAll(".menu-item");f.addEventListener("click",()=>{n.style.display="block",console.log("ok")});y.addEventListener("click",()=>{n.style.display="block",console.log("ok")});w.addEventListener("click",()=>{n.style.display="none"});window.addEventListener("click",o=>{o.target===n&&(n.style.display="none")});b.forEach(o=>{o.addEventListener("click",()=>{n.style.display="none"})});
//# sourceMappingURL=index.js.map
