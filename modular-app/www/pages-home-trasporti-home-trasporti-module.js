(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-trasporti-home-trasporti-module"],{

/***/ "./src/app/module-trasporti/class/MainPage.ts":
/*!****************************************************!*\
  !*** ./src/app/module-trasporti/class/MainPage.ts ***!
  \****************************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
var ROUTER_KEY = "router-key";
var MainPage = /** @class */ (function () {
    function MainPage(translate) {
        this.translate = translate;
        this.language = 'it';
        this.initTranslate();
    }
    MainPage.prototype.ngOnInit = function () {
        this.language = this.translate.currentLang;
    };
    MainPage.prototype.ionViewDidEnter = function () {
        this.language = this.translate.currentLang;
    };
    MainPage.prototype.initTranslate = function () {
        // Set the default language for translation strings, and the current language.
        if (window["app-module-language"])
            return this.translate.setDefaultLang(window["app-module-language"]);
        this.translate.setDefaultLang(this.language);
    };
    return MainPage;
}());



/***/ }),

/***/ "./src/app/module-trasporti/pages/home-trasporti/home-trasporti.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/home-trasporti/home-trasporti.module.ts ***!
  \********************************************************************************/
/*! exports provided: HttpLoaderFactory, HomeTrasportiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTrasportiPageModule", function() { return HomeTrasportiPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_trasporti_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-trasporti.page */ "./src/app/module-trasporti/pages/home-trasporti/home-trasporti.page.ts");
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
        component: _home_trasporti_page__WEBPACK_IMPORTED_MODULE_5__["HomeTrasportiPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, "./assets/trasporti/i18n/", ".json");
}
var HomeTrasportiPageModule = /** @class */ (function () {
    function HomeTrasportiPageModule() {
    }
    HomeTrasportiPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }, isolate: true
                }), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_trasporti_page__WEBPACK_IMPORTED_MODULE_5__["HomeTrasportiPage"]]
        })
    ], HomeTrasportiPageModule);
    return HomeTrasportiPageModule;
}());



/***/ }),

