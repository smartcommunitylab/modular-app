(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tourist-services-tourist-services-module"],{

/***/ "./src/app/module-comune/pages/tourist-services/tourist-services.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/module-comune/pages/tourist-services/tourist-services.module.ts ***!
  \*********************************************************************************/
/*! exports provided: HttpLoaderFactory, TouristServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristServicesPageModule", function() { return TouristServicesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tourist_services_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tourist-services.page */ "./src/app/module-comune/pages/tourist-services/tourist-services.page.ts");
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
        component: _tourist_services_page__WEBPACK_IMPORTED_MODULE_5__["TouristServicesPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var TouristServicesPageModule = /** @class */ (function () {
    function TouristServicesPageModule() {
    }
    TouristServicesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    } }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            entryComponents: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_tourist_services_page__WEBPACK_IMPORTED_MODULE_5__["TouristServicesPage"]]
        })
    ], TouristServicesPageModule);
    return TouristServicesPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/tourist-services/tourist-services.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/module-comune/pages/tourist-services/tourist-services.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border [ngClass]=\"{'higher': searchAndIos()}\">\n\n  <ion-toolbar>\n    <ion-searchbar class=\"search-services\" [ngClass]=\"{'searchspace': search}\" style=\"display: none\"\n      showCancelButton=\"never\" animated (search)=\"toggleSearch()\" (ionInput)=\"searchChanged($event)\"\n      (ionCancel)=\"toggleSearch()\" (ionClear)=\"toggleSearch()\"></ion-searchbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"interaction\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toggleSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{'service_label' | translate}}\n    </ion-title>\n  </ion-toolbar>\n  <div class=\"wrapper\" *ngIf=\"!firstAccess\">\n    <div class=\"scrolling-wrapper-flexbox loop\">\n      <div class=\"container\" *ngFor=\"let tag of tags\">\n        <div class=\"tag\" *ngIf=\"tag.isChecked\">\n          <div class=\"tag-text\">\n            {{tag.value}}\n            <ion-icon name=\"close-circle\" (click)=\"removeTag(tag)\"></ion-icon>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-header>\n\n<!-- <ion-grid style=\"height: 100%\" *ngIf=\"isLoading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"circles\"></ion-spinner>\n    </ion-row>\n  </ion-grid> -->\n\n<ion-content>\n\n\n\n\n  <ion-list no-lines id=\"poi-list\">\n    <div *ngIf=\"!emptyList\">\n\n      <div *ngFor=\"let c of categories\">\n        <div class=\"content\">\n          <div *ngFor=\"let poi of showPois[c]; let i = index\">\n            <wc-details [id]=\"poi.id\" [img]=\"poi.image\" [stringsinput]=\"stringsContact\" [title]=\"poi.title\"\n              [altImage]=\"altImage\" [subtitle]=\"poi.subtitle\" [text]=\"poi.text\" [info]=\"poi.info\" [contacts]=\"poi.infos\"\n              heading-color=\"#707070\" second-color=\"#11b3ef\" expandable=true expanse=false></wc-details>\n            <div class=\"spacing\" *ngIf=\"i == showPois.length - 1\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n  <div class=\"empty-list\" *ngIf=\"emptyList\">\n    {{'empty_list' | translate}}\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-comune/pages/tourist-services/tourist-services.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/module-comune/pages/tourist-services/tourist-services.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  position: fixed;\n  width: calc(100% - 60px);\n  top: 3px;\n  z-index: 999; }\n\n.searchspace {\n  background-color: white; }\n\n.higher {\n  height: 100px; }\n\n.interaction {\n  color: #11b3ef !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL3RvdXJpc3Qtc2VydmljZXMvdG91cmlzdC1zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZTtFQUNmLHlCQUF3QjtFQUN4QixTQUFRO0VBRVIsYUFBWSxFQUNmOztBQUNEO0VBQ0ksd0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksY0FBYSxFQUNoQjs7QUFDRDtFQUNJLDBCQUF3QixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1jb211bmUvcGFnZXMvdG91cmlzdC1zZXJ2aWNlcy90b3VyaXN0LXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgdG9wOiAzcHg7XG4gICAgLy8gdG9wOiA1OHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cbi5zZWFyY2hzcGFjZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cbi5oaWdoZXJ7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbi5pbnRlcmFjdGlvbntcbiAgICBjb2xvcjogIzExYjNlZiFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/module-comune/pages/tourist-services/tourist-services.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/module-comune/pages/tourist-services/tourist-services.page.ts ***!
  \*******************************************************************************/
