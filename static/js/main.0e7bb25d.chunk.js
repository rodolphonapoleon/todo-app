(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(22),i=n.n(r),l=(n(33),n(26)),s=n(2),o=n(6),j=(n(34),n(21),n(27)),u=n(40),d=n(25),b=n(45),m=n(41),f=n(1);function O(e){return Object(f.jsx)(j.a,{children:Object(f.jsxs)(u.a,{className:"pe-3",children:[Object(f.jsx)(d.a,{xs:"11",children:Object(f.jsx)(b.a.Check,{type:"checkbox",label:e.name,defaultChecked:e.completed,onChange:function(){return e.toggleCompleted(e.id)}})}),Object(f.jsx)(d.a,{xs:"1",children:Object(f.jsx)(m.a,{type:"button",color:"#067ead",size:20,onClick:function(){return e.deleteTask(e.id)}})})]})})}var p=n(42);function h(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(f.jsxs)(b.a,{className:"mb-3",onSubmit:function(t){t.preventDefault(),a&&(e.addTask(a),r(""))},children:[Object(f.jsxs)(b.a.Group,{className:"mb-3",controlId:"formTask",children:[Object(f.jsx)(b.a.Label,{children:"My Daily Task...Whoaaa "}),Object(f.jsx)(b.a.Control,{onChange:function(e){r(e.target.value)},size:"lg",type:"text",autoComplete:"off",placeholder:"Enter your task",value:a})]}),Object(f.jsx)(p.a,{variant:"flat",type:"submit",children:"Submit"})]})}var x=n(44),g=n(46),y=n(43);function k(e){return Object(f.jsxs)(p.a,{variant:"outline-flat",onClick:function(){return e.setFilter(e.filterName)},children:[e.filterName," ",Object(f.jsx)(y.a,{bg:"secondary",pill:!0,children:e.filterQuantity})]})}var v=n(28),N=n.p+"static/media/DayTask.1d62c16a.png",C={ALL:function(){return!0},ACTIVE:function(e){return!e.completed},COMPLETED:function(e){return e.completed}},T=Object.keys(C);var L=function(e){var t=Object(c.useState)(e.tasks),n=Object(o.a)(t,2),a=n[0],r=n[1],i=[{filterName:T[0],filterQuantity:"".concat(a.length)},{filterName:T[1],filterQuantity:"".concat(a.filter((function(e){return!e.completed})).length)},{filterName:T[2],filterQuantity:"".concat(a.filter((function(e){return e.completed})).length)}],j=Object(c.useState)("ALL"),b=Object(o.a)(j,2),m=b[0],p=b[1];function y(e){var t=a.map((function(t){return e===t.id?Object(s.a)(Object(s.a)({},t),{},{completed:!t.completed}):t}));r(t)}function L(e){var t=a.filter((function(t){return t.id!==e}));r(t)}var S=i.map((function(e){return Object(f.jsx)(k,{filterName:e.filterName,filterQuantity:e.filterQuantity,setFilter:p},e.filterName)})),F=a.filter(C[m]).map((function(e){return Object(f.jsx)(O,{id:e.id,name:e.name,completed:e.completed,deleteTask:L,toggleCompleted:y},e.id)}));return Object(f.jsx)(x.a,{className:"mt-5 Todo-body px-5",children:Object(f.jsxs)(u.a,{className:"justify-content-center",children:[Object(f.jsxs)(d.a,{md:"8",className:"text-center mt-5 mb-4",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:N,alt:"logo"}),Object(f.jsx)("h4",{children:"Never Miss a Task"})]}),Object(f.jsx)("hr",{})]}),Object(f.jsx)(d.a,{md:"8",children:Object(f.jsx)(h,{addTask:function(e){var t={id:"todo-"+Object(v.a)(),name:e,completed:!1};r([].concat(Object(l.a)(a),[t]))}})}),Object(f.jsx)(d.a,{md:"8",className:"my-5 btn-group",children:S}),Object(f.jsx)(d.a,{md:"8",children:Object(f.jsx)(g.a,{className:"mb-5",children:F})})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(L,{tasks:[]})}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.0e7bb25d.chunk.js.map