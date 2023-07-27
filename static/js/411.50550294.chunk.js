"use strict";(self.webpackChunkfinal_project_frontend=self.webpackChunkfinal_project_frontend||[]).push([[411],{8792:function(n,e,t){t.d(e,{D:function(){return l}});var i,r,o=t(168),a=t(7691),c=a.ZP.h1(i||(i=(0,o.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 700;\n  display: flex;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 48px;\n  }\n"]))),s=a.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    /* width: 704px; */\n    margin-top: 80px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 100%; */\n  }\n"]))),d=t(3329),l=function(n){var e=n.text,t=void 0===e?"Page title":e;return(0,d.jsx)(s,{children:(0,d.jsx)(c,{children:t})})}},2256:function(n,e,t){t.d(e,{Z:function(){return p}});var i,r=t(7689),o=t(9230),a=t(4217),c=t(8466),s=t(168),d=t(7691).ZP.button(i||(i=(0,s.Z)(["\n  border-radius: 40px;\n  background: var(--main-clr-blue);\n  display: flex;\n  width: 129px;\n  height: 35px;\n  justify-content: center;\n  align-items: center;\n  /* gap: 8px; */\n  border: 0;\n  outline: 0;\n  text-decoration: none;\n  svg {\n    stroke: var(--btn-clr-fon);\n  }\n  padding: 8px 0;\n  color: var(--btn-clr-fon);\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 700;\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n    font-size: 16px;\n    height: 40px;\n  }\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n  }\n"]))),l=t(3329),p=function(n){var e=n.setAlertShowModal,t=void 0===e?null:e,i=(0,a.a)().isLoggedIn,s=(0,r.s0)(),p=(0,o.$G)().t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(d,{type:"button",onClick:function(){i?s("/add-pet"):t(!0)},children:[p("add_pet"),(0,l.jsx)("svg",{width:24,height:24,children:(0,l.jsx)("use",{href:"".concat(c.Z,"#icon-plus-small"),width:24,height:24})})]})})}},5411:function(n,e,t){t.r(e),t.d(e,{default:function(){return ke}});var i=t(4165),r=t(5861),o=t(9439),a=t(2791),c=t(4217),s=t(9230),d="https://final-project-backend-4o0r.onrender.com/api/notices/owner";function l(){return(l=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o,a,c;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}},n.prev=1,n.next=4,fetch("".concat(d,"?page=").concat(e,"&query=").concat(t),o);case 4:if((a=n.sent).ok){n.next=7;break}throw new Error("Sorry. Try again later :(");case 7:return n.next=9,a.json();case 9:return c=n.sent,n.abrupt("return",c);case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}var p=function(n,e,t){return l.apply(this,arguments)},h=t(2256),x="https://final-project-backend-4o0r.onrender.com/api/notices/favorite";function u(){return(u=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o,a,c;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}},n.prev=1,n.next=4,fetch("".concat(x,"?page=").concat(e,"&query=").concat(t),o);case 4:if((a=n.sent).ok){n.next=7;break}throw new Error("Sorry. Try again later :(");case 7:return n.next=9,a.json();case 9:return c=n.sent,n.abrupt("return",c);case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}var f=function(n,e,t){return u.apply(this,arguments)},g="https://final-project-backend-4o0r.onrender.com/api/notices";function v(){return(v=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(g,"?category=").concat(t,"&query=").concat(r,"&page=").concat(e));case 3:if((o=n.sent).ok){n.next=6;break}throw new Error("Sorry. Try again later :(");case 6:return n.next=8,o.json();case 8:return a=n.sent,n.abrupt("return",a);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var m,w,b,j,y,Z,k=function(n,e,t){return v.apply(this,arguments)},P=t(9376),C=t(8466),z=t(168),M=t(7691),_=M.ZP.div(m||(m=(0,z.Z)(["\nz-index: 200;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(97, 97, 97, 0.6);\n  backdrop-filter: blur(4px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),S=M.ZP.div(w||(w=(0,z.Z)(["\n  z-index: 200;\n  width: 280px;\n  border-radius: 20px;\n  background-color: #fff;\n  padding: 60px 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    padding: 60px 40px;\n  }\n"]))),E=M.ZP.button(b||(b=(0,z.Z)(["\n  position: absolute;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #fff;\n  top: 16px;\n  right: 16px;\n\n  &:hover,\n  &:focus {\n    svg {\n      stroke: var(--main-clr-yellow);\n    }\n  }\n"]))),F=M.ZP.p(j||(j=(0,z.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 500;\n\n  @media screen and (min-width: 768px) {\n    font-size: 36px;\n  }\n"]))),A=M.ZP.p(y||(y=(0,z.Z)(["\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 20px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    margin-top: 40px;\n  }\n"]))),T=M.ZP.div(Z||(Z=(0,z.Z)(["\n  display: flex;\n  gap: 12px;\n  flex-direction: column;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    gap: 20px;\n  }\n"]))),I=t(882),G=t(3329),L=function(n){var e=n.setAlertShowModal;return(0,a.useEffect)((function(){var n=function(n){e(!1)};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[e]),(0,G.jsx)(_,{onClick:function(){return e(!1)},children:(0,G.jsxs)(S,{onClick:function(n){return n.stopPropagation()},children:[(0,G.jsx)(E,{onClick:function(){return e(!1)},children:(0,G.jsx)("svg",{width:24,height:24,children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-cross"),style:{stroke:"#54ADFF"},width:24,height:24})})}),(0,G.jsx)(F,{children:"Attention"}),(0,G.jsx)(A,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,G.jsxs)(T,{children:[(0,G.jsx)(P.T,{closeModal:e}),(0,G.jsx)(I.G,{closeModal:e})]})]})})},D=t(9434),R="https://final-project-backend-4o0r.onrender.com";function q(){return(q=(0,r.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(R,"/api/notices/").concat(e));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Sorry. Try again later :(");case 6:return n.next=8,t.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var B,$,Q,N,O,W,H,J,K,U,V,X,Y,nn,en,tn,rn,on,an,cn,sn,dn,ln,pn,hn,xn,un,fn,gn,vn,mn,wn,bn,jn,yn,Zn,kn,Pn,Cn,zn=function(n){return q.apply(this,arguments)},Mn=M.ZP.div(B||(B=(0,z.Z)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background: rgba(97, 97, 97, 0.6);\n  backdrop-filter: blur(4px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  z-index: 100;\n"]))),_n=M.ZP.div($||($=(0,z.Z)(["\n  width: 680px;\n  position: relative;\n  padding: 32px;\n\n  background-color: #fff;\n  border-radius: 40px;\n\n  @media (max-width: 767px) {\n    width: 280px;\n    padding: 20px;\n    border-radius: 20px;\n  }\n"]))),Sn=M.ZP.div(Q||(Q=(0,z.Z)(["\n  height: 300px;\n  display: flex;\n  align-items: flex-start;\n  gap: 24px;\n\n  @media (max-width: 767px) {\n    margin-top: 44px;\n    flex-direction: column;\n    gap: 12px;\n    height: auto;\n  }\n"]))),En=M.ZP.div(N||(N=(0,z.Z)(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  gap: 50px;\n\n  font-size: 16px;\n  line-height: 22px;\n\n  @media (max-width: 767px) {\n    font-size: 12px;\n    line-height: 16px;\n  }\n"]))),Fn=M.ZP.div(O||(O=(0,z.Z)(["\n  width: 240px;\n\n  font-family: 'Manrope';\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 1.357;\n"]))),An=M.ZP.div(W||(W=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),Tn=M.ZP.div(H||(H=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  gap: 5px;\n\n  font-weight: 600;\n"]))),In=M.ZP.div(J||(J=(0,z.Z)(["\n  display: flex;\n  position: absolute;\n  right: 0;\n  top: 0;\n  flex-direction: column;\n  align-items: left;\n  gap: 5px;\n"]))),Gn=M.ZP.div(K||(K=(0,z.Z)(["\n  padding-top: 28px;\n  padding-bottom: 70px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  \n\n  @media (max-width: 767px) {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.375;\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n"]))),Ln=M.ZP.div(U||(U=(0,z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 17px;\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n  }\n"]))),Dn=M.ZP.button(V||(V=(0,z.Z)(["\n width: 129px;\n  padding: 6px 20px;\n  color: var(--btn-clr-fon);\n  background-color: var(--main-clr-blue);\n  border-radius: 40px;\n  border: none;\n\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  & svg {\n    stroke: currentColor;\n    fill: none;\n  }\n\n  :hover,\n  :focus {\n    background: var(--main-clr-gr_blue);\n  }\n  @media (max-width: 767px) {\n    width: 100%;\n  }\n"]))),Rn=M.ZP.button(X||(X=(0,z.Z)(["\nwidth: 129px;\n  padding: 8px 20px;\n  background-color:  var(--btn-clr-fon);\n  color: #54adff;\n  border-radius: 40px;\n  border: 1px solid #54adff;\n  :hover,\n  :focus {\n    background: var(--main-clr-gr_blue);\n    color: #fff;\n  }\n\n  @media (max-width: 767px) {\n    width: 100%;\n  }\n"]))),qn=M.ZP.div(Y||(Y=(0,z.Z)(["\n  position: relative;\n  width: 262px;\n  height: 298px;\n  border-radius: 0 0 40px 40px;\n  background-image: url(",");\n  background-size: cover;\n\n  @media (max-width: 767px) {\n    width: 240px;\n    height: 240px;\n  }\n"])),(function(n){return n.img})),Bn=M.ZP.div(nn||(nn=(0,z.Z)(["\n  position: absolute;\n  left: 0;\n  top: 16px;\n\n  width: 126px;\n  height: 32px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 19px;\n\n  background-color: var(--main-clr-blue-light);\n  border-radius: 0 16px 16px 0;\n"]))),$n=M.ZP.button(en||(en=(0,z.Z)(["\n  position: absolute;\n  top: 28px;\n  right: 31px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: #fff;\n  color: var(--main-clr-blue);\n  border: none;\n  stroke: currentColor;\n  \n  &:hover {\n    stroke: var(--main-clr-yellow);\n  }\n\n  @media (max-width: 767px) {\n    top: 17px;\n    right: 17px;\n  }\n"]))),Qn=function(n){var e,t,c,s,d,l,p,h,x=n.handler,u=(n.handleAdd,n.id),f=n.isFavorite,g=n.onFavBtnClick,v=n.setRerender,m=(0,a.useState)({}),w=(0,o.Z)(m,2),b=w[0],j=w[1];(0,a.useEffect)((function(){var n=function(){var n=(0,r.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,zn(u);case 3:e=n.sent,j(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching notice:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[u]);return(0,a.useEffect)((function(){var n=function(n){27===n.keyCode&&(v(!0),x(!1))};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[x,v]),(0,G.jsx)(Mn,{onClick:function(n){n.target===n.currentTarget&&(v(!0),x(!1))},children:(0,G.jsxs)(_n,{children:[(0,G.jsx)($n,{onClick:function(){x(!1),v(!0)},children:(0,G.jsx)("svg",{width:24,height:24,children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-cross"),width:24,height:24})})}),(0,G.jsxs)(Sn,{children:[(0,G.jsx)(qn,{img:b.file,children:(0,G.jsxs)(Bn,{children:[" ",[b.category]]})}),(0,G.jsxs)(An,{children:[(0,G.jsx)(Fn,{children:b.description||"Cute dog looking for a home"}),(0,G.jsxs)(En,{children:[(0,G.jsxs)(Tn,{children:[(0,G.jsx)("div",{children:"Name:"}),(0,G.jsx)("div",{children:"Birthday:"}),(0,G.jsx)("div",{children:"Type:"}),(0,G.jsx)("div",{children:"Place:"}),(0,G.jsx)("div",{children:"The sex:"}),(0,G.jsx)("div",{children:"Owner:"}),(null===(e=b.owner)||void 0===e?void 0:e.email)&&(0,G.jsx)("div",{children:"Email:"}),(null===(t=b.owner)||void 0===t?void 0:t.phone)&&(0,G.jsx)("div",{children:"Phone:"})]}),(0,G.jsxs)(In,{children:[(0,G.jsx)("div",{children:b.name||b.title}),(0,G.jsx)("div",{children:b.date}),(0,G.jsx)("div",{children:b.type}),(0,G.jsx)("div",{children:b.location}),(0,G.jsx)("div",{children:b.sex}),(0,G.jsx)("div",{children:null===(c=b.owner)||void 0===c?void 0:c.name}),(null===(s=b.owner)||void 0===s?void 0:s.email)&&(0,G.jsx)("div",{children:null===(d=b.owner)||void 0===d?void 0:d.email}),(null===(l=b.owner)||void 0===l?void 0:l.phone)&&(0,G.jsx)("div",{children:null===(p=b.owner)||void 0===p?void 0:p.phone})]})]})]})]}),(0,G.jsxs)(Gn,{children:[(0,G.jsx)("b",{children:"Comments:"})," ",b.comments]}),(0,G.jsxs)(Ln,{children:[(0,G.jsxs)(Dn,{onClick:function(){return g()},children:[f?(0,G.jsx)("span",{children:"Remove"}):(0,G.jsx)("span",{children:"Add to"}),(0,G.jsx)("svg",{width:"24",height:"24",children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-heart"),width:24,height:24})})]}),(null===(h=b.owner)||void 0===h?void 0:h.phone)&&(0,G.jsx)(Rn,{onClick:function(){var n;(n=b.owner.phone)&&(window.location.href="tel:".concat(n))},children:"Contact"})]})]})})},Nn=t(6516),On=M.ZP.li(tn||(tn=(0,z.Z)(["\n  width: 280px;\n  height: 456px;\n  box-shadow: 3px 8px 14px 0px var(--small-shadow);\n  border-radius: 0px 0px 40px 40px;\n  background-color: var(--white-bckg-clr);\n\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 3px 8px 14px 0px var(--big-shadow);\n  }\n"]))),Wn=M.ZP.div(rn||(rn=(0,z.Z)(["\n  width: 280px;\n  height: 288px;\n  position: relative;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n"]))),Hn=M.ZP.img(on||(on=(0,z.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),Jn=M.ZP.div(an||(an=(0,z.Z)(["\n  width: 126px;\n  height: 32px;\n  background-color: var(--main-clr-blue-light);\n  border-radius: 0px 16px 16px 0px;\n  position: absolute;\n  top: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Kn=M.ZP.button(cn||(cn=(0,z.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--main-clr-blue-light);\n  border: 0;\n  outline: 0;\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Un=M.ZP.button(sn||(sn=(0,z.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--main-clr-blue-light);\n  border: 0;\n  outline: 0;\n  position: absolute;\n  top: 68px;\n  right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    stroke: var(--main-clr-blue);\n  }\n\n  &:hover,\n  &:focus {\n    background-color: var(--main-clr-blue);\n\n    svg {\n      stroke: var(--main-clr-blue-light);\n    }\n  }\n"]))),Vn=M.ZP.div(dn||(dn=(0,z.Z)(["\n  width: 280px;\n  height: 28px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  position: absolute;\n  bottom: 12px;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n  }\n"]))),Xn=M.ZP.div(ln||(ln=(0,z.Z)(["\n  width: 80px;\n  height: 28px;\n  background-color: var(--main-clr-blue-light);\n  border-radius: 16px;\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  padding-left: 5px;\n  padding-right: 4px;\n  gap: 3px;\n  font-size: 12px;\n  font-weight: 600;\n"]))),Yn=M.ZP.div(pn||(pn=(0,z.Z)(["\n  height: 168px;\n  padding: 20px 16px 28px 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    padding: 20px 20px 24px 20px;\n  }\n"]))),ne=M.ZP.h2(hn||(hn=(0,z.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 700;\n"]))),ee=M.ZP.button(xn||(xn=(0,z.Z)(["\n  width: 248px;\n  height: 38px;\n  border-radius: 40px;\n  border: 2px solid var(--main-clr-blue);\n  color: var(--main-clr-blue);\n  font-size: 16px;\n  font-weight: 600;\n  margin-left: auto;\n  margin-right: auto;\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n    color: var(--btn-clr-fon);\n    border: 0;\n  }\n"]))),te=function(n){var e=n.article,t=n.setAlertShowModal,i=n.setRerender,r=(0,a.useState)(!1),d=(0,o.Z)(r,2),l=d[0],p=d[1],h=(0,D.I0)(),x=(0,s.$G)().t,u=(0,c.a)(),f=u.user,g=u.isLoggedIn,v=e._id,m=e.title,w=e.category,b=e.date,j=e.file,y=e.sex,Z=e.location,k=e.owner,P=function(n){var e=n.split("-"),t=(0,o.Z)(e,3),i=t[0],r=t[1],a=t[2],c=parseInt(r,10)-1,s=new Date(a,c,i),d=(new Date-s)/315576e5;return Math.floor(d)}(b),z=function(n){return n.length>5?n.slice(0,4)+"...":n}(Z),M=function(n){var e;switch(n){case"sell":e="sell";break;case"lost-found":e="lost/found";break;case"for-free":e="in good hands";break;default:e=n}return e}(w),_=!!g&&f.favorite.includes(v),S=f._id===k,E=function(){console.log("horey!"),g?(_||h((0,Nn.addToFavorite)(v)),_&&h((0,Nn.delFromFavorite)(v))):t(!0)};return(0,G.jsxs)(On,{id:v,children:[(0,G.jsxs)(Wn,{children:[(0,G.jsx)(Hn,{src:"".concat(j),alt:"pretty pet"}),(0,G.jsx)(Jn,{children:(0,G.jsx)("p",{children:M})}),(0,G.jsxs)("div",{children:[(0,G.jsx)(Kn,{type:"button",onClick:function(){return E()},children:_?(0,G.jsx)("svg",{width:24,height:24,children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-heart-fill"),width:24,height:24})}):(0,G.jsx)("svg",{width:24,height:24,children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-heart"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})})}),S&&(0,G.jsx)(Un,{type:"button",children:(0,G.jsx)("svg",{width:24,height:24,children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-trash"),width:24,height:24})})})]}),(0,G.jsxs)(Vn,{children:[(0,G.jsxs)(Xn,{children:[(0,G.jsx)("svg",{width:24,height:24,children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-location"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,G.jsx)("p",{children:z})]}),(0,G.jsxs)(Xn,{children:[(0,G.jsx)("svg",{width:24,height:24,children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-clock"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,G.jsxs)("p",{children:[P<1&&"<1 ".concat(x("min_year")," "),1===P&&"1 ".concat(x("year")),P>1&&P<5&&"".concat(P," ").concat(x("years")),P>=5&&"".concat(P," ").concat(x("big_years"))]})]}),(0,G.jsxs)(Xn,{children:["male"===y?(0,G.jsx)("svg",{width:24,height:24,children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-male"),style:{stroke:"var(--main-clr-blue)"},width:24,height:24})}):(0,G.jsx)("svg",{width:24,height:24,children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-female"),width:24,height:24,style:{stroke:"var(--main-clr-blue)"}})}),(0,G.jsx)("p",{children:y})]})]})]}),(0,G.jsxs)(Yn,{children:[(0,G.jsx)(ne,{children:m}),(0,G.jsx)(ee,{type:"button",onClick:function(){return p(!0)},children:x("learn_more")})]}),l&&(0,G.jsx)(Qn,{handler:p,id:e._id,isFavorite:_,onFavBtnClick:E,setRerender:i})]})},ie=M.ZP.ul(un||(un=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 32px;\n    margin-top: 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1248px;\n  }\n"]))),re=function(n){var e=n.articles,t=n.setAlertShowModal,i=n.setRerender;return(0,a.useEffect)((function(){}),[]),(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(ie,{children:e.length>0&&e.map((function(n){return(0,G.jsx)(te,{article:n,setAlertShowModal:t,setRerender:i},n._id)}))})})},oe=t(7689),ae=M.ZP.div(fn||(fn=(0,z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 500;\n \n"]))),ce=M.ZP.label(gn||(gn=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 16px;\n  cursor: pointer;\n  border: 0;\n  border-radius: 40px;\n  background-color: var(--main-clr-blue-light);\n  color: var(--main-clr-blue);\n\n  @media screen and (min-width: 768px){\n    height: 35px;\n  }\n\n  &:hover,\n  &:focus {\n    background: var(--main-clr-gr_blue);\n    color: var(--btn-clr-fon);\n  }\n"]))),se=M.ZP.input(vn||(vn=(0,z.Z)(["\n  display: none;\n\n  &[type='radio']:checked + label {\n    background-color: var(--main-clr-blue);\n    color: var(--btn-clr-fon);\n  }\n"]))),de=function(n){var e=n.setCategory,t=n.setPage,i=(0,c.a)().isLoggedIn,r=(0,oe.s0)(),o=(0,s.$G)().t,a=function(n){var i=n.currentTarget.value;e(i),t(1),r("/notices/".concat(i))};return(0,G.jsxs)(ae,{children:[(0,G.jsx)(se,{onClick:function(n){return a(n)},type:"radio",id:"radio1",name:"radios",value:"sell",defaultChecked:!0}),(0,G.jsx)(ce,{htmlFor:"radio1",children:o("sell")}),(0,G.jsx)(se,{onClick:function(n){return a(n)},type:"radio",id:"radio2",name:"radios",value:"lost-found"}),(0,G.jsx)(ce,{htmlFor:"radio2",children:o("lost_found")}),(0,G.jsx)(se,{onClick:function(n){return a(n)},type:"radio",id:"radio3",name:"radios",value:"for-free"}),(0,G.jsx)(ce,{htmlFor:"radio3",children:o("in_good_hands")}),i&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(se,{onClick:function(n){return a(n)},type:"radio",id:"radio4",name:"radios",value:"favorite"}),(0,G.jsx)(ce,{htmlFor:"radio4",children:o("favorite_ads")}),(0,G.jsx)(se,{onClick:function(n){return a(n)},type:"radio",id:"radio5",name:"radios",value:"my-ads"}),(0,G.jsx)(ce,{htmlFor:"radio5",children:o("my_ads")})]})]})},le=M.ZP.form(mn||(mn=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n  }\n"]))),pe=M.ZP.input(wn||(wn=(0,z.Z)(["\n  width: 280px;\n  height: 44px;\n  border-radius: 24px;\n  background: var(--white-bckg-clr);\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 400;\n  box-shadow: 3px 8px 14px 0px var(--small-shadow);\n  border: 0;\n  outline: none;\n  padding-left: 20px;\n  padding-right: 62px;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    font-size: 20px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 3px 8px 14px 0px var(--big-shadow);\n  }\n"]))),he=M.ZP.div(bn||(bn=(0,z.Z)(["\n  display: flex;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n\n  @media screen and (min-width: 768px) {\n    right: 60px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    right: 330px;\n  }\n"]))),xe=M.ZP.button(jn||(jn=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 244px;\n  border: 0;\n  outline: none;\n  background: inherit;\n  svg {\n    fill: var(--main-clr-blue);\n  }\n\n  &:hover {\n    svg {\n      fill: var(--main-clr-yellow);\n    }\n  }\n"]))),ue=M.ZP.button(yn||(yn=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 244px;\n  border: 0;\n  outline: none;\n  background: inherit;\n\n  svg {\n    stroke: var(--main-clr-yellow);\n  }\n\n  &:hover {\n    svg {\n      stroke: var(--main-clr-blue);\n    }\n  }\n"]))),fe=function(n){var e=n.setQuery,t=n.setPage,i=(0,a.useState)(""),r=(0,o.Z)(i,2),c=r[0],d=r[1],l=(0,s.$G)().t;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(le,{onSubmit:function(n){n.preventDefault();var i=c;""===i.trim()||i.length<3?console.log("Enter correct query"):(console.log("query :>> ",i),t(1),e(i))},children:[(0,G.jsx)(pe,{type:"text",name:"localInput",value:c,onChange:function(n){var e=n.target.value;d(e)},placeholder:l("search")}),(0,G.jsxs)(he,{children:[(0,G.jsx)(xe,{type:"submit",children:(0,G.jsx)("svg",{width:24,height:24,children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-search"),width:24,height:24})})}),c.length>0&&(0,G.jsx)(ue,{type:"button",onClick:function(n){n.preventDefault(),d(""),e("")},children:(0,G.jsx)("svg",{width:24,height:24,children:(0,G.jsx)("use",{href:"".concat(C.Z,"#icon-cross"),width:24,height:24})})})]})]})," "]})},ge=t(8792),ve=t(8484),me=M.ZP.div(Zn||(Zn=(0,z.Z)(["\ndisplay: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top :68px;\n\n"]))),we=(0,M.ZP)(ve.Z)(kn||(kn=(0,z.Z)(["\n\n\n    .MuiPaginationItem-page.Mui-selected {\n        background-color: var(--main-clr-blue); \n        color: white; \n         padding: 10px;\n         border:none;\n     \n      }\n      .MuiPaginationItem-page:not(.Mui-selected) {\n        background-color:  transparent; \n        color: #111111; \n        border: 1px solid var(--main-clr-blue); \n        padding: 10px;\n        \n      }\n      \n    \n"]))),be=function(n){var e=n.setPage,t=n.totalPageCount,i=n.page;return(0,G.jsx)(me,{children:(0,G.jsx)("div",{children:(0,G.jsx)(we,{onChange:function(n,t){return e(t)},count:t,page:i,variant:"outlined"})})})},je=M.ZP.div(Pn||(Pn=(0,z.Z)(["\n  display: flex;\n  width: 280px;\n  justify-content: space-between;\n  margin-top: 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    margin-top: 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1248px;\n  }\n"]))),ye=function(){var n=(0,a.useState)(!1),e=(0,o.Z)(n,2),t=e[0],d=e[1],l=(0,a.useState)(""),x=(0,o.Z)(l,2),u=x[0],g=x[1],v=(0,a.useState)(""),m=(0,o.Z)(v,2),w=m[0],b=m[1],j=(0,a.useState)("sell"),y=(0,o.Z)(j,2),Z=y[0],P=y[1],C=(0,a.useState)(1),z=(0,o.Z)(C,2),M=z[0],_=z[1],S=(0,a.useState)(0),E=(0,o.Z)(S,2),F=E[0],A=E[1],T=(0,a.useState)(!1),I=(0,o.Z)(T,2),D=I[0],R=I[1],q=(0,s.$G)().t,B=(0,c.a)(),$=B.token,Q=B.isLoggedIn;return(0,a.useEffect)((function(){function n(){return n=(0,r.Z)((0,i.Z)().mark((function n(e,t,r){var o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(e,t,r);case 2:o=n.sent,g(o.notices),R(!1),A(Math.ceil(o.total/12));case 6:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}console.log("rerender :>> ",D),D&&Q&&function(e,t,i){n.apply(this,arguments)}(M,w,$)}),[Q,M,w,D,$]),(0,a.useEffect)((function(){function n(){return n=(0,r.Z)((0,i.Z)().mark((function n(e,t,r,o){var a,c,s;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("favorite"!==t){n.next=8;break}return n.next=3,f(e,r,o);case 3:a=n.sent,g(a.notices),A(Math.ceil(a.total/12)),n.next=22;break;case 8:if("my-ads"!==t){n.next=16;break}return n.next=11,p(e,r,o);case 11:c=n.sent,g(c.notices),A(Math.ceil(c.total/12)),n.next=22;break;case 16:return n.next=19,k(e,t,r);case 19:s=n.sent,g(s.notices),A(Math.ceil(s.total/12));case 22:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(e,t,i,r){n.apply(this,arguments)}(M,Z,w,$)}),[M,Z,w,$]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)("div",{children:[(0,G.jsx)(ge.D,{text:q("notice_page_title")}),(0,G.jsx)(fe,{setQuery:b,setPage:_}),(0,G.jsxs)(je,{children:[(0,G.jsx)(de,{setCategory:P,setPage:_}),(0,G.jsx)(h.Z,{setAlertShowModal:d})]})]}),u&&(0,G.jsx)(re,{articles:u,setAlertShowModal:d,setRerender:R}),t&&(0,G.jsx)(L,{setAlertShowModal:d}),(0,G.jsx)(be,{setPage:_,page:M,totalPageCount:F})]})},Ze=M.ZP.main(Cn||(Cn=(0,z.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\n"]))),ke=function(){return(0,G.jsx)(Ze,{children:(0,G.jsx)(ye,{})})}}}]);
//# sourceMappingURL=411.50550294.chunk.js.map