(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notizie-notizie-module"],{

/***/ "./src/app/module-info/pages/notizie/notizie.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/module-info/pages/notizie/notizie.module.ts ***!
  \*************************************************************/
/*! exports provided: HttpLoaderFactory, NotiziePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotiziePageModule", function() { return NotiziePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notizie_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notizie.page */ "./src/app/module-info/pages/notizie/notizie.page.ts");
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
        component: _notizie_page__WEBPACK_IMPORTED_MODULE_5__["NotiziePage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/info/i18n/', '.json');
}
var NotiziePageModule = /** @class */ (function () {
    function NotiziePageModule() {
    }
    NotiziePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    } }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_notizie_page__WEBPACK_IMPORTED_MODULE_5__["NotiziePage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], NotiziePageModule);
    return NotiziePageModule;
}());



/***/ }),

/***/ "./src/app/module-info/pages/notizie/notizie.page.html":
/*!*************************************************************!*\
  !*** ./src/app/module-info/pages/notizie/notizie.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [ngClass]=\"{'higher': searchAndIos()}\" >\n    <ion-searchbar class=\"search-notizie\" [ngClass]=\"{'searchspace': isRicercaOpen}\" style=\"display: none\"  showCancelButton=\"always\" animated (ionChange)=\"Ricerca()\" (ionCancel)=\"OpenCloseRicerca()\"  placeholder=\"Cerca\" id=\"barraDiRicerca\"\n    [(ngModel)]=\"daCercare\"></ion-searchbar>\n  <ion-toolbar>\n\n      <ion-buttons slot=\"start\">\n        <ion-back-button class=\"interaction\"></ion-back-button>\n      </ion-buttons>\n      <ion-title float-left id=\"TITOLO\"> {{'avvisi_label'|translate}}\n      </ion-title>\n      <ion-buttons slot=\"end\" *ngIf=\"!isRicercaOpen\">\n        <ion-button fill=\"clear\" float-right (click)=\"OpenCloseRicerca()\" id=\"btnImpostazioniRicerca\" color=\"light\">\n          <svg width='24' height='24' viewBox='0 0 24 24'>\n            <path fill='none' d='M0 0h24v24H0V0z' />\n            <path\n              d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />\n          </svg>\n        </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n    <div class=\"ion-padding\" *ngIf=\"!emptyList; else emptyListTemplate\">\n      <div *ngFor=\"let item of datiRicerca\" id=\"contenitoreAnteprima\">\n        <wc-anteprima showimage=false (eventMappa)=\"visualizzaMappa(item.coordinates[0], item.coordinates[1])\"\n          (eventShare)=\"visualizzaShare(item.title, item.image ,item.description)\" id=\"elemento\" img={{item.image}}\n          [titolo]=\"item.title\" orario={{item.eventStart}} datapubblicazione={{formattaData(item.created)}}\n          dataevento={{item.eventDate}} durata={{item.eventTiming}} [descrizione]=\"item.description\"\n          luogo={{item.address}}>\n        </wc-anteprima>\n      </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"caricaAltriDati($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"Sto caricando...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  </div>\n  <ng-template #emptyListTemplate>\n    <div class=\"empty-list\">{{'empty_list_label'|translate}}</div>\n  </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-info/pages/notizie/notizie.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/module-info/pages/notizie/notizie.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenitoreAnteprima {\n  padding-bottom: 6px; }\n\n.interaction {\n  color: #11b3ef !important; }\n\nion-searchbar {\n  position: fixed;\n  z-index: 999; }\n\nion-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%; }\n\n.searchspace {\n  background-color: white; }\n\n.higher {\n  height: 100px; }\n\n.empty-list {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtaW5mby9wYWdlcy9ub3RpemllL25vdGl6aWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUNEO0VBQ0ksZ0JBQWU7RUFJZixhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSx3QkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLWluZm8vcGFnZXMvbm90aXppZS9ub3RpemllLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYXJyYURpUmljZXJjYXtcbiAgICAvLyBkaXNwbGF5OiBub25lO1xufVxuXG4jY29udGVuaXRvcmVBbnRlcHJpbWF7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cbi5pbnRlcmFjdGlvbiB7XG4gICAgY29sb3I6ICMxMWIzZWYhaW1wb3J0YW50O1xufVxuaW9uLXNlYXJjaGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC8vIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICAvLyB0b3A6IDNweDtcbiAgICAvLyB0b3A6IDU4cHg7XG4gICAgei1pbmRleDogOTk5O1xufVxuaW9uLXRpdGxle1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zZWFyY2hzcGFjZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cbi5oaWdoZXJ7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbi5lbXB0eS1saXN0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/module-info/pages/notizie/notizie.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/module-info/pages/notizie/notizie.page.ts ***!
  \***********************************************************/
