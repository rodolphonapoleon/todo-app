(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(22),i=n.n(r),l=(n(33),n(26)),s=n(2),o=n(6),u=(n(34),n(21),n(27)),j=n(39),d=n(25),m=n(43),b=n(40),f=n(1);function O(e){return Object(f.jsx)(u.a,{children:Object(f.jsxs)(j.a,{className:"px-3",children:[Object(f.jsx)(d.a,{sm:"10",children:Object(f.jsx)(m.a.Check,{type:"checkbox",label:e.name,defaultChecked:e.completed,onChange:function(){return e.toggleCompleted(e.id)}})}),Object(f.jsx)(d.a,{sm:"2",children:Object(f.jsx)(b.a,{type:"button",size:"sm",onClick:function(){return e.deleteTask(e.id)},children:"Delete"})})]})})}function h(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(f.jsxs)(m.a,{onSubmit:function(t){t.preventDefault(),a&&(e.addTask(a),r(""))},children:[Object(f.jsxs)(m.a.Group,{className:"mb-3",controlId:"formTask",children:[Object(f.jsx)(m.a.Label,{children:"Enter your Task"}),Object(f.jsx)(m.a.Control,{onChange:function(e){r(e.target.value)},size:"lg",type:"text",autoComplete:"off",placeholder:"Enter your task",value:a})]}),Object(f.jsx)(b.a,{variant:"primary",type:"submit",children:"Submit"})]})}var p=n(42),x=n(44),y=n(41);function k(e){return Object(f.jsxs)(b.a,{variant:"outline-primary",onClick:function(){return e.setFilter(e.filterName)},children:[e.filterName," ",Object(f.jsx)(y.a,{variant:"success",pill:!0,children:e.filterQuantity})]})}var v=n(28),g={ALL:function(){return!0},ACTIVE:function(e){return!e.completed},COMPLETED:function(e){return e.completed}},N=Object.keys(g);var C=function(e){var t=Object(c.useState)(e.tasks),n=Object(o.a)(t,2),a=n[0],r=n[1],i=[{filterName:N[0],filterQuantity:"".concat(a.length)},{filterName:N[1],filterQuantity:"".concat(a.filter((function(e){return!e.completed})).length)},{filterName:N[2],filterQuantity:"".concat(a.filter((function(e){return e.completed})).length)}],u=Object(c.useState)("ALL"),m=Object(o.a)(u,2),b=m[0],y=m[1];function C(e){var t=a.map((function(t){return e===t.id?Object(s.a)(Object(s.a)({},t),{},{completed:!t.completed}):t}));r(t)}function T(e){var t=a.filter((function(t){return t.id!==e}));r(t)}var L=i.map((function(e){return Object(f.jsx)(k,{filterName:e.filterName,filterQuantity:e.filterQuantity,setFilter:y},e.filterName)})),S=a.filter(g[b]).map((function(e){return Object(f.jsx)(O,{id:e.id,name:e.name,completed:e.completed,deleteTask:T,toggleCompleted:C},e.id)}));return Object(f.jsx)(p.a,{className:"mt-5 Todo-body px-5",children:Object(f.jsxs)(j.a,{className:"justify-content-center",children:[Object(f.jsxs)(d.a,{md:"8",className:"text-center my-5",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"DayTask"}),Object(f.jsx)("h4",{children:"Never miss a task"})]}),Object(f.jsx)("hr",{})]}),Object(f.jsx)(d.a,{md:"8",children:Object(f.jsx)(h,{addTask:function(e){var t={id:"todo-"+Object(v.a)(),name:e,completed:!1};r([].concat(Object(l.a)(a),[t]))}})}),Object(f.jsx)(d.a,{md:"8",className:"my-5 btn-group",children:L}),Object(f.jsx)(d.a,{md:"8",children:Object(f.jsx)(x.a,{className:"mb-5",children:S})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(C,{tasks:[]})}),document.getElementById("root")),T()}},[[38,1,2]]]);
//# sourceMappingURL=main.b51f0b26.chunk.js.map