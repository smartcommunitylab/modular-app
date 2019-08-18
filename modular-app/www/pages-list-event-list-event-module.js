(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-event-list-event-module"],{

/***/ "./src/app/module-comune/pages/list-event/filter-page-event/filter-page-event.page.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-event/filter-page-event/filter-page-event.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"closeModal()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of filters\">\n      <ion-label>{{item.value}}</ion-label>\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"item.isChecked\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button class=\"button-interaction\" (click)=\"closeModal()\">{{'cancel_button'|translate}}</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button class=\"button-interaction\" (click)=\"filter()\">{{'ok_button'|translate}}</ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>"

/***/ }),

/***/ "./src/app/module-comune/pages/list-event/filter-page-event/filter-page-event.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-event/filter-page-event/filter-page-event.page.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-interaction {\n  width: 100%;\n  --background:#11b3ef;\n  --color:white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtZXZlbnQvZmlsdGVyLXBhZ2UtZXZlbnQvZmlsdGVyLXBhZ2UtZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLHFCQUFhO0VBQ2IsY0FBUSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLWNvbXVuZS9wYWdlcy9saXN0LWV2ZW50L2ZpbHRlci1wYWdlLWV2ZW50L2ZpbHRlci1wYWdlLWV2ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24taW50ZXJhY3Rpb257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiMxMWIzZWY7XG4gICAgLS1jb2xvcjp3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/module-comune/pages/list-event/filter-page-event/filter-page-event.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/module-comune/pages/list-event/filter-page-event/filter-page-event.page.ts ***!
  \********************************************************************************************/
