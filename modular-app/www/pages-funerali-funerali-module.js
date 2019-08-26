(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-funerali-funerali-module"],{

/***/ "./src/app/module-funerali/pages/funerali/funerali.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module-funerali/pages/funerali/funerali.module.ts ***!
  \*******************************************************************/
/*! exports provided: HttpLoaderFactory, FuneraliPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuneraliPageModule", function() { return FuneraliPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _funerali_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./funerali.page */ "./src/app/module-funerali/pages/funerali/funerali.page.ts");
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-in-viewport */ "./node_modules/ng-in-viewport/fesm5/ng-in-viewport.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _funerali_page__WEBPACK_IMPORTED_MODULE_5__["FuneraliPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/funerali/i18n/', '.json');
}
var FuneraliPageModule = /** @class */ (function () {
    function FuneraliPageModule() {
    }
    FuneraliPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_in_viewport__WEBPACK_IMPORTED_MODULE_6__["InViewportModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    } }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_funerali_page__WEBPACK_IMPORTED_MODULE_5__["FuneraliPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FuneraliPageModule);
    return FuneraliPageModule;
}());



/***/ }),

/***/ "./src/app/module-funerali/pages/funerali/funerali.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/module-funerali/pages/funerali/funerali.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n        <ion-searchbar class=\"search-funerali\" style=\"display: none\" showCancelButton=\"always\" animated (search)=\"toggleSearch()\"\n        (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n    <ion-toolbar>\n        <!-- <ion-searchbar (ionChange)=\"Ricerca()\" placeholder=\"cerca nominativo\" [(ngModel)]=\"name\" clearIcon=\"false\"> -->\n        <!-- </ion-searchbar> -->\n        <ion-title>\n                {{'title_funerali'|translate}}\n              </ion-title>\n        <ion-buttons class=\"interactive\" slot=\"start\">\n            <ion-back-button class=\"interaction\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"toggleSearch()\">\n                <ion-icon name=\"search\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <div class=\"wrapper\" *ngIf=\"!search\">\n        <div id=\"idDates\" class=\"scrolling-wrapper-flexbox loop\">\n            <ion-chip *ngFor=\"let c of dates\" id=\"{{c}}\" (click)=\"selectInternalElement(c)\"\n                [ngClass]=\"{'datesSelected': isSelected(c)}\">\n                <ion-label class=\"interaction\" [ngClass]=\"{'datesSelected': c==actualVisualized}\">{{c}}</ion-label>\n            </ion-chip>\n        </div>\n    </div>\n    <!-- <div id=\"top\"></div>\n    <ion-icon id=\"buttonTop\" (click)=\"GoOnTop()\" color=\"dark\" name=\"arrow-dropup\"></ion-icon> -->\n    <div id=\"funerali\">\n        <ion-list no-lines padding *ngIf=\"!emptyList\">\n            <div *ngFor=\"let c of dates\">\n                <ion-item class=\"label-type ion-text-center\" sticky *ngIf=\"oneElement(c)\">\n                    <div>{{c}}</div>\n                </ion-item>\n                <div class=\"content\" >\n                    <div *ngFor=\"let item of showFunerali[c]; let i = index\">\n                        <!-- <div *ngFor=\"let item of vetFunerali; let i = index;\"> -->\n                        <div class=\"{{item.dataFunerale}}\" inViewport [inViewportOptions]=\"{ threshold: [0] }\"\n                            (inViewportAction)=\"onIntersection($event)\">\n                            <dettaglio-morte (indicazioni)=\"IndicazioniFunerali(i)\" (condividi)=\"CondividiFunerali(i)\"\n                                [funerale]=\"sendParam(item)\" [string]=\"string\" isFunerale={{true}}></dettaglio-morte>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-list>\n        <div class=\"empty-list\" *ngIf=\"emptyList\">\n                {{'empty_list' | translate}}\n            </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-funerali/pages/funerali/funerali.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/module-funerali/pages/funerali/funerali.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#buttonGiorni {\n  position: absolute;\n  right: 0;\n  margin: 10px 10px;\n  z-index: 9999; }\n\n#barraGiorni {\n  text-align: center;\n  background-color: #f4f5f8;\n  overflow: hidden; }\n\nion-searchbar {\n  position: fixed;\n  z-index: 999; }\n\nion-icon {\n  width: 30px;\n  height: 30px; }\n\n#scroll {\n  margin-top: 30px;\n  margin-bottom: 0; }\n\nion-list {\n  padding-top: 40px; }\n\n#buttonTop {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  padding: 10px 10px 5px 10px;\n  z-index: 9999; }\n\n.wrapper .scrolling-wrapper-flexbox {\n  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  z-index: 999;\n  position: fixed; }\n\n.wrapper .scrolling-wrapper-flexbox .container {\n    flex: 0 0 auto; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag {\n      flex: 0 0 auto;\n      margin: 8px; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag .tag-text {\n        padding: 4px;\n        color: white;\n        background-color: #11b3ef; }\n\n.wrapper .scrolling-wrapper-flexbox ion-chip {\n    flex: 0 0 auto;\n    background-color: white; }\n\n.interaction {\n  color: #11b3ef !important; }\n\n.datesSelected {\n  color: white !important;\n  background-color: #11b3ef !important; }\n\n.label-type {\n  width: 100%;\n  font-weight: bold;\n  --background: #e3e3e3;\n  --color: #707070;\n  font-size: 22px;\n  margin-bottom: 8px; }\n\n.label-type div {\n    width: 100%; }\n\n.empty-list {\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtZnVuZXJhbGkvcGFnZXMvZnVuZXJhbGkvZnVuZXJhbGkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixrQkFBaUI7RUFDakIsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsaUJBQWdCLEVBRW5COztBQUNEO0VBQ0ksZ0JBQWU7RUFFZixhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUNmOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsU0FBUTtFQUNSLFVBQVM7RUFDVCxZQUFXO0VBQ1gsYUFBWTtFQUNaLDRCQUEyQjtFQUMzQixjQUFhLEVBQ2hCOztBQUVEO0VBSVEsK0VBQThFO0VBQzlFLDhFQUE2RTtFQUM3RSwyRUFBMEU7RUFDMUUsd0JBQXVCO0VBQ3ZCLFlBQVc7RUFDWCxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixnQkFBZSxFQXNCbEI7O0FBbENMO0lBZVksZUFBYyxFQWFqQjs7QUE1QlQ7TUFrQmdCLGVBQWM7TUFDZCxZQUFXLEVBT2Q7O0FBMUJiO1FBc0JvQixhQUFZO1FBQ1osYUFBWTtRQUNaLDBCQUF5QixFQUM1Qjs7QUF6QmpCO0lBK0JZLGVBQWM7SUFDZCx3QkFBdUIsRUFDMUI7O0FBSVQ7RUFDSSwwQkFBd0IsRUFDM0I7O0FBRUQ7RUFDSSx3QkFBdUI7RUFDdkIscUNBQW9DLEVBRXZDOztBQUNEO0VBQ0ksWUFBVztFQUNYLGtCQUFpQjtFQUNqQixzQkFBYTtFQUNiLGlCQUFRO0VBQ1IsZ0JBQWU7RUFDZixtQkFBa0IsRUFLckI7O0FBWEQ7SUFTUSxZQUFXLEVBQ2Q7O0FBRUw7RUFDRyxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLWZ1bmVyYWxpL3BhZ2VzL2Z1bmVyYWxpL2Z1bmVyYWxpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNidXR0b25HaW9ybmkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuXG4jYmFycmFHaW9ybmkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbn1cbmlvbi1zZWFyY2hiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyB0b3A6IDU4cHg7XG4gICAgei1pbmRleDogOTk5O1xufVxuaW9uLWljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuI3Njcm9sbCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaW9uLWxpc3R7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4jYnV0dG9uVG9wIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuLndyYXBwZXIge1xuICAgIC5zY3JvbGxpbmctd3JhcHBlci1mbGV4Ym94IHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgLW1zLWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAtby1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcblxuICAgICAgICAgICAgLnRhZyB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHg7XG5cbiAgICAgICAgICAgICAgICAudGFnLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExYjNlZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pbnRlcmFjdGlvbiB7XG4gICAgY29sb3I6ICMxMWIzZWYhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXNTZWxlY3RlZCB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExYjNlZiAhaW1wb3J0YW50O1xuXG59XG4ubGFiZWwtdHlwZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgLS1jb2xvcjogIzcwNzA3MDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4uZW1wdHktbGlzdHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgZm9udC1zaXplOiAyNHB4OyBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/module-funerali/pages/funerali/funerali.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module-funerali/pages/funerali/funerali.page.ts ***!
  \*****************************************************************/
