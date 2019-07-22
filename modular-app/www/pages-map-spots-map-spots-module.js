(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-spots-map-spots-module"],{

/***/ "./src/app/module-trasporti/pages/map-spots/map-spots.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/module-trasporti/pages/map-spots/map-spots.module.ts ***!
  \**********************************************************************/
/*! exports provided: HttpLoaderFactory, MapSpotsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSpotsPageModule", function() { return MapSpotsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_spots_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-spots.page */ "./src/app/module-trasporti/pages/map-spots/map-spots.page.ts");
/* harmony import */ var _stop_detail_stop_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stop-detail/stop-detail.component */ "./src/app/module-trasporti/pages/map-spots/stop-detail/stop-detail.component.ts");
/* harmony import */ var _stop_single_line_stop_single_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stop-single-line/stop-single-line.component */ "./src/app/module-trasporti/pages/map-spots/stop-single-line/stop-single-line.component.ts");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _map_spots_page__WEBPACK_IMPORTED_MODULE_5__["MapSpotsPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, "./assets/trasporti/i18n/", ".json");
}
var MapSpotsPageModule = /** @class */ (function () {
    function MapSpotsPageModule() {
    }
    MapSpotsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                    }, isolate: true
                }), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            entryComponents: [_stop_detail_stop_detail_component__WEBPACK_IMPORTED_MODULE_6__["StopDetailComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_map_spots_page__WEBPACK_IMPORTED_MODULE_5__["MapSpotsPage"], _stop_detail_stop_detail_component__WEBPACK_IMPORTED_MODULE_6__["StopDetailComponent"], _stop_single_line_stop_single_line_component__WEBPACK_IMPORTED_MODULE_7__["StopSingleLineComponent"]]
        })
    ], MapSpotsPageModule);
    return MapSpotsPageModule;
}());



/***/ }),

/***/ "./src/app/module-trasporti/pages/map-spots/map-spots.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/module-trasporti/pages/map-spots/map-spots.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>mapSpots</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <wc-trasporti-map [points]=\"markers\" [center]=\"center\" [mainMarkerIcon]=\"'./assets/trasporti/mymarker.jpg'\" [poiMarkerIcon]=\"'./assets/trasporti/marker.png'\" [zoomLevel]=15></wc-trasporti-map>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/module-trasporti/pages/map-spots/map-spots.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/module-trasporti/pages/map-spots/map-spots.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS10cmFzcG9ydGkvcGFnZXMvbWFwLXNwb3RzL21hcC1zcG90cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/module-trasporti/pages/map-spots/map-spots.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/module-trasporti/pages/map-spots/map-spots.page.ts ***!
  \********************************************************************/
/*! exports provided: MapSpotsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSpotsPage", function() { return MapSpotsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/profile.service */ "./src/app/module-trasporti/services/profile.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-trasporti/services/config.service.ts");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-trasporti/services/db.service.ts");
/* harmony import */ var _services_transport_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/transport.service */ "./src/app/module-trasporti/services/transport.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _stop_detail_stop_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stop-detail/stop-detail.component */ "./src/app/module-trasporti/pages/map-spots/stop-detail/stop-detail.component.ts");
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









