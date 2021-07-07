(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{35:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var c,a,r,i=t(1),o=t.n(i),s=t(22),l=t.n(s),d=(t(35),t(29)),u=t(5),h=t.n(u),j=t(10),b=t(8),p=t(2),x=t(3),O=t(0),f=x.a.td(c||(c=Object(p.a)(["\nborder: 1px solid #cccccc;\nwidth: 25vh;\n"]))),m=x.a.button(a||(a=Object(p.a)(["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n"])));function g(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)(f,{children:e.name}),Object(O.jsx)(f,{children:e.ticker}),Object(O.jsxs)(f,{children:["$",e.price]}),e.showBalance?Object(O.jsx)(f,{children:e.balance}):null,Object(O.jsx)("td",{children:Object(O.jsx)(m,{onClick:function(n){n.preventDefault(),e.handleRefresh(e.tickerId)},children:"Refresh"})})]})}var v,k,w=x.a.table(r||(r=Object(p.a)(["\n  margin: 50px auto 50px auto;\n  display: inline-block;\n  font-size: 1.4rem;\n"])));function B(e){return Object(O.jsxs)(w,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Ticker"}),Object(O.jsx)("th",{children:"Price"}),e.showBalance?Object(O.jsx)("th",{children:"Balance"}):null,Object(O.jsx)("th",{children:"Actions"})]})}),Object(O.jsx)("tbody",{children:e.coinData.map((function(n){return Object(O.jsx)(g,{handleRefresh:e.handleRefresh,name:n.name,ticker:n.ticker,balance:n.balance,showBalance:e.showBalance,price:n.price,tickerId:n.key},n.key)}))})]})}var y=x.a.section(v||(v=Object(p.a)(["\n    font-size: 1.5rem;\n    background: transparent;\n    border-radius: 3px;\n    border: 2px solid palevioletred;\n    color: palevioletred;\n    margin: 0 1em;\n    padding: 0.25em 1em;\n"]))),S=x.a.button(k||(k=Object(p.a)(["\n    background: navy;\n    border-radius: 3px;\n    border: 2px solid palevioletred;\n    color: palevioletred;\n    margin: 0 1em;\n    padding: 0.25em 1em;\n"])));function C(e){var n=e.showBalance?"Hide Balance":"Show Balance",t=null;e.showBalance&&(t=Object(O.jsxs)(O.Fragment,{children:["Balance: $",e.amount]}));e.showBalance&&e.amount;return Object(O.jsxs)(y,{children:[t,Object(O.jsx)(S,{onClick:e.handleToggleShowBalance,children:n})]})}var F,D,R,T,I=t(26),P=t(27),z=t(30),E=t(28),L=t.p+"static/media/logo.6ce24c58.svg",q=x.a.h1(F||(F=Object(p.a)(["\n    font-size: 4rem;\n    "]))),J=x.a.header(D||(D=Object(p.a)(["\n    background-color: #282c34;\n    min-height: 20vh;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    color: white;\n    "]))),U=x.a.img(R||(R=Object(p.a)(["\n    height: 8rem;\n    pointer-events: none;\n    "]))),$=function(e){Object(z.a)(t,e);var n=Object(E.a)(t);function t(){return Object(I.a)(this,t),n.apply(this,arguments)}return Object(P.a)(t,[{key:"render",value:function(){return Object(O.jsxs)(J,{children:[Object(O.jsx)(U,{src:L,alt:"React Logo"}),Object(O.jsx)(q,{children:"Coin Exchange"})]})}}]),t}(i.Component),A=t(7),H=t.n(A),M=x.a.div(T||(T=Object(p.a)(["\n  text-align: center;\n  background-color: rgb(24, 24, 71);\n  color: #cccccc;\n"]))),N=function(e){return parseFloat(e).toFixed(2)};var G=function(e){var n=o.a.useState(1e4),t=Object(b.a)(n,2),c=t[0],a=(t[1],o.a.useState(!0)),r=Object(b.a)(a,2),s=r[0],l=r[1],u=o.a.useState([]),p=Object(b.a)(u,2),x=p[0],f=p[1],m=function(){var e=Object(j.a)(h.a.mark((function e(){var n,t,c,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==x.length){e.next=12;break}return e.next=3,H.a.get("https://api.coinpaprika.com/v1/coins");case 3:return n=e.sent,t=n.data.slice(0,10).map((function(e){return e.id})),"https://api.coinpaprika.com/v1/tickers/",c=t.map((function(e){return H.a.get("https://api.coinpaprika.com/v1/tickers/"+e)})),e.next=9,Promise.all(c);case 9:a=e.sent,r=a.map((function(e){var n=e.data;return{key:n.id,name:n.name,ticker:n.symbol,balance:0,price:N(n.quotes.USD.price)}})),f(r);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){m()}));var g=function(){var e=Object(j.a)(h.a.mark((function e(n){var t,c,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/".concat(n),e.next=3,H.a.get(t);case 3:c=e.sent,a=N(c.data.quotes.USD.price),r=x.map((function(e){var t=Object(d.a)({},e);return n===e.key&&(t.price=a),t})),f(r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(O.jsxs)(M,{children:[Object(O.jsx)($,{}),Object(O.jsx)(C,{amount:c,showBalance:s,handleToggleShowBalance:function(){l((function(e){return!e}))}}),Object(O.jsx)(B,{coinData:x,handleRefresh:g,showBalance:s})]})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};l.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(G,{})}),document.getElementById("root")),K()}},[[56,1,2]]]);
//# sourceMappingURL=main.7353b0c3.chunk.js.map