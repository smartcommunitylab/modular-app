(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../wc-dettagliofunerale/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$":
/*!********************************************************************************************!*\
  !*** ../wc-dettagliofunerale/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ namespace object ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./olwdpuhx.entry.js": [
		"../wc-dettagliofunerale/dist/esm/es5/build/olwdpuhx.entry.js",
		127
	],
	"./olwdpuhx.sc.entry.js": [
		"../wc-dettagliofunerale/dist/esm/es5/build/olwdpuhx.sc.entry.js",
		128
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../wc-dettagliofunerale/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../wc-dettagliofunerale/dist/esm/es5/wc-dettagliofunerale.components.js":
/*!*******************************************************************************!*\
  !*** ../wc-dettagliofunerale/dist/esm/es5/wc-dettagliofunerale.components.js ***!
  \*******************************************************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
// WcDettagliofunerale: Host Data, ES Module/es5 Target
var COMPONENTS = [["dettaglio-morte","olwdpuhx",1,[["funerale",1,0,1,2],["funeraleState",16],["string",1,0,1,2],["stringState",16]],1]]

/***/ }),

/***/ "../wc-dettagliofunerale/dist/esm/es5/wc-dettagliofunerale.core.js":
/*!*************************************************************************!*\
  !*** ../wc-dettagliofunerale/dist/esm/es5/wc-dettagliofunerale.core.js ***!
  \*************************************************************************/
/*! exports provided: defineCustomElement, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return e; });
/*!
 * WcDettagliofunerale: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)k.push(arguments[f]);for(;k.length>0;){var c=k.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)k.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&k.push(f);t.class=k.join(" "),k.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],$):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"WcDettagliofunerale";return L||(L=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),R[s].u(function i(n){var t=A(n),e=t.s,r=d(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return __webpack_require__("../wc-dettagliofunerale/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$")("./"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!R[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),R[s]=N(s,u,n,i,c,o,r)}if(window.customStyleShim)return R[s].l=window.customStyleShim,R[s].l.initShim().then(t);t()})}undefined&&undefined.v;var i=undefined&&undefined.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=undefined&&undefined.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,j:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=undefined,f=function(){};function applyPolyfills(n){n.k=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===W?s(n,t.C):t.A===x?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.S);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.O&&n.O(n.C),p(n)}function s(n,t){n.A===T&&(n.C=t,n.A=W,0!==n._.length&&M(p,n))}function l(n,t){n.A===T&&(n.A=x,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.O=null,i[o]=t,i[o+W]=e,i[o+x]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===T&&(i&&f?c(t,o):a?l(t,u):n===W?s(t,o):n===x&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,m=void 0,g=void 0,M=function(n,t){S[b]=n,S[b+1]=t,2===(b+=2)&&(g?g(e):O())},j=(y=void 0!==n?n:void 0)||{},k=j.MutationObserver||j.WebKitMutationObserver;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"=="function"?function(){try{var n=Function("return this")().require("vertx");return void 0!==(m=n.T||n.W)?function(){m(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),T=void 0,W=1,x=2,P={error:null},N=0,R=function(){function n(n,t){this.P=n,this.N=new n(o),this.N[_]||h(this.N),w(t)?(this.R=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.N,this.C):(this.length=this.length||0,this.L(t),0===this.R&&s(this.N,this.C))):l(this.N,Error("Array Methods must be provided an Array"))}return n.prototype.L=function(n){for(var t=0;this.A===T&&t<n.length;t++)this.D(n[t],t)},n.prototype.D=function(n,t){var e=this.P,c=e.resolve;c===i?(c=u(n))===r&&n.A!==T?this.F(n.A,t,n.C):"function"!=typeof c?(this.R--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.H(e,t)):this.H(new e(function(t){return t(n)}),t):this.H(c(n),t)},n.prototype.F=function(n,t,e){var r=this.N;r.A===T&&(this.R--,n===x?l(r,e):this.C[t]=e),0===this.R&&s(r,this.C)},n.prototype.H=function(n,t){var e=this;v(n,void 0,function(n){return e.F(W,t,n)},function(n){return e.F(x,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).N},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.q=function(n){g=n},L.U=function(n){M=n},L.B=M,L.I=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.I(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(__webpack_require__.e(/*! import() */ 131).then(__webpack_require__.bind(null, /*! ./polyfills/dom.js */ "../wc-dettagliofunerale/dist/esm/es5/polyfills/dom.js"))),"function"==typeof Object.assign&&Object.entries||t.push(__webpack_require__.e(/*! import() */ 133).then(__webpack_require__.bind(null, /*! ./polyfills/object.js */ "../wc-dettagliofunerale/dist/esm/es5/polyfills/object.js"))),Array.prototype.find&&Array.prototype.includes||t.push(__webpack_require__.e(/*! import() */ 129).then(__webpack_require__.bind(null, /*! ./polyfills/array.js */ "../wc-dettagliofunerale/dist/esm/es5/polyfills/array.js"))),String.prototype.startsWith&&String.prototype.endsWith||t.push(__webpack_require__.e(/*! import() */ 134).then(__webpack_require__.bind(null, /*! ./polyfills/string.js */ "../wc-dettagliofunerale/dist/esm/es5/polyfills/string.js"))),n.fetch||t.push(__webpack_require__.e(/*! import() */ 132).then(__webpack_require__.bind(null, /*! ./polyfills/fetch.js */ "../wc-dettagliofunerale/dist/esm/es5/polyfills/fetch.js"))),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(__webpack_require__.e(/*! import() */ 130).then(__webpack_require__.bind(null, /*! ./polyfills/css-shim.js */ "../wc-dettagliofunerale/dist/esm/es5/polyfills/css-shim.js"))),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(__webpack_require__.e(/*! import() */ 135).then(__webpack_require__.bind(null, /*! ./polyfills/url.js */ "../wc-dettagliofunerale/dist/esm/es5/polyfills/url.js"))),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.G||1===r.G&&!t.Z.Y)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.J.head;if(e.Y)if(1===r.G)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.K.get(f);if(s||t.K.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.V("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.X(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},v=function(n){return null!=n},p=function(n){return n.toLowerCase()},d=function(n){return p(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},h="http://www.w3.org/1999/xlink",y=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.nn(t);f&&f.tn&&f.tn[e]?b(t,e,i):"ref"!==e&&(b(t,e,null==i?"":i),null!=i&&!1!==i||n.Z.en(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(h,p(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(h,p(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.Z.rn(t,e)&&(null==i||!1===i))&&n.Z.en(t,e);else e=p(e)in t?p(e.substring(2)):p(e[2])+e.substring(3),i?i!==r&&n.Z.in(t,e,i,0):n.Z.on(t,e,0);else if(r!==i){var c=w(r),a=w(i),s=c.filter(function(n){return!a.includes(n)}),l=w(t.className).filter(function(n){return!s.includes(n)}),v=a.filter(function(n){return!c.includes(n)&&!l.includes(n)});l.push.apply(l,v),t.className=l.join(" ")}},w=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},b=function(n,t,e){try{n[t]=e}catch(n){}},m=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||y(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||y(n,o,i,u[i],f[i],r,e.o)},g=!1,M=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){M(n,t)}))},j=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},k=[],$={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},A=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{un:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={fn:e[1],cn:!!e[2],un:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,an:e[4]};return{t:r,s:i,tn:Object.assign({},c),G:u,sn:f?f.map(E):void 0}},E=function(n){return{ln:n[0],vn:n[1],pn:!!n[2],dn:!!n[3],hn:!!n[4]}},C=function(n,t){return v(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},S=function(n,t,e){n.yn.add(t),n.wn.has(t)||(n.wn.set(t,!0),n.bn?n.queue.write(function(){return O(n,t,e)}):n.queue.tick(function(){return O(n,t,e)}))},O=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:if(n.wn.delete(r),n.mn.has(r))return[3,12];if(a=n.gn.get(r))return[3,6];if((s=n.Mn.get(r))&&!s["s-rn"])return(s["s-rc"]=s["s-rc"]||[]).push(function(){O(n,r,f)}),[2];if(!(a=W(n,r,n.jn.get(r),f)))return[3,5];o.label=1;case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.j(),o.label=3;case 3:return[3,5];case 4:return i=o.j(),n.kn(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.j(),o.label=9;case 9:return[3,11];case 10:return u=o.j(),n.kn(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u=r.$n.host,f=r.$n.encapsulation,c="shadow"===f&&n.Z.Y,a=i;if(c&&(a=i.shadowRoot),!i["s-rn"]){n.An(n,n.Z,r,i);var s=i["s-sc"];s&&(n.Z.En(i,t(s,!0)),"scoped"===f&&n.Z.En(i,t(s)))}if(o.render||o.hostData||u){n.Cn=!0;var l=o.render&&o.render();n.Cn=!1;var v=e(null,void 0,l),p=n.Sn.get(i)||{};p.i=a,n.Sn.set(i,n.render(i,p,v,c,f))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.Cn=!1,n.kn(t,8,i,!0)}})(n,n.nn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},_=function(n,t,e,r,i,o,u){(u=n.On.get(t))||n.On.set(t,u={}),r!==u[e]&&(u[e]=r,n.gn.get(t)&&!n.Cn&&t["s-rn"]&&S(n,t,i))},T=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},W=function(n,t,e,r,i,o){try{i=new(o=n.nn(t).$n),function(n,t,e,r,i,o){n._n.set(r,e),n.On.has(e)||n.On.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type||t.state){var a=n.On.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Tn)&&v(c=f[t.attr])&&(a[i]=C(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=C(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),T(r,i,function s(t){return(t=n.On.get(n._n.get(this)))&&t[i]},function l(e,r){(r=n._n.get(this))&&(t.state||t.mutable)&&_(n,r,i,e,u)})}})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function u(n,t,e){if(t){var r=n._n.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.Wn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i)}catch(e){i={},n.kn(e,7,t,!0)}return n.gn.set(t,i),i},x=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.nn(r)&&!n.xn.has(r))return!1;if(!x(n,r))return!1}}return!0},P=function(n,t,e,r,i,o){if(n.yn.delete(t),(i=n.Mn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.Mn.delete(t)),n.Pn.length&&!n.yn.size)for(;o=n.Pn.shift();)o()},N=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},d=r[n]=r[n]||{},h=function(n,t,e){var r=new WeakMap,i={J:e,Y:!!e.documentElement.attachShadow,Nn:!1,Rn:function(n){return n.nodeType},V:function(n){return e.createElement(n)},Ln:function(n,t){return e.createElementNS(n,t)},Dn:function(n){return e.createTextNode(n)},Fn:function(n){return e.createComment(n)},X:function(n,t,e){return n.insertBefore(t,e)},Hn:function(n){return n.remove()},qn:function(n,t){return n.appendChild(t)},En:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Un:function(n){return n.childNodes},Bn:function(n){return n.parentNode},In:function(n){return n.nextSibling},Gn:function(n){return n.previousSibling},Qn:function(n){return p(n.nodeName)},Yn:function(n){return n.textContent},Zn:function(n,t){return n.textContent=t},zn:function(n,t){return n.getAttribute(t)},Jn:function(n,t,e){return n.setAttribute(t,e)},en:function(n,t){return n.removeAttribute(t)},rn:function(n,t){return n.hasAttribute(t)},Kn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Vn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.Xn(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},in:function(t,e,o,u,f,c,a,l,v,p){var d=t,h=o,y=r.get(t);p=e+u,y&&y[p]&&y[p](),"string"==typeof a?d=i.Vn(t,a):"object"==typeof a?d=a:(v=e.split(":")).length>1&&(d=i.Vn(t,v[0]),e=v[1]),d&&((v=e.split(".")).length>1&&(e=v[0],h=function(n){n.keyCode===s[v[1]]&&o(n)}),l=i.Nn?{capture:!!f,passive:!!c}:!!f,n.ael(d,e,h,l),y||r.set(t,y={}),y[p]=function(){d&&n.rel(d,e,h,l),y[p]=null})},on:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},nt:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},Xn:function(n,t){return(t=i.Bn(n))&&11===i.Rn(t)?t.host:t},tt:function(n,t,e,r){return n.setAttributeNS(t,e,r)},et:function(n,t){return n.attachShadow(t)}};"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.Nn=!0}}))}catch(n){}return i}(d,r,i),y=h.J.documentElement,w=r["s-defined"]=r["s-defined"]||{},b={Z:h,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.mn.delete(e),n.xn.has(e)||(n.rt=!0,n.yn.add(e),n.xn.set(e,!0),function(n,t,e){for(e=t;e=n.Z.Xn(e);)if(n.it(e)){n.ot.has(t)||(n.Mn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.jn.set(e,function(n,t,e,r,i){if(e.mode||(e.mode=n.Kn(e)),e["s-cr"]||n.zn(e,"ssrv")||n.Y&&1===t.G||(e["s-cr"]=n.Dn(""),e["s-cr"]["s-cn"]=!0,n.X(e,e["s-cr"],n.Un(e)[0])),!n.Y&&1===t.G)try{!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e)}catch(n){}return 1===t.G&&n.Y&&!e.shadowRoot&&n.et(e,{mode:"open"}),r={Tn:{}},t.tn&&Object.keys(t.tn).forEach(function(o){(i=t.tn[o].un)&&(r.Tn[i]=n.zn(e,i))}),r}(n.Z,t,e)),n.ut(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.ft&&function(n,t){for(;t;){if(!n.Bn(t))return 9!==n.Rn(t);t=n.Bn(t)}}(n.Z,t)&&(n.mn.set(t,!0),P(n,t),M(n.Sn.get(t),!0),n.Z.on(t),n.ct.delete(t),n.l&&n.l.removeHost(t),[n.Mn,n.at,n.jn].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o){if(x(n,t)&&n.gn.get(t)&&!n.mn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ot.set(t,!0),n.st.has(t)||(n.st.set(t,!0),t["s-ld"]=void 0,n.Z.En(t,e));try{M(n.Sn.get(t)),(o=n.at.get(t))&&(o.forEach(function(n){return n(t)}),n.at.delete(t))}catch(e){n.kn(e,4,t)}P(n,t)}})(n,this,r)},e.forceUpdate=function(){S(n,this,i)},t.tn){var o=Object.entries(t.tn),u={};o.forEach(function(n){var t=n[0],e=n[1].un;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[p(e)];o&&(t[o]=(null!==i||"boolean"!=typeof t[o])&&i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1];3&o.fn&&T(e,i,function t(){return(n.On.get(this)||{})[i]},function t(e){_(n,this,i,C(o.an,e),r)})})}(n,0,e,i)}}(b,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.tn).map(function(n){return n.un}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},nn:function(n){return a[h.Qn(n)]},lt:function(n){return t[n]},isClient:!0,it:function(n){return!(!w[h.Qn(n)]&&!b.nn(n))},kn:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=j(d,r),ut:function(n,t){var e=!h.Y,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.$n=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.G,e.style,e.styleMode)}catch(t){console.error(t),n.$n=function i(){}}S(b,t,f)})},Cn:!1,bn:!1,ft:!1,An:l,Mn:new WeakMap,K:new WeakMap,xn:new WeakMap,ct:new WeakMap,st:new WeakMap,ot:new WeakMap,_n:new WeakMap,jn:new WeakMap,gn:new WeakMap,mn:new WeakMap,wn:new WeakMap,at:new WeakMap,vt:new WeakMap,Sn:new WeakMap,On:new WeakMap,yn:new Set,Pn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,b.Wn=t.emit=function(n,e,r){return h.nt(n,t.eventNameFn?t.eventNameFn(e):e,r)},d.h=e,d.Context=t,d.onReady=function(){return new Promise(function(n){return b.queue.write(function(){return b.yn.size?b.Pn.push(n):n()})})},b.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,l,p,d,h,y,w,b,M){if(b=l.vchildren[p],e||(o=!0,"slot"===b.vtag&&(r&&t.En(d,r+"-s"),b.vchildren?b.pt=!0:b.dt=!0)),v(b.vtext))b.i=t.Dn(b.vtext);else if(b.dt)b.i=t.Dn("");else{if(y=b.i=g||"svg"===b.vtag?t.Ln("http://www.w3.org/2000/svg",b.vtag):t.V(b.pt?"slot-fb":b.vtag),n.it(y)&&n.ot.delete(c),g="svg"===b.vtag||"foreignObject"!==b.vtag&&g,m(n,null,b,g),v(r)&&y["s-si"]!==r&&t.En(y,y["s-si"]=r),b.vchildren)for(h=0;h<b.vchildren.length;++h)(w=a(i,b,h,y))&&t.qn(y,w);"svg"===b.vtag&&(g=!1)}return b.i["s-hn"]=f,(b.pt||b.dt)&&(b.i["s-sr"]=!0,b.i["s-cr"]=u,b.i["s-sn"]=b.vname||"",(M=i&&i.vchildren&&i.vchildren[p])&&M.vtag===b.vtag&&i.i&&s(i.i)),b.i},s=function(e,r,i,u){n.ft=!0;var c=t.Un(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Hn(u),t.X(y(u),u,h(u)),t.Hn(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.ft=!1},l=function(n,e,r,i,o,u,c,s){var l=n["s-cr"];for((c=l&&t.Bn(l)||n).shadowRoot&&t.Qn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=v(i[o].vtext)?t.Dn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.X(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)v(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.Hn(o["s-ol"]):s(o,!0),t.Hn(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Bn(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;g=r.i&&v(t.Xn(r.i))&&void 0!==r.i.ownerSVGElement,g="svg"===r.vtag||"foreignObject"!==r.vtag&&g,v(r.vtext)?(i=o["s-cr"])?t.Zn(t.Bn(i),r.vtext):e.vtext!==r.vtext&&t.Zn(o,r.vtext):("slot"!==r.vtag&&m(n,e,r,g),v(u)&&v(f)?function(n,e,r,i,o,u,f,c){for(var b=0,m=0,g=e.length-1,M=e[0],j=e[g],k=i.length-1,$=i[0],A=i[k];b<=g&&m<=k;)if(null==M)M=e[++b];else if(null==j)j=e[--g];else if(null==$)$=i[++m];else if(null==A)A=i[--k];else if(d(M,$))w(M,$),M=e[++b],$=i[++m];else if(d(j,A))w(j,A),j=e[--g],A=i[--k];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Bn(M.i)),w(M,A),t.X(n,M.i,t.In(j.i)),M=e[++b],A=i[--k];else if(d(j,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Bn(j.i)),w(j,$),t.X(n,j.i,M.i),j=e[--g],$=i[++m];else{for(o=null,u=b;u<=g;++u)if(e[u]&&v(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}v(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(w(c,$),e[o]=void 0,f=c.i),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.X(y(M.i),f,h(M.i))}b>g?l(n,null==i[k+1]?null:i[k+1].i,r,i,m,k):m>k&&p(e,b,g)}(o,u,r,f):v(f)?(v(e.vtext)&&t.Zn(o,""),l(o,null,r,f,0,f.length-1)):v(u)&&p(u,0,u.length-1)),g&&"svg"===r.vtag&&(g=!1)},b=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.Un(n)).length;i<o;i++)if(e=r[i],1===t.Rn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Rn(r[u]),""!==f){if(1===c&&f===t.zn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.Yn(r[u]).trim()){e.hidden=!0;break}b(e)}},M=[],j=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.Un(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.Un(t.Bn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Rn(o))||8===l)&&""===s||1===l&&null===t.zn(o,"slot")&&""===s||1===l&&t.zn(o,"slot")===s)&&(M.some(function(n){return n.ht===o})||(i=!0,o["s-sn"]=s,M.push({yt:r,ht:o})));1===t.Rn(r)&&j(r)}};return function(a,s,l,v,p,d,h,y,m,g,k,$){if(c=a,f=t.Qn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(j(l.i),h=0;h<M.length;h++)(y=M[h]).ht["s-ol"]||((m=t.Dn(""))["s-nr"]=y.ht,t.X(t.Bn(y.ht),y.ht["s-ol"]=m,y.ht));for(n.ft=!0,h=0;h<M.length;h++){for(y=M[h],k=t.Bn(y.yt),$=t.In(y.yt),m=y.ht["s-ol"];m=t.Gn(m);)if((g=m["s-nr"])&&g&&g["s-sn"]===y.ht["s-sn"]&&k===t.Bn(g)&&(g=t.In(g))&&g&&!g["s-nr"]){$=g;break}(!$&&k!==t.Bn(y.ht)||t.In(y.ht)!==$)&&y.ht!==$&&(t.Hn(y.ht),t.X(k,y.ht,$))}n.ft=!1}return i&&b(l.i),M.length=0,l}}(b,h),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=function(){b.ot.set(y,d.loaded=b.bn=!0),h.nt(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.nn(t);if(r)if(n.ot.has(t))e(t);else{var i=n.at.get(t)||[];i.push(e),n.at.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(b,d,r,r["s-apps"],r["s-cr"]),d.initialized=!0,b},R={},L=!1;

/***/ }),

