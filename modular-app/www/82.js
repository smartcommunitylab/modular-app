(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/@ionic/core/dist/esm/legacy/ion-text.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/ion-text.entry.js ***!
  \********************************************************************/
/*! exports provided: ion_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_text", function() { return Text; });
/* harmony import */ var _chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-09ec7fc0.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-09ec7fc0.js");
/* harmony import */ var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-1074393c.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-1074393c.js");
/* harmony import */ var _chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-ba834eff.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-ba834eff.js");



/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
var Text = /** @class */ (function () {
    function Text(hostRef) {
        Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Text.prototype.hostData = function () {
        var _a;
        var mode = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return {
            class: Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), (_a = {}, _a[mode] = true, _a))
        };
    };
    Text.prototype.__stencil_render = function () {
        return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    };
    Text.prototype.render = function () { return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render()); };
    Object.defineProperty(Text, "style", {
        get: function () { return ":host(.ion-color){color:var(--ion-color-base)}"; },
        enumerable: true,
        configurable: true
    });
    return Text;
}());



/***/ })

}]);
//# sourceMappingURL=82.js.map