"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[975],{8975:function(e,a,t){t.r(a),t.d(a,{default:function(){return f}});var n=t(5861),s=t(9439),r=t(7757),i=t.n(r),l=t(2791),c=t(7689),u=t(9434),o=t(1138),d=t(1090),m=t(4059),p=t(6351),h=t(184);function f(e){var a=e.isLogIn,t=void 0===a||a,r=(0,l.useState)(""),f=(0,s.Z)(r,2),b=f[0],v=f[1],x=(0,l.useState)(""),Z=(0,s.Z)(x,2),w=Z[0],j=Z[1],N=(0,l.useState)(""),k=(0,s.Z)(N,2),g=k[0],_=k[1],y=(0,u.v9)(p.Hz).token,C=(0,c.s0)(),S=(0,u.I0)();(0,l.useEffect)((function(){y&&C("/contacts")}),[y,C]);var q=function(e){var a=e.target,t=a.name,n=a.value;!function(e){switch(e){case"name":v(n.trim());break;case"email":j(n.trim());break;case"password":_(n.trim());break;default:;}}(t)},F=function(){var e=(0,n.Z)(i().mark((function e(a){var n,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n={name:b,email:w,password:g},s={email:w,password:g},S(t?(0,m.$U)(s):(0,m.$C)(n)),!t&&C("/"),v(""),j(""),_("");case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,h.jsx)(d.Z,{title:t?"LogIn":"Registration",children:(0,h.jsxs)("form",{className:o.Z.form_Add_Contact,onSubmit:F,children:[!t&&(0,h.jsxs)("div",{className:o.Z.decor_input,children:[(0,h.jsx)("label",{className:o.Z.lable,htmlFor:"name",children:"Name"}),(0,h.jsx)("input",{className:o.Z.input,id:"name",type:"text",name:"name",required:!0,onChange:q,value:b})]}),(0,h.jsxs)("div",{className:o.Z.decor_input,children:[(0,h.jsx)("label",{className:o.Z.lable,htmlFor:"email",children:"E-mail"}),(0,h.jsx)("input",{className:o.Z.input,id:"email",type:"email",name:"email",required:!0,onChange:q,value:w})]}),(0,h.jsxs)("div",{className:o.Z.decor_input,children:[(0,h.jsx)("label",{className:o.Z.lable,htmlFor:"password",children:"Password"}),(0,h.jsx)("input",{className:o.Z.input,id:"password",type:"password",name:"password",required:!0,onChange:q,value:g})]}),(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,h.jsx)("button",{className:o.Z.btn_add,type:"submit",disabled:t?!w||!g:!b||!w||!g,children:t?"Login":"Registration"}),t&&(0,h.jsx)("button",{className:o.Z.btn_add,type:"button",onClick:function(){return C("/singup")},children:"SingUp"})]})]})})}}}]);
//# sourceMappingURL=975.11e28127.chunk.js.map