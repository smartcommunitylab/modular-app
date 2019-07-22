(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-funerali-funerali-module"],{

/***/ "./src/app/module-funerali/domain/tipo-defunto.ts":
/*!********************************************************!*\
  !*** ./src/app/module-funerali/domain/tipo-defunto.ts ***!
  \********************************************************/
/*! exports provided: TipoDefunto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDefunto", function() { return TipoDefunto; });
var TipoDefunto = /** @class */ (function () {
    function TipoDefunto(nominativo, dataNascita, dataMorte, paeseSepoltura, numeroCella, numeroFila, numeroColonna) {
        this.nominativo = nominativo;
        this.dataNascita = dataNascita;
        this.dataMorte = dataMorte;
        this.paeseSepoltura = paeseSepoltura;
        this.numeroCella = numeroCella;
        this.numeroFila = numeroFila;
        this.numeroColonna = numeroColonna;
    }
    return TipoDefunto;
}());



/***/ }),

/***/ "./src/app/module-funerali/domain/tipo-funerale.ts":
/*!*********************************************************!*\
  !*** ./src/app/module-funerali/domain/tipo-funerale.ts ***!
  \*********************************************************/
/*! exports provided: TipoFunerale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoFunerale", function() { return TipoFunerale; });
var TipoFunerale = /** @class */ (function () {
    function TipoFunerale(nominativo, dataNascita, dataMorte, luogoFunerale, comuneFunerale, dataFunerale, oraFunerale) {
        this.nominativo = nominativo;
        this.dataNascita = dataNascita;
        this.dataMorte = dataMorte;
        this.luogoFunerale = luogoFunerale;
        this.comuneFunerale = comuneFunerale;
        this.dataFunerale = dataFunerale;
        this.oraFunerale = oraFunerale;
    }
    return TipoFunerale;
}());



/***/ }),

/***/ "./src/app/module-funerali/pages/funerali/funerali.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module-funerali/pages/funerali/funerali.module.ts ***!
  \*******************************************************************/
/*! exports provided: FuneraliPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuneraliPageModule", function() { return FuneraliPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _funerali_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./funerali.page */ "./src/app/module-funerali/pages/funerali/funerali.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _funerali_page__WEBPACK_IMPORTED_MODULE_5__["FuneraliPage"]
    }
];
var FuneraliPageModule = /** @class */ (function () {
    function FuneraliPageModule() {
    }
    FuneraliPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_funerali_page__WEBPACK_IMPORTED_MODULE_5__["FuneraliPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FuneraliPageModule);
    return FuneraliPageModule;
}());



/***/ }),

/***/ "./src/app/module-funerali/pages/funerali/funerali.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/module-funerali/pages/funerali/funerali.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-grid>\n            <ion-row align-items-center>\n                <ion-col size=\"4\" (click)=\"Funerali()\">\n                    <ion-title float-left id=\"titleFunerali\">Funerali</ion-title>\n                </ion-col>\n                <ion-col size=\"4\" (click)=\"Sepolture()\">\n                    <ion-title float-left id=\"titleSepoltura\">Sepolture</ion-title>\n\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-button fill=\"clear\" float-right (click)=\"OpenCloseRicerca()\" id=\"btnOpen\" color=\"light\">\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n\n    <ion-row justify-content-center align-items-center id=\"ricercaNome\">\n        <ion-button id=\"buttonGiorni\" icon-only color=\"light\" (click)=\"OpenBarraGiorni()\">\n            <ion-icon name=\"calendar\"></ion-icon>\n        </ion-button>\n        <ion-searchbar (ionChange)=\"Ricerca()\" placeholder=\"cerca nominativo\" [(ngModel)]=\"name\" clearIcon=\"false\"></ion-searchbar>\n    </ion-row>\n\n    <ion-row justify-content-center align-items-center id=\"barraGiorni\">\n        <ion-col col-3>\n            <ion-icon name=\"arrow-dropleft\" (click)=\"PreviusDay()\"></ion-icon>\n        </ion-col>\n        <ion-col col-3 id=\"data\">\n\n        </ion-col>\n        <ion-col col-3>\n            <ion-icon name=\"arrow-dropright\" (click)=\"NextDay()\"></ion-icon>\n        </ion-col>\n    </ion-row>\n\n</ion-header>\n\n<ion-content>\n    <div id=\"top\"></div>\n    <ion-icon id=\"buttonTop\" (click)=\"GoOnTop()\" color=\"dark\" name=\"arrow-dropup\"></ion-icon>\n    <div id=\"funerali\">\n        <div *ngFor=\"let item of vetFunerali; let i = index;\">\n            <dettaglio-morte (indicazioni)=\"IndicazioniFunerali(i)\" (condividi)=\"CondividiFunerali(i)\" [funerale]=\"item\"\n                isFunerale={{true}}></dettaglio-morte>\n        </div>\n    </div>\n    <div id=\"sepolture\" style=\"display: none;\">\n        <div *ngFor=\"let item of vetDefunti; let i = index;\">\n            <dettaglio-morte (indicazioni)=\"IndicazioniSepolture(i)\" (condividi)=\"CondividSepolture(i)\" [defunto]=\"item\"\n                isFunerale={{false}}></dettaglio-morte>\n        </div>\n    </div>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"CaricaDati()\" id=\"scroll\">\n        <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"Sto caricando...\"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/module-funerali/pages/funerali/funerali.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/module-funerali/pages/funerali/funerali.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#buttonGiorni {\n  position: absolute;\n  right: 0;\n  margin: 10px 10px;\n  z-index: 9999; }\n\n#barraGiorni {\n  text-align: center;\n  background-color: #f4f5f8;\n  overflow: hidden; }\n\nion-icon {\n  width: 30px;\n  height: 30px; }\n\n#scroll {\n  margin-top: 30px;\n  margin-bottom: 0; }\n\n#buttonTop {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  padding: 10px 10px 5px 10px;\n  z-index: 9999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2FwcC9tb2R1bGUtZnVuZXJhbGkvcGFnZXMvZnVuZXJhbGkvZnVuZXJhbGkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixrQkFBaUI7RUFDakIsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsaUJBQWdCLEVBRW5COztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFDZjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBVztFQUNYLGFBQVk7RUFDWiw0QkFBMkI7RUFDM0IsY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1mdW5lcmFsaS9wYWdlcy9mdW5lcmFsaS9mdW5lcmFsaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnV0dG9uR2lvcm5pe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuXG4jYmFycmFHaW9ybmkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbn1cblxuaW9uLWljb257XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4jc2Nyb2xse1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuI2J1dHRvblRvcHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/module-funerali/pages/funerali/funerali.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module-funerali/pages/funerali/funerali.page.ts ***!
  \*****************************************************************/
