(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-event-list-event-module"],{

/***/ "./src/app/module-comune/pages/list-event/list-event.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/module-comune/pages/list-event/list-event.module.ts ***!
  \*********************************************************************/
/*! exports provided: HttpLoaderFactory, ListEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventPageModule", function() { return ListEventPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_event_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-event.page */ "./src/app/module-comune/pages/list-event/list-event.page.ts");
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
        component: _list_event_page__WEBPACK_IMPORTED_MODULE_5__["ListEventPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var ListEventPageModule = /** @class */ (function () {
    function ListEventPageModule() {
    }
    ListEventPageModule = __decorate([
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
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_list_event_page__WEBPACK_IMPORTED_MODULE_5__["ListEventPage"]]
        })
    ], ListEventPageModule);
    return ListEventPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/list-event/list-event.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/module-comune/pages/list-event/list-event.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n      <ion-searchbar style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\"\n    (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"interaction\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"filterClicked()\">\n        <ion-icon name=\"options\" ></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"toggleSearch()\">\n        <ion-icon name=\"search\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{'EVENTS' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-grid style=\"height: 100%\" *ngIf=\"isLoading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%\">\n    <ion-spinner name=\"circles\"></ion-spinner>\n  </ion-row>\n</ion-grid>\n\n<ion-content>\n\n  <ion-searchbar style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\"\n    (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n\n  <!-- FLOATING BUTTON -->\n  <!-- <ion-fab *ngIf=\"!isLoading\" class=\"fixed\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"arrow-dropup-circle\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"toggleSearch()\">\n            <ion-icon name=\"search\"></ion-icon>\n          </ion-fab-button>\n      <ion-fab-button (click)=\"filterClicked()\">\n              <ion-icon name=\"swap\" class=\"order-icon\"></ion-icon>\n            </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab> -->\n  <!-- ---------------------------- -->\n  <div class=\"wrapper\">\n      <div class=\"scrolling-wrapper-flexbox loop\">\n        <ion-chip *ngFor=\"let c of categories\" (click)=\"selectInternalElement(c)\">\n          <ion-label class=\"interaction\">{{c}}</ion-label>\n        </ion-chip>\n      </div>\n    </div>\n  <ion-list no-lines id=\"poi-list\">\n    <div *ngFor=\"let c of categories\">\n      <ion-item-divider class=\"category row\" sticky *ngIf=\"oneElement(c)\">\n        <div class=\"column c-text\">\n          <ion-label>{{c}}</ion-label>\n        </div>\n        <!-- <div class=\"column c-btn\">\n          <ion-button *ngIf=\"!search\" class=\"popover-btn\" size=\"small\" color=\"success\" (click)=\"showPopover()\">Categorie\n          </ion-button>\n        </div> -->\n      </ion-item-divider>\n      <div class=\"content\">\n        <div *ngFor=\"let poi of showPois[c]; let i = index\">\n          <wc-details [img]=\"poi.image\" [title]=\"poi.title\" [subtitle]=\"poi.subtitle\" [text]=\"poi.text\"\n            [info]=\"poi.info\" [contacts]=\"poi.infos\" heading-color=\"red\"></wc-details>\n          <div class=\"spacing\" *ngIf=\"i == showPois.length - 1\"></div>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-comune/pages/list-event/list-event.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/module-comune/pages/list-event/list-event.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-left: 2%;\n  padding-right: 2%; }\n\nion-searchbar {\n  position: fixed;\n  top: 58px;\n  z-index: 3; }\n\n.column {\n  float: left; }\n\n.c-text {\n  width: 60%;\n  margin-left: 20%; }\n\n.c-btn {\n  width: 40%;\n  margin-bottom: 3%; }\n\n.row {\n  text-align: center;\n  vertical-align: middle;\n  height: 40px; }\n\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.order-icon {\n  transform: rotate(90deg); }\n\n.wrapper .scrolling-wrapper-flexbox {\n  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  z-index: 999;\n  position: fixed; }\n\n.wrapper .scrolling-wrapper-flexbox ion-chip {\n    flex: 0 0 auto;\n    background-color: white; }\n\n.interaction {\n  color: #11b3ef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtZXZlbnQvbGlzdC1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZTtFQUNmLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsVUFBUztFQUNULFdBQVUsRUFDYjs7QUFDRDtFQUNJLFlBQVUsRUFDYjs7QUFDRDtFQUNJLFdBQVU7RUFDVixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1Ysa0JBQWdCLEVBQ25COztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsZUFBYTtFQUNiLFlBQVUsRUFDYjs7QUFDRDtFQUNJLHlCQUF3QixFQUMzQjs7QUFFRDtFQUtRLCtFQUE4RTtFQUM5RSw4RUFBNkU7RUFDN0UsMkVBQTBFO0VBQzFFLHdCQUFzQjtFQUN0QixZQUFXO0VBQ1gsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osZ0JBQWUsRUFLbEI7O0FBbEJMO0lBZVksZUFBYztJQUNkLHdCQUF1QixFQUMxQjs7QUFHVDtFQUNJLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtZXZlbnQvbGlzdC1ldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OjIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xufVxuaW9uLXNlYXJjaGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNThweDtcbiAgICB6LWluZGV4OiAzO1xufVxuLmNvbHVtbiB7XG4gICAgZmxvYXQ6bGVmdDtcbn1cbi5jLXRleHR7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uYy1idG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLWJvdHRvbTozJTtcbn1cbi5yb3d7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLnJvdzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTp0YWJsZTtcbiAgICBjbGVhcjpib3RoO1xufVxuLm9yZGVyLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxufVxuXG4ud3JhcHBlciB7XG5cbiAgICAuc2Nyb2xsaW5nLXdyYXBwZXItZmxleGJveCB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1tcy1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgLW8tYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaW50ZXJhY3Rpb24ge1xuICAgIGNvbG9yOiAjMTFiM2VmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/module-comune/pages/list-event/list-event.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/list-event/list-event.page.ts ***!
  \*******************************************************************/
