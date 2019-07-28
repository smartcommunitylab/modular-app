(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ "./node_modules/wcs-comune/dist/esm/es5/build/oqq34gwq.sc.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/wcs-comune/dist/esm/es5/build/oqq34gwq.sc.entry.js ***!
  \*************************************************************************/
/*! exports provided: WcListPoi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WcListPoi", function() { return WcPoi; });
/* harmony import */ var _ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ws-comune.core.js */ "./node_modules/wcs-comune/dist/esm/es5/ws-comune.core.js");
var WcPoi=function(){function e(){}return e.prototype.cjsonHandler=function(){console.log("changed")},e.prototype.poiCompletedHandler=function(e){this.poiCompleted.emit(e)},e.prototype.getPoiTitle=function(){if(this.poi)return this.poi.title},e.prototype.getPoiAddress=function(){if(this.poi&&this.poi.address)return this.poi.address},e.prototype.getPoiAddressName=function(){if(this.poi&&this.poi.address)return this.getPoiAddress().name},e.prototype.getImg=function(){if(this.poi)return this.poi.image},e.prototype.componentDidLoad=function(){console.log(this.getPoiTitle()),this.poiCompletedHandler(this.poi)},e.prototype.render=function(){return Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"container"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{innerHTML:this.poi.title}),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{innerHTML:this.poi.subtitle}),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",null,this.getPoiAddressName()),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{innerHTML:this.poi.description}),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",null,Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img",{src:this.getImg()})))},Object.defineProperty(e,"is",{get:function(){return"wc-list-poi"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{poi:{type:"Any",attr:"poi",mutable:!0,watchCallbacks:["cjsonHandler"]},wcAddress:{type:String,attr:"wc-address",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"poiCompleted",method:"poiCompleted",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".container.sc-wc-list-poi{border:1px solid grey;padding:8px;margin:8px}"},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=115.js.map