/***/ "./src/app/module-trasporti/pages/home-trasporti/home-trasporti.page.html":
/*!********************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/home-trasporti/home-trasporti.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'home_trasporto'|translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button routerLink=\"/map-spots\">\n          <ion-icon name=\"map\" ></ion-icon>\n        </ion-fab-button>\n      </ion-fab> -->\n  <div class=\"wrapper\">\n    <div class=\"scrolling-wrapper-flexbox loop\" ng-if=\"primaryLinks.length>0\">\n      <ion-chip *ngFor=\"let m of primaryLinks\" (click)=\"selectInternalElement(m)\">\n        <ion-icon class=\"interaction\" name=\"{{m.icon}}\"></ion-icon>\n        <ion-label class=\"interaction\">{{m.label|translate}}</ion-label>\n      </ion-chip>\n    </div>\n  </div>\n  <div class=\"line-container\">\n    <ion-list class=\"route-list space-from-top\">\n      <div *ngFor=\"let elem of elements; let i = index\">\n        <ion-item *ngIf=\"compareElements(i)\" class=\"label-type ion-text-center\">\n          <div>{{getLabel(i)|translate}}</div>\n        </ion-item>\n        <ion-item>\n          <div class=\"{{elem.ref}}\" (click)=\"selectElement(elem)\">\n            <div class=\"card card-tt\" color>\n              <div class=\"line-tt\" [ngStyle]=\"getStyle(elem)\">\n                <span *ngIf=\"inside(elem.title)\">{{elem.title}}</span>\n              </div>\n              <span  class=\"name-line\" *ngIf=\"!inside(elem.title)\">{{elem.title}}</span>\n              <span  class=\"name-line\"  *ngIf=\"titleisPresent(elem)\">{{elem.group.routes[0].title}}</span>\n            </div>\n          </div>\n        </ion-item>\n      </div>\n    </ion-list>\n  </div>\n\n  <!-- <ion-list class=\"home-list\" ng-if=\"primaryLinks.length>0\">\n    <ion-item *ngFor=\"let m of primaryLinks\"  routerLink=\"{{m.state}}\">\n        <ion-label>\n          <h3>{{m.label|translate}}</h3>\n        </ion-label>\n        <ion-icon slot=\"start\" name=\"{{m.icon}}\"></ion-icon>\n      </ion-item>\n  </ion-list> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/module-trasporti/pages/home-trasporti/home-trasporti.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/home-trasporti/home-trasporti.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper .scrolling-wrapper-flexbox {\n  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  z-index: 999;\n  position: fixed; }\n  .wrapper .scrolling-wrapper-flexbox ion-chip {\n    flex: 0 0 auto;\n    background-color: white; }\n  .line-container {\n  padding-top: 40px; }\n  .line-container .card-tt {\n    display: table; }\n  .line-container .card-tt .name-line {\n      display: table-cell;\n      vertical-align: middle; }\n  .line-container .line-tt {\n    border-radius: 8px;\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n    display: inline-block; }\n  .line-container .label-type {\n    width: 100%;\n    font-weight: bold;\n    --background: #e3e3e3;\n    --color: #707070;\n    font-size: 22px; }\n  .line-container .label-type div {\n      width: 100%; }\n  .interaction {\n  color: #11b3ef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtdHJhc3BvcnRpL3BhZ2VzL2hvbWUtdHJhc3BvcnRpL2hvbWUtdHJhc3BvcnRpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtRLCtFQUE4RTtFQUM5RSw4RUFBNkU7RUFDN0UsMkVBQTBFO0VBQzFFLHdCQUFzQjtFQUN0QixZQUFXO0VBQ1gsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osZ0JBQWUsRUFLbEI7RUFsQkw7SUFlWSxlQUFjO0lBQ2Qsd0JBQXVCLEVBQzFCO0VBSVQ7RUFDSSxrQkFBaUIsRUEwQnBCO0VBM0JEO0lBR1EsZUFBYyxFQUtqQjtFQVJMO01BS1ksb0JBQW1CO01BQzNCLHVCQUFzQixFQUNqQjtFQVBUO0lBVVEsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixzQkFBcUIsRUFDeEI7RUFoQkw7SUFrQlEsWUFBVztJQUNYLGtCQUFpQjtJQUNqQixzQkFBYTtJQUNiLGlCQUFRO0lBQ1IsZ0JBQWUsRUFJbEI7RUExQkw7TUF3QlksWUFBVyxFQUNkO0VBR1Q7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLXRyYXNwb3J0aS9wYWdlcy9ob21lLXRyYXNwb3J0aS9ob21lLXRyYXNwb3J0aS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG5cbiAgICAuc2Nyb2xsaW5nLXdyYXBwZXItZmxleGJveCB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1tcy1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgLW8tYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5saW5lLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgLmNhcmQtdHR7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAubmFtZS1saW5le1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5saW5lLXR0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5sYWJlbC10eXBle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgICAgLS1jb2xvcjogIzcwNzA3MDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5pbnRlcmFjdGlvbiB7XG4gICAgY29sb3I6ICMxMWIzZWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/module-trasporti/pages/home-trasporti/home-trasporti.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/home-trasporti/home-trasporti.page.ts ***!
  \******************************************************************************/
/*! exports provided: HomeTrasportiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTrasportiPage", function() { return HomeTrasportiPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class_MainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../class/MainPage */ "./src/app/module-trasporti/class/MainPage.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_module_trasporti_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/module-trasporti/services/config.service */ "./src/app/module-trasporti/services/config.service.ts");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-trasporti/services/db.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_transport_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/transport.service */ "./src/app/module-trasporti/services/transport.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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








