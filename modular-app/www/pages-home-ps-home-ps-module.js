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

module.exports = "<ion-header no-border>\n  <ion-searchbar class=\"search-event\" style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\"\n    (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n  <ion-toolbar>\n\n    <ion-buttons class=\"interactive\" slot=\"start\">\n      <ion-back-button class=\"interaction\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/ps-notification']\">\n        <ion-icon class=\"icon-bar\" name=\"notifications\"></ion-icon>\n      </ion-button>\n      <ion-button [routerLink]=\"['/ps-search']\">\n        <ion-icon class=\"icon-bar\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{'HOME' | translate}}\n    </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-row>\n  <ion-col  class=\"ion-text-start interaction \" size=\"2\">\n    <ion-icon  name=\"arrow-back\" class=\"icon-home\" (click)=\"dayBack()\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"ion-text-center\" size=\"8\">\n    <ion-datetime (ionChange)=\"setDate($event)\" class=\"date \" display-format=\"DD-MM-YYYY\" picker-format=\"DD MM YYYY\"\n      [value]=\"showDate\"></ion-datetime>\n  </ion-col>\n  <ion-col class=\"ion-text-end interaction\" size=\"2\">\n    <ion-icon name=\"arrow-forward\" class=\"icon-home\"  (click)=\"dayForward()\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col class=\"ion-text-start interaction\" size=\"2\">\n    <ion-icon class=\"icon-home\"  name=\"rewind\" (click)=\"firstDayBck()\" *ngIf=\"afterFirstDayForward() && past\"></ion-icon>\n  </ion-col>\n  <ion-col class=\"ion-text-center interaction\" size=\"8\">\n    {{labelResult}} {{'clean_label' | translate}}\n  </ion-col>\n  <ion-col class=\"ion-text-end interaction\" size=\"2\">\n    <ion-icon  class=\"icon-home\"  name=\"fastforward\" (click)=\"firstDayFwd()\" *ngIf=\"future\"></ion-icon>\n  </ion-col>\n</ion-row>\n\n\n<ion-content>\n  <div class=\"map\">\n    <div id=\"home-map\"></div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/home-ps/home-ps.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/home-ps/home-ps.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  margin-bottom: 5%; }\n\n.map {\n  height: 100%;\n  border: 1px solid black; }\n\n#home-map {\n  width: 100%;\n  height: 100%; }\n\nion-item * {\n  margin: 0 auto; }\n\nion-item {\n  border-bottom: none !important;\n  border-width: 0px !important; }\n\n.leaflet-control .mapSearch {\n  width: 25px;\n  height: 25px; }\n\n.interaction {\n  color: #11B3EF !important; }\n\n.date {\n  background-color: #11B3EF !important;\n  color: white;\n  border-radius: 4px; }\n\n.icon-home {\n  font-size: 20px;\n  text-align: center;\n  width: 100%;\n  height: 100%; }\n\n.icon-bar {\n  font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtcHVsc3RyYWRlL3BhZ2VzL2hvbWUtcHMvaG9tZS1wcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osd0JBQXVCLEVBRTFCOztBQUNEO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSwrQkFBOEI7RUFDOUIsNkJBQTRCLEVBQy9COztBQUNEO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUNJLDBCQUF3QixFQUMzQjs7QUFDRDtFQUNJLHFDQUFtQztFQUNuQyxhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUNJLGdCQUFlLEVBRWxCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLXB1bHN0cmFkZS9wYWdlcy9ob21lLXBzL2hvbWUtcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbi5tYXAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAvLyBtYXJnaW4tYm90dG9tOjUlO1xufVxuI2hvbWUtbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5pb24taXRlbSAqe1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuLmxlYWZsZXQtY29udHJvbCAubWFwU2VhcmNoIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG4uaW50ZXJhY3Rpb24ge1xuICAgIGNvbG9yOiAjMTFCM0VGIWltcG9ydGFudDtcbn1cbi5kYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTFCM0VGIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmljb24taG9tZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uaWNvbi1iYXIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcblxufVxuIl19 */"

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
    function HomePage(translate, config, router, geo, mapSrv, datePipe, route, util, toastCtrl) {
        var _this_1 = this;
        this.translate = translate;
        this.config = config;
        this.router = router;
        this.geo = geo;
        this.mapSrv = mapSrv;
        this.datePipe = datePipe;
        this.route = route;
        this.util = util;
        this.toastCtrl = toastCtrl;
        this.myPos = this.util.getDefaultPos();
        this.past = true;
        this.future = true;
        this.mapCenter = []; /** Coordinates of map center */
        this.labelResult = 0;
        this.today = new Date().setHours(0, 0, 0, 0);
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
        /** Get translations for popup */
        this.translate.get('NO-CLEANING').subscribe(function (s) {
            _this_1.noCleaning = s;
        });
        this.translate.get('FOR').subscribe(function (s) {
            _this_1.forStr = s;
        });
        this.translate.get('TO').subscribe(function (s) {
            _this_1.to = s;
        });
        this.translate.get('IN-DATE').subscribe(function (s) {
            _this_1.inDateStr = s;
        });
        this.translate.get('NO-PARKING-FROM').subscribe(function (s) {
            _this_1.noPark = s;
        });
        this.translate.get('IN-ZONE').subscribe(function (s) {
            _this_1.inZone = s;
        });
        this.translate.get('DETAILS').subscribe(function (s) {
            _this_1.details = s;
        });
        this.translate.get('no_street_future').subscribe(function (s) {
            _this_1.noStreetFuture = s;
        });
        this.translate.get('no_street_past').subscribe(function (s) {
            _this_1.noStreetPast = s;
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
        var _this_1 = this;
        console.log("init");
        this.mapSrv.Init().then(function () {
            console.log("init done");
            _this_1.route.queryParams
                .subscribe(function (params) {
                _this_1.parseUrlParams(params);
                _this_1.selectedDate = new Date();
                _this_1.selectedDate.setHours(0, 0, 0, 0);
                _this_1.showDate = _this_1.selectedDate.toISOString();
                if (_this_1.myPos)
                    _this_1.mapCenter = [_this_1.myPos.lat ? _this_1.myPos.lat : 0, _this_1.myPos.long ? _this_1.myPos.long : 0];
                else
                    _this_1.mapCenter = _this_1.mapSrv.getDefaultCenter();
                _this_1.streets = _this_1.mapSrv.getData().sort(function (a, b) {
                    return a.cleaningDay - b.cleaningDay;
                });
                _this_1.buildMap();
            });
        }, function (err) {
            _this_1.translate.get('error_init').subscribe(function (s) {
                _this_1.util.showErrorConnectionMessage(s);
            });
        });
    };
    HomePage.prototype.afterFirstDayForward = function () {
        if (this.selectedDate)
            return this.selectedDate.getTime() > this.today;
        return false;
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this_1 = this;
        setTimeout(function () {
            if (_this_1.map)
                _this_1.map.invalidateSize();
        }, 500);
    };
    /**
     * Reset center map coordinates
     */
    HomePage.prototype.ionViewWillLeave = function () {
        var _this_1 = this;
        this.myPos = {};
        this.mapSrv.Init().then(function () {
            _this_1.route.queryParams
                .subscribe(function (params) {
                _this_1.parseUrlParams(params);
                _this_1.selectedDate = new Date();
                _this_1.showDate = _this_1.selectedDate.toISOString();
                if (_this_1.myPos)
                    _this_1.mapCenter = [_this_1.myPos.lat ? _this_1.myPos.lat : 0, _this_1.myPos.long ? _this_1.myPos.long : 0];
                else
                    _this_1.mapCenter = _this_1.mapSrv.getDefaultCenter();
                _this_1.streets = _this_1.mapSrv.getData().sort(function (a, b) {
                    return a.cleaningDay - b.cleaningDay;
                });
                _this_1.buildMap();
            });
        }, function (err) {
            _this_1.translate.get('error_init').subscribe(function (s) {
                _this_1.util.showErrorConnectionMessage(s);
            });
        });
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
    /**
     * Build leaflet map, with custom controls and polylines
     */
    HomePage.prototype.buildMap = function () {
        try {
            this.map.remove();
        }
        catch (_a) { } /** Reset map */
        var _this = this;
        /** Build custom "search" button and add it to map */
        // const searchControl = leaflet.Control.extend({
        //   options: {
        //     position: 'topright'
        //   },
        //   onAdd: function (map) {
        //     const container = leaflet.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        //     container.style.backgroundColor = 'white';
        //     container.style.width = '30px';
        //     container.style.height = '30px';
        //     container.style.borderRadius = '50%';
        //     container.innerHTML = '<ion-icon style="width: 25px; height: 25px;" name="search"></ion-icon>';
        //     container.onclick = function () {
        //       _this.router.navigate(['/ps-search']);
        //     };
        //     return container;
        //   }
        // });
        this.map = new leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.Map('home-map', { zoomControl: true, attributionControl: false, dragging: true, tap: false }).setView(this.mapCenter, 15);
        /** Build polyline after drag */
        this.map.on('dragend', function (e) {
            this.mapCenter = [e.target.getCenter().lat, e.target.getCenter().lng];
            _this.buildPolyline(this.mapCenter);
        });
        /** Build polyline after zoom */
        this.map.on('zoomend', function (e) {
            this.mapCenter = [e.target.getCenter().lat, e.target.getCenter().lng];
            _this.buildPolyline(this.mapCenter);
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
    /**
     * Build polylines, with popup, and add them to map
     * @param center Map center's coordinates
     */
    HomePage.prototype.buildPolyline = function (center) {
        return __awaiter(this, void 0, void 0, function () {
            var counter, _a;
            var _this_1 = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("buildpolyline");
                        counter = 0;
                        this.labelResult = 0;
                        /** Reset polyline */
                        if (this.map) {
                            this.clearPolyline(this.map);
                        }
                        if (this.streets) {
                            /** Check distance from center map and street */
                            this.streets.forEach(function (s) {
                                var dist = _this_1.geo.getDistanceKM({ lat: center[0], lon: center[1] }, { lat: s.centralCoords[0]['lat'], lon: s.centralCoords[0]['lng'] });
                                /** Check if is a 'cleaning day' */
                                var inDate = (new Date(_this_1.selectedDate).setHours(0, 0, 0, 0) === new Date(s.cleaningDay).setHours(0, 0, 0, 0));
                                var color = (inDate) ? 'red' : 'green';
                                /** Build popup content */
                                var freeStreetContent = _this_1.noCleaning + " <br/><b>" + _this_1.datePipe.transform(_this_1.selectedDate, 'dd/MM/yyyy') + "</b> " + _this_1.forStr + "<br/>\n        <b> " + s.streetName + "</b>";
                                var closedStreetContent = "<b>" + s.streetName + "</b><br/>" + _this_1.noPark + " <b>" + new Date(s.stopStartingTime).getHours() + "</b> " + _this_1.to + "\n        <b> " + new Date(s.stopEndingTime).getHours() + "</b> " + _this_1.inDateStr + " <br/>\n        <b>" + _this_1.datePipe.transform(_this_1.selectedDate, 'dd/MM/yyyy') + "</b><br/>\n        <a style=\"float:right; margin-top: -5%\">" + _this_1.details + "</a>";
                                /**
                                 * Build polyline based on: current day, current zoom, map center
                                 */
                                console.log(JSON.stringify(s));
                                console.log("new Date(this.selectedDate).setHours(0, 0, 0, 0)" + new Date(_this_1.selectedDate).setHours(0, 0, 0, 0));
                                console.log("new Date(s.cleaningDay).setHours(0, 0, 0, 0)" + new Date(s.cleaningDay).setHours(0, 0, 0, 0));
                                console.log((inDate + "inDate") + new Date(s.cleaningDay).setHours(0, 0, 0, 0));
                                console.log(((((dist < ((17 % _this_1.map.getZoom()) - 1)) + "(dist < ((17 % this.map.getZoom()) - 1"))));
                                console.log((dist < 0.3) + "dist < 0.3");
                                if (inDate && ((dist < ((17 % _this_1.map.getZoom()) - 1) || dist < 0.3))) {
                                    console.log("trovata strada dentro intervallo");
                                    _this_1.labelResult++;
                                    var popupContent = (inDate) ? closedStreetContent : freeStreetContent;
                                    var polyline = leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.polyline(s.polylines, { color: color, weight: 7 }).addTo(_this_1.map);
                                    var popup = leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.popup({ className: "pop-" + s.streetName.replace(/\s/g, '') }).setContent(popupContent);
                                    polyline.bindPopup(popup).on('popupopen', function (e) {
                                        var el = document.getElementsByClassName("pop-" + s.streetName.replace(/\s/g, ''))[0].addEventListener('click', function () {
                                            _this_1.goToDetail(s.idNumber);
                                        });
                                    });
                                    counter++;
                                }
                            });
                        }
                        if (!(counter === 0 && this.inZone && this.noCleaning)) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.noCleaning + " " + this.datePipe.transform(this.selectedDate, 'dd/MM/yyyy') + " " + this.inZone,
                                duration: 3000,
                                showCloseButton: true
                            })];
                    case 1:
                        _a.toast = _b.sent();
                        return [4 /*yield*/, this.toast.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
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
            var center, nextDay, _a;
            var _this_1 = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.past = true;
                        this.labelResult = 0;
                        center = this.mapCenter;
                        nextDay = null;
                        if (this.streets)
                            this.streets.forEach(function (s) {
                                var dist = _this_1.geo.getDistanceKM({ lat: center[0], lon: center[1] }, { lat: s.centralCoords[0]['lat'], lon: s.centralCoords[0]['lng'] });
                                if ((dist < ((17 % _this_1.map.getZoom()) - 1) || dist < 0.3)) {
                                    if (!nextDay && s.cleaningDay && s.cleaningDay > new Date(_this_1.selectedDate).getTime()) {
                                        nextDay = s.cleaningDay;
                                    }
                                }
                                //select first next day of cleaning inside
                                if ((dist < ((17 % _this_1.map.getZoom()) - 1) || dist < 0.3)) {
                                    if (nextDay && s.cleaningDay > _this_1.selectedDate.getTime() && s.cleaningDay <= nextDay && s.cleaningDay > _this_1.today) {
                                        nextDay = s.cleaningDay;
                                    }
                                }
                            });
                        if (!(nextDay != null && nextDay > this.selectedDate.getTime())) return [3 /*break*/, 1];
                        this.selectedDate = new Date(nextDay);
                        this.showDate = this.selectedDate.toISOString();
                        this.future = true;
                        return [3 /*break*/, 4];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.noStreetFuture,
                                duration: 3000,
                                showCloseButton: true
                            })];
                    case 2:
                        _a.toast = _b.sent();
                        this.future = false;
                        return [4 /*yield*/, this.toast.present()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
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
            var center, prevDay, _a;
            var _this_1 = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.future = true;
                        this.labelResult = 0;
                        center = this.mapCenter;
                        prevDay = null;
                        if (this.streets)
                            this.streets.forEach(function (s) {
                                var dist = _this_1.geo.getDistanceKM({ lat: center[0], lon: center[1] }, { lat: s.centralCoords[0]['lat'], lon: s.centralCoords[0]['lng'] });
                                if ((dist < ((17 % _this_1.map.getZoom()) - 1) || dist < 0.3)) {
                                    if (!prevDay && s.cleaningDay && s.cleaningDay < new Date(_this_1.selectedDate).getTime()) {
                                        prevDay = s.cleaningDay;
                                    }
                                }
                                //select first next day of cleaning inside
                                if ((dist < ((17 % _this_1.map.getZoom()) - 1) || dist < 0.3)) {
                                    if (prevDay && s.cleaningDay < _this_1.selectedDate.getTime() && s.cleaningDay >= prevDay && s.cleaningDay > _this_1.today) {
                                        prevDay = s.cleaningDay;
                                    }
                                }
                            });
                        if (!(prevDay != null && prevDay < this.selectedDate.getTime())) return [3 /*break*/, 1];
                        this.selectedDate = new Date(prevDay);
                        this.showDate = this.selectedDate.toISOString();
                        this.past = true;
                        return [3 /*break*/, 4];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.noStreetPast,
                                duration: 3000,
                                showCloseButton: true
                            })];
                    case 2:
                        _a.toast = _b.sent();
                        this.past = false;
                        return [4 /*yield*/, this.toast.present()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/module-pulstrade/services/util.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/module-pulstrade/services/util.service.ts ***!
  \***********************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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


var UtilService = /** @class */ (function () {
    function UtilService(toastController) {
        this.toastController = toastController;
        this.defaultPosition = {
            lat: 46.0748,
            long: 11.1217
        };
    }
    UtilService.prototype.getDefaultPos = function () {
        return this.defaultPosition;
    };
    UtilService.prototype.showErrorConnectionMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], UtilService);
    return UtilService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-ps-home-ps-module.js.map