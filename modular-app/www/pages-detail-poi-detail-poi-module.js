(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-poi-detail-poi-module"],{

/***/ "./src/app/module-comune/pages/detail-poi/detail-poi.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-poi/detail-poi.module.ts ***!
  \*********************************************************************/
/*! exports provided: DetailPoiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPoiPageModule", function() { return DetailPoiPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_poi_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-poi.page */ "./src/app/module-comune/pages/detail-poi/detail-poi.page.ts");
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
        component: _detail_poi_page__WEBPACK_IMPORTED_MODULE_5__["DetailPoiPage"]
    }
];
var DetailPoiPageModule = /** @class */ (function () {
    function DetailPoiPageModule() {
    }
    DetailPoiPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_detail_poi_page__WEBPACK_IMPORTED_MODULE_5__["DetailPoiPage"]]
        })
    ], DetailPoiPageModule);
    return DetailPoiPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/detail-poi/detail-poi.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-poi/detail-poi.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-title *ngIf=\"poi\">\n        {{poi.title[lang]}}\n        </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n    <wc-details *ngIf=\"poi\" [title]=\"poi.title[lang]\" [subtitle]=\"poi.subtitle[lang]\"  [text]=\"poi.description[lang]\" [info]=\"poi.info[lang]\" [contacts]=\"contacts\" [img]=\"poi.image\"></wc-details>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/module-comune/pages/detail-poi/detail-poi.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-poi/detail-poi.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1jb211bmUvcGFnZXMvZGV0YWlsLXBvaS9kZXRhaWwtcG9pLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/module-comune/pages/detail-poi/detail-poi.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-poi/detail-poi.page.ts ***!
  \*******************************************************************/
/*! exports provided: DetailPoiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPoiPage", function() { return DetailPoiPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailPoiPage = /** @class */ (function () {
    function DetailPoiPage(router, route, dbService, config) {
        this.router = router;
        this.route = route;
        this.dbService = dbService;
        this.config = config;
        this.contacts = {};
        this.language = window[this.config.getAppModuleName()]['language'];
    }
    DetailPoiPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            if (params.objectIds) {
                _this.manageoLcalId(params.objectIds);
            }
            else if (params) {
                _this.type = params.type;
                _this.dbService.getObjectById(params.id).then(function (data) {
                    _this.poi = data.docs[0];
                    _this.buildContacts();
                });
            }
        });
    };
    DetailPoiPage.prototype.manageoLcalId = function (objectIds) {
        var _this = this;
        if (objectIds.length == 1) {
            this.dbService.getObjectByDataId(objectIds[0]).then(function (data) {
                _this.poi = data.docs[0];
                _this.type = data.docs[0].fromTime ? 'EVENT' : 'POI';
                _this.buildContacts();
            });
        }
    };
    DetailPoiPage.prototype.buildContacts = function () {
        if (this.contacts) {
            this.contacts['address'] = this.poi.address[this.language];
        }
        if (this.type === 'POI') {
            if (this.poi.contacts.email && this.poi.contacts.email !== '') {
                this.contacts['email'] = this.poi.contacts.email;
            }
            if (this.poi.contacts.phone && this.poi.contacts.phone !== '') {
                this.contacts['phone'] = this.poi.contacts.phone;
            }
            if (this.poi.url && this.poi.url !== '') {
                this.contacts['url'] = this.poi.url;
            }
            this.contacts['distance'] = 0; // TOFIX
        }
        else if (this.type === 'EVENT') {
            if (this.poi.eventPeriod) {
                this.contacts['date'] = this.poi.eventPeriod[this.language];
            }
            if (this.poi.eventTiming) {
                this.contacts['time'] = this.poi.eventTiming[this.language];
            }
            if (this.poi.topics) {
                this.contacts['cat'] = this.poi.topics[0];
            }
            if (this.poi.cost && this.poi.cost[this.language] !== '') {
                this.contacts['price'] = this.poi.cost[this.language];
            }
        }
        this.contacts = JSON.stringify(this.contacts);
    };
    DetailPoiPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-poi',
            template: __webpack_require__(/*! ./detail-poi.page.html */ "./src/app/module-comune/pages/detail-poi/detail-poi.page.html"),
            styles: [__webpack_require__(/*! ./detail-poi.page.scss */ "./src/app/module-comune/pages/detail-poi/detail-poi.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], DetailPoiPage);
    return DetailPoiPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detail-poi-detail-poi-module.js.map