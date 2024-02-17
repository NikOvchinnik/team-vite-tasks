import{r as n,g as r,s as i,a as l,b as m}from"./assets/localValue-66cf840b.js";import{n as u}from"./assets/vendor-342e672c.js";const{listElem:c}=n;function d(t,e){const s=`<li id="${e}">${t}
  <button type="button">X</button>
  </li>`;c.insertAdjacentHTML("beforeEnd",s)}const{formElem:f,listElem:o}=n;f.addEventListener("submit",b);function b(t){t.preventDefault();const e=t.currentTarget.elements.taskName.value.trim();if(!e)return;const s=u();d(e,s);const a=r("task")||[];a.push({text:e,id:s}),i("task",a),t.target.reset()}l(o,"task");m(o,"task");
//# sourceMappingURL=commonHelpers.js.map
