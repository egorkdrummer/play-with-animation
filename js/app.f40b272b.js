(function(e){function t(t){for(var r,u,c=t[0],l=t[1],i=t[2],s=0,p=[];s<c.length;s++)u=c[s],o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3059f0eb"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e),a=function(t){l.onerror=l.onload=null,clearTimeout(i);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var i=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/production-sub-path/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d82":function(e,t,n){},"41cd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header"),n("router-view")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("app-logo"),n("main-nav"),n("lang-switcher")],1)},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"lang-switcher"},e._l(e.languages,function(t,r){return n("li",{key:r,staticClass:"lang-switcher__item"},[n("button",{class:["lang-switcher__button",{active:t===e.selectedLang}],on:{click:function(n){return e.selectLang(n,t)}}},[e._v(" "+e._s(t))])])}),0)},i=[],s={name:"LangSwitcher",data:function(){return{languages:["us","ukr"],selectedLang:""}},methods:{selectLang:function(e,t){e.preventDefault(),this.selectedLang=t}}},f=s,p=(n("6943"),n("2877")),d=Object(p["a"])(f,l,i,!1,null,"3e6df0ac",null),h=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{attrs:{id:"nav"}},e._l(e.links,function(t,r){return n("router-link",{key:r,attrs:{to:t.url}},[e._v(e._s(t.title))])}),1)},v=[],b={data:function(){return{links:[{title:"Home",url:"/"},{title:"About",url:"/about"}]}}},g=b,_=(n("64e8"),Object(p["a"])(g,m,v,!1,null,null,null)),w=_.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"logo",attrs:{href:"#"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],O={},x=Object(p["a"])(O,y,j,!1,null,null,null),k=x.exports,E={name:"app-header",components:{LangSwitcher:h,MainNav:w,AppLogo:k},data:function(){return{}}},L=E,$=Object(p["a"])(L,u,c,!1,null,null,null),P=$.exports,S={components:{AppHeader:P}},A=S,M=(n("5c0b"),Object(p["a"])(A,o,a,!1,null,null,null)),T=M.exports,C=n("8c4f"),H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("p",[e._v("Home content")])])}],q={name:"home",components:{AppHeader:P}},D=q,N=Object(p["a"])(D,H,J,!1,null,null,null),V=N.exports;r["a"].use(C["a"]);var z=new C["a"]({mode:"history",base:"/production-sub-path/",routes:[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),B=n("2f62");r["a"].use(B["a"]);var F=new B["a"].Store({state:{},mutations:{},actions:{}}),G=n("a925");n.d(t,"i18n",function(){return K}),r["a"].use(G["a"]),r["a"].config.productionTip=!1;var I={en:{message:{hello:"hello world"}},ja:{message:{hello:"こんにちは、世界"}}},K=new G["a"]({locale:"ja",messages:I});new r["a"]({router:z,store:F,render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"64e8":function(e,t,n){"use strict";var r=n("0d82"),o=n.n(r);o.a},6943:function(e,t,n){"use strict";var r=n("41cd"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.f40b272b.js.map