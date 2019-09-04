(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-ps-home-ps-module"],{

/***/ "./src/app/module-pulstrade/pages/home-ps/home-ps.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/home-ps/home-ps.module.ts ***!
  \******************************************************************/
/*! exports provided: HttpLoaderFactory, HomePagePSModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePagePSModule", function() { return HomePagePSModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_ps_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-ps.page */ "./src/app/module-pulstrade/pages/home-ps/home-ps.page.ts");
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
        component: _home_ps_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/strade/i18n/', '.json');
}
var HomePagePSModule = /** @class */ (function () {
    function HomePagePSModule() {
    }
    HomePagePSModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    } }),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_home_ps_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePagePSModule);
    return HomePagePSModule;
}());



/***/ }),

/***/ "./src/app/module-pulstrade/pages/home-ps/home-ps.page.html":
/*!******************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/home-ps/home-ps.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-searchbar class=\"search-event\" style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\"\n    (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n  <ion-toolbar>\n\n    <ion-buttons class=\"interactive\" slot=\"start\">\n      <ion-back-button class=\"interaction\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/ps-notification']\">\n        <ion-icon class=\"icon-bar\" name=\"notifications-outline\"></ion-icon>\n      </ion-button>\n      <ion-button [routerLink]=\"['/ps-search']\">\n        <ion-icon class=\"icon-bar\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{'HOME' | translate}}\n    </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-row>\n    <ion-col class=\"ion-text-start interaction\" size=\"2\">\n        <ion-icon class=\"icon-home\"  name=\"rewind\" (click)=\"firstDayBck()\" *ngIf=\"past\"></ion-icon>\n      </ion-col>\n  <ion-col  class=\"ion-text-start interaction \" size=\"2\">\n    <ion-icon  name=\"arrow-back\" class=\"icon-home\" (click)=\"dayBack()\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"ion-text-center\" size=\"4\" >\n    <ion-datetime (ionChange)=\"setDate($event)\" class=\"date \" display-format=\"DD-MM-YYYY\" picker-format=\"DD MM YYYY\"\n      [value]=\"showDate\"></ion-datetime>\n  </ion-col>\n  <ion-col class=\"ion-text-end interaction\" size=\"2\">\n    <ion-icon name=\"arrow-forward\" class=\"icon-home\"  (click)=\"dayForward()\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"ion-text-end interaction\" size=\"2\">\n      <ion-icon  class=\"icon-home\"  name=\"fastforward\" (click)=\"firstDayFwd()\" *ngIf=\"future\"></ion-icon>\n    </ion-col>\n</ion-row>\n<ion-row>\n\n  <ion-col class=\"ion-text-center interaction\" size=\"12\" (click)=\"goToList()\">\n    {{labelResult}} {{'clean_label' | translate}}\n  </ion-col>\n\n</ion-row>\n\n\n<ion-content>\n  <div class=\"map\">\n    <div id=\"home-map\">\n        <ion-button icon-only item-right (click)=\"locate()\" color=\"light\" class=\"button-locate\" >\n            <ion-icon  class=\"locate\" name=\"locate\"></ion-icon>\n        </ion-button>  \n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/home-ps/home-ps.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/home-ps/home-ps.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 100%;\n  border: 1px solid black; }\n\n#home-map {\n  width: 100%;\n  height: 100%; }\n\nion-item * {\n  margin: 0 auto; }\n\nion-item {\n  border-bottom: none !important;\n  border-width: 0px !important; }\n\n.leaflet-control .mapSearch {\n  width: 25px;\n  height: 25px; }\n\n.interaction {\n  color: #11B3EF !important; }\n\n.date {\n  color: #11B3EF !important;\n  font-size: 20px;\n  padding: 4px; }\n\n.icon-home {\n  font-size: 20px;\n  text-align: center;\n  width: 100%;\n  height: 100%; }\n\n.icon-bar {\n  font-size: 30px; }\n\n.locate {\n  font-size: 30px !important; }\n\n.button-locate {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  width: 50px;\n  height: 50px;\n  z-index: 999;\n  font-size: inherit; }\n\n.button-action:hover {\n  background: url(\"https://i.hizliresim.com/a1zraR.png\") no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtcHVsc3RyYWRlL3BhZ2VzL2hvbWUtcHMvaG9tZS1wcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFZO0VBQ1osd0JBQXVCLEVBRTFCOztBQUNEO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSwrQkFBOEI7RUFDOUIsNkJBQTRCLEVBQy9COztBQUNEO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUNJLDBCQUF3QixFQUMzQjs7QUFDRDtFQUVJLDBCQUF3QjtFQUN4QixnQkFBZTtFQUNmLGFBQVksRUFDZjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxnQkFBZSxFQUVsQjs7QUFDRDtFQUNJLDJCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osWUFBVztFQUNYLFlBQVc7RUFDWCxhQUFZO0VBQ1osYUFBWTtFQUNaLG1CQUFrQixFQUVyQjs7QUFFRDtFQUNJLGlFQUFnRSxFQUNuRSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1wdWxzdHJhZGUvcGFnZXMvaG9tZS1wcy9ob21lLXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWJ1dHRvbiB7XG59XG4ubWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTo1JTtcbn1cbiNob21lLW1hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWl0ZW0gKntcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1pdGVtIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn1cbi5sZWFmbGV0LWNvbnRyb2wgLm1hcFNlYXJjaCB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuLmludGVyYWN0aW9uIHtcbiAgICBjb2xvcjogIzExQjNFRiFpbXBvcnRhbnQ7XG59XG4uZGF0ZSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzExQjNFRiFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMxMUIzRUYhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG4uaWNvbi1ob21lIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5pY29uLWJhciB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuXG59XG4ubG9jYXRlIHtcbiAgICBmb250LXNpemU6IDMwcHghaW1wb3J0YW50O1xufVxuLmJ1dHRvbi1sb2NhdGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgIFxufVxuXG4uYnV0dG9uLWFjdGlvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vaS5oaXpsaXJlc2ltLmNvbS9hMXpyYVIucG5nJykgbm8tcmVwZWF0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/home-ps/home-ps.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/home-ps/home-ps.page.ts ***!
  \****************************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/map.service */ "./src/app/module-pulstrade/services/map.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/module-pulstrade/services/util.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/module-pulstrade/services/notification.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var HomePage = /** @class */ (function () {
    function HomePage(translate, config, router, geo, mapSrv, datePipe, route, util, toastCtrl, notificationService) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.router = router;
        this.geo = geo;
        this.mapSrv = mapSrv;
        this.datePipe = datePipe;
        this.route = route;
        this.util = util;
        this.toastCtrl = toastCtrl;
        this.notificationService = notificationService;
        this.myPos = this.util.getDefaultPos();
        this.past = true;
        this.future = true;
        this.labelResult = 0;
        this.today = new Date().setHours(0, 0, 0, 0);
        this.dailyStreets = [];
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
        /** Get translations for popup */
        this.translate.get('NO-CLEANING').subscribe(function (s) {
            _this.noCleaning = s;
        });
        this.translate.get('FOR').subscribe(function (s) {
            _this.forStr = s;
        });
        this.translate.get('TO').subscribe(function (s) {
            _this.to = s;
        });
        this.translate.get('IN-DATE').subscribe(function (s) {
            _this.inDateStr = s;
        });
        this.translate.get('NO-PARKING-FROM').subscribe(function (s) {
            _this.noPark = s;
        });
        this.translate.get('IN-ZONE').subscribe(function (s) {
            _this.inZone = s;
        });
        this.translate.get('DETAILS').subscribe(function (s) {
            _this.details = s;
        });
        this.translate.get('no_street_future').subscribe(function (s) {
            _this.noStreetFuture = s;
        });
        this.translate.get('no_street_past').subscribe(function (s) {
            _this.noStreetPast = s;
        });
        this.translate.get('side_label').subscribe(function (s) {
            _this.sideLabel = s;
        });
        this.translate.get('tratto_label').subscribe(function (s) {
            _this.trattoLabel = s;
        });
    }
    ; /** Current GPS location */
    /**
     * Build center coordinates object `myPos` based on URL params, else use the GPS location
     * @param params URL Params
     */
    HomePage.prototype.parseUrlParams = function (params) {
        if (Object.keys(params).length > 0 && params.coord) {
            var coord = void 0;
            coord = JSON.parse(params.coord);
            console.log(coord);
            this.myPos.lat = coord[0].lat;
            this.myPos.long = coord[0].lng;
        }
        else if (window[this.config.getAppModuleName()]['geolocation']) {
            this.myPos = window[this.config.getAppModuleName()]['geolocation'];
        }
        else
            this.myPos = this.util.getDefaultPos();
    };
    /**
     * Set current date, get streets ordered by `cleaningDay` property, build map
     */
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.mapSrv.Init().then(function () {
            _this.route.queryParams
                .subscribe(function (params) {
                _this.parseUrlParams(params);
                if (!_this.selectedDate) {
                    _this.selectedDate = new Date();
                    _this.selectedDate.setHours(0, 0, 0, 0);
                    _this.showDate = _this.selectedDate.toISOString();
                }
                if (!_this.mapCenter) {
                    // if (this.myPos)
                    //   this.mapCenter = [this.myPos.lat ? this.myPos.lat : 0, this.myPos.long ? this.myPos.long : 0];
                    // else 
                    _this.mapCenter = _this.mapSrv.getDefaultCenter();
                }
                if (!_this.streets)
                    _this.streets = _this.mapSrv.getData().sort(function (a, b) {
                        return a.cleaningDay - b.cleaningDay;
                    });
                if (_this.mapSrv.getData()[_this.mapSrv.getData().length - 1].cleaningDay < _this.selectedDate.getTime()) {
                    _this.future = false;
                }
                if (!_this.map)
                    _this.buildMap();
                // this.updateNotification(this.streets);
            });
        }, function (err) {
            _this.translate.get('error_init').subscribe(function (s) {
                _this.util.showErrorConnectionMessage(s);
            });
        });
    };
    HomePage.prototype.goToList = function () {
        this.router.navigate(['list-streets'], { queryParams: { streets: JSON.stringify(this.dailyStreets), date: moment__WEBPACK_IMPORTED_MODULE_11___default()(this.selectedDate).format('DD-MM-YYYY') } });
    };
    HomePage.prototype.updateNotification = function (streets) {
        this.notificationService.updateNotification(streets);
    };
    HomePage.prototype.afterFirstDayForward = function () {
        if (this.selectedDate)
            return this.selectedDate.getTime() > this.today;
        return false;
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.map)
                _this.map.invalidateSize();
        }, 500);
    };
    /**
     * Reset center map coordinates
     */
    HomePage.prototype.ionViewWillLeave = function () {
        // this.myPos = {};
        // this.mapSrv.Init().then(() => {
        //   this.route.queryParams
        //     .subscribe(params => {
        //       this.parseUrlParams(params);
        //       this.selectedDate = new Date();
        //       this.showDate = this.selectedDate.toISOString();
        //       if (this.myPos)
        //         this.mapCenter = [this.myPos.lat ? this.myPos.lat : 0, this.myPos.long ? this.myPos.long : 0];
        //       else this.mapCenter = this.mapSrv.getDefaultCenter()
        //       this.streets = this.mapSrv.getData().sort(function (a, b) {
        //         return a.cleaningDay - b.cleaningDay;
        //       });
        //       this.buildMap();
        //     });
        // }, err => {
        //   this.translate.get('error_init').subscribe(s => {
        //     this.util.showErrorConnectionMessage(s);
        //   });
        // })
    };
    /**
     * Go to another page
     * @param path router link
     */
    HomePage.prototype.goToLink = function (path) {
        if (path.indexOf('home-module') > -1) {
            this.router.navigate(['/home-module']);
        }
        else {
            this.router.navigate([this.router.url + '/' + path]);
        }
    };
    // setFutureAndPast() {
    // }
    /**
     * Build leaflet map, with custom controls and polylines
     */
    HomePage.prototype.buildMap = function () {
        var _this = this;
        try {
            this.map.remove();
        }
        catch (_a) { } /** Reset map */
        // const _this = this;
        this.map = new leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.Map('home-map', { zoomControl: false, attributionControl: false, dragging: true, tap: false }).setView(this.mapCenter, 14);
        /** Build polyline after drag */
        this.map.on('dragend', function (e) {
            _this.mapCenter = [e.target.getCenter().lat, e.target.getCenter().lng];
            _this.buildPolyline(_this.mapCenter);
            // _this.setFutureAndPast();
        });
        /** Build polyline after zoom */
        this.map.on('zoomend', function (e) {
            _this.mapCenter = [e.target.getCenter().lat, e.target.getCenter().lng];
            _this.buildPolyline(_this.mapCenter);
            // _this.setFutureAndPast();
        });
        /** Define marker icon */
        var mainIcon = leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.icon({
            iconUrl: 'assets/strade/icons/myMark.png',
            shadowUrl: null,
            iconSize: [40, 40],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76]
        });
        leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.marker([this.myPos['lat'], this.myPos['long']], { icon: mainIcon }).addTo(this.map);
        leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        /** Add search button to map */
        // this.map.addControl(new searchControl());
        /** Build polylines */
        this.buildPolyline(this.mapCenter);
    };
    HomePage.prototype.locate = function () {
        this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.LatLng(this.myPos.lat, this.myPos.long));
    };
    /**
     * Build polylines, with popup, and add them to map
     * @param center Map center's coordinates
     */
    HomePage.prototype.buildPolyline = function (center) {
        return __awaiter(this, void 0, void 0, function () {
            var counter, bounds;
            var _this = this;
            return __generator(this, function (_a) {
                this.dailyStreets = [];
                counter = 0;
                this.labelResult = 0;
                this.past = false;
                this.future = false;
                bounds = this.map.getBounds();
                if (this.map) {
                    this.clearPolyline(this.map);
                }
                if (this.streets) {
                    /** Check distance from center map and street */
                    this.streets.forEach(function (s) {
                        // const dist = this.geo.getDistanceKM(
                        //   { lat: center[0], lon: center[1] },
                        //   { lat: s.centralCoords[0]['lat'], lon: s.centralCoords[0]['lng'] }
                        // );
                        s.idNumber = parseInt(s.streetCode.replace(/\_/g, ''), 10);
                        var lato = "";
                        var tratto = "";
                        /** Check if is a 'cleaning day' */
                        var inDate = (new Date(_this.selectedDate).setHours(0, 0, 0, 0) === new Date(s.cleaningDay).setHours(0, 0, 0, 0));
                        var color = (inDate) ? 'red' : 'green';
                        if (s.lato)
                            lato = _this.sideLabel + "<b> " + s.lato + "</b><br/>";
                        if (s.note)
                            tratto = _this.trattoLabel + " <b>" + s.note + "</b><br/>";
                        /** Build popup content */
                        var freeStreetContent = _this.noCleaning + " <br/><b>" + _this.datePipe.transform(_this.selectedDate, 'dd/MM/yyyy') + "</b> " + _this.forStr + "<br/>\n        <b> " + s.streetName + "</b>";
                        var closedStreetContent = "<div style=\" display: flex;   justify-content: center;  align-items: center;\"> <div style=\"    margin-right: 8px;\"><img src=\"./assets/strade/icons/divieto.png\"></div><div><b>" + s.streetName + "</b><br/>" + _this.noPark + " <b>" + new Date(s.stopStartingTime).getHours() + "</b> " + _this.to + "\n        <b> " + new Date(s.stopEndingTime).getHours() + "</b> " + _this.inDateStr + " <br/>\n        <b>" + _this.datePipe.transform(_this.selectedDate, 'dd/MM/yyyy') + "</b><br/>\n        " + lato + "\n        " + tratto + "\n\n        <a style=\"float:right; margin-top: -5%\">" + _this.details + "</a></div></div>";
                        /**
                         * Build polyline based on: current day, current zoom, map center
                         */
                        // if (inDate && ((dist < ((17 % this.map.getZoom()) - 1) || dist < 0.3))) {
                        if (inDate && bounds.contains([s.centralCoords[0], s.centralCoords[0]])) {
                            _this.labelResult++;
                            _this.dailyStreets.push(s);
                            var popupContent = (inDate) ? closedStreetContent : freeStreetContent;
                            var polyline = leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.polyline(s.polylines, { color: color, weight: 8 }).addTo(_this.map);
                            var popup = leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.popup({ className: "pop-" + s.streetName.replace(/\s/g, '') }).setContent(popupContent);
                            polyline.bindPopup(popup).on('popupopen', function (e) {
                                var el = document.getElementsByClassName("pop-" + s.streetName.replace(/\s/g, ''))[0].addEventListener('click', function () {
                                    _this.goToDetail(s.idNumber);
                                });
                            });
                            counter++;
                        }
                        if (!_this.past) {
                            //se nella regione e ho strade prima prima o sono dopo a oggi metti a true
                            if ((new Date(_this.selectedDate).setHours(0, 0, 0, 0) > new Date(s.cleaningDay).setHours(0, 0, 0, 0)) && (bounds.contains([s.centralCoords[0], s.centralCoords[0]])) || moment__WEBPACK_IMPORTED_MODULE_11___default()(_this.selectedDate).isAfter(moment__WEBPACK_IMPORTED_MODULE_11___default()(), 'day')) {
                                _this.past = true;
                            }
                        }
                        if (!_this.future) {
                            //se nella regione e ho strade dopo metti o sono prima di oggi a true
                            if ((new Date(_this.selectedDate).setHours(0, 0, 0, 0) < new Date(s.cleaningDay).setHours(0, 0, 0, 0)) && (bounds.contains([s.centralCoords[0], s.centralCoords[0]])) || moment__WEBPACK_IMPORTED_MODULE_11___default()(_this.selectedDate).isBefore(moment__WEBPACK_IMPORTED_MODULE_11___default()(), 'day')) {
                                _this.future = true;
                            }
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Clear polylines levels
     * @param m Map object
     */
    HomePage.prototype.clearPolyline = function (m) {
        for (var i in m._layers) {
            if (m._layers[i]._path !== undefined) {
                try {
                    m.removeLayer(m._layers[i]);
                }
                catch (e) {
                    console.log('problem with ' + e + m._layers[i]);
                }
            }
        }
    };
    /**
     * Go one day back
     */
    HomePage.prototype.dayBack = function () {
        this.selectedDate.setDate(this.selectedDate.getDate() - 1);
        this.showDate = this.selectedDate.toISOString();
        this.mapCenter = [this.map.getCenter().lat, this.map.getCenter().lng];
        this.buildPolyline(this.mapCenter);
    };
    /**
     * Go one day ahead
     */
    HomePage.prototype.dayForward = function () {
        this.selectedDate.setDate(this.selectedDate.getDate() + 1);
        this.showDate = this.selectedDate.toISOString();
        this.buildPolyline(this.mapCenter);
    };
    /**
     * Get last cleaning day and build polylines
     */
    HomePage.prototype.firstDayFwd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var center, nextDay, bounds, today, nextDate, selectedDate, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.past = true;
                        this.labelResult = 0;
                        center = this.mapCenter;
                        nextDay = null;
                        bounds = this.map.getBounds();
                        if (this.streets)
                            this.streets.forEach(function (s) {
                                if (bounds.contains([s.centralCoords[0], s.centralCoords[0]]))
                                    if (!nextDay && s.cleaningDay && s.cleaningDay > new Date(_this.selectedDate).getTime()) {
                                        nextDay = s.cleaningDay;
                                    }
                                if (bounds.contains([s.centralCoords[0], s.centralCoords[0]]))
                                    if (nextDay && s.cleaningDay > _this.selectedDate.getTime() && s.cleaningDay <= nextDay && s.cleaningDay > _this.today) {
                                        nextDay = s.cleaningDay;
                                    }
                            });
                        today = moment__WEBPACK_IMPORTED_MODULE_11___default()();
                        nextDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(nextDay);
                        selectedDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(this.selectedDate);
                        if (!(!nextDay || (selectedDate.isBefore(today) && nextDate.isAfter(today, 'day')))) return [3 /*break*/, 1];
                        this.selectedDate = new Date();
                        this.showDate = this.selectedDate.toISOString();
                        this.future = true;
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(nextDay != null && nextDay > this.selectedDate.getTime())) return [3 /*break*/, 2];
                        this.selectedDate = new Date(nextDay);
                        this.showDate = this.selectedDate.toISOString();
                        this.future = true;
                        return [3 /*break*/, 5];
                    case 2:
                        _a = this;
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.noStreetFuture,
                                duration: 3000,
                            })];
                    case 3:
                        _a.toast = _b.sent();
                        this.future = false;
                        return [4 /*yield*/, this.toast.present()];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                    case 5:
                        this.buildPolyline(center);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get first cleaning day and build polylines
     */
    HomePage.prototype.firstDayBck = function () {
        return __awaiter(this, void 0, void 0, function () {
            var center, prevDay, bounds, i, s, today, prevDate, selectedDate, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.future = true;
                        this.labelResult = 0;
                        center = this.mapCenter;
                        prevDay = null;
                        bounds = this.map.getBounds();
                        if (this.streets)
                            for (i = this.streets.length - 1; i >= 0; i--) {
                                s = this.streets[i];
                                // const dist = this.geo.getDistanceKM(
                                //   { lat: center[0], lon: center[1] },
                                //   { lat: s.centralCoords[0]['lat'], lon: s.centralCoords[0]['lng'] }
                                // );
                                if (bounds.contains([s.centralCoords[0], s.centralCoords[0]]))
                                    // if ((dist < ((17 % this.map.getZoom()) - 1) || dist < 0.3)) {
                                    if (!prevDay && s.cleaningDay && s.cleaningDay < new Date(this.selectedDate).getTime()) {
                                        prevDay = s.cleaningDay;
                                    }
                                // }
                                //select first next day of cleaning inside
                                if (bounds.contains([s.centralCoords[0], s.centralCoords[0]]))
                                    if (prevDay && s.cleaningDay < this.selectedDate.getTime() && s.cleaningDay >= prevDay && s.cleaningDay > this.today) {
                                        prevDay = s.cleaningDay;
                                    }
                                // }
                            }
                        ;
                        today = moment__WEBPACK_IMPORTED_MODULE_11___default()();
                        prevDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(prevDay);
                        selectedDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(this.selectedDate);
                        if (!(!prevDay || (selectedDate.isAfter(today, 'day') && prevDate.isBefore(today, 'day')))) return [3 /*break*/, 1];
                        this.selectedDate = new Date();
                        this.showDate = this.selectedDate.toISOString();
                        this.past = true;
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(prevDay != null && prevDay < this.selectedDate.getTime())) return [3 /*break*/, 2];
                        this.selectedDate = new Date(prevDay);
                        this.showDate = this.selectedDate.toISOString();
                        this.past = true;
                        return [3 /*break*/, 5];
                    case 2:
                        _a = this;
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.noStreetPast,
                                duration: 3000,
                            })];
                    case 3:
                        _a.toast = _b.sent();
                        this.past = false;
                        return [4 /*yield*/, this.toast.present()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        this.buildPolyline(center);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set date based on Ionic Datetime Picker
     * @param event `ion-datetime` change event
     */
    HomePage.prototype.setDate = function (event) {
        this.selectedDate = new Date(event.detail.value);
        this.showDate = this.selectedDate.toISOString();
        if (this.mapSrv.getData()[this.mapSrv.getData().length - 1].cleaningDay < this.selectedDate.getTime()) {
            this.future = false;
        }
        else {
            this.future = true;
        }
        this.buildPolyline(this.mapCenter);
    };
    /**
     * Go to search page with defined searching value
     * @param name Street's name for automatic search
     */
    HomePage.prototype.goToDetail = function (name) {
        this.router.navigate(['street-detail'], { queryParams: { street: name } });
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-ps',
            template: __webpack_require__(/*! ./home-ps.page.html */ "./src/app/module-pulstrade/pages/home-ps/home-ps.page.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
            styles: [__webpack_require__(/*! ./home-ps.page.scss */ "./src/app/module-pulstrade/pages/home-ps/home-ps.page.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_5__["GeoService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-ps-home-ps-module.js.map