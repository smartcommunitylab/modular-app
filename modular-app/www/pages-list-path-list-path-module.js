(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-path-list-path-module"],{

/***/ "./src/app/module-comune/pages/list-path/list-path.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/list-path/list-path.module.ts ***!
  \*******************************************************************/
/*! exports provided: HttpLoaderFactory, ListPathPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPathPageModule", function() { return ListPathPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_path_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-path.page */ "./src/app/module-comune/pages/list-path/list-path.page.ts");
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
        component: _list_path_page__WEBPACK_IMPORTED_MODULE_5__["ListPathPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var ListPathPageModule = /** @class */ (function () {
    function ListPathPageModule() {
    }
    ListPathPageModule = __decorate([
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
            declarations: [_list_path_page__WEBPACK_IMPORTED_MODULE_5__["ListPathPage"]]
        })
    ], ListPathPageModule);
    return ListPathPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/list-path/list-path.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/list-path/list-path.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-searchbar class=\"search-path\" style=\"display: none\" showCancelButton=\"always\" animated (search)=\"toggleSearch()\"\n    (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\" ></ion-searchbar>\n    <ion-toolbar>\n\n      <ion-buttons slot=\"start\">\n          <ion-back-button class=\"interaction\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"toggleSearch()\">\n              <ion-icon name=\"search\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      <ion-title>\n          {{'PATH'|translate}}\n        </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-list no-lines id=\"path-list\">\n    <div *ngFor=\"let poi of pois\">      \n      <wc-path-list-el type=\"PATH\" [id]=\"poi.id\" [img]=\"poi.image\" [title]=\"poi.title\" [text]=\"poi.subtitle\" main-color=\"#11b3ef\" desc-color=\"#707070\"></wc-path-list-el>\n    </div>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/module-comune/pages/list-path/list-path.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/list-path/list-path.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  position: fixed;\n  width: calc(100% - 60px);\n  top: 3px;\n  z-index: 999; }\n\n.interaction {\n  color: #11b3ef !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtcGF0aC9saXN0LXBhdGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZix5QkFBd0I7RUFDeEIsU0FBUTtFQUVSLGFBQVksRUFDZjs7QUFDRDtFQUNJLDBCQUF3QixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1jb211bmUvcGFnZXMvbGlzdC1wYXRoL2xpc3QtcGF0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgIHRvcDogM3B4O1xuICAgIC8vIHRvcDogNThweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG4uaW50ZXJhY3Rpb24ge1xuICAgIGNvbG9yOiAjMTFiM2VmIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/module-comune/pages/list-path/list-path.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module-comune/pages/list-path/list-path.page.ts ***!
  \*****************************************************************/
/*! exports provided: ListPathPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPathPage", function() { return ListPathPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/module-comune/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPathPage = /** @class */ (function () {
    function ListPathPage(navCtrl, utils, dbService, alertCtrl, router, route, translate) {
        this.navCtrl = navCtrl;
        this.utils = utils;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.pois = [];
        this.fullPois = [];
        this.language = 'it';
        this.doneTypingInterval = 500;
        this.search = false;
        this.translate.use(this.language);
    }
    ListPathPage.prototype.ngOnInit = function () {
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
    };
    ListPathPage.prototype.ionViewDidEnter = function () {
        var _this_1 = this;
        if (this.category && this.category.query) {
            this.translate.get('init_db').subscribe(function (value) {
                _this_1.dbService.synch(value).then(function () {
                    _this_1.dbService.getObjectByQuery(_this_1.category.query).then(function (data) {
                        _this_1.pois = data.docs.map(function (x) { return _this_1.convertPois(x); });
                        _this_1.fullPois = _this_1.pois;
                        _this_1.utils.hideLoading();
                    }, function (err) {
                        _this_1.utils.hideLoading();
                    });
                }, function (err) {
                    _this_1.utils.hideLoading();
                });
            });
        }
        var el = document.getElementById('path-list');
        el.addEventListener('pathSelected', function (path) {
            _this_1.goToDetail(path.detail);
        });
    };
    ListPathPage.prototype.ionViewWillLeave = function () {
        var el = document.getElementById('path-list');
        if (el) {
            el.removeEventListener('pathSelected', function (e) {
                console.log(e);
            }, false);
        }
    };
    ListPathPage.prototype.convertPois = function (x) {
        var poiElement = {};
        if (x) {
            if (x.title) {
                if (x.title[this.language])
                    poiElement.title = x.title[this.language];
                else
                    poiElement.title = x.title["it"];
            }
            if (x.subtitle) {
                if (x.subtitle[this.language])
                    poiElement.subtitle = x.subtitle[this.language];
                else
                    poiElement.subtitle = x.subtitle["it"];
            }
            if (x.description) {
                if (x.description[this.language])
                    poiElement.description = x.description[this.language];
                else
                    poiElement.description = x.description["it"];
            }
            if (x.image) {
                poiElement.image = x.image;
            }
            if (x._id) {
                poiElement.id = x._id;
            }
        }
        return poiElement;
    };
    ListPathPage.prototype.toggleSearch = function () {
        this.search = !this.search;
        var searchbar = document.querySelector('.search-path');
        if (searchbar.style.display === 'none') {
            searchbar.style.display = 'unset';
            searchbar.focus();
        }
        else {
            searchbar.style.display = 'none';
            this.pois = this.fullPois;
        }
    };
    ListPathPage.prototype.searchChanged = function (input) {
        var _this_1 = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            var value = input.detail.target.value;
            var _this = _this_1;
            _this_1.pois = _this_1.fullPois.filter(function (el) {
                return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
            });
        }, this.doneTypingInterval);
    };
    ListPathPage.prototype.goToDetail = function (id) {
        this.router.navigate(['/detail-path'], { queryParams: { id: id } });
    };
    ListPathPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-path',
            template: __webpack_require__(/*! ./list-path.page.html */ "./src/app/module-comune/pages/list-path/list-path.page.html"),
            styles: [__webpack_require__(/*! ./list-path.page.scss */ "./src/app/module-comune/pages/list-path/list-path.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"], _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ListPathPage);
    return ListPathPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-path-list-path-module.js.map