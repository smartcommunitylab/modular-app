(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-poi-list-poi-module"],{

/***/ "./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.html":
/*!****************************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"interactive\" (click)=\"closeModal()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n        {{'title_filtra'|translate}}\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of filters\">\n      <ion-label>{{item.value}}</ion-label>\n      <ion-checkbox  (ionChange)=\"selected=true\" slot=\"end\" [(ngModel)]=\"item.isChecked\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n<ion-footer *ngIf=\"selected\">\n  <ion-grid>\n    <ion-row>\n        <ion-col size=\"6\">\n            <ion-button class=\"button-interaction\" (click)=\"closeModal()\">{{'cancel_button'|translate}}</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button class=\"button-interaction\" (click)=\"filter()\">{{'ok_button'|translate}}</ion-button>\n    \n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>"

/***/ }),

/***/ "./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-interaction {\n  width: 100%;\n  --background:#11b3ef;\n  --color:white; }\n\n.interactive {\n  color: #11b3ef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtcG9pL2ZpbHRlci1wYWdlLXBvaS9maWx0ZXItcGFnZS1wb2kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLHFCQUFhO0VBQ2IsY0FBUSxFQUNYOztBQUNEO0VBQ0ksZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1jb211bmUvcGFnZXMvbGlzdC1wb2kvZmlsdGVyLXBhZ2UtcG9pL2ZpbHRlci1wYWdlLXBvaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWludGVyYWN0aW9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYmFja2dyb3VuZDojMTFiM2VmO1xuICAgIC0tY29sb3I6d2hpdGU7XG59XG4uaW50ZXJhY3RpdmV7XG4gICAgY29sb3I6ICMxMWIzZWY7XG59Il19 */"

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
        var _this = this;
        this.original = this.filters.map(function (x) { return Object.assign({}, x); });
        this.filters.forEach(function (element) {
            if (element.isChecked)
                return _this.selected = true;
        });
    };
    FilterPagePoiPage.prototype.closeModal = function () {
        this.modalCtrl.dismiss(this.original);
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_poi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-poi.page */ "./src/app/module-comune/pages/list-poi/list-poi.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-in-viewport */ "./node_modules/ng-in-viewport/fesm5/ng-in-viewport.js");
/* harmony import */ var _filter_page_poi_filter_page_poi_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter-page-poi/filter-page-poi.page */ "./src/app/module-comune/pages/list-poi/filter-page-poi/filter-page-poi.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _list_poi_page__WEBPACK_IMPORTED_MODULE_6__["ListPoiPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var ListPoiPageModule = /** @class */ (function () {
    function ListPoiPageModule() {
    }
    ListPoiPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_in_viewport__WEBPACK_IMPORTED_MODULE_9__["InViewportModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    } }), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            entryComponents: [_filter_page_poi_filter_page_poi_page__WEBPACK_IMPORTED_MODULE_10__["FilterPagePoiPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_list_poi_page__WEBPACK_IMPORTED_MODULE_6__["ListPoiPage"], _filter_page_poi_filter_page_poi_page__WEBPACK_IMPORTED_MODULE_10__["FilterPagePoiPage"]]
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

module.exports = "<ion-header no-border  [ngClass]=\"{'higher': searchAndIos()}\" >\n    <ion-searchbar class=\"search-poi\" [ngClass]=\"{'searchspace': search}\" style=\"display: none\" showCancelButton=\"always\"  animated (search)=\"toggleSearch()\"\n    (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\" ></ion-searchbar>\n    <ion-toolbar>\n\n      <ion-buttons slot=\"start\">\n        <ion-back-button class=\"interaction\"></ion-back-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"filterClicked()\">\n          <ion-icon name=\"options\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"toggleSearch()\">\n          <ion-icon name=\"search\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>\n        {{'title_list_poi' | translate}}\n      </ion-title>\n    </ion-toolbar>\n    <div class=\"wrapper\" *ngIf=\"presentFilter\">\n        <div class=\"scrolling-wrapper-flexbox loop\">\n          <div class=\"container\" *ngFor=\"let tag of tags\">\n          <div class=\"tag\"  *ngIf=\"tag.isChecked\">\n            <div class=\"tag-text\">\n              {{tag.value}}\n              <ion-icon name=\"close-circle\" (click)=\"removeTag(tag)\"></ion-icon>\n            </div>\n            \n          </div>\n        </div>\n        </div>\n      </div>\n    <div class=\"wrapper\" *ngIf=\"!presentFilter\">\n      <div class=\"scrolling-wrapper-flexbox loop\">\n        <ion-chip *ngFor=\"let c of categories\" id=\"{{c}}\" (click)=\"selectInternalElement(c)\" [ngClass]=\"{'categorySelected': isSelected(c)}\">\n          <ion-label class=\"interaction\" [ngClass]=\"{'categorySelected': c==actualVisualized}\">{{c}}</ion-label>\n        </ion-chip>\n      </div>\n    </div>\n  </ion-header>\n\n  <ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  \n    <ion-searchbar style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\"\n      (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n    <div *ngIf=\"!emptyList\">\n    \n    <ion-list no-lines id=\"poi-list\">\n      <div class=\"list-container\" *ngFor=\"let c of categories\">\n        <ion-item class=\"label-type ion-text-center\" sticky *ngIf=\"oneElement(c) && !presentFilter\">\n            <div>{{c}}</div>\n        </ion-item>\n        <div class=\"content\" >\n          <div *ngFor=\"let poi of showPois[c]; let i = index\">\n            <div class=\"{{poi.cat[0]}}\"   inViewport\n            [inViewportOptions]=\"{ threshold: [0] }\" (inViewportAction)=\"onIntersection($event)\">\n              <wc-details [id]=\"poi.id\" [img]=\"poi.image\" [stringsinput]=\"stringsContact\" [title]=\"poi.title\"\n                [altImage]=\"altImage\" [stringsinput]=\"stringsContact\" [title]=\"poi.title\" [altImage]=\"altImage\"\n                [subtitle]=\"poi.subtitle\" [text]=\"poi.text\" [info]=\"poi.info\" [distance]=\"getDistance(poi)\" [contacts]=\"poi.infos\"\n                heading-color=\"#707070\" second-color=\"#11b3ef\" expandable=true expanse=false></wc-details>\n              <div class=\"spacing\" *ngIf=\"i == showPois.length - 1\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ion-list>\n  </div>\n  <div *ngIf=\"emptyList\">\n      {{'empty_list' | translate}}\n  </div>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/module-comune/pages/list-poi/list-poi.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/module-comune/pages/list-poi/list-poi.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-left: 2%;\n  padding-right: 2%; }\n\nion-searchbar {\n  position: fixed;\n  z-index: 999; }\n\n.column {\n  float: left; }\n\n.c-text {\n  width: 60%;\n  margin-left: 20%; }\n\n.c-btn {\n  width: 40%;\n  margin-bottom: 3%; }\n\n.row {\n  text-align: center;\n  vertical-align: middle;\n  height: 40px; }\n\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.order-icon {\n  transform: rotate(90deg); }\n\nion-list {\n  padding-top: 40px; }\n\n.wrapper .scrolling-wrapper-flexbox {\n  -ms-box-shadow: 0 10px 20px -20px rgba(0, 0, 0, 0.19), 0 6px 6px -6px rgba(0, 0, 0, 0.23);\n  -o-box-shadow: 0 10px 20px -20px rgba(0, 0, 0, 0.19), 0 6px 6px -6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0 10px 20px -20px rgba(0, 0, 0, 0.19), 0 6px 6px -6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  z-index: 999;\n  position: fixed; }\n\n.wrapper .scrolling-wrapper-flexbox .container {\n    flex: 0 0 auto; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag {\n      flex: 0 0 auto;\n      margin: 8px; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag .tag-text {\n        padding: 4px;\n        color: white;\n        background-color: #11b3ef; }\n\n.wrapper .scrolling-wrapper-flexbox ion-chip {\n    flex: 0 0 auto;\n    background-color: white;\n    font-size: 20px; }\n\n.wrapper .scrolling-wrapper-flexbox ion-chip ion-label {\n      font-size: 16px;\n      padding: 0px 8px; }\n\n.interaction {\n  color: #11b3ef !important; }\n\n.categorySelected {\n  color: white !important;\n  background-color: #11b3ef !important; }\n\n.label-type {\n  width: 100%;\n  font-weight: bold;\n  --background: #e3e3e3;\n  --color: #707070;\n  font-size: 22px; }\n\n.label-type div {\n    width: 100%; }\n\n.list-container {\n  margin-top: 30px; }\n\nion-toolbar ion-buttons ion-button {\n  font-size: 20px; }\n\nion-title {\n  font-weight: bold; }\n\n.searchspace {\n  background-color: white; }\n\n.higher {\n  height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtcG9pL2xpc3QtcG9pLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUlmLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLFdBQVU7RUFDVixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1Ysa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsZUFBYztFQUNkLFlBQVcsRUFDZDs7QUFFRDtFQUNJLHlCQUF3QixFQUMzQjs7QUFDRDtFQUNJLGtCQUFnQixFQUNuQjs7QUFDRDtFQUtRLDBGQUF5RjtFQUN6Rix5RkFBd0Y7RUFDeEYsc0ZBQXFGO0VBQ3JGLHdCQUF1QjtFQUN2QixZQUFXO0VBQ1gsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osZ0JBQWUsRUEyQmxCOztBQXhDTDtJQWdCWSxlQUFjLEVBYWpCOztBQTdCVDtNQW1CZ0IsZUFBYztNQUNkLFlBQVcsRUFPZDs7QUEzQmI7UUF1Qm9CLGFBQVk7UUFDWixhQUFZO1FBQ1osMEJBQXlCLEVBQzVCOztBQTFCakI7SUFnQ1ksZUFBYztJQUNkLHdCQUF1QjtJQUN2QixnQkFBZSxFQUtsQjs7QUF2Q1Q7TUFvQ2dCLGdCQUFlO01BQ2YsaUJBQWdCLEVBQ25COztBQUtiO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksd0JBQXVCO0VBQ3ZCLHFDQUFvQyxFQUN2Qzs7QUFFRDtFQUNJLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsc0JBQWE7RUFDYixpQkFBUTtFQUNSLGdCQUFlLEVBS2xCOztBQVZEO0lBUVEsWUFBVyxFQUNkOztBQUdMO0VBQ0ksaUJBQWdCLEVBQ25COztBQUNEO0VBR1ksZ0JBQWUsRUFDbEI7O0FBR1Q7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSx3QkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLWNvbXVuZS9wYWdlcy9saXN0LXBvaS9saXN0LXBvaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC8vIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICAvLyB0b3A6IDNweDtcbiAgICAvLyB0b3A6IDU4cHg7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmMtdGV4dCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uYy1idG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5yb3cge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLnJvdzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5vcmRlci1pY29uIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcbn1cbmlvbi1saXN0IHtcbiAgICBwYWRkaW5nLXRvcDo0MHB4O1xufVxuLndyYXBwZXIge1xuXG4gICAgLnNjcm9sbGluZy13cmFwcGVyLWZsZXhib3gge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDIwcHggLTIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgLW1zLWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1vLWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcblxuICAgICAgICAgICAgLnRhZyB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHg7XG5cbiAgICAgICAgICAgICAgICAudGFnLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExYjNlZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW50ZXJhY3Rpb24ge1xuICAgIGNvbG9yOiAjMTFiM2VmICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yeVNlbGVjdGVkIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTFiM2VmICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC10eXBlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgLS1jb2xvcjogIzcwNzA3MDtcbiAgICBmb250LXNpemU6IDIycHg7XG5cbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmlvbi10b29sYmFye1xuICAgIGlvbi1idXR0b25ze1xuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuaW9uLXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlYXJjaHNwYWNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuLmhpZ2hlcntcbiAgICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */"

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
/* harmony import */ var src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/geo.service */ "./src/app/services/geo.service.ts");
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
    function ListPoiPage(navCtrl, dbService, alertCtrl, router, route, translate, callNumber, modalController, utils, geoSrv, plt, loadingController, config) {
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.utils = utils;
        this.geoSrv = geoSrv;
        this.plt = plt;
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
        if (window[this.config.getAppModuleName()]['language'])
            this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
        if (window[this.config.getAppModuleName()]['geolocation'])
            this.mypos = {
                lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
                long: window[this.config.getAppModuleName()]['geolocation']['long']
            };
        else {
            this.mypos = this.config.getDefaultPosition();
        }
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
        var array = this.fullPois.map(function (item) { return item.cat; }).flat();
        var newArray1 = array.flat();
        var newArray = newArray1.filter(function (value, index, self) {
            return (self.indexOf(value) === index && value);
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
        if (!this.fullPois || this.fullPois.length == 0)
            if (this.category && this.category.query) {
                this.translate.get('init_db').subscribe(function (value) {
                    _this_1.dbService.synch(value).then(function () {
                        _this_1.dbService.getObjectByQuery(_this_1.category.query).then(function (data) {
                            if (data.docs.length > 0) {
                                _this_1.fullPois = data.docs.map(function (x) { return _this_1.convertPois(x); });
                                _this_1.addDistance();
                                _this_1.subCategories(_this_1.fullPois);
                                _this_1.buildShowPois();
                                _this_1.tags = _this_1.buildFilter();
                                _this_1.orderArray('near', _this_1);
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
                });
            }
            else {
                this.utils.hideLoading();
            }
        var element = document.getElementById('poi-list');
        this.translate.get('alt_image_string').subscribe(function (value) {
            _this_1.altImage = value;
            _this_1.distanceLabel = _this_1.translate.instant('distance_label');
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
    ListPoiPage.prototype.searchAndIos = function () {
        return this.plt.is('ios') && this.search;
    };
    ListPoiPage.prototype.addDistance = function () {
        var _this_1 = this;
        this.fullPois.forEach(function (element) {
            element['distance'] = _this_1.geoSrv.getDistanceKM({ lat: _this_1.mypos.lat, lon: _this_1.mypos.long }, { lat: element.location[0], lon: element.location[1] });
        });
    };
    ListPoiPage.prototype.onIntersection = function (_a) {
        var target = _a.target, visible = _a.visible;
        console.log("visible" + visible);
        console.log("this.actualVisualized" + this.actualVisualized);
        console.log("target.className" + target.className);
        if (visible && this.actualVisualized != target.className)
            this.actualVisualized = target.className;
        //scroll to posiition
        var element = document.getElementById(this.actualVisualized);
        if (element)
            element.scrollIntoView({ block: "center" });
        console.log(target + "" + visible);
    };
    ListPoiPage.prototype.isSelected = function (classification) {
        // console.log("classification"+classification);
        // console.log("this.actualVisualized"+this.actualVisualized);
        return classification == this.actualVisualized;
    };
    ListPoiPage.prototype.onScroll = function (e) {
        // this.isScrolledIntoView();
    };
    ListPoiPage.prototype.selectInternalElement = function (ref) {
        var elem = document.getElementsByClassName(ref);
        if (elem.length > 0) {
            var yOffset = elem[0].offsetTop;
            this.content.scrollToPoint(0, yOffset - 100, 0);
            // var scrollheight = elem[0].getBoundingClientRect().top;
            // this.content.scrollToPoint(0, scrollheight, 1000);
        }
        this.actualVisualized = ref;
        // console.log("this.actualVisualized"+this.actualVisualized);
        // console.log("ref"+ref);
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
            if (x.cat) {
                if (x.cat[this.language])
                    poiElement.cat = x.cat[this.language];
                else
                    poiElement.cat = x.cat["it"];
            }
            if (x.location) {
                poiElement.location = x.location;
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
                poiElement.image = x.image.replace('.jpg', '_medium.jpg');
                ;
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
    ListPoiPage.prototype.getDistance = function (poi) {
        return this.distanceLabel + (poi.distance).toFixed(2) + " Km";
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
                    return (el.cat[0] == c);
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
                        return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1 && el.cat[0] == c);
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
                            _this_1.orderArray('near', _this_1);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPoiPage.prototype.orderArray = function (condition, _this) {
        _this.isLoading = true;
        if (condition.indexOf('near') > -1) {
            _this.categories.forEach(function (c) {
                _this.showPois[c] = _this.showPois[c].sort(function (a, b) {
                    var dist1 = 0;
                    var dist2 = 0;
                    if (a.location) {
                        dist1 = _this.geoSrv.getDistanceKM({ lat: _this.mypos.lat, lon: _this.mypos.long }, { lat: a.location[0], lon: a.location[1] });
                    }
                    if (b.location) {
                        dist2 = _this.geoSrv.getDistanceKM({ lat: _this.mypos.lat, lon: _this.mypos.long }, { lat: b.location[0], lon: b.location[1] });
                    }
                    return dist1 - dist2;
                });
            });
        }
        _this.isLoading = false;
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
            if (!_this_1.fullCategories.includes(element.cat[0])) {
                _this_1.fullCategories.push(element.cat[0]);
            }
        });
        this.categories = this.fullCategories;
        if (this.categories.length > 0)
            setTimeout(function () { return _this_1.actualVisualized = _this_1.categories[0]; }, 500);
    };
    ListPoiPage.prototype.buildShowPois = function (filters) {
        var _this_1 = this;
        this.showPois = [];
        this.fullPois.forEach(function (p) {
            if (!_this_1.showPois[p.cat[0]]) {
                _this_1.showPois[p.cat[0]] = [];
            }
            if (filters ? filters.filter(function (item) {
                return item.isChecked && p.cat[0] == item.value;
            }).length > 0 : true) {
                _this_1.showPois[p.cat[0]].push(p);
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
            src_app_services_geo_service__WEBPACK_IMPORTED_MODULE_9__["GeoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]])
    ], ListPoiPage);
    return ListPoiPage;
}());



/***/ }),

/***/ "./src/app/shared/filter-page/filter-page.page.html":
/*!**********************************************************!*\
  !*** ./src/app/shared/filter-page/filter-page.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"interactive\" (click)=\"closeModal()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of filters\">\n      <ion-label>{{item.value}}</ion-label>\n      <ion-checkbox  (ionChange)=\"selected=true\" slot=\"end\" [(ngModel)]=\"item.isChecked\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n<ion-footer *ngIf=\"selected\">\n  <ion-grid>\n    <ion-row>\n        <ion-col size=\"6\">\n            <ion-button class=\"button-interaction\" (click)=\"closeModal()\">{{'cancel_button'|translate}}</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button class=\"button-interaction\" (click)=\"filter()\">{{'ok_button'|translate}}</ion-button>\n    \n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>"

/***/ }),

/***/ "./src/app/shared/filter-page/filter-page.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/filter-page/filter-page.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-interaction {\n  width: 100%;\n  --background:#11b3ef;\n  --color:white; }\n\n.interactive {\n  color: #11b3ef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9zaGFyZWQvZmlsdGVyLXBhZ2UvZmlsdGVyLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLHFCQUFhO0VBQ2IsY0FBUSxFQUNYOztBQUNEO0VBQ0ksZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9maWx0ZXItcGFnZS9maWx0ZXItcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWludGVyYWN0aW9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYmFja2dyb3VuZDojMTFiM2VmO1xuICAgIC0tY29sb3I6d2hpdGU7XG59XG4uaW50ZXJhY3RpdmV7XG4gICAgY29sb3I6ICMxMWIzZWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/filter-page/filter-page.page.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/filter-page/filter-page.page.ts ***!
  \********************************************************/
/*! exports provided: FilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPage", function() { return FilterPage; });
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


var FilterPage = /** @class */ (function () {
    function FilterPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    FilterPage.prototype.ngOnInit = function () {
        this.selected = this.filters.some(function (element) { return element.isChecked; });
    };
    FilterPage.prototype.closeModal = function () {
        this.modalCtrl.dismiss(null);
    };
    FilterPage.prototype.filter = function () {
        this.modalCtrl.dismiss(this.filters);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterPage.prototype, "filters", void 0);
    FilterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-page',
            template: __webpack_require__(/*! ./filter-page.page.html */ "./src/app/shared/filter-page/filter-page.page.html"),
            styles: [__webpack_require__(/*! ./filter-page.page.scss */ "./src/app/shared/filter-page/filter-page.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], FilterPage);
    return FilterPage;
}());



/***/ }),

/***/ "./src/app/shared/itemlist/itemlist.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/itemlist/itemlist.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border  [ngClass]=\"{'higher': isIOS && search}\" >\n  <ion-searchbar class=\"search\" [ngClass]=\"{'searchspace': search}\" style=\"display: none\" showCancelButton=\"always\"  animated (search)=\"toggleSearch()\"\n    (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\" ></ion-searchbar>\n  <ion-toolbar>    \n    <ion-buttons slot=\"start\">\n        <ion-button class=\"interaction\" (click)=\"goBack()\">\n            <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n        \n    <ion-buttons slot=\"end\">\n      <ng-content select=\"[buttons]\"></ng-content>\n      <ion-button (click)=\"filterClicked()\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"toggleSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  \n    <ion-title> {{title}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"wrapper\" *ngIf=\"presentFilter && !search\">\n  <div class=\"scrolling-wrapper-flexbox loop\">\n    <div class=\"container\" *ngFor=\"let tag of tags\">\n      <div class=\"tag\" *ngIf=\"tag.isChecked\">\n        <div class=\"tag-text\">\n          {{tag.value}}\n          <ion-icon name=\"close-circle\" (click)=\"removeTag(tag)\"></ion-icon>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"wrapper\" *ngIf=\"!presentFilter\">\n  <div class=\"scrolling-wrapper-flexbox loop\">\n    <ion-chip *ngFor=\"let c of categories\" id=\"{{c}}\" (click)=\"selectInternalElement(c)\"\n      [ngClass]=\"{'categorySelected': c == currentCategory}\">\n      <ion-label class=\"interaction\" [ngClass]=\"{'categorySelected': c == currentCategory}\">{{c}}</ion-label>\n    </ion-chip>\n  </div>\n</div>\n\n<ion-content [scrollEvents]=\"true\">\n  \n    <div *ngIf=\"items != null && !emptyList\">\n        <ion-list no-lines id=\"itemlist\" #itemlist>\n            <div class=\"list-container\" *ngFor=\"let c of categories\">\n              <ion-item class=\"label-type ion-text-center\" sticky *ngIf=\"items[c].length > 0 && !presentFilter\">\n                  <div id=\"{{'list_'+c}}\">{{c}}</div>\n              </ion-item>\n              <div class=\"content\" >\n                <div *ngFor=\"let item of items[c]; let i = index\" inViewport \n                [inViewportOptions]=\"{ threshold: [0] }\" (inViewportAction)=\"onIntersection($event)\"\n                class=\"{{c}}\">\n                    <ng-container *ngTemplateOutlet=\"listItem ; context: {$implicit: item} \"></ng-container>\n                </div>\n              </div>\n            </div>\n          </ion-list>    \n    </div>\n    <div class=\"empty-list\" *ngIf=\"items != null && emptyList\">\n        {{'empty_list' | translate}}\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/shared/itemlist/itemlist.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/itemlist/itemlist.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-left: 2%;\n  padding-right: 2%; }\n\nion-searchbar {\n  position: fixed;\n  z-index: 999; }\n\n.column {\n  float: left; }\n\n.c-text {\n  width: 60%;\n  margin-left: 20%; }\n\n.c-btn {\n  width: 40%;\n  margin-bottom: 3%; }\n\n.row {\n  text-align: center;\n  vertical-align: middle;\n  height: 40px; }\n\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.order-icon {\n  transform: rotate(90deg); }\n\nion-list {\n  padding-top: 40px; }\n\n.interaction {\n  color: #11b3ef !important; }\n\n.categorySelected {\n  color: white !important;\n  background-color: #11b3ef !important; }\n\n.label-type {\n  width: 100%;\n  font-weight: bold;\n  --background: #e3e3e3;\n  --color: #707070;\n  font-size: 22px; }\n\n.label-type div {\n    width: 100%; }\n\n.list-container {\n  margin-top: 30px; }\n\nion-toolbar ion-buttons ion-button {\n  font-size: 20px; }\n\nion-title {\n  font-weight: bold; }\n\n.searchspace {\n  background-color: white; }\n\n.higher {\n  height: 100px; }\n\n.wrapper .scrolling-wrapper-flexbox {\n  -ms-box-shadow: 0 10px 20px -20px rgba(0, 0, 0, 0.19), 0 6px 6px -6px rgba(0, 0, 0, 0.23);\n  -o-box-shadow: 0 10px 20px -20px rgba(0, 0, 0, 0.19), 0 6px 6px -6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0 10px 20px -20px rgba(0, 0, 0, 0.19), 0 6px 6px -6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  z-index: 999;\n  position: fixed; }\n\n.wrapper .scrolling-wrapper-flexbox .container {\n    flex: 0 0 auto; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag {\n      flex: 0 0 auto;\n      margin: 8px; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag .tag-text {\n        padding: 4px;\n        color: white;\n        background-color: #11b3ef; }\n\n.wrapper .scrolling-wrapper-flexbox ion-chip {\n    flex: 0 0 auto;\n    background-color: white;\n    font-size: 20px; }\n\n.wrapper .scrolling-wrapper-flexbox ion-chip ion-label {\n      font-size: 16px;\n      padding: 0px 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9zaGFyZWQvaXRlbWxpc3QvaXRlbWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksZ0JBQWU7RUFJZixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksV0FBVTtFQUNWLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksWUFBVztFQUNYLGVBQWM7RUFDZCxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSx5QkFBd0IsRUFDM0I7O0FBQ0Q7RUFDSSxrQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx3QkFBdUI7RUFDdkIscUNBQW9DLEVBQ3ZDOztBQUVEO0VBQ0ksWUFBVztFQUNYLGtCQUFpQjtFQUNqQixzQkFBYTtFQUNiLGlCQUFRO0VBQ1IsZ0JBQWUsRUFLbEI7O0FBVkQ7SUFRUSxZQUFXLEVBQ2Q7O0FBR0w7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFHWSxnQkFBZSxFQUNsQjs7QUFHVDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLHdCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBQ0Q7RUFLUSwwRkFBeUY7RUFDekYseUZBQXdGO0VBQ3hGLHNGQUFxRjtFQUNyRix3QkFBdUI7RUFDdkIsWUFBVztFQUNYLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGdCQUFlLEVBMkJsQjs7QUF4Q0w7SUFnQlksZUFBYyxFQWFqQjs7QUE3QlQ7TUFtQmdCLGVBQWM7TUFDZCxZQUFXLEVBT2Q7O0FBM0JiO1FBdUJvQixhQUFZO1FBQ1osYUFBWTtRQUNaLDBCQUF5QixFQUM1Qjs7QUExQmpCO0lBZ0NZLGVBQWM7SUFDZCx3QkFBdUI7SUFDdkIsZ0JBQWUsRUFLbEI7O0FBdkNUO01Bb0NnQixnQkFBZTtNQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pdGVtbGlzdC9pdGVtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgIC8vIHRvcDogM3B4O1xuICAgIC8vIHRvcDogNThweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uYy10ZXh0IHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5jLWJ0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLnJvdyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ucm93OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLm9yZGVyLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxufVxuaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOjQwcHg7XG59XG5cbi5pbnRlcmFjdGlvbiB7XG4gICAgY29sb3I6ICMxMWIzZWYgIWltcG9ydGFudDtcbn1cblxuLmNhdGVnb3J5U2VsZWN0ZWQge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMWIzZWYgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXR5cGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC0tYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAtLWNvbG9yOiAjNzA3MDcwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcblxuICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuaW9uLXRvb2xiYXJ7XG4gICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VhcmNoc3BhY2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG59XG5cbi5oaWdoZXJ7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbi53cmFwcGVyIHtcblxuICAgIC5zY3JvbGxpbmctd3JhcHBlci1mbGV4Ym94IHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMjBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIC1tcy1ib3gtc2hhZG93OiAwIDEwcHggMjBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAtby1ib3gtc2hhZG93OiAwIDEwcHggMjBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG5cbiAgICAgICAgICAgIC50YWcge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4O1xuXG4gICAgICAgICAgICAgICAgLnRhZy10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMWIzZWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpb24tY2hpcCB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/itemlist/itemlist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/itemlist/itemlist.component.ts ***!
  \*******************************************************/
/*! exports provided: ListItemDirective, ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemDirective", function() { return ListItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filter_page_filter_page_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-page/filter-page.page */ "./src/app/shared/filter-page/filter-page.page.ts");
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



var ListItemDirective = /** @class */ (function () {
    function ListItemDirective() {
    }
    ListItemDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[listItem]'
        })
    ], ListItemDirective);
    return ListItemDirective;
}());

var ItemListComponent = /** @class */ (function () {
    function ItemListComponent(navCtrl, modalController, plt) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.plt = plt;
        this.search = false;
        this.presentFilter = false;
        this.typingTimer = null; // timer identifier
        this.doneTypingInterval = 500; // time in ms, 5 second for example
        this.isIOS = false;
        this.firstAccess = true;
        this.tags = [];
        this.categories = [];
        this.searchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tagsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.expand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contact = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isIOS = this.plt.is('ios');
    }
    Object.defineProperty(ItemListComponent.prototype, "itemlist", {
        set: function (el) {
            var _this = this;
            if (!el) {
                return;
            }
            var element = document.getElementById('itemlist');
            if (element) {
                element.addEventListener('expandeClick', function (returnId) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.expand.emit(returnId.detail);
                        return [2 /*return*/];
                    });
                }); });
                element.addEventListener('contactClick', function (contact) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.contact.emit(JSON.parse(contact.detail));
                        return [2 /*return*/];
                    });
                }); });
            }
        },
        enumerable: true,
        configurable: true
    });
    ItemListComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ItemListComponent.prototype, "emptyList", {
        get: function () {
            var _this = this;
            return this.items === null || !Object.keys(this.items).some(function (k) { return _this.items[k].length > 0; });
        },
        enumerable: true,
        configurable: true
    });
    ItemListComponent.prototype.onSearchEnd = function () {
        this.searchEnd.emit(true);
    };
    ItemListComponent.prototype.onSearchUpdate = function (value) {
        this.searchUpdate.emit(value);
    };
    ItemListComponent.prototype.onTagsChanged = function (values) {
        this.tagsChanged.emit(values);
    };
    ItemListComponent.prototype.toggleSearch = function () {
        this.search = !this.search;
        var searchbar = document.querySelector('.search');
        if (searchbar && searchbar.style.display === 'none') {
            searchbar.style.display = 'unset';
            this.presentFilter = true;
            searchbar.focus();
        }
        else if (searchbar) {
            searchbar.style.display = 'none';
            this.presentFilter = false;
            this.onSearchEnd();
        }
    };
    ItemListComponent.prototype.searchChanged = function (input) {
        var _this = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            var value = input.detail.target.value;
            _this.onSearchUpdate(value);
        }, this.doneTypingInterval);
    };
    ItemListComponent.prototype.removeTag = function (tag) {
        this.tags = this.tags.map(function (item) { return tag.value === item.value
            ? { value: item.value, isChecked: false }
            : { value: item.value, isChecked: item.isChecked }; });
        this.firstAccess = true;
        var even = function (element) {
            // checks whether an element is even
            return element.isChecked;
        };
        if (this.tags.some(even)) {
            this.presentFilter = true;
            this.firstAccess = false;
            this.onTagsChanged(this.tags);
        }
        else {
            this.presentFilter = false;
            this.onTagsChanged();
        }
    };
    ItemListComponent.prototype.selectInternalElement = function (ref) {
        var elem = document.getElementById('list_' + ref);
        if (elem) {
            elem.scrollIntoView(true);
        }
        this.currentCategory = ref;
    };
    ItemListComponent.prototype.filterClicked = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _filter_page_filter_page_page__WEBPACK_IMPORTED_MODULE_2__["FilterPage"],
                            componentProps: {
                                'filters': Object.assign([], this.tags)
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (result) {
                            _this.firstAccess = true;
                            if (result.data) {
                                _this.tags = result.data;
                            }
                            if (result.data && result.data.some(function (e) { return e.isChecked; })) {
                                _this.presentFilter = true;
                                _this.firstAccess = false;
                                _this.onTagsChanged(_this.tags);
                            }
                            else {
                                _this.presentFilter = false;
                                _this.onTagsChanged();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ItemListComponent.prototype.goBack = function () {
        this.navCtrl.back();
    };
    ItemListComponent.prototype.onIntersection = function (_a) {
        var target = _a.target, visible = _a.visible;
        if (visible && this.currentCategory !== target.className) {
            this.currentCategory = target.className;
        }
        // scroll to posiition
        var element = document.getElementById(this.currentCategory);
        if (element) {
            element.scrollIntoView({ block: 'center' });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ItemListComponent.prototype, "currentCategory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "tags", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ItemListComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "searchEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "searchUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "tagsChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "expand", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "contact", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(ListItemDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }),
        __metadata("design:type", Object)
    ], ItemListComponent.prototype, "listItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('itemlist'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ItemListComponent.prototype, "itemlist", null);
    ItemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'itemlist',
            template: __webpack_require__(/*! ./itemlist.component.html */ "./src/app/shared/itemlist/itemlist.component.html"),
            styles: [__webpack_require__(/*! ./itemlist.component.scss */ "./src/app/shared/itemlist/itemlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]])
    ], ItemListComponent);
    return ItemListComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filter_page_filter_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-page/filter-page.page */ "./src/app/shared/filter-page/filter-page.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-in-viewport */ "./node_modules/ng-in-viewport/fesm5/ng-in-viewport.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./itemlist/itemlist.component */ "./src/app/shared/itemlist/itemlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng_in_viewport__WEBPACK_IMPORTED_MODULE_5__["InViewportModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
            ],
            entryComponents: [_itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_7__["ItemListComponent"], _filter_page_filter_page_page__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]],
            declarations: [
                _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_7__["ItemListComponent"], _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_7__["ListItemDirective"],
                _filter_page_filter_page_page__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]
            ],
            exports: [
                _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_7__["ItemListComponent"], _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_7__["ListItemDirective"], _filter_page_filter_page_page__WEBPACK_IMPORTED_MODULE_3__["FilterPage"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-poi-list-poi-module.js.map