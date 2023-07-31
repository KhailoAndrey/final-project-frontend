"use strict";(self.webpackChunkfinal_project_frontend=self.webpackChunkfinal_project_frontend||[]).push([[262],{4262:function(n,e,r){r.r(e),r.d(e,{default:function(){return K}});var s,i,o,t,a,d,l,c,p,m,h,u,x=r(1413),f=r(4165),g=r(5861),w=r(9439),v=r(9434),j=r(2791),b=r(9230),Z=r(5705),_=r(5147),y=r(1729),P=r(6727),k=r(8825),C=P.Ry().shape({name:P.Z_().required((0,k.t)("requried_name_field")).min(2,(0,k.t)("name_min")).max(16,(0,k.t)("name_max")).matches(/^([A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\u0406\u0456\u0407\u0457\u0404\u0454\u0490\u0491]+\s?){2,26}$/,(0,k.t)("name_regexp")),email:P.Z_().email((0,k.t)("email_description")).required((0,k.t)("requried_email_field")).matches(/^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/,(0,k.t)("email_regexp")),password:P.Z_().required((0,k.t)("requried_password_field")).min(6,(0,k.t)("password_min")).max(16,(0,k.t)("password_max")).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,(0,k.t)("password_regexp")),confirmPassword:P.Z_().when("password",(function(n,e){return n?e.required((0,k.t)("requried_confirm_pas_field")).oneOf([P.iH("password")],(0,k.t)("confirm_password_regexp")):e.notRequired()}))}),z=r(8466),q=r(168),F=r(7691),M=r(1087),S=F.ZP.div(s||(s=(0,q.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  width: 280px;\n\n  border-radius: 20px;\n  background-color: var(--white-bckg-clr);\n\n  box-shadow: 3px 8px 14px 0px var(--small-shadow);\n\n  padding: 40px 12px;\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    margin-top: 80px;\n    padding: 60px 75px;\n    border-radius: 40px;\n  }\n"]))),N=F.ZP.div(i||(i=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n\n  &.error .form-input {\n    border-color: red;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 32px;\n  }\n"]))),T=F.ZP.h2(o||(o=(0,q.Z)(["\n  font-family: Manrope, sans-serif;\n  margin-bottom: 20px;\n  font-weight: 500;\n  font-size: 24px;\n  text-align: center;\n  line-height: normal;\n  font-style: normal;\n\n  color: var(--main-accent-text-clr);\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 40px;\n    font-size: 36px;\n    letter-spacing: 1.44px;\n  }\n"]))),A=F.ZP.input(t||(t=(0,q.Z)(["\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 16px;\n  padding-right: 85px;\n  width: 256px;\n  font-size: 16px;\n  align-items: center;\n  border: 1px solid var(--main-clr-blue);\n  border-radius: 40px;\n  line-height: 1.4;\n  font-style: normal;\n  outline: none;\n\n  &.input-error {\n    border: 1px solid var(--form-error-red);\n  }\n  &.input-success {\n    border: 1px solid var(--menu-clr-green);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 458px;\n  }\n  &::placeholder {\n    font-family: Manrope, sans-serif;\n    font-weight: 400;\n    letter-spacing: 0.64px;\n    color: var(--main-form-clr);\n  }\n"]))),B=F.ZP.input(a||(a=(0,q.Z)(["\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 16px;\n  padding-right: 60px;\n  width: 256px;\n  font-size: 16px;\n  align-items: center;\n  border: 1px solid var(--main-clr-blue);\n  border-radius: 40px;\n  line-height: 1.4;\n  font-style: normal;\n  outline: none;\n\n  &.input-error {\n    border: 1px solid var(--form-error-red);\n  }\n  &.input-success {\n    border: 1px solid var(--menu-clr-green);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 458px;\n  }\n  &::placeholder {\n    font-family: Manrope, sans-serif;\n    font-weight: 400;\n    letter-spacing: 0.64px;\n    color: var(--main-form-clr);\n  }\n"]))),$=F.ZP.button(d||(d=(0,q.Z)(["\n  font-family: Manrope, sans-serif;\n  width: 100%;\n  font-weight: 600;\n  line-height: normal;\n  font-style: normal;\n  letter-spacing: 0.8px;\n  font-size: 20px;\n  color: var(--white-bckg-clr);\n  background-color: var(--main-clr-blue);\n  border: transparent;\n  margin-top: 40px;\n  margin-bottom: 8px;\n  padding: 10px 28px;\n  border-radius: 40px;\n\n  :hover,\n  :focus {\n    background: var(--main-clr-gr_blue);\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 52px;\n    margin-bottom: 16px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-top: 40px;\n  }\n"]))),R=F.ZP.p(l||(l=(0,q.Z)(["\n  text-align: center;\n  font-weight: 400;\n  font-size: 12px;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.48px;\n  color: var(--main-form-clr);\n"]))),V=(0,F.ZP)(M.rU)(c||(c=(0,q.Z)(["\n  display: inline-block;\n  margin-left: 2px;\n\n  color: var(--main-clr-blue);\n"]))),E=F.ZP.div(p||(p=(0,q.Z)(["\n  position: relative;\n"]))),G=F.ZP.p(m||(m=(0,q.Z)(["\n  position: absolute;\n  left: 16px;\n  top: 48px;\n  font-family: Manrope, sans-serif;\n  font-size: 8px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: normal;\n  color: var(--form-error-red);\n\n  @media screen and (min-width: 768px) {\n    top: 50px;\n    font-size: 12px;\n  }\n"]))),H=F.ZP.p(h||(h=(0,q.Z)(["\n  position: absolute;\n  left: 16px;\n  top: 48px;\n  font-family: Manrope, sans-serif;\n  font-size: 8px;\n  font-weight: 400;\n  font-style: normal;\n  line-height: normal;\n  color: var(--menu-clr-green);\n\n  @media screen and (min-width: 768px) {\n    top: 50px;\n    font-size: 12px;\n  }\n"]))),I=F.ZP.div(u||(u=(0,q.Z)(["\n  display: flex;\n  gap: 12px;\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  transform: translateY(-50%);\n"]))),O=r(3329),U=function(){return(0,O.jsx)("svg",{width:24,height:24,children:(0,O.jsx)("use",{href:"".concat(z.Z,"#icon-close-eye"),style:{stroke:"var(--main-clr-blue)"},width:24,height:24})})},Y=function(){return(0,O.jsx)("svg",{width:24,height:24,children:(0,O.jsx)("use",{href:"".concat(z.Z,"#icon-eye"),style:{stroke:"var(--main-clr-blue)"},width:24,height:24})})},D=function(){return(0,O.jsx)("svg",{width:24,height:24,children:(0,O.jsx)("use",{href:"".concat(z.Z,"#icon-check"),style:{stroke:"var(--menu-clr-green)"},width:24,height:24})})},J=function(){var n=(0,b.$G)().t,e=(0,v.I0)(),r=(0,j.useState)("password"),s=(0,w.Z)(r,2),i=s[0],o=s[1],t=(0,j.useState)("password"),a=(0,w.Z)(t,2),d=a[0],l=a[1],c=(0,Z.TA)({initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:C,onSubmit:function(){var n=(0,g.Z)((0,f.Z)().mark((function n(r,s){var i,o,t;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=s.resetForm,o={name:r.name,email:r.email,password:r.password},n.prev=2,n.next=5,e((0,_.register)(o));case 5:(t=n.sent).error?(0,y.Z)(t.error.data.message):i(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e,r){return n.apply(this,arguments)}}()}),p=(c.touched.name||c.submitCount>0)&&c.errors.name&&c.values.name,m=c.touched.name&&!c.errors.name&&c.values.name,h=(c.touched.email||c.submitCount>0)&&c.errors.email&&c.values.email,u=c.touched.email&&!c.errors.email&&c.values.email,P=(c.touched.password||c.submitCount>0)&&c.errors.password&&c.values.password,k=c.touched.password&&!c.errors.password&&c.values.password,q=(c.touched.confirmPassword||c.submitCount>0)&&c.errors.confirmPassword&&c.values.confirmPassword,F=c.touched.confirmPassword&&!c.errors.confirmPassword&&c.values.confirmPassword,M=function(n){c.setFieldValue(n,"")};return(0,O.jsx)(S,{children:(0,O.jsxs)("form",{onSubmit:c.handleSubmit,children:[(0,O.jsx)(T,{children:n("registration")}),(0,O.jsxs)(N,{children:[(0,O.jsxs)("div",{children:[(0,O.jsx)("label",{htmlFor:"name",hidden:!0,children:"Name"}),(0,O.jsxs)(E,{children:[(0,O.jsx)(B,{id:"name",value:c.values.name,onChange:c.handleChange,name:"name",placeholder:n("name"),onBlur:function(){c.setTouched((0,x.Z)((0,x.Z)({},c.touched),{},{name:!0}))},className:p?"input-error":m?"input-success":""}),c.touched.name&&c.errors.name&&(0,O.jsx)(G,{children:c.errors.name}),(0,O.jsxs)(I,{children:[p&&(0,O.jsx)("svg",{width:24,height:24,onClick:function(){return M("name")},children:(0,O.jsx)("use",{href:"".concat(z.Z,"#icon-cross"),style:{stroke:"var(--form-error-red)"},width:24,height:24})}),m&&(0,O.jsx)(D,{})]})]})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)("label",{htmlFor:"email",hidden:!0,children:"Email"}),(0,O.jsxs)(E,{children:[(0,O.jsx)(B,{id:"email",name:"email",value:c.values.email,onChange:c.handleChange,placeholder:n("email"),onBlur:function(){c.setTouched((0,x.Z)((0,x.Z)({},c.touched),{},{email:!0}))},className:h?"input-error":u?"input-success":""}),c.touched.email&&c.errors.email&&(0,O.jsx)(G,{children:c.errors.email}),(0,O.jsxs)(I,{children:[h&&(0,O.jsx)("svg",{width:24,height:24,onClick:function(){return M("email")},children:(0,O.jsx)("use",{href:"".concat(z.Z,"#icon-cross"),style:{stroke:"var(--form-error-red)"},width:24,height:24})}),u&&(0,O.jsx)(D,{})]})]})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)("label",{htmlFor:"password",hidden:!0,children:"Password"}),(0,O.jsxs)(E,{children:[(0,O.jsx)(A,{id:"password",type:i,name:"password",value:c.values.password,onChange:c.handleChange,placeholder:n("password"),onBlur:function(){c.setTouched((0,x.Z)((0,x.Z)({},c.touched),{},{password:!0}))},className:P?"input-error":k?"input-success":""}),(0,O.jsxs)(I,{children:["password"===i?(0,O.jsx)("span",{onClick:function(){return o("text")},children:(0,O.jsx)(U,{})}):(0,O.jsx)("span",{onClick:function(){return o("password")},children:(0,O.jsx)(Y,{})}),P&&(0,O.jsx)("svg",{width:24,height:24,onClick:function(){return M("password")},children:(0,O.jsx)("use",{href:"".concat(z.Z,"#icon-cross"),style:{stroke:"var(--form-error-red)"},width:24,height:24})}),k&&(0,O.jsx)(D,{})]}),c.touched.password&&c.errors.password&&(0,O.jsx)(G,{children:c.errors.password}),k&&(0,O.jsx)(H,{children:n("password_is_secure")})]})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)("label",{htmlFor:"confirmPassword",hidden:!0,children:"Confirm password"}),(0,O.jsxs)(E,{children:[(0,O.jsx)(A,{id:"confirmPassword",type:d,name:"confirmPassword",value:c.values.confirmPassword,onChange:c.handleChange,placeholder:n("confirm_password"),onBlur:function(){c.setTouched((0,x.Z)((0,x.Z)({},c.touched),{},{confirmPassword:!0}))},className:q?"input-error":F?"input-success":""}),(0,O.jsxs)(I,{children:["password"===d?(0,O.jsx)("span",{onClick:function(){return l("text")},children:(0,O.jsx)(U,{})}):(0,O.jsx)("span",{onClick:function(){return l("password")},children:(0,O.jsx)(Y,{})}),q&&(0,O.jsx)("svg",{width:24,height:24,onClick:function(){return M("confirmPassword")},children:(0,O.jsx)("use",{href:"".concat(z.Z,"#icon-cross"),style:{stroke:"var(--form-error-red)"},width:24,height:24})}),F&&(0,O.jsx)(D,{})]}),c.touched.confirmPassword&&c.errors.confirmPassword&&(0,O.jsx)(G,{children:c.errors.confirmPassword})]})]})]}),(0,O.jsx)($,{type:"submit",children:n("registration")}),(0,O.jsxs)(R,{children:[n("registration_form_text"),(0,O.jsx)(V,{to:"/login",children:n("login_form")})]})]})})},K=function(){return(0,O.jsx)(J,{})}}}]);
//# sourceMappingURL=262.beba5c06.chunk.js.map