(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
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
        component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ion-content>\n     <img src=\"assets/sfondoHome.png\" alt=\"\">\n     <ion-grid>\n         <ion-row>\n             <ion-col>\n                 <div class=\"main-title ion-text-center\">{{'title_app'|translate}}</div>\n             </ion-col>\n         </ion-row>\n         <ion-row>\n             <ion-col>\n                 <div class=\"second-title ion-text-center\">{{'title_first_launch'|translate}}</div>\n             </ion-col>\n         </ion-row>\n             <ion-row text-center>\n                 <ion-col>\n                     <div>\n                     <ion-button (click)=\"chooseProfile('citizen')\">\n                         {{'citizen_profile_label'|translate}}</ion-button>\n                    </div>\n                    </ion-col>\n             </ion-row>\n             <ion-row text-center>\n                 <ion-col>\n                     <ion-button (click)=\"chooseProfile('turist')\">{{'turist_profile_label'|translate}}</ion-button>\n                 </ion-col>\n             </ion-row>\n     </ion-grid>\n </ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --overflow: hidden; }\n  ion-content img {\n    position: fixed;\n    top: 0px; }\n  ion-button {\n  margin: auto;\n  text-align: center;\n  display: inline-block;\n  width: 150px;\n  height: 150px;\n  font-size: 22px;\n  font-weight: bold;\n  --color: #11b3ef !important;\n  --background-activated: #11b3ef !important;\n  --background-focused: #11b3ef !important;\n  --background: #e3e3e3 !important; }\n  .main-title {\n  font-size: 28px;\n  color: #393939;\n  font-weight: bold; }\n  .second-title {\n  font-size: 22px;\n  color: #707070;\n  font-weight: bold; }\n  .overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQVcsRUFNZDtFQVBEO0lBSVEsZ0JBQWU7SUFDZixTQUFRLEVBQ1g7RUFHTDtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsc0JBQXFCO0VBRXJCLGFBQVk7RUFDWixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsNEJBQVE7RUFDUiwyQ0FBdUI7RUFDdkIseUNBQXFCO0VBQ3JCLGlDQUFhLEVBQ2hCO0VBYUQ7RUFDSSxnQkFBZTtFQUNmLGVBQWM7RUFDZCxrQkFBaUIsRUFFcEI7RUFFRDtFQUNJLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGtCQUFpQixFQUNwQjtFQUVEO0VBQ0ksZ0JBQWU7RUFDakIsY0FBYTtFQUNiLFlBQVc7RUFDWCxhQUFZO0VBQ1osT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULHFDQUFpQztFQUNqQyxXQUFVO0VBQ1YsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnYXNzZXRzL3Nmb25kb0hvbWUucG5nJylcbiAgICBpbWd7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgfVxufVxuXG5pb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAvLyB3aWR0aDogNTAlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWNvbG9yOiAjMTFiM2VmICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzExYjNlZiAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMTFiM2VmICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTNlM2UzICFpbXBvcnRhbnQ7XG59XG5cbi8vIGlvbi1idXR0b246YWZ0ZXIge1xuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4vLyB9XG4vLyAuY29udGVudCB7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgfVxuXG4ubWFpbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiAjMzkzOTM5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cbi5zZWNvbmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG4gIHotaW5kZXg6IDI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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




var ProfilePage = /** @class */ (function () {
    function ProfilePage(configService, translate, config, navCtrl, alertController) {
        this.configService = configService;
        this.translate = translate;
        this.config = config;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
    }
    ProfilePage.prototype.chooseProfile = function (type) {
        var _this = this;
        this.configService.chooseProfile(type).then(function () {
            _this.navCtrl.navigateRoot('/home-common');
        });
    };
    ProfilePage.prototype.getStrings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.translate.get('user_title').subscribe(function (value) {
                _this.benvenuto = value;
                _this.sub1 = _this.translate.instant('user_subtitle1');
                _this.text1 = _this.translate.instant('user_text1');
                _this.sub2 = _this.translate.instant('user_subtitle2');
                _this.text2 = _this.translate.instant('user_text2');
                _this.sub3 = _this.translate.instant('user_subtitle3');
                _this.text3 = _this.translate.instant('user_text3');
                resolve(true);
            }, function (err) {
                resolve(false);
            });
        });
    };
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.getStrings().then(function (value) {
            var type = _this.configService.getChoosen();
            if (type != null)
                _this.configService.setDefaultHome(type).then(function () {
                    if (_this.config.getVersion() == 'test') {
                        if (!_this.config.isExpired()) {
                            _this.config.showPopupExpiring();
                        }
                        else {
                            _this.config.showPopUpExpired();
                        }
                    }
                    _this.navCtrl.navigateRoot('/home-common');
                });
            else {
                if (value)
                    _this.presentAlert();
                if (_this.config.getVersion() == 'test') {
                    if (!_this.config.isExpired()) {
                        _this.config.showPopupExpiring();
                    }
                    else {
                        _this.config.showPopUpExpired();
                    }
                }
            }
        });
    };
    ProfilePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: '<div>' +
                                "<div class=\"title\">" + this.benvenuto + "</div>\n      <div class=\"hl\"></div>\n      <div class=\"subtitle\">" + this.sub1 + "</div>\n      <div class\"text\">" + this.text1 + "</div></div><div class=\"subtitle\">" + this.sub2 + "</div></div><div class=\"text\">" + this.text2 + "</div>\n      <div class=\"subtitle\">" + this.sub3 + "</div>\n      <div class=\"text last-text\" >" + this.text3 + "</div>\n      </div>",
                            cssClass: 'welcome',
                            buttons: [
                                {
                                    text: 'Ok',
                                    cssClass: 'ok-prompt',
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
    ProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map