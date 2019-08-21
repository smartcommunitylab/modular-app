(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-categories-list-categories-module"],{

/***/ "./src/app/module-comune/pages/list-categories/list-categories.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-categories/list-categories.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ListCategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoriesPageModule", function() { return ListCategoriesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_categories_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-categories.page */ "./src/app/module-comune/pages/list-categories/list-categories.page.ts");
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
        component: _list_categories_page__WEBPACK_IMPORTED_MODULE_5__["ListCategoriesPage"]
    }
];
var ListCategoriesPageModule = /** @class */ (function () {
    function ListCategoriesPageModule() {
    }
    ListCategoriesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_list_categories_page__WEBPACK_IMPORTED_MODULE_5__["ListCategoriesPage"]]
        })
    ], ListCategoriesPageModule);
    return ListCategoriesPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/list-categories/list-categories.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-categories/list-categories.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-searchbar style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\" (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          {{'title_list_categories'|translate}}\n        </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<!-- <ion-content padding>\n  <div *ngIf=\"categories\">\n    <div *ngFor=\"let category of categories\">\n      <wc-list-categories [category]=\"category.name\" (click)=\"goToCategory(category)\"></wc-list-categories>\n    </div>\n  </div>\n</ion-content> -->\n<ion-content>\n    <!-- FLOATING BUTTON -->\n    <ion-fab *ngIf=\"!isLoading\" class=\"fixed\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button color=\"danger\">\n        <ion-icon name=\"arrow-dropup-circle\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\">\n          <ion-fab-button (click)=\"toggleSearch()\">\n            <ion-icon name=\"search\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button (click)=\"filterClicked()\">\n              <ion-icon name=\"swap\" class=\"order-icon\"></ion-icon>\n            </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n    <!-- ---------------------------- -->\n\n    <ion-list no-lines id=\"poi-list\">\n      <div *ngFor=\"let c of categories\">\n          <ion-item-divider class=\"category row\" sticky>\n              <div class=\"column c-text\">\n                <ion-label>{{c}}</ion-label>\n              </div>\n              <div class=\"column c-btn\">\n                <ion-button *ngIf=\"!search\" class=\"popover-btn\" size=\"small\" color=\"success\" (click)=\"showPopover()\">Categorie</ion-button>\n              </div>\n            </ion-item-divider>\n        <div class=\"content\">\n          <div *ngFor=\"let poi of showPois[c]; let i = index\">\n            <wc-details [img]=\"poi.image\" [title]=\"poi.title\" [subtitle]=\"poi.subtitle\" [text]=\"poi.text\" [info]=\"poi.info\" [contacts]=\"poi.infos\" heading-color=\"red\"></wc-details>\n            <div class=\"spacing\" *ngIf=\"i == showPois.length - 1\"></div>\n          </div>\n        </div>\n      </div>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-comune/pages/list-categories/list-categories.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-categories/list-categories.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1jb211bmUvcGFnZXMvbGlzdC1jYXRlZ29yaWVzL2xpc3QtY2F0ZWdvcmllcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/module-comune/pages/list-categories/list-categories.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-categories/list-categories.page.ts ***!
  \*****************************************************************************/
