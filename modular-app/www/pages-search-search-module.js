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

module.exports = "<ion-header >\n    <!-- <ion-searchbar  (ionCancel)=\"toggleSearch()\" showCancelButton=\"always\" animated (ionInput)=\"search($event)\" placeholder=\"{{'SEARCH' | translate}}\">\n      </ion-searchbar> -->\n  <ion-toolbar>\n      <ion-searchbar showCancelButton=\"never\" animated (ionInput)=\"search($event)\" placeholder=\"{{'SEARCH' | translate}}\">\n        </ion-searchbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"interaction\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>\n      {{'SEARCH' | translate}}\n    </ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <!-- <ion-spinner name=\"dots\" *ngIf=\"searching\"></ion-spinner> -->\n\n  <ion-list no-lines *ngIf=\"showStreets\">\n    <div *ngFor=\"let s of showStreets\">\n      <div [id]=\"s.id\">\n        <div>\n          <div class=\"left\" [routerLink]=\"['/street-detail']\" [queryParams]=\"{street: s.idNumber }\" routerDirection=\"forward\">\n            <div class=\"result interaction\" >{{s.streetName}}</div>\n            <div class=\"sub-result interaction\" >{{s.tratto}}</div>\n          </div>\n          <div class=\"right\" (click)=\"toggleNotification(s)\">\n            <ion-icon class=\"interaction icon-notification\" name=\"notifications\" *ngIf=\"isEnabled(s); else disabled\"></ion-icon>\n            <ng-template #disabled>\n              <ion-icon  class=\"interaction icon-notification\" name=\"notifications-outline\"></ion-icon>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n  <div class=\"no-results\" *ngIf=\"noResults\">\n    {{'no_roads_search'|translate}}\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/search/search.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/search/search.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  background: white !important; }\n\n.left {\n  float: left;\n  width: 75%; }\n\n.right {\n  float: right;\n  vertical-align: middle; }\n\n.notification {\n  text-align: center; }\n\n.interaction {\n  color: #11B3EF !important; }\n\n.icon-notification {\n  font-size: 30px; }\n\n.result {\n  font-size: 30px; }\n\n.sub-result {\n  font-size: 15px; }\n\nion-searchbar {\n  z-index: 999; }\n\n.no-results {\n  text-align: center;\n  font-size: 22px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL0RvY3VtZW50cy9Qcm9qZWN0cy9tb2R1bGFyQXBwL21vZHVsYXItYXBwL21vZHVsYXItYXBwL3NyYy9hcHAvbW9kdWxlLXB1bHN0cmFkZS9wYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUE0QixFQUMvQjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxXQUFVLEVBRWI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osdUJBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSxnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUNEO0VBS0ksYUFBWSxFQUNmOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLXB1bHN0cmFkZS9wYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDUlO1xufVxuLnJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5ub3RpZmljYXRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnRlcmFjdGlvbiB7XG4gICAgY29sb3I6ICMxMUIzRUYhaW1wb3J0YW50O1xufVxuXG4uaWNvbi1ub3RpZmljYXRpb257XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuLnJlc3VsdHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4uc3ViLXJlc3VsdHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5pb24tc2VhcmNoYmFyIHtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgIC8vIHRvcDogM3B4O1xuICAgIC8vIC8vIHRvcDogNThweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG4ubm8tcmVzdWx0c3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

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
    function SearchPage(translate, config, notSrv, router, mapSrv, datePipe, notificationSrv, route, platform) {
        this.translate = translate;
        this.config = config;
        this.notSrv = notSrv;
        this.router = router;
        this.mapSrv = mapSrv;
        this.datePipe = datePipe;
        this.notificationSrv = notificationSrv;
        this.route = route;
        this.platform = platform;
        this.noResults = false;
        this.showStreets = [];
        this.searching = false;
        this.doneTypingInterval = 500;
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
        this.myPos = window[this.config.getAppModuleName()]['geolocation'];
    }
    SearchPage.prototype.ngOnInit = function () {
    };
    SearchPage.prototype.convertToMapId = function (array) {
        var map = {};
        if (array)
            array.forEach(function (el) {
                if (el && el.idNumber)
                    map[el.idNumber] = el;
            });
        return map;
    };
    /**
     * Set searchbar focus
     */
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var el = document.querySelector('ion-searchbar');
        if (el) {
            el.setFocus();
        }
        this.notif = this.convertToMapId(this.notSrv.getNotStreets());
        this.streets = this.mapSrv.getData();
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
                _this.search(params.street);
            });
        }
        catch (_a) { }
    };
    SearchPage.prototype.search = function (input) {
        var _this = this;
        var val;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            if (input) {
                // this.searching=true;
                if (input.detail) {
                    val = input.detail.target.value;
                }
                //  else {
                //   val = input;
                // }
                if (val === '') {
                    _this.showStreets = [];
                }
                else {
                    if (_this.streets) {
                        _this.showStreets = _this.streets.filter(function (el) {
                            return (el.streetName.toLowerCase().indexOf(val.toLowerCase()) > -1);
                        });
                        _this.showStreets = _this.getUnique(_this.showStreets, 'streetCode');
                        if (_this.showStreets.length == 0) {
                            _this.noResults = true;
                        }
                        else {
                            _this.noResults = false;
                        }
                    }
                }
                // this.searching=false;
            }
        }, this.doneTypingInterval);
    };
    SearchPage.prototype.getUnique = function (arr, comp) {
        var unique = arr
            .map(function (e) { return e[comp]; })
            // store the keys of the unique objects
            .map(function (e, i, final) { return final.indexOf(e) === i && i; })
            // eliminate the dead keys & store unique objects
            .filter(function (e) { return arr[e]; }).map(function (e) { return arr[e]; });
        return unique;
    };
    SearchPage.prototype.toggleNotification = function (street) {
        if (this.notif[street.idNumber] != undefined) {
            this.notificationSrv.disableNotification(street);
        }
        else {
            this.notSrv.setNotification(street);
        }
        this.notif = this.convertToMapId(this.notSrv.getNotStreets());
    };
    SearchPage.prototype.isEnabled = function (street) {
        if (street)
            return this.notif[street.idNumber] != undefined;
        return false;
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
            if (_this.streets) {
                var street_1 = _this.streets.filter(function (val) {
                    return val.idNumber === event.detail.value;
                });
                if (event.detail.checked) {
                    street_1.forEach(function (s) {
                        element = document.getElementById('not-' + s.idNumber);
                        toggle = document.getElementById('tog-' + s.idNumber);
                        _this.notificationSrv.setNotification(street_1);
                        element.style.color = 'green';
                        _this.translate.get('NOTIFY-ENA').subscribe(function (x) {
                            element.innerHTML = x;
                        });
                        toggle.checked = true;
                    });
                }
                else {
                    street_1.forEach(function (s) {
                        element = document.getElementById('not-' + s.idNumber);
                        toggle = document.getElementById('tog-' + s.idNumber);
                        _this.notificationSrv.disableNotification(street_1);
                        element.style.color = '#737373';
                        _this.translate.get('NOTIFY-DIS').subscribe(function (x) {
                            element.innerHTML = x;
                        });
                        toggle.checked = false;
                    });
                }
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
            _services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
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