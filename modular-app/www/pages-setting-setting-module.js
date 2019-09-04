(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-setting-module"],{

/***/ "./src/app/pages/setting/setting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.module.ts ***!
  \*************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/setting/setting.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_5__["SettingPage"]
    }
];
var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_5__["SettingPage"]]
        })
    ], SettingPageModule);
    return SettingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/setting/setting.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{'label_other_settinga'|translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-radio-group (ionChange)=\"onLanguageChanged($event)\" [(ngModel)]=\"selectedLanguage\">\n            <ion-list-header>\n                <ion-label>{{title}}</ion-label>\n            </ion-list-header>\n\n            <ion-item *ngFor=\"let language of languages\">\n                <ion-label>{{language.value}}</ion-label>\n                <ion-radio slot=\"start\" value=\"{{language.key}}\"></ion-radio>\n            </ion-item>\n\n        </ion-radio-group>\n    </ion-list>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button class=\"save-button\" (click)=\"saveOtherSetting()\">\n            <ion-icon name=\"save\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/setting/setting.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/setting/setting.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/setting/setting.page.ts ***!
  \***********************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingPage = /** @class */ (function () {
    function SettingPage(settingService, location, translate, config) {
        this.settingService = settingService;
        this.location = location;
        this.translate = translate;
        this.config = config;
        this.translate.use(window[this.config.getAppModuleName()]['language']);
        this.setLanguages();
    }
    SettingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('title_app').subscribe(function (value) {
            _this.title = value;
        });
        this.translate.onDefaultLangChange.subscribe(function (event) {
            _this.translate.get('title_app').subscribe(function (value) {
                _this.title = value;
            });
        });
    };
    SettingPage.prototype.ionViewDidLoad = function () {
    };
    SettingPage.prototype.setLanguages = function () {
        this.setting = this.settingService.getUserSetting();
        this.myLanguage = this.settingService.getUserLanguage();
        if (this.myLanguage) {
            this.selectedLanguage = this.myLanguage;
            this.translate.setDefaultLang(this.selectedLanguage);
        }
        var languages = this.settingService.getLanguages();
        if (languages) {
            var keys = Array.from(Object.keys(languages));
            this.languages = keys.map(function (element) {
                return {
                    'key': element,
                    'value': languages[element]
                };
            });
        }
    };
    SettingPage.prototype.saveOtherSetting = function () {
        this.settingService.setUserLanguage(this.selectedLanguage);
        this.translate.setDefaultLang(this.selectedLanguage);
        this.location.back();
    };
    SettingPage.prototype.onLanguageChanged = function (data) {
        console.log('Lingua = ', this.selectedLanguage);
    };
    SettingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.page.html */ "./src/app/pages/setting/setting.page.html"),
            styles: [__webpack_require__(/*! ./setting.page.scss */ "./src/app/pages/setting/setting.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], SettingPage);
    return SettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-setting-setting-module.js.map