/***/ "../wc-dettagliofunerale/dist/esm/es5/wc-dettagliofunerale.define.js":
/*!***************************************************************************!*\
  !*** ../wc-dettagliofunerale/dist/esm/es5/wc-dettagliofunerale.define.js ***!
  \***************************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wc-dettagliofunerale.core.js */ "../wc-dettagliofunerale/dist/esm/es5/wc-dettagliofunerale.core.js");
/* harmony import */ var _wc_dettagliofunerale_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wc-dettagliofunerale.components.js */ "../wc-dettagliofunerale/dist/esm/es5/wc-dettagliofunerale.components.js");

// WcDettagliofunerale: Custom Elements Define Library, ES Module/es5 Target




function defineCustomElements(win, opts) {
  return Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElement"])(win, _wc_dettagliofunerale_components_js__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS"], opts);
}


/***/ }),

/***/ "../wc-dettagliofunerale/dist/loader/index.js":
/*!****************************************************!*\
  !*** ../wc-dettagliofunerale/dist/loader/index.js ***!
  \****************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_es5_wc_dettagliofunerale_define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/es5/wc-dettagliofunerale.define.js */ "../wc-dettagliofunerale/dist/esm/es5/wc-dettagliofunerale.define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_es5_wc_dettagliofunerale_define_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"]; });



/***/ }),

/***/ "../wc-info/wc-info/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$":
/*!**********************************************************************************************************************************************!*\
  !*** ../wc-info/wc-info/dist/esm/legacy lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.(system|cjs)\.entry\.js$ namespace object ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./wc-anteprima_2.entry.js": [
		"../wc-info/wc-info/dist/esm/legacy/wc-anteprima_2.entry.js",
		139
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../wc-info/wc-info/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../wc-info/wc-info/dist/esm/legacy/loader.mjs":
/*!*****************************************************!*\
  !*** ../wc-info/wc-info/dist/esm/legacy/loader.mjs ***!
  \*****************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wc-video-5effe51c.js */ "../wc-info/wc-info/dist/esm/legacy/wc-video-5effe51c.js");

var defineCustomElements = function (win, options) {
    return Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["c"])().then(function () {
        Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["wc-anteprima_2", [[1, "wc-anteprima", { "titolo": [1], "img": [1], "datapubblicazione": [1], "dataevento": [1], "orario": [1], "durata": [1], "luogo": [1], "descrizione": [1], "Component_Height": [32], "Component_Border": [32], "Titolo_Visibility": [32], "Titolo_Colore": [32], "Titolo_Size": [32], "Img_Position": [32], "Img_Larghezza": [32], "Img_Altezza": [32], "Img_MarginLeft": [32], "Descrizione_Color": [32], "Mappa_Display": [32], "Display": [32], "DisplayReverse": [32], "Opacity": [32], "OpacityReverse": [32] }], [1, "wc-video", { "titolo": [1], "img": [1], "video": [1], "datapubblicazione": [1], "dataevento": [1], "orario": [1], "durata": [1], "luogo": [1], "descrizione": [1], "Component_Height": [32], "Component_Border": [32], "Titolo_Visibility": [32], "Titolo_Colore": [32], "Titolo_Size": [32], "Img_Position": [32], "Img_Larghezza": [32], "Img_Altezza": [32], "Img_MarginLeft": [32], "Descrizione_Color": [32], "Mappa_Display": [32], "Display": [32], "DisplayReverse": [32], "Opacity": [32], "OpacityReverse": [32], "ImgTop": [32], "MousePointer": [32], "MarginTitolo": [32] }]]]], options);
    });
};



/***/ }),

/***/ "../wc-info/wc-info/dist/esm/legacy/wc-video-5effe51c.js":
/*!***************************************************************!*\
  !*** ../wc-info/wc-info/dist/esm/legacy/wc-video-5effe51c.js ***!
  \***************************************************************/
/*! exports provided: a, b, c, d, e, f, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return registerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getElement; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var NAMESPACE = 'wc-video';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsConstructibleStylesheets = (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var bundleId = cmpMeta.$lazyBundleIds$;
    return __webpack_require__("../wc-info/wc-info/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$")("./" + bundleId + ".entry.js" + '').then(function (importedModule) { return importedModule[cmpMeta.$tagName$.replace(/-/g, '_')]; }, consoleError);
};
var styles = new Map();
var cssVarShim = win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue) { return function (cb) {
    // queue dom reads
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        plt.raf(flush);
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (7 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
/**
 * Namespaces
 */
var SVG_NS = 'http://www.w3.org/2000/svg';
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() */ 136).then(__webpack_require__.t.bind(null, /*! ./css-shim-229ebf7a-229ebf7a.js */ "../wc-info/wc-info/dist/esm/legacy/css-shim-229ebf7a-229ebf7a.js", 7));
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 137).then(__webpack_require__.t.bind(null, /*! ./dom-a0c82e31-a0c82e31.js */ "../wc-info/wc-info/dist/esm/legacy/dom-a0c82e31-a0c82e31.js", 7))];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var XLINK_NS = 'http://www.w3.org/1999/xlink';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, tagName, mode, hostElm) {
    var scopeId = getScopeId(tagName, mode);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style);
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.appendChild(styleElm);
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var styleId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta.$tagName$, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + (tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    return vnode;
};
var Host = {};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class' && !isSvg) {
        // Class
        {
            var oldList_1 = parseClassList(oldValue);
            var baseList_1 = parseClassList(elm.className).filter(function (item) { return !oldList_1.includes(item); });
            elm.className = baseList_1.concat(parseClassList(newValue).filter(function (item) { return !baseList_1.includes(item); })).join(' ');
        }
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        /**
         * Need to manually update attribute if:
         * - memberName is not an attribute
         * - if we are rendering the host element in order to reflect attribute
         * - if it's a SVG, since properties might not work in <svg>
         * - if the newValue is null/undefined or 'false'.
         */
        var isXlinkNs = isSvg && (memberName !== (memberName = memberName.replace(/^xlink\:?/, ''))) ? true : false;
        if (newValue == null || newValue === false) {
            if (isXlinkNs) {
                elm.removeAttributeNS(XLINK_NS, toLowerCase(memberName));
            }
            else {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            if (isXlinkNs) {
                elm.setAttributeNS(XLINK_NS, toLowerCase(memberName), newValue);
            }
            else {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(' '); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var scopeId;
var hostTagName;
var isSvgMode = false;
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else {
        // create element
        elm = newVNode.$elm$ = ((isSvgMode || newVNode.$tag$ === 'svg')
            ? doc.createElementNS(SVG_NS, newVNode.$tag$)
            : doc.createElement(newVNode.$tag$));
        {
            isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        if (newVNode.$tag$ === 'svg') {
            // Only reset the SVG context when we're exiting SVG element
            isSvgMode = false;
        }
    }
    return newVNode.$elm$;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = (parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, before);
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    {
        // test if we're rendering an svg element, or still rendering nodes inside of one
        // only add this to the when the compiler sees we're using an svg somewhere
        isSvgMode = elm &&
            isDef(elm.parentNode) &&
            elm.ownerSVGElement !== undefined;
        isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
    }
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
    if (isSvgMode && newVNode.$tag$ === 'svg') {
        isSvgMode = false;
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    hostTagName = toLowerCase(hostElm.tagName);
    if (isHost(renderFnResults)) {
        renderFnResults.$tag$ = null;
    }
    else {
        renderFnResults = h(null, null, renderFnResults);
    }
    renderFnResults.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = renderFnResults;
    renderFnResults.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    // synchronous patch
    patch(oldVNode, renderFnResults);
};
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) { return __awaiter(_this, void 0, void 0, function () {
    var instance;
    return __generator(this, function (_a) {
        {
            hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
        }
        instance = hostRef.$lazyInstance$;
        // there is no ancestorc omponent or the ancestor component
        // has already fired off its lifecycle update then
        // fire off the initial update
        {
            writeTask(function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); });
        }
        return [2 /*return*/];
    });
}); };
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, instance.render());
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 512 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 512 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        var instance = hostRef.$lazyInstance$;
    }
};
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if ((memberFlags & 31) || (flags & 2 && (memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        });
        if (flags & 1) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var propName = attrNameToPropName_1.get(attrName);
                this[propName] = newValue === null && typeof this[propName] === 'boolean'
                    ? false
                    : newValue;
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var style_1, scopeId_1, ancestorComponent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 256 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 4];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 256 /* hasInitializedComponent */;
                return [4 /*yield*/, loadModule(cmpMeta, hostRef, hmrVersionId)];
            case 1:
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = _a.sent();
                if (!Cstr.isProxied) {
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                fireConnectedCallback(hostRef.$lazyInstance$);
                if (!(!Cstr.isStyleRegistered && Cstr.style)) return [3 /*break*/, 4];
                style_1 = Cstr.style;
                scopeId_1 = getScopeId(cmpMeta.$tagName$, hostRef.$modeName$);
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 3]; /* needsShadowDomShim */
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 138).then(__webpack_require__.bind(null, /*! ./shadow-css-984bac74-549b16dd.js */ "../wc-info/wc-info/dist/esm/legacy/shadow-css-984bac74-549b16dd.js")).then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 2:
                style_1 = _a.sent();
                _a.label = 3;
            case 3:
                registerStyle(scopeId_1, style_1);
                Cstr.isStyleRegistered = true;
                _a.label = 4;
            case 4:
                ancestorComponent = hostRef.$ancestorComponent$;
                {
                    scheduleUpdate(elm, hostRef, cmpMeta, true);
                }
                return [2 /*return*/];
        }
    });
}); };
var fireConnectedCallback = function (instance) {
};
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef = getHostRef(elm);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        fireConnectedCallback(hostRef.$lazyInstance$);
    }
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || '/', win.location.href).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                connectedCallback(this, cmpMeta);
            };
            class_1.prototype.disconnectedCallback = function () {
                disconnectedCallback(this);
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                {
                    var hostRef = getHostRef(this);
                    scheduleUpdate(this, hostRef, cmpMeta, false);
                }
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var createEvent = function (ref, name, flags) {
    var elm = getElement(ref);
    return {
        emit: function (detail) { return elm.dispatchEvent(new (CustomEvent)(name, {
            bubbles: !!(flags & 4 /* Bubbles */),
            composed: !!(flags & 2 /* Composed */),
            cancelable: !!(flags & 1 /* Cancellable */),
            detail: detail
        })); }
    };
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };



/***/ }),

