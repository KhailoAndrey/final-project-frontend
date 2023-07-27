"use strict";(self.webpackChunkfinal_project_frontend=self.webpackChunkfinal_project_frontend||[]).push([[411],{8792:function(n,e,t){t.d(e,{D:function(){return l}});var i,r,o=t(168),a=t(7691),c=a.ZP.h1(i||(i=(0,o.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 700;\n  display: flex;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 48px;\n  }\n"]))),s=a.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    /* width: 704px; */\n    margin-top: 80px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 100%; */\n  }\n"]))),d=t(3329),l=function(n){var e=n.text,t=void 0===e?"Page title":e;return(0,d.jsx)(s,{children:(0,d.jsx)(c,{children:t})})}},2256:function(n,e,t){t.d(e,{Z:function(){return p}});var i,r=t(7689),o=t(9230),a=t(4217),c=t(8466),s=t(168),d=t(7691).ZP.button(i||(i=(0,s.Z)(["\n  border-radius: 40px;\n  background: var(--main-clr-blue);\n  display: flex;\n  width: 129px;\n  height: 35px;\n  justify-content: center;\n  align-items: center;\n  /* gap: 8px; */\n  border: 0;\n  outline: 0;\n  text-decoration: none;\n  svg {\n    stroke: var(--btn-clr-fon);\n  }\n  padding: 8px 0;\n  color: var(--btn-clr-fon);\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 700;\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n    font-size: 16px;\n    height: 40px;\n  }\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n  }\n"]))),l=t(3329),p=function(n){var e=n.setAlertShowModal,t=void 0===e?null:e,i=(0,a.a)().isLoggedIn,s=(0,r.s0)(),p=(0,o.$G)().t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(d,{type:"button",onClick:function(){i?s("/add-pet"):t(!0)},children:[p("add_pet"),(0,l.jsx)("svg",{width:24,height:24,children:(0,l.jsx)("use",{href:"".concat(c.Z,"#icon-plus-small"),width:24,height:24})})]})})}},5411:function(n,e,t){t.r(e),t.d(e,{default:function(){return Pe}});var i=t(4165),r=t(5861),o=t(9439),a=t(2791),c=t(7689),s=t(9230),d=t(4217),l="https://final-project-backend-4o0r.onrender.com/api/notices/owner";function p(){return(p=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o,a,c;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}},n.prev=1,n.next=4,fetch("".concat(l,"?page=").concat(e,"&query=").concat(t),o);case 4:if((a=n.sent).ok){n.next=7;break}throw new Error("Sorry. Try again later :(");case 7:return n.next=9,a.json();case 9:return c=n.sent,n.abrupt("return",c);case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}var h=function(n,e,t){return p.apply(this,arguments)},x=t(2256),u="https://final-project-backend-4o0r.onrender.com/api/notices/favorite";function f(){return(f=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o,a,c;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}},n.prev=1,n.next=4,fetch("".concat(u,"?page=").concat(e,"&query=").concat(t),o);case 4:if((a=n.sent).ok){n.next=7;break}throw new Error("Sorry. Try again later :(");case 7:return n.next=9,a.json();case 9:return c=n.sent,n.abrupt("return",c);case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}var g=function(n,e,t){return f.apply(this,arguments)},m="https://final-project-backend-4o0r.onrender.com/api/notices";function v(){return(v=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(m,"?category=").concat(t,"&query=").concat(r,"&page=").concat(e));case 3:if((o=n.sent).ok){n.next=6;break}throw new Error("Sorry. Try again later :(");case 6:return n.next=8,o.json();case 8:return a=n.sent,n.abrupt("return",a);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var w,b,j,y,Z,k,P=function(n,e,t){return v.apply(this,arguments)},C=t(9376),_=t(882),z=t(8466),M=t(168),S=t(7691),E=S.ZP.div(w||(w=(0,M.Z)(["\nz-index: 200;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(97, 97, 97, 0.6);\n  backdrop-filter: blur(4px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),F=S.ZP.div(b||(b=(0,M.Z)(["\n  z-index: 200;\n  width: 280px;\n  border-radius: 20px;\n  background-color: #fff;\n  padding: 60px 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    padding: 60px 40px;\n  }\n"]))),A=S.ZP.button(j||(j=(0,M.Z)(["\n  position: absolute;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #fff;\n  top: 16px;\n  right: 16px;\n\n  &:hover,\n  &:focus {\n    svg {\n      stroke: var(--main-clr-yellow);\n    }\n  }\n"]))),T=S.ZP.p(y||(y=(0,M.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 500;\n\n  @media screen and (min-width: 768px) {\n    font-size: 36px;\n  }\n"]))),G=S.ZP.p(Z||(Z=(0,M.Z)(["\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 20px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    margin-top: 40px;\n  }\n"]))),I=S.ZP.div(k||(k=(0,M.Z)(["\n  display: flex;\n  gap: 12px;\n  flex-direction: column;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    gap: 20px;\n  }\n"]))),L=t(3329),D=function(n){var e=n.setAlertShowModal,t=(0,s.$G)().t;return(0,a.useEffect)((function(){var n=function(n){e(!1)};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[e]),(0,L.jsx)(E,{onClick:function(){return e(!1)},children:(0,L.jsxs)(F,{onClick:function(n){return n.stopPropagation()},children:[(0,L.jsx)(A,{onClick:function(){return e(!1)},children:(0,L.jsx)("svg",{width:24,height:24,children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-cross"),style:{stroke:"#54ADFF"},width:24,height:24})})}),(0,L.jsx)(T,{children:t("attention")}),(0,L.jsx)(G,{children:t("attention_text")}),(0,L.jsxs)(I,{children:[(0,L.jsx)(C.T,{closeModal:e}),(0,L.jsx)(_.G,{closeModal:e})]})]})})},N=t(9434),$=function(n,e){var t;switch(n){case"sell":t=e("sell");break;case"lost-found":t=e("lost_found");break;case"for-free":t=e("in_good_hands");break;default:t=n}return t},R="https://final-project-backend-4o0r.onrender.com";function q(){return(q=(0,r.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(R,"/api/notices/").concat(e));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Sorry. Try again later :(");case 6:return n.next=8,t.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var B,O,Q,U,H,J,K,V,W,X,Y,nn,en,tn,rn,on,an,cn,sn,dn,ln,pn,hn,xn,un,fn,gn,mn,vn,wn,bn,jn,yn,Zn,kn,Pn,Cn,_n,zn,Mn=function(n){return q.apply(this,arguments)},Sn=S.ZP.div(B||(B=(0,M.Z)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background: rgba(97, 97, 97, 0.6);\n  backdrop-filter: blur(4px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  z-index: 100;\n"]))),En=S.ZP.div(O||(O=(0,M.Z)(["\n  width: 680px;\n  position: relative;\n  padding: 32px;\n\n  background-color: #fff;\n  border-radius: 40px;\n\n  @media (max-width: 767px) {\n    width: 280px;\n    padding: 20px;\n    border-radius: 20px;\n  }\n"]))),Fn=S.ZP.div(Q||(Q=(0,M.Z)(["\n  height: 300px;\n  display: flex;\n  align-items: flex-start;\n  gap: 24px;\n\n  @media (max-width: 767px) {\n    margin-top: 44px;\n    flex-direction: column;\n    gap: 12px;\n    height: auto;\n  }\n"]))),An=S.ZP.div(U||(U=(0,M.Z)(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  gap: 50px;\n\n  font-size: 16px;\n  line-height: 22px;\n\n  @media (max-width: 767px) {\n    font-size: 12px;\n    line-height: 16px;\n  }\n"]))),Tn=S.ZP.div(H||(H=(0,M.Z)(["\n  width: 240px;\n\n  font-family: 'Manrope';\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 1.357;\n"]))),Gn=S.ZP.div(J||(J=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),In=S.ZP.div(K||(K=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  gap: 5px;\n\n  font-weight: 600;\n"]))),Ln=S.ZP.div(V||(V=(0,M.Z)(["\n  display: flex;\n  position: absolute;\n  right: 0;\n  top: 0;\n  flex-direction: column;\n  align-items: left;\n  gap: 5px;\n"]))),Dn=S.ZP.div(W||(W=(0,M.Z)(["\n  padding-top: 28px;\n  padding-bottom: 70px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  \n\n  @media (max-width: 767px) {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.375;\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n"]))),Nn=S.ZP.div(X||(X=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 17px;\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n  }\n"]))),$n=S.ZP.button(Y||(Y=(0,M.Z)(["\n /* min-width: 129px; */\n  padding: 6px 20px;\n  color: var(--btn-clr-fon);\n  background-color: var(--main-clr-blue);\n  border-radius: 40px;\n  border: none;\n\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  & svg {\n    stroke: currentColor;\n    fill: none;\n  }\n\n  :hover,\n  :focus {\n    background: var(--main-clr-gr_blue);\n  }\n  @media (max-width: 767px) {\n    width: 100%;\n  }\n"]))),Rn=S.ZP.button(nn||(nn=(0,M.Z)(["\n/* min-width: 129px; */\n  padding: 8px 20px;\n  background-color:  var(--btn-clr-fon);\n  color: #54adff;\n  border-radius: 40px;\n  border: 1px solid #54adff;\n  :hover,\n  :focus {\n    background: var(--main-clr-gr_blue);\n    color: #fff;\n  }\n\n  @media (max-width: 767px) {\n    width: 100%;\n  }\n"]))),qn=S.ZP.div(en||(en=(0,M.Z)(["\n  position: relative;\n  width: 262px;\n  height: 298px;\n  border-radius: 0 0 40px 40px;\n  background-image: url(",");\n  background-size: cover;\n\n  @media (max-width: 767px) {\n    width: 240px;\n    height: 240px;\n  }\n"])),(function(n){return n.img})),Bn=S.ZP.div(tn||(tn=(0,M.Z)(["\n  position: absolute;\n  left: 0;\n  top: 16px;\n\n  width: 126px;\n  height: 32px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 19px;\n\n  background-color: var(--main-clr-blue-light);\n  border-radius: 0 16px 16px 0;\n"]))),On=S.ZP.button(rn||(rn=(0,M.Z)(["\n  position: absolute;\n  top: 28px;\n  right: 31px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: #fff;\n  color: var(--main-clr-blue);\n  border: none;\n  stroke: currentColor;\n  \n  &:hover {\n    stroke: var(--main-clr-yellow);\n  }\n\n  @media (max-width: 767px) {\n    top: 17px;\n    right: 17px;\n  }\n"]))),Qn=function(n){var e,t,c,d,l,p,h,x,u=n.handler,f=(n.handleAdd,n.id),g=n.isFavorite,m=n.onFavBtnClick,v=n.setRerender,w=(0,s.$G)().t,b=(0,a.useState)({}),j=(0,o.Z)(b,2),y=j[0],Z=j[1];(0,a.useEffect)((function(){var n=function(){var n=(0,r.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Mn(f);case 3:e=n.sent,Z(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching notice:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[f]);return(0,a.useEffect)((function(){var n=function(n){27===n.keyCode&&(v(!0),u(!1))};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[u,v]),(0,L.jsx)(Sn,{onClick:function(n){n.target===n.currentTarget&&(v(!0),u(!1))},children:(0,L.jsxs)(En,{children:[(0,L.jsx)(On,{onClick:function(){u(!1),v(!0)},children:(0,L.jsx)("svg",{width:24,height:24,children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-cross"),width:24,height:24})})}),(0,L.jsxs)(Fn,{children:[(0,L.jsx)(qn,{img:y.file,children:(0,L.jsxs)(Bn,{children:[" ",$(y.category,w)]})}),(0,L.jsxs)(Gn,{children:[(0,L.jsx)(Tn,{children:y.description||"Cute dog looking for a home"}),(0,L.jsxs)(An,{children:[(0,L.jsxs)(In,{children:[(0,L.jsxs)("div",{children:[w("name"),":"]}),(0,L.jsxs)("div",{children:[w("birthday"),":"]}),(0,L.jsxs)("div",{children:[w("type"),":"]}),(0,L.jsxs)("div",{children:[w("place"),":"]}),(0,L.jsxs)("div",{children:[w("sex"),":"]}),(0,L.jsxs)("div",{children:[w("owner"),":"]}),(null===(e=y.owner)||void 0===e?void 0:e.email)&&(0,L.jsxs)("div",{children:[w("email"),":"]}),(null===(t=y.owner)||void 0===t?void 0:t.phone)&&(0,L.jsxs)("div",{children:[w("phone"),":"]})]}),(0,L.jsxs)(Ln,{children:[(0,L.jsx)("div",{children:y.name||y.title}),(0,L.jsx)("div",{children:y.date}),(0,L.jsx)("div",{children:"male"===y.sex?"Cat"===y.type?w("cat_m"):w("dog_m"):(y.type,w("".concat(y.type)))}),(0,L.jsx)("div",{children:y.location}),(0,L.jsx)("div",{children:w("".concat(y.sex))}),(0,L.jsx)("div",{children:null===(c=y.owner)||void 0===c?void 0:c.name}),(null===(d=y.owner)||void 0===d?void 0:d.email)&&(0,L.jsx)("div",{children:null===(l=y.owner)||void 0===l?void 0:l.email}),(null===(p=y.owner)||void 0===p?void 0:p.phone)&&(0,L.jsx)("div",{children:null===(h=y.owner)||void 0===h?void 0:h.phone})]})]})]})]}),(0,L.jsxs)(Dn,{children:[(0,L.jsxs)("b",{children:[w("comment"),":"]})," ",y.comments]}),(0,L.jsxs)(Nn,{children:[(0,L.jsxs)($n,{onClick:function(){return m()},children:[g?(0,L.jsx)("span",{children:w("remove")}):(0,L.jsx)("span",{children:w("add_to")}),(0,L.jsx)("svg",{width:"24",height:"24",children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-heart"),width:24,height:24})})]}),(null===(x=y.owner)||void 0===x?void 0:x.phone)&&(0,L.jsx)(Rn,{onClick:function(){var n;(n=y.owner.phone)&&(window.location.href="tel:".concat(n))},children:w("contact")})]})]})})},Un=t(6516),Hn=S.ZP.li(on||(on=(0,M.Z)(["\n  width: 280px;\n  height: 456px;\n  box-shadow: 3px 8px 14px 0px var(--small-shadow);\n  border-radius: 0px 0px 40px 40px;\n  background-color: var(--white-bckg-clr);\n\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 3px 8px 14px 0px var(--big-shadow);\n  }\n"]))),Jn=S.ZP.div(an||(an=(0,M.Z)(["\n  width: 280px;\n  height: 288px;\n  position: relative;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n"]))),Kn=S.ZP.img(cn||(cn=(0,M.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),Vn=S.ZP.div(sn||(sn=(0,M.Z)(["\n  width: 126px;\n  height: 32px;\n  background-color: var(--main-clr-blue-light);\n  border-radius: 0px 16px 16px 0px;\n  position: absolute;\n  top: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Wn=S.ZP.button(dn||(dn=(0,M.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--main-clr-blue-light);\n  border: 0;\n  outline: 0;\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Xn=S.ZP.button(ln||(ln=(0,M.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--main-clr-blue-light);\n  border: 0;\n  outline: 0;\n  position: absolute;\n  top: 68px;\n  right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    stroke: var(--main-clr-blue);\n  }\n\n  &:hover,\n  &:focus {\n    background-color: var(--main-clr-blue);\n\n    svg {\n      stroke: var(--main-clr-blue-light);\n    }\n  }\n"]))),Yn=S.ZP.div(pn||(pn=(0,M.Z)(["\n  width: 280px;\n  height: 28px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  position: absolute;\n  bottom: 12px;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n"]))),ne=S.ZP.div(hn||(hn=(0,M.Z)(["\n  width: 80px;\n  height: 28px;\n  background-color: var(--main-clr-blue-light);\n  border-radius: 16px;\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  padding-left: 5px;\n  padding-right: 4px;\n  gap: 3px;\n  font-size: 12px;\n  font-weight: 600;\n"]))),ee=S.ZP.div(xn||(xn=(0,M.Z)(["\n  height: 168px;\n  padding: 20px 16px 28px 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    padding: 20px 20px 24px 20px;\n  }\n"]))),te=S.ZP.h2(un||(un=(0,M.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 700;\n"]))),ie=S.ZP.button(fn||(fn=(0,M.Z)(["\n  width: 248px;\n  height: 38px;\n  border-radius: 40px;\n  border: 2px solid var(--main-clr-blue);\n  color: var(--main-clr-blue);\n  font-size: 16px;\n  font-weight: 600;\n  margin-left: auto;\n  margin-right: auto;\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n    color: var(--btn-clr-fon);\n    border: 0;\n  }\n"]))),re=function(n){var e=n.article,t=n.setAlertShowModal,i=n.setRerender,r=(0,a.useState)(!1),c=(0,o.Z)(r,2),l=c[0],p=c[1],h=(0,N.I0)(),x=(0,s.$G)().t,u=(0,d.a)(),f=u.user,g=u.isLoggedIn,m=e._id,v=e.title,w=e.category,b=e.date,j=e.file,y=e.sex,Z=e.location,k=e.owner,P=function(n){var e=n.split("-"),t=(0,o.Z)(e,3),i=t[0],r=t[1],a=t[2],c=parseInt(r,10)-1,s=new Date(a,c,i),d=(new Date-s)/315576e5;return Math.floor(d)}(b),C=function(n){return n.length>5?n.slice(0,4)+"...":n}(Z),_=$(w,x),M=!!g&&f.favorite.includes(m),S=f._id===k,E=function(){console.log("horey!"),g?(M||h((0,Un.addToFavorite)(m)),M&&h((0,Un.delFromFavorite)(m))):t(!0)};return(0,L.jsxs)(Hn,{id:m,children:[(0,L.jsxs)(Jn,{children:[(0,L.jsx)(Kn,{src:"".concat(j),alt:"pretty pet"}),(0,L.jsx)(Vn,{children:(0,L.jsx)("p",{children:_})}),(0,L.jsxs)("div",{children:[(0,L.jsx)(Wn,{type:"button",onClick:function(){return E()},children:M?(0,L.jsx)("svg",{width:24,height:24,children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-heart-fill"),width:24,height:24})}):(0,L.jsx)("svg",{width:24,height:24,children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-heart"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})})}),S&&(0,L.jsx)(Xn,{type:"button",children:(0,L.jsx)("svg",{width:24,height:24,children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-trash"),width:24,height:24})})})]}),(0,L.jsxs)(Yn,{children:[(0,L.jsxs)(ne,{children:[(0,L.jsx)("svg",{width:24,height:24,children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-location"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,L.jsx)("p",{children:C})]}),(0,L.jsxs)(ne,{children:[(0,L.jsx)("svg",{width:24,height:24,children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-clock"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,L.jsxs)("p",{children:[P<1&&"<1 ".concat(x("min_year")," "),1===P&&"1 ".concat(x("year")),P>1&&P<5&&"".concat(P," ").concat(x("years")),P>=5&&"".concat(P," ").concat(x("big_years"))]})]}),(0,L.jsxs)(ne,{children:["male"===y?(0,L.jsx)("svg",{width:24,height:24,children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-male"),style:{stroke:"var(--main-clr-blue)"},width:24,height:24})}):(0,L.jsx)("svg",{width:24,height:24,children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-female"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,L.jsx)("p",{children:y})]})]})]}),(0,L.jsxs)(ee,{children:[(0,L.jsx)(te,{children:v}),(0,L.jsx)(ie,{type:"button",onClick:function(){return p(!0)},children:x("learn_more")})]}),l&&(0,L.jsx)(Qn,{handler:p,id:e._id,isFavorite:M,onFavBtnClick:E,setRerender:i})]})},oe=S.ZP.ul(gn||(gn=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 32px;\n    margin-top: 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1248px;\n  }\n"]))),ae=function(n){var e=n.articles,t=n.setAlertShowModal,i=n.setRerender;return(0,a.useEffect)((function(){}),[]),(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(oe,{children:e.length>0&&e.map((function(n){return(0,L.jsx)(re,{article:n,setAlertShowModal:t,setRerender:i},n._id)}))})})},ce=S.ZP.div(mn||(mn=(0,M.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n \n"]))),se=S.ZP.label(vn||(vn=(0,M.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 16px;\n  cursor: pointer;\n  border: 0;\n  border-radius: 40px;\n  background-color: var(--main-clr-blue-light);\n  color: var(--main-clr-blue);\n\n  @media screen and (min-width: 768px){\n    height: 35px;\n  }\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n    color: var(--btn-clr-fon);\n  }\n"]))),de=S.ZP.input(wn||(wn=(0,M.Z)(["\n  display: none;\n\n  &[type='radio']:checked + label {\n    background-color: var(--main-clr-blue);\n    color: var(--btn-clr-fon);\n  }\n"]))),le=function(n){var e=n.setCategory,t=n.setPage,i=(0,d.a)().isLoggedIn,r=(0,c.s0)(),l=(0,s.$G)().t,p=(0,a.useState)("sell"),h=(0,o.Z)(p,2),x=h[0],u=h[1],f=(0,c.UO)();(0,a.useEffect)((function(){f.categoryName?u(f.categoryName):u("sell")}),[f.categoryName]);var g=function(){u(f.categoryName)},m=function(n){var i=n.target.value;e(i),t(1),r("/notices/".concat(i))};return(0,L.jsxs)(ce,{children:[(0,L.jsx)(de,{onClick:function(n){return m(n)},type:"radio",id:"radio1",name:"radios",value:"sell",checked:"sell"===x,onChange:g}),(0,L.jsx)(se,{htmlFor:"radio1",children:l("sell")}),(0,L.jsx)(de,{onClick:function(n){return m(n)},type:"radio",id:"radio2",name:"radios",value:"lost-found",checked:"lost-found"===x,onChange:g}),(0,L.jsx)(se,{htmlFor:"radio2",children:l("lost_found")}),(0,L.jsx)(de,{onClick:function(n){return m(n)},type:"radio",id:"radio3",name:"radios",value:"for-free",checked:"for-free"===x,onChange:g}),(0,L.jsx)(se,{htmlFor:"radio3",children:l("in_good_hands")}),i&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(de,{onClick:function(n){return m(n)},type:"radio",id:"radio4",name:"radios",value:"favorite"}),(0,L.jsx)(se,{htmlFor:"radio4",children:l("favorite_ads")}),(0,L.jsx)(de,{onClick:function(n){return m(n)},type:"radio",id:"radio5",name:"radios",value:"my-ads"}),(0,L.jsx)(se,{htmlFor:"radio5",children:l("my_ads")})]})]})},pe=S.ZP.form(bn||(bn=(0,M.Z)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n  }\n"]))),he=S.ZP.input(jn||(jn=(0,M.Z)(["\n  width: 280px;\n  height: 44px;\n  border-radius: 24px;\n  background: var(--white-bckg-clr);\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 400;\n  box-shadow: 3px 8px 14px 0px var(--small-shadow);\n  border: 0;\n  outline: none;\n  padding-left: 20px;\n  padding-right: 62px;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    font-size: 20px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 3px 8px 14px 0px var(--big-shadow);\n  }\n"]))),xe=S.ZP.div(yn||(yn=(0,M.Z)(["\n  display: flex;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n\n  @media screen and (min-width: 768px) {\n    right: 60px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    right: 330px;\n  }\n"]))),ue=S.ZP.button(Zn||(Zn=(0,M.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 244px;\n  border: 0;\n  outline: none;\n  background: inherit;\n  svg {\n    fill: var(--main-clr-blue);\n  }\n\n  &:hover {\n    svg {\n      fill: var(--main-clr-yellow);\n    }\n  }\n"]))),fe=S.ZP.button(kn||(kn=(0,M.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 244px;\n  border: 0;\n  outline: none;\n  background: inherit;\n\n  svg {\n    stroke: var(--main-clr-yellow);\n  }\n\n  &:hover {\n    svg {\n      stroke: var(--main-clr-blue);\n    }\n  }\n"]))),ge=function(n){var e=n.setQuery,t=n.setPage,i=(0,a.useState)(""),r=(0,o.Z)(i,2),c=r[0],d=r[1],l=(0,s.$G)().t;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(pe,{onSubmit:function(n){n.preventDefault();var i=c;""===i.trim()||i.length<3?console.log("Enter correct query"):(console.log("query :>> ",i),t(1),e(i))},children:[(0,L.jsx)(he,{type:"text",name:"localInput",value:c,onChange:function(n){var e=n.target.value;d(e)},placeholder:l("search")}),(0,L.jsxs)(xe,{children:[(0,L.jsx)(ue,{type:"submit",children:(0,L.jsx)("svg",{width:24,height:24,children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-search"),width:24,height:24})})}),c.length>0&&(0,L.jsx)(fe,{type:"button",onClick:function(n){n.preventDefault(),d(""),e("")},children:(0,L.jsx)("svg",{width:24,height:24,children:(0,L.jsx)("use",{href:"".concat(z.Z,"#icon-cross"),width:24,height:24})})})]})]})," "]})},me=t(8792),ve=t(8484),we=S.ZP.div(Pn||(Pn=(0,M.Z)(["\ndisplay: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top :68px;\n\n"]))),be=(0,S.ZP)(ve.Z)(Cn||(Cn=(0,M.Z)(["\n\n\n    .MuiPaginationItem-page.Mui-selected {\n        background-color: var(--main-clr-blue); \n        color: white; \n         padding: 10px;\n         border:none;\n     \n      }\n      .MuiPaginationItem-page:not(.Mui-selected) {\n        background-color:  transparent; \n        color: #111111; \n        border: 1px solid var(--main-clr-blue); \n        padding: 10px;\n        \n      }\n      \n    \n"]))),je=function(n){var e=n.setPage,t=n.totalPageCount,i=n.page;return(0,L.jsx)(we,{children:(0,L.jsx)("div",{children:(0,L.jsx)(be,{onChange:function(n,t){return e(t)},count:t,page:i,variant:"outlined"})})})},ye=S.ZP.div(_n||(_n=(0,M.Z)(["\n  display: flex;\n  width: 280px;\n  justify-content: space-between;\n  margin-top: 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    margin-top: 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1248px;\n  }\n"]))),Ze=function(){var n=(0,a.useState)(!1),e=(0,o.Z)(n,2),t=e[0],l=e[1],p=(0,a.useState)(""),u=(0,o.Z)(p,2),f=u[0],m=u[1],v=(0,a.useState)(""),w=(0,o.Z)(v,2),b=w[0],j=w[1],y=(0,a.useState)("sell"),Z=(0,o.Z)(y,2),k=Z[0],C=Z[1],_=(0,a.useState)(1),z=(0,o.Z)(_,2),M=z[0],S=z[1],E=(0,a.useState)(0),F=(0,o.Z)(E,2),A=F[0],T=F[1],G=(0,a.useState)(!1),I=(0,o.Z)(G,2),N=I[0],$=I[1],R=(0,s.$G)().t,q=(0,c.UO)(),B=(0,d.a)(),O=B.token,Q=B.isLoggedIn;return(0,a.useEffect)((function(){q.categoryName?C(q.categoryName):C("sell")}),[q.categoryName]),(0,a.useEffect)((function(){function n(){return n=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(e,t,r);case 2:o=n.sent,m(o.notices),$(!1),T(Math.ceil(o.total/12));case 6:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}console.log("rerender :>> ",N),N&&Q&&function(e,t,i){n.apply(this,arguments)}(M,b,O)}),[Q,M,b,N,O]),(0,a.useEffect)((function(){function n(){return n=(0,r.Z)((0,i.Z)().mark((function n(e,t,r,o){var a,c,s;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("favorite"!==t){n.next=8;break}return n.next=3,g(e,r,o);case 3:a=n.sent,m(a.notices),T(a.totalPages),n.next=23;break;case 8:if("my-ads"!==t){n.next=16;break}return n.next=11,h(e,r,o);case 11:c=n.sent,m(c.notices),T(c.totalPages),n.next=23;break;case 16:return n.next=19,P(e,t,r);case 19:s=n.sent,m(s.notices),T(s.totalPages),console.log(s);case 23:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(e,t,i,r){n.apply(this,arguments)}(M,k,b,O)}),[M,k,b,O]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)("div",{children:[(0,L.jsx)(me.D,{text:R("notice_page_title")}),(0,L.jsx)(ge,{setQuery:j,setPage:S}),(0,L.jsxs)(ye,{children:[(0,L.jsx)(le,{setCategory:C,setPage:S}),(0,L.jsx)(x.Z,{setAlertShowModal:l})]})]}),f&&(0,L.jsx)(ae,{articles:f,setAlertShowModal:l,setRerender:$}),t&&(0,L.jsx)(D,{setAlertShowModal:l}),(0,L.jsx)(je,{setPage:S,page:M,totalPageCount:A})]})},ke=S.ZP.main(zn||(zn=(0,M.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\n"]))),Pe=function(){return(0,L.jsx)(ke,{children:(0,L.jsx)(Ze,{})})}}}]);
//# sourceMappingURL=411.20d123c5.chunk.js.map