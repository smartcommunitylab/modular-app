(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-comune-pages-detail-event-detail-event-module"],{

/***/ "./src/app/module-comune/pages/detail-event/detail-event.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-event/detail-event.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetailEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailEventPageModule", function() { return DetailEventPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_event_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-event.page */ "./src/app/module-comune/pages/detail-event/detail-event.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map/map.module */ "./src/app/module-comune/pages/map/map.module.ts");
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
        component: _detail_event_page__WEBPACK_IMPORTED_MODULE_5__["DetailEventPage"]
    }
];
var DetailEventPageModule = /** @class */ (function () {
    function DetailEventPageModule() {
    }
    DetailEventPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: _map_map_module__WEBPACK_IMPORTED_MODULE_7__["HttpLoaderFactory"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    } }), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_detail_event_page__WEBPACK_IMPORTED_MODULE_5__["DetailEventPage"]]
        })
    ], DetailEventPageModule);
    return DetailEventPageModule;
}());



/***/ }),

/***/ "./src/app/module-comune/pages/detail-event/detail-event.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-event/detail-event.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header no-border translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title *ngIf=\"poi\">\n      {{poi.title[lang]}}\n      </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<!-- <ion-buttons slot=\"start\"> --> \n<!-- <ion-back-button></ion-back-button> -->\n<!-- </ion-buttons> -->\n<ion-content fullscreen=\"true\" padding>\n    <div shape=\"round\" class=\"back-button\" (click)=\"goBack()\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n    </div>\n    <wc-details *ngIf=\"poi\" [img]=\"poi.image\" [stringsinput]=\"stringsContact\" [title]=\"poi.title\" [altImage]=\"altImage\"\n      [subtitle]=\"poi.subtitle\" [text]=\"poi.description\" [info]=\"poi.info\" [contacts]=\"contacts\"\n      [subtitle]=\"poi.subtitle\" [info]=\"poi.info\" [contacts]=\"poi.infos\" [expandable]=false [expanse]=true heading-color=\"#707070\"\n      second-color=\"#11b3ef\"> </wc-details>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/module-comune/pages/detail-event/detail-event.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-event/detail-event.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-button {\n  position: fixed;\n  color: #11b3ef;\n  --background: white;\n  border-radius: 24px;\n  border: 1px solid #11b3ef;\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2RldGFpbC1ldmVudC9kZXRhaWwtZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0VBQ2Qsb0JBQWE7RUFDYixvQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFFMUIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGUtY29tdW5lL3BhZ2VzL2RldGFpbC1ldmVudC9kZXRhaWwtZXZlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBjb2xvcjogIzExYjNlZjtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzExYjNlZjtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cblxuLy8gLmJhY2stYnV0dG9uOmFjdGl2ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMxMWIzZWY7XG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/module-comune/pages/detail-event/detail-event.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/module-comune/pages/detail-event/detail-event.page.ts ***!
  \***********************************************************************/