/***/ "../wc-info/wc-info/dist/esm/polyfills/index.js":
/*!******************************************************!*\
  !*** ../wc-info/wc-info/dist/esm/polyfills/index.js ***!
  \******************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var win = window;
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (win.ES6Promise=function(){function t(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<y;t+=2)(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0;y=0}function e(t,r){var e=this,n=new this.constructor(o);void 0===n[O]&&_(n);var i=e._state;if(i){var s=arguments[i-1];g(function(){return v(i,n,s,e._result)})}else l(e,n,t,r);return n}function n(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(o);return u(r,t),r}function o(){}function i(t){try{return t.then}catch(t){return q.error=t,q}}function s(t,r,o){r.constructor===t.constructor&&o===e&&r.constructor.resolve===n?function(t,r){r._state===x?a(t,r._result):r._state===F?f(t,r._result):l(r,void 0,function(r){return u(t,r)},function(r){return f(t,r)})}(t,r):o===q?(f(t,q.error),q.error=null):void 0===o?a(t,r):"function"==typeof o?function(t,r,e){g(function(t){var n=!1,o=function(t,r,e,n){try{t.call(r,e,n)}catch(t){return t}}(e,r,function(e){n||(n=!0,r!==e?u(t,e):a(t,e))},function(r){n||(n=!0,f(t,r))},t._label);!n&&o&&(n=!0,f(t,o))},t)}(t,r,o):a(t,r)}function u(t,r){if(t===r)f(t,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof r;null===r||"object"!==e&&"function"!==e?a(t,r):s(t,r,i(r))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function a(t,r){t._state===P&&(t._result=r,t._state=x,0!==t._subscribers.length&&g(h,t))}function f(t,r){t._state===P&&(t._state=F,t._result=r,g(c,t))}function l(t,r,e,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=r,o[i+x]=e,o[i+F]=n,0===i&&t._state&&g(h,t)}function h(t){var r=t._subscribers,e=t._state;if(0!==r.length){for(var n,o,i=t._result,s=0;s<r.length;s+=3)n=r[s],o=r[s+e],n?v(e,n,o,i):o(i);t._subscribers.length=0}}function v(t,r,e,n){var o="function"==typeof e,i=void 0,s=void 0,c=void 0,l=void 0;if(o){try{i=e(n)}catch(t){q.error=t,i=q}if(i===q?(l=!0,s=i.error,i.error=null):c=!0,r===i)return void f(r,new TypeError("Cannot return same promise"))}else i=n,c=!0;r._state===P&&(o&&c?u(r,i):l?f(r,s):t===x?a(r,i):t===F&&f(r,i))}function _(t){t[O]=U++,t._state=void 0,t._result=void 0,t._subscribers=[]}var p,d=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=0,w=void 0,m=void 0,g=function(t,e){C[y]=t,C[y+1]=e,2===(y+=2)&&(m?m(r):T())},b=(p="undefined"!=typeof window?window:void 0)||{},A=b.MutationObserver||b.WebKitMutationObserver;b="undefined"==typeof self;var E,S,M,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),T=void 0;T=A?(E=0,S=new A(r),M=document.createTextNode(""),S.observe(M,{characterData:!0}),function(){M.data=E=++E%2}):j?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===p&&"function"=="function"?function(){try{var e=Function("return this")().require("vertx");return void 0!==(w=e.runOnLoop||e.runOnContext)?function(){w(r)}:t()}catch(r){return t()}}():t();var O=Math.random().toString(36).substring(2),P=void 0,x=1,F=2,q={error:null},U=0,D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(o),this.promise[O]||_(this.promise),d(r)?(this._remaining=this.length=r.length,this._result=Array(this.length),0===this.length?a(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&a(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var r=0;this._state===P&&r<t.length;r++)this._eachEntry(t[r],r)},t.prototype._eachEntry=function(t,r){var u=this._instanceConstructor,c=u.resolve;c===n?(c=i(t))===e&&t._state!==P?this._settledAt(t._state,r,t._result):"function"!=typeof c?(this._remaining--,this._result[r]=t):u===K?(s(u=new u(o),t,c),this._willSettleAt(u,r)):this._willSettleAt(new u(function(r){return r(t)}),r):this._willSettleAt(c(t),r)},t.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===P&&(this._remaining--,t===F?f(n,e):this._result[r]=e),0===this._remaining&&a(n,this._result)},t.prototype._willSettleAt=function(t,r){var e=this;l(t,void 0,function(t){return e._settledAt(x,r,t)},function(t){return e._settledAt(F,r,t)})},t}(),K=function(){function t(r){if(this[O]=U++,this._result=this._state=void 0,this._subscribers=[],o!==r){if("function"!=typeof r)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,r){try{r(function(r){u(t,r)},function(r){f(t,r)})}catch(r){f(t,r)}}(this,r)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return K.prototype.then=e,K.all=function(t){return new D(this,t).promise},K.race=function(t){var r=this;return d(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,r){return r(new TypeError("Must pass array to race"))})},K.resolve=n,K.reject=function(t){var r=new this(o);return f(r,t),r},K._setScheduler=function(t){m=t},K._setAsap=function(t){g=t},K._asap=g,K.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed")}var r=t.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===e&&!r.cast)return}t.Promise=K},K.Promise=K,K.polyfill(),K}());

  var promises = [];

  if (!win.customElements || (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove))) {
    promises.push(__webpack_require__.e(/*! import() */ 142).then(__webpack_require__.t.bind(null, /*! ./dom.js */ "../wc-info/wc-info/dist/esm/polyfills/dom.js", 7)));
  }

  function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch(e) {
      return false;
    }
  }

  if (
    'function' !== typeof Object.assign || !Object.entries ||
    !Array.prototype.find || !Array.prototype.includes ||
    !String.prototype.startsWith || !String.prototype.endsWith ||
    !win.fetch ||
    !checkIfURLIsSupported() ||
    typeof WeakMap == 'undefined'
  ) {
    promises.push(__webpack_require__.e(/*! import() */ 140).then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "../wc-info/wc-info/dist/esm/polyfills/core-js.js", 7)));
  }
  if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
    promises.push(__webpack_require__.e(/*! import() */ 141).then(__webpack_require__.t.bind(null, /*! ./css-shim.js */ "../wc-info/wc-info/dist/esm/polyfills/css-shim.js", 7)));
  }
  return Promise.all(promises);
}


/***/ }),

/***/ "../wc-info/wc-info/loader/index.mjs":
/*!*******************************************!*\
  !*** ../wc-info/wc-info/loader/index.mjs ***!
  \*******************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/esm/polyfills/index.js */ "../wc-info/wc-info/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _dist_esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/esm/legacy/loader.mjs */ "../wc-info/wc-info/dist/esm/legacy/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _dist_esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });

(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined
  ) {
    return;
  }
  const BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
    return Reflect.construct(
        BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();




/***/ }),

/***/ "../wc-trasporti/wc-trasporti/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$":
/*!*************************************************************************************************!*\
  !*** ../wc-trasporti/wc-trasporti/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ namespace object ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./jdccabjd.entry.js": [
		"../wc-trasporti/wc-trasporti/dist/esm/es5/build/jdccabjd.entry.js",
		"common",
		143
	],
	"./jdccabjd.sc.entry.js": [
		"../wc-trasporti/wc-trasporti/dist/esm/es5/build/jdccabjd.sc.entry.js",
		"common",
		144
	],
	"./ow1he9wh.entry.js": [
		"../wc-trasporti/wc-trasporti/dist/esm/es5/build/ow1he9wh.entry.js",
		145
	],
	"./ow1he9wh.sc.entry.js": [
		"../wc-trasporti/wc-trasporti/dist/esm/es5/build/ow1he9wh.sc.entry.js",
		146
	],
	"./u0bbxdix.entry.js": [
		"../wc-trasporti/wc-trasporti/dist/esm/es5/build/u0bbxdix.entry.js",
		"common",
		147
	],
	"./u0bbxdix.sc.entry.js": [
		"../wc-trasporti/wc-trasporti/dist/esm/es5/build/u0bbxdix.sc.entry.js",
		"common",
		148
	],
	"./wphuzlpk.entry.js": [
		"../wc-trasporti/wc-trasporti/dist/esm/es5/build/wphuzlpk.entry.js",
		"common",
		149
	],
	"./wphuzlpk.sc.entry.js": [
		"../wc-trasporti/wc-trasporti/dist/esm/es5/build/wphuzlpk.sc.entry.js",
		"common",
		150
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../wc-trasporti/wc-trasporti/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.components.js":
/*!***************************************************************************!*\
  !*** ../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.components.js ***!
  \***************************************************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
// mycomponent: Host Data, ES Module/es5 Target
var COMPONENTS = [["ion-col","ow1he9wh",1,[["el",64],["offset",1,0,1,2],["offsetLg",1,0,"offset-lg",2],["offsetMd",1,0,"offset-md",2],["offsetSm",1,0,"offset-sm",2],["offsetXl",1,0,"offset-xl",2],["offsetXs",1,0,"offset-xs",2],["pull",1,0,1,2],["pullLg",1,0,"pull-lg",2],["pullMd",1,0,"pull-md",2],["pullSm",1,0,"pull-sm",2],["pullXl",1,0,"pull-xl",2],["pullXs",1,0,"pull-xs",2],["push",1,0,1,2],["pushLg",1,0,"push-lg",2],["pushMd",1,0,"push-md",2],["pushSm",1,0,"push-sm",2],["pushXl",1,0,"push-xl",2],["pushXs",1,0,"push-xs",2],["size",1,0,1,2],["sizeLg",1,0,"size-lg",2],["sizeMd",1,0,"size-md",2],["sizeSm",1,0,"size-sm",2],["sizeXl",1,0,"size-xl",2],["sizeXs",1,0,"size-xs",2],["win",4,0,0,0,"window"]],1,[["window:resize","onResize",0,1]]],["ion-content","u0bbxdix",1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["el",64],["forceOverscroll",2,0,"force-overscroll",4],["fullscreen",1,0,1,4],["getScrollElement",32],["queue",4,0,0,0,"queue"],["scrollByPoint",32],["scrollEvents",1,0,"scroll-events",4],["scrollToBottom",32],["scrollToPoint",32],["scrollToTop",32],["scrollX",1,0,"scroll-x",4],["scrollY",1,0,"scroll-y",4],["win",4,0,0,0,"window"]],1,[["click","onClick",0,0,1]]],["ion-icon","ow1he9wh",1,[["ariaLabel",2,1,"aria-label",2],["color",1,0,1,2],["doc",4,0,0,0,"document"],["el",64],["flipRtl",1,0,"flip-rtl",4],["icon",1,0,1,2],["ios",1,0,1,2],["isServer",4,0,0,0,"isServer"],["isVisible",16],["lazy",1,0,1,4],["md",1,0,1,2],["mode",1,0,1,2],["name",1,0,1,2],["resourcesUrl",4,0,0,0,"resourcesUrl"],["size",1,0,1,2],["src",1,0,1,2],["svgContent",16],["win",4,0,0,0,"window"]],1],["ion-row","ow1he9wh",1,0,1],["wc-trasporti-map","jdccabjd",1,[["center",1,0,1,2],["element",64],["mainMarkerIcon",1,0,"main-marker-icon",2],["poiMarkerIcon",1,0,"poi-marker-icon",2],["points",1,0,1,2],["showPoints",32],["userpoisition",1,0,1,2],["zoomlevel",1,0,1,8]],1],["wc-trasporti-stop","wphuzlpk",1,[["accessibility",1,0,1,4],["arrows",1,0,1,4],["citta",1,0,1,2],["color",1,0,1,2],["data",1,0,1,2],["dataTT",16],["day",1,0,1,2],["element",64],["fermate",16],["font",1,0,1,2],["fontsize",16],["labeldelay",1,0,1,2],["labeltrips",1,0,1,2],["littletable",1,0,1,4],["name",1,0,1,2],["numero",1,0,1,2],["orari",16],["route",1,0,1,2],["showtrips",1,0,1,4],["tripsvalue",1,0,1,2]],1,[["scroll","handleScroll",0,1]]],["wc-trasporti-table","u0bbxdix",1,[["accessibility",1,0,1,4],["agencyid",1,0,1,2],["arrows",1,0,1,4],["citta",1,0,1,2],["color",1,0,1,2],["data",1,0,1,2],["dataTT",16],["datetable",1,0,1,2],["day",1,0,1,2],["element",64],["emptytable",1,0,1,4],["emptytablelabel",1,0,1,2],["fermate",16],["font",1,0,1,2],["fontsize",16],["labeldelay",1,0,1,2],["labeltrips",1,0,1,2],["lang",1,0,1,2],["littletable",1,0,1,4],["numero",1,0,1,2],["orari",16],["showHeader",1,0,"show-header",4],["showtrips",1,0,1,4],["title",1,0,1,2],["titolo",1,0,1,2],["tripsvalue",1,0,1,2]],1,[["scroll","handleScroll",0,1]]]]

/***/ }),

/***/ "../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.core.js":
/*!*********************************************************************!*\
  !*** ../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.core.js ***!
  \*********************************************************************/
