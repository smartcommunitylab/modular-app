(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transport-list-transport-list-module"],{

/***/ "./src/app/module-trasporti/pages/transport-list/transport-list.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/transport-list/transport-list.module.ts ***!
  \********************************************************************************/
/*! exports provided: HttpLoaderFactory, TransportListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportListPageModule", function() { return TransportListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transport_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transport-list.page */ "./src/app/module-trasporti/pages/transport-list/transport-list.page.ts");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _transport_list_page__WEBPACK_IMPORTED_MODULE_5__["TransportListPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, "./assets/trasporti/i18n/", ".json");
}
var TransportListPageModule = /** @class */ (function () {
    function TransportListPageModule() {
    }
    TransportListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }, isolate: true
                }), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_transport_list_page__WEBPACK_IMPORTED_MODULE_5__["TransportListPage"]]
        })
    ], TransportListPageModule);
    return TransportListPageModule;
}());



/***/ }),

/***/ "./src/app/module-trasporti/pages/transport-list/transport-list.page.html":
/*!********************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/transport-list/transport-list.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n        <ion-buttons slot=\"start\">\n                <ion-back-button></ion-back-button>\n            </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div>\n        <div class=\"box-line\" [ngStyle]=\"getStyle()\">{{line}}</div>\n        <div class=\"ion-text-center direction\">{{'choose_direction_label'|translate}}</div>\n    </div>\n    <ion-list class=\"route-list space-from-top\" *ngIf=\"view == 'list'\">\n        <ion-item *ngFor=\"let elem of elements\" (click)=\"selectElement(elem)\">\n            <div class=\"card card-tt\" >{{elem.title}}</div>\n        </ion-item>\n    </ion-list>\n    <ion-grid class=\"space-from-top\" *ngIf=\"view == 'grid'\">\n        <ion-row class=\"row route-grid-row\" *ngFor=\"let row of gridRows\">\n            <ion-col class=\"col text-center\" *ngFor=\"let elem of row\" (click)=\"selectElement(elem)\">\n                <div class=\"route-grid-element\" *ngIf=\"elem.label\" >\n                    <span *ngIf=\"!elem.gridCode\">{{elem.label}}</span>\n                    <span *ngIf=\"elem.gridCode\"><i class=\"icon\"></i></span>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-trasporti/pages/transport-list/transport-list.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/transport-list/transport-list.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".route-grid-row {\n  margin-top: 8px !important;\n  margin-bottom: 8px !important; }\n\n.route-grid-element {\n  width: 60px;\n  height: 60px;\n  margin: auto;\n  border: 2px solid transparent;\n  border-radius: 50%;\n  text-align: center;\n  color: #fff;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; }\n\n.direction {\n  color: #9f9f9f;\n  font-weight: bold;\n  font-size: 16px; }\n\n.box-line {\n  width: 100px;\n  height: 100px;\n  border: 1px solid black;\n  border-radius: 4px;\n  margin: auto;\n  line-height: 85px;\n  text-align: center;\n  font-size: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtdHJhc3BvcnRpL3BhZ2VzL3RyYW5zcG9ydC1saXN0L3RyYW5zcG9ydC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEwQjtFQUMxQiw4QkFBNkIsRUFDOUI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGFBQVk7RUFDWiw4QkFBNkI7RUFDN0IsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsa0VBQWlFLEVBQ2xFOztBQUVIO0VBQ0ksZUFBYTtFQUNiLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS10cmFzcG9ydGkvcGFnZXMvdHJhbnNwb3J0LWxpc3QvdHJhbnNwb3J0LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdXRlLWdyaWQtcm93IHtcbiAgICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnJvdXRlLWdyaWQtZWxlbWVudCB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xuICB9XG5cbi5kaXJlY3Rpb24ge1xuICAgIGNvbG9yOiM5ZjlmOWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5ib3gtbGluZXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiA4NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/module-trasporti/pages/transport-list/transport-list.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/transport-list/transport-list.page.ts ***!
  \******************************************************************************/
/*! exports provided: TransportListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportListPage", function() { return TransportListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_transport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/transport.service */ "./src/app/module-trasporti/services/transport.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-trasporti/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransportListPage = /** @class */ (function () {
    function TransportListPage(route, transport, translate, config, router) {
        this.route = route;
        this.transport = transport;
        this.translate = translate;
        this.config = config;
        this.router = router;
        this.min_grid_cell_width = 90;
        this.title = null;
        this.view = 'list';
        this.hasMap = false;
        this.allMarkers = null;
        var language = this.config.getLanguage();
        this.translate.use(language);
    }
    TransportListPage.prototype.ngOnInit = function () {
        this.ref = this.route.snapshot.paramMap.get('ref');
        this.agencyId = this.route.snapshot.paramMap.get('agencyId');
        ;
        this.groupId = this.route.snapshot.paramMap.get('groupId');
        this.loadList();
    };
    TransportListPage.prototype.prepareGrid = function () {
        var cols = Math.floor(window.innerWidth / this.min_grid_cell_width);
        var gridRows = [];
        var row = [];
        gridRows.push(row);
        for (var i = 0; i < this.elements.length; i++) {
            row.push(this.elements[i]);
            if ((i + 1) % cols == 0) {
                row = [];
                gridRows.push(row);
            }
        }
        for (var i = row.length; i < cols; i++) {
            row.push({});
        }
        this.gridRows = gridRows;
    };
    TransportListPage.prototype.selectElement = function (e) {
        // route element: go to table
        if (e.route != null) {
            this.router.navigate(['/tt', e.ref, e.agencyId, this.groupId, e.route.routeSymId, e.title, this.color]);
            // group with single route: go to table
        }
        else if (e.group.routes != null && e.group.routes.length == 1) {
            this.router.navigate(['/tt', e.ref, e.agencyId, e.group.label, e.group.routes[0].routeSymId, e.title, this.color]);
            // group with multiple elements: go to group
        }
        else {
            this.router.navigate(['/ttgroup', e.ref, e.agencyId, this.groupId ? (this.groupId + ',' + e.group.label) : e.group.label]);
        }
    };
    TransportListPage.prototype.getStyle = function () {
        return { 'border': '10px solid ' + this.color };
    };
    TransportListPage.prototype.loadList = function () {
        var _this = this;
        this.transport.getTTData(this.ref, this.agencyId, this.groupId).then(function (res) {
            if (res) {
                _this.color = res.color;
                _this.hasMap = res.hasMap;
                _this.markerIcon = res.markerIcon;
                _this.icon = res.icon;
                _this.line = _this.groupId ? _this.groupId : "";
                _this.title = _this.line;
                _this.translate.get('timetable_label').subscribe(function (value) {
                    _this.title = _this.title + " - " + value;
                });
                _this.elements = _this.transport.flattenData(res, _this.ref, _this.agencyId);
                _this.view = res.view ? res.view : 'list';
                if (_this.view == 'grid') {
                    _this.prepareGrid();
                }
            }
        });
    };
    TransportListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transport-list',
            template: __webpack_require__(/*! ./transport-list.page.html */ "./src/app/module-trasporti/pages/transport-list/transport-list.page.html"),
            styles: [__webpack_require__(/*! ./transport-list.page.scss */ "./src/app/module-trasporti/pages/transport-list/transport-list.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_transport_service__WEBPACK_IMPORTED_MODULE_2__["TransportService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TransportListPage);
    return TransportListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-transport-list-transport-list-module.js.map