/*! exports provided: FilterPageEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageEventPage", function() { return FilterPageEventPage; });
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


var FilterPageEventPage = /** @class */ (function () {
    function FilterPageEventPage(navParams, modalCtrl) {
        this.modalCtrl = modalCtrl;
        // componentProps can also be accessed at construction time using NavParams
        console.log(navParams.get('filters'));
    }
    FilterPageEventPage.prototype.ngOnInit = function () {
    };
    FilterPageEventPage.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    FilterPageEventPage.prototype.filter = function () {
        this.modalCtrl.dismiss(this.filters);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterPageEventPage.prototype, "filters", void 0);
    FilterPageEventPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-page-event',
            template: __webpack_require__(/*! ./filter-page-event.page.html */ "./src/app/module-comune/pages/list-event/filter-page-event/filter-page-event.page.html"),
            styles: [__webpack_require__(/*! ./filter-page-event.page.scss */ "./src/app/module-comune/pages/list-event/filter-page-event/filter-page-event.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], FilterPageEventPage);
    return FilterPageEventPage;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/list-event/list-event.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/module-comune/pages/list-event/list-event.module.ts ***!
  \*********************************************************************/
/*! exports provided: HttpLoaderFactory, ListEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventPageModule", function() { return ListEventPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_event_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-event.page */ "./src/app/module-comune/pages/list-event/list-event.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-in-viewport */ "./node_modules/ng-in-viewport/fesm5/ng-in-viewport.js");
/* harmony import */ var _filter_page_event_filter_page_event_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter-page-event/filter-page-event.page */ "./src/app/module-comune/pages/list-event/filter-page-event/filter-page-event.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _list_event_page__WEBPACK_IMPORTED_MODULE_5__["ListEventPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/comune/i18n/', '.json');
}
var ListEventPageModule = /** @class */ (function () {
    function ListEventPageModule() {
    }
    ListEventPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_in_viewport__WEBPACK_IMPORTED_MODULE_9__["InViewportModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    } }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            entryComponents: [_filter_page_event_filter_page_event_page__WEBPACK_IMPORTED_MODULE_10__["FilterPageEventPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_list_event_page__WEBPACK_IMPORTED_MODULE_5__["ListEventPage"], _filter_page_event_filter_page_event_page__WEBPACK_IMPORTED_MODULE_10__["FilterPageEventPage"]]
        })
    ], ListEventPageModule);
    return ListEventPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/list-event/list-event.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/module-comune/pages/list-event/list-event.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-searchbar class=\"search-event\" style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\"\n    (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"interaction\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"filterClicked()\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"toggleSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      {{'EVENTS' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n\n  <ion-searchbar style=\"display: none\" showCancelButton animated (search)=\"toggleSearch()\"\n    (ionInput)=\"searchChanged($event)\" (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n  <div *ngIf=\"!emptyList\">\n  <div class=\"wrapper\" *ngIf=\"presentFilter\">\n      <div class=\"scrolling-wrapper-flexbox loop\">\n        <div class=\"container\" *ngFor=\"let tag of tags\">\n        <div class=\"tag\"  *ngIf=\"tag.isChecked\">\n          <div class=\"tag-text\">\n            {{tag.value}}\n            <ion-icon name=\"close-circle\" (click)=\"removeTag(tag)\"></ion-icon>\n          </div>\n          \n        </div>\n      </div>\n      </div>\n    </div>\n  <div class=\"wrapper\" *ngIf=\"!presentFilter\">\n    <div class=\"scrolling-wrapper-flexbox loop\">\n      <ion-chip *ngFor=\"let c of categories\" (click)=\"selectInternalElement(c)\" [ngClass]=\"{'categorySelected': isSelected(c)}\">\n        <ion-label class=\"interaction\" [ngClass]=\"{'categorySelected': c==actualVisualized}\">{{c}}</ion-label>\n      </ion-chip>\n    </div>\n  </div>\n  <ion-list no-lines id=\"poi-list\">\n    <div *ngFor=\"let c of categories\">\n      <ion-item class=\"label-type ion-text-center\" sticky *ngIf=\"oneElement(c) && !presentFilter\">\n          <div>{{c}}</div>\n      </ion-item>\n      <div class=\"content\">\n        \n        <div *ngFor=\"let poi of showPois[c]; let i = index\">\n          <div class=\"{{poi.category}}\"   inViewport\n          [inViewportOptions]=\"{ threshold: [0] }\" (inViewportAction)=\"onIntersection($event)\">\n            <wc-details [id]=\"poi.id\" [img]=\"poi.image\" [stringsinput]=\"stringsContact\" [title]=\"poi.title\"\n              [altImage]=\"altImage\" [stringsinput]=\"stringsContact\" [title]=\"poi.title\" [altImage]=\"altImage\"\n              [subtitle]=\"poi.subtitle\" [text]=\"poi.text\" [info]=\"poi.info\" [contacts]=\"poi.infos\"\n              heading-color=\"#707070\" second-color=\"#11b3ef\" expandable=true expanse=false></wc-details>\n            <div class=\"spacing\" *ngIf=\"i == showPois.length - 1\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</div>\n<div class=\"empty-list\" *ngIf=\"emptyList\">\n    {{'empty_list' | translate}}\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-comune/pages/list-event/list-event.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/module-comune/pages/list-event/list-event.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-left: 2%;\n  padding-right: 2%; }\n\nion-searchbar {\n  position: fixed;\n  z-index: 999; }\n\n.column {\n  float: left; }\n\n.c-text {\n  width: 60%;\n  margin-left: 20%; }\n\n.c-btn {\n  width: 40%;\n  margin-bottom: 3%; }\n\n.row {\n  text-align: center;\n  vertical-align: middle;\n  height: 40px; }\n\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.order-icon {\n  transform: rotate(90deg); }\n\nion-list {\n  padding-top: 40px; }\n\n.wrapper .scrolling-wrapper-flexbox {\n  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n  width: 100%;\n  display: flex;\n  overflow-x: auto;\n  z-index: 999;\n  position: fixed; }\n\n.wrapper .scrolling-wrapper-flexbox .container {\n    flex: 0 0 auto; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag {\n      flex: 0 0 auto;\n      margin: 8px; }\n\n.wrapper .scrolling-wrapper-flexbox .container .tag .tag-text {\n        padding: 4px;\n        color: white;\n        background-color: #11b3ef; }\n\n.wrapper .scrolling-wrapper-flexbox ion-chip {\n    flex: 0 0 auto;\n    background-color: white; }\n\n.interaction {\n  color: #11b3ef; }\n\n.categorySelected {\n  color: white !important;\n  background-color: #11b3ef !important; }\n\n.label-type {\n  width: 100%;\n  font-weight: bold;\n  --background: #e3e3e3;\n  --color: #707070;\n  font-size: 22px; }\n\n.label-type div {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtZXZlbnQvbGlzdC1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZTtFQUNmLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGdCQUFlO0VBRWYsYUFBWSxFQUNmOztBQUNEO0VBQ0ksWUFBVSxFQUNiOztBQUNEO0VBQ0ksV0FBVTtFQUNWLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixrQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxlQUFhO0VBQ2IsWUFBVSxFQUNiOztBQUNEO0VBQ0kseUJBQXdCLEVBQzNCOztBQUNEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUNEO0VBS1EsK0VBQThFO0VBQzlFLDhFQUE2RTtFQUM3RSwyRUFBMEU7RUFDMUUsd0JBQXNCO0VBQ3RCLFlBQVc7RUFDWCxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixnQkFBZSxFQWtCbEI7O0FBL0JMO0lBZVksZUFBYyxFQVdqQjs7QUExQlQ7TUFpQlksZUFBYztNQUNkLFlBQVcsRUFNZDs7QUF4QlQ7UUFvQmdCLGFBQVk7UUFDaEIsYUFBWTtRQUNaLDBCQUEyQixFQUMxQjs7QUF2QmI7SUE0QlksZUFBYztJQUNkLHdCQUF1QixFQUMxQjs7QUFHVDtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSx3QkFBc0I7RUFDdEIscUNBQW1DLEVBQ3RDOztBQUNEO0VBQ0ksWUFBVztFQUNYLGtCQUFpQjtFQUNqQixzQkFBYTtFQUNiLGlCQUFRO0VBQ1IsZ0JBQWUsRUFJbEI7O0FBVEQ7SUFPUSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2xpc3QtZXZlbnQvbGlzdC1ldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OjIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xufVxuaW9uLXNlYXJjaGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC8vIHRvcDogNThweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG4uY29sdW1uIHtcbiAgICBmbG9hdDpsZWZ0O1xufVxuLmMtdGV4dHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5jLWJ0biB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW4tYm90dG9tOjMlO1xufVxuLnJvd3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4ucm93OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OnRhYmxlO1xuICAgIGNsZWFyOmJvdGg7XG59XG4ub3JkZXItaWNvbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXG59XG5pb24tbGlzdHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi53cmFwcGVyIHtcblxuICAgIC5zY3JvbGxpbmctd3JhcHBlci1mbGV4Ym94IHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgLW1zLWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAtby1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAudGFne1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgICAgIC50YWctdGV4dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgICMxMWIzZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaW50ZXJhY3Rpb24ge1xuICAgIGNvbG9yOiAjMTFiM2VmO1xufVxuLmNhdGVnb3J5U2VsZWN0ZWQge1xuICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExYjNlZiFpbXBvcnRhbnQ7XG59XG4ubGFiZWwtdHlwZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgLS1jb2xvcjogIzcwNzA3MDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/module-comune/pages/list-event/list-event.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module-comune/pages/list-event/list-event.page.ts ***!
  \*******************************************************************/
/*! exports provided: ListEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventPage", function() { return ListEventPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-comune/services/config.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/module-comune/services/utils.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _filter_page_event_filter_page_event_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-page-event/filter-page-event.page */ "./src/app/module-comune/pages/list-event/filter-page-event/filter-page-event.page.ts");
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










var ListEventPage = /** @class */ (function () {
    function ListEventPage(globalUtils, loading, navCtrl, modalController, dbService, alertCtrl, router, route, alert, config, events, translate, callNumber, utils) {
        var _this_1 = this;
        this.globalUtils = globalUtils;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.route = route;
        this.alert = alert;
        this.config = config;
        this.events = events;
        this.translate = translate;
        this.callNumber = callNumber;
        this.utils = utils;
        this.showPois = [];
        this.fullPois = [];
        this.tags = [];
        this.firstAccess = true;
        this.search = false;
        this.isLoading = true;
        this.fullCategories = [];
        this.categories = [];
        this.presentFilter = false;
        this.emptyList = false;
        this.doneTypingInterval = 500; //time in ms, 5 second for example
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
        events.subscribe('radio:selected', function (x) {
            _this_1.changeCategory(x);
        });
    }
    ListEventPage.prototype.ngOnInit = function () {
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
    ListEventPage.prototype.onScroll = function (e) {
        // this.isScrolledIntoView();
    };
    ListEventPage.prototype.buildFilter = function () {
        var array = this.fullPois.map(function (item) { return item.cat; });
        // var arrayMultipleEvent = this.fullPois.filter(item => item.parentObjectName !=null);
        // var arrayMultipleEventTags = arrayMultipleEvent.map(item => {
        //   return item.parentObjectName
        //  });
        // array=array.concat(arrayMultipleEventTags);
        var newArray1 = array.flat();
        var newArray = newArray1.filter(function (value, index, self) {
            return self.indexOf(value) === index && value != undefined;
        });
        var value = this.firstAccess ? false : true;
        var returnArray = newArray.map(function (item) {
            return {
                "value": item,
                "isChecked": value
            };
        });
        //addmultipleEventTag
        return returnArray;
    };
    ListEventPage.prototype.ionViewDidEnter = function () {
        var _this_1 = this;
        if (this.category && this.category.query) {
            this.dbService.synch().then(function () {
                _this_1.dbService.getObjectByQuery(_this_1.category.query).then(function (data) {
                    if (data.docs.length > 0) {
                        _this_1.fullPois = data.docs.map(function (x) { return _this_1.convertPois(x); });
                        _this_1.subCategories(_this_1.fullPois);
                        _this_1.buildShowPois();
                        _this_1.tags = _this_1.buildFilter();
                    }
                    else {
                        _this_1.emptyList = true;
                    }
                    _this_1.isLoading = false;
                    _this_1.utils.hideLoading();
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
            element.addEventListener('tagClicked', function (tag) { return __awaiter(_this_1, void 0, void 0, function () {
                var tagSelected;
                return __generator(this, function (_a) {
                    tagSelected = tag.detail;
                    this.tags = this.tags.map(function (item) {
                        if (item.value == tagSelected)
                            return {
                                "value": tagSelected,
                                "isChecked": true
                            };
                        else {
                            return {
                                "value": item.value,
                                "isChecked": item.isChecked
                            };
                        }
                    });
                    this.presentFilter = true;
                    this.firstAccess = false;
                    this.buildShowPois(this.tags);
                    console.log(tagSelected);
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
    ListEventPage.prototype.selectInternalElement = function (ref) {
        var elem = document.getElementsByClassName(ref);
        if (elem.length > 0) {
            var yOffset = elem[0].offsetTop;
            this.content.scrollToPoint(0, yOffset, 0);
            // var scrollheight = elem[0].getBoundingClientRect().top;
            // this.content.scrollToPoint(0, scrollheight, 1000);
        }
    };
    ListEventPage.prototype.isScrolledIntoView = function () {
        var element = document.querySelector('.poi');
        var position = element[0].getBoundingClientRect();
        // checking whether fully visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            console.log('Element is fully visible in screen');
        }
        // checking for partial visibility
        if (position.top < window.innerHeight && position.bottom >= 0) {
            console.log('Element is partially visible in screen');
        }
    };
    ListEventPage.prototype.onIntersection = function (_a) {
        var target = _a.target, visible = _a.visible;
        if (visible && this.actualVisualized != target.className)
            this.actualVisualized = target.className;
        console.log(target + "" + visible);
    };
    ListEventPage.prototype.isSelected = function (category) {
        return category == this.actualVisualized;
    };
    ListEventPage.prototype.subCategories = function (array) {
        var _this_1 = this;
        array.forEach(function (element) {
            if (!_this_1.fullCategories.includes(element.category)) {
                _this_1.fullCategories.push(element.category);
            }
        });
        this.categories = this.fullCategories;
        if (this.categories.length > 0)
            setTimeout(function () { return _this_1.actualVisualized = _this_1.categories[0]; }, 500);
    };
    ListEventPage.prototype.buildShowPois = function (filters) {
        var _this_1 = this;
        this.showPois = [];
        this.fullPois.forEach(function (p) {
            if (!_this_1.showPois[p.category]) {
                _this_1.showPois[p.category] = [];
            }
            if (filters ? filters.filter(function (item) {
                return (item.isChecked && p.cat.filter(function (cat) { return cat == item.value; }).length > 0);
                // if (p.cat)
                // return (item.isChecked && (p.cat.filter(cat => cat == item.value).length > 0 || p.parentObjectName == item.value))
                // else (item.isChecked &&   p.parentObjectName == item.value)
            }).length > 0 : true) {
                _this_1.showPois[p.category].push(p);
            }
        });
        //orderArray
        this.orderArray('asc', this);
    };
    ListEventPage.prototype.convertPois = function (x) {
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
            if (x.fromTime) {
                poiElement.fromTime = x.fromTime;
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
            if (x.topics) {
                poiElement.cat = x.topics;
            }
            else
                poiElement["cat"] = [];
            if (x.eventPeriod) {
                if (x.eventPeriod[this.language])
                    poiElement.date = x.eventPeriod[this.language];
                else
                    poiElement.date = x.eventPeriod["it"];
            }
            if (x.eventTiming) {
                if (x.eventTiming[this.language])
                    poiElement.time = x.eventTiming[this.language];
                else
                    poiElement.time = x.eventTiming["it"];
            }
            if (x.info) {
                if (x.info[this.language])
                    poiElement.info = x.info[this.language];
                else
                    poiElement.info = x.info["it"];
            }
            if (x.address) {
                if (x.address[this.language])
                    poiElement.address = x.address[this.language];
                else
                    poiElement.address = x.address["it"];
            }
            if (x.description) {
                if (x.description[this.language])
                    poiElement.text = x.description[this.language];
                else
                    poiElement.text = x.description["it"];
            }
            if (x.parentEventId) {
                if (poiElement.cat)
                    poiElement.cat.push(JSON.parse(x.parentEventId).objectName);
                else
                    poiElement["cat"] = [JSON.parse(x.parentEventId).objectName];
                // poiElement.parentObjectName = JSON.parse(x.parentEventId).objectName;
            }
            //TO DO
            if (x.category) {
                if (x.category == 'event')
                    poiElement.category = 'Eventi Principali';
                else
                    poiElement.category = x.category;
            }
            if (x.classification) {
                if (x.classification[this.language])
                    poiElement.classification = x.classification[this.language];
                else
                    poiElement.classification = x.classification["it"];
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
    ListEventPage.prototype.goToDetail = function (id) {
        this.router.navigate(['/detail-event'], { queryParams: { id: id, type: this.type } });
    };
    ListEventPage.prototype.toggleSearch = function () {
        var _this_1 = this;
        this.search = !this.search;
        var searchbar = document.querySelector('.search-event');
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
                    return (el.category == c);
                });
            });
        }
    };
    ListEventPage.prototype.oneElement = function (category) {
        return (this.showPois[category].length > 0);
    };
    ListEventPage.prototype.searchChanged = function (input) {
        var _this_1 = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            var value = input.detail.target.value;
            var _this = _this_1;
            _this.categories.forEach(function (c) {
                _this_1.showPois[c] = _this_1.fullPois.filter(function (el) {
                    if (el.title)
                        return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1 && el.category == c);
                    return false;
                });
            });
        }, this.doneTypingInterval);
    };
    ListEventPage.prototype.filterClicked = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _filter_page_event_filter_page_event_page__WEBPACK_IMPORTED_MODULE_9__["FilterPageEventPage"],
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
    // filterClicked() {
    //   this.buildAlert('filter');
    // }
    ListEventPage.prototype.removeTag = function (tag) {
        this.tags = this.tags.filter(function (item) { return item.value != tag.value; });
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
    ListEventPage.prototype.buildAlert = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this, alInputs, title, handlerFunc, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _this = this;
                        alInputs = [];
                        if (type.indexOf('cat') > -1) {
                            handlerFunc = this.changeCategory;
                            title = 'Seleziona categoria';
                            _this.categories.forEach(function (c) {
                                alInputs.push({
                                    name: c,
                                    type: 'radio',
                                    label: c,
                                    value: c,
                                    checked: false
                                });
                            });
                            alInputs.push({
                                name: 'tutto',
                                type: 'radio',
                                label: 'Tutto',
                                value: 'Tutto',
                                checked: true
                            });
                        }
                        else {
                            handlerFunc = this.orderArray;
                            title = 'Ordina per';
                            alInputs = [
                                {
                                    name: 'asc',
                                    type: 'radio',
                                    label: 'A-Z',
                                    value: 'asc',
                                    checked: true
                                },
                                {
                                    name: 'desc',
                                    type: 'radio',
                                    label: 'Z-A',
                                    value: 'desc',
                                    checked: false
                                }
                            ];
                        }
                        return [4 /*yield*/, this.alert.create({
                                header: title,
                                inputs: alInputs,
                                buttons: [
                                    {
                                        text: 'Annulla',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                        }
                                    },
                                    {
                                        text: 'OK',
                                        handler: function (data) {
                                            handlerFunc(data, _this);
                                        }
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
    ListEventPage.prototype.orderArray = function (condition, _this) {
        _this.categories.forEach(function (c) {
            if (condition.indexOf('asc') > -1) {
                _this.showPois[c] = _this.showPois[c].sort(function (a, b) { return (a.fromTime > b.fromTime) ? 1 : -1; });
            }
            else {
                _this.showPois[c] = _this.showPois[c].sort(function (a, b) { return (a.fromTime < b.fromTime) ? 1 : -1; });
            }
        });
    };
    ListEventPage.prototype.showPopover = function () {
        this.buildAlert('cat');
        // const popover = await this.popoverController.create({
        //   component: PopoverComponent,
        //   componentProps: {elements: this.fullCategories, controller: this.popoverController},
        //   translucent: true
        // });
        // return await popover.present();
    };
    ListEventPage.prototype.changeCategory = function (cat, _this) {
        _this.categories = [];
        if (cat && cat.indexOf('Tutto') > -1) {
            _this.categories = _this.fullCategories;
        }
        else {
            _this.categories.push(cat);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"])
    ], ListEventPage.prototype, "content", void 0);
    ListEventPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-event',
            template: __webpack_require__(/*! ./list-event.page.html */ "./src/app/module-comune/pages/list-event/list-event.page.html"),
            styles: [__webpack_require__(/*! ./list-event.page.scss */ "./src/app/module-comune/pages/list-event/list-event.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]])
    ], ListEventPage);
    return ListEventPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-list-event-list-event-module.js.map