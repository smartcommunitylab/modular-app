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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list class=\"route-list space-from-top\" *ngIf=\"view == 'list'\">\n        <ion-item *ngFor=\"let elem of elements\" (click)=\"selectElement(elem)\">\n            <div class=\"card card-tt\" >{{elem.title}}</div>\n        </ion-item>\n    </ion-list>\n    <ion-grid class=\"space-from-top\" *ngIf=\"view == 'grid'\">\n        <ion-row class=\"row route-grid-row\" *ngFor=\"let row of gridRows\">\n            <ion-col class=\"col text-center\" *ngFor=\"let elem of row\" (click)=\"selectElement(elem)\">\n                <div class=\"route-grid-element\" *ngIf=\"elem.label\" >\n                    <span *ngIf=\"!elem.gridCode\">{{elem.label}}</span>\n                    <span *ngIf=\"elem.gridCode\"><i class=\"icon\"></i></span>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-trasporti/pages/transport-list/transport-list.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/transport-list/transport-list.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".route-grid-row {\n  margin-top: 8px !important;\n  margin-bottom: 8px !important; }\n\n.route-grid-element {\n  width: 60px;\n  height: 60px;\n  margin: auto;\n  border: 2px solid transparent;\n  border-radius: 50%;\n  text-align: center;\n  color: #fff;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtdHJhc3BvcnRpL3BhZ2VzL3RyYW5zcG9ydC1saXN0L3RyYW5zcG9ydC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEwQjtFQUMxQiw4QkFBNkIsRUFDOUI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGFBQVk7RUFDWiw4QkFBNkI7RUFDN0IsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsa0VBQWlFLEVBQ2xFIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLXRyYXNwb3J0aS9wYWdlcy90cmFuc3BvcnQtbGlzdC90cmFuc3BvcnQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91dGUtZ3JpZC1yb3cge1xuICAgIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAucm91dGUtZ3JpZC1lbGVtZW50IHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XG4gIH0iXX0= */"

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
    function TransportListPage(route, transport, router) {
        this.route = route;
        this.transport = transport;
        this.router = router;
        this.min_grid_cell_width = 90;
        this.title = null;
        this.view = 'list';
        this.hasMap = false;
        this.allMarkers = null;
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
            if (!this.groupId) {
                this.groupId = "no-group";
            }
            this.router.navigate(['/tt', e.ref, e.agencyId, this.groupId, e.route.routeSymId, e.title]);
            // group with single route: go to table
        }
        else if (e.group.routes != null && e.group.routes.length == 1) {
            this.router.navigate(['/tt', e.ref, e.agencyId, e.group.label, e.group.routes[0].routeSymId, e.title]);
            // group with multiple elements: go to group
        }
        else {
            this.router.navigate(['/ttgroup', e.ref, e.agencyId, this.groupId ? (this.groupId + ',' + e.group.label) : e.group.label]);
        }
    };
    TransportListPage.prototype.loadList = function () {
        var _this = this;
        this.transport.getTTData(this.ref, this.agencyId, this.groupId).then(function (res) {
            if (res) {
                _this.hasMap = res.hasMap;
                _this.markerIcon = res.markerIcon;
                _this.icon = res.icon;
                // var title = $filter('translate')((<any>data).title ? (<any>data).title : (<any>data).label);
                // if (title.length < 5) title = $filter('translate')('lbl_line') + ' ' + title;
                var title = "Todo";
                _this.title = title;
                _this.elements = _this.transport.flattenData(res, _this.ref, _this.agencyId);
                _this.view = res.view ? res.view : 'list';
                if (_this.view == 'grid') {
                    _this.prepareGrid();
                }
            }
        });
        // if (this.agencyId == null && this.groupId == null) {
        //   // main data
        //   var data = this.transport.getTTData(this.ref);
        // } else if (this.agencyId != null) {
        //   // specific data
        //   if (this.groupId != null) {
        //     // specific group
        //     var data = this.transport.getTTData(this.ref, this.agencyId, this.groupId);
        //   } else {
        //     // agency
        //     var data = this.transport.getTTData(this.ref, this.agencyId);
        //   }
        // }
    };
    TransportListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transport-list',
            template: __webpack_require__(/*! ./transport-list.page.html */ "./src/app/module-trasporti/pages/transport-list/transport-list.page.html"),
            styles: [__webpack_require__(/*! ./transport-list.page.scss */ "./src/app/module-trasporti/pages/transport-list/transport-list.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_transport_service__WEBPACK_IMPORTED_MODULE_2__["TransportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TransportListPage);
    return TransportListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-transport-list-transport-list-module.js.map