/*! exports provided: NotiziePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotiziePage", function() { return NotiziePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dati_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dati-service.service */ "./src/app/module-info/services/dati-service.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-info/services/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/module-info/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotiziePage = /** @class */ (function () {
    function NotiziePage(datiService, plt, social, config, translate, utils) {
        this.datiService = datiService;
        this.plt = plt;
        this.social = social;
        this.config = config;
        this.translate = translate;
        this.utils = utils;
        this.urlMappa = "https://www.google.com/maps/search/?api=1&query=";
        this.isRicercaOpen = false;
        this.datiRicerca = [];
        this.vetDate = [];
        this.emptyList = false;
        this.start = 0;
        this.parametriPost = {
            "fromDate": null,
            "size": 10,
            "sortForList": 1,
            "source": ["Avvisi oggetti rinvenuti"],
            "start": 0
        };
        this.doneTypingInterval = 500; //time in ms, 5 second for example
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
    }
    NotiziePage.prototype.visualizzaMappa = function (latitudine, longitudine) {
        window.open(encodeURI(this.urlMappa + latitudine + "," + longitudine), '_system');
    };
    NotiziePage.prototype.searchAndIos = function () {
        return this.plt.is('ios') && this.isRicercaOpen;
    };
    NotiziePage.prototype.visualizzaShare = function (titolo, img, descrizione) {
        var _this = this;
        console.log("Share");
        this.social.canShareViaEmail().then(function () {
            _this.social.share(titolo.toString() + " " + descrizione.toString(), null, img.toString());
        }).catch(function () {
            alert("Il servizio di condivisione non è disponibile per questo dispositivo");
        });
    };
    NotiziePage.prototype.ngOnInit = function () {
        var _this = this;
        this.utils.presentLoading();
        this.datiService.getDati(this.parametriPost).then(function (data) {
            if (data.length == 0) {
                _this.emptyList = true;
            }
            _this.DatiEvento = data;
            _this.DatiEvento.forEach(function (evento) {
                evento.image = evento.image.replace('.jpg', '_medium.jpg');
            });
            _this.datiRicerca = _this.DatiEvento;
            _this.utils.hideLoading();
        }, function (err) {
            _this.utils.hideLoading();
        });
    };
    NotiziePage.prototype.visualizzaDati = function (vet, event) {
        for (var _i = 0, vet_1 = vet; _i < vet_1.length; _i++) {
            var item = vet_1[_i];
            this.datiRicerca.push(item);
        }
        console.log(this.datiRicerca);
        if (vet.length < 10) {
            event.target.disabled = true;
        }
        event.target.complete();
    };
    NotiziePage.prototype.OpenCloseRicerca = function () {
        this.isRicercaOpen = !this.isRicercaOpen;
        var searchbar = document.querySelector('.search-notizie');
        if (searchbar.style.display === 'none') {
            searchbar.style.display = 'unset';
            searchbar.focus();
            this.datiRicerca = this.DatiEvento;
        }
        else {
            searchbar.style.display = 'none';
        }
    };
    NotiziePage.prototype.Ricerca = function () {
        var _this = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            if (_this.daCercare != null) {
                var parametriPost = {
                    "fromDate": null,
                    "size": 10,
                    "sortForList": 1,
                    "source": ["Avvisi oggetti rinvenuti"],
                    "start": 0,
                    "filter": _this.daCercare
                };
                _this.datiService.getDati(parametriPost).then(function (data) {
                    if (data.length == 0) {
                        _this.emptyList = true;
                    }
                    else {
                        _this.emptyList = false;
                        _this.DatiEvento = data;
                        _this.DatiEvento.forEach(function (evento) {
                            evento.image = evento.image.replace('.jpg', '_medium.jpg');
                        });
                        _this.datiRicerca = _this.DatiEvento;
                    }
                });
            }
        }, this.doneTypingInterval);
    };
    NotiziePage.prototype.caricaAltriDati = function (event) {
        var _this = this;
        this.start += 10;
        var parametriPost = {
            "fromDate": null,
            "size": 10,
            "sortForList": 1,
            "source": ["Avvisi oggetti rinvenuti"],
            "start": this.start,
            "filter": this.daCercare
        };
        this.datiService.getDati(parametriPost).then(function (dati) {
            _this.vetNuoviDati = dati;
            _this.visualizzaDati(_this.vetNuoviDati, event);
        });
        console.log(this.datiRicerca);
    };
    // Ricerca() {
    //   let vetRisultati: any[] = [];
    //   if (this.daCercare != null) {
    //     for (let item of this.DatiEvento) {
    //       if ((item.description.toUpperCase().includes(this.daCercare.toUpperCase())) || (item.title.toUpperCase().includes(this.daCercare.toUpperCase()))) {
    //         vetRisultati.push(item);
    //       }
    //     }
    //     this.datiRicerca = vetRisultati;
    //     vetRisultati = null;
    //     if (this.datiRicerca.length == 0) {
    //       {
    //         this.emptyList = true;
    //       }
    //     }
    //   }
    // }
    NotiziePage.prototype.formattaData = function (data) {
        var anno = data.slice(0, 4);
        var mese = data.slice(4, 6);
        var giorno = data.slice(6, 8);
        return giorno + "/" + mese + "/" + anno;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], NotiziePage.prototype, "infiniteScroll", void 0);
    NotiziePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notizie-page',
            template: __webpack_require__(/*! ./notizie.page.html */ "./src/app/module-info/pages/notizie/notizie.page.html"),
            styles: [__webpack_require__(/*! ./notizie.page.scss */ "./src/app/module-info/pages/notizie/notizie.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_dati_service_service__WEBPACK_IMPORTED_MODULE_1__["DatiServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]])
    ], NotiziePage);
    return NotiziePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-notizie-notizie-module.js.map