var MapSpotsPage = /** @class */ (function () {
    //include wc with spots of type selected
    function MapSpotsPage(loadingController, modalController, translate, toast, transportService, dbService, configService, profileService) {
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.translate = translate;
        this.toast = toast;
        this.transportService = transportService;
        this.dbService = dbService;
        this.configService = configService;
        this.profileService = profileService;
        this.markers = '[{"id":"point2","lat":"46.07559","long":"11.16411"}]';
        this.allMarkers = null;
        this.mapData = null;
        this.elements = null;
        this.markerIcon = null;
        this.icon = null;
        this.title = null;
        this.ref = null;
        this.flagAccessibility = null;
        this.accessibilityStyle = null;
        this.popupStop = null;
        this.currBounds = null;
        this.tooManyMarkers = false;
        // center = JSON.stringify(window["app-module"]["geolocation"]);
        this.center = '{"latitude":"46.067727","longitude":"11.151561"}';
        //tmp
        this.MAX_MARKERS = 30;
    }
    MapSpotsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.accesibilityKnow) {
                    this.flagAccessibility = false;
                }
                this.flagAccessibility = this.profileService.getAccessibility();
                this.MAX_MARKERS = this.configService.getMaxMarkers();
                this.elements = this.transportService.getElements();
                window.addEventListener('mapInitiated', function (bounds) {
                    console.log(bounds);
                    _this.filterMarkers(_this.flagAccessibility, bounds.detail);
                });
                window.addEventListener('mapMoved', function (bounds) {
                    console.log(bounds);
                    _this.filterMarkers(_this.flagAccessibility, bounds.detail);
                });
                window.addEventListener('poiSelected', function (stop) {
                    console.log(stop);
                    _this.showStopDetail(stop.detail);
                });
                return [2 /*return*/];
            });
        });
    };
    MapSpotsPage.prototype.showStopDetail = function (stopId) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _stop_detail_stop_detail_component__WEBPACK_IMPORTED_MODULE_8__["StopDetailComponent"],
                            componentProps: {
                                'id': stopId.id,
                                'object': stopId.object
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MapSpotsPage.prototype.getAccessibilityStyle = function (ref) {
        //check if bus or train
        if (ref === 'urbano') {
            this.accesibilityKnow = true;
        }
        else {
            this.accesibilityKnow = false;
        }
        return this.flagAccessibility ? 'ic_access' : 'ic_access_outline';
    };
    MapSpotsPage.prototype.toggleAccessibility = function () {
        this.flagAccessibility = !this.flagAccessibility;
        this.accessibilityStyle = this.getAccessibilityStyle(this.ref);
        // this.filterMarkers(true);
        this.profileService.setAccessibility(this.flagAccessibility);
    };
    MapSpotsPage.prototype.getAgencies = function () {
        var res = [];
        this.elements.forEach(function (e) {
            if (e.agencyId && res.indexOf(e.agencyId) < 0)
                res.push(e.agencyId);
        });
        return res;
    };
    ;
    MapSpotsPage.prototype.filterMarkers = function (accessibility, currBounds) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, wcTrasportiMAp, agencyIds, markers, filteredMarkers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        wcTrasportiMAp = document.querySelector('wc-trasporti-map');
                        this.currBounds = currBounds;
                        // loading.present();
                        // mapService.getMap('ttMap').then(function (map) {
                        // var currBounds = map.getBounds();
                        if (this.allMarkers == null || accessibility) {
                            agencyIds = this.getAgencies();
                            markers = this.dbService.getStopsData(agencyIds);
                            // var markers = [];
                            // for (var i = 0; i < list.length; i++) {
                            // if (list[i].wheelChairBoarding == 1 || !this.flagAccessibility) {
                            //   var iconUrl = 'img/' + this.markerIcon + '.png';
                            // } else {
                            //   var iconUrl = 'img/ic_urbanBus_no_acc.png';
                            // }
                            // markers.push({
                            //   stop: list[i],
                            //   lat: parseFloat(list[i].coordinates[0]),
                            //   lng: parseFloat(list[i].coordinates[1]),
                            //   icon: {
                            //     iconUrl: iconUrl,
                            //     iconSize: [36, 50],
                            //     iconAnchor: [18, 50],
                            //     popupAnchor: [-0, -50]
                            //   },
                            // });
                            // }
                            this.allMarkers = markers;
                        }
                        filteredMarkers = [];
                        if (this.allMarkers.length > this.MAX_MARKERS) {
                            this.allMarkers.forEach(function (m) {
                                // if (!currBounds) {
                                //   filteredMarkers.push(m);
                                // }
                                if (currBounds && currBounds.contains(leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.latLng(m.latitude, m.longitude))) {
                                    filteredMarkers.push(m);
                                }
                            });
                            // loading.dismiss()
                            if (filteredMarkers.length > this.MAX_MARKERS) {
                                console.log('too many markers');
                                if (!this.tooManyMarkers) {
                                    console.log('too many');
                                    this.translate.get('err_too_many_markers').subscribe(function (value) { return __awaiter(_this, void 0, void 0, function () {
                                        var toast;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.toast.create({
                                                        message: value,
                                                        duration: 2000
                                                    })];
                                                case 1:
                                                    toast = _a.sent();
                                                    toast.present();
                                                    // this.toast.create($filter('translate')('err_too_many_markers'), "short", "bottom");
                                                    this.tooManyMarkers = true;
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                }
                                // this.markers = this.convertForWC(filteredMarkers);
                                wcTrasportiMAp.showPoints();
                                return [2 /*return*/];
                            }
                            else if (filteredMarkers.length < this.MAX_MARKERS) {
                                this.tooManyMarkers = false;
                            }
                        }
                        else {
                            // loading.dismiss()
                            this.tooManyMarkers = false;
                        }
                        this.markers = this.convertForWC(filteredMarkers);
                        wcTrasportiMAp.showPoints();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapSpotsPage.prototype.convertForWC = function (filteredMarkers) {
        var returnArray = [];
        filteredMarkers.forEach(function (elem) {
            returnArray.push({
                "id": elem.id,
                "lat": elem.latitude,
                "long": elem.longitude,
                "object": JSON.stringify(elem)
            });
        });
        return JSON.stringify(returnArray);
    };
    MapSpotsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-spots',
            template: __webpack_require__(/*! ./map-spots.page.html */ "./src/app/module-trasporti/pages/map-spots/map-spots.page.html"),
            styles: [__webpack_require__(/*! ./map-spots.page.scss */ "./src/app/module-trasporti/pages/map-spots/map-spots.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _services_transport_service__WEBPACK_IMPORTED_MODULE_5__["TransportService"], _services_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], MapSpotsPage);
    return MapSpotsPage;
}());

;
// initMap() {
//   mapService.initMap('ttMap').then(function () {
//     GeoLocate.locate().then(function (pos) {
//       this.center = {
//         lat: pos[0],
//         lng: pos[1],
//         zoom: 18
//       };
//     }, function () {
//       this.filterMarkers(false);
//     });
//   });
// };
// showStopData() {
//   ttService.setTTStopData(this.popupStop);
//   $state.go('app.ttstop', {
//     stopId: this.popupStop.id,
//     agencyId: this.popupStop.agencyId,
//     ref: mapData.ref
//   });
// }
// navigate() {
//   planService.setPlanConfigure({
//     to: {
//       name: this.popupStop.name,
//       lat: this.popupStop.coordinates[0],
//       long: this.popupStop.coordinates[1]
//     },
//   });
//   planService.setName('to', this.popupStop.name);
//   $state.go('app.plan');
// };
// isEmpty(data) {
//   return angular.equals(data, {});
// };
// angular.extend($scope, {
//   center: {
//     lat: Config.getMapPosition().lat,
//     lng: Config.getMapPosition().long,
//     zoom: 18
//   },
//   markers: [],
//   events: {}
// });


/***/ }),

/***/ "./src/app/module-trasporti/pages/map-spots/stop-detail/stop-detail.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/map-spots/stop-detail/stop-detail.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!detail\">\n  <ion-item *ngFor=\"let item of lines\" (click)=\"selectElement(item)\">\n    {{item.route}}  {{item.name}} \n  </ion-item>\n</p>\n<app-stop-single-line *ngIf=\"detail\" [stop]=\"selectedStop\"></app-stop-single-line>\n"

/***/ }),

