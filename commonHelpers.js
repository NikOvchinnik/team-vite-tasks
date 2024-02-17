import"./assets/modulepreload-polyfill-3cfb730f.js";import{n as r}from"./assets/vendor-c2e2fda8.js";import{r as n,g as i,s as l,a as m,b as u}from"./assets/localValue-0ecd9c29.js";const{listElem:c}=n;function d(t,e){const s=`<li id="${e}">${t}
  <button type="button">X</button>
  </li>`;c.insertAdjacentHTML("beforeEnd",s)}const{formElem:f,listElem:o}=n;f.addEventListener("submit",p);function p(t){t.preventDefault();const e=t.currentTarget.elements.taskName.value.trim();if(!e)return;const s=r();d(e,s);const a=i("task")||[];a.push({text:e,id:s}),l("task",a),t.target.reset()}m(o,"task");u(o,"task");
//# sourceMappingURL=commonHelpers.js.map
