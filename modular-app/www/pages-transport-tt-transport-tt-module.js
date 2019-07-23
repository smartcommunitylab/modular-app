(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transport-tt-transport-tt-module"],{

/***/ "./src/app/module-trasporti/pages/transport-tt/transport-tt.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/transport-tt/transport-tt.module.ts ***!
  \****************************************************************************/
/*! exports provided: HttpLoaderFactory, TransportTtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportTtPageModule", function() { return TransportTtPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transport_tt_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transport-tt.page */ "./src/app/module-trasporti/pages/transport-tt/transport-tt.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
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
        component: _transport_tt_page__WEBPACK_IMPORTED_MODULE_5__["TransportTtPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, "./assets/trasporti/i18n/", ".json");
}
var TransportTtPageModule = /** @class */ (function () {
    function TransportTtPageModule() {
    }
    TransportTtPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    }, isolate: true
                }), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_transport_tt_page__WEBPACK_IMPORTED_MODULE_5__["TransportTtPage"]]
        })
    ], TransportTtPageModule);
    return TransportTtPageModule;
}());



/***/ }),

/***/ "./src/app/module-trasporti/pages/transport-tt/transport-tt.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/transport-tt/transport-tt.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div  id=\"table-tt\"><wc-trasporti-table  *ngIf=\"data\" [color]=\"color\" [data]=\"data\" [title]=\"title\" [day]=\"day\" [arrows]=\"true\" [littletable]=\"littletable\" [showtrips]=\"showtrips\" [labeldelay]=\"labeldelay\" [labeltrips]=\"labeltrips\"  [accessibility]=\"accessibility\" [showtrips]=\"showtrips\" [tripsvalue]=\"tripsvalue\"></wc-trasporti-table></div>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/module-trasporti/pages/transport-tt/transport-tt.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/transport-tt/transport-tt.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS10cmFzcG9ydGkvcGFnZXMvdHJhbnNwb3J0LXR0L3RyYW5zcG9ydC10dC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/module-trasporti/pages/transport-tt/transport-tt.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/module-trasporti/pages/transport-tt/transport-tt.page.ts ***!
  \**************************************************************************/
/*! exports provided: TransportTtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportTtPage", function() { return TransportTtPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_transport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/transport.service */ "./src/app/module-trasporti/services/transport.service.ts");
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




var TransportTtPage = /** @class */ (function () {
    function TransportTtPage(trasportiService, loadingController, route) {
        this.trasportiService = trasportiService;
        this.loadingController = loadingController;
        this.route = route;
        this.date = new Date();
        this.color = "#123456";
        this.title = "";
        this.day = this.date.getTime().toString();
        this.littletable = true; //change font size of table
        this.showtrips = true; // show kind of transportation for course. Used for train
        this.labeldelay = "RITARDO";
        this.labeltrips = "TIPO";
        this.accessibility = false; // shows coulumn of accessibility
        this.data = "";
    }
    TransportTtPage.prototype.ngOnInit = function () {
        this.agencyId = this.route.snapshot.paramMap.get('agencyId');
        ;
        this.routeId = this.route.snapshot.paramMap.get('routeId');
        this.title = this.route.snapshot.paramMap.get('title');
        this.getTT(this.date.getTime());
    };
    TransportTtPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var trasportiTable = document.getElementById('table-tt');
        trasportiTable.addEventListener('changeDateEvent', function (event) {
            if (event.detail == "prevDate")
                _this.date.setDate(_this.date.getDate() - 1);
            if (event.detail == "nextDate")
                _this.date.setDate(_this.date.getDate() + 1);
            _this.day = _this.date.getTime().toString();
            _this.getTT(_this.date.getTime());
        });
        trasportiTable.addEventListener('showStopEvent', function () {
            console.log("stop click");
        });
    };
    TransportTtPage.prototype.getTT = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        // var that = this;
                        this.trasportiService.getTT(this.agencyId, this.routeId, date).then(function (data) {
                            // get data with delay
                            _this.data = JSON.stringify(data);
                            //get type
                            var str = "";
                            for (var i = 0; i < data.tripIds.length; i++) {
                                str = str + _this.trasportiService.getTripText(_this.agencyId, data.tripIds[0]);
                            }
                            console.log(str);
                            _this.tripsvalue = str;
                            if (_this.tripsvalue == "") {
                                _this.showtrips = false;
                            }
                            loading.dismiss();
                        }, function (err) {
                            console.log(err);
                            _this.data = null;
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    TransportTtPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transport-tt',
            template: __webpack_require__(/*! ./transport-tt.page.html */ "./src/app/module-trasporti/pages/transport-tt/transport-tt.page.html"),
            styles: [__webpack_require__(/*! ./transport-tt.page.scss */ "./src/app/module-trasporti/pages/transport-tt/transport-tt.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_transport_service__WEBPACK_IMPORTED_MODULE_1__["TransportService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TransportTtPage);
    return TransportTtPage;
}());

;


/***/ })

}]);
//# sourceMappingURL=pages-transport-tt-transport-tt-module.js.map