/*! exports provided: TouristServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristServicesPage", function() { return TouristServicesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-comune/services/config.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/module-comune/services/utils.service.ts");
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









var TouristServicesPage = /** @class */ (function () {
    function TouristServicesPage(plt, modalController, config, navCtrl, dbService, alertCtrl, router, route, alert, popoverController, events, translate, geoSrv, callNumber, utils) {
        var _this_1 = this;
        this.plt = plt;
        this.modalController = modalController;
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
        this.callNumber = callNumber;
        this.utils = utils;
        this.showPois = [];
        this.fullPois = [];
        this.tags = [];
        this.firstAccess = true;
        this.search = false;
        this.isLoading = true;
        this.fullCategories = [];
        this.categories = [];
        this.emptyList = false;
        this.doneTypingInterval = 500; //time in ms, 5 second for example
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
    TouristServicesPage.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.utils.presentLoading();
        this.route.queryParams
            .subscribe(function (params) {
            console.log(params);
            if (params) {
                var cat = JSON.parse(params.category);
                _this_1.category = cat;
            }
        });
        var element = document.getElementById('poi-list');
        this.translate.get('alt_image_string').subscribe(function (value) {
            _this_1.altImage = value;
        });
        this.config.getStringContacts(this.translate, this.language).then(function (strings) {
            _this_1.stringsContact = strings;
        });
        var el = document.getElementById('poi-list');
        if (element) {
            element.addEventListener('expandeClick', function (returnId) { return __awaiter(_this_1, void 0, void 0, function () {
                var id;
                return __generator(this, function (_a) {
                    id = returnId.detail;
                    this.router.navigate(['/detail-event'], { queryParams: { id: id, type: 'EVENT' } });
                    return [2 /*return*/];
                });
            }); });
        }
    };
    TouristServicesPage.prototype.searchAndIos = function () {
        return this.plt.is('ios') && this.search;
    };
    TouristServicesPage.prototype.ionViewDidEnter = function () {
        var _this_1 = this;
        if (!this.fullPois || this.fullPois.length == 0)
            if (this.category) {
                var query_1 = {
                    'selector': {
                        "classification.it": "Servizi"
                    }
                };
                this.translate.get('init_db').subscribe(function (value) {
                    _this_1.dbService.synch(value).then(function () {
                        _this_1.dbService.getObjectByQuery(query_1).then(function (data) {
                            if (data.docs.length > 0) {
                                _this_1.fullPois = data.docs.map(function (x) { return _this_1.convertPois(x); });
                                _this_1.subCategories(_this_1.fullPois);
                                _this_1.buildShowPois();
                                _this_1.tags = _this_1.buildFilter();
                                _this_1.orderArray('near', _this_1);
                                _this_1.isLoading = false;
                                _this_1.utils.hideLoading();
                            }
                            else {
                                _this_1.emptyList = true;
                                _this_1.utils.hideLoading();
                            }
                        }, function (err) {
                            _this_1.utils.hideLoading();
                        });
                    }, function (err) {
                        _this_1.utils.hideLoading();
                    });
                });
            }
    };
    TouristServicesPage.prototype.subCategories = function (array) {
        var _this_1 = this;
        array.forEach(function (element) {
            if (!_this_1.fullCategories.includes(element.category)) {
                _this_1.fullCategories.push(element.category);
            }
            _this_1.categories = _this_1.fullCategories;
        });
    };
    TouristServicesPage.prototype.buildShowPois = function (filters) {
        var _this_1 = this;
        this.showPois = [];
        this.fullCategories.forEach(function (e) {
            _this_1.fullPois.forEach(function (p) {
                if (!_this_1.showPois[e]) {
                    _this_1.showPois[e] = [];
                }
                if (p.category === e && filters ? filters.filter(function (item) {
                    return (item.isChecked && p.classification == item.value);
                }).length > 0 : true) {
                    _this_1.showPois[e].push(p);
                }
            });
        });
    };
    TouristServicesPage.prototype.convertPois = function (x) {
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
                poiElement.image = x.image.replace('.jpg', '_medium.jpg');
                ;
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
            if (x.classification) {
                poiElement.classification = x.classification[this.language];
                // poiElement.cat = [];
                // poiElement.cat.push(x.classification[this.language]);
            }
            if (x.cat) {
                if (x.cat[this.language])
                    poiElement.cat = x.cat[this.language];
                else
                    poiElement.cat = x.cat["it"];
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
    TouristServicesPage.prototype.toggleSearch = function () {
        var _this_1 = this;
        this.search = !this.search;
        var searchbar = document.querySelector('.search-services');
        if (searchbar.style.display === 'none') {
            searchbar.style.display = 'unset';
            searchbar.focus();
        }
        else {
            this.emptyList = false;
            searchbar.style.display = 'none';
            this.categories.forEach(function (c) {
                _this_1.showPois[c] = _this_1.fullPois.filter(function (el) {
                    return (el.category == c);
                });
            });
        }
    };
    TouristServicesPage.prototype.oneElement = function (category) {
        return (this.showPois[category].length > 0);
    };
    TouristServicesPage.prototype.searchChanged = function (input) {
        var _this_1 = this;
        var emptyList = true;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            if (!input.detail) {
                _this_1.categories.forEach(function (c) {
                    _this_1.showPois[c] = _this_1.fullPois.filter(function (el) {
                        return (el.category == c);
                    });
                });
                emptyList = false;
            }
            else {
                var value_1 = input.detail.target.value;
                var _this = _this_1;
                _this.categories.forEach(function (c) {
                    _this_1.showPois[c] = _this_1.fullPois.filter(function (el) {
                        return (el.title.toLowerCase().indexOf(value_1.toLowerCase()) > -1);
                    });
                    if (_this_1.showPois[c].length > 0)
                        emptyList = false;
                });
            }
            _this_1.emptyList = emptyList;
        }, this.doneTypingInterval);
    };
    TouristServicesPage.prototype.buildFilter = function () {
        var array = this.fullPois.map(function (item) { return item.cat; }).flat();
        var newArray = array.filter(function (value, index, self) {
            return (self.indexOf(value) === index && value);
        });
        var value = this.firstAccess ? false : true;
        var returnArray = newArray.map(function (item) {
            return {
                "value": item,
                "isChecked": value
            };
        });
        return returnArray;
    };
    TouristServicesPage.prototype.removeTag = function (tag) {
        this.tags = this.tags.map(function (item) { return tag.value == item.value ? { value: item.value, isChecked: false } : { value: item.value, isChecked: item.isChecked }; });
        this.firstAccess = true;
        var even = function (element) {
            // checks whether an element is even
            return element.isChecked;
        };
        if (this.tags.some(even)) {
            this.firstAccess = false;
            this.buildShowPois(this.tags);
        }
        else {
            this.buildShowPois();
        }
    };
    // toggleSearch() {
    //   this.search = !this.search;
    //   const searchbar = document.querySelector('ion-searchbar');
    //   if (searchbar.style.display === 'none') {
    //     searchbar.style.display = 'unset';
    //     searchbar.setFocus();
    //   } else {
    //     searchbar.style.display = 'none';
    //   }
    // }
    // searchChanged(input: any) {
    //   const value = input.detail.target.value;
    //   const _this = this;
    //   _this.categories.forEach(c => {
    //     this.showPois[c] = this.fullPois.filter(function (el) {
    //       return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
    //     });
    //   });
    // }
    // filterClicked() {
    //   this.buildAlert('filter');
    // }
    TouristServicesPage.prototype.buildAlert = function (type) {
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
                            //filter
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
    TouristServicesPage.prototype.orderArray = function (condition, _this) {
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
    TouristServicesPage.prototype.showPopover = function () {
        this.buildAlert('cat');
    };
    TouristServicesPage.prototype.changeCategory = function (cat, _this) {
        _this.categories = [];
        if (cat && cat.indexOf('Tutto') > -1) {
            _this.categories = _this.fullCategories;
        }
        else {
            _this.categories.push(cat);
        }
    };
    TouristServicesPage.prototype.buildMapPoints = function () {
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
    TouristServicesPage.prototype.goToMap = function () {
        this.router.navigate(['/map'], { queryParams: { data: JSON.stringify(this.buildMapPoints()) } });
        // console.log('CLICKED MAP');
    };
    TouristServicesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tourist-services',
            template: __webpack_require__(/*! ./tourist-services.page.html */ "./src/app/module-comune/pages/tourist-services/tourist-services.page.html"),
            styles: [__webpack_require__(/*! ./tourist-services.page.scss */ "./src/app/module-comune/pages/tourist-services/tourist-services.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_5__["GeoService"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]])
    ], TouristServicesPage);
    return TouristServicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tourist-services-tourist-services-module.js.map