(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-video-video-module"],{

/***/ "./src/app/module-info/pages/video/video.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/module-info/pages/video/video.module.ts ***!
  \*********************************************************/
/*! exports provided: HttpLoaderFactory, VideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/module-info/pages/video/video.page.ts");
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
        component: _video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]
    }
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/info/i18n/', '.json');
}
var VideoPageModule = /** @class */ (function () {
    function VideoPageModule() {
    }
    VideoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({ loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    } }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], VideoPageModule);
    return VideoPageModule;
}());



/***/ }),

/***/ "./src/app/module-info/pages/video/video.page.html":
/*!*********************************************************!*\
  !*** ./src/app/module-info/pages/video/video.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-searchbar showCancelButton=\"never\" animated  (ionChange)=\"Ricerca()\"\n      placeholder=\"Cerca\" id=\"barraDiRicerca\" [(ngModel)]=\"daCercare\">\n    </ion-searchbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-grid *ngIf=\"!isRicercaOpen\">\n      <ion-row justify-content-center align-items-center>\n        <ion-col col-6>\n          <ion-title float-left id=\"TITOLO\">{{'trento_informa_label'|translate}}</ion-title>\n        </ion-col>\n        <ion-col col-6>\n          <ion-button fill=\"clear\" float-right (click)=\"OpenCloseRicerca()\" id=\"btnImpostazioniRicerca\" color=\"light\">\n            <svg width='24' height='24' viewBox='0 0 24 24'>\n              <path fill='none' d='M0 0h24v24H0V0z' />\n              <path\n                d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />\n            </svg>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n  <div class=\"ion-padding\" *ngIf=\"!emptyList;else other_content\">\n\n\n    <ion-list>\n      <div *ngFor=\"let item of datiRicerca\" id=\"contenitoreAnteprima\">\n        <div *ngIf=\"isVideo(item)\">\n          <wc-video (eventMappa)=\"visualizzaMappa(item.coordinates[0], item.coordinates[1])\"\n            (eventShare)=\"visualizzaShare(item.title, item.image, item.videoLink)\"\n            (eventVideo)=\"visualizzaVideo(item.videoLink)\" video={{item.videoLink}} id=\"elemento\" img={{item.image}}\n            [titolo]=\"item.shortAbstract\" orario={{item.eventStart}} datapubblicazione={{formattaData(item.created)}}\n            dataevento={{item.eventDate}} durata={{item.eventTiming}} [descrizione]=\"item.description\"\n            luogo={{item.address}}>\n          </wc-video>\n        </div>\n        <div *ngIf=\"isNews(item)\">\n          <wc-anteprima (eventMappa)=\"visualizzaMappa(item.coordinates[0], item.coordinates[1])\"\n            (eventShare)=\"visualizzaShare(item.title, item.image ,item.description)\" id=\"elemento\" img={{item.image}}\n            [titolo]=\"item.shortAbstract\" orario={{item.eventStart}} datapubblicazione={{formattaData(item.created)}}\n            dataevento={{item.eventDate}} durata={{item.eventTiming}} [descrizione]=\"item.description\"\n            luogo={{item.address}}>\n          </wc-anteprima>\n        </div>\n      </div>\n    </ion-list>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"caricaAltriDati($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"Sto caricando...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n  <ng-template #other_content>\n    {{'empty_list_label'|translate}}\n  </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/module-info/pages/video/video.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/module-info/pages/video/video.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#barraDiRicerca {\n  display: none; }\n\n#contenitoreAnteprima {\n  padding-bottom: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtaW5mby9wYWdlcy92aWRlby92aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlLWluZm8vcGFnZXMvdmlkZW8vdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhcnJhRGlSaWNlcmNhe1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjb250ZW5pdG9yZUFudGVwcmltYXtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/module-info/pages/video/video.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/module-info/pages/video/video.page.ts ***!
  \*******************************************************/
