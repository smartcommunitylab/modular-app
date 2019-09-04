(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-streets-list-streets-module"],{

/***/ "./src/app/module-pulstrade/pages/list-streets/list-streets.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/list-streets/list-streets.module.ts ***!
  \****************************************************************************/
/*! exports provided: HttpLoaderFactory, ListStreetsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStreetsPageModule", function() { return ListStreetsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_streets_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-streets.page */ "./src/app/module-pulstrade/pages/list-streets/list-streets.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _list_streets_page__WEBPACK_IMPORTED_MODULE_8__["ListStreetsPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__["TranslateHttpLoader"](http, './assets/strade/i18n/', '.json');
}
var ListStreetsPageModule = /** @class */ (function () {
    function ListStreetsPageModule() {
    }
    ListStreetsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                    } }),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_list_streets_page__WEBPACK_IMPORTED_MODULE_8__["ListStreetsPage"]]
        })
    ], ListStreetsPageModule);
    return ListStreetsPageModule;
}());



/***/ }),

/***/ "./src/app/module-pulstrade/pages/list-streets/list-streets.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/list-streets/list-streets.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button class=\"interaction\"></ion-back-button>\n      </ion-buttons>  \n      <ion-title>\n          {{'list_street_label' | translate}}{{date}}\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list *ngIf=\"streets\">\n      <div class=\"clean-container\" *ngFor=\"let s of streets\">\n        <div [id]=\"s.id\">\n          <ion-grid class=\"note\">\n            <ion-row>\n              <ion-col size=\"2\">\n                <div >\n                  <img src=\"./assets/strade/icons/divieto.png\">\n                </div>\n              </ion-col>\n              <ion-col size=\"10\">\n                <div>\n                    <div class=\"name\">{{s.streetName}}</div>\n                    <div class=\"time\"><b>{{'CLOSED' | translate}}</b> {{s.stopStartingTimeStr}}- {{s.stopEndingTimeStr}}</div>\n                  <div class=\"lato\" *ngIf=\"s.lato\"><b>{{'side_label' | translate}}</b> {{s.lato}}</div>\n                  <div class=\"tratto\" *ngIf=\"s.tratto\"><b>{{'tratto_label' | translate}}</b> {{s.tratto}}</div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n      <div *ngIf=\"streets.length==0\">\n          {{'NO-CLEANING' | translate}}\n      </div>\n    </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/list-streets/list-streets.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/list-streets/list-streets.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".interaction {\n  color: #11B3EF !important; }\n\n.clean-container {\n  background-color: #e3e3e3; }\n\n.icon-bar {\n  font-size: 30px; }\n\n.note {\n  padding: 8px;\n  margin: 4px;\n  text-align: center;\n  color: #707070;\n  font-weight: bold; }\n\n.note ion-icon {\n    font-size: 35px;\n    height: 100%;\n    display: block;\n    vertical-align: middle;\n    color: #ff6c00; }\n\n.day {\n  margin: 4px;\n  font-size: 22px; }\n\n.time {\n  margin: 4px;\n  font-size: 17px; }\n\n.note {\n  margin: 4px;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtcHVsc3RyYWRlL3BhZ2VzL2xpc3Qtc3RyZWV0cy9saXN0LXN0cmVldHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2Qsa0JBQWlCLEVBU3BCOztBQWREO0lBUVEsZ0JBQWU7SUFDZixhQUFZO0lBQ1osZUFBYztJQUNkLHVCQUFzQjtJQUN0QixlQUFjLEVBQ2pCOztBQUdMO0VBQ0ksWUFBVztFQUNYLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLXB1bHN0cmFkZS9wYWdlcy9saXN0LXN0cmVldHMvbGlzdC1zdHJlZXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRlcmFjdGlvbiB7XG4gICAgY29sb3I6ICMxMUIzRUYgIWltcG9ydGFudDtcbn1cblxuLmNsZWFuLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcbn1cblxuLmljb24tYmFyIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5ub3RlIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGNvbG9yOiAjZmY2YzAwO1xuICAgIH1cbn1cblxuLmRheSB7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4udGltZSB7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubm90ZSB7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/list-streets/list-streets.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/list-streets/list-streets.page.ts ***!
  \**************************************************************************/
/*! exports provided: ListStreetsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStreetsPage", function() { return ListStreetsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/module-pulstrade/services/util.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListStreetsPage = /** @class */ (function () {
    function ListStreetsPage(translate, datePipe, util, route) {
        this.translate = translate;
        this.datePipe = datePipe;
        this.util = util;
        this.route = route;
        this.streets = null;
        this.language = window[this.util.getAppModuleName()]['language'];
        this.translate.use(this.language);
    }
    ListStreetsPage.prototype.ngOnInit = function () {
        var _this = this;
        /** Parse URL params */
        try {
            this.route.queryParams
                .subscribe(function (params) {
                if (params.streets)
                    _this.streets = JSON.parse(params.streets);
                if (params.date)
                    _this.date = params.date;
                if (_this.streets)
                    _this.streets.forEach(function (s) {
                        s.cleaningDayStr = _this.datePipe.transform(s.cleaningDay, 'dd/MM/yyyy');
                        var tmp = new Date(s.stopStartingTime).toLocaleTimeString('it-IT').split(':');
                        s.stopStartingTimeStr = tmp[0] + ":" + tmp[1];
                        tmp = new Date(s.stopEndingTime).toLocaleTimeString('it-IT').split(':');
                        s.stopEndingTimeStr = tmp[0] + ":" + tmp[1];
                        s.centralCoordStr = JSON.stringify(s.centralCoords);
                        s.idNumber = parseInt(s.streetCode.replace(/\_/g, ''), 10);
                    });
            });
        }
        catch (_a) { }
    };
    ListStreetsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-streets',
            template: __webpack_require__(/*! ./list-streets.page.html */ "./src/app/module-pulstrade/pages/list-streets/list-streets.page.html"),
            styles: [__webpack_require__(/*! ./list-streets.page.scss */ "./src/app/module-pulstrade/pages/list-streets/list-streets.page.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ListStreetsPage);
    return ListStreetsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-streets-list-streets-module.js.map