/*! exports provided: defineCustomElement, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return e; });
/* harmony import */ var _mycomponent_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mycomponent.global.js */ "../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.global.js");
/*!
 * mycomponent: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)A.push(arguments[f]);for(;A.length>0;){var c=A.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)A.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&A.push(f);t.class=A.join(" "),A.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],E):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"mycomponent";return q||(q=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),H[s].u(function i(n){var t=C(n),e=t.s,r=d(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return __webpack_require__("../wc-trasporti/wc-trasporti/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$")("./"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!H[s]){var u={},c=e.resourcesUrl||"./";Object(_mycomponent_global_js__WEBPACK_IMPORTED_MODULE_0__["default"])(s,u,n,i,c,o),H[s]=F(s,u,n,i,c,o,r)}if(window.customStyleShim)return H[s].l=window.customStyleShim,H[s].l.initShim().then(t);t()})}undefined&&undefined.v;var i=undefined&&undefined.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=undefined&&undefined.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,j:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=undefined;function applyPolyfills(n){n.k=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<w;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;w=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===W?s(n,t.C):t.A===x?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.O);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.S&&n.S(n.C),p(n)}function s(n,t){n.A===T&&(n.C=t,n.A=W,0!==n._.length&&M(p,n))}function l(n,t){n.A===T&&(n.A=x,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.S=null,i[o]=t,i[o+W]=e,i[o+x]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===T&&(i&&f?c(t,o):a?l(t,u):n===W?s(t,o):n===x&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,b=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},w=0,m=void 0,g=void 0,M=function(n,t){O[w]=n,O[w+1]=t,2===(w+=2)&&(g?g(e):S())},j=(y=void 0!==n?n:void 0)||{},k=j.MutationObserver||j.WebKitMutationObserver;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),S=void 0;S=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"=="function"?function(){try{var n=Function("return this")().require("vertx");return void 0!==(m=n.T||n.W)?function(){m(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),T=void 0,W=1,x=2,P={error:null},N=0,R=function(){function n(n,t){this.P=n,this.N=new n(o),this.N[_]||h(this.N),b(t)?(this.R=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.N,this.C):(this.length=this.length||0,this.L(t),0===this.R&&s(this.N,this.C))):l(this.N,Error("Array Methods must be provided an Array"))}return n.prototype.L=function(n){for(var t=0;this.A===T&&t<n.length;t++)this.D(n[t],t)},n.prototype.D=function(n,t){var e=this.P,c=e.resolve;c===i?(c=u(n))===r&&n.A!==T?this.F(n.A,t,n.C):"function"!=typeof c?(this.R--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.H(e,t)):this.H(new e(function(t){return t(n)}),t):this.H(c(n),t)},n.prototype.F=function(n,t,e){var r=this.N;r.A===T&&(this.R--,n===x?l(r,e):this.C[t]=e),0===this.R&&s(r,this.C)},n.prototype.H=function(n,t){var e=this;v(n,void 0,function(n){return e.F(W,t,n)},function(n){return e.F(x,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).N},L.race=function(n){var t=this;return b(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.q=function(n){g=n},L.U=function(n){M=n},L.B=M,L.I=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.I(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(__webpack_require__.e(/*! import() */ 153).then(__webpack_require__.bind(null, /*! ./polyfills/dom.js */ "../wc-trasporti/wc-trasporti/dist/esm/es5/polyfills/dom.js"))),"function"==typeof Object.assign&&Object.entries||t.push(__webpack_require__.e(/*! import() */ 155).then(__webpack_require__.bind(null, /*! ./polyfills/object.js */ "../wc-trasporti/wc-trasporti/dist/esm/es5/polyfills/object.js"))),Array.prototype.find&&Array.prototype.includes||t.push(__webpack_require__.e(/*! import() */ 151).then(__webpack_require__.bind(null, /*! ./polyfills/array.js */ "../wc-trasporti/wc-trasporti/dist/esm/es5/polyfills/array.js"))),String.prototype.startsWith&&String.prototype.endsWith||t.push(__webpack_require__.e(/*! import() */ 156).then(__webpack_require__.bind(null, /*! ./polyfills/string.js */ "../wc-trasporti/wc-trasporti/dist/esm/es5/polyfills/string.js"))),n.fetch||t.push(__webpack_require__.e(/*! import() */ 154).then(__webpack_require__.bind(null, /*! ./polyfills/fetch.js */ "../wc-trasporti/wc-trasporti/dist/esm/es5/polyfills/fetch.js"))),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(__webpack_require__.e(/*! import() */ 152).then(__webpack_require__.bind(null, /*! ./polyfills/css-shim.js */ "../wc-trasporti/wc-trasporti/dist/esm/es5/polyfills/css-shim.js"))),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(__webpack_require__.e(/*! import() */ 157).then(__webpack_require__.bind(null, /*! ./polyfills/url.js */ "../wc-trasporti/wc-trasporti/dist/esm/es5/polyfills/url.js"))),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.G||1===r.G&&!t.Z.Y)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.J.head;if(e.Y)if(1===r.G)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.K.get(f);if(s||t.K.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.V("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.X(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},v=function(n){return null!=n},p=function(n){return n.toLowerCase()},d=function(n){return p(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},h=function(){},y=function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(b,p(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(b,p(t),e):n.setAttribute(t,e))},b="http://www.w3.org/1999/xlink",w=function(n,t,e,r,i,o,u){if("class"!==e||o)if("style"===e){for(var f in r)i&&null!=i[f]||(/-/.test(f)?t.style.removeProperty(f):t.style[f]="");for(var f in i)r&&i[f]===r[f]||(/-/.test(f)?t.style.setProperty(f,i[f]):t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var c=n.nn(t);c&&c.tn&&c.tn[e]?(g(t,e,i),u&&c.tn[e].en&&y(t,c.tn[e].rn,i,4===c.tn[e].in)):"ref"!==e&&(g(t,e,null==i?"":i),null!=i&&!1!==i||n.Z.on(t,e))}else null!=i&&"key"!==e?y(t,e,i):(o||n.Z.un(t,e)&&(null==i||!1===i))&&n.Z.on(t,e);else e=p(e)in t?p(e.substring(2)):p(e[2])+e.substring(3),i?i!==r&&n.Z.fn(t,e,i,0):n.Z.cn(t,e,0);else if(r!==i){var a=m(r),s=m(i),l=a.filter(function(n){return!s.includes(n)}),v=m(t.className).filter(function(n){return!l.includes(n)}),d=s.filter(function(n){return!a.includes(n)&&!v.includes(n)});v.push.apply(v,d),t.className=v.join(" ")}},m=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},g=function(n,t,e){try{n[t]=e}catch(n){}},M=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||w(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||w(n,o,i,u[i],f[i],r,e.o)},j=!1,k=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){k(n,t)}))},$=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},A=[],E={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},C=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{rn:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={an:e[1],en:!!e[2],rn:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,in:e[4]};return{t:r,s:i,tn:Object.assign({},c),G:u,sn:f?f.map(O):void 0}},O=function(n){return{ln:n[0],vn:n[1],pn:!!n[2],dn:!!n[3],hn:!!n[4]}},S=function(n,t){return v(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},_=function(n,t,e){n.yn.add(t),n.bn.has(t)||(n.bn.set(t,!0),n.wn?n.queue.write(function(){return T(n,t,e)}):n.queue.tick(function(){return T(n,t,e)}))},T=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:if(n.bn.delete(r),n.mn.has(r))return[3,12];if(a=n.gn.get(r))return[3,6];if((s=n.Mn.get(r))&&!s["s-rn"])return(s["s-rc"]=s["s-rc"]||[]).push(function(){T(n,r,f)}),[2];if(!(a=R(n,r,n.jn.get(r),f)))return[3,5];o.label=1;case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.j(),o.label=3;case 3:return[3,5];case 4:return i=o.j(),n.kn(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.j(),o.label=9;case 9:return[3,11];case 10:return u=o.j(),n.kn(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u,f=r.$n.host,c=r.$n.encapsulation,a="shadow"===c&&n.Z.Y,s=i;if(u=function(n,t,e){return n&&Object.keys(n).forEach(function(r){n[r].reflectToAttr&&((e=e||{})[r]=t[r])}),e}(r.$n.properties,o),a&&(s=i.shadowRoot),!i["s-rn"]){n.An(n,n.Z,r,i);var l=i["s-sc"];l&&(n.Z.En(i,t(l,!0)),"scoped"===c&&n.Z.En(i,t(l)))}if(o.render||o.hostData||f||u){n.Cn=!0;var v=o.render&&o.render(),p=void 0;p=o.hostData&&o.hostData(),u&&(p=p?Object.assign(p,u):u),n.Cn=!1;var d=e(null,p,v),h=n.On.get(i)||{};h.i=s,d.o=!0,n.On.set(i,n.render(i,h,d,a,c))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.Cn=!1,n.kn(t,8,i,!0)}})(n,n.nn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},W=function(n,t,e,r,i,o,u){(u=n.Sn.get(t))||n.Sn.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.gn.get(t))){var c=u[N+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){console.error(n)}!n.Cn&&t["s-rn"]&&_(n,t,i)}},x=function(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})},P=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},N="wc-",R=function(n,t,e,r,i,o,u,f){try{i=new(o=n.nn(t).$n),function(n,t,e,r,i,o){n._n.set(r,e),n.Sn.has(e)||n.Sn.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type||t.state){var a=n.Sn.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Tn)&&v(c=f[t.attr])&&(a[i]=S(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=S(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[N+i]=t.watchCallbacks.slice()),P(r,i,function s(t){return(t=n.Sn.get(n._n.get(this)))&&t[i]},function l(e,r){(r=n._n.get(this))&&(t.state||t.mutable)&&W(n,r,i,e,u)})}else if(t.elementRef)x(r,i,e);else if(t.method)x(e,i,r[i].bind(r));else if(t.context){var p=n.Wn(t.context);void 0!==p&&x(r,i,p.getContext&&p.getContext(e)||p)}})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function c(n,t,e){if(t){var r=n._n.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.xn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i);try{if(u=n.Pn.get(t)){for(f=0;f<u.length;f+=2)i[u[f]](u[f+1]);n.Pn.delete(t)}}catch(e){n.kn(e,2,t)}}catch(e){i={},n.kn(e,7,t,!0)}return n.gn.set(t,i),i},L=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.nn(r)&&!n.Nn.has(r))return!1;if(!L(n,r))return!1}}return!0},D=function(n,t,e,r,i,o){if(n.yn.delete(t),(i=n.Mn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.Mn.delete(t)),n.Rn.length&&!n.yn.size)for(;o=n.Rn.shift();)o()},F=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},d=r[n]=r[n]||{},y=function(n,t,e){var r=new WeakMap,i={J:e,Y:!!e.documentElement.attachShadow,Ln:!1,Dn:function(n){return n.nodeType},V:function(n){return e.createElement(n)},Fn:function(n,t){return e.createElementNS(n,t)},Hn:function(n){return e.createTextNode(n)},qn:function(n){return e.createComment(n)},X:function(n,t,e){return n.insertBefore(t,e)},Un:function(n){return n.remove()},Bn:function(n,t){return n.appendChild(t)},En:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},In:function(n){return n.childNodes},Gn:function(n){return n.parentNode},Qn:function(n){return n.nextSibling},Yn:function(n){return n.previousSibling},Zn:function(n){return p(n.nodeName)},zn:function(n){return n.textContent},Jn:function(n,t){return n.textContent=t},Kn:function(n,t){return n.getAttribute(t)},Vn:function(n,t,e){return n.setAttribute(t,e)},on:function(n,t){return n.removeAttribute(t)},un:function(n,t){return n.hasAttribute(t)},Xn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},nt:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.tt(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},fn:function(t,e,o,u,f,c,a,l,v,p){var d=t,h=o,y=r.get(t);p=e+u,y&&y[p]&&y[p](),"string"==typeof a?d=i.nt(t,a):"object"==typeof a?d=a:(v=e.split(":")).length>1&&(d=i.nt(t,v[0]),e=v[1]),d&&((v=e.split(".")).length>1&&(e=v[0],h=function(n){n.keyCode===s[v[1]]&&o(n)}),l=i.Ln?{capture:!!f,passive:!!c}:!!f,n.ael(d,e,h,l),y||r.set(t,y={}),y[p]=function(){d&&n.rel(d,e,h,l),y[p]=null})},cn:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},et:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},tt:function(n,t){return(t=i.Gn(n))&&11===i.Dn(t)?t.host:t},rt:function(n,t,e,r){return n.setAttributeNS(t,e,r)},it:function(n,t){return n.attachShadow(t)}};"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.Ln=!0}}))}catch(n){}return i}(d,r,i),b=y.J.documentElement,w=r["s-defined"]=r["s-defined"]||{},m={Z:y,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.ot.has(e)||(n.ot.set(e,!0),function r(n,t){var e=n.nn(t);e.sn&&e.sn.forEach(function(e){e.pn||n.Z.fn(t,e.ln,function r(n,t,e,i){return function(r){(i=n.gn.get(t))?i[e](r):((i=n.Pn.get(t)||[]).push(e,r),n.Pn.set(t,i))}}(n,t,e.vn),1,e.hn,e.dn)})}(n,e)),n.mn.delete(e),n.Nn.has(e)||(n.ut=!0,n.yn.add(e),n.Nn.set(e,!0),function(n,t,e){for(e=t;e=n.Z.tt(e);)if(n.ft(e)){n.ct.has(t)||(n.Mn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.jn.set(e,function(n,t,e,r,i){if(e.mode||(e.mode=n.Xn(e)),e["s-cr"]||n.Kn(e,"ssrv")||n.Y&&1===t.G||(e["s-cr"]=n.Hn(""),e["s-cr"]["s-cn"]=!0,n.X(e,e["s-cr"],n.In(e)[0])),!n.Y&&1===t.G)try{!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e)}catch(n){}return 1===t.G&&n.Y&&!e.shadowRoot&&n.it(e,{mode:"open"}),r={Tn:{}},t.tn&&Object.keys(t.tn).forEach(function(o){(i=t.tn[o].rn)&&(r.Tn[i]=n.Kn(e,i))}),r}(n.Z,t,e)),n.at(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){if(!n.st&&function(n,t){for(;t;){if(!n.Gn(t))return 9!==n.Dn(t);t=n.Gn(t)}}(n.Z,t)){n.mn.set(t,!0),D(n,t),k(n.On.get(t),!0);var e=n.gn.get(t);e&&e.componentDidUnload&&e.componentDidUnload(),n.Z.cn(t),n.ot.delete(t),n.l&&n.l.removeHost(t),[n.Mn,n.lt,n.jn].forEach(function(n){return n.delete(t)})}})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o,u){if(L(n,t)&&(i=n.gn.get(t))&&!n.mn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ct.set(t,!0),(u=n.vt.has(t))||(n.vt.set(t,!0),t["s-ld"]=void 0,n.Z.En(t,e));try{k(n.On.get(t)),(o=n.lt.get(t))&&(o.forEach(function(n){return n(t)}),n.lt.delete(t)),!u&&i.componentDidLoad&&i.componentDidLoad()}catch(e){n.kn(e,4,t)}D(n,t)}})(n,this,r)},e.forceUpdate=function(){_(n,this,i)},t.tn){var o=Object.entries(t.tn),u={};o.forEach(function(n){var t=n[0],e=n[1].rn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[p(e)];o&&(t[o]=(null!==i||"boolean"!=typeof t[o])&&i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1],u=o.an;3&u?P(e,i,function t(){return(n.Sn.get(this)||{})[i]},function t(e){W(n,this,i,S(o.in,e),r)}):32===u&&x(e,i,h)})}(n,0,e,i)}}(m,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.tn).map(function(n){return n.rn}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},nn:function(n){return a[y.Zn(n)]},Wn:function(n){return t[n]},isClient:!0,ft:function(n){return!(!w[y.Zn(n)]&&!m.nn(n))},kn:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=$(d,r),at:function(n,t){var e=!y.Y,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.$n=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.G,e.style,e.styleMode)}catch(t){console.error(t),n.$n=function i(){}}_(m,t,f)})},Cn:!1,wn:!1,st:!1,An:l,Mn:new WeakMap,K:new WeakMap,Nn:new WeakMap,ot:new WeakMap,vt:new WeakMap,ct:new WeakMap,_n:new WeakMap,jn:new WeakMap,gn:new WeakMap,mn:new WeakMap,bn:new WeakMap,lt:new WeakMap,Pn:new WeakMap,On:new WeakMap,Sn:new WeakMap,yn:new Set,Rn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.enableListener=function(n,t,e,r,i){return function o(n,t,e,r,i,u){if(t){var f=n._n.get(t),c=n.nn(f);if(c&&c.sn)if(r){var a=c.sn.find(function(n){return n.ln===e});a&&n.Z.fn(f,e,function(n){return t[a.vn](n)},1,a.hn,void 0===u?a.dn:!!u,i)}else n.Z.cn(f,e,1)}}(m,n,t,e,r,i)},m.xn=t.emit=function(n,e,r){return y.et(n,t.eventNameFn?t.eventNameFn(e):e,r)},d.h=e,d.Context=t,d.onReady=function(){return new Promise(function(n){return m.queue.write(function(){return m.yn.size?m.Rn.push(n):n()})})},m.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,l,p,d,h,y,b,w,m){if(w=l.vchildren[p],e||(o=!0,"slot"===w.vtag&&(r&&t.En(d,r+"-s"),w.vchildren?w.pt=!0:w.dt=!0)),v(w.vtext))w.i=t.Hn(w.vtext);else if(w.dt)w.i=t.Hn("");else{if(y=w.i=j||"svg"===w.vtag?t.Fn("http://www.w3.org/2000/svg",w.vtag):t.V(w.pt?"slot-fb":w.vtag),n.ft(y)&&n.ct.delete(c),j="svg"===w.vtag||"foreignObject"!==w.vtag&&j,M(n,null,w,j),v(r)&&y["s-si"]!==r&&t.En(y,y["s-si"]=r),w.vchildren)for(h=0;h<w.vchildren.length;++h)(b=a(i,w,h,y))&&t.Bn(y,b);"svg"===w.vtag&&(j=!1)}return w.i["s-hn"]=f,(w.pt||w.dt)&&(w.i["s-sr"]=!0,w.i["s-cr"]=u,w.i["s-sn"]=w.vname||"",(m=i&&i.vchildren&&i.vchildren[p])&&m.vtag===w.vtag&&i.i&&s(i.i)),w.i},s=function(e,r,i,u){n.st=!0;var c=t.In(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Un(u),t.X(y(u),u,h(u)),t.Un(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.st=!1},l=function(n,e,r,i,o,u,c,s){var l=n["s-cr"];for((c=l&&t.Gn(l)||n).shadowRoot&&t.Zn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=v(i[o].vtext)?t.Hn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.X(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)v(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.Un(o["s-ol"]):s(o,!0),t.Un(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Gn(n["s-ol"]?n["s-ol"]:n)},b=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;j=r.i&&v(t.tt(r.i))&&void 0!==r.i.ownerSVGElement,j="svg"===r.vtag||"foreignObject"!==r.vtag&&j,v(r.vtext)?(i=o["s-cr"])?t.Jn(t.Gn(i),r.vtext):e.vtext!==r.vtext&&t.Jn(o,r.vtext):("slot"!==r.vtag&&M(n,e,r,j),v(u)&&v(f)?function(n,e,r,i,o,u,f,c){for(var w=0,m=0,g=e.length-1,M=e[0],j=e[g],k=i.length-1,$=i[0],A=i[k];w<=g&&m<=k;)if(null==M)M=e[++w];else if(null==j)j=e[--g];else if(null==$)$=i[++m];else if(null==A)A=i[--k];else if(d(M,$))b(M,$),M=e[++w],$=i[++m];else if(d(j,A))b(j,A),j=e[--g],A=i[--k];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(M.i)),b(M,A),t.X(n,M.i,t.Qn(j.i)),M=e[++w],A=i[--k];else if(d(j,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(j.i)),b(j,$),t.X(n,j.i,M.i),j=e[--g],$=i[++m];else{for(o=null,u=w;u<=g;++u)if(e[u]&&v(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}v(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(b(c,$),e[o]=void 0,f=c.i),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.X(y(M.i),f,h(M.i))}w>g?l(n,null==i[k+1]?null:i[k+1].i,r,i,m,k):m>k&&p(e,w,g)}(o,u,r,f):v(f)?(v(e.vtext)&&t.Jn(o,""),l(o,null,r,f,0,f.length-1)):v(u)&&p(u,0,u.length-1)),j&&"svg"===r.vtag&&(j=!1)},w=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.In(n)).length;i<o;i++)if(e=r[i],1===t.Dn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Dn(r[u]),""!==f){if(1===c&&f===t.Kn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.zn(r[u]).trim()){e.hidden=!0;break}w(e)}},m=[],g=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.In(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.In(t.Gn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Dn(o))||8===l)&&""===s||1===l&&null===t.Kn(o,"slot")&&""===s||1===l&&t.Kn(o,"slot")===s)&&(m.some(function(n){return n.ht===o})||(i=!0,o["s-sn"]=s,m.push({yt:r,ht:o})));1===t.Dn(r)&&g(r)}};return function(a,s,l,v,p,d,h,y,M,j,k,$){if(c=a,f=t.Zn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,b(s,l),o){for(g(l.i),h=0;h<m.length;h++)(y=m[h]).ht["s-ol"]||((M=t.Hn(""))["s-nr"]=y.ht,t.X(t.Gn(y.ht),y.ht["s-ol"]=M,y.ht));for(n.st=!0,h=0;h<m.length;h++){for(y=m[h],k=t.Gn(y.yt),$=t.Qn(y.yt),M=y.ht["s-ol"];M=t.Yn(M);)if((j=M["s-nr"])&&j&&j["s-sn"]===y.ht["s-sn"]&&k===t.Gn(j)&&(j=t.Qn(j))&&j&&!j["s-nr"]){$=j;break}(!$&&k!==t.Gn(y.ht)||t.Qn(y.ht)!==$)&&y.ht!==$&&(t.Un(y.ht),t.X(k,y.ht,$))}n.st=!1}return i&&w(l.i),m.length=0,l}}(m,y),b["s-ld"]=[],b["s-rn"]=!0,b["s-init"]=function(){m.ct.set(b,d.loaded=m.wn=!0),y.et(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.nn(t);if(r)if(n.ct.has(t))e(t);else{var i=n.lt.get(t)||[];i.push(e),n.lt.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(m,d,r,r["s-apps"],r["s-cr"]),d.initialized=!0,m},H={},q=!1;

/***/ }),

