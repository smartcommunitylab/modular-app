(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bikesharing-bikesharing-module"],{

/***/ "./src/app/module-trasporti/pages/bikesharing/bikesharing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/bikesharing/bikesharing.module.ts ***!
  \**************************************************************************/
/*! exports provided: BikesharingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikesharingPageModule", function() { return BikesharingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bikesharing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bikesharing.page */ "./src/app/module-trasporti/pages/bikesharing/bikesharing.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _bikesharing_page__WEBPACK_IMPORTED_MODULE_5__["BikesharingPage"]
    }
];
var BikesharingPageModule = /** @class */ (function () {
    function BikesharingPageModule() {
    }
    BikesharingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_bikesharing_page__WEBPACK_IMPORTED_MODULE_5__["BikesharingPage"]]
        })
    ], BikesharingPageModule);
    return BikesharingPageModule;
}());



/***/ }),

/***/ "./src/app/module-trasporti/pages/bikesharing/bikesharing.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/bikesharing/bikesharing.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>bikesharing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/module-trasporti/pages/bikesharing/bikesharing.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/bikesharing/bikesharing.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS10cmFzcG9ydGkvcGFnZXMvYmlrZXNoYXJpbmcvYmlrZXNoYXJpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/module-trasporti/pages/bikesharing/bikesharing.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/bikesharing/bikesharing.page.ts ***!
  \************************************************************************/
/*! exports provided: BikesharingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikesharingPage", function() { return BikesharingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BikesharingPage = /** @class */ (function () {
    function BikesharingPage() {
    }
    BikesharingPage.prototype.ngOnInit = function () {
    };
    BikesharingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bikesharing',
            template: __webpack_require__(/*! ./bikesharing.page.html */ "./src/app/module-trasporti/pages/bikesharing/bikesharing.page.html"),
            styles: [__webpack_require__(/*! ./bikesharing.page.scss */ "./src/app/module-trasporti/pages/bikesharing/bikesharing.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BikesharingPage);
    return BikesharingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bikesharing-bikesharing-module.js.map