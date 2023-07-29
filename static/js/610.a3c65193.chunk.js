"use strict";(self.webpackChunkfinal_project_frontend=self.webpackChunkfinal_project_frontend||[]).push([[610],{9376:function(n,e,t){t.d(e,{T:function(){return l}});var r,i=t(7689),o=t(9230),a=t(8466),c=t(168),s=t(7691).ZP.button(r||(r=(0,c.Z)(["\n  border-radius: 40px;\n  border: 2px solid var(--main-clr-yellow);\n  background: var(--main-clr-yellow);\n  display: flex;\n  width: 165px;\n  height: 40px;\n  padding: 8px 20px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  color: var(--btn-clr-fon);\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 700;\n  transition: all var(--default-animation);\n  svg {\n    fill: var(--btn-clr-fon);\n  }\n  &:hover {\n    background: var(--main-bckg-clr);\n    color: var(--main-clr-yellow);\n    svg {\n      fill: var(--main-clr-yellow);\n    }\n    transform: transition;\n  }\n"]))),d=t(3329),l=function(n){var e=n.closeModal,t=(0,i.s0)(),r=(0,o.$G)().t;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(s,{type:"button",onClick:function(){return t("/login"),void e()},children:[r("login"),(0,d.jsx)("svg",{width:24,height:24,children:(0,d.jsx)("use",{href:"".concat(a.Z,"#icon-paw"),width:24,height:24})})]})})}},882:function(n,e,t){t.d(e,{G:function(){return d}});var r,i=t(7689),o=t(9230),a=t(168),c=t(7691).ZP.button(r||(r=(0,a.Z)(["\n  border-radius: 40px;\n  border: 2px solid var(--main-clr-yellow);\n  background: var(--btn-clr-fon);\n  width: 165px;\n  height: 40px;\n  padding: 8px 20px;\n  color: var(--main-clr-yellow);\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 600;\n  transition: all var(--default-animation);\n\n  &:hover {\n    background: var(--main-clr-yellow);\n    color: var(--btn-clr-fon);\n    transform: transition;\n  }\n"]))),s=t(3329),d=function(n){var e=n.closeModal,t=(0,i.s0)(),r=(0,o.$G)().t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c,{type:"button",onClick:function(){return t("/register"),void e()},children:r("registration")})})}},2424:function(n,e,t){t.d(e,{Z:function(){return p}});var r,i,o=t(168),a=t(7691),c=t(8662),s=a.ZP.div(r||(r=(0,o.Z)(["\ndisplay: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top :68px;\n\n"]))),d=(0,a.ZP)(c.Z)(i||(i=(0,o.Z)(["\n\n\n    .MuiPaginationItem-page.Mui-selected {\n        background-color: var(--main-clr-blue); \n        color: white; \n         padding: 10px;\n         border:none;\n     \n      }\n      .MuiPaginationItem-page:not(.Mui-selected) {\n        background-color:  transparent; \n        color: #111111; \n        border: 1px solid var(--main-clr-blue); \n        padding: 10px;\n        \n      }\n      \n    \n"]))),l=t(3329),p=function(n){var e=n.setPage,t=n.totalPageCount,r=n.page,i=n.setRerender,o=void 0===i?null:i;return(0,l.jsx)(s,{children:(0,l.jsx)("div",{children:(0,l.jsx)(d,{onChange:function(n,t){e(t),o&&o(!0)},count:t,page:r,variant:"outlined"})})})}},8792:function(n,e,t){t.d(e,{D:function(){return l}});var r,i,o=t(168),a=t(7691),c=a.ZP.h1(r||(r=(0,o.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 700;\n  display: flex;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 48px;\n  }\n"]))),s=a.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    /* width: 704px; */\n    margin-top: 80px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 100%; */\n  }\n"]))),d=t(3329),l=function(n){var e=n.text,t=void 0===e?"Page title":e;return(0,d.jsx)(s,{children:(0,d.jsx)(c,{children:t})})}},2256:function(n,e,t){t.d(e,{Z:function(){return p}});var r,i=t(7689),o=t(9230),a=t(4217),c=t(8466),s=t(168),d=t(7691).ZP.button(r||(r=(0,s.Z)(["\n  border-radius: 40px;\n  background: var(--main-clr-blue);\n  display: flex;\n  min-width: 129px;\n  height: 35px;\n  justify-content: center;\n  align-items: center;\n  /* gap: 8px; */\n  border: 0;\n  outline: 0;\n  text-decoration: none;\n  svg {\n    stroke: var(--btn-clr-fon);\n  }\n  padding: 8px 0;\n  color: var(--btn-clr-fon);\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 700;\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n    font-size: 16px;\n    height: 40px;\n  }\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n  }\n"]))),l=t(3329),p=function(n){var e=n.setAlertShowModal,t=void 0===e?null:e,r=(0,a.a)().isLoggedIn,s=(0,i.s0)(),p=(0,o.$G)().t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(d,{type:"button",onClick:function(){r?s("/add-pet"):t(!0)},children:[p("add_pet"),(0,l.jsx)("svg",{width:24,height:24,children:(0,l.jsx)("use",{href:"".concat(c.Z,"#icon-plus-small"),width:24,height:24})})]})})}},9610:function(n,e,t){t.r(e),t.d(e,{default:function(){return ke}});var r=t(4165),i=t(5861),o=t(9439),a=t(2791),c=t(7689),s=t(9230),d=t(4217),l="https://final-project-backend-4o0r.onrender.com/api/notices/owner";function p(){return(p=(0,i.Z)((0,r.Z)().mark((function n(e,t,i){var o,a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}},n.prev=1,n.next=4,fetch("".concat(l,"?page=").concat(e,"&query=").concat(t),o);case 4:if((a=n.sent).ok){n.next=7;break}throw new Error("Sorry. Try again later :(");case 7:return n.next=9,a.json();case 9:return c=n.sent,n.abrupt("return",c);case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}var h=function(n,e,t){return p.apply(this,arguments)},u=t(2256),x="https://final-project-backend-4o0r.onrender.com/api/notices/favorite";function f(){return(f=(0,i.Z)((0,r.Z)().mark((function n(e,t,i){var o,a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}},n.prev=1,n.next=4,fetch("".concat(x,"?page=").concat(e,"&query=").concat(t),o);case 4:if((a=n.sent).ok){n.next=7;break}throw new Error("Sorry. Try again later :(");case 7:return n.next=9,a.json();case 9:return c=n.sent,n.abrupt("return",c);case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}var g=function(n,e,t){return f.apply(this,arguments)},v="https://final-project-backend-4o0r.onrender.com/api/notices";function m(){return(m=(0,i.Z)((0,r.Z)().mark((function n(e,t,i){var o,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(v,"?category=").concat(t,"&query=").concat(i,"&page=").concat(e));case 3:if((o=n.sent).ok){n.next=6;break}throw new Error("Sorry. Try again later :(");case 6:return n.next=8,o.json();case 8:return a=n.sent,n.abrupt("return",a);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var w,b,j,y,Z,k,P=function(n,e,t){return m.apply(this,arguments)},C=t(9376),z=t(882),_=t(8466),M=t(168),S=t(7691),E=S.ZP.div(w||(w=(0,M.Z)(["\n  z-index: 200;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(97, 97, 97, 0.6);\n  backdrop-filter: blur(4px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n"]))),F=S.ZP.div(b||(b=(0,M.Z)(["\noverflow: auto;\nheight: auto;\n  max-height: calc(100vh - 40px);\n\n  z-index: 200;\n  width: 280px;\n  border-radius: 20px;\n  background-color: #fff;\n  padding: 60px 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    padding: 60px 40px;\n  }\n"]))),T=S.ZP.button(j||(j=(0,M.Z)(["\n  position: absolute;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #fff;\n  top: 16px;\n  right: 16px;\n\n  &:hover,\n  &:focus {\n    svg {\n      stroke: var(--main-clr-yellow);\n    }\n  }\n"]))),A=S.ZP.p(y||(y=(0,M.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 500;\n\n  @media screen and (min-width: 768px) {\n    font-size: 36px;\n  }\n"]))),G=S.ZP.p(Z||(Z=(0,M.Z)(["\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 20px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    margin-top: 40px;\n  }\n"]))),R=S.ZP.div(k||(k=(0,M.Z)(["\n  display: flex;\n  gap: 12px;\n  flex-direction: column;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    gap: 20px;\n  }\n"]))),D=t(3329),I=function(n){var e=n.setAlertShowModal,t=(0,s.$G)().t;return(0,a.useEffect)((function(){var n=function(n){e(!1)};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[e]),(0,D.jsx)(E,{onClick:function(){return e(!1)},children:(0,D.jsxs)(F,{onClick:function(n){return n.stopPropagation()},children:[(0,D.jsx)(T,{onClick:function(){return e(!1)},children:(0,D.jsx)("svg",{width:24,height:24,children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-cross"),style:{stroke:"#54ADFF"},width:24,height:24})})}),(0,D.jsx)(A,{children:t("attention")}),(0,D.jsx)(G,{children:t("attention_text")}),(0,D.jsxs)(R,{children:[(0,D.jsx)(C.T,{closeModal:e}),(0,D.jsx)(z.G,{closeModal:e})]})]})})},L=t(9434),$=function(n,e){var t;switch(n){case"sell":t=e("sell");break;case"lost-found":t=e("lost_found");break;case"for-free":t=e("in_good_hands");break;default:t=n}return t},N="https://final-project-backend-4o0r.onrender.com";function q(){return(q=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(N,"/api/notices/").concat(e));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Sorry. Try again later :(");case 6:return n.next=8,t.json();case 8:return i=n.sent,n.abrupt("return",i);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var B,O,Q,U,H,Y,J,K,V,W,X,nn,en,tn,rn,on,an,cn,sn,dn,ln,pn,hn,un,xn,fn,gn=function(n){return q.apply(this,arguments)},vn=S.ZP.div(B||(B=(0,M.Z)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(97, 97, 97, 0.6);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  z-index: 100;\n"]))),mn=S.ZP.div(O||(O=(0,M.Z)(["\n  overflow: auto;\n  width: 680px;\n  position: relative;\n  padding: 32px;\n  height: auto;\n  max-height: calc(100vh - 40px);\n  background-color: #fff;\n  border-radius: 40px;\n\n  @media (max-width: 767px) {\n    width: 280px;\n    padding: 20px;\n    border-radius: 20px;\n  }\n"]))),wn=S.ZP.div(Q||(Q=(0,M.Z)(["\n  height: 300px;\n  display: flex;\n  align-items: flex-start;\n  gap: 24px;\n\n  @media (max-width: 767px) {\n    margin-top: 44px;\n    flex-direction: column;\n    gap: 12px;\n    height: auto;\n  }\n"]))),bn=S.ZP.div(U||(U=(0,M.Z)(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  gap: 50px;\n\n  font-size: 16px;\n  line-height: 22px;\n\n  @media (max-width: 767px) {\n    font-size: 12px;\n    line-height: 16px;\n  }\n"]))),jn=S.ZP.div(H||(H=(0,M.Z)(["\n  width: 240px;\n\n  font-family: 'Manrope';\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 1.357;\n"]))),yn=S.ZP.div(Y||(Y=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),Zn=S.ZP.div(J||(J=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  gap: 5px;\n\n  font-weight: 600;\n"]))),kn=S.ZP.div(K||(K=(0,M.Z)(["\n  display: flex;\n  position: absolute;\n  right: 0;\n  top: 0;\n  flex-direction: column;\n  align-items: left;\n  gap: 5px;\n"]))),Pn=S.ZP.div(V||(V=(0,M.Z)(["\n  padding-top: 28px;\n  padding-bottom: 70px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n\n  @media (max-width: 767px) {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.375;\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n"]))),Cn=S.ZP.div(W||(W=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 17px;\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n  }\n"]))),zn=S.ZP.button(X||(X=(0,M.Z)(["\n  /* min-width: 129px; */\n  padding: 6px 20px;\n  color: var(--btn-clr-fon);\n  background-color: var(--main-clr-blue);\n  border-radius: 40px;\n  border: none;\n\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  & svg {\n    stroke: currentColor;\n    fill: none;\n  }\n\n  :hover,\n  :focus {\n    background: var(--main-clr-gr_blue);\n  }\n  @media (max-width: 767px) {\n    width: 100%;\n  }\n"]))),_n=S.ZP.button(nn||(nn=(0,M.Z)(["\n  /* min-width: 129px; */\n  padding: 8px 20px;\n  background-color: var(--btn-clr-fon);\n  color: #54adff;\n  border-radius: 40px;\n  border: 1px solid #54adff;\n  :hover,\n  :focus {\n    background: var(--main-clr-gr_blue);\n    color: #fff;\n  }\n\n  @media (max-width: 767px) {\n    width: 100%;\n  }\n"]))),Mn=S.ZP.div(en||(en=(0,M.Z)(["\n  position: relative;\n  width: 262px;\n  height: 298px;\n  border-radius: 0 0 40px 40px;\n  background-image: url(",");\n  background-size: cover;\n\n  @media (max-width: 767px) {\n    width: 240px;\n    height: 240px;\n  }\n"])),(function(n){return n.img})),Sn=S.ZP.div(tn||(tn=(0,M.Z)(["\n  position: absolute;\n  left: 0;\n  top: 16px;\n\n  width: 126px;\n  height: 32px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 19px;\n\n  background-color: var(--main-clr-blue-light);\n  border-radius: 0 16px 16px 0;\n"]))),En=S.ZP.button(rn||(rn=(0,M.Z)(["\n  position: absolute;\n  top: 28px;\n  right: 31px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: #fff;\n  color: var(--main-clr-blue);\n  border: none;\n  stroke: currentColor;\n\n  &:hover {\n    stroke: var(--main-clr-yellow);\n  }\n\n  @media (max-width: 767px) {\n    top: 17px;\n    right: 17px;\n  }\n"]))),Fn=function(n){var e,t,l,p,h,u,x,f,g=n.handler,v=n.id,m=n.isFavorite,w=n.onFavBtnClick,b=n.setRerender,j=(0,s.$G)().t,y=(0,a.useState)({}),Z=(0,o.Z)(y,2),k=Z[0],P=Z[1],C=(0,a.useState)(!1),z=(0,o.Z)(C,2),M=z[0],S=z[1],E=(0,d.a)().isLoggedIn,F=(0,c.TH)();(0,a.useEffect)((function(){var n=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,gn(v);case 3:e=n.sent,P(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching notice:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[v]);return(0,a.useEffect)((function(){var n=function(n){27===n.keyCode&&(E&M&F.pathname.includes("favorite")&&b(!0),g(!1))};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[M,g,E,F.pathname,b]),(0,D.jsx)(vn,{onClick:function(n){n.target===n.currentTarget&&(E&M&F.pathname.includes("favorite")&&b(!0),g(!1))},children:(0,D.jsxs)(mn,{children:[(0,D.jsx)(En,{onClick:function(){return E&M&F.pathname.includes("favorite")&&b(!0),void g(!1)},children:(0,D.jsx)("svg",{width:24,height:24,children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-cross"),width:24,height:24})})}),(0,D.jsxs)(wn,{children:[(0,D.jsx)(Mn,{img:k.file,children:(0,D.jsxs)(Sn,{children:[" ",$(k.category,j)]})}),(0,D.jsxs)(yn,{children:[(0,D.jsx)(jn,{children:k.description||"Cute dog looking for a home"}),(0,D.jsxs)(bn,{children:[(0,D.jsxs)(Zn,{children:[(0,D.jsxs)("div",{children:[j("name"),":"]}),(0,D.jsxs)("div",{children:[j("birthday"),":"]}),(0,D.jsxs)("div",{children:[j("type"),":"]}),(0,D.jsxs)("div",{children:[j("place"),":"]}),(0,D.jsxs)("div",{children:[j("sex"),":"]}),(0,D.jsxs)("div",{children:[j("owner"),":"]}),(null===(e=k.owner)||void 0===e?void 0:e.email)&&(0,D.jsxs)("div",{children:[j("email"),":"]}),(null===(t=k.owner)||void 0===t?void 0:t.phone)&&(0,D.jsxs)("div",{children:[j("phone"),":"]})]}),(0,D.jsxs)(kn,{children:[(0,D.jsx)("div",{children:k.name||k.title}),(0,D.jsx)("div",{children:k.date}),(0,D.jsx)("div",{children:j("".concat(k.type))}),(0,D.jsx)("div",{children:k.location}),(0,D.jsx)("div",{children:j("".concat(k.sex))}),(0,D.jsx)("div",{children:null===(l=k.owner)||void 0===l?void 0:l.name}),(null===(p=k.owner)||void 0===p?void 0:p.email)&&(0,D.jsx)("div",{children:null===(h=k.owner)||void 0===h?void 0:h.email}),(null===(u=k.owner)||void 0===u?void 0:u.phone)&&(0,D.jsx)("div",{children:null===(x=k.owner)||void 0===x?void 0:x.phone})]})]})]})]}),(0,D.jsxs)(Pn,{children:[(0,D.jsxs)("b",{children:[j("comment"),":"]})," ",k.comments]}),(0,D.jsxs)(Cn,{children:[(0,D.jsxs)(zn,{onClick:function(){w(),S(!0)},children:[m?(0,D.jsx)("span",{children:j("remove")}):(0,D.jsx)("span",{children:j("add_to")}),(0,D.jsx)("svg",{width:"24",height:"24",children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-heart"),width:24,height:24})})]}),(null===(f=k.owner)||void 0===f?void 0:f.phone)&&(0,D.jsx)(_n,{onClick:function(){var n;(n=k.owner.phone)&&(window.location.href="tel:".concat(n))},children:j("contact")})]})]})})},Tn=t(5822),An=S.ZP.li(on||(on=(0,M.Z)(["\n  width: 280px;\n  height: 456px;\n  box-shadow: 3px 8px 14px 0px var(--small-shadow);\n  border-radius: 0px 0px 40px 40px;\n  background-color: var(--white-bckg-clr);\n\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n  transition: var(--default-animation);\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 3px 8px 14px 0px var(--big-shadow);\n  }\n    animation: moveRotate var(--slow-animation) forwards ;\n\n\n  @keyframes moveRotate {\n    0% {\n      opacity: 0;\n      transform: scale(0) rotate(0);\n    }\n    50% {\n      opacity: 0.5;\n      transform: scale(0.5) rotate(-90deg);\n    }\n    100% {\n      opacity: 1;\n      transform: scale(1) rotate(360deg);\n    }    \n  }\n"]))),Gn=S.ZP.div(an||(an=(0,M.Z)(["\n  width: 280px;\n  height: 288px;\n  position: relative;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n"]))),Rn=S.ZP.img(cn||(cn=(0,M.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),Dn=S.ZP.div(sn||(sn=(0,M.Z)(["\n  width: 126px;\n  height: 32px;\n  background-color: var(--main-clr-blue-light);\n  border-radius: 0px 16px 16px 0px;\n  position: absolute;\n  top: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),In=S.ZP.button(dn||(dn=(0,M.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--main-clr-blue-light);\n  border: 0;\n  outline: 0;\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* &:hover,\n  &:focus {\n\n  } */\n"]))),Ln=S.ZP.button(ln||(ln=(0,M.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--main-clr-blue-light);\n  border: 0;\n  outline: 0;\n  position: absolute;\n  top: 68px;\n  right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    stroke: var(--main-clr-blue);\n  }\n\n  &:hover,\n  &:focus {\n    background-color: var(--main-clr-blue);\n\n    svg {\n      stroke: var(--main-clr-blue-light);\n    }\n  }\n"]))),$n=S.ZP.div(pn||(pn=(0,M.Z)(["\n  width: 280px;\n  height: 28px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  position: absolute;\n  bottom: 12px;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n"]))),Nn=S.ZP.div(hn||(hn=(0,M.Z)(["\n  width: 80px;\n  height: 28px;\n  background-color: var(--main-clr-blue-light);\n  border-radius: 16px;\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  padding-left: 5px;\n  padding-right: 4px;\n  gap: 3px;\n  font-size: 12px;\n  font-weight: 600;\n"]))),qn=S.ZP.div(un||(un=(0,M.Z)(["\n  height: 168px;\n  padding: 20px 16px 28px 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    padding: 20px 20px 24px 20px;\n  }\n"]))),Bn=S.ZP.h2(xn||(xn=(0,M.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 700;\n"]))),On=S.ZP.button(fn||(fn=(0,M.Z)(["\n  width: 248px;\n  height: 38px;\n  border-radius: 40px;\n  border: 2px solid var(--main-clr-blue);\n  color: var(--main-clr-blue);\n  font-size: 16px;\n  font-weight: 600;\n  margin-left: auto;\n  margin-right: auto;\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n    color: var(--btn-clr-fon);\n    border: 0;\n  }\n"]))),Qn="https://final-project-backend-4o0r.onrender.com/api/notices";function Un(){return(Un=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,o,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},n.prev=1,n.next=4,fetch("".concat(Qn,"/").concat(e),i);case 4:if((o=n.sent).ok){n.next=7;break}throw new Error("Sorry. Try again later :(");case 7:return n.next=9,o.json();case 9:return a=n.sent,n.abrupt("return",a);case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}var Hn,Yn,Jn,Kn,Vn,Wn,Xn,ne,ee,te,re,ie=function(n,e){return Un.apply(this,arguments)},oe=t(3767),ae=function(n){var e=n.article,t=n.setAlertShowModal,c=n.setRerender,l=n.setCrutch,p=(0,a.useState)(!1),h=(0,o.Z)(p,2),u=h[0],x=h[1],f=(0,a.useState)(!1),g=(0,o.Z)(f,2),v=g[0],m=g[1],w=(0,L.I0)(),b=(0,s.$G)().t,j=(0,d.a)(),y=j.user,Z=j.isLoggedIn,k=j.token,P=e._id,C=e.title,z=e.category,M=e.date,S=e.file,E=e.sex,F=e.location,T=e.owner,A=function(n){var e=n.split("-"),t=(0,o.Z)(e,3),r=t[0],i=t[1],a=t[2],c=parseInt(i,10)-1,s=new Date(a,c,r),d=(new Date-s)/315576e5;return Math.floor(d)}(M),G=function(n){return n.length>5?n.slice(0,4)+"...":n}(F),R=$(z,b),I=!!Z&&y.favorite.includes(P),N=y._id===T,q={title:"Delete advertisment?",text:'Are you sure you want to delete "'.concat(C,"\"? You can't undo this action."),icon:"icon-trash"};(0,a.useEffect)((function(){l(u)}),[u,l]);var B=function(){Z?(I||w((0,Tn.addToFavorite)(P)),I&&w((0,Tn.delFromFavorite)(P))):t(!0)};return(0,D.jsxs)(An,{id:P,children:[(0,D.jsxs)(Gn,{children:[(0,D.jsx)(Rn,{src:"".concat(S),alt:"pretty pet"}),(0,D.jsx)(Dn,{children:(0,D.jsx)("p",{children:R})}),(0,D.jsxs)("div",{children:[(0,D.jsx)(In,{type:"button",onClick:function(){return B()},children:I?(0,D.jsx)("svg",{width:24,height:24,children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-heart-fill"),width:24,height:24,id:"heart"})}):(0,D.jsx)("svg",{width:24,height:24,children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-heart"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"},id:"heart"})})}),N&&(0,D.jsx)(Ln,{type:"button",onClick:function(){return m(!0)},children:(0,D.jsx)("svg",{width:24,height:24,children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-trash"),width:24,height:24})})})]}),(0,D.jsxs)($n,{children:[(0,D.jsxs)(Nn,{children:[(0,D.jsx)("svg",{width:24,height:24,children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-location"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,D.jsx)("p",{children:G})]}),(0,D.jsxs)(Nn,{children:[(0,D.jsx)("svg",{width:24,height:24,children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-clock"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,D.jsxs)("p",{children:[A<1&&"<1 ".concat(b("min_year")," "),1===A&&"1 ".concat(b("year")),A>1&&A<5&&"".concat(A," ").concat(b("years")),A>=5&&"".concat(A," ").concat(b("big_years"))]})]}),(0,D.jsxs)(Nn,{children:["male"===E?(0,D.jsx)("svg",{width:24,height:24,children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-male"),style:{stroke:"var(--main-clr-blue)"},width:24,height:24})}):(0,D.jsx)("svg",{width:24,height:24,children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-female"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,D.jsx)("p",{children:E})]})]})]}),(0,D.jsxs)(qn,{children:[(0,D.jsx)(Bn,{children:C}),(0,D.jsx)(On,{type:"button",onClick:function(){return x(!0)},children:b("learn_more")})]}),u&&(0,D.jsx)(Fn,{handler:x,id:e._id,isFavorite:I,onFavBtnClick:B,setRerender:c}),v&&(0,D.jsx)(oe.Z,{onClose:m,handleDelete:function(){function n(){return n=(0,i.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ie(e,t);case 2:c(!0);case 3:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(e,t){n.apply(this,arguments)}(P,k)},data:q})]})},ce=S.ZP.ul(Hn||(Hn=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 24px;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 32px;\n    margin-top: 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1248px;\n  }\n"]))),se=function(n){var e=n.articles,t=n.setAlertShowModal,r=n.setRerender,i=n.category,c=(0,d.a)().user,s=(0,a.useState)(!1),l=(0,o.Z)(s,2),p=l[0],h=l[1];return(0,a.useEffect)((function(){"favorite"!==i||p||r(!0)}),[c.favorite,i,r,p]),(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(ce,{children:e.length>0&&e.map((function(n){return(0,D.jsx)(ae,{article:n,setAlertShowModal:t,setRerender:r,setCrutch:h},n._id)}))})})},de=S.ZP.div(Yn||(Yn=(0,M.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n  max-width: 100%;\n"]))),le=S.ZP.label(Jn||(Jn=(0,M.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 16px;\n  cursor: pointer;\n  border: 0;\n  border-radius: 40px;\n  background-color: var(--main-clr-blue-light);\n  color: var(--main-clr-blue);\n\n  @media screen and (min-width: 768px){\n    height: 35px;\n  }\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n    color: var(--btn-clr-fon);\n  }\n"]))),pe=S.ZP.input(Kn||(Kn=(0,M.Z)(["\n  display: none;\n\n  &[type='radio']:checked + label {\n    background-color: var(--main-clr-blue);\n    color: var(--btn-clr-fon);\n  }\n"]))),he=function(n){var e=n.setCategory,t=n.setPage,r=n.setRerender,i=(0,d.a)().isLoggedIn,l=(0,c.s0)(),p=(0,s.$G)().t,h=(0,a.useState)("sell"),u=(0,o.Z)(h,2),x=u[0],f=u[1],g=(0,c.UO)();(0,a.useEffect)((function(){g.categoryName?f(g.categoryName):f("sell")}),[g.categoryName]);var v=function(){f(g.categoryName)},m=function(n){var i=n.target.value;e(i),t(1),r(!0),l("/notices/".concat(i))};return(0,D.jsxs)(de,{children:[(0,D.jsx)(pe,{onClick:function(n){return m(n)},type:"radio",id:"radio1",name:"radios",value:"sell",checked:"sell"===x,onChange:v}),(0,D.jsx)(le,{htmlFor:"radio1",children:p("sell")}),(0,D.jsx)(pe,{onClick:function(n){return m(n)},type:"radio",id:"radio2",name:"radios",value:"lost-found",checked:"lost-found"===x,onChange:v}),(0,D.jsx)(le,{htmlFor:"radio2",children:p("lost_found")}),(0,D.jsx)(pe,{onClick:function(n){return m(n)},type:"radio",id:"radio3",name:"radios",value:"for-free",checked:"for-free"===x,onChange:v}),(0,D.jsx)(le,{htmlFor:"radio3",children:p("in_good_hands")}),i&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(pe,{onClick:function(n){return m(n)},type:"radio",id:"radio4",name:"radios",value:"favorite",checked:"favorite"===x,onChange:v}),(0,D.jsx)(le,{htmlFor:"radio4",children:p("favorite_ads")}),(0,D.jsx)(pe,{onClick:function(n){return m(n)},type:"radio",id:"radio5",name:"radios",value:"my-ads",checked:"my-ads"===x,onChange:v}),(0,D.jsx)(le,{htmlFor:"radio5",children:p("my_ads")})]})]})},ue=S.ZP.form(Vn||(Vn=(0,M.Z)(["\n  display: flex;\n  width: 280px;\n  justify-content: center;\n  position: relative;\n  margin-top: 24px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    margin-top: 40px;\n  }\n"]))),xe=S.ZP.input(Wn||(Wn=(0,M.Z)(["\n  width: 280px;\n  height: 44px;\n  border-radius: 24px;\n  background: var(--white-bckg-clr);\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 400;\n  box-shadow: 3px 8px 14px 0px var(--small-shadow);\n  border: 0;\n  outline: none;\n  padding-left: 20px;\n  padding-right: 62px;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    font-size: 20px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 3px 8px 14px 0px var(--big-shadow);\n  }\n"]))),fe=S.ZP.div(Xn||(Xn=(0,M.Z)(["\n  display: flex;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n\n  /* @media screen and (min-width: 768px) {\n    right: 60px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    right: 330px;\n  } */\n"]))),ge=S.ZP.button(ne||(ne=(0,M.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 244px;\n  border: 0;\n  outline: none;\n  background: inherit;\n  svg {\n    fill: var(--main-clr-blue);\n  }\n\n  &:hover {\n    svg {\n      fill: var(--main-clr-yellow);\n    }\n  }\n"]))),ve=S.ZP.button(ee||(ee=(0,M.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 244px;\n  border: 0;\n  outline: none;\n  background: inherit;\n\n  svg {\n    stroke: var(--main-clr-yellow);\n  }\n\n  &:hover {\n    svg {\n      stroke: var(--main-clr-blue);\n    }\n  }\n"]))),me=function(n){var e=n.setQuery,t=n.setPage,r=(0,a.useState)(""),i=(0,o.Z)(r,2),c=i[0],d=i[1],l=(0,s.$G)().t;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(ue,{onSubmit:function(n){n.preventDefault();var r=c;""===r.trim()||r.length<3?console.log("Enter correct query"):(console.log("query :>> ",r),t(1),e(r))},children:[(0,D.jsx)(xe,{type:"text",name:"localInput",value:c,onChange:function(n){var e=n.target.value;d(e)},placeholder:l("search")}),(0,D.jsxs)(fe,{children:[(0,D.jsx)(ge,{type:"submit",children:(0,D.jsx)("svg",{width:24,height:24,children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-search"),width:24,height:24})})}),c.length>0&&(0,D.jsx)(ve,{type:"button",onClick:function(n){n.preventDefault(),d(""),e("")},children:(0,D.jsx)("svg",{width:24,height:24,children:(0,D.jsx)("use",{href:"".concat(_.Z,"#icon-cross"),width:24,height:24})})})]})]})," "]})},we=t(8792),be=t(2424),je=S.ZP.div(te||(te=(0,M.Z)(["\n  display: flex;\n  width: 280px;\n  justify-content: space-between;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    margin-top: 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1248px;\n  }\n"]))),ye=function(){var n=(0,a.useState)(!1),e=(0,o.Z)(n,2),t=e[0],l=e[1],p=(0,a.useState)(""),x=(0,o.Z)(p,2),f=x[0],v=x[1],m=(0,a.useState)(""),w=(0,o.Z)(m,2),b=w[0],j=w[1],y=(0,a.useState)("sell"),Z=(0,o.Z)(y,2),k=Z[0],C=Z[1],z=(0,a.useState)(1),_=(0,o.Z)(z,2),M=_[0],S=_[1],E=(0,a.useState)(0),F=(0,o.Z)(E,2),T=F[0],A=F[1],G=(0,a.useState)(!1),R=(0,o.Z)(G,2),L=R[0],$=R[1],N=(0,s.$G)().t,q=(0,c.UO)(),B=(0,d.a)().token;return(0,a.useEffect)((function(){$(!0)}),[]),(0,a.useEffect)((function(){q.categoryName?C(q.categoryName):C("sell")}),[q.categoryName]),(0,a.useEffect)((function(){function n(){return n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i,o){var a,c,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("favorite"!==t||!L){n.next=9;break}return n.next=3,g(e,i,o);case 3:a=n.sent,v(a.notices),$(!1),A(a.totalPages),n.next=25;break;case 9:if("my-ads"!==t||!L){n.next=18;break}return n.next=12,h(e,i,o);case 12:c=n.sent,v(c.notices),$(!1),A(c.totalPages),n.next=25;break;case 18:if(!L){n.next=25;break}return n.next=21,P(e,t,i);case 21:s=n.sent,v(s.notices),$(!1),A(s.totalPages);case 25:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(e,t,r,i){n.apply(this,arguments)}(M,k,b,B)}),[M,k,b,B,L,f]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{children:[(0,D.jsx)(we.D,{text:N("notice_page_title")}),(0,D.jsx)(me,{setQuery:j,setPage:S}),(0,D.jsxs)(je,{children:[(0,D.jsx)(he,{setCategory:C,setPage:S,setRerender:$}),(0,D.jsx)(u.Z,{setAlertShowModal:l})]})]}),f&&(0,D.jsx)(se,{articles:f,setAlertShowModal:l,setRerender:$,category:k}),t&&(0,D.jsx)(I,{setAlertShowModal:l}),T>1&&(0,D.jsx)(be.Z,{setPage:S,page:M,totalPageCount:T,setRerender:$})]})},Ze=S.ZP.main(re||(re=(0,M.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\n"]))),ke=function(){return(0,D.jsx)(Ze,{children:(0,D.jsx)(ye,{})})}}}]);
//# sourceMappingURL=610.a3c65193.chunk.js.map