/***/ "../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.define.js":
/*!***********************************************************************!*\
  !*** ../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.define.js ***!
  \***********************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _mycomponent_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mycomponent.core.js */ "../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.core.js");
/* harmony import */ var _mycomponent_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mycomponent.components.js */ "../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.components.js");

// mycomponent: Custom Elements Define Library, ES Module/es5 Target




function defineCustomElements(win, opts) {
  return Object(_mycomponent_core_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElement"])(win, _mycomponent_components_js__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS"], opts);
}


/***/ }),

/***/ "../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.global.js":
/*!***********************************************************************!*\
  !*** ../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.global.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appGlobal; });

function appGlobal(n, x, w, d, r, h) {(function(Context, resourcesUrl){var PLATFORMS_MAP={ipad:isIpad,iphone:isIphone,ios:isIOS,android:isAndroid,phablet:isPhablet,tablet:isTablet,cordova:isCordova,capacitor:isCapacitorNative,electron:isElectron,pwa:isPWA,mobile:isMobile,mobileweb:isMobileWeb,desktop:isDesktop,hybrid:isHybrid};function getPlatforms(t){return setupPlatforms(t)}function isPlatform(t,n){return getPlatforms(t).includes(n)}function setupPlatforms(t){t.Ionic=t.Ionic||{};var n=t.Ionic.platforms;if(null==n){n=t.Ionic.platforms=detectPlatforms(t);var e=t.document.documentElement.classList;n.forEach(function(t){return e.add("plt-"+t)})}return n}function isMobileWeb(t){return isMobile(t)&&!isHybrid(t)}function detectPlatforms(t){return Object.keys(PLATFORMS_MAP).filter(function(n){return PLATFORMS_MAP[n](t)})}function isIpad(t){return testUserAgent(t,/iPad/i)}function isIphone(t){return testUserAgent(t,/iPhone/i)}function isIOS(t){return testUserAgent(t,/iPad|iPhone|iPod/i)}function isAndroid(t){return testUserAgent(t,/android|sink/i)}function isPhablet(t){var n=t.innerWidth,e=t.innerHeight,i=Math.min(n,e),o=Math.max(n,e);return i>390&&i<520&&o>620&&o<800}function isTablet(t){var n=t.innerWidth,e=t.innerHeight,i=Math.min(n,e),o=Math.max(n,e);return i>460&&i<820&&o>780&&o<1400}function isMobile(t){return matchMedia(t,"(any-pointer:coarse)")}function isDesktop(t){return!isMobile(t)}function isHybrid(t){return isCordova(t)||isCapacitorNative(t)}function isCordova(t){return!!(t.cordova||t.phonegap||t.PhoneGap)}function isCapacitorNative(t){var n=t.Capacitor;return!(!n||!n.isNative)}function isElectron(t){return testUserAgent(t,/electron/)}function isPWA(t){return t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone}function testUserAgent(t,n){return n.test(t.navigator.userAgent)}function matchMedia(t,n){return t.matchMedia(n).matches}var Config=function(){function t(t){this.m=new Map(Object.entries(t))}return t.prototype.get=function(t,n){var e=this.m.get(t);return void 0!==e?e:n},t.prototype.getBoolean=function(t,n){void 0===n&&(n=!1);var e=this.m.get(t);return void 0===e?n:"string"==typeof e?"true"===e:!!e},t.prototype.getNumber=function(t,n){var e=parseFloat(this.m.get(t));return isNaN(e)?void 0!==n?n:NaN:e},t.prototype.set=function(t,n){this.m.set(t,n)},t}();function configFromSession(){try{var t=window.sessionStorage.getItem(IONIC_SESSION_KEY);return null!==t?JSON.parse(t):{}}catch(t){return{}}}function saveConfig(t){try{window.sessionStorage.setItem(IONIC_SESSION_KEY,JSON.stringify(t))}catch(t){return}}function configFromURL(){var t={};return window.location.search.slice(1).split("&").map(function(t){return t.split("=")}).map(function(t){var n=t[1];return[decodeURIComponent(t[0]),decodeURIComponent(n)]}).filter(function(t){return startsWith(t[0],IONIC_PREFIX)}).map(function(t){var n=t[1];return[t[0].slice(IONIC_PREFIX.length),n]}).forEach(function(n){t[n[0]]=n[1]}),t}function startsWith(t,n){return t.substr(0,n.length)===n}var IONIC_PREFIX="ionic:",IONIC_SESSION_KEY="ionic-persist-config",win=window,Ionic=win.Ionic=win.Ionic||{};Object.defineProperty(Ionic,"queue",{get:function(){return Context.queue}}),setupPlatforms(win),Context.isPlatform=isPlatform;var configObj=Object.assign({},configFromSession(),{persistConfig:!1},Ionic.config,configFromURL()),config=Ionic.config=Context.config=new Config(configObj);config.getBoolean("persistConfig")&&saveConfig(configObj);var documentElement=document.documentElement,mode=config.get("mode",documentElement.getAttribute("mode")||(isPlatform(win,"ios")?"ios":"md"));Ionic.mode=Context.mode=mode,config.set("mode",mode),documentElement.setAttribute("mode",mode),documentElement.classList.add(mode),config.getBoolean("_testing")&&config.set("animated",!1);
})(x,r);
}

/***/ }),

