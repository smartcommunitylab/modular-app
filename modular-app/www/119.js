(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./node_modules/wcs-comune/dist/esm/es5/build/s4kba3uq.sc.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/wcs-comune/dist/esm/es5/build/s4kba3uq.sc.entry.js ***!
  \*************************************************************************/
/*! exports provided: WcDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WcDetails", function() { return WcDetails; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/wcs-comune/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ws-comune.core.js */ "./node_modules/wcs-comune/dist/esm/es5/ws-comune.core.js");
/* harmony import */ var _chunk_d08ceb08_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-d08ceb08.js */ "./node_modules/wcs-comune/dist/esm/es5/build/chunk-d08ceb08.js");
var WcDetails=function(){function t(){this.headingColor="red",this.secondColor="red",this.expandable=!1,this.expanse=!1,this.icons=(new _chunk_d08ceb08_js__WEBPACK_IMPORTED_MODULE_2__["a"]).iconList,this.tmptags=[],this.tmpContacts=[]}return t.prototype.componentWillLoad=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){return this.stringsinput&&(this.strings=JSON.parse(this.stringsinput)),this.contacts&&(this.contactsJSON=JSON.parse(this.contacts),this.buildTag(),this.buildContacts(this.contactsJSON)),[2]})})},t.prototype.contactClickHandler=function(t,e,i){i.stopPropagation(),this.contactClick.emit(JSON.stringify({type:t,value:e})),console.log("Cliccato: ",t,e)},t.prototype.clickTag=function(t,e){this.tagClicked.emit(t),e.stopPropagation()},t.prototype.buildTag=function(){var t=this;this.contactsJSON.cat&&this.contactsJSON.cat.forEach(function(e){t.tmptags.push(Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"tag",onClick:function(i){return t.clickTag(e,i)}},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("p",null,e)))})},t.prototype.showTags=function(){var t=Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"tags"},this.tmptags);return this.tmptags.length>0?t:""},t.prototype.buildContacts=function(t){var e=this,i={};t.address&&(i.address=t.address),t.phone&&(i.phone=t.phone),t.url&&(i.url=t.url),i.share=this.contactsJSON,Object.keys(i).forEach(function(t){e.tmpContacts.push(Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"external-container"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"contact-container",onClick:function(i){return t.indexOf("share")>-1?e.contactClickHandler(t,JSON.stringify(e.contactsJSON),i):e.contactClickHandler(t,e.contactsJSON[t],i)}},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"icon icon-contact"},e.icons[t](e.secondColor)),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"contactLabel"},e.strings[t]))))})},t.prototype.expande=function(t){console.log("expande"),this.expandeClick.emit(this.id),t.stopPropagation()},t.prototype.render=function(){var t=this;return Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:this.expanse?"":"card",onClick:function(e){return t.expandable?t.expande(e):""}},this.expanse?Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",null,this.img?Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"image"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("img",{src:this.img,alt:this.altImage})):""):"",Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"container"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"info-title",style:{color:this.headingColor}},this.title),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"subtitle",innerHTML:this.subtitle}),this.expandable?Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"detail-bar"}):"",this.expanse?"":Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",null,this.img?Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"image"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("img",{src:this.img,alt:this.altImage})):""),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"contacts"},this.tmpContacts),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("hr",null),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"datetime"},this.contactsJSON&&this.contactsJSON.date?this.contactsJSON.date:""," ",this.contactsJSON&&this.contactsJSON.time?this.contactsJSON.time:""),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"address"},this.contactsJSON?this.contactsJSON.address:""),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"distance"},this.distance?this.distance:""),this.showTags(),this.expanse?Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",null,Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"text",innerHTML:this.text}),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"title-2",style:{color:this.headingColor}},this.info&&""!=this.info?"Informazioni":""),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"info text",innerHTML:this.info})):""))},Object.defineProperty(t,"is",{get:function(){return"wc-details"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{altImage:{type:String,attr:"alt-image"},contacts:{type:String,attr:"contacts",mutable:!0},distance:{type:String,attr:"distance"},element:{elementRef:!0},expandable:{type:Boolean,attr:"expandable"},expanse:{type:Boolean,attr:"expanse"},headingColor:{type:String,attr:"heading-color"},id:{type:String,attr:"id"},img:{type:String,attr:"img"},info:{type:String,attr:"info"},language:{type:String,attr:"language"},secondColor:{type:String,attr:"second-color"},stringsinput:{type:String,attr:"stringsinput"},subtitle:{type:String,attr:"subtitle"},text:{type:String,attr:"text",mutable:!0},title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"contactClick",method:"contactClick",bubbles:!0,cancelable:!0,composed:!0},{name:"expandeClick",method:"expandeClick",bubbles:!0,cancelable:!0,composed:!0},{name:"tagClicked",method:"tagClicked",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".card.sc-wc-details{background:#efefef!important}.card.sc-wc-details, .container.sc-wc-details{margin:2%}.image.sc-wc-details   img.sc-wc-details{min-width:100%;min-height:100px;text-align:center;line-height:100px;height:200px;width:100%;margin-right:2%}.info-title.sc-wc-details{text-align:center;font-size:20px;margin-top:2%;margin-bottom:3%}.subtitle.sc-wc-details{font-size:14px;font-style:italic;margin-bottom:3%}.icon-contact.sc-wc-details{display:table-cell;vertical-align:middle;text-align:right;color:#11b3ef}.title-2.sc-wc-details{font-size:20px;font-weight:700}.text.sc-wc-details, .title-2.sc-wc-details{margin-bottom:3%}.text.sc-wc-details{font-size:12px}.tags.sc-wc-details{margin-bottom:3%}.tags.sc-wc-details:after{clear:both;content:\"\";display:table}.tag.sc-wc-details{display:inline-block;border:1px solid #11b3ef;color:#11b3ef;background-color:#e3e3e3;border-radius:20px;margin:1%}.tag.sc-wc-details:first-child{margin-left:0}.tag.sc-wc-details   p.sc-wc-details{margin-top:1px;margin-bottom:1px;margin-left:5px;margin-right:5px;font-size:10px}.datetime.sc-wc-details{font-weight:700}.address.sc-wc-details, .datetime.sc-wc-details{margin-bottom:3%}.contacts.sc-wc-details{width:100%;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:5px;margin:0 auto}.external-container.sc-wc-details{width:25%;margin:auto}.contact-container.sc-wc-details{display:table;background-color:#fff;border:1px solid #11b3ef;border-radius:4px;margin:auto}.contactLabel.sc-wc-details{font-size:12px;display:table-cell;vertical-align:middle;text-align:left;padding:4px;color:#11b3ef}.datetime.sc-wc-details{font-size:13px}.detail-bar.sc-wc-details{height:2px;background:#ff6c00;background:-moz-linear-gradient(left,#ff6c00 0,#ff6c00 25%,#f2c60b 25%,#f2c60b 50%,#6c82ff 50%,#6c82ff 75%,#2d981f 75%,#2d981f 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,#ff6c00),color-stop(25%,#ff6c00),color-stop(25%,#f2c60b),color-stop(50%,#f2c60b),color-stop(50%,#6c82ff),color-stop(75%,#6c82ff),color-stop(50%,#2d981f),color-stop(75%,#2d981f));background:-webkit-linear-gradient(left,#ff6c00,#ff6c00 25%,#f2c60b 0,#f2c60b 50%,#6c82ff 0,#6c82ff 75%,#2d981f 0,#2d981f 75%);background:-o-linear-gradient(left,#ff6c00 0,#ff6c00 25%,#f2c60b 25%,#f2c60b 50%,#6c82ff 50%,#6c82ff 75%,#2d981f 50%,#2d981f 75%);background:-ms-linear-gradient(left,#ff6c00 0,#ff6c00 25%,#f2c60b 25%,#f2c60b 50%,#6c82ff 50%,#6c82ff 75%,#2d981f 50%,#2d981f 75%);background:-webkit-gradient(linear,left top,right top,from(#ff6c00),color-stop(25%,#ff6c00),color-stop(25%,#f2c60b),color-stop(50%,#f2c60b),color-stop(50%,#6c82ff),color-stop(75%,#6c82ff),color-stop(50%,#2d981f),color-stop(75%,#2d981f));background:linear-gradient(90deg,#ff6c00 0,#ff6c00 25%,#f2c60b 0,#f2c60b 50%,#6c82ff 0,#6c82ff 75%,#2d981f 0,#2d981f 75%);margin:10px 0}"},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=119.js.map