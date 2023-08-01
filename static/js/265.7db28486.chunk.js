"use strict";(self.webpackChunkfinal_project_frontend=self.webpackChunkfinal_project_frontend||[]).push([[265],{2265:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ze}});var r=t(4165),i=t(5861),a=t(9439),o=t(2791),l=t(7689),c=t(9230),s=t(5147),d=t(4217),p=t(9434),x="https://final-project-backend-4o0r.onrender.com/api/notices/owner";function u(){return(u=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i={method:"POST",headers:{Authorization:"Bearer ".concat(t)},body:e},n.prev=1,n.next=4,fetch("".concat(x),i);case 4:if((a=n.sent).ok){n.next=7;break}throw new Error("Sorry. Try again later :(");case 7:return n.next=9,a.json();case 9:return o=n.sent,n.abrupt("return",o);case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}var m,f,h,g,y,b,v,Z,w=function(n,e){return u.apply(this,arguments)},j=t(5705),_=t(168),k=t(7691),P=k.ZP.label(m||(m=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  padding: ",";\n\n  font-weight: 500;\n  font-size: ",";\n  line-height: 1.35;\n  letter-spacing: 0.04em;\n\n  color: ",";\n  background: ",";\n  border-radius: ",";\n\n  cursor: pointer;\n"])),(function(n){if("category"===n.name)return"8px 16px"}),(function(n){return"category"===n.name?"14px":"16px"}),(function(n){return"category"===n.name?n.selected?"var(--btn-clr-fon)":"var(--main-clr-blue)":n.selected?"var(--menu-clr-green)":"var(--main-form-clr)"}),(function(n){if("category"===n.name)return n.selected?"var(--main-clr-blue)":"var(--main-clr-blue-light)"}),(function(n){if("category"===n.name)return"40px"})),z=(0,k.ZP)(j.gN)(f||(f=(0,_.Z)(["\n  display: none;\n"]))),S=t(3329),C=function(n){var e=n.value,t=n.selected,r=n.name,i=n.children;return(0,S.jsxs)(P,{selected:t,name:r,children:[i,e[0],(0,S.jsx)(z,{type:"radio",name:r,value:e[1]})]})},T=k.ZP.label(h||(h=(0,_.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n\n  font-size: 14px;\n  line-height: 1.36;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    line-height: 1.3;\n  }\n"]))),F=(0,k.ZP)(j.gN)(g||(g=(0,_.Z)(["\n  padding: 8px 16px;\n  width: 264px;\n  height: 40px;\n  margin-top: 4px;\n\n  font-size: 14px;\n  line-height: 1.5;\n  border-radius: 40px;\n  outline: transparent;\n\n  border: 1px solid;\n  border-color: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 395px;\n    height: 48px;\n    padding: 12px 16px;\n    margin-top: 8px;\n    font-size: 16px;\n  }\n\n  &::placeholder {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.5;\n    color: var(--main-form-clr);\n  }\n"])),(function(n){return n["data-invalid"]?"#F43F5E":"#54ADFF"})),N=k.ZP.span(y||(y=(0,_.Z)(["\n  position: absolute;\n  bottom: -20px;\n  padding-left: 16px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.35;\n  color: var(--form-error-red);\n"]))),O=function(n){var e=n.type,t=n.name,r=n.label,i=n.placeholder,a=n.errors,o=n.touched,l=n.emulTouch,c=a[t]&&o[t]||a[t]&&l.includes(t);return(0,S.jsxs)(T,{children:[r,(0,S.jsx)(F,{type:e,name:t,placeholder:i,"data-invalid":c}),c&&(0,S.jsx)(N,{children:a[t]})]})},q=t(8825),I=k.ZP.textarea(b||(b=(0,_.Z)(["\n  width: 264px;\n  height: 92px;\n  padding: 8px 16px;\n  margin-top: 4px;\n\n  font-size: 14px;\n  line-height: 1.5;\n\n  outline: transparent;\n  border: 1px solid;\n  border-radius: 20px;\n  resize: none;\n\n  border-color: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 393px;\n    height: ",";\n    padding: 12px 16px;\n    margin-top: 8px;\n    font-size: 16px;\n  }\n\n  &::placeholder {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.5;\n    color: var(--main-form-clr);\n  }\n"])),(function(n){return n["data-invalid"]?"var(--form-error-red)":"var(--main-clr-blue)"}),(function(n){return"your pet"!==n["data-category"]&&"sell"!==n["data-category"]?"182px":"79px"})),M=k.ZP.label(v||(v=(0,_.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.35;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    line-height: 1.3;\n  }\n"]))),$=k.ZP.span(Z||(Z=(0,_.Z)(["\n  position: absolute;\n  bottom: -20px;\n  padding-left: 16px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.35;\n  color: var(--form-error-red);\n"]))),A=function(n){var e=n.onChange,t=n.onBlur,r=n.value,i=n.errors,a=n.touched,o=n.category,l=n.emulTouch,c=i.comments&&a.comments||i.comments&&l.includes("comments");return(0,S.jsxs)(M,{children:[(0,q.t)("comment"),(0,S.jsx)(I,{name:"comments",onChange:e,onBlur:t,value:r,placeholder:(0,q.t)("comment_ph"),"data-invalid":c,"data-category":o}),c&&(0,S.jsx)($,{children:i.comments})]})};var J,R,B,V,D,G,E,L,U,K,H,Q,W,X,Y,nn,en,tn,rn,an,on,ln,cn,sn,dn,pn,xn,un,mn,fn,hn,gn,yn,bn,vn,Zn,wn,jn,_n,kn=t.p+"static/media/sprite.ceeecb025d962347a66c1e1e20515881.svg",Pn=k.ZP.svg(J||(J=(0,_.Z)(["\n  fill: var(--main-clr-blue);\n  stroke: var(--main-clr-blue);\n"]))),zn=k.ZP.svg(R||(R=(0,_.Z)(["\n  fill: var(--white-bckg-clr);\n  stroke: ",";\n"])),(function(n){return""===n.sex?0===n.index?"var(--form-error-red)":"var(--main-clr-blue)":0===n.index?n.selected?"var(--form-error-red)":"var(--main-form-clr)":1===n.index?n.selected?"var(--main-clr-blue)":"var(--main-form-clr)":void 0})),Sn=k.ZP.div(B||(B=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Cn=k.ZP.div(V||(V=(0,_.Z)(["\n  display: inline-block;\n  padding: 20px 8px 16px;\n  font-family: 500;\n  font-weight: 500;\n  background: var(--white-bckg-clr);\n  box-shadow: 3px 8px 14px var(--small-shadow);\n  border-radius: 40px;\n  font-style: normal;\n  margin-top: 20px;\n\n  @media screen and (min-width: 768px) {\n    padding: 20px 32px;\n    margin-top: 60px;\n  }\n  @media screen and (min-width: 1280px){\n   margin-top: 40px; \n  }\n"]))),Tn=k.ZP.div(D||(D=(0,_.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 23px;\n"]))),Fn=k.ZP.p(G||(G=(0,_.Z)(["\n  font-size: 14px;\n  line-height: 1.35;\n  color: var(--main-accent-text-clr);\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n  }\n"]))),Nn=k.ZP.div(E||(E=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  align-self: flex-start;\n  gap: 12px;\n  margin-top: 8px;\n  margin-bottom: 67px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 24px;\n  }\n"]))),On=k.ZP.div(L||(L=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  align-self: flex-start;\n  gap: 12px;\n"]))),qn=k.ZP.div(U||(U=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  align-self: flex-start;\n  gap: 24px;\n"]))),In=k.ZP.div(K||(K=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  align-self: flex-start;\n  gap: 20px;\n\n  @media screen and (min-width: 768px) {\n    margin-right: 63px;\n    gap: ",";\n    flex-direction: ",";\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-right: 96px;\n  }\n"])),(function(n){return"your pet"!==n["data-category"]?"40px":"20px"}),(function(n){return"your pet"!==n["data-category"]?"column":"row"})),Mn=k.ZP.div(H||(H=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  align-self: flex-start;\n  gap: 16px;\n\n  @media screen and (min-width: 768px) {\n    gap: ",";\n    flex-direction: ",";\n  }\n"])),(function(n){if("your pet"!==n["data-category"])return"0"}),(function(n){return"your pet"!==n["data-category"]?"row":"column"})),$n=k.ZP.div(Q||(Q=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row-reverse;\n    gap: 32px;\n    margin-top: 36px;\n  }\n"]))),An=(0,k.ZP)(j.l0)(W||(W=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Jn=k.ZP.span(X||(X=(0,_.Z)(["\n  position: absolute;\n  display: inline-block;\n  width: 180px;\n  bottom: -18px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.35;\n  color: var(--form-error-red);\n"]))),Rn=function(n){var e=n.iconName,t=n.index,r=n.selected,i=n.sex;return(0,S.jsx)(zn,{width:22,height:22,index:t,selected:r,sex:i,children:(0,S.jsx)("use",{href:kn+"".concat(e)})})},Bn=function(n){var e=n.iconName;return(0,S.jsx)(Pn,{width:50,height:50,children:(0,S.jsx)("use",{href:kn+"".concat(e),width:"50px",height:"50px"})})},Vn=k.ZP.label(Y||(Y=(0,_.Z)(["\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  align-self: flex-start;\n\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.35;\n  gap: 27px;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    flex-direction: ",";\n    gap: ",";\n  }\n"])),(function(n){return"your pet"!==n["data-category"]?"column":"row"}),(function(n){return"your pet"!==n["data-category"]?"12px":"27px"})),Dn=k.ZP.input(nn||(nn=(0,_.Z)(["\n  display: none;\n"]))),Gn=k.ZP.img(en||(en=(0,_.Z)(["\n  object-fit: cover;\n  object-position: top center;\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-radius: 20px;\n\n  @media screen and (min-width: 768px) {\n    border-radius: 40px;\n  }\n"]))),En=k.ZP.div(tn||(tn=(0,_.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]))),Ln=k.ZP.span(rn||(rn=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 112px;\n  height: 112px;\n  background: var(--main-clr-blue-light);\n  border-radius: 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 182px;\n    height: 182px;\n    border-radius: 40px;\n  }\n"]))),Un=k.ZP.span(an||(an=(0,_.Z)(["\n  position: absolute;\n  display: inline-block;\n  width: 180px;\n  bottom: -25px;\n  text-align: center;\n\n  font-size: 12px;\n\n  line-height: 1.35;\n  color: var(--form-error-red);\n"]))),Kn=function(n){var e=n.errors,t=n.touched,r=n.category,i=(0,o.useState)(null),l=(0,a.Z)(i,2),s=l[0],d=l[1],p=(0,j.u6)().setFieldValue,x=(0,c.$G)().t,u=e.file&&t.file;return(0,S.jsxs)(Vn,{"data-category":r,children:[x("add_photo"),(0,S.jsx)(Dn,{type:"file",name:"file",accept:"image/*",id:"file",onChange:function(n){var e=n.currentTarget.files[0];p("file",e);var t=e?URL.createObjectURL(e):null;d(t)}}),(0,S.jsxs)(En,{children:[(0,S.jsxs)(Ln,{children:[s&&(0,S.jsx)(Gn,{src:s}),!s&&(0,S.jsx)(Bn,{iconName:"#plus"})]}),u&&(0,S.jsx)(Un,{children:e.file})]})]})},Hn=t(8466),Qn=k.ZP.button(on||(on=(0,_.Z)(["\n  height: 38px;\n  width: 248px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-radius: 40px;\n  padding-left: auto;\n  padding-right: auto;\n  border: 2px solid var(--main-clr-blue);\n  font-size: 16px;\n  color: var(--white-bckg-clr);\n  background-color: var(--main-clr-blue);\n  font-family: 'Manrope', sans-serif;\n  font-weight: 700;\n  cursor: pointer;\n  :hover,\n  :focus {\n    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);\n    border: none;\n  }\n"]))),Wn=k.ZP.svg(ln||(ln=(0,_.Z)(["\n  fill: var(--main-bckg-clr);\n  margin-left: 12px;\n"]))),Xn=k.ZP.button(cn||(cn=(0,_.Z)(["\n  height: 40px;\n  width: 124px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  font-family: 'Manrope', sans-serif;\n  font-weight: 700;\n  border: none;\n  color: var(--main-clr-blue);\n  background-color: transparent;\n  cursor: pointer;\n  :hover {\n    border: solid 2px var(--main-clr-blue);\n    border-radius: 40px;\n    box-shadow: 7px 13px 14px var(--big-shadow);\n  }\n"]))),Yn=k.ZP.svg(sn||(sn=(0,_.Z)(["\n  stroke: var(--main-clr-blue);\n  margin-right: 12px;\n"]))),ne=k.ZP.button(dn||(dn=(0,_.Z)(["\n  height: 40px;\n  width: 124px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  font-family: 'Manrope', sans-serif;\n  font-weight: 700;\n  border: none;\n  color: var(--main-clr-blue);\n  background-color: transparent;\n  cursor: pointer;\n  :hover {\n    border: solid 2px var(--main-clr-blue);\n    border-radius: 40px;\n    box-shadow: 7px 13px 14px var(--big-shadow);\n  }\n"]))),ee=(k.ZP.button(pn||(pn=(0,_.Z)(["\n  z-index: 50;\n  position: absolute;\n  top: 251px;\n  right: 0;\n  height: 80px;\n  width: 80px;\n  display: flex;\n  flex-direction: column-reverse;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding-top: 18px;\n  padding-bottom: 16px;\n  border-radius: 50%;\n  font-size: 12px;\n  font-family: 'Manrope', sans-serif;\n  font-weight: 600;\n  border: none;\n  background: var(--main-clr-blue);\n  color: var(--main-bckg-clr);\n  box-shadow: 3px 8px 14px var(--small-shadow);\n\n  @media screen and (min-width: 768px) {\n    position: static;\n    height: 40px;\n    width: 129px;\n    padding-top: 9px;\n    padding-bottom: 9px;\n    padding-left: 16px;\n    border-radius: 40px;\n    font-size: 16px;\n    font-weight: 700;\n  }\n  cursor: pointer;\n  :hover,\n  :focus {\n    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);\n  }\n"]))),k.ZP.div(xn||(xn=(0,_.Z)(["\n  height: 28px;\n  width: 80px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--main-clr-blue-light);\n  border: none;\n  color: var(--main-accent-text-clr);\n"]))),k.ZP.div(un||(un=(0,_.Z)(["\n  height: 28px;\n  width: 80px;\n  border-radius: 16px;\n  display: flex;\n  padding-left: 4px;\n  align-items: center;\n  background-color: var(--main-clr-blue-light);\n  border: none;\n  color: var(--main-accent-text-clr);\n"]))),k.ZP.div(mn||(mn=(0,_.Z)(["\n  width: 126px;\n  height: 32px;\n  position: absolute;\n  top: 16px;\n  border-top-right-radius: 16px;\n  border-bottom-right-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--main-clr-blue-light);\n  border: none;\n  color: var(--main-accent-text-clr);\n"]))),k.ZP.svg(fn||(fn=(0,_.Z)(["\n  fill: none;\n  stroke: var(--main-clr-blue);\n  margin-right: 4px;\n"]))),k.ZP.p(hn||(hn=(0,_.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.04em;\n"]))),k.ZP.p(gn||(gn=(0,_.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 19px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.04em;\n"]))),k.ZP.button(yn||(yn=(0,_.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 94px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  border: none;\n  color: var(--main-accent-text-clr);\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc(22 / 12);\n  letter-spacing: 0.04em;\n  cursor: pointer;\n"]))),k.ZP.svg(bn||(bn=(0,_.Z)(["\n  fill: ",";\n  stroke: ",";\n"])),(function(n){return n.fill||"none"}),(function(n){return n.stroke||"none"})),function(){return(0,S.jsx)(Wn,{width:24,height:24,children:(0,S.jsx)("use",{href:Hn.Z+"#icon-paw"})})}),te=function(){return(0,S.jsx)(Yn,{width:24,height:24,children:(0,S.jsx)("use",{href:kn+"#arrow-left"})})},re=function(){return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(Qn,{type:"submit",children:[(0,q.t)("done"),(0,S.jsx)(ee,{})]})})},ie=function(n){var e=n.onClick;return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(Qn,{type:"button",onClick:e,children:[(0,q.t)("next"),(0,S.jsx)(ee,{})]})})},ae=function(n){var e=n.onClick;return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(Xn,{type:"button",onClick:e,children:[(0,S.jsx)(te,{}),(0,q.t)("cancel")]})})},oe=function(n){var e=n.onClick;return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(ne,{type:"button",onClick:e,children:[(0,S.jsx)(te,{}),(0,q.t)("back")]})})},le=k.ZP.h2(vn||(vn=(0,_.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.35;\n  color: var(--main-accent-text-clr);\n  padding-left: 16px;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 28px;\n\n    text-align: ",";\n  }\n"])),(function(n){return"your pet"!==n["data-category"]&&1!==n["data-stage"]?"center":"left"})),ce=function(n){var e=n.picked,t=n.stage,r=(0,c.$G)().t,i=r("add_pet_form");if(1!==t)switch(e){case"sell":i=r("add_pet_sell");break;case"lost-found":i=r("add_pet_lost");break;default:i=r("add_my_pet")}return(0,S.jsx)(le,{"data-category":e,"data-stage":t,children:i})},se=k.ZP.span(Zn||(Zn=(0,_.Z)(["\n  font-size: 10px;\n  line-height: 14px;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 26px;\n  }\n"])),(function(n){return n.stage<n.datastage?"var(--main-form-clr)":n.stage===n.datastage?"var(--main-clr-blue)":"var(--menu-clr-green)"})),de=k.ZP.span(wn||(wn=(0,_.Z)(["\n  width: 80px;\n  height: 8px;\n  background: ",";\n  border-radius: 8px;\n\n  @media screen and (min-width: 768px) {\n    width: 120px;\n  }\n"])),(function(n){return n.stage<n.datastage?"var(--main-clr-blue-light)":n.stage===n.datastage?"var(--main-clr-blue)":"var(--menu-clr-green)"})),pe=k.ZP.div(jn||(jn=(0,_.Z)(["\n  display: flex;\n  font-weight: 500;\n  gap: 12px;\n  margin-bottom: 16px;\n\n  @media screen and (min-width: 768px) {\n    gap: 16px;\n\n    justify-content: ",";\n  }\n"])),(function(n){return"your pet"!==n["data-category"]?"center":"left"})),xe=k.ZP.div(_n||(_n=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),ue=function(n){var e=n.stage,t=n.category,r=(0,c.$G)().t;return(0,S.jsxs)(pe,{"data-category":t,children:[(0,S.jsxs)(xe,{children:[(0,S.jsx)(se,{stage:e,datastage:1,children:r("choose_option")}),(0,S.jsx)(de,{stage:e,datastage:1})]}),(0,S.jsxs)(xe,{children:[(0,S.jsx)(se,{stage:e,datastage:2,children:r("details")}),(0,S.jsx)(de,{stage:e,datastage:2})]}),(0,S.jsxs)(xe,{children:[(0,S.jsx)(se,{stage:e,datastage:3,children:r("more_info")}),(0,S.jsx)(de,{stage:e,datastage:3})]})]})},me=t(6727),fe=me.Ry().shape({title:me.Z_().when("category",{is:function(n){return"my pet"!==n},then:function(){return me.Z_().min(4,(0,q.t)("text_min_4")).max(30,(0,q.t)("text_max_30")).required((0,q.t)("title_enter"))},otherwise:function(){return me.Z_()}}),date:me.hT().max(new Date,(0,q.t)("date_max")).required((0,q.t)("db_pholder")),type:me.Z_("Must be a string").min(2,(0,q.t)("text_min_2")).max(16,(0,q.t)("text_max_16")).matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\u0406\u0456\u0407\u0457\u0404\u0454\u0490\u0491]{2,16}$/,(0,q.t)("name_regexp")).required((0,q.t)("type_type")),name:me.Z_().min(2,(0,q.t)("text_min_2")).max(16,(0,q.t)("text_max_16")).matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\u0406\u0456\u0407\u0457\u0404\u0454\u0490\u0491]{2,16}$/,(0,q.t)("name_regexp")).required((0,q.t)("name_enter")),location:me.Z_().when("category",{is:function(n){return"my pet"!==n},then:function(){return me.Z_().matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\u0406\u0456\u0407\u0457\u0404\u0454\u0490\u0491\s]+(?:,\s*[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\u0406\u0456\u0407\u0457\u0404\u0454\u0490\u0491\s]+)*$/,(0,q.t)("loc_with")).required((0,q.t)("loc_enter"))},otherwise:function(){return me.Z_()}}),price:me.Rx().when("category",{is:function(n){return"sell"===n},then:function(){return me.Rx().moreThan(0,(0,q.t)("price_err")).required((0,q.t)("price_enter"))},otherwise:function(){return me.Rx()}}),comments:me.Z_().min(4,(0,q.t)("text_min_4")).max(120,(0,q.t)("text_max_120")),sex:me.Z_().when("category",{is:function(n){return"sell"===n||"lost-found"===n||"for-free"===n},then:function(){return me.Z_().oneOf(["female","male"]).required((0,q.t)("pet_sex"))},otherwise:function(){return me.Z_()}}),category:me.Z_().oneOf(["my pet","sell","lost-found","for-free"]).required(),file:me.nK().required((0,q.t)("file_upload")).test("fileType",(0,q.t)("file_type"),(function(n){return!n||["image/jpg","image/jpeg","image/png"].includes(n.type)})).test("fileSize",(0,q.t)("file_size"),(function(n){return(null===n||void 0===n?void 0:n.size)<=3145728}))}),he=localStorage.getItem("formValues"),ge=he?JSON.parse(he):{title:"",date:"",type:"",name:"",location:"",price:"",comments:"",sex:"",category:"my pet",file:""},ye=localStorage.getItem("stage"),be=ye?Number(JSON.parse(ye)):1,ve=function(){var n=(0,o.useState)((function(){return be})),e=(0,a.Z)(n,2),t=e[0],x=e[1],u=(0,o.useState)([]),m=(0,a.Z)(u,2),f=m[0],h=m[1],g=(0,l.s0)(),y=(0,c.$G)().t,b=(0,d.a)().token,v=(0,p.I0)(),Z=[[y("your_pet"),"my pet"],[y("sell"),"sell"],[y("lost_found"),"lost-found"],[y("in_good_hands"),"for-free"]],_=[[y("female"),"female"],[y("male"),"male"]],k=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,i,a){var o,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a(e),l=e.category,1===t&&(o=!0),2===t&&"your pet"===l&&(h(["type","name","date"]),o=!(i.type||i.name||i.date)),2===t&&"your pet"!==l&&(h(["type","name","date","title"]),o=!(i.type||i.name||i.date||i.title)),o){n.next=9;break}return n.abrupt("return");case 9:x((function(n){return n+1})),localStorage.setItem("formValues",JSON.stringify(e)),localStorage.setItem("stage",JSON.stringify(t+1));case 12:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),P=function(){x((function(n){return n-1})),localStorage.setItem("stage",JSON.stringify(t-1)),h([])},z=function(){g(-1)};function T(n,e){return F.apply(this,arguments)}function F(){return F=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=w(e,t),n.abrupt("return",i);case 2:case"end":return n.stop()}}),n)}))),F.apply(this,arguments)}var N=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,a,o,l,c,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=t.resetForm,a=new FormData,"my pet"!==e.category){n.next=15;break}console.log("in my pet before formData"),o=e.date,l="".concat(o.slice(8,o.length),"-").concat(o.slice(5,7),"-").concat(o.slice(0,4)),a.append("name",e.name),a.append("date",l),a.append("type",e.type),a.append("pet",e.file,"Pet`s photo"),e.comments&&a.append("comments",e.comments),v((0,s.addOwnPet)(a)),g("/user"),n.next=30;break;case 15:return a.append("title",e.title),a.append("category",e.category),a.append("name",e.name),c=e.date,d="".concat(c.slice(8,c.length),"-").concat(c.slice(5,7),"-").concat(c.slice(0,4)),a.append("date",d),a.append("type",e.type),a.append("notice",e.file,"Pet`s photo"),a.append("sex",e.sex),a.append("location",e.location),e.comments&&a.append("comments",e.comments),"sell"===e.category&&a.append("price",e.price),n.next=29,T(a,b);case 29:g("/notices/".concat(e.category));case 30:localStorage.removeItem("formValues"),localStorage.removeItem("stage"),i(),x(1),h([]);case 35:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,S.jsx)(Sn,{children:(0,S.jsx)(j.J9,{initialValues:ge,onSubmit:N,validationSchema:fe,children:function(n){var e=n.values,r=n.errors,i=n.touched,a=n.validateForm,o=n.handleChange,l=n.handleBlur,c=e.category,s=e.sex,d=r.sex&&i.sex;return(0,S.jsxs)(Cn,{"data-category":c,children:[(0,S.jsx)(ce,{picked:c,stage:t}),(0,S.jsx)(ue,{stage:t,category:c}),(0,S.jsxs)(An,{children:[1===t&&(0,S.jsx)(Nn,{role:"group",children:Z.map((function(n){var e=n[1]===c;return(0,S.jsx)(C,{value:n,name:"category",selected:e},n[0])}))}),(0,S.jsxs)(Mn,{"data-category":c,children:[3===t&&(0,S.jsxs)(In,{children:["my pet"!==c&&(0,S.jsxs)(On,{role:"group","aria-labelledby":"sex",children:[(0,S.jsx)(Fn,{id:"sex",children:y("sex")}),(0,S.jsxs)(Tn,{children:[_.map((function(n,e){var t=0===e?"#female":"#male",a=n[1]===s;return(0,S.jsx)(C,{value:n,name:"sex",selected:a,errors:r,touched:i,children:(0,S.jsx)(Rn,{iconName:t,index:e,selected:a,sex:s})},n[0])})),d&&(0,S.jsx)(Jn,{children:r.sex})]})]}),(0,S.jsx)(Kn,{errors:r,category:c,touched:i})]}),(0,S.jsxs)(qn,{children:[2===t&&"my pet"!==c&&(0,S.jsx)(O,{type:"text",name:"title",label:y("title_add"),placeholder:y("title_add"),errors:r,touched:i,emulTouch:f}),2===t&&(0,S.jsx)(O,{type:"text",name:"name",label:y("pet_name"),placeholder:y("pn_placeholder"),errors:r,touched:i,emulTouch:f}),2===t&&(0,S.jsx)(O,{type:"date",name:"date",label:y("date_of_birth"),placeholder:y("db_pholder"),errors:r,touched:i,emulTouch:f}),2===t&&(0,S.jsx)(O,{type:"text",name:"type",label:y("type"),placeholder:y("type_enter"),errors:r,touched:i,emulTouch:f}),3===t&&"my pet"!==c&&(0,S.jsx)(O,{type:"text",name:"location",label:y("location"),placeholder:y("loc_enter"),errors:r,touched:i,emulTouch:f}),3===t&&"sell"===c&&(0,S.jsx)(O,{type:"number",name:"price",label:y("price"),placeholder:y("price_enter"),errors:r,touched:i,emulTouch:f}),3===t&&(0,S.jsx)(A,{errors:r,touched:i,category:c,emulTouch:f,onChange:o,onBlur:l,value:e.comments})]})]}),3!==t&&(0,S.jsxs)($n,{children:[(0,S.jsx)(ie,{onClick:function(){return k(e,r,a)}}),1===t&&(0,S.jsx)(ae,{onClick:z}),2===t&&(0,S.jsx)(oe,{onClick:P})]}),3===t&&(0,S.jsxs)($n,{children:[(0,S.jsx)(re,{onSubmit:N}),(0,S.jsx)(oe,{onClick:P})]})]})]})}})})},Ze=function(){return(0,S.jsx)(ve,{})}}}]);
//# sourceMappingURL=265.7db28486.chunk.js.map