"use strict";(self.webpackChunkfinal_project_frontend=self.webpackChunkfinal_project_frontend||[]).push([[172],{2424:function(n,e,t){t.d(e,{Z:function(){return d}});var i,r,a=t(168),o=t(7691),s=t(8484),c=o.ZP.div(i||(i=(0,a.Z)(["\ndisplay: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top :68px;\n\n"]))),l=(0,o.ZP)(s.Z)(r||(r=(0,a.Z)(["\n\n\n    .MuiPaginationItem-page.Mui-selected {\n        background-color: var(--main-clr-blue); \n        color: white; \n         padding: 10px;\n         border:none;\n     \n      }\n      .MuiPaginationItem-page:not(.Mui-selected) {\n        background-color:  transparent; \n        color: #111111; \n        border: 1px solid var(--main-clr-blue); \n        padding: 10px;\n        \n      }\n      \n    \n"]))),p=t(3329),d=function(n){var e=n.setPage,t=n.totalPageCount,i=n.page,r=n.setRerender,a=void 0===r?null:r,o=window.innerWidth<=767;return(0,p.jsx)(c,{children:(0,p.jsx)("div",{children:o?(0,p.jsx)(l,{onChange:function(n,t){e(t),a&&a(!0)},count:t,page:i,variant:"outlined",siblingCount:0,size:"small"}):(0,p.jsx)(l,{onChange:function(n,t){e(t),a&&a(!0)},count:t,page:i,variant:"outlined",siblingCount:1})})})}},8792:function(n,e,t){t.d(e,{D:function(){return p}});var i,r,a=t(168),o=t(7691),s=o.ZP.h1(i||(i=(0,a.Z)(["\n  font-family: Manrope;\n  font-size: 24px;\n  font-weight: 700;\n  display: flex;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 48px;\n  }\n"]))),c=o.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    /* width: 704px; */\n    margin-top: 80px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 100%; */\n  }\n"]))),l=t(3329),p=function(n){var e=n.text,t=void 0===e?"Page title":e;return(0,l.jsx)(c,{children:(0,l.jsx)(s,{children:t})})}},4172:function(n,e,t){t.r(e),t.d(e,{default:function(){return rn}});var i,r,a,o,s,c,l,p,d,x,u,h,f,g,m,v,w,y=t(9230),b=t(8792),Z=t(4165),j=t(5861),P=t(9439),k=t(2791),S=t(168),C=t(7691),M=C.ZP.div(i||(i=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 12px;\n  height: 310px;\n  @media screen and (min-width: 768px) {\n    height: 266px;\n  }\n"]))),z=C.ZP.div(r||(r=(0,S.Z)(["\n  height: 252px;\n  width: 100%;\n  margin-bottom: 16px;\n  position: relative;\n"]))),_=C.ZP.img(a||(a=(0,S.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 20px;\n\n  @media screen and (min-width: 1280px) {\n    border-radius: 0px;\n  }\n"]))),D=C.ZP.h2(o||(o=(0,S.Z)(["\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2; \n  white-space: pre-wrap; \n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 33px;\n  letter-spacing: -0.01em;\n  color: #111111;\n"]))),F=C.ZP.p(s||(s=(0,S.Z)(["\n  margin-top: 16px;\n\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #111111;\n"]))),I=C.ZP.div(c||(c=(0,S.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),q=C.ZP.span(l||(l=(0,S.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #888888;\n"]))),X=C.ZP.a(p||(p=(0,S.Z)(["\n  text-decoration: none;\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: right;\n  color: var(--main-clr-blue);\n  transition: var(--default-animation);\n\n  &:hover,\n  &:focus {\n    color: var(--main-clr-yellow);\n  }\n"]))),E=t(3329),G=function(n){var e=n.news,t=(0,y.$G)().t,i=e.url,r=void 0===i?"":i,a=e.text,o=e.title,s=e.imgUrl,c=function(n){var e=new Date(n),t=e.getDate().toString().padStart(2,"0"),i=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getFullYear().toString();return"".concat(t,".").concat(i,".").concat(r)}(e.date);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(z,{children:(0,E.jsx)(_,{src:s,alt:"news"})}),(0,E.jsxs)(M,{children:[(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(D,{children:o}),(0,E.jsx)(F,{children:a})]}),(0,E.jsxs)(I,{children:[(0,E.jsx)(q,{children:c}),(0,E.jsx)(X,{target:"_blank",rel:"noreferrer",href:r,children:t("read_more")})]})]})]})},O=C.ZP.div(d||(d=(0,S.Z)(["\n  margin-top: 60px;\n  position: relative;\n"]))),U=C.ZP.ul(x||(x=(0,S.Z)(["\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n  gap: 24px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    gap: 31px;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 704px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1248px;\n  }\n"]))),$=C.ZP.div(u||(u=(0,S.Z)(["\n  font-size: 24px;\n  color: black;\n  margin: 0 auto;\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n"]))),Q=C.ZP.li(h||(h=(0,S.Z)(["\n  position: relative;\n  height: 578px;\n  background-color: #ffffff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  transition: var(--default-animation);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 556px;\n    flex-basis: calc((100% - 32px) / 2);\n  }\n\n  @media screen and (min-width: 1280px) {\n    height: 534px;\n    flex-basis: calc((100% - 62px) / 3);\n  }\n  animation: moveOut var(--slow-animation) forwards ;\n  :hover:before {\n    animation: moveIn var(--slow-animation) forwards;\n    animation-iteration-count: 1;\n    animation-direction: alternate;\n  }\n  \n  ::before {\n    animation: moveOut var(--slow-animation) forwards ;\n    position: absolute;\n    content: '';\n    top: -20px;\n    display: block;\n    height: 8px;\n    width: 100%;\n    background: var(--main-clr-gr_blue);\n    border-radius: 40px;\n    opacity: 1;\n\n    @media screen and (min-width: 768px) {\n      top: -22px;\n    }\n  }\n\n  @keyframes moveIn {\n    0% {\n      opacity: 1;\n      transform: scaleX(1);\n    }\n    100% {\n      opacity: 0;\n      transform: scaleX(0);\n    }    \n  }\n  @keyframes moveOut {\n    0% {\n      opacity: 0;\n      transform: scaleX(0);\n    }\n    100% {\n      opacity: 1;\n      transform: scaleX(1);\n    }    \n  }\n"]))),R=function(n){var e=n.news;if(!e||0===e.length)return(0,E.jsx)(O,{children:(0,E.jsx)($,{children:(0,E.jsx)("p",{children:"No posts for your query"})})});var t=e.slice(0,12);return(0,E.jsx)(O,{children:(0,E.jsx)(U,{children:t.map((function(n){return(0,E.jsx)(Q,{children:(0,E.jsx)(G,{news:n})},function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}())}))})})},A=t(8466),N=C.ZP.form(f||(f=(0,S.Z)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n  }\n"]))),T=C.ZP.input(g||(g=(0,S.Z)(["\n  width: 280px;\n  height: 44px;\n  border-radius: 24px;\n  background: var(--white-bckg-clr);\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 400;\n  box-shadow: 3px 8px 14px 0px var(--small-shadow);\n  border: 0;\n  outline: none;\n  padding-left: 20px;\n  padding-right: 62px;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    font-size: 20px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 3px 8px 14px 0px var(--big-shadow);\n  }\n"]))),V=C.ZP.div(m||(m=(0,S.Z)(["\n  display: flex;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n\n  // @media screen and (min-width: 768px) {\n  //   right: 60px;\n  // }\n\n  // @media screen and (min-width: 1280px) {\n  //   right: 330px;\n  // }\n"]))),W=C.ZP.button(v||(v=(0,S.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 244px;\n  border: 0;\n  outline: none;\n  background: inherit;\n  svg {\n    fill: var(--main-clr-blue);\n  }\n\n  &:hover {\n    svg {\n      fill: var(--main-clr-yellow);\n    }\n  }\n"]))),Y=C.ZP.button(w||(w=(0,S.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 244px;\n  border: 0;\n  outline: none;\n  background: inherit;\n\n  svg {\n    stroke: var(--main-clr-yellow);\n  }\n\n  &:hover {\n    svg {\n      stroke: var(--main-clr-blue);\n    }\n  }\n"]))),B=function(n){var e=n.setQuery,t=n.setPage,i=(0,k.useState)(""),r=(0,P.Z)(i,2),a=r[0],o=r[1],s=(0,y.$G)().t;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(N,{onSubmit:function(n){n.preventDefault();var i=a;""===i.trim()||i.length<3?console.log("Enter correct query"):(console.log("query :>> ",i),t(1),e(i))},children:[(0,E.jsx)(T,{type:"text",name:"localInput",value:a,onChange:function(n){var e=n.target.value;o(e)},placeholder:s("search")}),(0,E.jsxs)(V,{children:[(0,E.jsx)(W,{type:"submit",children:(0,E.jsx)("svg",{width:24,height:24,children:(0,E.jsx)("use",{href:"".concat(A.Z,"#icon-search"),width:24,height:24})})}),a.length>0&&(0,E.jsx)(Y,{type:"button",onClick:function(n){n.preventDefault(),o(""),e("")},children:(0,E.jsx)("svg",{width:24,height:24,children:(0,E.jsx)("use",{href:"".concat(A.Z,"#icon-cross"),width:24,height:24})})})]})]})," "]})},H=t(2424),J="https://final-project-backend-4o0r.onrender.com/api/news";function K(){return(K=(0,j.Z)((0,Z.Z)().mark((function n(e,t){var i,r;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(J,"?query=").concat(t,"&page=").concat(e));case 3:if((i=n.sent).ok){n.next=6;break}throw new Error("Sorry. Try again later :(");case 6:return n.next=8,i.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var L,nn=function(n,e){return K.apply(this,arguments)},en=function(){var n=(0,k.useState)(""),e=(0,P.Z)(n,2),t=e[0],i=e[1],r=(0,k.useState)(1),a=(0,P.Z)(r,2),o=a[0],s=a[1],c=(0,k.useState)(0),l=(0,P.Z)(c,2),p=l[0],d=l[1],x=(0,k.useState)([]),u=(0,P.Z)(x,2),h=u[0],f=u[1];return(0,k.useEffect)((function(){var n=function(){var n=(0,j.Z)((0,Z.Z)().mark((function n(){var e;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,nn(o,t);case 3:e=n.sent,f(e.articles),d(e.totalPages),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[o,t]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(B,{setQuery:i,setPage:s}),(0,E.jsx)(R,{news:h}),h.length>0&&(0,E.jsx)(H.Z,{setPage:s,page:o,totalPageCount:p})]})},tn=C.ZP.main(L||(L=(0,S.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),rn=function(){var n=(0,y.$G)().t;return(0,E.jsxs)(tn,{children:[(0,E.jsx)(b.D,{text:"".concat(n("header_news"))}),(0,E.jsx)(en,{})]})}}}]);
//# sourceMappingURL=172.791e2d39.chunk.js.map