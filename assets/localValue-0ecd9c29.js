const c={formElem:document.querySelector("#task-form"),listElem:document.querySelector("#task-list")};function o(t){return JSON.parse(localStorage.getItem(t))}function l(t,e){localStorage.setItem(t,JSON.stringify(e))}function u(t,e){t.addEventListener("click",a);function a(r){if(r.target.nodeName!=="BUTTON")return;r.target.parentNode.remove();const s=o(e).filter(i=>i.id!==r.target.parentNode.id);l(e,s)}}function d(t,e){const a=o(e);if(a===null)return;const r=a.map(n=>`<li id="${n.id}">${n.text}
      <button type="button">X</button>
      </li>`).join("");t.insertAdjacentHTML("beforeEnd",r)}export{d as a,u as b,o as g,c as r,l as s};
//# sourceMappingURL=localValue-0ecd9c29.js.map
