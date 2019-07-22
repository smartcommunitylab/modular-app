(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-rh-list-rh-module"],{

/***/ "./src/app/module-comune/pages/list-rh/list-rh.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/module-comune/pages/list-rh/list-rh.module.ts ***!
  \***************************************************************/
/*! exports provided: HttpLoaderFactory, ListRHPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRHPageModule", function() { return ListRHPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_rh_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-rh.page */ "./src/app/module-comune/pages/list-rh/list-rh.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
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
        component: _list_rh_page__WEBPACK_IMPORTED_MODULE_5__["ListRHPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var ListRHPageModule = /** @class */ (function () {
    function ListRHPageModule() {
    }
    ListRHPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    } }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_list_rh_page__WEBPACK_IMPORTED_MODULE_5__["ListRHPage"]]
        })
    ], ListRHPageModule);
    return ListRHPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/list-rh/list-rh.page.html":
/*!***************************************************************!*\
  !*** ./src/app/module-comune/pages/list-rh/list-rh.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>\n        {{'RH' | translate}}\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-grid style=\"height: 100%\" *ngIf=\"isLoading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"circles\"></ion-spinner>\n    </ion-row>\n</ion-grid>\n\n<ion-content>\n  \n    <ion-searchbar style=\"display: none\" showCancelButton animated (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\" (search)=\"toggleSearch()\"></ion-searchbar>\n      \n    <!-- FLOATING BUTTON -->\n    <ion-fab *ngIf=\"!isLoading\" class=\"fixed\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button color=\"danger\">\n        <ion-icon name=\"arrow-dropup-circle\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\">\n          <ion-fab-button (click)=\"toggleSearch()\">\n            <ion-icon name=\"search\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button (click)=\"showPopover()\">\n              <ion-icon name=\"funnel\"></ion-icon>\n            </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n    <!-- ---------------------------- -->\n\n    \n    <ion-list no-lines id=\"poi-list\">\n      <div *ngFor=\"let c of categories\">\n        <ion-item-divider class=\"category row\" sticky>\n          <div class=\"column c-icon\" (click)=\"goToMap()\">\n            <ion-icon name=\"map\"></ion-icon>\n          </div>\n          <div class=\"column c-text\">\n            <ion-label>{{c}}</ion-label>\n          </div>\n          <div class=\"column c-btn\">\n            <ion-button *ngIf=\"!search\" class=\"popover-btn\" size=\"small\" color=\"success\" (click)=\"filterClicked()\">Ordina</ion-button>\n          </div>\n        </ion-item-divider>\n        <div class=\"content\">\n          <div *ngFor=\"let poi of showPois[c]; let i = index\">\n            <wc-details [img]=\"poi.image\" [title]=\"poi.title\" [subtitle]=\"poi.subtitle\" [text]=\"poi.text\" [info]=\"poi.info\" [contacts]=\"poi.infos\" heading-color=\"red\"></wc-details>\n            <div class=\"spacing\" *ngIf=\"i == showPois.length - 1\"></div>\n          </div>\n        </div>\n      </div>\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/module-comune/pages/list-rh/list-rh.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/module-comune/pages/list-rh/list-rh.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-left: 2%;\n  padding-right: 2%; }\n\nion-searchbar {\n  position: fixed;\n  top: 58px;\n  z-index: 3; }\n\n.column {\n  float: left; }\n\n.c-text {\n  width: 60%;\n  margin-left: 10%; }\n\n.c-icon {\n  width: 10%;\n  height: 20px;\n  margin-bottom: 2%; }\n\n.c-btn {\n  width: 30%;\n  margin-bottom: 3%; }\n\n.row {\n  text-align: center;\n  vertical-align: middle;\n  height: 40px; }\n\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtcmgvbGlzdC1yaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZTtFQUNmLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsVUFBUztFQUNULFdBQVUsRUFDYjs7QUFDRDtFQUNJLFlBQVUsRUFDYjs7QUFDRDtFQUNJLFdBQVU7RUFDVixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxXQUFVO0VBQ1YsYUFBWTtFQUNaLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLFdBQVU7RUFDVixrQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxlQUFhO0VBQ2IsWUFBVSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLWNvbXVuZS9wYWdlcy9saXN0LXJoL2xpc3QtcmgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDoyJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbn1cbmlvbi1zZWFyY2hiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDU4cHg7XG4gICAgei1pbmRleDogMztcbn1cbi5jb2x1bW4ge1xuICAgIGZsb2F0OmxlZnQ7XG59XG4uYy10ZXh0e1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5jLWljb24ge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xufVxuLmMtYnRuIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206MyU7XG59XG4ucm93e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5yb3c6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6dGFibGU7XG4gICAgY2xlYXI6Ym90aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/module-comune/pages/list-rh/list-rh.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/module-comune/pages/list-rh/list-rh.page.ts ***!
  \*************************************************************/
