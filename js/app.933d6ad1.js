(function(e){function t(t){for(var r,u,l=t[0],c=t[1],i=t[2],s=0,p=[];s<l.length;s++)u=l[s],a[u]&&p.push(a[u][0]),a[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3059f0eb"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(e),o=function(t){c.onerror=c.onload=null,clearTimeout(i);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/play-with-animation/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d82":function(e,t,n){},"41cd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header"),n("router-view")],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("app-logo"),n("main-nav"),n("lang-switcher")],1)},l=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"lang-switcher"},e._l(e.languages,function(t,r){return n("li",{key:r,staticClass:"lang-switcher__item"},[n("button",{class:["lang-switcher__button",{active:t===e.selectedLang}],on:{click:function(n){return e.selectLang(n,t)}}},[e._v(" "+e._s(t))])])}),0)},i=[],s={name:"LangSwitcher",data:function(){return{languages:["us","ukr"],selectedLang:""}},methods:{selectLang:function(e,t){e.preventDefault(),this.selectedLang=t}}},f=s,p=(n("6943"),n("2877")),d=Object(p["a"])(f,c,i,!1,null,"3e6df0ac",null),h=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{attrs:{id:"nav"}},e._l(e.links,function(t,r){return n("router-link",{key:r,attrs:{to:t.url}},[e._v(e._s(t.title))])}),1)},v=[],g={data:function(){return{links:[{title:"Home",url:"/"},{title:"About",url:"/about"}]}}},b=g,_=(n("64e8"),Object(p["a"])(b,m,v,!1,null,null,null)),w=_.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"logo",attrs:{href:"#"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],O={},x=Object(p["a"])(O,y,j,!1,null,null,null),k=x.exports,E={name:"app-header",components:{LangSwitcher:h,MainNav:w,AppLogo:k},data:function(){return{}}},L=E,$=Object(p["a"])(L,u,l,!1,null,null,null),P=$.exports,S={components:{AppHeader:P}},A=S,M=(n("5c0b"),Object(p["a"])(A,a,o,!1,null,null,null)),T=M.exports,C=n("8c4f"),H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("p",[e._v("Home content")])])}],q={name:"home",components:{AppHeader:P}},D=q,N=Object(p["a"])(D,H,J,!1,null,null,null),V=N.exports;r["a"].use(C["a"]);var z=new C["a"]({mode:"history",base:"/play-with-animation/",routes:[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),B=n("2f62");r["a"].use(B["a"]);var F=new B["a"].Store({state:{},mutations:{},actions:{}}),G=n("a925");n.d(t,"i18n",function(){return K}),r["a"].use(G["a"]),r["a"].config.productionTip=!1;var I={en:{message:{hello:"hello world"}},ja:{message:{hello:"こんにちは、世界"}}},K=new G["a"]({locale:"ja",messages:I});new r["a"]({router:z,store:F,render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"64e8":function(e,t,n){"use strict";var r=n("0d82"),a=n.n(r);a.a},6943:function(e,t,n){"use strict";var r=n("41cd"),a=n.n(r);a.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.933d6ad1.js.map