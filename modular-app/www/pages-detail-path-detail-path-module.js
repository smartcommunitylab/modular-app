(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-path-detail-path-module"],{

/***/ "./src/app/module-comune/pages/detail-path/detail-path.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-path/detail-path.module.ts ***!
  \***********************************************************************/
/*! exports provided: HttpLoaderFactory, DetailPathPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPathPageModule", function() { return DetailPathPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_path_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-path.page */ "./src/app/module-comune/pages/detail-path/detail-path.page.ts");
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
        component: _detail_path_page__WEBPACK_IMPORTED_MODULE_5__["DetailPathPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var DetailPathPageModule = /** @class */ (function () {
    function DetailPathPageModule() {
    }
    DetailPathPageModule = __decorate([
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

module.exports = "\n\n   <ion-content padding id=\"path\">\n      <div shape=\"round\" class=\"back-button\" (click)=\"goBack()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n        </div>\n        <div shape=\"round\" class=\"map-button\" (click)=\"goMap()\">\n          <ion-icon slot=\"icon-only\" name=\"map\"></ion-icon>\n        </div>\n        <div shape=\"round\" class=\"share-button\" (click)=\"share()\">\n          <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n        </div>\n     <div *ngIf=\"!isLoading\" >\n      <!-- <wc-details *ngIf=\"(paths) && (tabActived == 'info')\" [title]=\"paths.title\" [subtitle]=\"paths.subtitle\" [text]=\"paths.description\" [info]=\"paths.info\" [img]=\"paths.image\"></wc-details> -->\n      <!-- <wc-details *ngIf=\"(paths) \" [title]=\"paths.title\" [subtitle]=\"paths.subtitle\" [text]=\"paths.description\" [info]=\"paths.info\" [img]=\"paths.image\"></wc-details> -->\n      <wc-details  *ngIf=\"paths\" [img]=\"paths.image\"   [title]=\"paths.title\" [altImage]=\"altImage\"\n      [subtitle]=\"paths.subtitle\" [text]=\"paths.description\"  \n      [expandable]=false [expanse]=true heading-color=\"#707070\"\n      second-color=\"#11b3ef\"> </wc-details>\n      <div id=\"poi-list\">\n          <!-- <div *ngIf=\"tabActived == 'place'\"> -->\n              <div >\n                  <ion-searchbar *ngIf=\"search\" showCancelButton animated (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n            <!-- ------------------------------- -->\n            <div class=\"poi-list\">{{'poi_list'|translate}}</div>\n            <div class=\"poi-container\" *ngFor=\"let poi of showPois; let i = index\">    \n              <div class=\"index-poi\">{{i+1}}</div> \n            <!-- <div *ngFor=\"let poi of showPois\"> -->\n                <wc-details [id]=\"poi.id\" [img]=\"poi.image\" [stringsinput]=\"stringsContact\" [title]=\"poi.title \" [altImage]=\"altImage\"\n                [subtitle]=\"poi.subtitle \" [text]=\"poi.description \" [info]=\"poi.info\" [contacts]=\"poi.infos\"\n                heading-color=\"#707070\" second-color=\"#11b3ef\" expandable=true expanse=false></wc-details>\n                <!-- <wc-path-list-el type=\"POI\" [id]=\"poi._id\" [img]=\"poi.image\" [title]=\"poi.title[language]\" [text]=\"poi.subtitle[language]\" main-color=\"red\"></wc-path-list-el> -->\n            </div>\n        </div>\n      </div>\n    </div>\n      <!-- <div ion-fixed *ngIf=\"tabActived == 'map'\">\n        <wc-map id=\"wc-map\" [points]=\"mapPoints\" main-marker-icon=\"http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png\" poi-marker-icon=\"https://cdn4.iconfinder.com/data/icons/ios7-active-tab/512/map_marker-512.png\"></wc-map>\n        <wc-modal title=\"DEMO\" text=\"Testo di prova\" btn-text=\"Dettagli\" shown=\"false\" data=\"ciao\"></wc-modal>\n      </div> -->\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/module-comune/pages/detail-path/detail-path.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-path/detail-path.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-button {\n  position: fixed;\n  color: #11b3ef;\n  --background: white;\n  border-radius: 24px;\n  border: 1px solid #11b3ef;\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  background-color: white;\n  z-index: 999;\n  left: 16px;\n  top: 16px; }\n\n.map-button {\n  position: fixed;\n  color: #11b3ef;\n  --background: white;\n  border-radius: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 1px solid #11b3ef;\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  background-color: white;\n  top: 16px;\n  z-index: 999; }\n\n.share-button {\n  position: fixed;\n  color: #11b3ef;\n  --background: white;\n  border-radius: 24px;\n  right: 16px;\n  border: 1px solid #11b3ef;\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  background-color: white;\n  top: 16px;\n  z-index: 999; }\n\n.poi-list {\n  width: 100%;\n  font-weight: bold;\n  background-color: #e3e3e3;\n  color: #707070;\n  font-size: 22px;\n  text-align: center;\n  margin: 25px 0px; }\n\n.poi-container {\n  position: relative; }\n\n.poi-container .index-poi {\n    position: absolute;\n    left: 10px;\n    top: -15px;\n    background-color: #707070;\n    color: white;\n    border-radius: 15px;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2RldGFpbC1wYXRoL2RldGFpbC1wYXRoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG9CQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLGFBQVk7RUFFWixXQUFVO0VBQ2QsVUFBUyxFQUNSOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0VBQ2Qsb0JBQWE7RUFDYixvQkFBbUI7RUFDbkIsVUFBUztFQUNULDRCQUEyQjtFQUMzQiwwQkFBeUI7RUFDekIsWUFBVztFQUNYLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixVQUFTO0VBRVQsYUFBWSxFQUNmOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0VBQ2Qsb0JBQWE7RUFDYixvQkFBbUI7RUFDbkIsWUFBVztFQUNYLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLFVBQVM7RUFFVCxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksbUJBQWtCLEVBZXJCOztBQWhCRDtJQUlRLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1YsV0FBVTtJQUNWLDBCQUF5QjtJQUN6QixhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLFlBQVc7SUFDWCxhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1jb211bmUvcGFnZXMvZGV0YWlsLXBhdGgvZGV0YWlsLXBhdGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgY29sb3I6ICMxMWIzZWY7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMWIzZWY7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBsZWZ0OiAxNnB4O1xudG9wOiAxNnB4O1xufVxuXG4ubWFwLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGNvbG9yOiAjMTFiM2VmO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMWIzZWY7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMThweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG4uc2hhcmUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgY29sb3I6ICMxMWIzZWY7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMWIzZWY7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMThweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG4ucG9pLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI1cHggMHB4O1xufVxuLnBvaS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5pbmRleC1wb2kge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHRvcDogLTE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbn0iXX0= */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/module-comune/services/utils.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-comune/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
    function DetailPathPage(router, route, dbService, config, alert, geoSrv, translate, utils, location, callNumber) {
        this.router = router;
        this.route = route;
        this.dbService = dbService;
        this.config = config;
        this.alert = alert;
        this.geoSrv = geoSrv;
        this.translate = translate;
        this.utils = utils;
        this.location = location;
        this.callNumber = callNumber;
        this.showPois = [];
        this.fullPois = [];
        this.jsonTabs = JSON.stringify([{ target: 'info', icon: 'info' }, { target: 'place', icon: 'place' }, { target: 'map', icon: 'map' }]);
        this.tabActived = 'info';
        this.isLoading = false;
        this.mapPoints = [];
        this.search = false;
        this.myPos = {};
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
    }
    DetailPathPage.prototype.getPois = function (path) {
        var _this_1 = this;
        this.dbService.synch().then(function () {
            path.steps.forEach(function (element) {
                var query = {
                    selector: {
                        'category': 'cultura',
                        'localId': element
                    }
                };
                _this_1.dbService.getObjectByQuery(query).then(function (data) {
                    if (data.docs[0]) {
                        _this_1.fullPois.push(_this_1.convertPois(data.docs[0]));
                    }
                }).then(function () {
                    _this_1.showPois = _this_1.fullPois;
                    _this_1.isLoading = false;
                    _this_1.utils.hideLoading();
                });
            });
        });
    };
    DetailPathPage.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.utils.presentLoading();
        if (window[this.config.getAppModuleName()]['geolocation'])
            this.myPos = {
                lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
                long: window[this.config.getAppModuleName()]['geolocation']['long']
            };
        else {
            this.myPos = this.config.getDefaultPosition();
        }
        this.paramsSubscription = this.route.queryParams
            .subscribe(function (params) {
            if (params) {
                var id_1 = params.id.split(';')[0];
                _this_1.isLoading = true;
                _this_1.dbService.synch().then(function () {
                    _this_1.dbService.getObjectById(id_1).then(function (data) {
                        _this_1.paths = data.docs[0];
                        _this_1.buildLangPaths();
                        _this_1.getPois(_this_1.paths);
                    });
                }, function (err) {
                    _this_1.utils.hideLoading();
                });
            }
        }, function (err) {
            _this_1.utils.hideLoading();
        });
    };
    DetailPathPage.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    DetailPathPage.prototype.ionViewDidEnter = function () {
        var _this_1 = this;
        var element = document.getElementById('path');
        // // const el = document.getElementById('tabs');
        // element.addEventListener('tabSelected', path => {
        //   this.tabActived = (<any>path).detail;
        //   if (this.tabActived === 'map') {
        //     this.buildMapPoints();
        //   }
        // });
        // window.addEventListener('pathSelected', target => {
        //   this.goToPoi((<any>target).detail);
        // });
        window.addEventListener('actionSelected', function (target) {
            _this_1.goToPoi(target.detail);
        });
        this.translate.get('alt_image_string').subscribe(function (value) {
            _this_1.altImage = value;
        });
        this.config.getStringContacts(this.translate, this.language).then(function (strings) {
            _this_1.stringsContact = strings;
        });
        if (element) {
            element.addEventListener('expandeClick', function (returnId) { return __awaiter(_this_1, void 0, void 0, function () {
                var id;
                return __generator(this, function (_a) {
                    id = returnId.detail;
                    this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: 'POI' } });
                    this.paramsSubscription.unsubscribe();
                    return [2 /*return*/];
                });
            }); });
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
        }
    };
    DetailPathPage.prototype.ionViewWillLeave = function () {
        var element = document.getElementById('path');
        if (element) {
            //   element.removeEventListener('pathSelected',function(e) {
            //     console.log(e);
            // }, false);
            element.removeEventListener('actionSelected', function (e) {
                console.log(e);
            }, false);
            element.removeEventListener('expandeClick', function (e) {
                console.log(e);
            }, false);
            element.removeEventListener('contactClick', function (e) {
                console.log(e);
            }, false);
        }
    };
    DetailPathPage.prototype.goMap = function () {
        localStorage.setItem('path', JSON.stringify(this.fullPois));
        this.paramsSubscription.unsubscribe();
        this.router.navigate(['/map-path'], { queryParams: { id: this.paths.id } });
    };
    DetailPathPage.prototype.goBack = function () {
        this.location.back();
    };
    DetailPathPage.prototype.share = function () {
        this.utils.openShare(JSON.stringify(this.paths));
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
    // buildMapPoints() {
    //   this.fullPois.forEach(element => {
    //     this.mapPoints.push({
    //       id: element._id,
    //       lat: element.location[0],
    //       lon: element.location[1],
    //       name: element.title[this.language],
    //       address: element.address[this.language],
    //       distance: this.geoSrv.getDistanceKM(this.myPos, {lat: element.location[0], lon: element.location[1]})
    //     });
    //   });
    //   this.mapPoints.push({
    //     lat: this.myPos.lat,
    //     lon: this.myPos.lon,
    //     name: 'myPos',
    //     distance: 0
    //   });
    //   this.mapPoints = JSON.stringify(this.mapPoints);
    // }
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
    DetailPathPage.prototype.convertPois = function (x) {
        var tmp = '';
        var poiElement = {};
        if (x) {
            if (x.title) {
                poiElement.title = x.title[this.language];
            }
            if (x.classification) {
                poiElement.classification = x.classification[this.language];
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
            if (x.id) {
                poiElement.id = x.id;
            }
            if (x._id) {
                poiElement.id = x._id;
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
            poiElement.infos = JSON.stringify(poiElement);
        }
        return poiElement;
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
            _services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_4__["GeoService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"]])
    ], DetailPathPage);
    return DetailPathPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detail-path-detail-path-module.js.map