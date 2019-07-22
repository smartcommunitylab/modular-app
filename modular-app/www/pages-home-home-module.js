(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/module-comune/class/MainPage.ts":
/*!*************************************************!*\
  !*** ./src/app/module-comune/class/MainPage.ts ***!
  \*************************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
var ROUTER_KEY = "router-key";
var MainPage = /** @class */ (function () {
    function MainPage(translate, navCtrl) {
        this.translate = translate;
        this.navCtrl = navCtrl;
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

/***/ "./src/app/module-comune/pages/home/home.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/module-comune/pages/home/home.module.ts ***!
  \*********************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/module-comune/pages/home/home.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/home/home.page.html":
/*!*********************************************************!*\
  !*** ./src/app/module-comune/pages/home/home.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        {{'title_app'|translate}}\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <div  *ngIf=\"elementsGallery\"> -->\n    <wc-gallery id=\"gallery\" [gallery]=\"elementsGalleryStr\">\n    </wc-gallery>\n  <!-- </div> -->\n\n  <ion-grid id=\"category-buttons\">\n    <ion-row>\n      <ion-col *ngFor=\"let category of categories\">\n        <wc-category-button [category]=\"category.name\" [icon]=\"category.image\" icon-align=\"top\" icon-fill=\"red\"\n          text-color=\"red\" (click)=\"goToCategory(category)\">\n        </wc-category-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-comune/pages/home/home.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/module-comune/pages/home/home.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery {\n  width: 50%;\n  height: 70%;\n  margin: auto;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5nYWxsZXJ5IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/module-comune/pages/home/home.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/module-comune/pages/home/home.page.ts ***!
  \*******************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-comune/services/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _class_MainPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../class/MainPage */ "./src/app/module-comune/class/MainPage.ts");
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







var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, translate, config, router, dbService, alertCtrl) {
        var _this = _super.call(this, translate, navCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.translate = translate;
        _this.config = config;
        _this.router = router;
        _this.dbService = dbService;
        _this.alertCtrl = alertCtrl;
        _this.categories = [];
        _this.elementsGallery = null;
        _this.pois = [];
        _this.language = "it";
        return _this;
    }
    HomePage.prototype.ngOnInit = function () {
        this.translate.get('title_page').subscribe(function (value) {
            console.log(value);
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.elementsGallery = [];
        this.config.init();
        this.dbService.getCategories().then(function (data) {
            // set button categories
            _this.categories = data.map(function (x) { return _this.convertCategories(x); });
        });
        this.dbService.getElementsGallery().then(function (data) {
            // set gallery with preview
            _this.elementsGallery = data.map(function (x) { return _this.convertGallery(x); });
            _this.elementsGalleryStr = JSON.stringify(_this.elementsGallery);
            // console.log(JSON.stringify(this.elementsGallery));
        });
        // const categoryButtonsElement = document.querySelector('category-buttons');
        window.addEventListener('categorySelected', function (category) {
            console.log(category);
            _this.goToCategory(category);
        });
        window.addEventListener('elementSelected', function (item) {
            console.log(item);
            _this.goToItem(item["detail"]);
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var categoryButtonsElement = document.querySelector('category-buttons');
        categoryButtonsElement.addEventListener('categorySelected', function (category) {
            console.log(category);
            _this.goToCategory(category);
        });
    };
    HomePage.prototype.convertGallery = function (x) {
        var galleryElement = {};
        if (x && x.key) {
            if (x.key.name) {
                galleryElement.name = x.key.name[this.language];
            }
            if (x.key.image) {
                galleryElement.image = x.key.image[this.language];
            }
            if (x.key.objectIds) {
                galleryElement.objectIds = x.key.objectIds;
            }
        }
        return galleryElement;
    };
    HomePage.prototype.convertCategories = function (x) {
        var categoryElement = {};
        categoryElement.id = x.key.id;
        if (x && x.key) {
            if (x.key.name) {
                categoryElement.name = x.key.name[this.language];
            }
            if (x.key.image) {
                categoryElement.image = x.key.image;
            }
        }
        return categoryElement;
    };
    HomePage.prototype.goToCategory = function (category) {
        this.router.navigate(['/list-categories'], { queryParams: { category: JSON.stringify(category) } });
    };
    HomePage.prototype.goToItem = function (item) {
        var _this = this;
        console.log(item);
        this.dbService.getObjectByDataId(item.objectIds[0]).then(function (res) {
            var found = res.docs.filter(function (obj) {
                return obj["element-type"] != undefined;
            });
            _this.router.navigate(['/detail-poi'], { queryParams: { _id: found._id } });
        });
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/module-comune/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/module-comune/pages/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], HomePage);
    return HomePage;
}(_class_MainPage__WEBPACK_IMPORTED_MODULE_6__["MainPage"]));



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
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map