(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./node_modules/wc-trasporti/dist/esm/es5/build/ow1he9wh.sc.entry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/wc-trasporti/dist/esm/es5/build/ow1he9wh.sc.entry.js ***!
  \***************************************************************************/
/*! exports provided: IonCol, IonIcon, IonRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCol", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonIcon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRow", function() { return Row; });
/* harmony import */ var _mycomponent_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mycomponent.core.js */ "./node_modules/wc-trasporti/dist/esm/es5/mycomponent.core.js");
var SIZE_TO_MEDIA={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};function matchBreakpoint(t,e){return void 0===e||""===e||t.matchMedia(SIZE_TO_MEDIA[e]).matches}var CACHED_MAP,win=window,SUPPORTS_VARS=!!(win.CSS&&win.CSS.supports&&win.CSS.supports("--a: 0")),BREAKPOINTS=["","xs","sm","md","lg","xl"],Col=function(){function t(){}return t.prototype.onResize=function(){this.el.forceUpdate()},t.prototype.getColumns=function(t){for(var e,n=0,r=BREAKPOINTS;n<r.length;n++){var i=r[n],o=matchBreakpoint(this.win,i),s=this[t+i.charAt(0).toUpperCase()+i.slice(1)];o&&void 0!==s&&(e=s)}return e},t.prototype.calculateSize=function(){var t=this.getColumns("size");if(t&&""!==t){var e="auto"===t?"auto":SUPPORTS_VARS?"calc(calc("+t+" / var(--ion-grid-columns, 12)) * 100%)":t/12*100+"%";return{flex:"0 0 "+e,width:""+e,"max-width":""+e}}},t.prototype.calculatePosition=function(t,e){var n,r=this.getColumns(t);if(r)return(n={})[e]=SUPPORTS_VARS?"calc(calc("+r+" / var(--ion-grid-columns, 12)) * 100%)":r>0&&r<12?r/12*100+"%":"auto",n},t.prototype.calculateOffset=function(){var t="rtl"===document.dir;return this.calculatePosition("offset",t?"margin-right":"margin-left")},t.prototype.calculatePull=function(){var t="rtl"===document.dir;return this.calculatePosition("pull",t?"left":"right")},t.prototype.calculatePush=function(){var t="rtl"===document.dir;return this.calculatePosition("push",t?"right":"left")},t.prototype.hostData=function(){return{style:Object.assign({},this.calculateOffset(),this.calculatePull(),this.calculatePush(),this.calculateSize())}},t.prototype.render=function(){return Object(_mycomponent_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-col"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},offset:{type:String,attr:"offset"},offsetLg:{type:String,attr:"offset-lg"},offsetMd:{type:String,attr:"offset-md"},offsetSm:{type:String,attr:"offset-sm"},offsetXl:{type:String,attr:"offset-xl"},offsetXs:{type:String,attr:"offset-xs"},pull:{type:String,attr:"pull"},pullLg:{type:String,attr:"pull-lg"},pullMd:{type:String,attr:"pull-md"},pullSm:{type:String,attr:"pull-sm"},pullXl:{type:String,attr:"pull-xl"},pullXs:{type:String,attr:"pull-xs"},push:{type:String,attr:"push"},pushLg:{type:String,attr:"push-lg"},pushMd:{type:String,attr:"push-md"},pushSm:{type:String,attr:"push-sm"},pushXl:{type:String,attr:"push-xl"},pushXs:{type:String,attr:"push-xs"},size:{type:String,attr:"size"},sizeLg:{type:String,attr:"size-lg"},sizeMd:{type:String,attr:"size-md"},sizeSm:{type:String,attr:"size-sm"},sizeXl:{type:String,attr:"size-xl"},sizeXs:{type:String,attr:"size-xs"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-col-h{padding-left:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-col-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px))}}\@media (min-width:576px){.sc-ion-col-h{padding-left:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-col-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}}\@media (min-width:768px){.sc-ion-col-h{padding-left:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-col-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}}\@media (min-width:992px){.sc-ion-col-h{padding-left:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-col-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}}\@media (min-width:1200px){.sc-ion-col-h{padding-left:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-col-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}}"},enumerable:!0,configurable:!0}),t}();function getIconMap(){if(!CACHED_MAP){var t=window;t.Ionicons=t.Ionicons||{},CACHED_MAP=t.Ionicons.map=t.Ionicons.map||new Map}return CACHED_MAP}function getName(t,e,n,r){return e="ios"===(e=(e||"md").toLowerCase())?"ios":"md",n&&"ios"===e?t=n.toLowerCase():r&&"md"===e?t=r.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=e+"-"+t)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function getSrc(t){return"string"==typeof t&&isSrc(t=t.trim())?t:null}function isSrc(t){return t.length>0&&/(\/|\.)/.test(t)}function isValid(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].value;if("string"==typeof n&&0===n.toLowerCase().indexOf("on"))return!1}for(e=0;e<t.childNodes.length;e++)if(!isValid(t.childNodes[e]))return!1}return!0}var Icon=function(){function t(){this.isVisible=!1,this.lazy=!1}return t.prototype.componentWillLoad=function(){var t=this;this.waitUntilVisible(this.el,"50px",function(){t.isVisible=!0,t.loadIcon()})},t.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.waitUntilVisible=function(t,e,n){var r=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var i=this.io=new this.win.IntersectionObserver(function(t){t[0].isIntersecting&&(i.disconnect(),r.io=void 0,n())},{rootMargin:e});i.observe(t)}else n()},t.prototype.loadIcon=function(){var t=this;if(!this.isServer&&this.isVisible){var e=this.getUrl();e?getSvgContent(this.doc,e,"s-ion-icon").then(function(e){return t.svgContent=e}):console.error("icon was not resolved")}if(!this.ariaLabel){var n=getName(this.getName(),this.mode,this.ios,this.md);n&&(this.ariaLabel=n.replace("ios-","").replace("md-","").replace(/\-/g," "))}},t.prototype.getName=function(){return void 0!==this.name?this.name:this.icon&&!isSrc(this.icon)?this.icon:void 0},t.prototype.getUrl=function(){var t=getSrc(this.src);return t||((t=getName(this.getName(),this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=getSrc(this.icon))||null)},t.prototype.getNamedUrl=function(t){return getIconMap().get(t)||this.resourcesUrl+"svg/"+t+".svg"},t.prototype.hostData=function(){var t,e=this.flipRtl||this.ariaLabel&&this.ariaLabel.indexOf("arrow")>-1&&!1!==this.flipRtl;return{role:"img",class:Object.assign({},createColorClasses(this.color),(t={},t["icon-"+this.size]=!!this.size,t["flip-rtl"]=e&&"rtl"===this.doc.dir,t))}},t.prototype.render=function(){return Object(_mycomponent_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",!this.isServer&&this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"})},Object.defineProperty(t,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},flipRtl:{type:Boolean,attr:"flip-rtl"},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-icon-h{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner.sc-ion-icon, svg.sc-ion-icon{display:block;fill:currentColor;stroke:currentColor;height:100%;width:100%}.flip-rtl.sc-ion-icon-h   .icon-inner.sc-ion-icon{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.icon-small.sc-ion-icon-h{font-size:18px!important}.icon-large.sc-ion-icon-h{font-size:32px!important}.ion-color.sc-ion-icon-h{color:var(--ion-color-base)!important}.ion-color-primary.sc-ion-icon-h{--ion-color-base:var(--ion-color-primary,#3880ff)}.ion-color-secondary.sc-ion-icon-h{--ion-color-base:var(--ion-color-secondary,#0cd1e8)}.ion-color-tertiary.sc-ion-icon-h{--ion-color-base:var(--ion-color-tertiary,#f4a942)}.ion-color-success.sc-ion-icon-h{--ion-color-base:var(--ion-color-success,#10dc60)}.ion-color-warning.sc-ion-icon-h{--ion-color-base:var(--ion-color-warning,#ffce00)}.ion-color-danger.sc-ion-icon-h{--ion-color-base:var(--ion-color-danger,#f14141)}.ion-color-light.sc-ion-icon-h{--ion-color-base:var(--ion-color-light,#f4f5f8)}.ion-color-medium.sc-ion-icon-h{--ion-color-base:var(--ion-color-medium,#989aa2)}.ion-color-dark.sc-ion-icon-h{--ion-color-base:var(--ion-color-dark,#222428)}"},enumerable:!0,configurable:!0}),t}(),requests=new Map;function getSvgContent(t,e,n){var r=requests.get(e);return r||(r=fetch(e,{cache:"force-cache"}).then(function(t){return isStatusValid(t.status)?t.text():Promise.resolve(null)}).then(function(e){return validateContent(t,e,n)}),requests.set(e,r)),r}function isStatusValid(t){return t<=299}function validateContent(t,e,n){if(e){var r=t.createDocumentFragment(),i=t.createElement("div");i.innerHTML=e,r.appendChild(i);for(var o=i.childNodes.length-1;o>=0;o--)"svg"!==i.childNodes[o].nodeName.toLowerCase()&&i.removeChild(i.childNodes[o]);var s=i.firstElementChild;if(s&&"svg"===s.nodeName.toLowerCase()&&(n&&s.setAttribute("class",n),isValid(s)))return i.innerHTML}return""}function createColorClasses(t){var e;return t?((e={"ion-color":!0})["ion-color-"+t]=!0,e):null}var Row=function(){function t(){}return t.prototype.render=function(){return Object(_mycomponent_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-row"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-row-h{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=99.js.map