/*! exports provided: ListCategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoriesPage", function() { return ListCategoriesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
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




var ListCategoriesPage = /** @class */ (function () {
    function ListCategoriesPage(router, translate, route, dbService) {
        this.router = router;
        this.translate = translate;
        this.route = route;
        this.dbService = dbService;
        this.showPois = [];
        this.language = 'it';
        this.fullCategories = [];
        this.fullPois = [];
        this.isLoading = true;
    }
    ListCategoriesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            console.log(params); // {order: "popular"}
            if (params) {
                var cat = JSON.parse(params.category);
                if (cat.type !== 'PATH') {
                    _this.dbService.getMenuById(cat.id).then(function (results) {
                        console.log(results);
                        if (results.docs) {
                            // take the first with items
                            for (var i = 0; i < results.docs.length; i++) {
                                if (results.docs[i].items) {
                                    _this.categories = results.docs[i].items;
                                    break;
                                }
                            }
                            _this.categories = _this.categories.map(function (x) { return _this.convertCategories(x); });
                            _this.categories.forEach(function (element) {
                                if (element && element.query) {
                                    _this.translate.get('init_db').subscribe(function (value) {
                                        _this.dbService.synch(value).then(function () {
                                            _this.dbService.getObjectByQuery(element.query).then(function (data) {
                                                _this.fullPois = data.docs.map(function (x) { return _this.convertPois(x); });
                                                _this.subCategories(_this.fullPois);
                                                _this.buildShowPois();
                                                _this.isLoading = false;
                                                console.log(_this.showPois);
                                            });
                                        });
                                    });
                                }
                                var el = document.getElementById('poi-list');
                                el.addEventListener('pathSelected', function (path) {
                                    _this.type = path.detail.split(';')[1];
                                    var id = path.detail.split(';')[0];
                                    _this.goToDetail(id);
                                });
                            });
                        }
                    });
                }
                else {
                    var tmp = { query: { 'selector': { 'element-type': 'itinerary-item' }, type: 'itineraries' } };
                    _this.goToCategory(tmp);
                }
            }
        });
    };
    ListCategoriesPage.prototype.buildShowPois = function () {
        var _this = this;
        this.fullCategories.forEach(function (e) {
            _this.fullPois.forEach(function (p) {
                if (!_this.showPois[e]) {
                    _this.showPois[e] = [];
                }
                if (p.category === e) {
                    _this.showPois[e].push(p);
                }
            });
        });
    };
    ListCategoriesPage.prototype.convertPois = function (x) {
        var poiElement = {};
        if (x) {
            if (x.title) {
                poiElement.title = x.title[this.language];
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
            if (x._id) {
                poiElement.id = x._id;
            }
            if (x.topics) {
                poiElement.cat = x.topics;
            }
            if (x.eventPeriod) {
                poiElement.date = x.eventPeriod[this.language];
            }
            if (x.eventTiming) {
                poiElement.time = x.eventTiming[this.language];
            }
            if (x.info) {
                poiElement.info = x.info[this.language];
            }
            if (x.address) {
                poiElement.address = x.address[this.language];
            }
            if (x.description) {
                poiElement.text = x.description[this.language];
            }
            if (x.category) {
                poiElement.category = x.category;
            }
            if (x.url) {
                poiElement.url = x.url;
            }
            if (x.contacts) {
                if (x.contacts.phone) {
                    poiElement.phone = x.contacts.phone;
                }
                if (x.contacts.email) {
                    poiElement.email = x.contacts.email;
                }
            }
            poiElement.infos = JSON.stringify(poiElement);
        }
        return poiElement;
    };
    ListCategoriesPage.prototype.subCategories = function (array) {
        var _this = this;
        array.forEach(function (element) {
            if (!_this.fullCategories.includes(element.category)) {
                _this.fullCategories.push(element.category);
            }
            _this.categories = _this.fullCategories;
        });
    };
    ListCategoriesPage.prototype.ionViewDidLoad = function () {
        var categoryButtonsElement = document.querySelector('category-buttons');
        categoryButtonsElement.addEventListener('categorySelected', function (category) { console.log('ciao'); });
    };
    ListCategoriesPage.prototype.goToListPoi = function (category) {
        this.router.navigate(['/list-categories'], { queryParams: { category: JSON.stringify(category) } });
    };
    ListCategoriesPage.prototype.convertCategories = function (x) {
        var categoryElement = {};
        categoryElement.id = x.id;
        if (x) {
            if (x.name) {
                categoryElement.name = x.name[this.language];
            }
            if (x.query) {
                categoryElement.query = x.query;
            }
            if (x.objectIds) {
                categoryElement.objectIds = x.objectIds;
            }
        }
        return categoryElement;
    };
    ListCategoriesPage.prototype.goToDetail = function (id) {
        this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: this.type } });
    };
    ListCategoriesPage.prototype.goToCategory = function (category) {
        if (category.query) {
            if (category.query.type.indexOf('itineraries') > -1) {
                this.router.navigate(['/list-path'], { queryParams: { category: JSON.stringify(category) } });
            }
            else if (category.query.type.indexOf('event') > -1) {
                this.router.navigate(['/list-event'], { queryParams: { category: JSON.stringify(category) } });
            }
        }
        else {
            this.router.navigate(['/list-poi'], { queryParams: { category: JSON.stringify(category) } });
        }
    };
    ListCategoriesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-categories',
            template: __webpack_require__(/*! ./list-categories.page.html */ "./src/app/module-comune/pages/list-categories/list-categories.page.html"),
            styles: [__webpack_require__(/*! ./list-categories.page.scss */ "./src/app/module-comune/pages/list-categories/list-categories.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"]])
    ], ListCategoriesPage);
    return ListCategoriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-categories-list-categories-module.js.map