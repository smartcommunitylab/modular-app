(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-farmacie-list-farmacie-module"],{

/***/ "./src/app/module-comune/pages/list-farmacie/list-farmacie.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-farmacie/list-farmacie.module.ts ***!
  \***************************************************************************/
/*! exports provided: HttpLoaderFactory, ListFarmaciePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFarmaciePageModule", function() { return ListFarmaciePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_farmacie_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-farmacie.page */ "./src/app/module-comune/pages/list-farmacie/list-farmacie.page.ts");
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
        component: _list_farmacie_page__WEBPACK_IMPORTED_MODULE_5__["ListFarmaciePage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var ListFarmaciePageModule = /** @class */ (function () {
    function ListFarmaciePageModule() {
    }
    ListFarmaciePageModule = __decorate([
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
            declarations: [_list_farmacie_page__WEBPACK_IMPORTED_MODULE_5__["ListFarmaciePage"]]
        })
    ], ListFarmaciePageModule);
    return ListFarmaciePageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/list-farmacie/list-farmacie.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-farmacie/list-farmacie.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-searchbar style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\"\n      (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"interaction\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toggleSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{'farmacie_label' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-grid style=\"height: 100%\" *ngIf=\"isLoading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%\">\n    <ion-spinner name=\"circles\"></ion-spinner>\n  </ion-row>\n</ion-grid>\n\n<ion-content>\n  <ion-card class=\"card-turni\" *ngIf=\"turno\">\n      <button ion-button icon-only (click)=\"closeTurno()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </button>\n    <div class=\"message\" [innerHTML]=\"farmacieTurno\"></div>\n  </ion-card>\n\n  <ion-list no-lines id=\"poi-list\">\n    <div *ngFor=\"let c of categories\">\n      <div class=\"content\">\n        <div *ngFor=\"let poi of showPois[c]; let i = index\">\n          <wc-details [stringsinput]=\"stringsContact\" [title]=\"poi.title\" [subtitle]=\"poi.subtitle\" [text]=\"poi.text\"\n            [info]=\"poi.info\" [distance]=\"getDistance(poi)\" [contacts]=\"poi.infos\" heading-color=\"#707070\"\n            second-color=\"#11b3ef\" expandable=false expanse=false></wc-details>\n          <div class=\"spacing\" *ngIf=\"i == showPois.length - 1\"></div>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-comune/pages/list-farmacie/list-farmacie.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-farmacie/list-farmacie.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-left: 2%;\n  padding-right: 2%; }\n\nion-searchbar {\n  position: fixed;\n  top: 58px;\n  z-index: 3; }\n\n.column {\n  float: left; }\n\n.c-text {\n  width: 60%;\n  margin-left: 10%; }\n\n.c-icon {\n  width: 10%;\n  height: 20px;\n  margin-bottom: 2%; }\n\n.c-btn {\n  width: 30%;\n  margin-bottom: 3%; }\n\n.row {\n  text-align: center;\n  vertical-align: middle;\n  height: 40px; }\n\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.interaction {\n  color: #11b3ef; }\n\n.wrapper .scrolling-wrapper-flexbox {\n  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  z-index: 999;\n  position: fixed; }\n\n.wrapper .scrolling-wrapper-flexbox .container {\n    flex: 0 0 auto; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag {\n      flex: 0 0 auto;\n      margin: 8px; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag .tag-text {\n        padding: 4px;\n        color: white;\n        background-color: #11b3ef; }\n\n.card-turni {\n  border: 1px solid grey;\n  padding: 0px 8px; }\n\n.card-turni button {\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    color: #11b3ef;\n    background-color: white;\n    font-size: 18px; }\n\n.card-turni .message {\n    padding-top: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtZmFybWFjaWUvbGlzdC1mYXJtYWNpZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZTtFQUNmLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsVUFBUztFQUNULFdBQVUsRUFDYjs7QUFDRDtFQUNJLFlBQVUsRUFDYjs7QUFDRDtFQUNJLFdBQVU7RUFDVixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxXQUFVO0VBQ1YsYUFBWTtFQUNaLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLFdBQVU7RUFDVixrQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxlQUFhO0VBQ2IsWUFBVSxFQUNiOztBQUNEO0VBQ0ksZUFBYyxFQUNqQjs7QUFDRDtFQUtRLCtFQUE4RTtFQUM5RSw4RUFBNkU7RUFDN0UsMkVBQTBFO0VBQzFFLHdCQUFzQjtFQUN0QixZQUFXO0VBQ1gsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osZ0JBQWUsRUFlbEI7O0FBNUJMO0lBZVksZUFBYyxFQVdqQjs7QUExQlQ7TUFpQlksZUFBYztNQUNkLFlBQVcsRUFNZDs7QUF4QlQ7UUFvQmdCLGFBQVk7UUFDaEIsYUFBWTtRQUNaLDBCQUEyQixFQUMxQjs7QUFPYjtFQUNJLHVCQUFzQjtFQUN0QixpQkFBZ0IsRUFZbkI7O0FBZEQ7SUFJUSxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFNBQVE7SUFDUixlQUFjO0lBQ2Qsd0JBQXVCO0lBQ3ZCLGdCQUFlLEVBQ2xCOztBQVZMO0lBWVEsa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLWNvbXVuZS9wYWdlcy9saXN0LWZhcm1hY2llL2xpc3QtZmFybWFjaWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDoyJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbn1cbmlvbi1zZWFyY2hiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDU4cHg7XG4gICAgei1pbmRleDogMztcbn1cbi5jb2x1bW4ge1xuICAgIGZsb2F0OmxlZnQ7XG59XG4uYy10ZXh0e1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5jLWljb24ge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xufVxuLmMtYnRuIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206MyU7XG59XG4ucm93e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5yb3c6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6dGFibGU7XG4gICAgY2xlYXI6Ym90aDtcbn1cbi5pbnRlcmFjdGlvbiB7XG4gICAgY29sb3I6ICMxMWIzZWY7XG59XG4ud3JhcHBlciB7XG5cbiAgICAuc2Nyb2xsaW5nLXdyYXBwZXItZmxleGJveCB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1tcy1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgLW8tYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgLnRhZ3tcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgICAgICAudGFnLXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICAjMTFiM2VmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxufVxuLmNhcmQtdHVybml7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjMTFiM2VmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAubWVzc2FnZXtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/module-comune/pages/list-farmacie/list-farmacie.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-farmacie/list-farmacie.page.ts ***!
  \*************************************************************************/
/*! exports provided: ListFarmaciePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFarmaciePage", function() { return ListFarmaciePage; });
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









var ListFarmaciePage = /** @class */ (function () {
    function ListFarmaciePage(modalController, config, navCtrl, dbService, alertCtrl, router, route, alert, popoverController, events, translate, geoSrv, callNumber, utils) {
        var _this_1 = this;
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
        this.turno = true;
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
    ListFarmaciePage.prototype.ngOnInit = function () {
        var _this_1 = this;
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
            _this_1.distanceLabel = _this_1.translate.instant('distance_label');
        });
        this.config.getStringContacts(this.translate, this.language).then(function (strings) {
            _this_1.stringsContact = strings;
        });
        element.addEventListener('contactClick', function (contact) { return __awaiter(_this_1, void 0, void 0, function () {
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
    ListFarmaciePage.prototype.ionViewDidEnter = function () {
        var _this_1 = this;
        if (this.category) {
            var query = {
                'selector': {
                    'element-type': 'poi-item', 'classification.it': "Farmacia"
                }
            };
            this.dbService.getObjectByQuery(query).then(function (data) {
                _this_1.fullPois = data.docs.map(function (x) { return _this_1.convertPois(x); });
                _this_1.addDistance();
                _this_1.addFarmacieTurno();
                _this_1.subCategories(_this_1.fullPois);
                _this_1.buildShowPois();
                _this_1.tags = _this_1.buildFilter();
                _this_1.orderArray('near', _this_1);
                _this_1.isLoading = false;
            });
            // .then(x => {
            //   query = { 'selector': { 'element-type': 'restaurant-item' } };
            //   this.dbService.getObjectByQuery(query).then((data) => {
            //     this.fullPois = this.fullPois.concat(data.docs.map(x => this.convertPois(x)));
            //     this.subCategories(this.fullPois);
            //     this.buildShowPois();
            //     this.isLoading = false;
            //   });
            // });
        }
    };
    ListFarmaciePage.prototype.closeTurno = function () {
        this.turno = false;
    };
    ListFarmaciePage.prototype.addFarmacieTurno = function () {
        if (this.fullPois.length > 0)
            this.farmacieTurno = this.fullPois[0].description;
    };
    ListFarmaciePage.prototype.addDistance = function () {
        var _this_1 = this;
        this.fullPois.forEach(function (element) {
            element['distance'] = _this_1.geoSrv.getDistanceKM({ lat: _this_1.mypos.lat, lon: _this_1.mypos.long }, { lat: element.location[0], lon: element.location[1] });
        });
    };
    ListFarmaciePage.prototype.subCategories = function (array) {
        var _this_1 = this;
        array.forEach(function (element) {
            if (!_this_1.fullCategories.includes(element.category)) {
                _this_1.fullCategories.push(element.category);
            }
            _this_1.categories = _this_1.fullCategories;
        });
    };
    ListFarmaciePage.prototype.buildShowPois = function (filters) {
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
    ListFarmaciePage.prototype.convertPois = function (x) {
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
            if (x.classification) {
                poiElement.classification = x.classification[this.language];
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
    ListFarmaciePage.prototype.toggleSearch = function () {
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
    ListFarmaciePage.prototype.oneElement = function (category) {
        return (this.showPois[category].length > 0);
    };
    ListFarmaciePage.prototype.searchChanged = function (input) {
        var _this_1 = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            var value = input.detail.target.value;
            var _this = _this_1;
            _this.categories.forEach(function (c) {
                _this_1.showPois[c] = _this_1.fullPois.filter(function (el) {
                    return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
                });
            });
        }, this.doneTypingInterval);
    };
    ListFarmaciePage.prototype.buildFilter = function () {
        var array = this.fullPois.map(function (item) { return item.classification; });
        var newArray = array.filter(function (value, index, self) {
            return self.indexOf(value) === index;
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
    ListFarmaciePage.prototype.removeTag = function (tag) {
        this.tags = this.tags.filter(function (item) { return item.value != tag.value; });
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
    ListFarmaciePage.prototype.buildAlert = function (type) {
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
    ListFarmaciePage.prototype.orderArray = function (condition, _this) {
        _this.isLoading = true;
        if (condition.indexOf('near') > -1) {
            _this.categories.forEach(function (c) {
                _this.showPois[c] = _this.showPois[c].sort(function (a, b) {
                    var dist1 = 0;
                    var dist2 = 0;
                    if (a.distance) {
                        dist1 = a.distance;
                    }
                    if (b.distance) {
                        dist2 = b.distance;
                    }
                    return dist1 - dist2;
                });
            });
        }
        _this.isLoading = false;
    };
    ListFarmaciePage.prototype.getDistance = function (poi) {
        return this.distanceLabel + (poi.distance / 1000).toFixed(2) + " Km";
    };
    ListFarmaciePage.prototype.showPopover = function () {
        this.buildAlert('cat');
    };
    ListFarmaciePage.prototype.changeCategory = function (cat, _this) {
        _this.categories = [];
        if (cat && cat.indexOf('Tutto') > -1) {
            _this.categories = _this.fullCategories;
        }
        else {
            _this.categories.push(cat);
        }
    };
    ListFarmaciePage.prototype.buildMapPoints = function () {
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
    ListFarmaciePage.prototype.goToMap = function () {
        this.router.navigate(['/map'], { queryParams: { data: JSON.stringify(this.buildMapPoints()) } });
        // console.log('CLICKED MAP');
    };
    ListFarmaciePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-farmacie',
            template: __webpack_require__(/*! ./list-farmacie.page.html */ "./src/app/module-comune/pages/list-farmacie/list-farmacie.page.html"),
            styles: [__webpack_require__(/*! ./list-farmacie.page.scss */ "./src/app/module-comune/pages/list-farmacie/list-farmacie.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
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
    ], ListFarmaciePage);
    return ListFarmaciePage;
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
//# sourceMappingURL=pages-list-farmacie-list-farmacie-module.js.map