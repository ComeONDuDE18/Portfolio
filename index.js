(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const i=document.querySelector(".menu-btn"),d=document.querySelector(".menu-tab"),u=document.querySelector(".modal-close-btn"),o=document.querySelector(".modal-overlay");i.addEventListener("click",()=>{o.style.display="block",console.log("ok")});d.addEventListener("click",()=>{o.style.display="block",console.log("ok")});u.addEventListener("click",()=>{o.style.display="none"});window.addEventListener("click",c=>{c.target===o&&(o.style.display="none")});
//# sourceMappingURL=index.js.map
