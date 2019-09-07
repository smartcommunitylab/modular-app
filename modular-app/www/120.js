(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

/***/ "./node_modules/wcs-comune/dist/esm/es5/build/a9ze2jpq.sc.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/wcs-comune/dist/esm/es5/build/a9ze2jpq.sc.entry.js ***!
  \*************************************************************************/
/*! exports provided: WcTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WcTabs", function() { return WcTabs; });
/* harmony import */ var _ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ws-comune.core.js */ "./node_modules/wcs-comune/dist/esm/es5/ws-comune.core.js");
/* harmony import */ var _chunk_d08ceb08_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-d08ceb08.js */ "./node_modules/wcs-comune/dist/esm/es5/build/chunk-d08ceb08.js");
var WcTabs=function(){function t(){this.iconColor="black",this.bgColor="white",this.tabActived="info",this.icons=(new _chunk_d08ceb08_js__WEBPACK_IMPORTED_MODULE_1__["a"]).iconList}return t.prototype.componentWillLoad=function(){this.objContent=JSON.parse(this.content)},t.prototype.tabSelectedHandler=function(t){this.tabActived=t,this.tabSelected.emit(t)},t.prototype.render=function(){var t=this,e=[];return this.objContent&&this.objContent.forEach(function(n){e.push(Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"tab-"+n.target,class:"content",onClick:function(){return t.tabSelectedHandler(n.target)}},t.icons[n.icon](t.tabActived==n.target?"white":t.iconColor)))}),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"container",style:{backgroundColor:this.bgColor}},e)},Object.defineProperty(t,"is",{get:function(){return"wc-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{bgColor:{type:String,attr:"bg-color"},content:{type:String,attr:"content"},el:{elementRef:!0},iconColor:{type:String,attr:"icon-color"},tabActived:{type:String,attr:"tab-actived",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"tabSelected",method:"tabSelected",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".container.sc-wc-tabs{display:grid;grid-template-columns:auto auto auto;text-align:center;margin:0 auto}"},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=120.js.map