(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plan-plan-module"],{

/***/ "./src/app/module-trasporti/pages/plan/plan.module.ts":
/*!************************************************************!*\
  !*** ./src/app/module-trasporti/pages/plan/plan.module.ts ***!
  \************************************************************/
/*! exports provided: PlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPageModule", function() { return PlanPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plan_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan.page */ "./src/app/module-trasporti/pages/plan/plan.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _plan_page__WEBPACK_IMPORTED_MODULE_5__["PlanPage"]
    }
];
var PlanPageModule = /** @class */ (function () {
    function PlanPageModule() {
    }
    PlanPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_plan_page__WEBPACK_IMPORTED_MODULE_5__["PlanPage"]]
        })
    ], PlanPageModule);
    return PlanPageModule;
}());



/***/ }),

/***/ "./src/app/module-trasporti/pages/plan/plan.page.html":
/*!************************************************************!*\
  !*** ./src/app/module-trasporti/pages/plan/plan.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>plan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/module-trasporti/pages/plan/plan.page.scss":
/*!************************************************************!*\
  !*** ./src/app/module-trasporti/pages/plan/plan.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS10cmFzcG9ydGkvcGFnZXMvcGxhbi9wbGFuLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/module-trasporti/pages/plan/plan.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/module-trasporti/pages/plan/plan.page.ts ***!
  \**********************************************************/
/*! exports provided: PlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPage", function() { return PlanPage; });
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

var PlanPage = /** @class */ (function () {
    function PlanPage() {
    }
    PlanPage.prototype.ngOnInit = function () {
    };
    PlanPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan',
            template: __webpack_require__(/*! ./plan.page.html */ "./src/app/module-trasporti/pages/plan/plan.page.html"),
            styles: [__webpack_require__(/*! ./plan.page.scss */ "./src/app/module-trasporti/pages/plan/plan.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlanPage);
    return PlanPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plan-plan-module.js.map