/*! exports provided: FuneraliPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuneraliPage", function() { return FuneraliPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_dati_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dati-service.service */ "./src/app/module-funerali/services/dati-service.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/module-funerali/services/utils.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FuneraliPage = /** @class */ (function () {
    function FuneraliPage(social, datiService, utils, translate) {
        this.social = social;
        this.datiService = datiService;
        this.utils = utils;
        this.translate = translate;
        this.isRicercaOpen = false; //true se la barra di ricerca è aperta
        this.isGiorniOpen = false; //true se la barra dei giorni è aperta
        this.isSepoltura = false; //controlla se ci troviamo in schermata funerali o sepoltura
        this.linkMappa = "https://www.google.com/maps/search/?api=1&query="; //link a maps
        //todo stringhe
        this.string = "";
        this.vetFunerali = [];
        this.date = new Date(); //data odierna
        this.dates = [];
        this.showFunerali = [];
        this.fullDates = [];
        this.emptyList = false;
        this.doneTypingInterval = 500; //time in ms, 5 second for example
        var language = window[this.utils.getAppModuleName()]['language'];
        this.translate.use(language);
    }
    FuneraliPage.prototype.ngOnInit = function () {
        var _this = this;
        this.utils.presentLoading();
        this.CaricaDati().then(function () {
            _this.utils.hideLoading();
        }, function (err) {
            _this.utils.hideLoading();
        });
        this.translate.get('data_morte').subscribe(function (value) {
            _this.dataMorte = value;
            _this.dataFunerale = _this.translate.instant('data_funerale');
            _this.oraMorte = _this.translate.instant('ora_morte');
            _this.luogoFunerale = _this.translate.instant('luogo_funerale');
            _this.mappa = _this.translate.instant('mappa');
            _this.condividi = _this.translate.instant('condividi');
            _this.networkMessage = _this.translate.instant('network_message');
            _this.string = JSON.stringify({
                dataMorte: _this.dataMorte,
                dataFunerale: _this.dataFunerale,
                oraMorte: _this.oraMorte,
                luogoFunerale: _this.luogoFunerale,
                mappa: _this.mappa,
                condividi: _this.condividi
            });
        });
    };
    FuneraliPage.prototype.toggleSearch = function () {
        var _this = this;
        this.search = !this.search;
        var searchbar = document.querySelector('.search-funerali');
        if (searchbar.style.display === 'none') {
            searchbar.style.display = 'unset';
            searchbar.focus();
        }
        else {
            searchbar.style.display = 'none';
            this.dates.forEach(function (c) {
                _this.showFunerali[c] = _this.vetFunerali.filter(function (el) {
                    return (el.dataFunerale == c);
                });
            });
        }
    };
    FuneraliPage.prototype.subCategories = function (array) {
        var _this = this;
        var i = 0;
        array.forEach(function (element, index) {
            if (!_this.fullDates.includes(element.dataFunerale)) {
                _this.fullDates.push(element.dataFunerale);
                if ((moment__WEBPACK_IMPORTED_MODULE_4__(element.dataFunerale, 'DD/MM/YYYY').isSame(new Date(), "day")))
                    i = _this.fullDates.length - 1;
            }
        });
        this.dates = this.fullDates;
        if (this.dates.length > 0) {
            setTimeout(function () { return _this.selectInternalElement(_this.dates[i]); }, 500);
        }
    };
    FuneraliPage.prototype.oneElement = function (category) {
        if (this.showFunerali && this.showFunerali[category])
            return (this.showFunerali[category].length > 0);
    };
    FuneraliPage.prototype.searchChanged = function (input) {
        var _this = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            if (!input.detail) {
                _this.dates.forEach(function (c) {
                    _this.showFunerali[c] = _this.vetFunerali.filter(function (el) {
                        return (el.dataFunerale == c);
                    });
                });
                // emptyList = false;
            }
            else {
                var value_1 = input.detail.target.value;
                // const _this = this;
                _this.dates.forEach(function (c) {
                    _this.showFunerali[c] = _this.vetFunerali.filter(function (el) {
                        if (el.nome)
                            return (el.nome.toLowerCase().indexOf(value_1.toLowerCase()) > -1 && el.dataFunerale == c);
                        return false;
                    });
                });
            }
        }, this.doneTypingInterval);
    };
    FuneraliPage.prototype.buildShowPois = function (filters) {
        var _this = this;
        this.showFunerali = [];
        this.vetFunerali.forEach(function (p) {
            if (!_this.showFunerali[p.dataFunerale]) {
                _this.showFunerali[p.dataFunerale] = [];
            }
            if (filters ? filters.filter(function (item) {
                return (item.isChecked && p.cat.filter(function (cat) { return cat == item.value; }).length > 0);
                // if (p.cat)
                // return (item.isChecked && (p.cat.filter(cat => cat == item.value).length > 0 || p.parentObjectName == item.value))
                // else (item.isChecked &&   p.parentObjectName == item.value)
            }).length > 0 : true) {
                _this.showFunerali[p.dataFunerale].push(p);
            }
        });
        //orderArray
        // this.orderArray('asc', this);
    };
    // orderArray(condition: string, _this: any) {
    //   _this.categories.forEach(c => {
    //     if (condition.indexOf('asc') > -1) {
    //       _this.showPois[c] = _this.showPois[c].sort((a, b) => (a.fromTime > b.fromTime) ? 1 : -1);
    //     } else {
    //       _this.showPois[c] = _this.showPois[c].sort((a, b) => (a.fromTime < b.fromTime) ? 1 : -1);
    //     }
    //   });
    // }
    FuneraliPage.prototype.onIntersection = function (_a) {
        var target = _a.target, visible = _a.visible;
        if (visible && this.actualVisualized != target.className)
            this.actualVisualized = target.className;
        //scroll to posiition
        var element = document.getElementById(this.actualVisualized);
        if (element)
            element.scrollIntoView({ block: "center" });
        console.log(target + "" + visible);
    };
    FuneraliPage.prototype.isSelected = function (date) {
        return date == this.actualVisualized;
    };
    FuneraliPage.prototype.sendParam = function (item) {
        return JSON.stringify(item);
    };
    FuneraliPage.prototype.selectInternalElement = function (ref) {
        var elem = document.getElementsByClassName(ref);
        if (elem.length > 0) {
            var yOffset = elem[0].offsetTop;
            this.content.scrollToPoint(0, yOffset - 100, 0);
            var myElement = document.getElementById(ref);
            var topPos = myElement.offsetLeft;
            document.getElementById('idDates').scrollLeft = topPos - (window.innerWidth / 2);
        }
    };
    FuneraliPage.prototype.yyyymmdd = function (date) {
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();
        return [date.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('');
    };
    ;
    //restituisce la data formattata
    FuneraliPage.prototype.GetFormattedData = function () {
        return this.date.getDate() + "/" + this.date.getMonth() + "/" + this.date.getFullYear();
    };
    //vai al giorno successivo
    FuneraliPage.prototype.NextDay = function () {
        this.date.setDate(this.date.getDate() + 1);
        document.getElementById("data").innerHTML = this.GetFormattedData();
    };
    //vai al giorno precedente
    FuneraliPage.prototype.PreviusDay = function () {
        this.date.setDate(this.date.getDate() - 1);
        document.getElementById("data").innerHTML = this.GetFormattedData();
    };
    FuneraliPage.prototype.Ricerca = function () {
    };
    //condividi da mobile per i funerali
    FuneraliPage.prototype.CondividiFunerali = function (i) {
        var _this = this;
        this.social.canShareViaEmail().then(function () {
            _this.social.share(_this.vetFunerali[i].nome + " " + _this.vetFunerali[i].luogoFunerale + " " + _this.vetFunerali[i].dataFunerale + " " + _this.vetFunerali[i].luogoFunerale, null, null);
        }).catch(function () {
            alert("Il servizio di condivisione non è disponibile per questo dispositivo");
        });
    };
    // //condividi da mobile per sepolture
    // CondividSepolture(i) {
    //   this.social.canShareViaEmail().then(() => {
    //     this.social.share(this.vetDefunti[i].nominativo + " " + this.vetDefunti[i].paeseSepoltura, null, null);
    //   }).catch(() => {
    //     alert("Il servizio di condivisione non è disponibile per questo dispositivo");
    //   });
    // }
    //apre maps
    FuneraliPage.prototype.IndicazioniFunerali = function (i) {
        window.open(encodeURI(this.linkMappa + this.vetFunerali[i].luogoFunerale), '_system');
    };
    // //apre maps
    // IndicazioniSepolture(i) {
    //   window.open(encodeURI(this.linkMappa + this.vetDefunti[i].paeseSepoltura), '_system')
    // }
    //mostra il div contenente i funerali e nasconde le sepolture
    FuneraliPage.prototype.Funerali = function () {
        document.getElementById("sepolture").style.display = "none";
        document.getElementById("funerali").style.display = "inherit";
        document.getElementById("titleSepoltura").style.fontWeight = "300";
        document.getElementById("titleFunerali").style.fontWeight = "600";
        this.isSepoltura = false;
        this.CloseRicerca();
    };
    //mostra il div contenente le sepolture e nasconde i funerali
    FuneraliPage.prototype.Sepolture = function () {
        document.getElementById("sepolture").style.display = "inherit";
        document.getElementById("funerali").style.display = "none";
        document.getElementById("titleSepoltura").style.fontWeight = "600";
        document.getElementById("titleFunerali").style.fontWeight = "300";
        this.isSepoltura = true;
        this.CloseRicerca();
    };
    //gestisce l'apertura e la chiusura della ricerca
    FuneraliPage.prototype.OpenCloseRicerca = function () {
        if (!this.isRicercaOpen) {
            document.getElementById("ricercaNome").style.display = "inherit";
            if (this.isSepoltura) {
                document.getElementById("buttonGiorni").style.visibility = "hidden"; //se è sepoltura nasconde la barra giorni
            }
            else {
                document.getElementById("buttonGiorni").style.visibility = "visible";
            }
            document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="close"></ion-icon>'; //imposta come svg in alto a destra una croce
            this.isRicercaOpen = true;
        }
        else {
            this.CloseRicerca();
        }
    };
    //test per l'infinity scroll
    FuneraliPage.prototype.CaricaDati = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var startDate = new Date();
            var pastDate = startDate.getDate() - 7;
            startDate.setDate(pastDate);
            _this.datiService.getDati(_this.yyyymmdd(startDate)).then(function (res) {
                if (res.length > 0) {
                    _this.emptyList = false;
                    console.log(res);
                    _this.vetFunerali = _this.convertDates(res);
                    _this.vetFunerali = _this.cleanNames(_this.vetFunerali);
                    _this.subCategories(_this.vetFunerali);
                    _this.buildShowPois();
                }
                else {
                    _this.emptyList = true;
                }
                resolve();
            }, function (err) {
                reject();
                _this.emptyList = true;
                _this.utils.showErrorConnectionMessage(_this.networkMessage);
            });
        });
    };
    FuneraliPage.prototype.cleanNames = function (vetFunerali) {
        return vetFunerali.map(function (el) {
            if (el.nome)
                el.nome = el.nome.replace(/,/g, ' ');
            return el;
        });
    };
    FuneraliPage.prototype.convertDates = function (res) {
        return res.map(function (el) {
            // var elem = {};
            if (el.dataFunerale)
                el.dataFunerale = (moment__WEBPACK_IMPORTED_MODULE_4__(el.dataFunerale, 'YYYY-MM-DD').format('DD/MM/YYYY'));
            if (el.dataMorte)
                el.dataMorte = (moment__WEBPACK_IMPORTED_MODULE_4__(el.dataMorte, 'YYYY-MM-DD').format('DD/MM/YYYY'));
            if (el.oraFunerale)
                el.oraFunerale = (moment__WEBPACK_IMPORTED_MODULE_4__(el.oraFunerale, 'HH:mm:ss').format('HH:mm'));
            return el;
        });
    };
    //chiude la ricerca
    FuneraliPage.prototype.CloseRicerca = function () {
        document.getElementById("ricercaNome").style.display = "none";
        document.getElementById("barraGiorni").style.height = "0px";
        document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="search"></ion-icon>';
        this.isRicercaOpen = false;
        this.isGiorniOpen = false;
    };
    //apre la barra dei giorni
    FuneraliPage.prototype.OpenBarraGiorni = function () {
        if (this.isGiorniOpen) {
            document.getElementById("barraGiorni").style.height = "0px";
        }
        else {
            document.getElementById("barraGiorni").style.height = "auto";
        }
        this.isGiorniOpen = !this.isGiorniOpen;
    };
    //raggiunge la cima della pagina
    FuneraliPage.prototype.GoOnTop = function () {
        document.getElementById("top").scrollIntoView();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], FuneraliPage.prototype, "infiniteScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], FuneraliPage.prototype, "content", void 0);
    FuneraliPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'funerali-page',
            template: __webpack_require__(/*! ./funerali.page.html */ "./src/app/module-funerali/pages/funerali/funerali.page.html"),
            styles: [__webpack_require__(/*! ./funerali.page.scss */ "./src/app/module-funerali/pages/funerali/funerali.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__["SocialSharing"],
            _services_dati_service_service__WEBPACK_IMPORTED_MODULE_3__["DatiService"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], FuneraliPage);
    return FuneraliPage;
}());



