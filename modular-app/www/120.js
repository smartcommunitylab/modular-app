(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

/***/ "./node_modules/wcs-comune/dist/esm/es5/build/uogo5u0e.sc.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/wcs-comune/dist/esm/es5/build/uogo5u0e.sc.entry.js ***!
  \*************************************************************************/
/*! exports provided: WcPathListEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WcPathListEl", function() { return WcPathList; });
/* harmony import */ var _ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ws-comune.core.js */ "./node_modules/wcs-comune/dist/esm/es5/ws-comune.core.js");
var WcPathList=function(){function t(){this.bgColor="white"}return t.prototype.pathSelectedHandler=function(t){this.pathSelected.emit(t+";"+this.type)},t.prototype.render=function(){var t=this;return[Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"container",onClick:function(){return t.pathSelectedHandler(t.id)},style:{background:this.bgColor}},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"image"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img",{src:this.img})),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"title"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3",{style:{color:this.mainColor}},this.title)),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"description"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",{style:{color:this.descColor},innerHTML:this.text})))]},Object.defineProperty(t,"is",{get:function(){return"wc-path-list-el"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{bgColor:{type:String,attr:"bg-color"},descColor:{type:String,attr:"desc-color"},id:{type:String,attr:"id"},img:{type:String,attr:"img"},mainColor:{type:String,attr:"main-color"},text:{type:String,attr:"text"},title:{type:String,attr:"title"},type:{type:String,attr:"type"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"pathSelected",method:"pathSelected",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".container.sc-wc-path-list-el{text-align:center;margin:1%;border:1px solid #000;margin-bottom:3%}.title.sc-wc-path-list-el > h3.sc-wc-path-list-el{margin-top:2%;text-align:center}.description.sc-wc-path-list-el{margin:1%}.description.sc-wc-path-list-el > p.sc-wc-path-list-el{margin-bottom:3%;text-align:left;margin-left:15px}.image.sc-wc-path-list-el{max-height:175px;overflow:hidden;margin:5px}.image.sc-wc-path-list-el > img.sc-wc-path-list-el{max-width:100%}"},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=120.js.map