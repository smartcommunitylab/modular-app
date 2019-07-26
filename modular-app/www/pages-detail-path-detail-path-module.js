(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-path-detail-path-module"],{

/***/ "./src/app/module-comune/pages/detail-path/detail-path.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-path/detail-path.module.ts ***!
  \***********************************************************************/
/*! exports provided: DetailPathPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPathPageModule", function() { return DetailPathPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_path_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-path.page */ "./src/app/module-comune/pages/detail-path/detail-path.page.ts");
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
        component: _detail_path_page__WEBPACK_IMPORTED_MODULE_5__["DetailPathPage"]
    }
];
var DetailPathPageModule = /** @class */ (function () {
    function DetailPathPageModule() {
    }
    DetailPathPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_detail_path_page__WEBPACK_IMPORTED_MODULE_5__["DetailPathPage"]]
        })
    ], DetailPathPageModule);
    return DetailPathPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/detail-path/detail-path.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-path/detail-path.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          Dettaglio Percorso\n        </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n   <wc-tabs id=\"tabs\" [content]=\"jsonTabs\" icon-color=\"red\" bg-color=\"lightgrey\" [tab-actived]=\"tabActived\"></wc-tabs>\n\n   <ion-grid style=\"height: 100%\" *ngIf=\"isLoading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"circles\"></ion-spinner>\n    </ion-row>\n  </ion-grid>\n  \n  \n\n   <ion-content padding *ngIf=\"!isLoading\">\n      <wc-details *ngIf=\"(paths) && (tabActived == 'info')\" [title]=\"paths.title\" [subtitle]=\"paths.subtitle\" [text]=\"paths.description\" [info]=\"paths.info\" [img]=\"paths.image\"></wc-details>\n      \n      <div id=\"poi-list\">\n        <div *ngIf=\"tabActived == 'place'\">\n          <ion-searchbar *ngIf=\"search\" showCancelButton animated (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n          <!-- FLOATING BUTTON -->\n          <ion-fab class=\"fixed\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n              <ion-fab-button color=\"danger\">\n                <ion-icon name=\"arrow-dropup-circle\"></ion-icon>\n              </ion-fab-button>\n              <ion-fab-list side=\"top\">\n                  <ion-fab-button (click)=\"toggleSearch()\">\n                    <ion-icon name=\"search\"></ion-icon>\n                  </ion-fab-button>\n                  <ion-fab-button (click)=\"filterClicked()\">\n                      <ion-icon name=\"funnel\"></ion-icon>\n                    </ion-fab-button>\n              </ion-fab-list>\n            </ion-fab>\n            <!-- ------------------------------- -->\n            <div *ngFor=\"let poi of showPois\">\n                <wc-path-list-el type=\"POI\" [id]=\"poi._id\" [img]=\"poi.image\" [title]=\"poi.title[language]\" [text]=\"poi.subtitle[language]\" main-color=\"red\"></wc-path-list-el>\n            </div>\n        </div>\n      </div>\n  \n      <div ion-fixed *ngIf=\"tabActived == 'map'\">\n        <wc-map id=\"wc-map\" [points]=\"mapPoints\" main-marker-icon=\"http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png\" poi-marker-icon=\"https://cdn4.iconfinder.com/data/icons/ios7-active-tab/512/map_marker-512.png\"></wc-map>\n        <wc-modal title=\"DEMO\" text=\"Testo di prova\" btn-text=\"Dettagli\" shown=\"false\" data=\"ciao\"></wc-modal>\n      </div>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/module-comune/pages/detail-path/detail-path.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-path/detail-path.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1jb211bmUvcGFnZXMvZGV0YWlsLXBhdGgvZGV0YWlsLXBhdGgucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/module-comune/pages/detail-path/detail-path.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-path/detail-path.page.ts ***!
  \*********************************************************************/
/*! exports provided: DetailPathPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPathPage", function() { return DetailPathPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/geo.service */ "./src/app/services/geo.service.ts");
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






