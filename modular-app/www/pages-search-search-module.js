(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "./src/app/module-pulstrade/pages/search/search.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/search/search.module.ts ***!
  \****************************************************************/
/*! exports provided: HttpLoaderFactory, SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.page */ "./src/app/module-pulstrade/pages/search/search.page.ts");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/strade/i18n/', '.json');
}
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    } }),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/module-pulstrade/pages/search/search.page.html":
/*!****************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/search/search.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{'SEARCH' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-searchbar showCancelButton animated (ionInput)=\"search($event)\" placeholder=\"{{'SEARCH' | translate}}\"></ion-searchbar>\n\n<ion-content padding>\n  <ion-list no-lines *ngIf=\"showStreets\">\n    <div *ngFor=\"let s of showStreets\">\n      <ion-card [id]=\"s.id\">\n        <ion-card-content>\n          <div class=\"left\" [routerLink]=\"['/ps']\" [queryParams]=\"{coord: s.centralCoordStr}\" routerDirection=\"forward\">\n            <b>{{s.cleaningDayStr}}</b>\n            <h1>{{s.streetName}}</h1>\n            <p>{{'CLOSED' | translate}} <b>{{s.stopStartingTimeStr}}</b> - <b>{{s.stopEndingTimeStr}}</b></p>\n          </div>\n          <div class=\"right\">\n            <ion-toggle [id]=\"'tog-' + s.idNumber\" (ionChange)=\"toggle($event)\" [value]=\"s.streetName\"></ion-toggle>\n          </div>\n          <p [id]=\"'not-' + s.idNumber\" class=\"notification\">{{'NOTIFY-DIS' | translate}}</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/search/search.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/search/search.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  background: white !important; }\n\n.left {\n  float: left;\n  width: 75%;\n  padding-bottom: 5%; }\n\n.right {\n  float: right;\n  vertical-align: middle; }\n\n.notification {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtcHVsc3RyYWRlL3BhZ2VzL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTRCLEVBQy9COztBQUNEO0VBQ0ksWUFBVztFQUNYLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osdUJBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLXB1bHN0cmFkZS9wYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuLnJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5ub3RpZmljYXRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/search/search.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/search/search.page.ts ***!
  \**************************************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
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








var SearchPage = /** @class */ (function () {
    function SearchPage(translate, config, router, mapSrv, datePipe, notificationSrv, route, platform) {
        this.translate = translate;
        this.config = config;
        this.router = router;
        this.mapSrv = mapSrv;
        this.datePipe = datePipe;
        this.notificationSrv = notificationSrv;
        this.route = route;
        this.platform = platform;
        this.showStreets = [];
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
        this.myPos = window[this.config.getAppModuleName()]['geolocation'];
    }
    SearchPage.prototype.ngOnInit = function () {
        var _this = this;
        this.streets = this.mapSrv.getData();
        /** Add DateTimes in string format */
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
                _this.search(params.street);
            });
        }
        catch (_a) { }
    };
    /**
     * Set searchbar focus
     */
    SearchPage.prototype.ionViewDidEnter = function () {
        var el = document.querySelector('ion-searchbar');
        if (el) {
            el.setFocus();
        }
    };
    /**
     * Search streets and put them in `showStreets` object
     * @param input `(change)` event
     */
    SearchPage.prototype.search = function (input) {
        var val;
        if (input) {
            if (input.detail) {
                val = input.detail.target.value;
            }
            else {
                val = input;
            }
            if (val === '') {
                this.showStreets = [];
            }
            else {
                this.showStreets = this.streets.filter(function (el) {
                    return (el.streetName.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        }
    };
    /**
     * Go to map page with specified coordinates
     * @param coord Street coordinates
     */
    SearchPage.prototype.showInMap = function (coord) {
        this.router.navigate(['/ps'], { queryParams: { coord: JSON.stringify(coord) } });
    };
    /**
     * Enable or disable notifications
     * @param event `click` event
     */
    SearchPage.prototype.toggle = function (event) {
        var _this = this;
        this.platform.ready().then(function () {
            var element, toggle;
            var street = _this.streets.filter(function (val) {
                return val.streetName === event.detail.value;
            });
            if (event.detail.checked) {
                street.forEach(function (s) {
                    element = document.getElementById('not-' + s.idNumber);
                    toggle = document.getElementById('tog-' + s.idNumber);
                    _this.notificationSrv.setNotification(street);
                    element.style.color = 'green';
                    _this.translate.get('NOTIFY-ENA').subscribe(function (x) {
                        element.innerHTML = x;
                    });
                    toggle.checked = true;
                });
            }
            else {
                street.forEach(function (s) {
                    element = document.getElementById('not-' + s.idNumber);
                    toggle = document.getElementById('tog-' + s.idNumber);
                    _this.notificationSrv.disableNotification(street);
                    element.style.color = '#737373';
                    _this.translate.get('NOTIFY-DIS').subscribe(function (x) {
                        element.innerHTML = x;
                    });
                    toggle.checked = false;
                });
            }
        });
    };
    SearchPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/module-pulstrade/pages/search/search.page.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/module-pulstrade/pages/search/search.page.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-search-search-module.js.map