/***/ "../wc-trasporti/wc-trasporti/dist/loader/index.js":
/*!*********************************************************!*\
  !*** ../wc-trasporti/wc-trasporti/dist/loader/index.js ***!
  \*********************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_es5_mycomponent_define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/es5/mycomponent.define.js */ "../wc-trasporti/wc-trasporti/dist/esm/es5/mycomponent.define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_es5_mycomponent_define_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"]; });



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-action-sheet-controller_8.entry.js",
		"common",
		13
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-action-sheet-ios.entry.js",
		"common",
		14
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-action-sheet-md.entry.js",
		"common",
		15
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-alert-ios.entry.js",
		"common",
		16
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-alert-md.entry.js",
		"common",
		17
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-app_8-ios.entry.js",
		1,
		"common",
		18
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-app_8-md.entry.js",
		1,
		"common",
		19
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-avatar_3-ios.entry.js",
		"common",
		20
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-avatar_3-md.entry.js",
		"common",
		21
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-back-button-ios.entry.js",
		"common",
		22
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-back-button-md.entry.js",
		"common",
		23
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-backdrop-ios.entry.js",
		0,
		"common",
		24
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-backdrop-md.entry.js",
		0,
		"common",
		25
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-button_2-ios.entry.js",
		"common",
		26
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-button_2-md.entry.js",
		"common",
		27
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-card_5-ios.entry.js",
		"common",
		28
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-card_5-md.entry.js",
		"common",
		29
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-checkbox-ios.entry.js",
		"common",
		30
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-checkbox-md.entry.js",
		"common",
		31
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-chip-ios.entry.js",
		"common",
		32
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-chip-md.entry.js",
		"common",
		33
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-col_3.entry.js",
		34
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-datetime_3-ios.entry.js",
		"common",
		35
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-datetime_3-md.entry.js",
		"common",
		36
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-fab_3-ios.entry.js",
		"common",
		37
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-fab_3-md.entry.js",
		"common",
		38
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-img.entry.js",
		39
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-infinite-scroll_2-ios.entry.js",
		"common",
		40
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-infinite-scroll_2-md.entry.js",
		"common",
		41
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-input-ios.entry.js",
		"common",
		42
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-input-md.entry.js",
		"common",
		43
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-item-option_3-ios.entry.js",
		"common",
		44
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-item-option_3-md.entry.js",
		"common",
		45
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-item_8-ios.entry.js",
		"common",
		46
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-item_8-md.entry.js",
		"common",
		47
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-loading-ios.entry.js",
		"common",
		48
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-loading-md.entry.js",
		"common",
		49
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-menu_4-ios.entry.js",
		0,
		"common",
		50
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-menu_4-md.entry.js",
		0,
		"common",
		51
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-modal-ios.entry.js",
		1,
		"common",
		52
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-modal-md.entry.js",
		1,
		"common",
		53
	],
	"./ion-nav_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-nav_4.entry.js",
		1,
		"common",
		54
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-popover-ios.entry.js",
		1,
		"common",
		55
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-popover-md.entry.js",
		1,
		"common",
		56
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-progress-bar-ios.entry.js",
		"common",
		57
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-progress-bar-md.entry.js",
		"common",
		58
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-radio_2-ios.entry.js",
		"common",
		59
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-radio_2-md.entry.js",
		"common",
		60
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-range-ios.entry.js",
		"common",
		61
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-range-md.entry.js",
		"common",
		62
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-refresher_2-ios.entry.js",
		"common",
		63
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-refresher_2-md.entry.js",
		"common",
		64
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-reorder_2-ios.entry.js",
		"common",
		65
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-reorder_2-md.entry.js",
		"common",
		66
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-ripple-effect.entry.js",
		67
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-route_4.entry.js",
		"common",
		68
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-searchbar-ios.entry.js",
		"common",
		69
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-searchbar-md.entry.js",
		"common",
		70
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-segment_2-ios.entry.js",
		"common",
		71
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-segment_2-md.entry.js",
		"common",
		72
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-select_3-ios.entry.js",
		"common",
		73
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-select_3-md.entry.js",
		"common",
		74
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-slide_2-ios.entry.js",
		"common",
		75
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-slide_2-md.entry.js",
		"common",
		76
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-spinner.entry.js",
		"common",
		77
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-split-pane-ios.entry.js",
		78
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-split-pane-md.entry.js",
		79
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-tab-bar_2-ios.entry.js",
		"common",
		80
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-tab-bar_2-md.entry.js",
		"common",
		81
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-tab_2.entry.js",
		"common",
		10
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-text.entry.js",
		"common",
		82
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-textarea-ios.entry.js",
		"common",
		83
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-textarea-md.entry.js",
		"common",
		84
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-toast-ios.entry.js",
		"common",
		85
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-toast-md.entry.js",
		"common",
		86
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-toggle-ios.entry.js",
		"common",
		87
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-toggle-md.entry.js",
		"common",
		88
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-virtual-scroll.entry.js",
		89
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/wcs-comune/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$":
/*!**********************************************************************************************!*\
  !*** ./node_modules/wcs-comune/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ namespace object ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./3jigjkiu.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/3jigjkiu.entry.js",
		96
	],
	"./3jigjkiu.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/3jigjkiu.sc.entry.js",
		97
	],
	"./3xjsggco.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/3xjsggco.entry.js",
		98
	],
	"./3xjsggco.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/3xjsggco.sc.entry.js",
		99
	],
	"./55jrifnu.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/55jrifnu.entry.js",
		100
	],
	"./55jrifnu.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/55jrifnu.sc.entry.js",
		101
	],
	"./a9ze2jpq.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/a9ze2jpq.entry.js",
		"common",
		102
	],
	"./a9ze2jpq.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/a9ze2jpq.sc.entry.js",
		"common",
		103
	],
	"./bmijcbma.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/bmijcbma.entry.js",
		"common",
		104
	],
	"./bmijcbma.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/bmijcbma.sc.entry.js",
		"common",
		105
	],
	"./g0ugp9ng.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/g0ugp9ng.entry.js",
		"common",
		106
	],
	"./g0ugp9ng.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/g0ugp9ng.sc.entry.js",
		"common",
		107
	],
	"./ldobok8w.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/ldobok8w.entry.js",
		108
	],
	"./ldobok8w.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/ldobok8w.sc.entry.js",
		109
	],
	"./mntoagnx.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/mntoagnx.entry.js",
		"common",
		110
	],
	"./mntoagnx.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/mntoagnx.sc.entry.js",
		"common",
		111
	],
	"./np47qduy.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/np47qduy.entry.js",
		"common",
		112
	],
	"./np47qduy.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/np47qduy.sc.entry.js",
		"common",
		113
	],
	"./oqq34gwq.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/oqq34gwq.entry.js",
		114
	],
	"./oqq34gwq.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/oqq34gwq.sc.entry.js",
		115
	],
	"./q714yko0.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/q714yko0.entry.js",
		"common",
		116
	],
	"./q714yko0.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/q714yko0.sc.entry.js",
		"common",
		117
	],
	"./s4kba3uq.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/s4kba3uq.entry.js",
		"common",
		118
	],
	"./s4kba3uq.sc.entry.js": [
		"./node_modules/wcs-comune/dist/esm/es5/build/s4kba3uq.sc.entry.js",
		"common",
		119
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/wcs-comune/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./credits/credits.module": [
		"./src/app/credits/credits.module.ts",
		"credits-credits-module"
	],
	"./pages/detail-event/detail-event.module": [
		"./src/app/module-comune/pages/detail-event/detail-event.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"common",
		"pages-detail-event-detail-event-module"
	],
	"./pages/detail-info/detail-info.module": [
		"./src/app/module-comune/pages/detail-info/detail-info.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"common",
		"pages-detail-info-detail-info-module"
	],
	"./pages/detail-path/detail-path.module": [
		"./src/app/module-comune/pages/detail-path/detail-path.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"common",
		"pages-detail-path-detail-path-module"
	],
	"./pages/detail-poi/detail-poi.module": [
		"./src/app/module-comune/pages/detail-poi/detail-poi.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"common",
		"pages-detail-poi-detail-poi-module"
	],
	"./pages/favourites/favourites.module": [
		"./src/app/pages/favourites/favourites.module.ts",
		"pages-favourites-favourites-module"
	],
	"./pages/funerali/funerali.module": [
		"./src/app/module-funerali/pages/funerali/funerali.module.ts",
		"default~pages-funerali-funerali-module~pages-home-trasporti-home-trasporti-module~pages-list-event-l~db85891d",
		"common",
		"pages-funerali-funerali-module"
	],
	"./pages/home-common/home-common.module": [
		"./src/app/pages/home-common/home-common.module.ts",
		"common",
		"pages-home-common-home-common-module"
	],
	"./pages/home-ps/home-ps.module": [
		"./src/app/module-pulstrade/pages/home-ps/home-ps.module.ts",
		"default~pages-home-ps-home-ps-module~pages-map-spots-map-spots-module",
		"common",
		"pages-home-ps-home-ps-module"
	],
	"./pages/home-settings/home-settings.module": [
		"./src/app/pages/home-settings/home-settings.module.ts",
		"pages-home-settings-home-settings-module"
	],
	"./pages/home-trasporti/home-trasporti.module": [
		"./src/app/module-trasporti/pages/home-trasporti/home-trasporti.module.ts",
		"default~pages-home-trasporti-home-trasporti-module~pages-map-spots-map-spots-module~pages-transport-~936e53eb",
		"default~pages-funerali-funerali-module~pages-home-trasporti-home-trasporti-module~pages-list-event-l~db85891d",
		"common",
		"pages-home-trasporti-home-trasporti-module"
	],
	"./pages/home/home.module": [
		"./src/app/module-comune/pages/home/home.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"common",
		"pages-home-home-module"
	],
	"./pages/list-categories/list-categories.module": [
		"./src/app/module-comune/pages/list-categories/list-categories.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"common",
		"pages-list-categories-list-categories-module"
	],
	"./pages/list-event/list-event.module": [
		"./src/app/module-comune/pages/list-event/list-event.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"default~pages-funerali-funerali-module~pages-home-trasporti-home-trasporti-module~pages-list-event-l~db85891d",
		"common",
		"pages-list-event-list-event-module"
	],
	"./pages/list-farmacie/list-farmacie.module": [
		"./src/app/module-comune/pages/list-farmacie/list-farmacie.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"common",
		"pages-list-farmacie-list-farmacie-module"
	],
	"./pages/list-food/filter-page-food/filter-page-food.module": [
		"./src/app/module-comune/pages/list-food/filter-page-food/filter-page-food.module.ts",
		"common",
		"pages-list-food-filter-page-food-filter-page-food-module"
	],
	"./pages/list-food/list-food.module": [
		"./src/app/module-comune/pages/list-food/list-food.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"common",
		"pages-list-food-list-food-module"
	],
	"./pages/list-path/list-path.module": [
		"./src/app/module-comune/pages/list-path/list-path.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"common",
		"pages-list-path-list-path-module"
	],
	"./pages/list-poi/list-poi.module": [
		"./src/app/module-comune/pages/list-poi/list-poi.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"default~pages-funerali-funerali-module~pages-home-trasporti-home-trasporti-module~pages-list-event-l~db85891d",
		"common",
		"pages-list-poi-list-poi-module"
	],
	"./pages/list-rh/filter-page-rh/filter-page-rh.module": [
		"./src/app/module-comune/pages/list-rh/filter-page-rh/filter-page-rh.module.ts",
		"common",
		"pages-list-rh-filter-page-rh-filter-page-rh-module"
	],
	"./pages/list-rh/list-rh.module": [
		"./src/app/module-comune/pages/list-rh/list-rh.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"common",
		"pages-list-rh-list-rh-module"
	],
	"./pages/map-path/map-path.module": [
		"./src/app/module-comune/pages/map-path/map-path.module.ts",
		"common",
		"pages-map-path-map-path-module"
	],
	"./pages/map-spots/map-spots.module": [
		"./src/app/module-trasporti/pages/map-spots/map-spots.module.ts",
		"default~pages-home-trasporti-home-trasporti-module~pages-map-spots-map-spots-module~pages-transport-~936e53eb",
		"default~pages-home-ps-home-ps-module~pages-map-spots-map-spots-module",
		"common",
		"pages-map-spots-map-spots-module"
	],
	"./pages/map/map.module": [
		"./src/app/module-comune/pages/map/map.module.ts",
		"pages-map-map-module"
	],
	"./pages/notification/notification.module": [
		"./src/app/module-pulstrade/pages/notification/notification.module.ts",
		"pages-notification-notification-module"
	],
	"./pages/notizie/notizie.module": [
		"./src/app/module-info/pages/notizie/notizie.module.ts",
		"common",
		"pages-notizie-notizie-module"
	],
	"./pages/profile/profile.module": [
		"./src/app/pages/profile/profile.module.ts",
		"pages-profile-profile-module"
	],
	"./pages/search/search.module": [
		"./src/app/module-pulstrade/pages/search/search.module.ts",
		"pages-search-search-module"
	],
	"./pages/setting/setting.module": [
		"./src/app/pages/setting/setting.module.ts",
		"pages-setting-setting-module"
	],
	"./pages/street-detail/street-detail.module": [
		"./src/app/module-pulstrade/pages/street-detail/street-detail.module.ts",
		"pages-street-detail-street-detail-module"
	],
	"./pages/tourist-services/tourist-services.module": [
		"./src/app/module-comune/pages/tourist-services/tourist-services.module.ts",
		"default~pages-detail-event-detail-event-module~pages-detail-info-detail-info-module~pages-detail-pat~3194840c",
		"common",
		"pages-tourist-services-tourist-services-module"
	],
	"./pages/transport-list/transport-list.module": [
		"./src/app/module-trasporti/pages/transport-list/transport-list.module.ts",
		"default~pages-home-trasporti-home-trasporti-module~pages-map-spots-map-spots-module~pages-transport-~936e53eb",
		"common",
		"pages-transport-list-transport-list-module"
	],
	"./pages/transport-tt/transport-tt.module": [
		"./src/app/module-trasporti/pages/transport-tt/transport-tt.module.ts",
		"default~pages-home-trasporti-home-trasporti-module~pages-map-spots-map-spots-module~pages-transport-~936e53eb",
		"common",
		"pages-transport-tt-transport-tt-module"
	],
	"./pages/video/video.module": [
		"./src/app/module-info/pages/video/video.module.ts",
		"common",
		"pages-video-video-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
    // { path: 'home', loadChildren: './module-comune/web-components.module#ComuneModule' },
    { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
    { path: 'home-common', loadChildren: './pages/home-common/home-common.module#HomeCommonPageModule' },
    { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
    { path: 'favourites', loadChildren: './pages/favourites/favourites.module#FavouritesPageModule' },
    { path: 'credits', loadChildren: './credits/credits.module#CreditsPageModule' },
    { path: 'home-settings', loadChildren: './pages/home-settings/home-settings.module#HomeSettingsPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n   <ion-router-outlet id=\"content1\"></ion-router-outlet>\n</ion-app>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_hot_code_push_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/hot-code-push/ngx */ "./node_modules/@ionic-native/hot-code-push/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, config, setting, translate, hotCodePush) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.config = config;
        this.setting = setting;
        this.translate = translate;
        this.hotCodePush = hotCodePush;
        this.sideMenu().then(function (res) {
            _this.navigate = res;
            _this.initializeApp();
        });
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // if (window.StatusBar) {
            //   StatusBar.overlaysWebView(true);            
            //   StatusBar.styleDefault();
            // }
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
            _this.updateApp();
        });
        this.myLanguage = this.setting.getUserLanguage();
        if (this.myLanguage) {
            if (this.myLanguage.indexOf('it') > -1) {
                this.myLanguage = 'it';
            }
            if (this.myLanguage.indexOf('en') > -1) {
                this.myLanguage = 'en';
            }
            if (this.myLanguage.indexOf('de') > -1) {
                this.myLanguage = 'de';
            }
            window[this.config.getAppModuleName()]['language'] = this.myLanguage;
            this.translate.setDefaultLang(this.myLanguage);
        }
    };
    AppComponent.prototype.updateApp = function () {
        this.hotCodePush.fetchUpdate({}).then(function (data) {
            console.log('Update available');
        });
    };
    AppComponent.prototype.sideMenu = function () {
        return this.config.loadMenu();
    };
    AppComponent.prototype.getPageTitle = function (page) {
        return page.title[window[this.config.getAppModuleName()]['language']];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _ionic_native_hot_code_push_ngx__WEBPACK_IMPORTED_MODULE_7__["HotCodePush"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initializeAppSetting, initializeAppGeo, initializeAppConfig, HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeAppSetting", function() { return initializeAppSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeAppGeo", function() { return initializeAppGeo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeAppConfig", function() { return initializeAppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _module_comune_web_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module-comune/web-components.module */ "./src/app/module-comune/web-components.module.ts");
/* harmony import */ var _module_trasporti_module_trasporti_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module-trasporti/module-trasporti.module */ "./src/app/module-trasporti/module-trasporti.module.ts");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _services_geo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _shared_popover_popover_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/popover/popover.component */ "./src/app/shared/popover/popover.component.ts");
/* harmony import */ var _module_pulstrade_module_pulstrade_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./module-pulstrade/module-pulstrade.module */ "./src/app/module-pulstrade/module-pulstrade.module.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _module_info_web_components_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./module-info/web-components.module */ "./src/app/module-info/web-components.module.ts");
/* harmony import */ var _module_funerali_web_components_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./module-funerali/web-components.module */ "./src/app/module-funerali/web-components.module.ts");
/* harmony import */ var _ionic_native_hot_code_push_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/hot-code-push/ngx */ "./node_modules/@ionic-native/hot-code-push/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























function initializeAppSetting(appInitService) {
    return function () {
        return appInitService.Init();
    };
}
function initializeAppGeo(geoService) {
    return function () {
        return geoService.Init();
    };
}
function initializeAppConfig(configService) {
    return function () {
        return configService.Init();
    };
}
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/common/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _shared_popover_popover_component__WEBPACK_IMPORTED_MODULE_17__["PopoverComponent"]],
            entryComponents: [_shared_popover_popover_component__WEBPACK_IMPORTED_MODULE_17__["PopoverComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_19__["DragulaModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                    },
                    isolate: true
                }),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
                _module_comune_web_components_module__WEBPACK_IMPORTED_MODULE_8__["ComuneModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _module_pulstrade_module_pulstrade_module__WEBPACK_IMPORTED_MODULE_18__["ModulePulstradeModule"].forRoot(),
                _module_funerali_web_components_module__WEBPACK_IMPORTED_MODULE_21__["FuneraliModule"].forRoot(),
                _module_info_web_components_module__WEBPACK_IMPORTED_MODULE_20__["InfoModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _module_trasporti_module_trasporti_module__WEBPACK_IMPORTED_MODULE_9__["TrasportiModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"],
                _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["Geolocation"],
                _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_23__["CallNumber"],
                _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_24__["InAppBrowser"],
                _ionic_native_hot_code_push_ngx__WEBPACK_IMPORTED_MODULE_22__["HotCodePush"],
                _services_setting_service__WEBPACK_IMPORTED_MODULE_10__["SettingService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], useFactory: initializeAppConfig, deps: [_services_config_service__WEBPACK_IMPORTED_MODULE_16__["ConfigService"]], multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], useFactory: initializeAppSetting, deps: [_services_setting_service__WEBPACK_IMPORTED_MODULE_10__["SettingService"]], multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], useFactory: initializeAppGeo, deps: [_services_geo_service__WEBPACK_IMPORTED_MODULE_11__["GeoService"]], multi: true },
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/module-comune/app-initialize.ts":
/*!*************************************************!*\
  !*** ./src/app/module-comune/app-initialize.ts ***!
  \*************************************************/
/*! exports provided: appInitialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitialize", function() { return appInitialize; });
/* harmony import */ var wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wcs-comune/dist/loader */ "./node_modules/wcs-comune/dist/loader/index.js");





function appInitialize() {
    return function () {
        var win = window;
        if (typeof win !== 'undefined') {
            // Define all of our custom elements
            Object(wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
            Object(wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
            Object(wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
            Object(wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
            Object(wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
        }
    };
}


/***/ }),

/***/ "./src/app/module-comune/lazy.routing.ts":
/*!***********************************************!*\
  !*** ./src/app/module-comune/lazy.routing.ts ***!
  \***********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    // { path: '', redirectTo: 'home-common', pathMatch: 'full' },
    { path: 'home-page', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'map', loadChildren: './pages/map/map.module#MapModule' },
    { path: 'list-path', loadChildren: './pages/list-path/list-path.module#ListPathPageModule' },
    { path: 'list-poi', loadChildren: './pages/list-poi/list-poi.module#ListPoiPageModule' },
    { path: 'list-event', loadChildren: './pages/list-event/list-event.module#ListEventPageModule' },
    { path: 'list-rh', loadChildren: './pages/list-rh/list-rh.module#ListRHPageModule' },
    { path: 'detail-poi', loadChildren: './pages/detail-poi/detail-poi.module#DetailPoiPageModule' },
    { path: 'detail-path', loadChildren: './pages/detail-path/detail-path.module#DetailPathPageModule' },
    { path: 'list-categories', loadChildren: './pages/list-categories/list-categories.module#ListCategoriesPageModule' },
    { path: 'detail-path', loadChildren: './pages/detail-path/detail-path.module#DetailPathPageModule' },
    { path: 'map-path', loadChildren: './pages/map-path/map-path.module#MapPathPageModule' },
    { path: 'list-food', loadChildren: './pages/list-food/list-food.module#ListFoodPageModule' },
    { path: 'farmacie', loadChildren: './pages/list-farmacie/list-farmacie.module#ListFarmaciePageModule' },
    { path: 'farmacie', loadChildren: './pages/list-farmacie/list-farmacie.module#ListFarmaciePageModule' },
    { path: 'detail-info', loadChildren: './pages/detail-info/detail-info.module#DetailInfoPageModule' },
    { path: 'tourist-services', loadChildren: './pages/tourist-services/tourist-services.module#TouristServicesPageModule' },
    { path: 'filter-page-food', loadChildren: './pages/list-food/filter-page-food/filter-page-food.module#FilterPageFoodPageModule' },
    { path: 'filter-page-rh', loadChildren: './pages/list-rh/filter-page-rh/filter-page-rh.module#FilterPageRhPageModule' },
    { path: 'detail-event', loadChildren: './pages/detail-event/detail-event.module#DetailEventPageModule' },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/module-comune/wc-map/wc-map.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/module-comune/wc-map/wc-map.component.ts ***!
  \**********************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var wcs_comune__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wcs-comune */ "./node_modules/wcs-comune/dist/esm/index.js");
/* harmony import */ var wcs_comune__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wcs_comune__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-map',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/module-comune/wc-path/wc-path.component.ts":
/*!************************************************************!*\
  !*** ./src/app/module-comune/wc-path/wc-path.component.ts ***!
  \************************************************************/
/*! exports provided: PathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathComponent", function() { return PathComponent; });
/* harmony import */ var wcs_comune__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wcs-comune */ "./node_modules/wcs-comune/dist/esm/index.js");
/* harmony import */ var wcs_comune__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wcs_comune__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PathComponent = /** @class */ (function () {
    function PathComponent() {
    }
    PathComponent.prototype.ngOnInit = function () {
        //qui va la logica che gestisce menu e sottomenu e i parametri di input
    };
    PathComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-path',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [])
    ], PathComponent);
    return PathComponent;
}());



/***/ }),

/***/ "./src/app/module-comune/wc-poi/wc-poi.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/module-comune/wc-poi/wc-poi.component.ts ***!
  \**********************************************************/
/*! exports provided: PoiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoiComponent", function() { return PoiComponent; });
/* harmony import */ var wcs_comune__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wcs-comune */ "./node_modules/wcs-comune/dist/esm/index.js");
/* harmony import */ var wcs_comune__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wcs_comune__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoiComponent = /** @class */ (function () {
    function PoiComponent() {
    }
    PoiComponent.prototype.ngOnInit = function () {
        //qui va la logica che gestisce menu e sottomenu e i parametri di input
    };
    PoiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-poi',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [])
    ], PoiComponent);
    return PoiComponent;
}());



/***/ }),

/***/ "./src/app/module-comune/wc-tabs/wc-tabs.component.ts":
/*!************************************************************!*\
  !*** ./src/app/module-comune/wc-tabs/wc-tabs.component.ts ***!
  \************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var wcs_comune__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wcs-comune */ "./node_modules/wcs-comune/dist/esm/index.js");
/* harmony import */ var wcs_comune__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wcs_comune__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wc-tabs',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/module-comune/web-components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/module-comune/web-components.module.ts ***!
  \********************************************************/
