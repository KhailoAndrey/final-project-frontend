"use strict";(self.webpackChunkfinal_project_frontend=self.webpackChunkfinal_project_frontend||[]).push([[411],{8792:function(n,e,t){t.d(e,{D:function(){return l}});var i,r,o=t(168),a=t(7691),c=a.ZP.h1(i||(i=(0,o.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 700;\n  display: flex;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 48px;\n  }\n"]))),s=a.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    /* width: 704px; */\n    margin-top: 80px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 100%; */\n  }\n"]))),d=t(3329),l=function(n){var e=n.text,t=void 0===e?"Page title":e;return(0,d.jsx)(s,{children:(0,d.jsx)(c,{children:t})})}},2256:function(n,e,t){t.d(e,{Z:function(){return l}});var i,r=t(7689),o=t(4217),a=t(8466),c=t(168),s=t(7691).ZP.button(i||(i=(0,c.Z)(["\n  border-radius: 40px;\n  background: var(--main-clr-blue);\n  display: flex;\n  width: 129px;\n  height: 35px;\n  justify-content: center;\n  align-items: center;\n  /* gap: 8px; */\n  border: 0;\n  outline: 0;\n  text-decoration: none;\n  svg {\n    stroke: var(--btn-clr-fon);\n  }\n  padding: 8px 0;\n  color: var(--btn-clr-fon);\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 700;\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n    font-size: 16px;\n    height: 40px;\n  }\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n  }\n"]))),d=t(3329),l=function(n){var e=n.setAlertShowModal,t=void 0===e?null:e,i=(0,o.a)().isLoggedIn,c=(0,r.s0)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(s,{type:"button",onClick:function(){i?c("/add-pet"):t(!0)},children:["Add Pet",(0,d.jsx)("svg",{width:24,height:24,children:(0,d.jsx)("use",{href:"".concat(a.Z,"#icon-plus-small"),width:24,height:24})})]})})}},5411:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ze}});var i=t(4165),r=t(5861),o=t(9439),a=t(2791),c=t(4217),s="https://final-project-backend-4o0r.onrender.com/api/notices/owner";function d(){return(d=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o,a,c;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}},n.prev=1,n.next=4,fetch("".concat(s,"?page=").concat(e,"&query=").concat(t),o);case 4:if((a=n.sent).ok){n.next=7;break}throw new Error("Sorry. Try again later :(");case 7:return n.next=9,a.json();case 9:return c=n.sent,n.abrupt("return",c);case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}var l=function(n,e,t){return d.apply(this,arguments)},p=t(2256),h="https://final-project-backend-4o0r.onrender.com/api/notices/favorite";function x(){return(x=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o,a,c;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}},n.prev=1,n.next=4,fetch("".concat(h,"?page=").concat(e,"&query=").concat(t),o);case 4:if((a=n.sent).ok){n.next=7;break}throw new Error("Sorry. Try again later :(");case 7:return n.next=9,a.json();case 9:return c=n.sent,n.abrupt("return",c);case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}var u=function(n,e,t){return x.apply(this,arguments)},f="https://final-project-backend-4o0r.onrender.com/api/notices";function g(){return(g=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(f,"?category=").concat(t,"&query=").concat(r,"&page=").concat(e));case 3:if((o=n.sent).ok){n.next=6;break}throw new Error("Sorry. Try again later :(");case 6:return n.next=8,o.json();case 8:return a=n.sent,n.abrupt("return",a);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var v,m,w,b,j,y,Z,k,P,C,z,M,S,F,E,A,T,_=function(n,e,t){return g.apply(this,arguments)},I=t(9376),L=t(8466),D=t(168),R=t(7691),q=R.ZP.div(v||(v=(0,D.Z)(["\nz-index: 200;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(97, 97, 97, 0.6);\n  backdrop-filter: blur(4px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),B=R.ZP.div(m||(m=(0,D.Z)(["\n  z-index: 200;\n  width: 280px;\n  border-radius: 20px;\n  background-color: #fff;\n  padding: 60px 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    padding: 60px 40px;\n  }\n"]))),G=R.ZP.button(w||(w=(0,D.Z)(["\n  position: absolute;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #fff;\n  top: 16px;\n  right: 16px;\n\n  &:hover,\n  &:focus {\n    svg {\n      stroke: var(--main-clr-yellow);\n    }\n  }\n"]))),Q=R.ZP.p(b||(b=(0,D.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 500;\n\n  @media screen and (min-width: 768px) {\n    font-size: 36px;\n  }\n"]))),N=R.ZP.p(j||(j=(0,D.Z)(["\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 20px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    margin-top: 40px;\n  }\n"]))),O=R.ZP.div(y||(y=(0,D.Z)(["\n  display: flex;\n  gap: 12px;\n  flex-direction: column;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    gap: 20px;\n  }\n"]))),W=t(882),H=t(3329),J=function(n){var e=n.setAlertShowModal;return(0,a.useEffect)((function(){var n=function(n){e(!1)};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[e]),(0,H.jsx)(q,{onClick:function(){return e(!1)},children:(0,H.jsxs)(B,{onClick:function(n){return n.stopPropagation()},children:[(0,H.jsx)(G,{onClick:function(){return e(!1)},children:(0,H.jsx)("svg",{width:24,height:24,children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-cross"),style:{stroke:"#54ADFF"},width:24,height:24})})}),(0,H.jsx)(Q,{children:"Attention"}),(0,H.jsx)(N,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,H.jsxs)(O,{children:[(0,H.jsx)(I.T,{closeModal:e}),(0,H.jsx)(W.G,{closeModal:e})]})]})})},K=R.ZP.li(Z||(Z=(0,D.Z)(["\n  width: 280px;\n  height: 456px;\n  box-shadow: 3px 8px 14px 0px var(--small-shadow);\n  border-radius: 0px 0px 40px 40px;\n  background-color: var(--white-bckg-clr);\n\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 3px 8px 14px 0px var(--big-shadow);\n  }\n"]))),U=R.ZP.div(k||(k=(0,D.Z)(["\n  width: 280px;\n  height: 288px;\n  position: relative;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n"]))),V=R.ZP.img(P||(P=(0,D.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),X=R.ZP.div(C||(C=(0,D.Z)(["\n  width: 126px;\n  height: 32px;\n  background-color: var(--main-clr-blue-light);\n  border-radius: 0px 16px 16px 0px;\n  position: absolute;\n  top: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Y=R.ZP.button(z||(z=(0,D.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--main-clr-blue-light);\n  border: 0;\n  outline: 0;\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),$=R.ZP.button(M||(M=(0,D.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--main-clr-blue-light);\n  border: 0;\n  outline: 0;\n  position: absolute;\n  top: 68px;\n  right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    stroke: var(--main-clr-blue);\n  }\n\n  &:hover,\n  &:focus {\n    background-color: var(--main-clr-blue);\n\n    svg {\n      stroke: var(--main-clr-blue-light);\n    }\n  }\n"]))),nn=R.ZP.div(S||(S=(0,D.Z)(["\n  width: 280px;\n  height: 28px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  position: absolute;\n  bottom: 12px;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n"]))),en=R.ZP.div(F||(F=(0,D.Z)(["\n  width: 80px;\n  height: 28px;\n  background-color: var(--main-clr-blue-light);\n  border-radius: 16px;\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  padding-left: 5px;\n  padding-right: 4px;\n  gap: 3px;\n  font-size: 12px;\n  font-weight: 600;\n"]))),tn=R.ZP.div(E||(E=(0,D.Z)(["\n  height: 168px;\n  padding: 20px 16px 28px 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    padding: 20px 20px 24px 20px;\n  }\n"]))),rn=R.ZP.h2(A||(A=(0,D.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 700;\n"]))),on=R.ZP.button(T||(T=(0,D.Z)(["\n  width: 248px;\n  height: 38px;\n  border-radius: 40px;\n  border: 2px solid var(--main-clr-blue);\n  color: var(--main-clr-blue);\n  font-size: 16px;\n  font-weight: 600;\n  margin-left: auto;\n  margin-right: auto;\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n    color: var(--btn-clr-fon);\n    border: 0;\n  }\n"]))),an="https://final-project-backend-4o0r.onrender.com";function cn(){return(cn=(0,r.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(an,"/api/notices/").concat(e));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Sorry. Try again later :(");case 6:return n.next=8,t.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var sn,dn,ln,pn,hn,xn,un,fn,gn,vn,mn,wn,bn,jn,yn,Zn,kn,Pn,Cn,zn,Mn,Sn,Fn,En,An,Tn,_n,In,Ln=function(n){return cn.apply(this,arguments)},Dn=R.ZP.div(sn||(sn=(0,D.Z)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background: rgba(97, 97, 97, 0.6);\n  backdrop-filter: blur(4px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  z-index: 100;\n"]))),Rn=R.ZP.div(dn||(dn=(0,D.Z)(["\n  width: 680px;\n  position: relative;\n  padding: 32px;\n\n  background-color: #fff;\n  border-radius: 40px;\n\n  @media (max-width: 767px) {\n    width: 280px;\n    padding: 20px;\n    border-radius: 20px;\n  }\n"]))),qn=R.ZP.div(ln||(ln=(0,D.Z)(["\n  height: 300px;\n  display: flex;\n  align-items: flex-start;\n  gap: 24px;\n\n  @media (max-width: 767px) {\n    margin-top: 44px;\n    flex-direction: column;\n    gap: 12px;\n    height: auto;\n  }\n"]))),Bn=R.ZP.div(pn||(pn=(0,D.Z)(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  gap: 50px;\n\n  font-size: 16px;\n  line-height: 22px;\n\n  @media (max-width: 767px) {\n    font-size: 12px;\n    line-height: 16px;\n  }\n"]))),Gn=R.ZP.div(hn||(hn=(0,D.Z)(["\n  width: 240px;\n\n  font-family: 'Manrope';\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 1.357;\n"]))),Qn=R.ZP.div(xn||(xn=(0,D.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),Nn=R.ZP.div(un||(un=(0,D.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  gap: 5px;\n\n  font-weight: 600;\n"]))),On=R.ZP.div(fn||(fn=(0,D.Z)(["\n  display: flex;\n  position: absolute;\n  right: 0;\n  top: 0;\n  flex-direction: column;\n  align-items: left;\n  gap: 5px;\n"]))),Wn=R.ZP.div(gn||(gn=(0,D.Z)(["\n  padding-top: 28px;\n  padding-bottom: 70px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  \n\n  @media (max-width: 767px) {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.375;\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n"]))),Hn=R.ZP.div(vn||(vn=(0,D.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 17px;\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n  }\n"]))),Jn=R.ZP.button(mn||(mn=(0,D.Z)(["\n width: 129px;\n  padding: 6px 20px;\n  color: var(--btn-clr-fon);\n  background-color: var(--main-clr-blue);\n  border-radius: 40px;\n  border: none;\n\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  & svg {\n    stroke: currentColor;\n    fill: none;\n  }\n\n  :hover,\n  :focus {\n    background: var(--main-clr-gr_blue);\n  }\n  @media (max-width: 767px) {\n    width: 100%;\n  }\n"]))),Kn=R.ZP.button(wn||(wn=(0,D.Z)(["\nwidth: 129px;\n  padding: 8px 20px;\n  background-color:  var(--btn-clr-fon);\n  color: #54adff;\n  border-radius: 40px;\n  border: 1px solid #54adff;\n  :hover,\n  :focus {\n    background: var(--main-clr-gr_blue);\n    color: #fff;\n  }\n\n  @media (max-width: 767px) {\n    width: 100%;\n  }\n"]))),Un=R.ZP.div(bn||(bn=(0,D.Z)(["\n  position: relative;\n  width: 262px;\n  height: 298px;\n  border-radius: 0 0 40px 40px;\n  background-image: url(",");\n  background-size: cover;\n\n  @media (max-width: 767px) {\n    width: 240px;\n    height: 240px;\n  }\n"])),(function(n){return n.img})),Vn=R.ZP.div(jn||(jn=(0,D.Z)(["\n  position: absolute;\n  left: 0;\n  top: 16px;\n\n  width: 126px;\n  height: 32px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 19px;\n\n  background-color: var(--main-clr-blue-light);\n  border-radius: 0 16px 16px 0;\n"]))),Xn=R.ZP.button(yn||(yn=(0,D.Z)(["\n  position: absolute;\n  top: 28px;\n  right: 31px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: #fff;\n  color: var(--main-clr-blue);\n  border: none;\n  stroke: currentColor;\n  \n  &:hover {\n    stroke: var(--main-clr-yellow);\n  }\n\n  @media (max-width: 767px) {\n    top: 17px;\n    right: 17px;\n  }\n"]))),Yn=function(n){var e,t,c,s,d,l,p,h,x=n.handler,u=(n.handleAdd,n.id),f=n.isFavorite,g=n.onFavBtnClick,v=n.setRerender,m=(0,a.useState)({}),w=(0,o.Z)(m,2),b=w[0],j=w[1];(0,a.useEffect)((function(){var n=function(){var n=(0,r.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Ln(u);case 3:e=n.sent,j(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching notice:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[u]);return(0,a.useEffect)((function(){var n=function(n){27===n.keyCode&&(v(!0),x(!1))};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[x,v]),(0,H.jsx)(Dn,{onClick:function(n){n.target===n.currentTarget&&(v(!0),x(!1))},children:(0,H.jsxs)(Rn,{children:[(0,H.jsx)(Xn,{onClick:function(){x(!1),v(!0)},children:(0,H.jsx)("svg",{width:24,height:24,children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-cross"),width:24,height:24})})}),(0,H.jsxs)(qn,{children:[(0,H.jsx)(Un,{img:b.file,children:(0,H.jsxs)(Vn,{children:[" ",[b.category]]})}),(0,H.jsxs)(Qn,{children:[(0,H.jsx)(Gn,{children:b.description||"Cute dog looking for a home"}),(0,H.jsxs)(Bn,{children:[(0,H.jsxs)(Nn,{children:[(0,H.jsx)("div",{children:"Name:"}),(0,H.jsx)("div",{children:"Birthday:"}),(0,H.jsx)("div",{children:"Type:"}),(0,H.jsx)("div",{children:"Place:"}),(0,H.jsx)("div",{children:"The sex:"}),(0,H.jsx)("div",{children:"Owner:"}),(null===(e=b.owner)||void 0===e?void 0:e.email)&&(0,H.jsx)("div",{children:"Email:"}),(null===(t=b.owner)||void 0===t?void 0:t.phone)&&(0,H.jsx)("div",{children:"Phone:"})]}),(0,H.jsxs)(On,{children:[(0,H.jsx)("div",{children:b.name||b.title}),(0,H.jsx)("div",{children:b.date}),(0,H.jsx)("div",{children:b.type}),(0,H.jsx)("div",{children:b.location}),(0,H.jsx)("div",{children:b.sex}),(0,H.jsx)("div",{children:null===(c=b.owner)||void 0===c?void 0:c.name}),(null===(s=b.owner)||void 0===s?void 0:s.email)&&(0,H.jsx)("div",{children:null===(d=b.owner)||void 0===d?void 0:d.email}),(null===(l=b.owner)||void 0===l?void 0:l.phone)&&(0,H.jsx)("div",{children:null===(p=b.owner)||void 0===p?void 0:p.phone})]})]})]})]}),(0,H.jsxs)(Wn,{children:[(0,H.jsx)("b",{children:"Comments:"})," ",b.comments]}),(0,H.jsxs)(Hn,{children:[(0,H.jsxs)(Jn,{onClick:function(){return g()},children:[f?(0,H.jsx)("span",{children:"Remove"}):(0,H.jsx)("span",{children:"Add to"}),(0,H.jsx)("svg",{width:"24",height:"24",children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-heart"),width:24,height:24})})]}),(null===(h=b.owner)||void 0===h?void 0:h.phone)&&(0,H.jsx)(Kn,{onClick:function(){var n;(n=b.owner.phone)&&(window.location.href="tel:".concat(n))},children:"Contact"})]})]})})},$n=t(9434),ne=t(6516),ee=function(n){var e=n.article,t=n.setAlertShowModal,i=n.setRerender,r=(0,a.useState)(!1),s=(0,o.Z)(r,2),d=s[0],l=s[1],p=(0,$n.I0)(),h=(0,c.a)(),x=h.user,u=h.isLoggedIn,f=e._id,g=e.title,v=e.category,m=e.date,w=e.file,b=e.sex,j=e.location,y=e.owner,Z=function(n){var e=n.split("-"),t=(0,o.Z)(e,3),i=t[0],r=t[1],a=t[2],c=parseInt(r,10)-1,s=new Date(a,c,i),d=(new Date-s)/315576e5;return Math.floor(d)}(m),k=function(n){return n.length>5?n.slice(0,4)+"...":n}(j),P=function(n){var e;switch(n){case"sell":e="sell";break;case"lost-found":e="lost/found";break;case"for-free":e="in good hands";break;default:e=n}return e}(v),C=!!u&&x.favorite.includes(f),z=x._id===y,M=function(){console.log("horey!"),u?(C||p((0,ne.addToFavorite)(f)),C&&p((0,ne.delFromFavorite)(f))):t(!0)};return(0,H.jsxs)(K,{id:f,children:[(0,H.jsxs)(U,{children:[(0,H.jsx)(V,{src:"".concat(w),alt:"pretty pet"}),(0,H.jsx)(X,{children:(0,H.jsx)("p",{children:P})}),(0,H.jsxs)("div",{children:[(0,H.jsx)(Y,{type:"button",onClick:function(){return M()},children:C?(0,H.jsx)("svg",{width:24,height:24,children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-heart-fill"),width:24,height:24})}):(0,H.jsx)("svg",{width:24,height:24,children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-heart"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})})}),z&&(0,H.jsx)($,{type:"button",children:(0,H.jsx)("svg",{width:24,height:24,children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-trash"),width:24,height:24})})})]}),(0,H.jsxs)(nn,{children:[(0,H.jsxs)(en,{children:[(0,H.jsx)("svg",{width:24,height:24,children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-location"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,H.jsx)("p",{children:k})]}),(0,H.jsxs)(en,{children:[(0,H.jsx)("svg",{width:24,height:24,children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-clock"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,H.jsxs)("p",{children:[Z<1&&"<1 year",1===Z&&"1 year",Z>1&&"".concat(Z," years")]})]}),(0,H.jsxs)(en,{children:["male"===b?(0,H.jsx)("svg",{width:24,height:24,children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-male"),style:{stroke:"var(--main-clr-blue)"},width:24,height:24})}):(0,H.jsx)("svg",{width:24,height:24,children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-female"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,H.jsx)("p",{children:b})]})]})]}),(0,H.jsxs)(tn,{children:[(0,H.jsx)(rn,{children:g}),(0,H.jsx)(on,{type:"button",onClick:function(){return l(!0)},children:"Learn more"})]}),d&&(0,H.jsx)(Yn,{handler:l,id:e._id,isFavorite:C,onFavBtnClick:M,setRerender:i})]})},te=R.ZP.ul(Zn||(Zn=(0,D.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 32px;\n    margin-top: 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1248px;\n  }\n"]))),ie=function(n){var e=n.articles,t=n.setAlertShowModal,i=n.setRerender;return(0,a.useEffect)((function(){}),[]),(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(te,{children:e.length>0&&e.map((function(n){return(0,H.jsx)(ee,{article:n,setAlertShowModal:t,setRerender:i},n._id)}))})})},re=R.ZP.div(kn||(kn=(0,D.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n \n"]))),oe=R.ZP.label(Pn||(Pn=(0,D.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 16px;\n  cursor: pointer;\n  border: 0;\n  border-radius: 40px;\n  background-color: var(--main-clr-blue-light);\n  color: var(--main-clr-blue);\n\n  @media screen and (min-width: 768px){\n    height: 35px;\n  }\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n    color: var(--btn-clr-fon);\n  }\n"]))),ae=R.ZP.input(Cn||(Cn=(0,D.Z)(["\n  display: none;\n\n  &[type='radio']:checked + label {\n    background-color: var(--main-clr-blue);\n    color: var(--btn-clr-fon);\n  }\n"]))),ce=t(7689),se=function(n){var e=n.setCategory,t=n.setPage,i=(0,c.a)().isLoggedIn,r=(0,ce.s0)(),o=function(n){var i=n.currentTarget.value;e(i),t(1),r("/notices/".concat(i))};return(0,H.jsxs)(re,{children:[(0,H.jsx)(ae,{onClick:function(n){return o(n)},type:"radio",id:"radio1",name:"radios",value:"sell",defaultChecked:!0}),(0,H.jsx)(oe,{htmlFor:"radio1",children:"sell"}),(0,H.jsx)(ae,{onClick:function(n){return o(n)},type:"radio",id:"radio2",name:"radios",value:"lost-found"}),(0,H.jsx)(oe,{htmlFor:"radio2",children:"lost/found"}),(0,H.jsx)(ae,{onClick:function(n){return o(n)},type:"radio",id:"radio3",name:"radios",value:"for-free"}),(0,H.jsx)(oe,{htmlFor:"radio3",children:"in good hands"}),i&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(ae,{onClick:function(n){return o(n)},type:"radio",id:"radio4",name:"radios",value:"favorite"}),(0,H.jsx)(oe,{htmlFor:"radio4",children:"favorite ads"}),(0,H.jsx)(ae,{onClick:function(n){return o(n)},type:"radio",id:"radio5",name:"radios",value:"my-ads"}),(0,H.jsx)(oe,{htmlFor:"radio5",children:"my ads"})]})]})},de=R.ZP.form(zn||(zn=(0,D.Z)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n  }\n"]))),le=R.ZP.input(Mn||(Mn=(0,D.Z)(["\n  width: 280px;\n  height: 44px;\n  border-radius: 24px;\n  background: var(--white-bckg-clr);\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 400;\n  box-shadow: 3px 8px 14px 0px var(--small-shadow);\n  border: 0;\n  outline: none;\n  padding-left: 20px;\n  padding-right: 62px;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    font-size: 20px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 3px 8px 14px 0px var(--big-shadow);\n  }\n"]))),pe=R.ZP.div(Sn||(Sn=(0,D.Z)(["\n  display: flex;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n\n  @media screen and (min-width: 768px) {\n    right: 60px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    right: 330px;\n  }\n"]))),he=R.ZP.button(Fn||(Fn=(0,D.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 244px;\n  border: 0;\n  outline: none;\n  background: inherit;\n  svg {\n    fill: var(--main-clr-blue);\n  }\n\n  &:hover {\n    svg {\n      fill: var(--main-clr-yellow);\n    }\n  }\n"]))),xe=R.ZP.button(En||(En=(0,D.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 244px;\n  border: 0;\n  outline: none;\n  background: inherit;\n\n  svg {\n    stroke: var(--main-clr-yellow);\n  }\n\n  &:hover {\n    svg {\n      stroke: var(--main-clr-blue);\n    }\n  }\n"]))),ue=function(n){var e=n.setQuery,t=n.setPage,i=(0,a.useState)(""),r=(0,o.Z)(i,2),c=r[0],s=r[1];return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(de,{onSubmit:function(n){n.preventDefault();var i=c;""===i.trim()||i.length<3?console.log("Enter correct query"):(console.log("query :>> ",i),t(1),e(i))},children:[(0,H.jsx)(le,{type:"text",name:"localInput",value:c,onChange:function(n){var e=n.target.value;s(e)},placeholder:"Search"}),(0,H.jsxs)(pe,{children:[(0,H.jsx)(he,{type:"submit",children:(0,H.jsx)("svg",{width:24,height:24,children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-search"),width:24,height:24})})}),c.length>0&&(0,H.jsx)(xe,{type:"button",onClick:function(n){n.preventDefault(),s(""),e("")},children:(0,H.jsx)("svg",{width:24,height:24,children:(0,H.jsx)("use",{href:"".concat(L.Z,"#icon-cross"),width:24,height:24})})})]})]})," "]})},fe=t(8792),ge=t(8484),ve=R.ZP.div(An||(An=(0,D.Z)(["\ndisplay: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top :68px;\n\n"]))),me=(0,R.ZP)(ge.Z)(Tn||(Tn=(0,D.Z)(["\n\n\n    .MuiPaginationItem-page.Mui-selected {\n        background-color: var(--main-clr-blue); \n        color: white; \n         padding: 10px;\n         border:none;\n     \n      }\n      .MuiPaginationItem-page:not(.Mui-selected) {\n        background-color:  transparent; \n        color: #111111; \n        border: 1px solid var(--main-clr-blue); \n        padding: 10px;\n        \n      }\n      \n    \n"]))),we=function(n){var e=n.setPage,t=n.totalPageCount,i=n.page;return(0,H.jsx)(ve,{children:(0,H.jsx)("div",{children:(0,H.jsx)(me,{onChange:function(n,t){return e(t)},count:t,page:i,variant:"outlined"})})})},be=R.ZP.div(_n||(_n=(0,D.Z)(["\n  display: flex;\n  width: 280px;\n  justify-content: space-between;\n  margin-top: 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    margin-top: 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1248px;\n  }\n"]))),je=function(){var n=(0,a.useState)(!1),e=(0,o.Z)(n,2),t=e[0],s=e[1],d=(0,a.useState)(""),h=(0,o.Z)(d,2),x=h[0],f=h[1],g=(0,a.useState)(""),v=(0,o.Z)(g,2),m=v[0],w=v[1],b=(0,a.useState)("sell"),j=(0,o.Z)(b,2),y=j[0],Z=j[1],k=(0,a.useState)(1),P=(0,o.Z)(k,2),C=P[0],z=P[1],M=(0,a.useState)(0),S=(0,o.Z)(M,2),F=S[0],E=S[1],A=(0,a.useState)(!1),T=(0,o.Z)(A,2),I=T[0],L=T[1],D=(0,c.a)(),R=D.token,q=D.isLoggedIn;return(0,a.useEffect)((function(){function n(){return n=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u(e,t,r);case 2:o=n.sent,f(o.notices),L(!1),E(Math.ceil(o.total/12));case 6:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}console.log("rerender :>> ",I),I&&q&&function(e,t,i){n.apply(this,arguments)}(C,m,R)}),[q,C,m,I,R]),(0,a.useEffect)((function(){function n(){return n=(0,r.Z)((0,i.Z)().mark((function n(e,t,r,o){var a,c,s;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("favorite"!==t){n.next=8;break}return n.next=3,u(e,r,o);case 3:a=n.sent,f(a.notices),E(Math.ceil(a.total/12)),n.next=23;break;case 8:if("my-ads"!==t){n.next=16;break}return n.next=11,l(e,r,o);case 11:c=n.sent,f(c.notices),E(Math.ceil(c.total/12)),n.next=23;break;case 16:return n.next=19,_(e,t,r);case 19:s=n.sent,f(s.notices),E(Math.ceil(s.total/12));case 23:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(e,t,i,r){n.apply(this,arguments)}(C,y,m,R)}),[C,y,m,R]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)("div",{children:[(0,H.jsx)(fe.D,{text:"Find your favorite pet"}),(0,H.jsx)(ue,{setQuery:w,setPage:z}),(0,H.jsxs)(be,{children:[(0,H.jsx)(se,{setCategory:Z,setPage:z}),(0,H.jsx)(p.Z,{setAlertShowModal:s})]})]}),x&&(0,H.jsx)(ie,{articles:x,setAlertShowModal:s,setRerender:L}),t&&(0,H.jsx)(J,{setAlertShowModal:s}),(0,H.jsx)(we,{setPage:z,page:C,totalPageCount:F})]})},ye=R.ZP.main(In||(In=(0,D.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\n"]))),Ze=function(){return(0,H.jsx)(ye,{children:(0,H.jsx)(je,{})})}}}]);
//# sourceMappingURL=411.8b9c25eb.chunk.js.map