(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./node_modules/wcs-comune/dist/esm/es5/build/euhz11j5.sc.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/wcs-comune/dist/esm/es5/build/euhz11j5.sc.entry.js ***!
  \*************************************************************************/
/*! exports provided: WcDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WcDetails", function() { return WcDetails; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/wcs-comune/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ws-comune.core.js */ "./node_modules/wcs-comune/dist/esm/es5/ws-comune.core.js");
/* harmony import */ var _chunk_d08ceb08_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-d08ceb08.js */ "./node_modules/wcs-comune/dist/esm/es5/build/chunk-d08ceb08.js");
var WcDetails=function(){function t(){this.headingColor="red",this.secondColor="red",this.icons=(new _chunk_d08ceb08_js__WEBPACK_IMPORTED_MODULE_2__["a"]).iconList,this.tmptags=[],this.tmpContacts=[]}return t.prototype.componentWillLoad=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){return this.strings=JSON.parse(this.stringsinput),this.contacts&&(this.contactsJSON=JSON.parse(this.contacts),this.buildTag(),this.buildContacts(this.contactsJSON)),[2]})})},t.prototype.contactClickHandler=function(t,i){this.contactClick.emit(JSON.stringify({type:t,value:i})),console.log("Cliccato: ",t,i)},t.prototype.buildTag=function(){var t=this;this.contactsJSON.cat&&this.contactsJSON.cat.forEach(function(i){t.tmptags.push(Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"tag"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("p",null,i)))})},t.prototype.showTags=function(){var t=Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"tags"},this.tmptags);return this.tmptags.length>0?t:""},t.prototype.buildContacts=function(t){var i=this,e={};t.address&&(e.address=t.address),t.phone&&(e.phone=t.phone),t.url&&(e.url=t.url,e.share=t.url),Object.keys(e).forEach(function(t){i.tmpContacts.push(Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"contact-container",onClick:function(){return t.indexOf("share")>-1?i.contactClickHandler(t,i.contactsJSON.url):i.contactClickHandler(t,i.contactsJSON[t])}},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"icon"},i.icons[t]("black")),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"contactLabel"},i.strings[t])))})},t.prototype.render=function(){return Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"card"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"container"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"info-title",style:{color:this.headingColor}},this.title),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"subtitle",innerHTML:this.subtitle}),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"image"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("img",{src:this.img,alt:this.altImage})),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"contacts"},this.tmpContacts),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("hr",null),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"datetime"},this.contactsJSON&&this.contactsJSON.date?this.contactsJSON.date:""," ",this.contactsJSON&&this.contactsJSON.time?this.contactsJSON.time:""),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"address"},this.contactsJSON?this.contactsJSON.address:""),this.showTags(),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"text",innerHTML:this.text}),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"title-2",style:{color:this.headingColor}},this.info&&""!=this.info?"Informazioni":""),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"info text",innerHTML:this.info})))},Object.defineProperty(t,"is",{get:function(){return"wc-details"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{altImage:{type:String,attr:"alt-image"},contacts:{type:String,attr:"contacts",mutable:!0},element:{elementRef:!0},headingColor:{type:String,attr:"heading-color"},img:{type:String,attr:"img"},info:{type:String,attr:"info"},language:{type:String,attr:"language"},secondColor:{type:String,attr:"second-color"},stringsinput:{type:String,attr:"stringsinput"},subtitle:{type:String,attr:"subtitle"},text:{type:String,attr:"text",mutable:!0},title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"contactClick",method:"contactClick",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".card.sc-wc-details{background:#e3e3e3!important}.card.sc-wc-details, .container.sc-wc-details, .image.sc-wc-details{margin:2%}.image.sc-wc-details{width:98%}.image.sc-wc-details   img.sc-wc-details{min-width:100%;min-height:100px;text-align:center;line-height:100px;height:200px;width:100%;margin-right:2%}.info-title.sc-wc-details{text-align:center;font-size:20px;margin-top:2%;margin-bottom:3%}.subtitle.sc-wc-details{font-size:14px;font-style:italic;margin-bottom:3%}.title-2.sc-wc-details{font-size:20px;font-weight:700}.text.sc-wc-details, .title-2.sc-wc-details{margin-bottom:3%}.text.sc-wc-details{font-size:12px}.tags.sc-wc-details{margin-bottom:3%}.tags.sc-wc-details:after{clear:both;content:\"\";display:table}.tag.sc-wc-details{display:inline-block;border:1px solid #000;border-radius:20px;margin:1%}.tag.sc-wc-details:first-child{margin-left:0}.tag.sc-wc-details   p.sc-wc-details{margin-top:1px;margin-bottom:1px;margin-left:5px;margin-right:5px;font-size:10px}.datetime.sc-wc-details{font-weight:700}.address.sc-wc-details, .datetime.sc-wc-details{margin-bottom:3%}.contacts.sc-wc-details{width:100%;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:5px;margin:0 auto}.contact-container.sc-wc-details{text-align:center;width:25%}.contactLabel.sc-wc-details{font-size:12px}.datetime.sc-wc-details{font-size:13px}"},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=105.js.map