(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-poi-list-poi-module"],{

/***/ "./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.html":
/*!****************************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"closeModal()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of filters\">\n      <ion-label>{{item.value}}</ion-label>\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"item.isChecked\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n        <ion-col size=\"6\">\n            <ion-button class=\"button-interaction\" (click)=\"closeModal()\">{{'cancel_button'|translate}}</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button class=\"button-interaction\" (click)=\"filter()\">{{'ok_button'|translate}}</ion-button>\n    \n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>"

/***/ }),

/***/ "./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-interaction {\n  width: 100%;\n  --background:#11b3ef;\n  --color:white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtcG9pL2ZpbHRlci1wYWdlLXBvaS9maWx0ZXItcGFnZS1wb2kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLHFCQUFhO0VBQ2IsY0FBUSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLWNvbXVuZS9wYWdlcy9saXN0LXBvaS9maWx0ZXItcGFnZS1wb2kvZmlsdGVyLXBhZ2UtcG9pLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24taW50ZXJhY3Rpb257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiMxMWIzZWY7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.ts ***!
  \**************************************************************************************/
/*! exports provided: FilterPagePoiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPagePoiPage", function() { return FilterPagePoiPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPagePoiPage = /** @class */ (function () {
    function FilterPagePoiPage(navParams, modalCtrl) {
        this.modalCtrl = modalCtrl;
        // componentProps can also be accessed at construction time using NavParams
        console.log(navParams.get('filters'));
    }
    FilterPagePoiPage.prototype.ngOnInit = function () {
    };
    FilterPagePoiPage.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    FilterPagePoiPage.prototype.filter = function () {
        this.modalCtrl.dismiss(this.filters);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterPagePoiPage.prototype, "filters", void 0);
    FilterPagePoiPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-page-poi',
            template: __webpack_require__(/*! ./filter-page-poi.page.html */ "./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.html"),
            styles: [__webpack_require__(/*! ./filter-page-poi.page.scss */ "./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], FilterPagePoiPage);
    return FilterPagePoiPage;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/list-poi/list-poi.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module-comune/pages/list-poi/list-poi.module.ts ***!
  \*****************************************************************/
/*! exports provided: HttpLoaderFactory, ListPoiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPoiPageModule", function() { return ListPoiPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_poi_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-poi.page */ "./src/app/module-comune/pages/list-poi/list-poi.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-in-viewport */ "./node_modules/ng-in-viewport/fesm5/ng-in-viewport.js");
/* harmony import */ var _filter_page_poi_filter_page_poi_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-page-poi/filter-page-poi.page */ "./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _list_poi_page__WEBPACK_IMPORTED_MODULE_5__["ListPoiPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var ListPoiPageModule = /** @class */ (function () {
    function ListPoiPageModule() {
    }
    ListPoiPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_in_viewport__WEBPACK_IMPORTED_MODULE_8__["InViewportModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            entryComponents: [_filter_page_poi_filter_page_poi_page__WEBPACK_IMPORTED_MODULE_9__["FilterPagePoiPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_list_poi_page__WEBPACK_IMPORTED_MODULE_5__["ListPoiPage"], _filter_page_poi_filter_page_poi_page__WEBPACK_IMPORTED_MODULE_9__["FilterPagePoiPage"]]
        })
    ], ListPoiPageModule);
    return ListPoiPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/list-poi/list-poi.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/module-comune/pages/list-poi/list-poi.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header no-border>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-title>\n          {{'title_list_poi'|translate}}\n        </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-list no-lines id=\"poi-list\">\n    <div *ngFor=\"let poi of pois\">      \n      <wc-path-list-el type=\"POI\" [id]=\"poi.id\" [img]=\"poi.image\" [title]=\"poi.title\" [text]=\"poi.subtitle\" main-color=\"red\"></wc-path-list-el>\n    </div>\n  </ion-list>\n</ion-content> -->\n\n<ion-header no-border>\n    <ion-searchbar class=\"search-poi\" style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\"\n    (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n    <ion-toolbar>\n\n      <ion-buttons slot=\"start\">\n        <ion-back-button class=\"interaction\"></ion-back-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"filterClicked()\">\n          <ion-icon name=\"options\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"toggleSearch()\">\n          <ion-icon name=\"search\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>\n        {{'title_list_poi' | translate}}\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <!-- <ion-grid style=\"height: 100%\" *ngIf=\"isLoading\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-spinner name=\"circles\"></ion-spinner>\n    </ion-row>\n  </ion-grid> -->\n  \n  <ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  \n    <ion-searchbar style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\"\n      (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n    <div *ngIf=\"!emptyList\">\n    <div class=\"wrapper\" *ngIf=\"presentFilter\">\n        <div class=\"scrolling-wrapper-flexbox loop\">\n          <div class=\"container\" *ngFor=\"let tag of tags\">\n          <div class=\"tag\"  *ngIf=\"tag.isChecked\">\n            <div class=\"tag-text\">\n              {{tag.value}}\n              <ion-icon name=\"close-circle\" (click)=\"removeTag(tag)\"></ion-icon>\n            </div>\n            \n          </div>\n        </div>\n        </div>\n      </div>\n    <div class=\"wrapper\" *ngIf=\"!presentFilter\">\n      <div class=\"scrolling-wrapper-flexbox loop\">\n        <ion-chip *ngFor=\"let c of categories\" (click)=\"selectInternalElement(c)\" [ngClass]=\"{'categorySelected': isSelected(c)}\">\n          <ion-label class=\"interaction\" [ngClass]=\"{'categorySelected': c==actualVisualized}\">{{c}}</ion-label>\n        </ion-chip>\n      </div>\n    </div>\n    <ion-list no-lines id=\"poi-list\">\n      <div *ngFor=\"let c of categories\">\n        <ion-item class=\"label-type ion-text-center\" sticky *ngIf=\"oneElement(c) && !presentFilter\">\n            <div>{{c}}</div>\n        </ion-item>\n        <div class=\"content\">\n          <div *ngFor=\"let poi of showPois[c]; let i = index\">\n            <div class=\"{{poi.classification}}\"   inViewport\n            [inViewportOptions]=\"{ threshold: [0] }\" (inViewportAction)=\"onIntersection($event)\">\n              <wc-details [id]=\"poi.id\" [img]=\"poi.image\" [stringsinput]=\"stringsContact\" [title]=\"poi.title\"\n                [altImage]=\"altImage\" [stringsinput]=\"stringsContact\" [title]=\"poi.title\" [altImage]=\"altImage\"\n                [subtitle]=\"poi.subtitle\" [text]=\"poi.text\" [info]=\"poi.info\" [contacts]=\"poi.infos\"\n                heading-color=\"#707070\" second-color=\"#11b3ef\" expandable=true expanse=false></wc-details>\n              <div class=\"spacing\" *ngIf=\"i == showPois.length - 1\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ion-list>\n  </div>\n  <div *ngIf=\"emptyList\">\n      {{'empty_list' | translate}}\n  </div>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/module-comune/pages/list-poi/list-poi.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/module-comune/pages/list-poi/list-poi.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-left: 2%;\n  padding-right: 2%; }\n\nion-searchbar {\n  position: fixed;\n  z-index: 999; }\n\n.column {\n  float: left; }\n\n.c-text {\n  width: 60%;\n  margin-left: 20%; }\n\n.c-btn {\n  width: 40%;\n  margin-bottom: 3%; }\n\n.row {\n  text-align: center;\n  vertical-align: middle;\n  height: 40px; }\n\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.order-icon {\n  transform: rotate(90deg); }\n\n.wrapper .scrolling-wrapper-flexbox {\n  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  z-index: 999;\n  position: fixed; }\n\n.wrapper .scrolling-wrapper-flexbox .container {\n    flex: 0 0 auto; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag {\n      flex: 0 0 auto;\n      margin: 8px; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag .tag-text {\n        padding: 4px;\n        color: white;\n        background-color: #11b3ef; }\n\n.wrapper .scrolling-wrapper-flexbox ion-chip {\n    flex: 0 0 auto;\n    background-color: white; }\n\n.interaction {\n  color: #11b3ef; }\n\n.categorySelected {\n  color: white !important;\n  background-color: #11b3ef !important; }\n\n.label-type {\n  width: 100%;\n  font-weight: bold;\n  --background: #e3e3e3;\n  --color: #707070;\n  font-size: 22px; }\n\n.label-type div {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtcG9pL2xpc3QtcG9pLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFlO0VBQ2Ysa0JBQWlCLEVBQ3BCOztBQUNEO0VBQ0ksZ0JBQWU7RUFFZixhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxZQUFVLEVBQ2I7O0FBQ0Q7RUFDSSxXQUFVO0VBQ1YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksV0FBVTtFQUNWLGtCQUFnQixFQUNuQjs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUNEO0VBQ0ksWUFBVztFQUNYLGVBQWE7RUFDYixZQUFVLEVBQ2I7O0FBQ0Q7RUFDSSx5QkFBd0IsRUFDM0I7O0FBRUQ7RUFLUSwrRUFBOEU7RUFDOUUsOEVBQTZFO0VBQzdFLDJFQUEwRTtFQUMxRSx3QkFBc0I7RUFDdEIsWUFBVztFQUNYLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGdCQUFlLEVBa0JsQjs7QUEvQkw7SUFlWSxlQUFjLEVBV2pCOztBQTFCVDtNQWlCWSxlQUFjO01BQ2QsWUFBVyxFQU1kOztBQXhCVDtRQW9CZ0IsYUFBWTtRQUNoQixhQUFZO1FBQ1osMEJBQTJCLEVBQzFCOztBQXZCYjtJQTRCWSxlQUFjO0lBQ2Qsd0JBQXVCLEVBQzFCOztBQUdUO0VBQ0ksZUFBYyxFQUNqQjs7QUFDRDtFQUNJLHdCQUFzQjtFQUN0QixxQ0FBbUMsRUFDdEM7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLHNCQUFhO0VBQ2IsaUJBQVE7RUFDUixnQkFBZSxFQUlsQjs7QUFURDtJQU9RLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1jb211bmUvcGFnZXMvbGlzdC1wb2kvbGlzdC1wb2kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDoyJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbn1cbmlvbi1zZWFyY2hiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyB0b3A6IDU4cHg7XG4gICAgei1pbmRleDogOTk5O1xufVxuLmNvbHVtbiB7XG4gICAgZmxvYXQ6bGVmdDtcbn1cbi5jLXRleHR7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uYy1idG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLWJvdHRvbTozJTtcbn1cbi5yb3d7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLnJvdzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTp0YWJsZTtcbiAgICBjbGVhcjpib3RoO1xufVxuLm9yZGVyLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxufVxuXG4ud3JhcHBlciB7XG5cbiAgICAuc2Nyb2xsaW5nLXdyYXBwZXItZmxleGJveCB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1tcy1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgLW8tYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgLnRhZ3tcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgICAgICAudGFnLXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICAjMTFiM2VmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpb24tY2hpcCB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuLmludGVyYWN0aW9uIHtcbiAgICBjb2xvcjogIzExYjNlZjtcbn1cbi5jYXRlZ29yeVNlbGVjdGVkIHtcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMWIzZWYhaW1wb3J0YW50O1xufVxuLmxhYmVsLXR5cGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICAgIC0tY29sb3I6ICM3MDcwNzA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGRpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/module-comune/pages/list-poi/list-poi.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/module-comune/pages/list-poi/list-poi.page.ts ***!
  \***************************************************************/
/*! exports provided: ListPoiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPoiPage", function() { return ListPoiPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/module-comune/services/utils.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-comune/services/config.service.ts");
/* harmony import */ var _filter_page_poi_filter_page_poi_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-page-poi/filter-page-poi.page */ "./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.ts");
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









var ListPoiPage = /** @class */ (function () {
    function ListPoiPage(navCtrl, dbService, alertCtrl, router, route, translate, callNumber, modalController, utils, loadingController, config) {
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.utils = utils;
        this.loadingController = loadingController;
        this.config = config;
        this.showPois = [];
        this.fullPois = [];
        this.firstAccess = true;
        this.tags = [];
        this.isLoading = true;
        this.fullCategories = [];
        this.categories = [];
        this.search = false;
        this.presentFilter = false;
        this.emptyList = false;
        this.doneTypingInterval = 500; //time in ms, 5 second for example
        this.language = window[this.config.getAppModuleName()]['language'];
    }
    ListPoiPage.prototype.ngOnInit = function () {
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
    ListPoiPage.prototype.buildFilter = function () {
        var array = this.fullPois.map(function (item) { return item.classification; });
        var newArray1 = array.flat();
        var newArray = newArray1.filter(function (value, index, self) {
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
    ListPoiPage.prototype.ionViewDidEnter = function () {
        var _this_1 = this;
        if (this.category && this.category.query) {
            this.dbService.synch().then(function () {
                _this_1.dbService.getObjectByQuery(_this_1.category.query).then(function (data) {
                    if (data.docs.length > 0) {
                        _this_1.fullPois = data.docs.map(function (x) { return _this_1.convertPois(x); });
                        _this_1.subCategories(_this_1.fullPois);
                        _this_1.buildShowPois();
                        _this_1.tags = _this_1.buildFilter();
                        _this_1.utils.hideLoading();
                    }
                    else {
                        _this_1.emptyList = true;
                    }
                    _this_1.isLoading = false;
                    console.log(_this_1.showPois);
                }, function (err) {
                    _this_1.utils.hideLoading();
                });
            });
        }
        else {
            this.utils.hideLoading();
        }
        var element = document.getElementById('poi-list');
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
                    this.router.navigate(['/detail-event'], { queryParams: { id: id, type: 'EVENT' } });
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
    ListPoiPage.prototype.onIntersection = function (_a) {
        var target = _a.target, visible = _a.visible;
        if (visible && this.actualVisualized != target.className)
            this.actualVisualized = target.className;
        console.log(target + "" + visible);
    };
    ListPoiPage.prototype.isSelected = function (classification) {
        return classification == this.actualVisualized;
    };
    ListPoiPage.prototype.onScroll = function (e) {
        // this.isScrolledIntoView();
    };
    ListPoiPage.prototype.selectInternalElement = function (ref) {
        var elem = document.getElementsByClassName(ref);
        if (elem.length > 0) {
            var yOffset = elem[0].offsetTop;
            this.content.scrollToPoint(0, yOffset, 0);
            // var scrollheight = elem[0].getBoundingClientRect().top;
            // this.content.scrollToPoint(0, scrollheight, 1000);
        }
    };
    ListPoiPage.prototype.convertPois = function (x) {
        var poiElement = {};
        if (x) {
            if (x.title) {
                if (x.title[this.language])
                    poiElement.title = x.title[this.language];
                else
                    poiElement.title = x.title["it"];
            }
            if (x.classification) {
                if (x.classification[this.language])
                    poiElement.classification = x.classification[this.language];
                else
                    poiElement.classification = x.classification["it"];
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
            if (x.id) {
                poiElement.id = x.id;
            }
            if (x._id) {
                poiElement.id = x._id;
            }
        }
        return poiElement;
    };
    ListPoiPage.prototype.goToDetail = function (id) {
        this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: this.type } });
    };
    ListPoiPage.prototype.toggleSearch = function () {
        var _this_1 = this;
        this.search = !this.search;
        var searchbar = document.querySelector('.search-poi');
        if (searchbar.style.display === 'none') {
            searchbar.style.display = 'unset';
            this.presentFilter = true;
            searchbar.focus();
        }
        else {
            searchbar.style.display = 'none';
            this.presentFilter = false;
            this.categories.forEach(function (c) {
                _this_1.showPois[c] = _this_1.fullPois.filter(function (el) {
                    return (el.classification == c);
                });
            });
        }
    };
    ListPoiPage.prototype.oneElement = function (classification) {
        return (this.showPois[classification].length > 0);
    };
    ListPoiPage.prototype.searchChanged = function (input) {
        var _this_1 = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            var value = input.detail.target.value;
            var _this = _this_1;
            _this.categories.forEach(function (c) {
                _this_1.showPois[c] = _this_1.fullPois.filter(function (el) {
                    if (el.title)
                        return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1 && el.classification == c);
                    return false;
                });
            });
        }, this.doneTypingInterval);
    };
    ListPoiPage.prototype.filterClicked = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _filter_page_poi_filter_page_poi_page__WEBPACK_IMPORTED_MODULE_8__["FilterPagePoiPage"],
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
                                _this_1.presentFilter = true;
                                _this_1.firstAccess = false;
                                _this_1.buildShowPois(_this_1.tags);
                            }
                            else {
                                _this_1.presentFilter = false;
                                _this_1.buildShowPois();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPoiPage.prototype.removeTag = function (tag) {
        this.tags = this.tags.map(function (item) { return tag.value == item.value ? { value: item.value, isChecked: false } : { value: item.value, isChecked: item.isChecked }; });
        this.firstAccess = true;
        var even = function (element) {
            // checks whether an element is even
            return element.isChecked;
        };
        if (this.tags.some(even)) {
            this.presentFilter = true;
            this.firstAccess = false;
            this.buildShowPois(this.tags);
        }
        else {
            this.presentFilter = false;
            this.buildShowPois();
        }
    };
    ListPoiPage.prototype.subCategories = function (array) {
        var _this_1 = this;
        array.forEach(function (element) {
            if (!_this_1.fullCategories.includes(element.classification)) {
                _this_1.fullCategories.push(element.classification);
            }
        });
        this.categories = this.fullCategories;
        if (this.categories.length > 0)
            this.actualVisualized = this.categories[0];
    };
    ListPoiPage.prototype.buildShowPois = function (filters) {
        var _this_1 = this;
        this.showPois = [];
        this.fullPois.forEach(function (p) {
            if (!_this_1.showPois[p.classification]) {
                _this_1.showPois[p.classification] = [];
            }
            if (filters ? filters.filter(function (item) {
                return item.isChecked && p.classification == item.value;
            }).length > 0 : true) {
                _this_1.showPois[p.classification].push(p);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"])
    ], ListPoiPage.prototype, "content", void 0);
    ListPoiPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-poi',
            template: __webpack_require__(/*! ./list-poi.page.html */ "./src/app/module-comune/pages/list-poi/list-poi.page.html"),
            styles: [__webpack_require__(/*! ./list-poi.page.scss */ "./src/app/module-comune/pages/list-poi/list-poi.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]])
    ], ListPoiPage);
    return ListPoiPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-poi-list-poi-module.js.map