/*! exports provided: ListRHPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRHPage", function() { return ListRHPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
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
// tslint:disable: no-shadowed-variable







var ListRHPage = /** @class */ (function () {
    function ListRHPage(config, navCtrl, dbService, alertCtrl, router, route, alert, popoverController, events, translate, geoSrv) {
        var _this_1 = this;
        this.config = config;
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.route = route;
        this.alert = alert;
        this.popoverController = popoverController;
        this.events = events;
        this.translate = translate;
        this.geoSrv = geoSrv;
        this.showPois = [];
        this.fullPois = [];
        this.search = false;
        this.isLoading = true;
        this.fullCategories = [];
        this.categories = [];
        if (window[this.config.getAppModuleName()]['language'])
            this.language = window[this.config.getAppModuleName()]['language'];
        if (window[this.config.getAppModuleName()]['geolocation'])
            this.mypos = {
                lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
                long: window[this.config.getAppModuleName()]['geolocation']['long']
            };
        else {
            this.mypos = this.config.getDefaultPosition();
        }
        this.translate.use(this.language);
        events.subscribe('radio:selected', function (x) {
            _this_1.changeCategory(x);
        });
    }
    ListRHPage.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.route.queryParams
            .subscribe(function (params) {
            console.log(params);
            if (params) {
                var cat = JSON.parse(params.category);
                _this_1.category = cat;
            }
        });
    };
    ListRHPage.prototype.ionViewDidEnter = function () {
        var _this_1 = this;
        if (this.category) {
            var query_1 = { 'selector': { 'element-type': 'hotel-item' } };
            this.dbService.getObjectByQuery(query_1).then(function (data) {
                _this_1.fullPois = data.docs.map(function (x) { return _this_1.convertPois(x); });
            }).then(function (x) {
                query_1 = { 'selector': { 'element-type': 'restaurant-item' } };
                _this_1.dbService.getObjectByQuery(query_1).then(function (data) {
                    _this_1.fullPois = _this_1.fullPois.concat(data.docs.map(function (x) { return _this_1.convertPois(x); }));
                    _this_1.subCategories(_this_1.fullPois);
                    _this_1.buildShowPois();
                    _this_1.isLoading = false;
                });
            });
        }
    };
    ListRHPage.prototype.subCategories = function (array) {
        var _this_1 = this;
        array.forEach(function (element) {
            if (!_this_1.fullCategories.includes(element.category)) {
                _this_1.fullCategories.push(element.category);
            }
            _this_1.categories = _this_1.fullCategories;
        });
    };
    ListRHPage.prototype.buildShowPois = function () {
        var _this_1 = this;
        this.fullCategories.forEach(function (e) {
            _this_1.fullPois.forEach(function (p) {
                if (!_this_1.showPois[e]) {
                    _this_1.showPois[e] = [];
                }
                if (p.category === e) {
                    _this_1.showPois[e].push(p);
                }
            });
        });
    };
    ListRHPage.prototype.convertPois = function (x) {
        var tmp = '';
        var poiElement = {};
        if (x) {
            if (x.title) {
                poiElement.title = x.title[this.language];
            }
            if (x.subtitle) {
                poiElement.description = x.subtitle[this.language];
            }
            if (x.description) {
                poiElement.description += '<br/>' + x.description[this.language];
            }
            if (x.image) {
                poiElement.image = x.image;
            }
            if (x._id) {
                poiElement.id = x._id;
            }
            if (x.timetable) {
                poiElement.date = x.timetable[this.language];
            }
            if (x.closing) {
                if (x.closing[this.language]) {
                    poiElement.info = '<b>Chiusura: ' + x.closing[this.language] + '</b>';
                }
            }
            if (x.address) {
                poiElement.address = x.address[this.language];
            }
            if (x.description) {
                poiElement.text = x.description[this.language];
            }
            if (x.category) {
                poiElement.category = x.category.charAt(0).toUpperCase() + x.category.slice(1);
            }
            if (x.classification) {
                poiElement.subtitle = x.classification[this.language];
                // poiElement.cat = [];
                // poiElement.cat.push(x.classification[this.language]);
            }
            if (x.url) {
                poiElement.url = x.url;
            }
            if (x.contacts) {
                if (x.contacts.phone) {
                    poiElement.phone = x.contacts.phone;
                }
                if (x.contacts.email) {
                    tmp += '<p>' + x.contacts.email + '</p>';
                    poiElement.email = x.contacts.email;
                }
            }
            if (x.location) {
                poiElement.location = x.location;
            }
            poiElement.text += tmp;
            poiElement.infos = JSON.stringify(poiElement);
        }
        return poiElement;
    };
    ListRHPage.prototype.toggleSearch = function () {
        this.search = !this.search;
        var searchbar = document.querySelector('ion-searchbar');
        if (searchbar.style.display === 'none') {
            searchbar.style.display = 'unset';
            searchbar.setFocus();
        }
        else {
            searchbar.style.display = 'none';
        }
    };
    ListRHPage.prototype.searchChanged = function (input) {
        var _this_1 = this;
        var value = input.detail.target.value;
        var _this = this;
        _this.categories.forEach(function (c) {
            _this_1.showPois[c] = _this_1.fullPois.filter(function (el) {
                return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
            });
        });
    };
    ListRHPage.prototype.filterClicked = function () {
        this.buildAlert('filter');
    };
    ListRHPage.prototype.buildAlert = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this, alInputs, title, handlerFunc, alert;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _this = this;
                        alInputs = [];
                        if (type.indexOf('cat') > -1) {
                            handlerFunc = this.changeCategory;
                            title = 'Seleziona categoria';
                            _this.categories.forEach(function (c) {
                                alInputs.push({
                                    name: c,
                                    type: 'radio',
                                    label: c,
                                    value: c,
                                    checked: false
                                });
                            });
                            alInputs.push({
                                name: 'tutto',
                                type: 'radio',
                                label: 'Tutto',
                                value: 'Tutto',
                                checked: true
                            });
                        }
                        else {
                            title = 'Ordina Per';
                            handlerFunc = this.orderArray;
                            alInputs = [
                                {
                                    name: 'near',
                                    type: 'radio',
                                    label: 'Più vicini',
                                    value: 'near',
                                    checked: true
                                },
                                {
                                    name: 'open',
                                    type: 'radio',
                                    label: 'Aperti Adesso',
                                    value: 'open',
                                    checked: false
                                }
                            ];
                        }
                        return [4 /*yield*/, this.alert.create({
                                header: title,
                                inputs: alInputs,
                                buttons: [
                                    {
                                        text: 'Annulla',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                        }
                                    },
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            handlerFunc(data, _this_1);
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
    ListRHPage.prototype.orderArray = function (condition, _this) {
        _this.isLoading = true;
        if (condition.indexOf('near') > -1) {
            _this.categories.forEach(function (c) {
                _this.showPois[c] = _this.showPois[c].sort(function (a, b) {
                    var dist1 = 0;
                    var dist2 = 0;
                    if (a.location) {
                        dist1 = _this.geoSrv.getDistanceKM({ lat: _this.mypos.lat, lon: _this.mypos.long }, { lat: a.location[0], lon: a.location[1] });
                    }
                    if (b.location) {
                        dist2 = _this.geoSrv.getDistanceKM({ lat: _this.mypos.lat, lon: _this.mypos.long }, { lat: b.location[0], lon: b.location[1] });
                    }
                    return dist1 - dist2;
                });
            });
        }
        _this.isLoading = false;
    };
    ListRHPage.prototype.showPopover = function () {
        this.buildAlert('cat');
    };
    ListRHPage.prototype.changeCategory = function (cat, _this) {
        _this.categories = [];
        if (cat && cat.indexOf('Tutto') > -1) {
            _this.categories = _this.fullCategories;
        }
        else {
            _this.categories.push(cat);
        }
    };
    ListRHPage.prototype.buildMapPoints = function () {
        var _this_1 = this;
        var tmp = [];
        var keys = Object.keys(this.showPois);
        keys.forEach(function (c) {
            _this_1.showPois[c].forEach(function (p) {
                // console.log(p);
                if (p.location) {
                    // Check if distance < 1 km
                    var dist = _this_1.geoSrv.getDistanceKM({ lat: _this_1.mypos.lat, lon: _this_1.mypos.long }, { lat: p.location[0], lon: p.location[1] });
                    if (dist < 1) {
                        tmp.push({ name: p.title, lat: p.location[0], lon: p.location[1], address: p.address, distance: dist });
                    }
                }
            });
        });
        // console.log(tmp)
        return tmp;
    };
    ListRHPage.prototype.goToMap = function () {
        this.router.navigate(['/map'], { queryParams: { data: JSON.stringify(this.buildMapPoints()) } });
        // console.log('CLICKED MAP');
    };
    ListRHPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-rh',
            template: __webpack_require__(/*! ./list-rh.page.html */ "./src/app/module-comune/pages/list-rh/list-rh.page.html"),
            styles: [__webpack_require__(/*! ./list-rh.page.scss */ "./src/app/module-comune/pages/list-rh/list-rh.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_5__["GeoService"]])
    ], ListRHPage);
    return ListRHPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-rh-list-rh-module.js.map