var HomeTrasportiPage = /** @class */ (function (_super) {
    __extends(HomeTrasportiPage, _super);
    function HomeTrasportiPage(router, transportService, loadingController, translate, dbService, config) {
        var _this = _super.call(this, translate) || this;
        _this.router = router;
        _this.transportService = transportService;
        _this.loadingController = loadingController;
        _this.translate = translate;
        _this.dbService = dbService;
        _this.config = config;
        _this.primaryLinks = [];
        _this.min_grid_cell_width = 90;
        _this.title = null;
        _this.view = 'list';
        _this.hasMap = false;
        _this.allMarkers = null;
        _this.elements = [];
        return _this;
    }
    HomeTrasportiPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        //await loading.present();
                        this.dbService.Init().then(function () {
                            loading.dismiss();
                        }, function (err) {
                            loading.dismiss();
                        });
                        this.translate.get('home_trasporto').subscribe(function (value) {
                            console.log(value);
                        });
                        this.config.getHomeButtons().then(function (res) {
                            _this.primaryLinks = res;
                            _this.loadListAll(_this.primaryLinks);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeTrasportiPage.prototype.prepareGrid = function () {
        var cols = Math.floor(window.innerWidth / this.min_grid_cell_width);
        var gridRows = [];
        var row = [];
        gridRows.push(row);
        for (var i = 0; i < this.elements.length; i++) {
            row.push(this.elements[i]);
            if ((i + 1) % cols == 0) {
                row = [];
                gridRows.push(row);
            }
        }
        for (var i = row.length; i < cols; i++) {
            row.push({});
        }
        this.gridRows = gridRows;
    };
    HomeTrasportiPage.prototype.selectInternalElement = function (ref) {
        var elem = document.getElementsByClassName(ref.state);
        if (elem.length > 0) {
            // let yOffset = elem[0].offsetTop;
            var yOffset = elem[0].getBoundingClientRect().top + window.scrollY;
            this.content.scrollToPoint(0, yOffset, 1000);
            // var scrollheight = elem[0].getBoundingClientRect().top;
            // this.content.scrollToPoint(0, scrollheight, 1000);
        }
    };
    HomeTrasportiPage.prototype.compareElements = function (i) {
        if (i == 0)
            return true;
        if (i == this.elements.length - 1)
            return false;
        if (this.elements[i].ref != this.elements[i - 1].ref)
            return true;
        return false;
    };
    HomeTrasportiPage.prototype.getLabel = function (i) {
        return this.elements[i].ref;
    };
    HomeTrasportiPage.prototype.loadListAll = function (primaryLinks) {
        var _this = this;
        var funcs = [];
        for (var i = 0; i < this.primaryLinks.length; i++) {
            funcs.push(this.loadList(primaryLinks[i]));
        }
        Promise.all(funcs).then(function (values) {
            console.log(values);
            for (var i = 0; i < values.length; i++) {
                var element = values[i];
                if (element) {
                    _this.hasMap = element.hasMap;
                    _this.markerIcon = element.markerIcon;
                    _this.icon = element.icon;
                    var newElems = _this.transportService.flattenData(element, _this.primaryLinks[i].state, _this.agencyId);
                    _this.elements = _this.elements.concat(newElems);
                    _this.view = element.view ? element.view : 'list';
                    if (_this.view == 'grid') {
                        _this.prepareGrid();
                    }
                }
                _this.transportService.setElements(_this.elements);
            }
            ;
        });
    };
    HomeTrasportiPage.prototype.getStyle = function (elem) {
        return { 'border': '2px solid ' + elem.color };
    };
    HomeTrasportiPage.prototype.titleisPresent = function (elem) {
        return (elem && elem.group && elem.group.routes && elem.group.routes.length > 0 && elem.group.routes[0].title) ? true : false;
    };
    HomeTrasportiPage.prototype.inside = function (string) {
        return string.length < 3;
    };
    HomeTrasportiPage.prototype.selectElement = function (e) {
        // route element: go to table
        if (e.route != null) {
            // if (!this.groupId) {
            //   this.groupId = "no-group";
            // }
            this.router.navigate(['/tt', e.ref, e.agencyId, this.groupId ? this.groupId : e.title, e.route.routeSymId, e.title, e.color]);
            // group with single route: go to table
        }
        else if (e.group.routes != null && e.group.routes.length == 1) {
            this.router.navigate(['/tt', e.ref, e.agencyId, e.group.label, e.group.routes[0].routeSymId, e.title, e.color]);
            // group with multiple elements: go to group
        }
        else {
            this.router.navigate(['/ttgroup', e.ref, e.agencyId, this.groupId ? (this.groupId + ',' + e.group.label) : e.group.label]);
        }
    };
    HomeTrasportiPage.prototype.loadList = function (ref) {
        return this.transportService.getTTData(ref.state, this.agencyId, this.groupId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"])
    ], HomeTrasportiPage.prototype, "content", void 0);
    HomeTrasportiPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-trasporti',
            template: __webpack_require__(/*! ./home-trasporti.page.html */ "./src/app/module-trasporti/pages/home-trasporti/home-trasporti.page.html"),
            styles: [__webpack_require__(/*! ./home-trasporti.page.scss */ "./src/app/module-trasporti/pages/home-trasporti/home-trasporti.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_transport_service__WEBPACK_IMPORTED_MODULE_7__["TransportService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"], src_app_module_trasporti_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], HomeTrasportiPage);
    return HomeTrasportiPage;
}(_class_MainPage__WEBPACK_IMPORTED_MODULE_1__["MainPage"]));



/***/ })

}]);
//# sourceMappingURL=pages-home-trasporti-home-trasporti-module.js.map