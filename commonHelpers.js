(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c=document.querySelector("#task-form"),l=document.querySelector("#task-list");c.addEventListener("submit",u);function u(o){o.preventDefault();const t=o.currentTarget.elements.taskName.value.trim();if(!t)return;a(t);const n=f("task")||[];n.push(t),d("task",n),o.target.reset()}function a(o){const t=`<li>${o}</li>`;l.insertAdjacentHTML("beforeEnd",t)}function f(o){return JSON.parse(localStorage.getItem(o))}function d(o,t){localStorage.setItem(o,JSON.stringify(t))}
//# sourceMappingURL=commonHelpers.js.map