/*! exports provided: FuneraliPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuneraliPage", function() { return FuneraliPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_tipo_defunto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/tipo-defunto */ "./src/app/module-funerali/domain/tipo-defunto.ts");
/* harmony import */ var _domain_tipo_funerale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/tipo-funerale */ "./src/app/module-funerali/domain/tipo-funerale.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuneraliPage = /** @class */ (function () {
    function FuneraliPage(social) {
        this.social = social;
        this.Defunto = new _domain_tipo_defunto__WEBPACK_IMPORTED_MODULE_1__["TipoDefunto"]("Papa Sepolto", "ieri", "oggi", "Mattarello", 14, 98, 13); //defunto test
        this.Funerale = new _domain_tipo_funerale__WEBPACK_IMPORTED_MODULE_2__["TipoFunerale"]("Papa Funerale", "ieri", "oggi", "Trento", "34", "3333", "CIao"); //funerale test
        this.isRicercaOpen = false; //true se la barra di ricerca è aperta
        this.isGiorniOpen = false; //true se la barra dei giorni è aperta
        this.isSepoltura = false; //controlla se ci troviamo in schermata funerali o sepoltura
        this.linkMappa = "https://www.google.com/maps/search/?api=1&query="; //link a maps
        this.vetDefunti = [];
        this.vetFunerali = [];
        this.date = new Date(); //data odierna
    }
    FuneraliPage.prototype.ngOnInit = function () {
        this.vetFunerali.push(this.Funerale); //aggiunti per test
        this.vetFunerali.push(this.Funerale);
        this.vetDefunti.push(this.Defunto);
        document.getElementById("titleSepoltura").style.fontWeight = "300";
        document.getElementById("titleFunerali").style.fontWeight = "600"; //evidenzia il titolo dei funerali
        document.getElementById("ricercaNome").style.display = "none"; //nasconde la ricerca per nome
        document.getElementById("barraGiorni").style.height = "0px"; //nasconde la barra dei giorni
        document.getElementById("data").innerHTML = this.GetFormattedData();
        document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="search"></ion-icon>'; //imposta come svg in alto a destra la lente
    };
    //restituisce la data formattata
    FuneraliPage.prototype.GetFormattedData = function () {
        return this.date.getDate() + "/" + this.date.getMonth() + "/" + this.date.getFullYear();
    };
    //vai al giorno successivo
    FuneraliPage.prototype.NextDay = function () {
        this.date.setDate(this.date.getDate() + 1);
        document.getElementById("data").innerHTML = this.GetFormattedData();
    };
    //vai al giorno precedente
    FuneraliPage.prototype.PreviusDay = function () {
        this.date.setDate(this.date.getDate() - 1);
        document.getElementById("data").innerHTML = this.GetFormattedData();
    };
    FuneraliPage.prototype.Ricerca = function () {
    };
    //condividi da mobile per i funerali
    FuneraliPage.prototype.CondividiFunerali = function (i) {
        var _this = this;
        this.social.canShareViaEmail().then(function () {
            _this.social.share(_this.vetFunerali[i].nominativo + " " + _this.vetFunerali[i].luogoFunerale, null, null);
        }).catch(function () {
            alert("Il servizio di condivisione non è disponibile per questo dispositivo");
        });
    };
    //condividi da mobile per sepolture
    FuneraliPage.prototype.CondividSepolture = function (i) {
        var _this = this;
        this.social.canShareViaEmail().then(function () {
            _this.social.share(_this.vetDefunti[i].nominativo + " " + _this.vetDefunti[i].paeseSepoltura, null, null);
        }).catch(function () {
            alert("Il servizio di condivisione non è disponibile per questo dispositivo");
        });
    };
    //apre maps
    FuneraliPage.prototype.IndicazioniFunerali = function (i) {
        window.open(encodeURI(this.linkMappa + this.vetFunerali[i].luogoFunerale), '_system');
    };
    //apre maps
    FuneraliPage.prototype.IndicazioniSepolture = function (i) {
        window.open(encodeURI(this.linkMappa + this.vetDefunti[i].paeseSepoltura), '_system');
    };
    //mostra il div contenente i funerali e nasconde le sepolture
    FuneraliPage.prototype.Funerali = function () {
        document.getElementById("sepolture").style.display = "none";
        document.getElementById("funerali").style.display = "inherit";
        document.getElementById("titleSepoltura").style.fontWeight = "300";
        document.getElementById("titleFunerali").style.fontWeight = "600";
        this.isSepoltura = false;
        this.CloseRicerca();
    };
    //mostra il div contenente le sepolture e nasconde i funerali
    FuneraliPage.prototype.Sepolture = function () {
        document.getElementById("sepolture").style.display = "inherit";
        document.getElementById("funerali").style.display = "none";
        document.getElementById("titleSepoltura").style.fontWeight = "600";
        document.getElementById("titleFunerali").style.fontWeight = "300";
        this.isSepoltura = true;
        this.CloseRicerca();
    };
    //gestisce l'apertura e la chiusura della ricerca
    FuneraliPage.prototype.OpenCloseRicerca = function () {
        if (!this.isRicercaOpen) {
            document.getElementById("ricercaNome").style.display = "inherit";
            if (this.isSepoltura) {
                document.getElementById("buttonGiorni").style.visibility = "hidden"; //se è sepoltura nasconde la barra giorni
            }
            else {
                document.getElementById("buttonGiorni").style.visibility = "visible";
            }
            document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="close"></ion-icon>'; //imposta come svg in alto a destra una croce
            this.isRicercaOpen = true;
        }
        else {
            this.CloseRicerca();
        }
    };
    //test per l'infinity scroll
    FuneraliPage.prototype.CaricaDati = function () {
        //aggiungere controllo sulla variabile isSepoltura
        this.vetFunerali.push(this.Funerale);
        this.vetFunerali.push(this.Funerale);
        this.vetFunerali.push(this.Funerale);
        this.vetFunerali.push(this.Funerale);
        this.infiniteScroll.complete();
    };
    //chiude la ricerca
    FuneraliPage.prototype.CloseRicerca = function () {
        document.getElementById("ricercaNome").style.display = "none";
        document.getElementById("barraGiorni").style.height = "0px";
        document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="search"></ion-icon>';
        this.isRicercaOpen = false;
        this.isGiorniOpen = false;
    };
    //apre la barra dei giorni
    FuneraliPage.prototype.OpenBarraGiorni = function () {
        if (this.isGiorniOpen) {
            document.getElementById("barraGiorni").style.height = "0px";
        }
        else {
            document.getElementById("barraGiorni").style.height = "auto";
        }
        this.isGiorniOpen = !this.isGiorniOpen;
    };
    //raggiunge la cima della pagina
    FuneraliPage.prototype.GoOnTop = function () {
        document.getElementById("top").scrollIntoView();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
    ], FuneraliPage.prototype, "infiniteScroll", void 0);
    FuneraliPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'funerali-page',
            template: __webpack_require__(/*! ./funerali.page.html */ "./src/app/module-funerali/pages/funerali/funerali.page.html"),
            styles: [__webpack_require__(/*! ./funerali.page.scss */ "./src/app/module-funerali/pages/funerali/funerali.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"]])
    ], FuneraliPage);
    return FuneraliPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-funerali-funerali-module.js.map