/***/ }),

/***/ "./src/app/module-funerali/services/dati-service.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/module-funerali/services/dati-service.service.ts ***!
  \******************************************************************/
/*! exports provided: DatiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatiService", function() { return DatiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatiService = /** @class */ (function () {
    function DatiService(http) {
        this.http = http;
        this.urlBase = 'https://tn.smartcommunitylab.it/trentorienta/api/funerali/';
    }
    DatiService.prototype.getDati = function (data) {
        var _this = this;
        var parametri = {};
        return new Promise(function (resolve, reject) {
            return _this.http.get(_this.urlBase + "from?date=" + data, parametri).toPromise().then(function (response) {
                // return this.http.get('./assets/funerali/data/localFunerali.json').toPromise().then(response => {
                if (response['_body']) {
                    resolve(JSON.parse(response['_body']));
                }
                reject();
            }, function (err) {
                reject();
            });
        });
    };
    DatiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DatiService);
    return DatiService;
}());



/***/ }),

/***/ "./src/app/module-funerali/services/utils.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/module-funerali/services/utils.service.ts ***!
  \***********************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
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


var UtilsService = /** @class */ (function () {
    function UtilsService(loadingController, toastController) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.appModuleName = "app-module";
    }
    UtilsService.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            // spinner: null,
                            // message: `<img src="assets/animation/loading.gif" />`,
                            // cssClass: 'custom-loading',
                            duration: 10000
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
    UtilsService.prototype.getAppModuleName = function () {
        return this.appModuleName;
    };
    UtilsService.prototype.showErrorConnectionMessage = function (message) {
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
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], UtilsService);
    return UtilsService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-funerali-funerali-module.js.map