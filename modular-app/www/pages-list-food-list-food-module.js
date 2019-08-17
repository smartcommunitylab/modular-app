(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-food-list-food-module"],{

/***/ "./src/app/module-comune/pages/list-food/list-food.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/list-food/list-food.module.ts ***!
  \*******************************************************************/
/*! exports provided: HttpLoaderFactory, ListFoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFoodPageModule", function() { return ListFoodPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_food_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-food.page */ "./src/app/module-comune/pages/list-food/list-food.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _filter_page_food_filter_page_food_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-page-food/filter-page-food.page */ "./src/app/module-comune/pages/list-food/filter-page-food/filter-page-food.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _list_food_page__WEBPACK_IMPORTED_MODULE_5__["ListFoodPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var ListFoodPageModule = /** @class */ (function () {
    function ListFoodPageModule() {
    }
    ListFoodPageModule = __decorate([
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
            entryComponents: [_filter_page_food_filter_page_food_page__WEBPACK_IMPORTED_MODULE_9__["FilterPageFoodPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_list_food_page__WEBPACK_IMPORTED_MODULE_5__["ListFoodPage"], _filter_page_food_filter_page_food_page__WEBPACK_IMPORTED_MODULE_9__["FilterPageFoodPage"]]
        })
    ], ListFoodPageModule);
    return ListFoodPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/list-food/list-food.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/list-food/list-food.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-searchbar class=\"search-food\" style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\"\n    (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"interaction\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"filterClicked()\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"toggleSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{'Ristoranti' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<!-- \n<ion-grid style=\"height: 100%\" *ngIf=\"isLoading\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%\">\n    <ion-spinner name=\"circles\"></ion-spinner>\n  </ion-row>\n</ion-grid> -->\n\n<ion-content>\n\n  <!-- <ion-searchbar style=\"display: none\" showCancelButton animated (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\" (search)=\"toggleSearch()\"></ion-searchbar> -->\n\n  <!-- FLOATING BUTTON -->\n  <!-- <ion-fab *ngIf=\"!isLoading\" class=\"fixed\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button color=\"danger\">\n        <ion-icon name=\"arrow-dropup-circle\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\">\n          <ion-fab-button (click)=\"toggleSearch()\">\n            <ion-icon name=\"search\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button (click)=\"showPopover()\">\n              <ion-icon name=\"funnel\"></ion-icon>\n            </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab> -->\n  <!-- ---------------------------- -->\n  <!-- <div class=\"wrapper\">\n        <div class=\"scrolling-wrapper-flexbox loop\">\n          <ion-chip *ngFor=\"let c of categories\" (click)=\"selectInternalElement(c)\">\n            <ion-label class=\"interaction\">{{c}}</ion-label>\n          </ion-chip>\n        </div>\n      </div> -->\n  <div class=\"wrapper\" *ngIf=\"!firstAccess\">\n    <div class=\"scrolling-wrapper-flexbox loop\">\n      <div class=\"container\" *ngFor=\"let tag of tags\">\n      <div class=\"tag\"  *ngIf=\"tag.isChecked\">\n        <div class=\"tag-text\">\n          {{tag.value}}\n          <ion-icon name=\"close-circle\" (click)=\"removeTag(tag)\"></ion-icon>\n        </div>\n        \n      </div>\n    </div>\n    </div>\n  </div>\n\n  <ion-list no-lines id=\"poi-list\">\n    <div *ngFor=\"let c of categories\">\n      <!-- <ion-item-divider class=\"category row\" sticky> -->\n      <!-- <div class=\"column c-icon\" (click)=\"goToMap()\">\n            <ion-icon name=\"map\"></ion-icon>\n          </div> -->\n      <!-- <div class=\"column c-text\">\n            <ion-label>{{c}}</ion-label>\n          </div> -->\n      <!-- <div class=\"column c-btn\">\n            <ion-button *ngIf=\"!search\" class=\"popover-btn\" size=\"small\" color=\"success\" (click)=\"filterClicked()\">Ordina</ion-button>\n          </div> -->\n      <!-- </ion-item-divider> -->\n      <div class=\"content\">\n        <div *ngFor=\"let poi of showPois[c]; let i = index\">\n          <wc-details [img]=\"poi.image\" [stringsinput]=\"stringsContact\" [title]=\"poi.title\" [altImage]=\"altImage\"\n            [subtitle]=\"poi.subtitle\" [text]=\"poi.text\" [info]=\"poi.info\" [contacts]=\"poi.infos\"\n            heading-color=\"#707070\" second-color=\"#11b3ef\" expandable=false expanse=false ></wc-details>\n          <div class=\"spacing\" *ngIf=\"i == showPois.length - 1\"></div>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-comune/pages/list-food/list-food.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/list-food/list-food.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-left: 2%;\n  padding-right: 2%; }\n\nion-searchbar {\n  position: fixed;\n  z-index: 999; }\n\n.column {\n  float: left; }\n\n.c-text {\n  width: 60%;\n  margin-left: 10%; }\n\n.c-icon {\n  width: 10%;\n  height: 20px;\n  margin-bottom: 2%; }\n\n.c-btn {\n  width: 30%;\n  margin-bottom: 3%; }\n\n.row {\n  text-align: center;\n  vertical-align: middle;\n  height: 40px; }\n\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.interaction {\n  color: #11b3ef; }\n\n.wrapper .scrolling-wrapper-flexbox {\n  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  z-index: 999;\n  position: fixed; }\n\n.wrapper .scrolling-wrapper-flexbox .container {\n    flex: 0 0 auto; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag {\n      flex: 0 0 auto;\n      margin: 8px; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag .tag-text {\n        padding: 4px;\n        color: white;\n        background-color: #11b3ef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtZm9vZC9saXN0LWZvb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWU7RUFDZixrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUVmLGFBQVksRUFDZjs7QUFDRDtFQUNJLFlBQVUsRUFDYjs7QUFDRDtFQUNJLFdBQVU7RUFDVixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxXQUFVO0VBQ1YsYUFBWTtFQUNaLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLFdBQVU7RUFDVixrQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxlQUFhO0VBQ2IsWUFBVSxFQUNiOztBQUNEO0VBQ0ksZUFBYyxFQUNqQjs7QUFDRDtFQUtRLCtFQUE4RTtFQUM5RSw4RUFBNkU7RUFDN0UsMkVBQTBFO0VBQzFFLHdCQUFzQjtFQUN0QixZQUFXO0VBQ1gsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osZ0JBQWUsRUFlbEI7O0FBNUJMO0lBZVksZUFBYyxFQVdqQjs7QUExQlQ7TUFpQlksZUFBYztNQUNkLFlBQVcsRUFNZDs7QUF4QlQ7UUFvQmdCLGFBQVk7UUFDaEIsYUFBWTtRQUNaLDBCQUEyQixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1jb211bmUvcGFnZXMvbGlzdC1mb29kL2xpc3QtZm9vZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OjIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xufVxuaW9uLXNlYXJjaGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC8vIHRvcDogNThweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG4uY29sdW1uIHtcbiAgICBmbG9hdDpsZWZ0O1xufVxuLmMtdGV4dHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4uYy1pY29uIHtcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbi5jLWJ0biB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOjMlO1xufVxuLnJvd3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4ucm93OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OnRhYmxlO1xuICAgIGNsZWFyOmJvdGg7XG59XG4uaW50ZXJhY3Rpb24ge1xuICAgIGNvbG9yOiAjMTFiM2VmO1xufVxuLndyYXBwZXIge1xuXG4gICAgLnNjcm9sbGluZy13cmFwcGVyLWZsZXhib3gge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAtbXMtYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1vLWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIC50YWd7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICAgICAgLnRhZy10ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAgIzExYjNlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/module-comune/pages/list-food/list-food.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module-comune/pages/list-food/list-food.page.ts ***!
  \*****************************************************************/
/*! exports provided: ListFoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFoodPage", function() { return ListFoodPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _filter_page_food_filter_page_food_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-page-food/filter-page-food.page */ "./src/app/module-comune/pages/list-food/filter-page-food/filter-page-food.page.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-comune/services/config.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/module-comune/services/utils.service.ts");
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










var ListFoodPage = /** @class */ (function () {
    function ListFoodPage(modalController, config, navCtrl, dbService, alertCtrl, router, route, alert, popoverController, events, translate, geoSrv, callNumber, utils) {
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
    ListFoodPage.prototype.ngOnInit = function () {
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
    ListFoodPage.prototype.ionViewDidEnter = function () {
        var _this_1 = this;
        if (this.category) {
            var query_1 = { 'selector': { 'elementType': 'restaurant-item' } };
            this.dbService.synch().then(function () {
                _this_1.dbService.getObjectByQuery(query_1).then(function (data) {
                    _this_1.fullPois = data.docs.map(function (x) { return _this_1.convertPois(x); });
                    _this_1.subCategories(_this_1.fullPois);
                    _this_1.buildShowPois();
                    _this_1.tags = _this_1.buildFilter();
                    _this_1.orderArray('near', _this_1);
                    _this_1.isLoading = false;
                    _this_1.utils.hideLoading();
                }, function (err) {
                    _this_1.utils.hideLoading();
                })
                    , function (err) {
                        _this_1.utils.hideLoading();
                    };
            });
        }
    };
    ListFoodPage.prototype.subCategories = function (array) {
        var _this_1 = this;
        array.forEach(function (element) {
            if (!_this_1.fullCategories.includes(element.category)) {
                _this_1.fullCategories.push(element.category);
            }
            _this_1.categories = _this_1.fullCategories;
        });
    };
    ListFoodPage.prototype.buildShowPois = function (filters) {
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
    ListFoodPage.prototype.convertPois = function (x) {
        var tmp = '';
        var poiElement = {};
        if (x) {
            if (x.title) {
                if (x.title[this.language])
                    poiElement.title = x.title[this.language];
                else
                    poiElement.title = x.title["it"];
            }
            // if (x.subtitle) {
            //   if (x.subtitle[this.language])
            //   poiElement.description = x.subtitle[this.language];
            //   else poiElement.description = x.subtitle["it"];
            // }
            if (x.description) {
                if (x.description[this.language])
                    poiElement.description += '<br/>' + x.description[this.language];
                else
                    poiElement.description += '<br/>' + x.description["it"];
            }
            if (x.image) {
                poiElement.image = x.image;
            }
            if (x._id) {
                poiElement.id = x._id;
            }
            if (x.timetable) {
                if (x.timetable[this.language])
                    poiElement.date = x.timetable[this.language];
                else
                    poiElement.date = x.timetable["it"];
            }
            if (x.closing) {
                if (x.closing[this.language]) {
                    if (x.closing[this.language])
                        poiElement.info = '<b>Chiusura: ' + x.closing[this.language] + '</b>';
                    else
                        poiElement.info = '<b>Chiusura: ' + x.closing["it"] + '</b>';
                }
            }
            if (x.address) {
                if (x.address[this.language])
                    poiElement.address = x.address[this.language];
                else
                    poiElement.address = x.address["it"];
            }
            if (x.description) {
                if (x.description[this.language])
                    poiElement.text = x.description[this.language];
                else
                    poiElement.text = x.description["it"];
            }
            if (x.category) {
                poiElement.category = x.category.charAt(0).toUpperCase() + x.category.slice(1);
            }
            if (x.classification) {
                if (x.classification[this.language])
                    poiElement.subtitle = x.classification[this.language];
                else
                    poiElement.subtitle = x.classification["it"];
            }
            if (x.classification) {
                if (x.classification[this.language])
                    poiElement.classification = x.classification[this.language];
                else
                    poiElement.classification = x.classification["it"];
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
    ListFoodPage.prototype.toggleSearch = function () {
        var _this_1 = this;
        this.search = !this.search;
        var searchbar = document.querySelector('.search-food');
        if (searchbar.style.display === 'none') {
            searchbar.style.display = 'unset';
            searchbar.focus();
        }
        else {
            searchbar.style.display = 'none';
            this.categories.forEach(function (c) {
                _this_1.showPois[c] = _this_1.fullPois.filter(function (el) {
                    return (el.category == c);
                });
            });
        }
    };
    ListFoodPage.prototype.oneElement = function (category) {
        return (this.showPois[category].length > 0);
    };
    ListFoodPage.prototype.searchChanged = function (input) {
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
    ListFoodPage.prototype.filterClicked = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _filter_page_food_filter_page_food_page__WEBPACK_IMPORTED_MODULE_7__["FilterPageFoodPage"],
                            componentProps: {
                                'filters': this.tags
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (filters) {
                            _this_1.firstAccess = true;
                            var even = function (element) {
                                // checks whether an element is even
                                return element.isChecked;
                            };
                            if (filters.data) {
                                _this_1.tags = filters.data;
                            }
                            if (filters.data && filters.data.some(even)) {
                                _this_1.firstAccess = false;
                                _this_1.buildShowPois(_this_1.tags);
                            }
                            else {
                                _this_1.buildShowPois();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListFoodPage.prototype.buildFilter = function () {
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
    ListFoodPage.prototype.removeTag = function (tag) {
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
    ListFoodPage.prototype.buildAlert = function (type) {
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
    ListFoodPage.prototype.orderArray = function (condition, _this) {
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
    ListFoodPage.prototype.showPopover = function () {
        this.buildAlert('cat');
    };
    ListFoodPage.prototype.changeCategory = function (cat, _this) {
        _this.categories = [];
        if (cat && cat.indexOf('Tutto') > -1) {
            _this.categories = _this.fullCategories;
        }
        else {
            _this.categories.push(cat);
        }
    };
    ListFoodPage.prototype.buildMapPoints = function () {
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
    ListFoodPage.prototype.goToMap = function () {
        this.router.navigate(['/map'], { queryParams: { data: JSON.stringify(this.buildMapPoints()) } });
        // console.log('CLICKED MAP');
    };
    ListFoodPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-food',
            template: __webpack_require__(/*! ./list-food.page.html */ "./src/app/module-comune/pages/list-food/list-food.page.html"),
            styles: [__webpack_require__(/*! ./list-food.page.scss */ "./src/app/module-comune/pages/list-food/list-food.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"],
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
            _services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]])
    ], ListFoodPage);
    return ListFoodPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-food-list-food-module.js.map