(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-path-list-path-module"],{

/***/ "./src/app/module-comune/pages/list-path/list-path.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/list-path/list-path.module.ts ***!
  \*******************************************************************/
/*! exports provided: HttpLoaderFactory, ListPathPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPathPageModule", function() { return ListPathPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_path_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-path.page */ "./src/app/module-comune/pages/list-path/list-path.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _list_path_page__WEBPACK_IMPORTED_MODULE_5__["ListPathPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var ListPathPageModule = /** @class */ (function () {
    function ListPathPageModule() {
    }
    ListPathPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    } }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_list_path_page__WEBPACK_IMPORTED_MODULE_5__["ListPathPage"]]
        })
    ], ListPathPageModule);
    return ListPathPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/list-path/list-path.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/list-path/list-path.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"secondary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          {{'PATH'|translate}}\n        </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-list no-lines id=\"path-list\">\n    <div *ngFor=\"let poi of pois\">      \n      <wc-path-list-el type=\"PATH\" [id]=\"poi.id\" [img]=\"poi.image\" [title]=\"poi.title\" [text]=\"poi.subtitle\" main-color=\"red\"></wc-path-list-el>\n    </div>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/module-comune/pages/list-path/list-path.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/list-path/list-path.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1jb211bmUvcGFnZXMvbGlzdC1wYXRoL2xpc3QtcGF0aC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/module-comune/pages/list-path/list-path.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module-comune/pages/list-path/list-path.page.ts ***!
  \*****************************************************************/
/*! exports provided: ListPathPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPathPage", function() { return ListPathPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPathPage = /** @class */ (function () {
    function ListPathPage(navCtrl, dbService, alertCtrl, router, route, translate) {
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.pois = [];
        this.language = 'it';
        this.translate.use(this.language);
    }
    ListPathPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            console.log(params);
            if (params) {
                var cat = JSON.parse(params.category);
                _this.category = cat;
            }
        });
    };
    ListPathPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.category && this.category.query) {
            this.dbService.getObjectByQuery(this.category.query).then(function (data) {
                _this.pois = data.docs.map(function (x) { return _this.convertPois(x); });
            });
        }
        var el = document.getElementById('path-list');
        el.addEventListener('pathSelected', function (path) {
            _this.goToDetail(path.detail);
        });
    };
    ListPathPage.prototype.convertPois = function (x) {
        var poiElement = {};
        if (x) {
            if (x.title) {
                poiElement.title = x.title[this.language];
            }
            if (x.subtitle) {
                poiElement.subtitle = x.subtitle[this.language];
            }
            if (x.description) {
                poiElement.description = x.description[this.language];
            }
            if (x.image) {
                poiElement.image = x.image;
            }
            if (x._id) {
                poiElement.id = x._id;
            }
        }
        return poiElement;
    };
    ListPathPage.prototype.goToDetail = function (id) {
        this.router.navigate(['/detail-path'], { queryParams: { id: id } });
    };
    ListPathPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-path',
            template: __webpack_require__(/*! ./list-path.page.html */ "./src/app/module-comune/pages/list-path/list-path.page.html"),
            styles: [__webpack_require__(/*! ./list-path.page.scss */ "./src/app/module-comune/pages/list-path/list-path.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ListPathPage);
    return ListPathPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-path-list-path-module.js.map