/*! exports provided: HttpLoaderFactory, ComuneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComuneModule", function() { return ComuneModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-initialize */ "./src/app/module-comune/app-initialize.ts");
/* harmony import */ var _wc_path_wc_path_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wc-path/wc-path.component */ "./src/app/module-comune/wc-path/wc-path.component.ts");
/* harmony import */ var _wc_poi_wc_poi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wc-poi/wc-poi.component */ "./src/app/module-comune/wc-poi/wc-poi.component.ts");
/* harmony import */ var _wc_tabs_wc_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wc-tabs/wc-tabs.component */ "./src/app/module-comune/wc-tabs/wc-tabs.component.ts");
/* harmony import */ var _wc_map_wc_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wc-map/wc-map.component */ "./src/app/module-comune/wc-map/wc-map.component.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _lazy_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lazy.routing */ "./src/app/module-comune/lazy.routing.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { LoadingModalComponent } from '../shared/loading-modal/loading-modal/loading-modal.component';
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var ComuneModule = /** @class */ (function () {
    function ComuneModule() {
    }
    ComuneModule_1 = ComuneModule;
    ComuneModule.forRoot = function () {
        return {
            ngModule: ComuneModule_1,
            providers: [
                _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: _app_initialize__WEBPACK_IMPORTED_MODULE_2__["appInitialize"],
                    multi: true
                }
            ]
        };
    };
    var ComuneModule_1;
    ComuneModule = ComuneModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                    },
                    isolate: true
                }),
                _lazy_routing__WEBPACK_IMPORTED_MODULE_8__["routing"]
            ],
            declarations: [
                _wc_poi_wc_poi_component__WEBPACK_IMPORTED_MODULE_4__["PoiComponent"],
                // LoadingModalComponent,
                _wc_path_wc_path_component__WEBPACK_IMPORTED_MODULE_3__["PathComponent"],
                _wc_tabs_wc_tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"],
                _wc_map_wc_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]
            ],
            exports: [
                _wc_poi_wc_poi_component__WEBPACK_IMPORTED_MODULE_4__["PoiComponent"],
                _wc_path_wc_path_component__WEBPACK_IMPORTED_MODULE_3__["PathComponent"],
                _wc_tabs_wc_tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"],
                _wc_map_wc_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]
            ],
            entryComponents: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ComuneModule);
    return ComuneModule;
}());



/***/ }),

/***/ "./src/app/module-funerali/app-initialize.ts":
/*!***************************************************!*\
  !*** ./src/app/module-funerali/app-initialize.ts ***!
  \***************************************************/
/*! exports provided: appInitialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitialize", function() { return appInitialize; });
/* harmony import */ var wcs_dettagliofunerale_dist_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wcs-dettagliofunerale/dist/loader */ "../wc-dettagliofunerale/dist/loader/index.js");

function appInitialize() {
    return function () {
        var win = window;
        if (typeof win !== 'undefined') {
            // Define all of our custom elements
            //WALoader(win);
            Object(wcs_dettagliofunerale_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
        }
    };
}


/***/ }),

/***/ "./src/app/module-funerali/lazy.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/module-funerali/lazy.routing.ts ***!
  \*************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    { path: 'funerali', loadChildren: './pages/funerali/funerali.module#FuneraliPageModule' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/module-funerali/web-components.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/module-funerali/web-components.module.ts ***!
  \**********************************************************/
/*! exports provided: FuneraliModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuneraliModule", function() { return FuneraliModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-initialize */ "./src/app/module-funerali/app-initialize.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _lazy_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy.routing */ "./src/app/module-funerali/lazy.routing.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FuneraliModule = /** @class */ (function () {
    function FuneraliModule() {
    }
    FuneraliModule_1 = FuneraliModule;
    FuneraliModule.forRoot = function () {
        return {
            ngModule: FuneraliModule_1,
            providers: [
                _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
                _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: _app_initialize__WEBPACK_IMPORTED_MODULE_2__["appInitialize"],
                    multi: true
                }
            ]
        };
    };
    var FuneraliModule_1;
    FuneraliModule = FuneraliModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _lazy_routing__WEBPACK_IMPORTED_MODULE_4__["routing"]
            ],
            declarations: [],
            exports: [],
            entryComponents: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FuneraliModule);
    return FuneraliModule;
}());



/***/ }),

/***/ "./src/app/module-info/app-initialize.ts":
/*!***********************************************!*\
  !*** ./src/app/module-info/app-initialize.ts ***!
  \***********************************************/
/*! exports provided: appInitialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitialize", function() { return appInitialize; });
/* harmony import */ var wcs_info_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wcs-info/loader */ "../wc-info/wc-info/loader/index.mjs");

function appInitialize() {
    return function () {
        var win = window;
        if (typeof win !== 'undefined') {
            // Define all of our custom elements
            Object(wcs_info_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
        }
    };
}


/***/ }),

/***/ "./src/app/module-info/lazy.routing.ts":
/*!*********************************************!*\
  !*** ./src/app/module-info/lazy.routing.ts ***!
  \*********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    { path: 'notizie', loadChildren: './pages/notizie/notizie.module#NotiziePageModule' },
    { path: 'video', loadChildren: './pages/video/video.module#VideoPageModule' },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/module-info/web-components.module.ts":
/*!******************************************************!*\
  !*** ./src/app/module-info/web-components.module.ts ***!
  \******************************************************/
/*! exports provided: HttpLoaderFactory, InfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModule", function() { return InfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-initialize */ "./src/app/module-info/app-initialize.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _lazy_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy.routing */ "./src/app/module-info/lazy.routing.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/info/i18n/', '.json');
}
var InfoModule = /** @class */ (function () {
    function InfoModule() {
    }
    InfoModule_1 = InfoModule;
    InfoModule.forRoot = function () {
        return {
            ngModule: InfoModule_1,
            providers: [
                _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
                _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: _app_initialize__WEBPACK_IMPORTED_MODULE_2__["appInitialize"],
                    multi: true
                }
            ]
        };
    };
    var InfoModule_1;
    InfoModule = InfoModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    },
                    isolate: true
                }),
                _lazy_routing__WEBPACK_IMPORTED_MODULE_4__["routing"]
            ],
            declarations: [],
            exports: [],
            entryComponents: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], InfoModule);
    return InfoModule;
}());



/***/ }),

/***/ "./src/app/module-pulstrade/app-initialize.ts":
/*!****************************************************!*\
  !*** ./src/app/module-pulstrade/app-initialize.ts ***!
  \****************************************************/
/*! exports provided: appInitialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitialize", function() { return appInitialize; });
/* harmony import */ var wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wcs-comune/dist/loader */ "./node_modules/wcs-comune/dist/loader/index.js");





function appInitialize() {
    return function () {
        var win = window;
        if (typeof win !== 'undefined') {
            // Define all of our custom elements
            Object(wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
            Object(wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
            Object(wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
            Object(wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
            Object(wcs_comune_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
        }
    };
}


/***/ }),

/***/ "./src/app/module-pulstrade/module-pulstrade-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/module-pulstrade/module-pulstrade-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ModulePulstradeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePulstradeRoutingModule", function() { return ModulePulstradeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    // { path: '', redirectTo: 'home-common', pathMatch: 'full' },
    { path: 'ps', loadChildren: './pages/home-ps/home-ps.module#HomePagePSModule' },
    // { path: 'ps/home-common', redirectTo: 'home-common', pathMatch: 'full'},
    { path: 'ps-search', loadChildren: './pages/search/search.module#SearchPageModule' },
    { path: 'ps-notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },
    { path: 'street-detail', loadChildren: './pages/street-detail/street-detail.module#StreetDetailPageModule' },
];
var ModulePulstradeRoutingModule = /** @class */ (function () {
    function ModulePulstradeRoutingModule() {
    }
    ModulePulstradeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ModulePulstradeRoutingModule);
    return ModulePulstradeRoutingModule;
}());



/***/ }),

/***/ "./src/app/module-pulstrade/module-pulstrade.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/module-pulstrade/module-pulstrade.module.ts ***!
  \*************************************************************/
/*! exports provided: HttpLoaderFactory, ModulePulstradeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePulstradeModule", function() { return ModulePulstradeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module_pulstrade_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-pulstrade-routing.module */ "./src/app/module-pulstrade/module-pulstrade-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _app_initialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-initialize */ "./src/app/module-pulstrade/app-initialize.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/map.service */ "./src/app/module-pulstrade/services/map.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/module-pulstrade/services/notification.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/strade/i18n/', '.json');
}
// export function initializeAppMap(mapSrv: MapService) {
//   return (): Promise<any> => {
//     return mapSrv.Init();
//   };
// }
var ModulePulstradeModule = /** @class */ (function () {
    function ModulePulstradeModule() {
    }
    ModulePulstradeModule_1 = ModulePulstradeModule;
    ModulePulstradeModule.forRoot = function () {
        return {
            ngModule: ModulePulstradeModule_1,
            providers: [
                _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: _app_initialize__WEBPACK_IMPORTED_MODULE_7__["appInitialize"],
                    multi: true
                }
            ]
        };
    };
    var ModulePulstradeModule_1;
    ModulePulstradeModule = ModulePulstradeModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _module_pulstrade_routing_module__WEBPACK_IMPORTED_MODULE_2__["ModulePulstradeRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    },
                    isolate: true
                })
            ],
            providers: [
                _services_map_service__WEBPACK_IMPORTED_MODULE_8__["MapService"],
                _services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
                _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"]
                // ,
                // { provide: APP_INITIALIZER, useFactory: initializeAppMap, deps: [MapService], multi: true },
            ],
            entryComponents: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ModulePulstradeModule);
    return ModulePulstradeModule;
}());



/***/ }),

/***/ "./src/app/module-pulstrade/services/map.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/module-pulstrade/services/map.service.ts ***!
  \**********************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable: no-bitwise
// tslint:disable: no-construct




var MapService = /** @class */ (function () {
    function MapService(http, geoSrv, platform) {
        this.http = http;
        this.geoSrv = geoSrv;
        this.platform = platform;
        this.defaultCenter = {
            lat: 46.0748,
            long: 11.1217
        };
    }
    MapService.prototype.Init = function () {
        var _this = this;
        return this.platform.ready().then(function () {
            return new Promise(function (resolve, reject) {
                _this.loadData().then(function () {
                    resolve();
                }, function (err) {
                    reject();
                });
            });
        });
    };
    MapService.prototype.getDefaultCenter = function () {
        return [this.defaultCenter.lat, this.defaultCenter.long];
    };
    /**
     * Download streets data from API
     * @return an `Array` of streets
     */
    MapService.prototype.loadData = function () {
        var _this = this;
        var deferred = new Promise(function (resolve, reject) {
            if (_this.data) {
                return resolve(_this.data);
            }
            _this.http.get('https://tn.smartcommunitylab.it/streetcleaning/rest/street').toPromise().then(function (response) {
                //  this.http.get('./assets/strade/data/spazzamento.json').toPromise().then(response => {
                _this.data = _this.buildFinalData(response);
                resolve();
            }, function (err) {
                reject();
            });
        });
        return deferred;
    };
    /**
     * @return Streets array
     */
    MapService.prototype.getData = function () {
        return this.data;
    };
    /**
     * Change the `polylines` property inside the streets array, making it usable by leaflet library
     * @param arr Streets array
     */
    MapService.prototype.buildFinalData = function (arr) {
        var _this = this;
        arr.forEach(function (e) {
            e.polylines = _this.parsePolylines(e);
        });
        return arr;
    };
    /**
     * Convert the `byte` coordinates to an `Array<number>` for leaflet polyline build
     * @param street Street object
     */
    MapService.prototype.parsePolylines = function (street) {
        var byte = null;
        var shift = 0;
        var result = 0;
        var lat = 0;
        var lon = 0;
        var lat_change, lon_change;
        var coord = [];
        var i = 0;
        var factor = Math.pow(10, 5);
        var str = new String(street.polylines);
        while (i < str.length) {
            byte = null;
            shift = 0;
            result = 0;
            do {
                byte = str.charCodeAt(i++) - 63;
                result |= (byte & 0x1f) << shift;
                shift += 5;
            } while (byte >= 0x20);
            lat_change = ((result & 1) ? ~(result >> 1) : (result >> 1));
            shift = result = 0;
            do {
                byte = str.charCodeAt(i++) - 63;
                result |= (byte & 0x1f) << shift;
                shift += 5;
            } while (byte >= 0x20);
            lon_change = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += lat_change;
            lon += lon_change;
            // Soluzione molto approssimativa, controllare i dati e la conversione
            if (lat / factor < 50 && lon / factor < 50) {
                coord.push([lat / factor, lon / factor]);
            }
        }
        return coord;
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_2__["GeoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/module-pulstrade/services/notification.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module-pulstrade/services/notification.service.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.service */ "./src/app/module-pulstrade/services/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationService = /** @class */ (function () {
    function NotificationService(notify, platform, translate, config, map) {
        this.notify = notify;
        this.platform = platform;
        this.translate = translate;
        this.config = config;
        this.map = map;
        this.activedNots = []; /** Actived notifications */
        this.notifiedStreets = []; /** Streets that will be notified */
        this.streets = []; /** General street object */
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
        var startingNot = this.getNotStreets();
        if (startingNot)
            this.notifiedStreets = startingNot;
        this.streets = this.map.getData();
        this.buildActived();
        this.checkIfFurtherCleanings();
    }
    /**
     * Schedule notifications based on `cleaningDay` property.
     * It saves the single street object to `LocalStorage` as a JSON string, it will be used for automatic scheduling
     * and for the management page view
     * @param street `Array` of street objects, it could be also one single element
     */
    NotificationService.prototype.setNotification = function (street) {
        var _this = this;
        // street.forEach(s => this.notifiedStreets.push(s));
        this.notifiedStreets.push(street);
        localStorage.setItem('ps-st-not', JSON.stringify(this.notifiedStreets));
        this.platform.ready().then(function () {
            /** Get translations */
            _this.translate.get('IN-CLEANING').subscribe(function (tr) {
                var tmp = new Date(new Date().getTime() + 20000).getTime(); // SOLO PER DEBUG; DA TOGLIERE
                var noti = [];
                if (!_this.checkIfNotify(street.idNumber, street.cleaningDay)) {
                    noti.push({
                        id: street.idNumber,
                        text: tr + " " + street.streetName,
                        data: street.streetName,
                        vibrate: true,
                        trigger: { at: tmp } // new Date(s.cleaningDay).getTime() }
                    });
                }
                // street.forEach(s => {
                //   if (!this.checkIfNotify(s.idNumber, s.cleaningDay)) {
                //     noti.push({
                //       id: s.idNumber,
                //       text: `${tr} ${s.streetName}`,
                //       data: s.streetName,
                //       vibrate: true,
                //       trigger: { at: tmp } // new Date(s.cleaningDay).getTime() }
                //     });
                //   }
                // });
                /** Schedule notifications */
                _this.notify.schedule(noti);
                /** Build array for localstorage */
                _this.buildActived();
            });
        });
    };
    /**
     * Disable notifications and delete streets from `LocalStorage`
     * @param street streets object
     */
    NotificationService.prototype.disableNotification = function (street) {
        // street.forEach(s => {
        var id = this.notifiedStreets.findIndex(function (n) { return n.idNumber === street.idNumber; });
        if (id >= 0) {
            this.notifiedStreets.splice(id, 1);
        }
        // });
        localStorage.setItem('ps-st-not', JSON.stringify(this.notifiedStreets));
        this.notify.clear(street.idNumber);
    };
    /**
     * Build the internal variable `activedNots` made by scheduled notifications
     */
    NotificationService.prototype.buildActived = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.notify.getScheduledIds().then(function (data) {
                data.forEach(function (n) {
                    _this.notify.get(n).then(function (not) {
                        _this.activedNots.push(not);
                    });
                });
            });
        });
    };
    /**
     * @return Actived notifications
     */
    NotificationService.prototype.getNotifications = function () {
        return this.activedNots;
    };
    /**
     * Read `LocalStorage` and return street object
     * @return Streets object of scheduled notifications
     */
    NotificationService.prototype.getNotStreets = function () {
        return JSON.parse(localStorage.getItem('ps-st-not'));
    };
    /**
     * Check if that notification is already scheduled.
     * @param id Street ID
     * @param date Trigger notification date
     */
    NotificationService.prototype.checkIfNotify = function (id, date) {
        this.activedNots.forEach(function (n) {
            if (n.id === id && n.trigger.at === date) {
                return true;
            }
        });
        return false;
    };
    /**
     * Automatic scheduling for further cleanings.
     * It checks if in the main `streets` array there is a new cleaning-instance for saved streets.
     * If yes, it will schedule a new notification
     */
    NotificationService.prototype.checkIfFurtherCleanings = function () {
        var _this = this;
        if (this.streets && this.streets.lenth > 0)
            this.streets.forEach(function (s) {
                _this.getNotStreets().forEach(function (n) {
                    if (s.idNumber === n.idNumber) {
                        if (n.cleaningDay > (new Date().getTime())) {
                            _this.setNotification(s);
                        }
                    }
                });
            });
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/module-trasporti/app-initialize.ts":
/*!****************************************************!*\
  !*** ./src/app/module-trasporti/app-initialize.ts ***!
  \****************************************************/
/*! exports provided: appInitialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitialize", function() { return appInitialize; });
/* harmony import */ var wc_trasporti_dist_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wc-trasporti/dist/loader */ "../wc-trasporti/wc-trasporti/dist/loader/index.js");

function appInitialize() {
    return function () {
        var win = window;
        if (typeof win !== 'undefined') {
            // Define all of our custom elements
            Object(wc_trasporti_dist_loader__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"])(win);
        }
    };
}


/***/ }),

/***/ "./src/app/module-trasporti/lazy.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/module-trasporti/lazy.routing.ts ***!
  \**************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    { path: 'home-trasporti', loadChildren: './pages/home-trasporti/home-trasporti.module#HomeTrasportiPageModule' },
    { path: 'ttlist/:ref', loadChildren: './pages/transport-list/transport-list.module#TransportListPageModule' },
    { path: 'ttgroup/:ref/:agencyId/:groupId', loadChildren: './pages/transport-list/transport-list.module#TransportListPageModule' },
    { path: 'tt/:ref/:agencyId/:groupId/:routeId/:title/:color', loadChildren: './pages/transport-tt/transport-tt.module#TransportTtPageModule' },
    { path: 'transport-tt', loadChildren: './pages/transport-tt/transport-tt.module#TransportTtPageModule' },
    { path: 'map-spots', loadChildren: './pages/map-spots/map-spots.module#MapSpotsPageModule' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/module-trasporti/module-trasporti.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/module-trasporti/module-trasporti.module.ts ***!
  \*************************************************************/
/*! exports provided: HttpLoaderFactory, initializeDb, TrasportiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeDb", function() { return initializeDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrasportiModule", function() { return TrasportiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lazy_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy.routing */ "./src/app/module-trasporti/lazy.routing.ts");
/* harmony import */ var _app_initialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-initialize */ "./src/app/module-trasporti/app-initialize.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/config.service */ "./src/app/module-trasporti/services/config.service.ts");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, "./assets/trasporti/i18n/", ".json");
}
function initializeDb(dbService) {
    return function () {
        return dbService.Init();
    };
}
var TrasportiModule = /** @class */ (function () {
    function TrasportiModule() {
    }
    TrasportiModule_1 = TrasportiModule;
    TrasportiModule.forRoot = function () {
        return {
            ngModule: TrasportiModule_1,
            providers: [
                _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"],
                _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__["SQLite"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: _app_initialize__WEBPACK_IMPORTED_MODULE_3__["appInitialize"],
                    multi: true
                }
                // ,        {
                //   provide: APP_INITIALIZER,
                //   useFactory: (db: DbService) => function () { return db.Init() },
                //   deps: [DbService],
                //   multi: true
                // }
            ]
        };
    };
    var TrasportiModule_1;
    TrasportiModule = TrasportiModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _lazy_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }, isolate: true
                }),
            ]
        })
    ], TrasportiModule);
    return TrasportiModule;
}());



