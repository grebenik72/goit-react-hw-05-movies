"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(n,t,e){e.r(t);var r=e(9439),a=e(1454),c=e(1544),i=e(2791),u=e(7689),o=e(4390),s=e(184);t.default=function(){var n=(0,u.UO)().movieId,t=(0,i.useState)(!0),e=(0,r.Z)(t,2),p=e[0],f=e[1],h=(0,i.useState)([]),l=(0,r.Z)(h,2),d=l[0],x=l[1];return(0,i.useEffect)((function(){n&&(0,o.uV)("/movie",n).then((function(n){x(n.cast)})).catch(o.NI).finally((function(){return f(!1)}))}),[n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Cast:"}),p&&(0,s.jsx)(a.a,{}),0!==d.length?(0,s.jsx)(c.c0,{children:d.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return(0,s.jsxs)(c.iH,{children:[(0,s.jsx)("b",{children:e}),(0,s.jsxs)("p",{children:["Character: ",r]}),(0,s.jsx)("img",{src:a?"http://image.tmdb.org/t/p/w185".concat(a):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:e,width:"100",height:"150"})]},t)}))}):(0,s.jsx)("p",{children:"Sorry! We don't have any information about cast"})]})}},1454:function(n,t,e){e.d(t,{a:function(){return o}});var r,a=e(5119),c=e(168),i=e(6444).ZP.div(r||(r=(0,c.Z)(["\n    text-align: center;\n    margin-top: 150px;\n"]))),u=e(184),o=function(){return(0,u.jsx)(i,{children:(0,u.jsx)(a.s5,{strokeColor:"blue",strokeWidth:"5",animationDuration:"0.75",width:"120",visible:!0})})}},1544:function(n,t,e){e.d(t,{$j:function(){return p},c0:function(){return o},iH:function(){return s}});var r,a,c,i=e(168),u=e(6444),o=u.ZP.ul(r||(r=(0,i.Z)(["\n    display: flex;\n    gap: 30px;\n    align-items: center;\n    flex-wrap: wrap;\n"]))),s=u.ZP.li(a||(a=(0,i.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 5px;\n    width: 150px;\n    max-height: 400px;\n    cursor: pointer;\n    overflow: hidden;\n"]))),p=u.ZP.div(c||(c=(0,i.Z)(["\n    min-height: 160px;\n    display: flex;\n    gap: 8px;\n    flex-direction: column;\n"])))},4390:function(n,t,e){e.d(t,{Hx:function(){return v},NI:function(){return Z},Pu:function(){return p},Y5:function(){return x},bI:function(){return l},uV:function(){return w},vw:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243),u=e(1686),o="https://api.themoviedb.org/3",s="13b0b106d3860aa17f500bd5bf9a1afe",p={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o).concat(t,"?api_key=").concat(s),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"?api_key=").concat(s,"&query=").concat(e),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"/").concat(e,"?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"/").concat(e,"/credits?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o).concat(t,"/").concat(e,"/reviews?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(){u.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",p)}}}]);
//# sourceMappingURL=247.044d3952.chunk.js.map