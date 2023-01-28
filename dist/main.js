(()=>{"use strict";let e=document.createElement("form");e.classList.add("project-form");let t=document.createElement("input");t.type="text",t.id="new-project-name",t.name="new-project-name",t.required=!0,t.placeholder="Enter project title";let n=document.createElement("button");n.type="button",n.textContent="Submit",n.classList.add("submit-project-button");let o=document.createElement("button");o.type="button",o.textContent="Cancel",o.classList.add("cancel-button");let l=document.createElement("div");l.classList.add("project-form-buttons"),l.appendChild(n),l.appendChild(o),e.appendChild(t),e.appendChild(l);let d=document.querySelector(".projects");function r(){t.value="",e.remove()}const i={projects:[],getProjects(){return this.projects},addProject(e){this.projects.push(e)},removeProject(e){let t=this.projects.findIndex((t=>t.name===e));this.projects.splice(t,1)},getAllTodos(){let e=[];for(let t=0;t<this.projects.length;t++)for(let n=0;n<this.projects[t].todos.length;n++)e.push(this.projects[t].todos[n]);return e.sort(((e,t)=>e.dueDate-t.dueDate))}};let c=document.createElement("form");c.classList.add("todo-form-container");let a=document.createElement("input");a.type="text",a.classList.add("todo-title-input"),a.required=!0,a.placeholder="Title:";let u=document.createElement("input");u.type="text",u.classList.add("todo-description-input"),u.required=!0,u.placeholder="Description:";let s=document.createElement("label");s.textContent="Due Date:",s.for="due-date";let p=document.createElement("input");p.type="date",p.classList.add("duedate-input"),p.name="due-date",p.required=!0;let m=document.createElement("label");m.textContent="Is this todo high, medium, or low priority?",m.for="priority";let y=document.createElement("select");y.id="todo-priority",y.name="priority",y.required=!0;let h=document.createElement("option");h.textContent="High Priority",h.value="High",h.selected=!0;let C=document.createElement("option");C.textContent="Medium Priority",C.value="Medium";let g=document.createElement("option");g.textContent="Low Priority",g.value="Low",y.appendChild(h),y.appendChild(C),y.appendChild(g);let b=document.createElement("label");b.textContent="Has this todo been completed?",b.for="todo-status-dropdown";let f=document.createElement("select");f.id="todo-status-dropdown",f.name="todo-status-dropdown",f.required=!0;let v=document.createElement("option");v.textContent="No",v.value="no",v.selected=!0;let E=document.createElement("option");E.textContent="Yes",E.value="yes",f.appendChild(E),f.appendChild(v);let S=document.createElement("button");S.type="button",S.textContent="Submit",S.id="submit-todo";let x=document.createElement("button");x.type="button",x.textContent="Cancel",x.id="cancel-todo";let q=document.createElement("div");q.appendChild(S),q.appendChild(x),c.appendChild(a),c.appendChild(u),c.appendChild(s),c.appendChild(p),c.appendChild(m),c.appendChild(y),c.appendChild(b),c.appendChild(f),c.appendChild(q);let j=document.querySelector(".content");function k(){a.value="",u.value="",p.value="",v.selected=!0,h.selected=!0,c.remove()}let w=document.querySelector(".todos");function L(e){let t=document.createElement("li"),n=document.createElement("div");n.classList.add("todo-container");let o=document.createElement("h3");o.classList.add("todo-title"),o.textContent=e.title;let l=document.createElement("p");l.classList.add("todo-description-paragraph"),l.textContent=e.description;let d=document.createElement("p");d.classList.add("todo-due-date"),d.textContent=e.dueDate;let r=document.createElement("p");r.classList.add(".todo-priority"),r.textContent=e.priority;let i=document.createElement("p");i.classList.add(".todo-status"),i.textContent=e.isDone;let c=document.createElement("button");c.type="button",c.id="edit-todo-btn",c.textContent="Edit";let a=document.createElement("button");a.type="button",a.id="delete-todo-button",a.textContent="Delete",n.appendChild(o),n.appendChild(l),n.appendChild(r),n.appendChild(i),n.appendChild(d),n.appendChild(c),n.appendChild(a),t.appendChild(n),w.appendChild(t)}let D=document.createElement("form");D.classList.add("todo-form-container");let I=document.createElement("input");I.type="text",I.classList.add("todo-title-input"),I.required=!0,I.placeholder="Title:";let P=document.createElement("input");P.type="text",P.classList.add("todo-description-input"),P.required=!0,P.placeholder="Description:";let T=document.createElement("label");T.textContent="Due Date:",T.for="due-date";let A=document.createElement("input");A.type="date",A.classList.add("duedate-input"),A.name="due-date",A.required=!0;let N=document.createElement("label");N.textContent="Is this todo high, medium, or low priority?",N.for="priority";let B=document.createElement("select");B.id="todo-priority",B.name="priority",B.required=!0;let H=document.createElement("option");H.textContent="High Priority",H.value="High";let M=document.createElement("option");M.textContent="Medium Priority",M.value="Medium";let O=document.createElement("option");O.textContent="Low Priority",O.value="Low",B.appendChild(H),B.appendChild(M),B.appendChild(O);let V=document.createElement("label");V.textContent="Has this todo been completed?",V.for="todo-status-dropdown";let Y=document.createElement("select");Y.id="todo-status-dropdown",Y.name="todo-status-dropdown",Y.required=!0;let F=document.createElement("option");F.textContent="No",F.value="no",F.selected=!0;let G=document.createElement("option");G.textContent="Yes",G.value="yes",Y.appendChild(G),Y.appendChild(F);let R=document.createElement("button");R.type="button",R.textContent="Save Changes",R.id="save-todo-changes";let U=document.createElement("button");U.type="button",U.textContent="Cancel",U.id="cancel-todo";let W=document.createElement("div");W.appendChild(R),W.appendChild(U),D.appendChild(I),D.appendChild(P),D.appendChild(T),D.appendChild(A),D.appendChild(N),D.appendChild(B),D.appendChild(V),D.appendChild(Y),D.appendChild(W);let X=document.querySelector(".content");function z(){D.remove()}function J(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e){J(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===K(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function Z(e){J(1,arguments);var t=Q(e);return t.setHours(0,0,0,0),t}function $(e,t){J(2,arguments);var n=Z(e),o=Z(t);return n.getTime()===o.getTime()}function _(e){return J(1,arguments),$(e,Date.now())}function ee(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var te={};function ne(){return te}function oe(e,t){var n,o,l,d,r,i,c,a;J(1,arguments);var u=ne(),s=ee(null!==(n=null!==(o=null!==(l=null!==(d=null==t?void 0:t.weekStartsOn)&&void 0!==d?d:null==t||null===(r=t.locale)||void 0===r||null===(i=r.options)||void 0===i?void 0:i.weekStartsOn)&&void 0!==l?l:u.weekStartsOn)&&void 0!==o?o:null===(c=u.locale)||void 0===c||null===(a=c.options)||void 0===a?void 0:a.weekStartsOn)&&void 0!==n?n:0);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=Q(e),m=p.getDay(),y=(m<s?7:0)+m-s;return p.setDate(p.getDate()-y),p.setHours(0,0,0,0),p}function le(e,t,n){J(2,arguments);var o=oe(e,n),l=oe(t,n);return o.getTime()===l.getTime()}function de(e,t){return J(1,arguments),le(e,Date.now(),t)}let re;document.querySelector(".new-project").addEventListener("click",(()=>{d.appendChild(e)})),document.addEventListener("click",(function(e){e.target.closest(".cancel-button")&&r()})),document.addEventListener("click",(function(e){const t=e.target.closest(".submit-project-button");let n=document.querySelector(".projects-list"),o=document.createElement("li");o.classList.add("sidebar-project-item");let l=document.createElement("button");l.type="button",l.textContent="X",l.classList.add("delete-button");let d=document.createElement("div");if(d.classList.add("sidebar-project-container"),d.appendChild(o),d.appendChild(l),t){if(!document.querySelector(".project-form").checkValidity())return void alert("Please choose a name for this project.");for(let e=0;e<i.getProjects().length;e++)if(document.getElementById("new-project-name").value===i.getProjects()[e].name)return void alert("A project with this name already exists. Please choose a different name.");let e={name:document.getElementById("new-project-name").value,todos:[],addTodo(e){this.todos.push(e)},removeTodo(e){let t=this.todos.findIndex((t=>t.name===e.name));this.todos.splice(t,1)}};i.addProject(e),r(),o.textContent=e.name,n.appendChild(d)}})),document.addEventListener("click",(function(e){const t=e.target.closest(".delete-button");if(t){let e=t.previousElementSibling.textContent;if(document.querySelector(".content-title").textContent===e){document.querySelector(".content-title").textContent="",document.getElementById("add-todo-button").style.display="none";let e=document.querySelector(".todos");for(;e.firstChild;)e.firstChild.remove()}i.removeProject(e),t.parentNode.remove()}})),document.addEventListener("click",(function(e){const t=e.target.closest(".sidebar-project-item");if(t){let e=document.querySelectorAll(".sidebar-project-item");for(let t=0;t<e.length;t++)e[t].parentNode.style.backgroundColor="transparent";document.querySelector(".today").style.backgroundColor="transparent",document.querySelector(".this-week").style.backgroundColor="transparent",document.querySelector(".all").style.backgroundColor="transparent",t.parentNode.style.backgroundColor="#dbd8e3";let n=document.querySelector(".content-title"),o=document.querySelector(".todos");for(;o.firstChild;)o.firstChild.remove();n.textContent=t.textContent;let l=document.getElementById("add-todo-button");"none"===l.style.display&&(l.style.display="block");let d=i.getProjects().find((e=>e.name===n.textContent)).todos;for(let e=0;e<d.length;e++)L(d[e])}})),document.addEventListener("click",(function(e){e.target.closest("#add-todo-button")&&j.appendChild(c)})),document.addEventListener("click",(function(e){e.target.closest("#cancel-todo")&&k()})),document.addEventListener("click",(function(e){if(e.target.closest("#submit-todo")){let e=document.querySelector(".content-title"),t=i.getProjects().find((t=>t.name===e.textContent)),n=document.querySelector(".todo-title-input").value,o=document.querySelector(".todo-description-input").value,l=document.querySelector(".duedate-input").value,d=parseInt(l.substring(0,4)),r=parseInt(l.substring(5,7))-1,c=parseInt(l.substring(8)),a=new Date(d,r,c),u=document.getElementById("todo-priority").value,s=document.getElementById("todo-status-dropdown").value;if(!document.querySelector(".todo-form-container").checkValidity())return void alert("Please fill out all required fields.");let p={title:n,description:o,dueDate:a,priority:u,isDone:s};t.addTodo(p),k(),L(p)}})),document.addEventListener("click",(function(e){const t=e.target.closest("#delete-todo-button");if(t){let e=i.getProjects().find((e=>e.name===document.querySelector(".content-title").textContent)),n=t.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,o=t.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,l=e.todos.find((e=>e.title===n&&e.description===o));e.removeTodo(l);let d=document.querySelector(".todos");for(;d.firstChild;)d.firstChild.remove();let r=e.todos;for(let e=0;e<r.length;e++)L(r[e])}})),document.addEventListener("click",(function(e){const t=e.target.closest("#edit-todo-btn");if(t){let e=i.getProjects().find((e=>e.name===document.querySelector(".content-title").textContent)),n=t.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,o=t.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;re=e.todos.find((e=>e.title===n&&e.description===o)),function(e){I.value=e.title,P.value=e.description;let t=e.dueDate.getFullYear().toString(),n=(e.dueDate.getMonth()+1).toString();1===n.length&&(n="0"+n);let o=e.dueDate.getDate().toString();A.value=t+"-"+n+"-"+o,"High"===e.priority?H.selected=!0:"Medium"===e.priority?M.selected=!0:O.selected=!0,"yes"===e.isDone?G.selected=!0:F.selected=!0,X.appendChild(D)}(re)}})),document.addEventListener("click",(function(e){e.target.closest("#cancel-todo")&&z()})),document.addEventListener("click",(function(e){if(e.target.closest("#save-todo-changes")){let e=document.querySelector(".todo-title-input").value,t=document.querySelector(".todo-description-input").value,n=document.querySelector(".duedate-input").value,o=parseInt(n.substring(0,4)),l=parseInt(n.substring(5,7))-1,d=parseInt(n.substring(8)),r=new Date(o,l,d),i=document.getElementById("todo-priority").value,c=document.getElementById("todo-status-dropdown").value;if(!document.querySelector(".todo-form-container").checkValidity())return void alert("Please fill out all required fields.");let a,u=document.querySelector(".todos").children;for(let e=0;e<u.length;e++)u[e].firstChild.firstChild.textContent===re.title&&u[e].firstChild.firstChild.nextSibling.textContent===re.description&&(a=u[e].firstChild);re.title=e,re.description=t,re.dueDate=r,re.priority=i,re.isDone=c,a.firstChild.textContent=e,a.firstChild.nextSibling.textContent=t,a.firstChild.nextSibling.nextSibling.textContent=i,a.firstChild.nextSibling.nextSibling.nextSibling.textContent=c,a.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.textContent=r,z()}}));let ie=document.querySelector(".today"),ce=document.querySelector(".this-week"),ae=document.querySelector(".all");ie.addEventListener("click",(()=>{ce.style.backgroundColor="transparent",ae.style.backgroundColor="transparent",ie.style.backgroundColor="#dbd8e3";let e=document.querySelectorAll(".sidebar-project-item");for(let t=0;t<e.length;t++)e[t].parentNode.style.backgroundColor="transparent";document.querySelector(".content-title").textContent="Todos Due Today",document.getElementById("add-todo-button").style.display="none";let t=document.querySelector(".todos");for(;t.firstChild;)t.firstChild.remove();let n=i.getAllTodos();for(let e=0;e<n.length;e++)_(n[e].dueDate)&&L(n[e]);let o=document.querySelectorAll("#edit-todo-btn"),l=document.querySelectorAll("#delete-todo-button");for(let e=0;e<o.length;e++)o[e].remove(),l[e].remove()})),ce.addEventListener("click",(()=>{ie.style.backgroundColor="transparent",ae.style.backgroundColor="transparent",ce.style.backgroundColor="#dbd8e3";let e=document.querySelectorAll(".sidebar-project-item");for(let t=0;t<e.length;t++)e[t].parentNode.style.backgroundColor="transparent";document.querySelector(".content-title").textContent="Todos Due This Week",document.getElementById("add-todo-button").style.display="none";let t=document.querySelector(".todos");for(;t.firstChild;)t.firstChild.remove();let n=i.getAllTodos();for(let e=0;e<n.length;e++)de(n[e].dueDate)&&L(n[e]);let o=document.querySelectorAll("#edit-todo-btn"),l=document.querySelectorAll("#delete-todo-button");for(let e=0;e<o.length;e++)o[e].remove(),l[e].remove()})),ae.addEventListener("click",(()=>{ie.style.backgroundColor="transparent",ce.style.backgroundColor="transparent",ae.style.backgroundColor="#dbd8e3";let e=document.querySelectorAll(".sidebar-project-item");for(let t=0;t<e.length;t++)e[t].parentNode.style.backgroundColor="transparent";document.querySelector(".content-title").textContent="All Upcoming Todos",document.getElementById("add-todo-button").style.display="none";let t=document.querySelector(".todos");for(;t.firstChild;)t.firstChild.remove();let n=i.getAllTodos();for(let e=0;e<n.length;e++)L(n[e]);let o=document.querySelectorAll("#edit-todo-btn"),l=document.querySelectorAll("#delete-todo-button");for(let e=0;e<o.length;e++)o[e].remove(),l[e].remove()}))})();