/***/ "./src/app/module-trasporti/pages/map-spots/stop-detail/stop-detail.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/map-spots/stop-detail/stop-detail.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS10cmFzcG9ydGkvcGFnZXMvbWFwLXNwb3RzL3N0b3AtZGV0YWlsL3N0b3AtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/module-trasporti/pages/map-spots/stop-detail/stop-detail.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/map-spots/stop-detail/stop-detail.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StopDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopDetailComponent", function() { return StopDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_module_trasporti_services_transport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/module-trasporti/services/transport.service */ "./src/app/module-trasporti/services/transport.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NUMBER_OF_TRIP = 100;
var StopDetailComponent = /** @class */ (function () {
    function StopDetailComponent(navParams, modalCtrl, transportService, router) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.transportService = transportService;
        this.router = router;
        this.stop = {};
        this.lines = [];
        this.data = {};
        this.detail = false;
        // componentProps can also be accessed at construction time using NavParams
        console.log(navParams.get('id') + navParams.get('object'));
    }
    StopDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.navParams.get('object')) {
            this.stop = JSON.parse(this.object);
            this.transportService.getNextTrips(this.stop.agencyId, this.stop.id, NUMBER_OF_TRIP).then(function (data) {
                console.log(data);
                _this.data = data;
                for (var k in data) {
                    _this.lines.push(data[k]);
                }
            });
        }
    };
    StopDetailComponent.prototype.selectElement = function (line) {
        this.detail = true;
        console.log(line);
        this.selectedStop = line;
    };
    StopDetailComponent.prototype.dismiss = function () {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StopDetailComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StopDetailComponent.prototype, "object", void 0);
    StopDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stop-detail',
            template: __webpack_require__(/*! ./stop-detail.component.html */ "./src/app/module-trasporti/pages/map-spots/stop-detail/stop-detail.component.html"),
            styles: [__webpack_require__(/*! ./stop-detail.component.scss */ "./src/app/module-trasporti/pages/map-spots/stop-detail/stop-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], src_app_module_trasporti_services_transport_service__WEBPACK_IMPORTED_MODULE_2__["TransportService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StopDetailComponent);
    return StopDetailComponent;
}());



