(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-info-detail-info-module"],{

/***/ "./src/app/module-comune/pages/detail-info/detail-info.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-info/detail-info.module.ts ***!
  \***********************************************************************/
/*! exports provided: DetailInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailInfoPageModule", function() { return DetailInfoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-info.page */ "./src/app/module-comune/pages/detail-info/detail-info.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _detail_info_page__WEBPACK_IMPORTED_MODULE_5__["DetailInfoPage"]
    }
];
var DetailInfoPageModule = /** @class */ (function () {
    function DetailInfoPageModule() {
    }
    DetailInfoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_detail_info_page__WEBPACK_IMPORTED_MODULE_5__["DetailInfoPage"]]
        })
    ], DetailInfoPageModule);
    return DetailInfoPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/detail-info/detail-info.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-info/detail-info.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>\n        {{'title_detail_info'|translate}}\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor=\"let info of details\">\n    <wc-detail-info [info]=\"info\">\n    </wc-detail-info>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-comune/pages/detail-info/detail-info.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-info/detail-info.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1jb211bmUvcGFnZXMvZGV0YWlsLWluZm8vZGV0YWlsLWluZm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/module-comune/pages/detail-info/detail-info.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-info/detail-info.page.ts ***!
  \*********************************************************************/
/*! exports provided: DetailInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailInfoPage", function() { return DetailInfoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailInfoPage = /** @class */ (function () {
    function DetailInfoPage(router, route, dbService) {
        this.router = router;
        this.route = route;
        this.dbService = dbService;
        this.details = [];
        this.language = "it";
    }
    DetailInfoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            console.log(params); // {order: "popular"}
            if (params) {
                var info = JSON.parse(params.info);
                _this.info = info;
            }
        });
    };
    DetailInfoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.info && this.info.objectIds)
            this.dbService.getObjectById(this.info.objectIds[0]).then(function (data) {
                _this.details.push(_this.convertInfo(data.docs[0]));
            });
        // this.dbService.getPois().then((data) => {
        //   this.pois = data.map(x => this.convertPois(x));
        // });
    };
    DetailInfoPage.prototype.convertInfo = function (x) {
        var categoryElement = {};
        categoryElement.id = x.id;
        if (x) {
            if (x.name)
                categoryElement.name = x.name[this.language];
            if (x.title)
                categoryElement.title = x.title[this.language];
            if (x.description)
                categoryElement.description = x.description[this.language];
        }
        return categoryElement;
    };
    DetailInfoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-info',
            template: __webpack_require__(/*! ./detail-info.page.html */ "./src/app/module-comune/pages/detail-info/detail-info.page.html"),
            styles: [__webpack_require__(/*! ./detail-info.page.scss */ "./src/app/module-comune/pages/detail-info/detail-info.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"]])
    ], DetailInfoPage);
    return DetailInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detail-info-detail-info-module.js.map