/*! exports provided: DetailEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailEventPage", function() { return DetailEventPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/db.service */ "./src/app/module-comune/services/db.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-comune/services/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailEventPage = /** @class */ (function () {
    function DetailEventPage(router, route, location, translate, dbService, config) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.translate = translate;
        this.dbService = dbService;
        this.config = config;
        this.contacts = {};
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
    }
    DetailEventPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            if (params.objectIds) {
                _this.manageoLcalId(params.objectIds);
            }
            else if (params) {
                _this.type = params.type;
                _this.dbService.getObjectById(params.id).then(function (data) {
                    _this.poiInput = data.docs[0];
                    _this.buildContacts();
                });
            }
        });
        var element = document.getElementById('poi-list');
        this.translate.get('alt_image_string').subscribe(function (value) {
            _this.altImage = value;
        });
        this.config.getStringContacts(this.translate, this.language).then(function (strings) {
            _this.stringsContact = strings;
        });
    };
    DetailEventPage.prototype.goBack = function () {
        this.location.back();
    };
    DetailEventPage.prototype.manageoLcalId = function (objectIds) {
        var _this = this;
        if (objectIds.length == 1) {
            this.dbService.getObjectByDataId(objectIds[0]).then(function (data) {
                _this.poi = data.docs[0];
                _this.type = data.docs[0].fromTime ? 'EVENT' : 'POI';
                _this.buildContacts();
            });
        }
    };
    // buildContacts() {
    //   if (this.contacts) {
    //     this.contacts['address'] = this.poi.address[this.language];
    //   }
    //   // if (this.type === 'POI') {
    //     if (this.poi.contacts && this.poi.contacts.email && this.poi.contacts.email !== '') {
    //       this.contacts['email'] = this.poi.contacts.email;
    //     }
    //     if (this.poi.contacts.phone && this.poi.contacts.phone && this.poi.contacts.phone !== '') {
    //       this.contacts['phone'] = this.poi.contacts.phone;
    //     }
    //     if (this.poi.contacts.url && this.poi.url && this.poi.url !== '') {
    //       this.contacts['url'] = this.poi.url;
    //     }
    //     this.contacts['distance'] = 0; // TOFIX
    //    if (this.type === 'EVENT') {
    //     if (this.poi.eventPeriod) {
    //       this.contacts['date'] = this.poi.eventPeriod[this.language];
    //     }
    //     if (this.poi.eventTiming) {
    //       this.contacts['time'] = this.poi.eventTiming[this.language];
    //     }
    //     if (this.poi.topics) {
    //       this.contacts['cat'] = this.poi.topics;
    //     }
    //     if (this.poi.cost && this.poi.cost[this.language] !== '') {
    //       this.contacts['price'] = this.poi.cost[this.language];
    //     }
    //   }
    DetailEventPage.prototype.buildContacts = function () {
        var poiElement = {};
        if (this.poiInput) {
            if (this.poiInput.title) {
                poiElement.title = this.poiInput.title[this.language];
            }
            if (this.poiInput.subtitle) {
                poiElement.subtitle = this.poiInput.subtitle[this.language];
            }
            if (this.poiInput.description) {
                poiElement.description = this.poiInput.description[this.language];
            }
            if (this.poiInput.image) {
                poiElement.image = this.poiInput.image;
            }
            if (this.poiInput._id) {
                poiElement.id = this.poiInput._id;
            }
            if (this.poiInput.topics) {
                poiElement.cat = this.poiInput.topics;
            }
            if (this.poiInput.eventPeriod) {
                poiElement.date = this.poiInput.eventPeriod[this.language];
            }
            if (this.poiInput.eventTiming) {
                poiElement.time = this.poiInput.eventTiming[this.language];
            }
            if (this.poiInput.info) {
                poiElement.info = this.poiInput.info[this.language];
            }
            if (this.poiInput.address) {
                poiElement.address = this.poiInput.address[this.language];
            }
            if (this.poiInput.description) {
                poiElement.text = this.poiInput.description[this.language];
            }
            if (this.poiInput.category) {
                poiElement.category = this.poiInput.category;
            }
            if (this.poiInput.classification) {
                poiElement.classification = this.poiInput.classification[this.language];
            }
            if (this.poiInput.url) {
                poiElement.url = this.poiInput.url;
            }
            if (this.poiInput.contacts) {
                if (this.poiInput.contacts.phone) {
                    poiElement.phone = this.poiInput.contacts.phone;
                }
                if (this.poiInput.contacts.email) {
                    poiElement.email = this.poiInput.contacts.email;
                }
            }
            poiElement.infos = JSON.stringify(poiElement);
        }
        this.poi = poiElement;
    };
    DetailEventPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-event',
            template: __webpack_require__(/*! ./detail-event.page.html */ "./src/app/module-comune/pages/detail-event/detail-event.page.html"),
            styles: [__webpack_require__(/*! ./detail-event.page.scss */ "./src/app/module-comune/pages/detail-event/detail-event.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], DetailEventPage);
    return DetailEventPage;
}());



/***/ })

}]);
//# sourceMappingURL=module-comune-pages-detail-event-detail-event-module.js.map