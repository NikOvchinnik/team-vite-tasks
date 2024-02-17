import{r as n,g as s,s as o,a as i}from"./assets/localValue-3aff6171.js";import{n as l}from"./assets/vendor-342e672c.js";const{listElem:c}=n;function d(t,e){const a=`<li id="${e}">${t}
  <button type="button">X</button>
  </li>`;c.insertAdjacentHTML("beforeEnd",a)}const{listElem:m}=n;m.addEventListener("click",u);function u(t){if(t.target.nodeName!=="BUTTON")return;t.target.parentNode.remove();const a=s("task").filter(r=>r.id!==t.target.parentNode.id);o("task",a)}const{formElem:f}=n;f.addEventListener("submit",g);function g(t){t.preventDefault();const e=t.currentTarget.elements.taskName.value.trim();if(!e)return;const a=l();d(e,a);const r=s("task")||[];r.push({text:e,id:a}),o("task",r),t.target.reset()}i(n.listElem,"task");
//# sourceMappingURL=commonHelpers.js.map
