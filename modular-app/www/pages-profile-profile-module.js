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

module.exports = " \n  <ion-content>\n    <ion-grid >\n        <ion-row >\n            <ion-col>\n                <div class=\"main-title ion-text-center\">{{'title_app'|translate}}</div>\n            </ion-col>\n          </ion-row>\n          <ion-row >\n              <ion-col>\n                  <div class=\"second-title ion-text-center\">{{'title_first_launch'|translate}}</div>\n                </ion-col>\n            </ion-row>\n      <ion-row >\n          <ion-col>\n              <ion-button  (click)=\"chooseProfile('citizen')\">{{'citizen_profile_label'|translate}}</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row >\n            <ion-col>\n                <ion-button  (click)=\"chooseProfile('turist')\">{{'turist_profile_label'|translate}}</ion-button>\n            </ion-col>\n          </ion-row>\n    </ion-grid>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --overflow: hidden; }\n\nion-button {\n  margin: auto;\n  text-align: center;\n  display: table;\n  width: 50%;\n  font-size: 22px;\n  font-weight: bold;\n  --color: #11b3ef !important;\n  --background-activated: #11b3ef !important;\n  --background-focused: #11b3ef !important;\n  --background: #e3e3e3 !important; }\n\nion-button:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%; }\n\n.main-title {\n  font-size: 28px;\n  color: #393939;\n  font-weight: bold; }\n\n.second-title {\n  font-size: 22px;\n  color: #707070;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQVcsRUFFZDs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLFdBQVU7RUFDVixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQiw0QkFBUTtFQUNSLDJDQUF1QjtFQUN2Qix5Q0FBcUI7RUFDckIsaUNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsZUFBYztFQUNkLHFCQUFvQixFQUN2Qjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGtCQUFpQixFQUVwQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWNvbG9yOiAjMTFiM2VmICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzExYjNlZiAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMTFiM2VmICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTNlM2UzICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b246YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMCU7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6ICMzOTM5Mzk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxuLnNlY29uZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(configService, router, navCtrl) {
        this.configService = configService;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    ProfilePage.prototype.chooseProfile = function (type) {
        var _this = this;
        this.configService.chooseProfile(type).then(function () {
            _this.navCtrl.navigateRoot('/home-common');
        });
    };
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        var type = this.configService.getChoosen();
        if (type != null)
            this.configService.setDefaultHome(type).then(function () {
                _this.navCtrl.navigateRoot('/home-common');
            });
    };
    ProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map