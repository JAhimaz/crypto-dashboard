(this["webpackJsonpcoingecko-dashboard"]=this["webpackJsonpcoingecko-dashboard"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(28),i=c.n(a),j=(c(37),c(38),c(39),c(40),c(41),c(42),c(43),c(44),c(29)),o=c(30);var l=function(){return Object(n.jsxs)("p",{className:"header-title",children:["_CoinStats Interview Assessment ",Object(n.jsx)(j.a,{icon:o.a})]})},d=c(69),b=c(10),u=c.n(b),h=c(11),O=c(6),x=c(14);var p=function(e){var t=e.coins,c=e.loading,r=e.unit,s=function(e){return e<=1?e.toString():e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return c?Object(n.jsx)("div",{className:"reactive-table",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:"number",children:"#"}),Object(n.jsx)("th",{className:"coin-image"}),Object(n.jsx)("th",{className:"coin",children:"Coin"}),Object(n.jsx)("th",{className:"symbol",children:" "}),Object(n.jsx)("th",{className:"price",children:"Price"}),Object(n.jsx)("th",{className:"Volume",children:"24h Volume"}),Object(n.jsx)("th",{className:"Sparkline",children:"Last 7 Days"})]})}),Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"#"}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{children:"Loading..."}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{children:"Loading..."}),Object(n.jsx)("td",{children:"Loading..."})]})})]})}):Object(n.jsx)("div",{className:"reactive-table",children:Object(n.jsxs)("table",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:"favourite"}),Object(n.jsx)("th",{className:"number",children:"#"}),Object(n.jsx)("th",{className:"coin-image"}),Object(n.jsx)("th",{className:"coin",children:"Coin"}),Object(n.jsx)("th",{className:"symbol",children:" "}),Object(n.jsx)("th",{className:"price",children:"Price"}),Object(n.jsx)("th",{className:"Volume",children:"24h Volume"}),Object(n.jsx)("th",{className:"Sparkline",children:"Last 7 Days"})]}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"fav"}),Object(n.jsx)("td",{children:e.market_cap_rank}),Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.image,className:"coin-icon"})}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.symbol}),Object(n.jsxs)("td",{children:[r," ",s(e.current_price)]}),Object(n.jsxs)("td",{children:[r," ",s(e.total_volume)]}),Object(n.jsx)("td",{children:Object(n.jsx)(x.Sparklines,{data:e.sparkline_in_7d.price,children:e.sparkline_in_7d.price[e.sparkline_in_7d.price.length-1]<e.sparkline_in_7d.price[e.sparkline_in_7d.price.length-2]?Object(n.jsx)(x.SparklinesLine,{color:"red"}):Object(n.jsx)(x.SparklinesLine,{color:"green"})})})]})}))})]})})},m=c(18);var f=function(e){e.coinsPerPage,e.totalCoins;var t=e.activePage,c=e.paginate;return Object(n.jsx)("div",{className:"pagination-bar",children:Object(n.jsx)(m.a,{children:[1,2,3,4,5].map((function(e){return Object(n.jsx)(m.a.Item,{onClick:function(){return c(e)},href:"!#",active:e===t,children:Object(n.jsx)("a",{children:e})},e)}))})})},g=c(68),v=c(12),k=c.n(v);var N=function(e){var t=e.currentCurrency,c=e.chCurrency,s=e.currUnit,a=Object(r.useState)([]),i=Object(O.a)(a,2),j=i[0],o=i[1],l=Object(r.useState)(!1),d=Object(O.a)(l,2),b=d[0],x=d[1];Object(r.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),"https://api.coingecko.com/api/v3/exchange_rates",e.next=4,k.a.get("https://api.coingecko.com/api/v3/exchange_rates");case 4:t=e.sent,o(t.data.rates),x(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(e){return t=j,r=function(t,r){return Object(n.jsx)("div",{children:r.type==e&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{onClick:function(){return function(e,t){c(e),s(t)}(t,r.unit)},className:"",href:"#!",children:[t.toString().toUpperCase()," (",r.unit,")"]})})})},Object.keys(t).map((function(e){return r(e,t[e])}));var t,r};return b?Object(n.jsx)("h2",{children:"loading currencies"}):Object(n.jsxs)("div",{class:"dropdown",children:[Object(n.jsx)(g.a,{class:"dropbtn",children:t.toString().toUpperCase()}),Object(n.jsx)("p",{children:"Crypto"}),p("crypto"),Object(n.jsx)("p",{children:"Fiat"}),p("fiat"),Object(n.jsx)("p",{children:"Commodity"}),p("commodity")]})};var y=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(!1),i=Object(O.a)(a,2),j=i[0],o=i[1],l=Object(r.useState)(1),d=Object(O.a)(l,2),b=d[0],x=d[1],m=Object(r.useState)(20),g=Object(O.a)(m,2),v=g[0],y=(g[1],Object(r.useState)("usd")),_=Object(O.a)(y,2),S=_[0],C=_[1],P=Object(r.useState)("$"),L=Object(O.a)(P,2),w=L[0],F=L[1];return Object(r.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),t="https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(S,"&order=market_cap_desc&per_page=").concat(v,"&page=").concat(b,"&sparkline=true"),e.next=4,k.a.get(t);case 4:c=e.sent,s(c.data),o(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b,S]),Object(n.jsxs)("div",{children:[Object(n.jsx)(N,{currentCurrency:S,chCurrency:function(e){return C(e)},currUnit:function(e){return F(e)}}),Object(n.jsx)(p,{coins:c,loading:j,unit:w}),Object(n.jsx)(f,{coinsPerPage:v,totalPosts:c.length,activePage:b,paginate:function(e){return x(e)}})]})};var _=function(){return Object(n.jsx)(d.a,{fluid:!0,className:"dashboard",children:Object(n.jsx)(y,{fluid:!0})})};var S=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(l,{}),Object(n.jsx)(_,{})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),C()}},[[66,1,2]]]);
//# sourceMappingURL=main.0b6f56ff.chunk.js.map