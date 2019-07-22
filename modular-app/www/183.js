(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[183],{

/***/ "./node_modules/wcs-comune/dist/esm/es5/build/jekjezta.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/wcs-comune/dist/esm/es5/build/jekjezta.entry.js ***!
  \**********************************************************************/
/*! exports provided: WcPathListEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WcPathListEl", function() { return WcPathList; });
/* harmony import */ var _ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ws-comune.core.js */ "./node_modules/wcs-comune/dist/esm/es5/ws-comune.core.js");
var WcPathList=function(){function t(){}return t.prototype.pathSelectedHandler=function(t){this.pathSelected.emit(t+";"+this.type)},t.prototype.render=function(){var t=this;return[Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"container",onClick:function(){return t.pathSelectedHandler(t.id)}},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"image"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img",{style:{borderColor:this.mainColor},src:this.img})),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"title"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3",{style:{color:this.mainColor}},this.title)),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"description"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",{style:{color:this.descColor},innerHTML:this.text}))),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hr",null)]},Object.defineProperty(t,"is",{get:function(){return"wc-path-list-el"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{descColor:{type:String,attr:"desc-color"},id:{type:String,attr:"id"},img:{type:String,attr:"img"},mainColor:{type:String,attr:"main-color"},text:{type:String,attr:"text"},title:{type:String,attr:"title"},type:{type:String,attr:"type"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"pathSelected",method:"pathSelected",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".container{display:grid;grid-template-columns:25% auto;text-align:center;margin:0 auto}.title{grid-column:2}.title>h3{margin-top:1%;text-align:left;margin-left:15px}.description{grid-column:2}.description>p{margin-bottom:0;text-align:left;margin-left:15px}.image{grid-column:1;grid-row:1/span 2;vertical-align:middle;margin:0}.image>img{border-style:solid;border-width:3px;max-width:100%}hr{width:75%}"},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=183.js.map