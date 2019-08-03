(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-event-detail-event-module"],{

/***/ "./src/app/module-comune/pages/detail-event/detail-event.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-event/detail-event.module.ts ***!
  \*************************************************************************/
/*! exports provided: HttpLoaderFactory, DetailEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailEventPageModule", function() { return DetailEventPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_event_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-event.page */ "./src/app/module-comune/pages/detail-event/detail-event.page.ts");
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
        component: _detail_event_page__WEBPACK_IMPORTED_MODULE_5__["DetailEventPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var DetailEventPageModule = /** @class */ (function () {
    function DetailEventPageModule() {
    }
    DetailEventPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    } }), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_detail_event_page__WEBPACK_IMPORTED_MODULE_5__["DetailEventPage"]]
        })
    ], DetailEventPageModule);
    return DetailEventPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/detail-event/detail-event.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-event/detail-event.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header no-border translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title *ngIf=\"poi\">\n      {{poi.title[lang]}}\n      </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<!-- <ion-buttons slot=\"start\"> --> \n<!-- <ion-back-button></ion-back-button> -->\n<!-- </ion-buttons> -->\n<ion-content fullscreen=\"true\" padding id=\"poi-container\">\n    <div shape=\"round\" class=\"back-button\" (click)=\"goBack()\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n    </div>\n    <wc-details  *ngIf=\"poi\" [img]=\"poi.image\" [stringsinput]=\"stringsContact\" [title]=\"poi.title\" [altImage]=\"altImage\"\n      [subtitle]=\"poi.subtitle\" [text]=\"poi.description\" [info]=\"poi.info\" [contacts]=\"contacts\"\n      [subtitle]=\"poi.subtitle\" [info]=\"poi.info\" [contacts]=\"poi.infos\" [expandable]=false [expanse]=true heading-color=\"#707070\"\n      second-color=\"#11b3ef\"> </wc-details>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/module-comune/pages/detail-event/detail-event.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-event/detail-event.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-button {\n  position: fixed;\n  color: #11b3ef;\n  --background: white;\n  border-radius: 24px;\n  border: 1px solid #11b3ef;\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2RldGFpbC1ldmVudC9kZXRhaWwtZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0VBQ2Qsb0JBQWE7RUFDYixvQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFFMUIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2RldGFpbC1ldmVudC9kZXRhaWwtZXZlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBjb2xvcjogIzExYjNlZjtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzExYjNlZjtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cblxuLy8gLmJhY2stYnV0dG9uOmFjdGl2ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMxMWIzZWY7XG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/module-comune/pages/detail-event/detail-event.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-event/detail-event.page.ts ***!
  \***********************************************************************/
