(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r=t(16),c=t.n(r),o=t(3),a=t(2),u=t(4),i=t.n(u),l="/api/persons",s={getAll:function(){return i.a.get(l).then((function(e){return e.data}))},create:function(e){return i.a.post(l,e).then((function(e){return e.data}))},update:function(e,n){return i.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},del:function(e){return i.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))}},d=t(0),f=function(e){var n=e.formSubmit,t=e.newName,r=e.newPhone,c=e.nameHandler,o=e.phoneHandler;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"add a new"}),Object(d.jsxs)("form",{onSubmit:n,children:[Object(d.jsxs)("div",{children:["name: ",Object(d.jsx)("input",{value:t,onChange:c})]}),Object(d.jsxs)("div",{children:["number: ",Object(d.jsx)("input",{value:r,onChange:o})]}),Object(d.jsx)("button",{type:"submit",children:"add"})]})]})},j=function(e){var n=e.person,t=e.onDeleteButtonClick;return Object(d.jsxs)("div",{children:[n.name," ",n.number," ",Object(d.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},b=function(e){var n=e.persons,t=e.newFilter,r=e.onDeleteButtonClick;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Numbers"}),n.map((function(e){return e.name.toLowerCase().includes(t.toLowerCase())?Object(d.jsx)(j,{person:e,onDeleteButtonClick:r},e.id):Object(d.jsx)(d.Fragment,{})}))]})},h=function(e){var n=e.errorObject;if(null===n)return null;var t={color:n.color,border:"2px solid ".concat(n.color)};return Object(d.jsx)("div",{className:"errorMessage",style:t,children:n.text})},m=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),u=Object(o.a)(c,2),i=u[0],l=u[1],j=Object(a.useState)(""),m=Object(o.a)(j,2),O=m[0],p=m[1],v=Object(a.useState)(""),x=Object(o.a)(v,2),g=x[0],w=x[1],C=Object(a.useState)(null),k=Object(o.a)(C,2),y=k[0],S=k[1];Object(a.useEffect)((function(){s.getAll().then((function(e){r(e)}))}),[]);var D=function(e,n){S({text:e,color:n}),setTimeout((function(){S(null)}),5e3)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(h,{errorObject:y}),Object(d.jsxs)("div",{children:["filter shown with ",Object(d.jsx)("input",{value:g,onChange:function(e){return w(e.target.value)}})]}),Object(d.jsx)(f,{formSubmit:function(e){if(e.preventDefault(),t.filter((function(e){return e.name===i})).length>0){var n=t.find((function(e){return e.name===i}));if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))){var c={name:n.name,number:O};s.update(n.id,c).then((function(e){D("".concat(e.name,"'s phonenumber successfully changed to ").concat(e.number),"green"),r(t.map((function(n){return n.id===e.id?e:n})))})).catch((function(e){D("".concat(c.name," seems to have been deleted elsewhere..."),"red"),r(t.filter((function(e){return e.id!==n.id})))}))}}else{var o={name:i,number:O};s.create(o).then((function(e){D("".concat(o.name," added successfully"),"green"),r(t.concat(e)),l(""),p("")})).catch((function(e){console.log(e.response.data.error),D(e.response.data.error,"red")}))}},newName:i,newPhone:O,nameHandler:function(e){return l(e.target.value)},phoneHandler:function(e){return p(e.target.value)}}),Object(d.jsx)(b,{persons:t,newFilter:g,onDeleteButtonClick:function(e){console.log(t);var n=t.find((function(n){return n.id===e}));window.confirm("Do you really want to delete ".concat(n.name,"?"))&&s.del(e).then((function(c){console.log("delete promise fulfilled"),D("".concat(n.name," deleted successfully"),"green"),r(t.filter((function(n){return n.id!==e})))})).catch((function(e){console.log("error"),D("".concat(n.name," seems to have been deleted elsewhere..."),"red"),r(t.filter((function(e){return e.id!==n.id})))}))}})]})};t(40);c.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.6a7a3fc2.chunk.js.map