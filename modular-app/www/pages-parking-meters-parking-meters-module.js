(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parking-meters-parking-meters-module"],{

/***/ "./src/app/module-trasporti/pages/parking-meters/parking-meters.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/parking-meters/parking-meters.module.ts ***!
  \********************************************************************************/
/*! exports provided: ParkingMetersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingMetersPageModule", function() { return ParkingMetersPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _parking_meters_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parking-meters.page */ "./src/app/module-trasporti/pages/parking-meters/parking-meters.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _parking_meters_page__WEBPACK_IMPORTED_MODULE_5__["ParkingMetersPage"]
    }
];
var ParkingMetersPageModule = /** @class */ (function () {
    function ParkingMetersPageModule() {
    }
    ParkingMetersPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_parking_meters_page__WEBPACK_IMPORTED_MODULE_5__["ParkingMetersPage"]]
        })
    ], ParkingMetersPageModule);
    return ParkingMetersPageModule;
}());



/***/ }),

/***/ "./src/app/module-trasporti/pages/parking-meters/parking-meters.page.html":
/*!********************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/parking-meters/parking-meters.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>parkingMeters</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/module-trasporti/pages/parking-meters/parking-meters.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/parking-meters/parking-meters.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS10cmFzcG9ydGkvcGFnZXMvcGFya2luZy1tZXRlcnMvcGFya2luZy1tZXRlcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/module-trasporti/pages/parking-meters/parking-meters.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/parking-meters/parking-meters.page.ts ***!
  \******************************************************************************/
/*! exports provided: ParkingMetersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingMetersPage", function() { return ParkingMetersPage; });
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

var ParkingMetersPage = /** @class */ (function () {
    function ParkingMetersPage() {
    }
    ParkingMetersPage.prototype.ngOnInit = function () {
    };
    ParkingMetersPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parking-meters',
            template: __webpack_require__(/*! ./parking-meters.page.html */ "./src/app/module-trasporti/pages/parking-meters/parking-meters.page.html"),
            styles: [__webpack_require__(/*! ./parking-meters.page.scss */ "./src/app/module-trasporti/pages/parking-meters/parking-meters.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParkingMetersPage);
    return ParkingMetersPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-parking-meters-parking-meters-module.js.map