var DetailPathPage = /** @class */ (function () {
    function DetailPathPage(router, route, dbService, config, alert, geoSrv) {
        this.router = router;
        this.route = route;
        this.dbService = dbService;
        this.config = config;
        this.alert = alert;
        this.geoSrv = geoSrv;
        this.showPois = [];
        this.fullPois = [];
        this.jsonTabs = JSON.stringify([{ target: 'info', icon: 'info' }, { target: 'place', icon: 'place' }, { target: 'map', icon: 'map' }]);
        this.tabActived = 'info';
        this.isLoading = false;
        this.mapPoints = [];
        this.search = false;
        this.myPos = {};
        this.language = window[this.config.getAppModuleName()]['language'];
    }
    DetailPathPage.prototype.getPois = function (path) {
        var _this_1 = this;
        path.steps.forEach(function (element) {
            var query = {
                selector: {
                    'category': 'cultura',
                    'localId': element
                }
            };
            _this_1.dbService.getObjectByQuery(query).then(function (data) {
                if (data.docs[0]) {
                    _this_1.fullPois.push(data.docs[0]);
                }
            }).then(function () {
                _this_1.showPois = _this_1.fullPois;
                _this_1.isLoading = false;
            });
        });
    };
    DetailPathPage.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.myPos.lat = window[this.config.getAppModuleName()]['geolocation']['lat'];
        this.myPos.lon = window[this.config.getAppModuleName()]['geolocation']['long'];
        this.route.queryParams
            .subscribe(function (params) {
            if (params) {
                var id = params.id.split(';')[0];
                _this_1.isLoading = true;
                _this_1.dbService.getObjectById(id).then(function (data) {
                    _this_1.paths = data.docs[0];
                    _this_1.buildLangPaths();
                    _this_1.getPois(_this_1.paths);
                });
            }
        });
    };
    DetailPathPage.prototype.ionViewDidEnter = function () {
        var _this_1 = this;
        var el = document.getElementById('tabs');
        el.addEventListener('tabSelected', function (path) {
            _this_1.tabActived = path.detail;
            if (_this_1.tabActived === 'map') {
                _this_1.buildMapPoints();
            }
        });
        window.addEventListener('pathSelected', function (target) {
            _this_1.goToPoi(target.detail);
        });
        window.addEventListener('actionSelected', function (target) {
            _this_1.goToPoi(target.detail);
        });
    };
    DetailPathPage.prototype.buildLangPaths = function () {
        this.paths.description = this.paths.description[this.language];
        this.paths.info = this.paths.info[this.language];
        this.paths.subtitle = this.paths.subtitle[this.language];
        this.paths.title = this.paths.title[this.language];
        this.paths.difficulty = this.paths.difficulty[this.language];
        console.log(this.paths);
        // this.paths.contacts = {address: this.paths.address}
    };
    DetailPathPage.prototype.buildMapPoints = function () {
        var _this_1 = this;
        this.fullPois.forEach(function (element) {
            _this_1.mapPoints.push({
                id: element._id,
                lat: element.location[0],
                lon: element.location[1],
                name: element.title[_this_1.language],
                address: element.address[_this_1.language],
                distance: _this_1.geoSrv.getDistanceKM(_this_1.myPos, { lat: element.location[0], lon: element.location[1] })
            });
        });
        this.mapPoints.push({
            lat: this.myPos.lat,
            lon: this.myPos.lon,
            name: 'myPos',
            distance: 0
        });
        this.mapPoints = JSON.stringify(this.mapPoints);
    };
    DetailPathPage.prototype.goToPoi = function (id) {
        this.router.navigate(['/detail-poi'], { queryParams: { id: id } });
    };
    DetailPathPage.prototype.toggleSearch = function () {
        this.search = !this.search;
    };
    DetailPathPage.prototype.searchChanged = function (input) {
        var value = input.detail.target.value;
        var _this = this;
        this.showPois = this.fullPois.filter(function (el) {
            return (el.title[_this.language].toLowerCase().indexOf(value.toLowerCase()) > -1);
        });
    };
    DetailPathPage.prototype.filterClicked = function () {
        this.buildAlert();
        console.log('filter');
    };
    DetailPathPage.prototype.buildAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this, alert;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _this = this;
                        return [4 /*yield*/, this.alert.create({
                                header: 'Ordina per',
                                inputs: [
                                    {
                                        name: 'asc',
                                        type: 'radio',
                                        label: 'A-Z',
                                        value: 'asc',
                                        checked: true
                                    },
                                    {
                                        name: 'desc',
                                        type: 'radio',
                                        label: 'Z-A',
                                        value: 'desc',
                                        checked: false
                                    }
                                ],
                                buttons: [
                                    {
                                        text: 'Annulla',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Modal Closed');
                                        }
                                    },
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            _this_1.orderArray(data, _this);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailPathPage.prototype.orderArray = function (condition, _this) {
        if (condition.indexOf('asc') > -1) {
            _this.showPois = this.fullPois.sort(function (a, b) { return a.title[_this.lang].localeCompare(b.title[_this.lang]); });
        }
        else {
            _this.showPois = this.fullPois.sort(function (a, b) { return b.title[_this.lang].localeCompare(a.title[_this.lang]); });
        }
        console.log(_this.showPois);
    };
    DetailPathPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-path',
            template: __webpack_require__(/*! ./detail-path.page.html */ "./src/app/module-comune/pages/detail-path/detail-path.page.html"),
            styles: [__webpack_require__(/*! ./detail-path.page.scss */ "./src/app/module-comune/pages/detail-path/detail-path.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_5__["GeoService"]])
    ], DetailPathPage);
    return DetailPathPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detail-path-detail-path-module.js.map