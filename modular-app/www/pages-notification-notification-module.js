(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"],{

/***/ "./src/app/module-pulstrade/pages/notification/notification.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/notification/notification.module.ts ***!
  \****************************************************************************/
/*! exports provided: HttpLoaderFactory, NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.page */ "./src/app/module-pulstrade/pages/notification/notification.page.ts");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_5__["NotificationPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/strade/i18n/', '.json');
}
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    } }),
            ],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_5__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/module-pulstrade/pages/notification/notification.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/notification/notification.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"interactive\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{'NOTIFY' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"fab-notification\" [routerLink]=\"['/ps-search']\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n  </ion-fab>\n  <ion-list no-lines *ngIf=\"showStreets\">\n    <div *ngFor=\"let s of showStreets\">\n      <div [id]=\"s.id\">\n        <div>\n          <div class=\"left\" (click)=\"openStreetDetail(s)\">\n              <div class=\"interaction result\">{{s.streetName}}</div>\n              <div class=\"interaction sub-result\">{{s.notes}}</div>\n            </div>\n          <div class=\"right\" (click)=\"toggleNotification(s)\">\n              <ion-icon class=\"interaction icon-notification\" name=\"notifications\" *ngIf=\"isEnabled(s); else disabled\"></ion-icon>\n              <ng-template #disabled>\n                <ion-icon class=\"interaction icon-notification\" name=\"notifications-outline\"></ion-icon>\n              </ng-template>\n            </div>\n          </div>\n      </div>\n    </div>\n  </ion-list>\n  <div class=\"no-notification\" *ngIf=\"showStreets.length==0\">\n      {{'no_notify' | translate}}\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/notification/notification.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/notification/notification.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  background: white !important; }\n\n.left {\n  float: left;\n  width: 75%;\n  padding-bottom: 5%; }\n\n.right {\n  float: right;\n  vertical-align: middle; }\n\n.notification {\n  text-align: center; }\n\n.interaction {\n  color: #11B3EF !important; }\n\n.icon-notification {\n  font-size: 30px; }\n\n.fab-notification {\n  --background:#11B3EF!important; }\n\n.result {\n  font-size: 30px; }\n\n.sub-result {\n  font-size: 15px; }\n\n.interactive {\n  color: #11B3EF !important; }\n\n.no-notification {\n  text-align: center;\n  font-size: 22px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtcHVsc3RyYWRlL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTRCLEVBQy9COztBQUNEO0VBQ0ksWUFBVztFQUNYLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osdUJBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUlEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUNEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSwrQkFBYSxFQUNoQjs7QUFDRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSwwQkFBd0IsRUFDM0I7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGUtcHVsc3RyYWRlL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ubGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG4ucmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm5vdGlmaWNhdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxlZnQgaDEge1xuICAgIC8vIG1hcmdpbi10b3A6MTUlO1xufVxuLmludGVyYWN0aW9uIHtcbiAgICBjb2xvcjogIzExQjNFRiFpbXBvcnRhbnQ7XG59XG4uaWNvbi1ub3RpZmljYXRpb257XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuLmZhYi1ub3RpZmljYXRpb257XG4gICAgLS1iYWNrZ3JvdW5kOiMxMUIzRUYhaW1wb3J0YW50O1xufVxuLnJlc3VsdHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4uc3ViLXJlc3VsdHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uaW50ZXJhY3RpdmV7XG4gICAgY29sb3I6ICMxMUIzRUYhaW1wb3J0YW50O1xufVxuLm5vLW5vdGlmaWNhdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/module-pulstrade/pages/notification/notification.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/module-pulstrade/pages/notification/notification.page.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/map.service */ "./src/app/module-pulstrade/services/map.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/module-pulstrade/services/notification.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotificationPage = /** @class */ (function () {
    function NotificationPage(notSrv, translate, config, mapSrv, platform, router) {
        this.notSrv = notSrv;
        this.translate = translate;
        this.config = config;
        this.mapSrv = mapSrv;
        this.platform = platform;
        this.router = router;
        this.showStreets = []; /** Streets object for page view */
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
    }
    NotificationPage.prototype.ngOnInit = function () {
    };
    NotificationPage.prototype.ionViewDidEnter = function () {
        this.notif = this.notSrv.getNotStreets();
        this.notifMap = this.convertToMapId(this.notSrv.getNotStreets());
        this.streets = this.mapSrv.getData();
        this.buildShowNot();
    };
    /**
     * Build unique streets elements, and put them in `showStreets`
     */
    NotificationPage.prototype.buildShowNot = function () {
        var tmp = [];
        if (this.notif) {
            this.notif.forEach(function (s) {
                if (s && tmp.filter(function (t) { return t.idNumber === s.idNumber; }).length === 0) {
                    tmp.push(s);
                }
            });
        }
        this.showStreets = tmp;
    };
    NotificationPage.prototype.toggleNotification = function (street) {
        if (this.notifMap[street.idNumber] != undefined) {
            this.notSrv.disableNotification(street);
        }
        else {
            this.notSrv.setNotification(street);
        }
        this.notifMap = this.convertToMapId(this.notSrv.getNotStreets());
    };
    NotificationPage.prototype.convertToMapId = function (array) {
        var map = {};
        if (array)
            array.forEach(function (el) {
                if (el && el.idNumber)
                    map[el.idNumber] = el;
            });
        return map;
    };
    NotificationPage.prototype.isEnabled = function (street) {
        if (street)
            return this.notifMap[street.idNumber] != undefined;
        return false;
    };
    /**
     * Enable or disable notifications for the choosen street.
     * It also manipulates DOM for dynamic visualization.
     * @param event `Click` event on ion-toggle
     */
    NotificationPage.prototype.toggle = function (event) {
        var _this = this;
        this.platform.ready().then(function () {
            var element, toggle;
            var street = _this.streets.filter(function (val) {
                return val.streetName === event.detail.value;
            });
            if (event.detail.checked) {
                street.forEach(function (s) {
                    element = document.getElementById('not-' + s.idNumber);
                    toggle = document.getElementById('tog-' + s.idNumber);
                    _this.notSrv.setNotification(street); /** Enable Notification */
                    element.style.color = 'green';
                    _this.translate.get('NOTIFY-ENA').subscribe(function (x) {
                        element.innerHTML = x;
                    });
                    toggle.checked = true;
                });
            }
            else {
                street.forEach(function (s) {
                    element = document.getElementById('not-' + s.idNumber);
                    toggle = document.getElementById('tog-' + s.idNumber);
                    _this.notSrv.disableNotification(street); /** Disable Notification */
                    element.style.color = '#737373';
                    _this.translate.get('NOTIFY-DIS').subscribe(function (x) {
                        element.innerHTML = x;
                    });
                    toggle.checked = false;
                });
            }
        });
    };
    NotificationPage.prototype.openStreetDetail = function (s) {
        this.router.navigate(['street-detail'], { queryParams: { street: s.idNumber } });
    };
    NotificationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.page.html */ "./src/app/module-pulstrade/pages/notification/notification.page.html"),
            styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/module-pulstrade/pages/notification/notification.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-notification-notification-module.js.map