/*! exports provided: DetailEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailEventPage", function() { return DetailEventPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-comune/services/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/module-comune/services/utils.service.ts");
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








var DetailEventPage = /** @class */ (function () {
    function DetailEventPage(router, route, callNumber, utils, location, translate, dbService, config) {
        this.router = router;
        this.route = route;
        this.callNumber = callNumber;
        this.utils = utils;
        this.location = location;
        this.translate = translate;
        this.dbService = dbService;
        this.config = config;
        this.contacts = {};
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
    }
    DetailEventPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            if (params.objectIds) {
                _this.manageoLcalId(params.objectIds);
            }
            else if (params) {
                _this.type = params.type;
                _this.dbService.getObjectById(params.id).then(function (data) {
                    _this.poiInput = data.docs[0];
                    _this.buildContacts();
                });
            }
        });
        this.translate.get('alt_image_string').subscribe(function (value) {
            _this.altImage = value;
        });
        this.config.getStringContacts(this.translate, this.language).then(function (strings) {
            _this.stringsContact = strings;
        });
        var element = document.getElementById('poi-container');
        element.addEventListener('contactClick', function (contact) { return __awaiter(_this, void 0, void 0, function () {
            var contactParam;
            return __generator(this, function (_a) {
                contactParam = JSON.parse(contact.detail);
                if (contactParam.type == 'phone') {
                    this.callNumber.callNumber(contactParam.value, true)
                        .then(function (res) { return console.log('Launched dialer!', res); })
                        .catch(function (err) { return console.log('Error launching dialer', err); });
                }
                if (contactParam.type == 'address') {
                    this.utils.openAddressMap(contactParam.value);
                    console.log('vai all\'indirizzo' + contactParam.value);
                }
                if (contactParam.type == 'url') {
                    this.utils.openUrl(contactParam.value);
                    console.log('vai all\'indirizzo' + contactParam.value);
                }
                if (contactParam.type == 'share') {
                    this.utils.openShare(contactParam.value);
                    console.log('vai all\'indirizzo' + contactParam.value);
                }
                return [2 /*return*/];
            });
        }); });
    };
    DetailEventPage.prototype.goBack = function () {
        this.location.back();
    };
    DetailEventPage.prototype.manageoLcalId = function (objectIds) {
        var _this = this;
        if (objectIds.length == 1) {
            this.dbService.getObjectByDataId(objectIds[0]).then(function (data) {
                _this.poi = data.docs[0];
                _this.type = data.docs[0].fromTime ? 'EVENT' : 'POI';
                _this.buildContacts();
            });
        }
    };
    DetailEventPage.prototype.buildContacts = function () {
        var poiElement = {};
        if (this.poiInput) {
            if (this.poiInput.title) {
                poiElement.title = this.poiInput.title[this.language];
            }
            if (this.poiInput.subtitle) {
                poiElement.subtitle = this.poiInput.subtitle[this.language];
            }
            if (this.poiInput.description) {
                poiElement.description = this.poiInput.description[this.language];
            }
            if (this.poiInput.image) {
                poiElement.image = this.poiInput.image;
            }
            if (this.poiInput._id) {
                poiElement.id = this.poiInput._id;
            }
            if (this.poiInput.topics) {
                poiElement.cat = this.poiInput.topics;
            }
            if (this.poiInput.eventPeriod) {
                poiElement.date = this.poiInput.eventPeriod[this.language];
            }
            if (this.poiInput.eventTiming) {
                poiElement.time = this.poiInput.eventTiming[this.language];
            }
            if (this.poiInput.info) {
                poiElement.info = this.poiInput.info[this.language];
            }
            if (this.poiInput.address) {
                poiElement.address = this.poiInput.address[this.language];
            }
            if (this.poiInput.description) {
                poiElement.text = this.poiInput.description[this.language];
            }
            if (this.poiInput.category) {
                poiElement.category = this.poiInput.category;
            }
            if (this.poiInput.classification) {
                poiElement.classification = this.poiInput.classification[this.language];
            }
            if (this.poiInput.url) {
                poiElement.url = this.poiInput.url;
            }
            if (this.poiInput.contacts) {
                if (this.poiInput.contacts.phone) {
                    poiElement.phone = this.poiInput.contacts.phone;
                }
                if (this.poiInput.contacts.email) {
                    poiElement.email = this.poiInput.contacts.email;
                }
            }
            poiElement.infos = JSON.stringify(poiElement);
        }
        this.poi = poiElement;
    };
    DetailEventPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-event',
            template: __webpack_require__(/*! ./detail-event.page.html */ "./src/app/module-comune/pages/detail-event/detail-event.page.html"),
            styles: [__webpack_require__(/*! ./detail-event.page.scss */ "./src/app/module-comune/pages/detail-event/detail-event.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"], _services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], DetailEventPage);
    return DetailEventPage;
}());



/***/ }),

/***/ "./src/app/module-comune/services/config.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/module-comune/services/config.service.ts ***!
  \**********************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.appModuleName = "app-module";
        this.defaultPosition = {
            lat: 0,
            long: 0
        };
        this.menu = [
            {
                title: "Home",
                url: "/home",
                icon: "home"
            }
        ];
    }
    ConfigService.prototype.init = function () {
        localStorage.setItem('comune-menu-', JSON.stringify(this.menu));
    };
    ConfigService.prototype.getStringContacts = function (translate, language) {
        return new Promise(function (resolve, reject) {
            translate.get('phone_contacts').subscribe(function (phone) {
                var phone = phone;
                var address = translate.instant('address_contacts');
                var url = translate.instant('url_contacts');
                var share = translate.instant('share_contacts');
                var contacts = JSON.stringify({
                    "phone": phone,
                    "address": address,
                    "url": url,
                    "share": share
                });
                resolve(contacts);
            });
        });
    };
    ConfigService.prototype.getAppModuleName = function () {
        return this.appModuleName;
    };
    ConfigService.prototype.getDefaultPosition = function () {
        return this.defaultPosition;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/module-comune/services/utils.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/module-comune/services/utils.service.ts ***!
  \*********************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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



var UtilsService = /** @class */ (function () {
    function UtilsService(theInAppBrowser, loadingController) {
        this.theInAppBrowser = theInAppBrowser;
        this.loadingController = loadingController;
        this.urlMappa = "https://www.google.com/maps/search/?api=1&query=";
        this.pattern = /^((http|https|ftp):\/\/)/;
    }
    UtilsService.prototype.openAddressMap = function (address) {
        window.open(encodeURI(this.urlMappa + address), '_system');
    };
    UtilsService.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                        // spinner: null,
                        // message: `<img src="assets/animation/loading.gif" />`,
                        // cssClass: 'custom-loading',
                        // duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UtilsService.prototype.hideLoading = function () {
        this.loadingController.dismiss();
    };
    UtilsService.prototype.openUrl = function (value) {
        var target = "_system";
        if (!this.pattern.test(value)) {
            value = "http://" + value;
        }
        this.theInAppBrowser.create(value, "_system");
    };
    UtilsService.prototype.openShare = function (value) {
        throw new Error("Method not implemented.");
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], UtilsService);
    return UtilsService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detail-event-detail-event-module.js.map