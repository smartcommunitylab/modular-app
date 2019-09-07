(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-path-map-path-module"],{

/***/ "./src/app/module-comune/pages/map-path/map-path.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module-comune/pages/map-path/map-path.module.ts ***!
  \*****************************************************************/
/*! exports provided: MapPathPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPathPageModule", function() { return MapPathPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_path_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-path.page */ "./src/app/module-comune/pages/map-path/map-path.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _map_path_page__WEBPACK_IMPORTED_MODULE_5__["MapPathPage"]
    }
];
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/comune/i18n/', '.json');
// }
var MapPathPageModule = /** @class */ (function () {
    function MapPathPageModule() {
    }
    MapPathPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                // TranslateModule.forRoot({ loader: {
                //   provide: TranslateLoader,
                //   useFactory: HttpLoaderFactory,
                //   deps: [HttpClient]
                // }}),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_map_path_page__WEBPACK_IMPORTED_MODULE_5__["MapPathPage"]]
        })
    ], MapPathPageModule);
    return MapPathPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/map-path/map-path.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/module-comune/pages/map-path/map-path.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div shape=\"round\" class=\"back-button\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </div>\n    <wc-map id=\"wc-map\" [mypos]=\"myPosParam\" [points]=\"mapPoints\" main-marker-icon=\"assets/comune/img/marker.svg\" poi-marker-icon=\"assets/comune/img/download.svg\"></wc-map>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/module-comune/pages/map-path/map-path.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/module-comune/pages/map-path/map-path.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-button {\n  position: fixed;\n  color: #11b3ef;\n  --background: white;\n  border-radius: 24px;\n  border: 1px solid #11b3ef;\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  background-color: white;\n  z-index: 9999;\n  top: 16px;\n  left: 16px;\n  font-size: 44px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL21hcC1wYXRoL21hcC1wYXRoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG9CQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLGNBQWE7RUFDYixVQUFTO0VBQ1QsV0FBVTtFQUNWLGdCQUFlLEVBR2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLWNvbXVuZS9wYWdlcy9tYXAtcGF0aC9tYXAtcGF0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGNvbG9yOiAjMTFiM2VmO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTFiM2VmO1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB0b3A6IDE2cHg7XG4gICAgbGVmdDogMTZweDtcbiAgICBmb250LXNpemU6IDQ0cHg7XG5cbiAgICAvLyBib3JkZXItcmFkaXVzOiAxOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/module-comune/pages/map-path/map-path.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/module-comune/pages/map-path/map-path.page.ts ***!
  \***************************************************************/
/*! exports provided: MapPathPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPathPage", function() { return MapPathPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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







var MapPathPage = /** @class */ (function () {
    function MapPathPage(route, utils, geoSrv, router, translate, location, config) {
        this.route = route;
        this.utils = utils;
        this.geoSrv = geoSrv;
        this.router = router;
        this.translate = translate;
        this.location = location;
        this.config = config;
        this.mapPoints = [];
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
    }
    MapPathPage.prototype.ngOnInit = function () {
        var _this = this;
        if (window[this.config.getAppModuleName()]['geolocation'])
            this.myPos = {
                lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
                long: window[this.config.getAppModuleName()]['geolocation']['long']
            };
        else {
            this.myPos = this.config.getDefaultPosition();
        }
        this.fullPois = JSON.parse(localStorage.getItem('path'));
        var element = document.getElementById('wc-map');
        element.addEventListener('poiSelected', function (poiParam) { return __awaiter(_this, void 0, void 0, function () {
            var poiId;
            return __generator(this, function (_a) {
                poiId = poiParam.detail;
                console.log(poiId);
                this.router.navigate(['/detail-poi'], { queryParams: { id: poiId, type: 'POI' } });
                return [2 /*return*/];
            });
        }); });
        this.myPosParam = JSON.stringify(this.myPos);
        this.buildMapPoints();
    };
    MapPathPage.prototype.ionViewDidEnter = function () {
    };
    MapPathPage.prototype.goBack = function () {
        this.location.back();
    };
    MapPathPage.prototype.buildMapPoints = function () {
        var _this = this;
        this.fullPois.forEach(function (element) {
            _this.mapPoints.push({
                id: element.id,
                lat: element.location[0],
                lon: element.location[1],
                name: element.title,
                img: element.image,
                distance: _this.geoSrv.getDistanceKM(_this.myPos, { lat: element.location[0], lon: element.location[1] })
            });
        });
        this.mapPoints = JSON.stringify(this.mapPoints);
    };
    MapPathPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-path',
            template: __webpack_require__(/*! ./map-path.page.html */ "./src/app/module-comune/pages/map-path/map-path.page.html"),
            styles: [__webpack_require__(/*! ./map-path.page.scss */ "./src/app/module-comune/pages/map-path/map-path.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"],
            src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_5__["GeoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], MapPathPage);
    return MapPathPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-map-path-map-path-module.js.map