/*! exports provided: ListEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventPage", function() { return ListEventPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
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






var ListEventPage = /** @class */ (function () {
    function ListEventPage(navCtrl, dbService, alertCtrl, router, route, alert, config, events, translate) {
        var _this_1 = this;
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.route = route;
        this.alert = alert;
        this.config = config;
        this.events = events;
        this.translate = translate;
        this.showPois = [];
        this.fullPois = [];
        this.search = false;
        this.isLoading = true;
        this.fullCategories = [];
        this.categories = [];
        this.doneTypingInterval = 500; //time in ms, 5 second for example
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
        events.subscribe('radio:selected', function (x) {
            _this_1.changeCategory(x);
        });
    }
    ListEventPage.prototype.ngOnInit = function () {
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
    ListEventPage.prototype.ionViewDidEnter = function () {
        var _this_1 = this;
        if (this.category && this.category.query) {
            this.dbService.getObjectByQuery(this.category.query).then(function (data) {
                _this_1.fullPois = data.docs.map(function (x) { return _this_1.convertPois(x); });
                _this_1.subCategories(_this_1.fullPois);
                _this_1.buildShowPois();
                _this_1.isLoading = false;
                console.log(_this_1.showPois);
            });
        }
        var el = document.getElementById('poi-list');
        el.addEventListener('pathSelected', function (path) {
            _this_1.type = path.detail.split(';')[1];
            var id = path.detail.split(';')[0];
            _this_1.goToDetail(id);
        });
    };
    ListEventPage.prototype.subCategories = function (array) {
        var _this_1 = this;
        array.forEach(function (element) {
            if (!_this_1.fullCategories.includes(element.category)) {
                _this_1.fullCategories.push(element.category);
            }
            _this_1.categories = _this_1.fullCategories;
        });
    };
    ListEventPage.prototype.buildShowPois = function () {
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
    ListEventPage.prototype.convertPois = function (x) {
        var poiElement = {};
        if (x) {
            if (x.title) {
                poiElement.title = x.title[this.language];
            }
            if (x.subtitle) {
                poiElement.subtitle = x.subtitle[this.language];
            }
            if (x.description) {
                poiElement.description = x.description[this.language];
            }
            if (x.image) {
                poiElement.image = x.image;
            }
            if (x._id) {
                poiElement.id = x._id;
            }
            if (x.topics) {
                poiElement.cat = x.topics;
            }
            if (x.eventPeriod) {
                poiElement.date = x.eventPeriod[this.language];
            }
            if (x.eventTiming) {
                poiElement.time = x.eventTiming[this.language];
            }
            if (x.info) {
                poiElement.info = x.info[this.language];
            }
            if (x.address) {
                poiElement.address = x.address[this.language];
            }
            if (x.description) {
                poiElement.text = x.description[this.language];
            }
            if (x.category) {
                poiElement.category = x.category;
            }
            if (x.url) {
                poiElement.url = x.url;
            }
            if (x.contacts) {
                if (x.contacts.phone) {
                    poiElement.phone = x.contacts.phone;
                }
                if (x.contacts.email) {
                    poiElement.email = x.contacts.email;
                }
            }
            poiElement.infos = JSON.stringify(poiElement);
        }
        return poiElement;
    };
    ListEventPage.prototype.goToDetail = function (id) {
        this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: this.type } });
    };
    ListEventPage.prototype.toggleSearch = function () {
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
    ListEventPage.prototype.oneElement = function (category) {
        return (this.showPois[category].length > 0);
    };
    ListEventPage.prototype.searchChanged = function (input) {
        var _this_1 = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            var value = input.detail.target.value;
            var _this = _this_1;
            _this.categories.forEach(function (c) {
                _this_1.showPois[c] = _this_1.fullPois.filter(function (el) {
                    if (el.title)
                        return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
                    return false;
                });
            });
        }, this.doneTypingInterval);
    };
    ListEventPage.prototype.filterClicked = function () {
        this.buildAlert('filter');
    };
    ListEventPage.prototype.buildAlert = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this, alInputs, title, handlerFunc, alert;
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
                            handlerFunc = this.orderArray;
                            title = 'Ordina per';
                            alInputs = [
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
                                            handlerFunc(data, _this);
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
    ListEventPage.prototype.orderArray = function (condition, _this) {
        _this.categories.forEach(function (c) {
            if (condition.indexOf('asc') > -1) {
                _this.showPois[c] = _this.showPois[c].sort(function (a, b) { return a.title.localeCompare(b.title); });
            }
            else {
                _this.showPois[c] = _this.showPois[c].sort(function (a, b) { return b.title.localeCompare(a.title); });
            }
        });
    };
    ListEventPage.prototype.showPopover = function () {
        this.buildAlert('cat');
        // const popover = await this.popoverController.create({
        //   component: PopoverComponent,
        //   componentProps: {elements: this.fullCategories, controller: this.popoverController},
        //   translucent: true
        // });
        // return await popover.present();
    };
    ListEventPage.prototype.changeCategory = function (cat, _this) {
        _this.categories = [];
        if (cat && cat.indexOf('Tutto') > -1) {
            _this.categories = _this.fullCategories;
        }
        else {
            _this.categories.push(cat);
        }
    };
    ListEventPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-event',
            template: __webpack_require__(/*! ./list-event.page.html */ "./src/app/module-comune/pages/list-event/list-event.page.html"),
            styles: [__webpack_require__(/*! ./list-event.page.scss */ "./src/app/module-comune/pages/list-event/list-event.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ListEventPage);
    return ListEventPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-event-list-event-module.js.map