/***/ }),

/***/ "./src/app/module-trasporti/pages/map-spots/stop-single-line/stop-single-line.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/map-spots/stop-single-line/stop-single-line.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div id=\"table-tt\">\n        <wc-trasporti-stop *ngIf=\"data\" [color]=\"color\" [data]=\"data\" [route]=\"route\" [name]=\"name\" [day]=\"day\"\n            [arrows]=\"true\" [littletable]=\"littletable\" [showtrips]=\"showtrips\" [labeldelay]=\"labeldelay\"\n            [labeltrips]=\"labeltrips\" [accessibility]=\"accessibility\" [showtrips]=\"showtrips\" [tripsvalue]=\"tripsvalue\">\n        </wc-trasporti-stop>\n    </div>\n"

/***/ }),

/***/ "./src/app/module-trasporti/pages/map-spots/stop-single-line/stop-single-line.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/map-spots/stop-single-line/stop-single-line.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS10cmFzcG9ydGkvcGFnZXMvbWFwLXNwb3RzL3N0b3Atc2luZ2xlLWxpbmUvc3RvcC1zaW5nbGUtbGluZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/module-trasporti/pages/map-spots/stop-single-line/stop-single-line.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/map-spots/stop-single-line/stop-single-line.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: StopSingleLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopSingleLineComponent", function() { return StopSingleLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_module_trasporti_services_transport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/module-trasporti/services/transport.service */ "./src/app/module-trasporti/services/transport.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NUMBER_OF_TRIP = 100;
var StopSingleLineComponent = /** @class */ (function () {
    function StopSingleLineComponent(translateService, transportService) {
        this.translateService = translateService;
        this.transportService = transportService;
        this.date = new Date();
        this.color = "#123456";
        this.day = this.date.getTime().toString();
        this.littletable = true; //change font size of table
        this.showtrips = true; // show kind of transportation for course. Used for train
        this.accessibility = false; // shows coulumn of accessibility
        this.data = "";
        this.lines = [];
    }
    StopSingleLineComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.stop);
        this.translateService.get('label_delay').subscribe(function (value) {
            _this.labeldelay = value;
        });
        this.translateService.get('label_trips').subscribe(function (value) {
            _this.labeltrips = value;
        });
        this.data = JSON.stringify(this.stop.times);
        this.route = this.stop.route;
        this.name = this.stop.name;
    };
    StopSingleLineComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        var trasportiTable = document.getElementById('table-tt');
        trasportiTable.addEventListener('changeDateEvent', function (event) {
            if (event.detail == "prevDate") {
                _this.date.setDate(_this.date.getDate() - 1);
            }
            if (event.detail == "nextDate") {
                _this.date.setDate(_this.date.getDate() + 1);
            }
            _this.day = _this.date.getTime().toString();
            _this.transportService.getNextTrips(_this.stop.agencyId, _this.stop.id, NUMBER_OF_TRIP).then(function (data) {
                console.log(data);
                _this.data = data;
                for (var k in data) {
                    _this.lines.push(data[k]);
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StopSingleLineComponent.prototype, "stop", void 0);
    StopSingleLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stop-single-line',
            template: __webpack_require__(/*! ./stop-single-line.component.html */ "./src/app/module-trasporti/pages/map-spots/stop-single-line/stop-single-line.component.html"),
            styles: [__webpack_require__(/*! ./stop-single-line.component.scss */ "./src/app/module-trasporti/pages/map-spots/stop-single-line/stop-single-line.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], src_app_module_trasporti_services_transport_service__WEBPACK_IMPORTED_MODULE_2__["TransportService"]])
    ], StopSingleLineComponent);
    return StopSingleLineComponent;
}());



/***/ }),

/***/ "./src/app/module-trasporti/services/profile.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/module-trasporti/services/profile.service.ts ***!
  \**************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/module-trasporti/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PROFILE_ACC = "_accesibility";
var ProfileService = /** @class */ (function () {
    function ProfileService(configService) {
        this.configService = configService;
    }
    ProfileService.prototype.setAccessibility = function (acc) {
        localStorage.setItem(this.configService.getAppId() + PROFILE_ACC, acc);
    };
    ;
    ProfileService.prototype.getAccessibility = function () {
        return JSON.parse(localStorage.getItem(this.configService.getAppId() + PROFILE_ACC));
    };
    ;
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-map-spots-map-spots-module.js.map