/***/ }),

/***/ "./src/app/module-trasporti/services/config.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/module-trasporti/services/config.service.ts ***!
  \*************************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.appModuleName = "app-module";
        this.appId = 'trento';
        this.init();
    }
    ConfigService.prototype.getLanguage = function () {
        if (localStorage.getItem('comune-setting')) {
            var setting = JSON.parse(localStorage.getItem('comune-setting'));
            var language = setting.language;
            if (language)
                return language;
        }
        return 'it';
    };
    ConfigService.prototype.getAppModuleName = function () {
        return this.appModuleName;
    };
    ConfigService.prototype.getAppAgencies = function () {
        if (this.config)
            return this.config['agencies'];
    };
    ConfigService.prototype.getServerURL = function () {
        if (this.config)
            return this.config['serverURL'];
    };
    ConfigService.prototype.getMaxMarkers = function () {
        if (this.config)
            return this.config['maxMarkers'];
    };
    ConfigService.prototype.getTTData = function (ref, agencyId, groupId, routeId) {
        var res = this.ttConfig;
        if (!!ref) {
            res = res.elements[ref];
        }
        if (!!agencyId) {
            for (var i = 0; i < res.elements.length; i++) {
                if (res.elements[i].agencyId == agencyId) {
                    res = res.elements[i];
                    break;
                }
            }
        }
        var searchRec = function (res, groupIds, idx) {
            if (idx >= groupIds.length)
                return res;
            for (var i = 0; i < res.groups.length; i++) {
                if (res.groups[i].label == groupIds[idx]) {
                    res = searchRec(res.groups[i], groupIds, idx + 1);
                    break;
                }
            }
            return res;
        };
        if (!!groupId) {
            var groupIds = groupId.split(',');
            res = searchRec(res, groupIds, 0);
        }
        if (!!routeId) {
            for (var i = 0; i < res.routes.length; i++) {
                if (res.routes[i].routeId == routeId) {
                    res = res.routes[i];
                    break;
                }
            }
        }
        return res;
    };
    ConfigService.prototype.getMapPosition = function () {
        return {
            lat: this.config['center_map'][0],
            long: this.config['center_map'][1],
            zoom: this.config['zoom_map']
        };
    };
    ConfigService.prototype.getAppId = function () {
        return this.appId;
        // return this.config['appId'];
    };
    ConfigService.prototype.getHomeButtons = function () {
        if (this.config)
            return Promise.resolve(this.config["visualization"]["primaryLinks"]);
        else {
            return this.init().then(function (res) {
                return Promise.resolve(res["visualization"]["primaryLinks"]);
            });
        }
    };
    ConfigService.prototype.init = function () {
        var _this = this;
        return this.http.get("assets/trasporti/configuration/config.json").toPromise().then(function (response) {
            _this.config = response;
            return Promise.resolve(_this.config);
        }, function (err) {
        });
    };
    ConfigService.prototype.getTtJsonConfig = function () {
        var _this = this;
        if (this.ttConfig) {
            return Promise.resolve(this.ttConfig);
        }
        return this.http.get("assets/trasporti/data/tt.json").toPromise().then(function (response) {
            _this.ttConfig = response;
            return Promise.resolve(_this.ttConfig);
        }, function (err) {
        });
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CHOOSEN_KEY = "choosen";
var MODULE_ENTRIES_KEY = "moduleEntries";
var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.appModuleName = "app-module";
        this.defaultPosition = {
            lat: 46.0748,
            long: 11.1217
        };
    }
    ConfigService.prototype.Init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //load menus from json files
            _this.loadMenu();
            _this.loadCarousel();
            _this.loadModuleEntries();
            resolve();
        });
    };
    ConfigService.prototype.getDefaultPosition = function () {
        return this.defaultPosition;
    };
    ConfigService.prototype.setChoosen = function (type) {
        localStorage.setItem(CHOOSEN_KEY, type);
    };
    ConfigService.prototype.getChoosen = function () {
        return localStorage.getItem(CHOOSEN_KEY);
    };
    ConfigService.prototype.chooseProfile = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.setDefaultHome(type).then(function () {
                _this.setChoosen(type);
                resolve();
            }, function (error) {
                reject();
            });
        });
    };
    ConfigService.prototype.setDefaultHome = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //read profile from local json file e set localStorage
            _this.moduleEntries = JSON.parse(localStorage.getItem(MODULE_ENTRIES_KEY));
            if (!_this.moduleEntries) {
                _this.http.get("assets/configuration/default-profiles-module.json").toPromise().then(function (response) {
                    _this.storeModuleEntries(response[type]);
                    resolve();
                }, function (errror) {
                    reject();
                });
            }
            else {
                resolve();
            }
        });
    };
    ConfigService.prototype.loadMenu = function () {
        var _this = this;
        if (this.menu) {
            return Promise.resolve(this.menu);
        }
        var promise = new Promise(function (resolve, reject) {
            console.log("Async Work Complete");
            _this.http.get("assets/configuration/side-menu.json").toPromise().then(function (response) {
                _this.menu = response;
                resolve(_this.menu);
            });
        });
        return promise;
    };
    ;
    ConfigService.prototype.getCarousel = function () {
        return this.carousel;
    };
    ConfigService.prototype.loadCarousel = function () {
        var _this = this;
        if (this.carousel) {
            return Promise.resolve(this.carousel);
        }
        this.http.get("assets/configuration/carousel.json").toPromise().then(function (response) {
            _this.carousel = response;
        });
    };
    ConfigService.prototype.getModuleEntries = function () {
        return this.moduleEntries;
    };
    ConfigService.prototype.loadModuleEntries = function () {
        if (this.moduleEntries) {
            return Promise.resolve(this.moduleEntries);
        }
        //load stored from localstorage
        this.moduleEntries = JSON.parse(localStorage.getItem(MODULE_ENTRIES_KEY));
    };
    ConfigService.prototype.storeModuleEntries = function (entries) {
        this.moduleEntries = entries;
        localStorage.setItem(MODULE_ENTRIES_KEY, JSON.stringify(entries));
    };
    ConfigService.prototype.getAllModuleEntries = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.allModuleEntries) {
                resolve(_this.allModuleEntries);
            }
            _this.http.get("assets/configuration/module-entries.json").toPromise().then(function (response) {
                _this.allModuleEntries = response;
                resolve(_this.allModuleEntries);
            }, function (err) {
                reject();
            });
        });
    };
    ConfigService.prototype.getAppModuleName = function () {
        return this.appModuleName;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/geo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/geo.service.ts ***!
  \*****************************************/
/*! exports provided: GeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoService", function() { return GeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeoService = /** @class */ (function () {
    function GeoService(geolocation, config) {
        this.geolocation = geolocation;
        this.config = config;
    }
    GeoService.prototype.Init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.watchLocation();
            resolve();
        });
    };
    // Start location update watch
    GeoService.prototype.watchLocation = function () {
        var _this = this;
        var geo;
        this.isWatching = true;
        this.watchLocationUpdates = this.geolocation.watchPosition();
        this.watchLocationUpdates.subscribe(function (resp) {
            if (resp.coords) {
                _this.geoLatitude = resp.coords.latitude;
                _this.geoLongitude = resp.coords.longitude;
                geo = {
                    "lat": _this.geoLatitude,
                    "long": _this.geoLongitude
                };
            }
            console.log(geo);
            if (!window[_this.config.getAppModuleName()]) {
                window[_this.config.getAppModuleName()] = {};
            }
            window[_this.config.getAppModuleName()]['geolocation'] = geo;
        });
    };
    // Stop location update watch
    GeoService.prototype.stopLocationWatch = function () {
        this.isWatching = false;
        this.watchLocationUpdates.unsubscribe();
    };
    /**
     * Convert degrees to radians
     * @param degrees Input degrees
     * @return radians
     */
    GeoService.prototype.degreesToRadians = function (degrees) {
        return degrees * Math.PI / 180;
    };
    /**
     * Get distance in KM between two coordinates
     * @param first Starting point
     * @param second Destination point
     * @return Distance in KM
     */
    GeoService.prototype.getDistanceKM = function (first, second) {
        var earthRadiusKm = 6371;
        var dLat = this.degreesToRadians(second.lat - first.lat);
        var dLon = this.degreesToRadians(second.lon - first.lon);
        var lat1 = this.degreesToRadians(first.lat);
        var lat2 = this.degreesToRadians(second.lat);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round((earthRadiusKm * c) * 1000) / 1000;
    };
    GeoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__["Geolocation"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], GeoService);
    return GeoService;
}());



/***/ }),

/***/ "./src/app/services/setting.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/setting.service.ts ***!
  \*********************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingService = /** @class */ (function () {
    function SettingService(config) {
        this.config = config;
        this.setting = [];
        this.languages = {
            'it': 'Italiano',
            'en': 'English',
            'de': 'Deutch'
        };
        // if (localStorage.getItem("comune-setting"))
        //   this.getUserSetting()
    }
    SettingService.prototype.setUserLanguage = function (selectedLanguage) {
        this.setting['language'] = selectedLanguage;
        this.setUserSetting(this.setting);
    };
    SettingService.prototype.getUserSetting = function () {
        if (this.setting) {
            return this.setting;
        }
        this.setting = JSON.parse(localStorage.getItem('comune-setting'));
    };
    SettingService.prototype.setUserSetting = function (setting) {
        localStorage.setItem('comune-setting', JSON.stringify(setting));
        this.setting = JSON.parse(localStorage.getItem('comune-setting'));
    };
    SettingService.prototype.getUserLanguage = function () {
        return this.setting['language'];
    };
    SettingService.prototype.getLanguages = function () {
        return this.languages;
    };
    SettingService.prototype.Init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var language;
            var baseSetting;
            if (!localStorage.getItem('comune-setting')) {
                baseSetting = {};
                console.log(navigator);
                language = navigator.language;
                if (language.indexOf('it') > -1) {
                    language = 'it';
                }
                if (language.indexOf('en') > -1) {
                    language = 'en';
                }
                if (language.indexOf('de') > -1) {
                    language = 'de';
                }
                baseSetting['language'] = language;
                _this.setting = baseSetting;
                _this.setUserSetting(_this.setting);
            }
            else {
                baseSetting = JSON.parse(localStorage.getItem('comune-setting'));
                _this.setting = baseSetting;
                language = baseSetting['language'];
            }
            if (!window[_this.config.getAppModuleName()]) {
                window[_this.config.getAppModuleName()] = {};
            }
            window[_this.config.getAppModuleName()]['language'] = language;
            resolve();
        });
    };
    SettingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "./src/app/shared/popover/popover.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/popover/popover.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-container\">\n    <ion-radio-group>\n      <ion-item *ngFor=\"let x of data\">\n        <ion-label>{{x}}</ion-label>\n        <ion-radio slot=\"start\" value=\"{{x}}\" (ionSelect)=\"radioSelected(x)\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n\n  <ion-button expand=\"full\" color=\"tertiary\" (click)=\"close()\">Imposta</ion-button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/popover/popover.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/popover/popover.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label {\n  z-index: 2; }\n\n.pop-container {\n  background: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9zaGFyZWQvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBUyxFQUNaOztBQUNEO0VBQ0ksa0JBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gICAgei1pbmRleDoyO1xufVxuLnBvcC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/popover/popover.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/popover/popover.component.ts ***!
  \*****************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(navParams, events) {
        this.navParams = navParams;
        this.events = events;
        this.data = [];
    }
    PopoverComponent.prototype.ngOnInit = function () {
        this.data = [];
        this.data = this.navParams.get('elements');
        if (!this.data.includes('Tutto')) {
            this.data.push('Tutto');
        }
        this.pop = this.navParams.get('controller');
    };
    PopoverComponent.prototype.ionViewDidEnter = function () {
        var tmp = Array.prototype.slice.call(document.getElementsByTagName('ion-radio'));
        tmp.forEach(function (element) {
            element.shadowRoot.querySelector('button').setAttribute('style', 'z-index:-2; background:white;');
        });
    };
    PopoverComponent.prototype.radioSelected = function (input) {
        this.selected = input;
    };
    PopoverComponent.prototype.close = function () {
        this.pop.dismiss();
        this.events.publish('radio:selected', this.selected);
    };
    PopoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__(/*! ./popover.component.html */ "./src/app/shared/popover/popover.component.html"),
            styles: [__webpack_require__(/*! ./popover.component.scss */ "./src/app/shared/popover/popover.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chin8/Documents/work/modularApp/modular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map