/*! exports provided: VideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPage", function() { return VideoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dati_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dati-service.service */ "./src/app/module-info/services/dati-service.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/module-info/services/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoPage = /** @class */ (function () {
    function VideoPage(datiService, social, config, translate) {
        this.datiService = datiService;
        this.social = social;
        this.config = config;
        this.translate = translate;
        this.urlMappa = "https://www.google.com/maps/search/?api=1&query=";
        this.isRicercaOpen = false;
        this.datiRicerca = [];
        this.start = 0;
        this.emptyList = false;
        this.parametriPost = {
            "fromDate": null,
            "size": 10,
            "sortForList": 1,
            "source": ["Avvisi del Comune di Trento", "Video di TrentoInforma"],
            "start": 0
        };
        this.doneTypingInterval = 500; //time in ms, 5 second for example
        this.language = window[this.config.getAppModuleName()]['language'];
        this.translate.use(this.language);
    }
    VideoPage.prototype.visualizzaMappa = function (latitudine, longitudine) {
        window.open(encodeURI(this.urlMappa + latitudine + "," + longitudine), '_system');
    };
    VideoPage.prototype.visualizzaShare = function (titolo, img, linkVideo) {
        var _this = this;
        console.log("Share");
        this.social.canShareViaEmail().then(function () {
            _this.social.share(titolo.toString(), null, img.toString(), linkVideo.toString());
        }).catch(function () {
            alert("Il servizio di condivisione non è disponibile per questo dispositivo");
        });
    };
    VideoPage.prototype.visualizzaVideo = function (urlVideo) {
        window.open(encodeURI(urlVideo), '_system');
    };
    VideoPage.prototype.isVideo = function (s) {
        return s.source == 'Video di TrentoInforma';
    };
    VideoPage.prototype.isNews = function (s) {
        return s.source == 'Avvisi del Comune di Trento';
    };
    VideoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.datiService.getDati(this.parametriPost).then(function (data) {
            if (data.length == 0) {
                _this.emptyList = true;
            }
            _this.DatiEvento = data;
            _this.datiRicerca = _this.DatiEvento;
        });
        console.log(this.DatiEvento);
    };
    VideoPage.prototype.OpenCloseRicerca = function () {
        if (!this.isRicercaOpen) {
            document.getElementById("barraDiRicerca").style.display = "inherit";
            document.getElementById("btnImpostazioniRicerca").innerHTML = "<svg width='24' height='24' viewBox='0 0 24 24'><path fill='none' d='M0 0h24v24H0V0z'/><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/></svg>";
            this.daCercare = "";
        }
        else {
            document.getElementById("barraDiRicerca").style.display = "none";
            document.getElementById("btnImpostazioniRicerca").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='none' d='M0 0h24v24H0V0z'/><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>";
            this.datiRicerca = this.DatiEvento;
        }
        this.isRicercaOpen = !this.isRicercaOpen;
    };
    VideoPage.prototype.Ricerca = function () {
        var _this = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            if (_this.daCercare != null) {
                var parametriPost = {
                    "fromDate": null,
                    "size": 10,
                    "sortForList": 1,
                    "source": ["Avvisi del Comune di Trento", "Video di TrentoInforma"],
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
                        _this.datiRicerca = _this.DatiEvento;
                    }
                });
            }
        }, this.doneTypingInterval);
    };
    VideoPage.prototype.caricaAltriDati = function (event) {
        var _this = this;
        this.start += 10;
        var parametriPost = {
            "fromDate": null,
            "size": 10,
            "sortForList": 1,
            "source": ["Avvisi del Comune di Trento", "Video di TrentoInforma"],
            "start": this.start,
            "filter": this.daCercare
        };
        this.datiService.getDati(parametriPost).then(function (dati) {
            _this.vetNuoviDati = dati;
            _this.visualizzaDati(_this.vetNuoviDati, event);
        });
        console.log(this.datiRicerca);
    };
    VideoPage.prototype.visualizzaDati = function (vet, event) {
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
    VideoPage.prototype.formattaData = function (data) {
        var anno = data.slice(0, 4);
        var mese = data.slice(4, 6);
        var giorno = data.slice(6, 8);
        return giorno + "/" + mese + "/" + anno;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], VideoPage.prototype, "infiniteScroll", void 0);
    VideoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.page.html */ "./src/app/module-info/pages/video/video.page.html"),
            styles: [__webpack_require__(/*! ./video.page.scss */ "./src/app/module-info/pages/video/video.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_dati_service_service__WEBPACK_IMPORTED_MODULE_1__["DatiServiceService"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"], _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], VideoPage);
    return VideoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-video-video-module.js.map