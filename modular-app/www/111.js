(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ "./node_modules/wcs-comune/dist/esm/es5/build/np47qduy.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/wcs-comune/dist/esm/es5/build/np47qduy.entry.js ***!
  \**********************************************************************/
/*! exports provided: WcCategoryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WcCategoryButton", function() { return WcCategoryButton; });
/* harmony import */ var _ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ws-comune.core.js */ "./node_modules/wcs-comune/dist/esm/es5/ws-comune.core.js");
/* harmony import */ var _chunk_d08ceb08_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-d08ceb08.js */ "./node_modules/wcs-comune/dist/esm/es5/build/chunk-d08ceb08.js");
var WcCategoryButton=function(){function t(){this.iconAlign="left",this.bgColor="white",this.icons=new _chunk_d08ceb08_js__WEBPACK_IMPORTED_MODULE_1__["a"]}return t.prototype.componentWillLoad=function(){this.iconFill||(this.iconFill="black"),this.textColor||(this.textColor="black")},t.prototype.categorySelectedHandler=function(t){this.categorySelected.emit(t)},t.prototype.render=function(){var t=this;return Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"container",style:{backgroundColor:this.bgColor},onClick:function(){return t.categorySelectedHandler(t.category)}},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"img-button"},Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"icon icon-"+this.iconAlign},this.icons.iconList[this.icon]?this.icons.iconList[this.icon](this.iconFill):Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img",{src:this.icon}))),Object(_ws_comune_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"text-button",style:{color:this.textColor}},this.category))},Object.defineProperty(t,"is",{get:function(){return"wc-category-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{bgColor:{type:String,attr:"bg-color"},category:{type:String,attr:"category"},icon:{type:String,attr:"icon"},iconAlign:{type:String,attr:"icon-align"},iconFill:{type:String,attr:"icon-fill"},textColor:{type:String,attr:"text-color"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"categorySelected",method:"categorySelected",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".container{border:1px solid red;padding:8px;margin:8px;-webkit-box-shadow:.5em .5em .5em 0 #d3d3d3;box-shadow:.5em .5em .5em 0 #d3d3d3;max-width:100%}.container:after{clear:both;content:\"\";display:table}.img-button{margin:auto}.text-button{text-align:center;margin:8px;font-size:22px}.icon{min-width:5%;max-width:10%;margin:1%}.icon svg{width:40px;height:40px}.icon img{max-width:50px;max-height:50px}.icon-left{text-align:left;float:left;margin-left:4%}.icon-right{text-align:right;float:right;margin-right:4%}.icon-top{display:block;text-align:center;margin:0 auto}"},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=111.js.map