(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-street-detail-street-detail-module"],{

/***/ "./src/app/module-pulstrade/pages/street-detail/street-detail.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/street-detail/street-detail.module.ts ***!
  \******************************************************************************/
/*! exports provided: HttpLoaderFactory, StreetDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetDetailPageModule", function() { return StreetDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _street_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./street-detail.page */ "./src/app/module-pulstrade/pages/street-detail/street-detail.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _street_detail_page__WEBPACK_IMPORTED_MODULE_5__["StreetDetailPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/strade/i18n/', '.json');
}
var StreetDetailPageModule = /** @class */ (function () {
    function StreetDetailPageModule() {
    }
    StreetDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    } }),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_street_detail_page__WEBPACK_IMPORTED_MODULE_5__["StreetDetailPage"]]
        })
    ], StreetDetailPageModule);
    return StreetDetailPageModule;
}());



/***/ }),

/***/ "./src/app/module-pulstrade/pages/street-detail/street-detail.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/street-detail/street-detail.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"interaction\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n        <div (click)=\"toggleNotification()\">\n            <ion-icon class=\"interaction icon-bar\" name=\"notifications\" *ngIf=\"isEnabled(); else disabled\"></ion-icon>\n            <ng-template #disabled>\n              <ion-icon class=\"interaction icon-bar\" name=\"notifications-outline\"></ion-icon>\n            </ng-template>\n          </div>\n              </ion-buttons>\n\n    <ion-title>\n      {{streetName}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list  *ngIf=\"streetDetails\">\n    <div class=\"clean-container\" *ngFor=\"let s of streetDetails\">\n      <div [id]=\"s.id\">\n        <div>\n          <div class=\"left\">\n            <b>{{s.cleaningDayStr}}</b>\n            <!-- <h1>{{s.streetName}}</h1> -->\n            <p>{{'CLOSED' | translate}} <b>{{s.stopStartingTimeStr}}</b> - <b>{{s.stopEndingTimeStr}}</b></p>\n            <div>{{s.notes}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/street-detail/street-detail.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/street-detail/street-detail.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".interaction {\n  color: #11B3EF !important; }\n\n.clean-container {\n  background-color: #e3e3e3; }\n\n.icon-bar {\n  font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtcHVsc3RyYWRlL3BhZ2VzL3N0cmVldC1kZXRhaWwvc3RyZWV0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBd0IsRUFDM0I7O0FBQ0Q7RUFDSSwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1wdWxzdHJhZGUvcGFnZXMvc3RyZWV0LWRldGFpbC9zdHJlZXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRlcmFjdGlvbiB7XG4gICAgY29sb3I6ICMxMUIzRUYhaW1wb3J0YW50O1xufVxuLmNsZWFuLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xufVxuLmljb24tYmFyIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/street-detail/street-detail.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/street-detail/street-detail.page.ts ***!
  \****************************************************************************/
/*! exports provided: StreetDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetDetailPage", function() { return StreetDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/map.service */ "./src/app/module-pulstrade/services/map.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/module-pulstrade/services/notification.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StreetDetailPage = /** @class */ (function () {
    function StreetDetailPage(translate, config, router, mapSrv, datePipe, notSrv, route, platform) {
        this.translate = translate;
        this.config = config;
        this.router = router;
        this.mapSrv = mapSrv;
        this.datePipe = datePipe;
        this.notSrv = notSrv;
        this.route = route;
        this.platform = platform;
        this.streetDetails = [];
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
        this.myPos = window[this.config.getAppModuleName()]['geolocation'];
    }
    StreetDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.streets = this.mapSrv.getData();
        this.notif = this.convertToMapId(this.notSrv.getNotStreets());
        /** Add DateTimes in string format */
        if (this.streets)
            this.streets.forEach(function (s) {
                s.cleaningDayStr = _this.datePipe.transform(s.cleaningDay, 'dd/MM/yyyy');
                var tmp = new Date(s.stopStartingTime).toLocaleTimeString().split(':');
                s.stopStartingTimeStr = tmp[0] + ":" + tmp[1];
                tmp = new Date(s.stopEndingTime).toLocaleTimeString().split(':');
                s.stopEndingTimeStr = tmp[0] + ":" + tmp[1];
                s.centralCoordStr = JSON.stringify(s.centralCoords);
                s.idNumber = parseInt(s.streetCode.replace(/\_/g, ''), 10);
            });
        /** Parse URL params */
        try {
            this.route.queryParams
                .subscribe(function (params) {
                _this.idNumber = params.street;
                _this.search(params.street);
            });
        }
        catch (_a) { }
    };
    StreetDetailPage.prototype.convertToMapId = function (array) {
        var map = {};
        if (array)
            array.forEach(function (el) {
                map[el.idNumber] = el;
            });
        return map;
    };
    StreetDetailPage.prototype.search = function (input) {
        var val;
        if (input) {
            if (input.detail) {
                val = input.detail.target.value;
            }
            else {
                val = input;
            }
            if (val === '') {
                this.streetDetails = [];
            }
            else {
                if (this.streets) {
                    this.streetDetails = this.streets.filter(function (el) {
                        return (String(el.idNumber) === val);
                    });
                    if (this.streetDetails && this.streetDetails.length > 0)
                        this.streetName = this.streetDetails[0].streetName;
                    //  this.streetDetails = this.getUnique(this.streetDetails, 'streetCode')
                }
            }
        }
    };
    StreetDetailPage.prototype.getUnique = function (arr, comp) {
        var unique = arr
            .map(function (e) { return e[comp]; })
            // store the keys of the unique objects
            .map(function (e, i, final) { return final.indexOf(e) === i && i; })
            // eliminate the dead keys & store unique objects
            .filter(function (e) { return arr[e]; }).map(function (e) { return arr[e]; });
        return unique;
    };
    StreetDetailPage.prototype.toggleNotification = function () {
        var street = this.notif[this.idNumber];
        if (this.notif[this.idNumber] != undefined) {
            this.notSrv.disableNotification(street);
        }
        else {
            this.notSrv.setNotification(street);
        }
        this.notif = this.convertToMapId(this.notSrv.getNotStreets());
    };
    StreetDetailPage.prototype.isEnabled = function () {
        if (this.streetName)
            return this.notif[this.idNumber] != undefined;
    };
    /**
     * Go to map page with specified coordinates
     * @param coord Street coordinates
     */
    StreetDetailPage.prototype.showInMap = function (coord) {
        this.router.navigate(['/ps'], { queryParams: { coord: JSON.stringify(coord) } });
    };
    StreetDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-street-detail',
            template: __webpack_require__(/*! ./street-detail.page.html */ "./src/app/module-pulstrade/pages/street-detail/street-detail.page.html"),
            styles: [__webpack_require__(/*! ./street-detail.page.scss */ "./src/app/module-pulstrade/pages/street-detail/street-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]])
    ], StreetDetailPage);
    return StreetDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-street-detail-street-detail-module.js.map