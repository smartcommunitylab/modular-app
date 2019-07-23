(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[140],{

/***/ "./node_modules/wcs-info/dist/esm/legacy/wc-anteprima_2.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/wcs-info/dist/esm/legacy/wc-anteprima_2.entry.js ***!
  \***********************************************************************/
/*! exports provided: wc_anteprima, wc_video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wc_anteprima", function() { return cwAnteprima; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wc_video", function() { return wcVideo; });
/* harmony import */ var _wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wc-video-5effe51c.js */ "./node_modules/wcs-info/dist/esm/legacy/wc-video-5effe51c.js");

var cwAnteprima = /** @class */ (function () {
    function cwAnteprima(hostRef) {
        Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
        this.Component_Height = "100px"; //altezza della componente
        this.Component_Border = "black";
        this.Titolo_Visibility = "collapse"; //visualizzazione estesa
        this.Titolo_Colore = "white"; //delay utile a non far scomparire gli elementi prima della chiusura della finestra
        this.Titolo_Size = "0px"; //visualizzazione estesa
        this.Img_Position = "absolute";
        this.Img_Larghezza = "95px";
        this.Img_Altezza = "95px";
        this.Img_MarginLeft = "5px";
        this.Descrizione_Color = "black";
        this.Mappa_Display = "none";
        this.Display = "none";
        this.DisplayReverse = "block";
        this.Opacity = "0";
        this.OpacityReverse = "0";
        this.aperto = false;
        this.AddDurata = 1;
        this.chiudiAnteprima = true;
        this.eventMappa = Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "eventMappa", 7);
        this.eventShare = Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "eventShare", 7);
    }
    //passa a visualizzazione compatta
    cwAnteprima.prototype.close = function () {
        this.Component_Height = "100px";
        this.Component_Border = "black";
        this.Titolo_Visibility = "none";
        this.Titolo_Colore = "white";
        this.Titolo_Size = "0px";
        this.Img_Position = "absolute";
        this.Img_Larghezza = "95px";
        this.Img_Altezza = "95px";
        this.Img_MarginLeft = "5px";
        this.Descrizione_Color = "black";
        this.Mappa_Display = "none";
        this.Display = "none";
        this.DisplayReverse = "block";
        this.Opacity = "0";
        this.OpacityReverse = "0";
    };
    //passa a visualizzazione estesa
    cwAnteprima.prototype.open = function () {
        var _this = this;
        this.Component_Height = "auto";
        this.Component_Border = "white";
        this.Titolo_Visibility = "block";
        this.Titolo_Colore = "black";
        this.Titolo_Size = "25px";
        this.Img_Position = "relative";
        this.Img_Larghezza = "96%";
        this.Img_Altezza = "auto";
        this.Img_MarginLeft = "0px";
        this.Descrizione_Color = "white";
        this.Mappa_Display = "block";
        setTimeout(function () { _this.Display = "block"; }, 100);
        this.DisplayReverse = "none";
        this.Opacity = "1";
        setTimeout(function () { _this.OpacityReverse = "1"; }, 100);
    };
    cwAnteprima.prototype.DataEvento = function () {
        if (this.dataevento != "") {
            this.AddDurata++;
            return [
                Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", null, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("span", null, "data evento: "), this.dataevento)
            ];
        }
        return;
    };
    cwAnteprima.prototype.Orario = function () {
        if (this.orario != "") {
            this.AddDurata++;
            return [
                Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", null, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("span", null, "orario: "), this.orario)
            ];
        }
        return;
    };
    cwAnteprima.prototype.Durata = function () {
        if (this.durata != "" && this.AddDurata < 3) {
            return [
                Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", null, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("span", null, "durata: "), this.durata)
            ];
        }
        return;
    };
    cwAnteprima.prototype.CalcolaSizeH1 = function () {
        var titolo = "";
        /*if (this.titolo.length > 35) {
          for (let i = 0; i < 35; i++) {
            titolo += this.titolo[i];
          }
          titolo += "...";
        }
        else*/
        titolo = this.titolo;
        console.log(titolo);
        return titolo;
    };
    cwAnteprima.prototype.VisualizzaDettaglio = function () {
        if (this.chiudiAnteprima) {
            if (!this.aperto)
                this.open();
            else
                this.close();
            this.aperto = !this.aperto;
        }
        else
            this.chiudiAnteprima = true;
    };
    cwAnteprima.prototype.VisualizzaMappa = function (todo) {
        this.chiudiAnteprima = false;
        this.eventMappa.emit(todo);
    };
    cwAnteprima.prototype.VisualizzaShare = function (todo) {
        this.chiudiAnteprima = false;
        this.eventShare.emit(todo);
    };
    cwAnteprima.prototype.render = function () {
        var _this = this;
        var styles = {
            '--Component_height': this.Component_Height,
            '--Component_Border': this.Component_Border,
            '--Titolo_Visibility': this.Titolo_Visibility,
            '--Titolo_Colore': this.Titolo_Colore,
            '--Titolo_Size': this.Titolo_Size,
            '--Img_Position': this.Img_Position,
            '--Img_Larghezza': this.Img_Larghezza,
            '--Img_Altezza': this.Img_Altezza,
            '--Img_MarginLeft': this.Img_MarginLeft,
            '--Descrizione_Color': this.Descrizione_Color,
            '--Mappa_Display': this.Mappa_Display,
            '--Display': this.Display,
            '--DisplayReverse': this.DisplayReverse,
            '--Opacity': this.Opacity,
            '--OpacityReverse': this.OpacityReverse
        };
        return [
            Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "component", onClick: function () { return _this.VisualizzaDettaglio(); }, style: styles }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("h1", { id: "TitoloEspanso" }, this.titolo), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("img", { src: this.img }), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "descrizione" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { id: "centra" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("h1", { id: "titolo" }, this.CalcolaSizeH1()), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", null, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("span", null, "pubblicato il: "), this.datapubblicazione), this.DataEvento(), this.Orario(), this.Durata())), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { id: "Informazioni" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "testo" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", { id: "descrizione" }, this.descrizione), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "info" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { id: "divMappa", onClick: function (e) { return _this.VisualizzaMappa(e); } }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("svg", { id: "mappa" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("path", { fill: 'none', d: 'M0 0h24v24H0V0z' }), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("path", { d: 'M12 7.27l4.28 10.43-3.47-1.53-.81-.36-.81.36-3.47 1.53L12 7.27M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z' })), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", { id: "TxtMappa" }, "Indicazioni")), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { id: "divShare", onClick: function (e) { return _this.VisualizzaShare(e); } }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("svg", { id: "share", xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("path", { fill: 'none', d: 'M0 0h24v24H0V0z' }), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("path", { d: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z' })), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", { id: "TxtShare" }, "Condividi")))), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "margine" })))
        ];
    };
    Object.defineProperty(cwAnteprima.prototype, "element", {
        get: function () { return Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cwAnteprima, "style", {
        get: function () { return "\@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap\");.component{padding:10px 0;height:var(--Component_Height);border:1px solid var(--Component_Border);margin-bottom:5px;width:100%;font-family:Source Sans Pro,sans-serif}.component,.component img{-webkit-transition:.3s;transition:.3s}.component img{position:var(--Img_Position);height:var(--Img_Altezza);width:var(--Img_Larghezza);margin-left:var(--Img_MarginLeft);margin-top:2.5px;display:block;margin-left:auto;margin-right:auto;max-width:900px;max-height:700px}.component .descrizione{margin:0 0 0 100px;padding:0 18px 0 5px}.descrizione{display:var(--DisplayReverse);color:var(--Descrizione_Color);-webkit-transition:.3s;transition:.3s}.descrizione #centra{height:100px;display:table-cell;vertical-align:middle}#titolo{position:relative;width:100%;height:auto;z-index:0}.descrizione h1{padding:0;margin:0 0 5px 0;font-size:18px;max-height:55px;overflow:hidden;width:calc(100vw - 125px)}.descrizione p{margin:1px 0;width:calc(100vw - 125);font-size:12px}.descrizione span{color:grey}.descrizione #campi{max-height:45px;overflow:hidden}#TitoloEspanso{visibility:var(--Titolo_Visibility);color:var(--Titolo_Colore);-webkit-transition:.3s;transition:.3s;font-size:var(--Titolo_Size);text-align:center}.info svg{position:relative;left:25px;height:30px;width:30px}.info p{float:left;margin:0}.testo{opacity:var(--Opacity);-webkit-transition:1.2s;transition:1.2s}#descrizione{top:40px;text-align:justify;display:var(--Mappa_Display);width:96%}#descrizione,.info{position:relative;margin:auto}.info{opacity:var(--OpacityReverse);top:110px;height:45px;width:100%;-webkit-transition:.3s;transition:.3s}#mappa{cursor:pointer;margin:0;padding:0}#mappa,#TxtMappa{display:var(--Display)}#TxtMappa{position:relative;top:8px}#share,#TxtShare{display:var(--Display);margin:0}#TxtShare{position:relative;top:8px;left:6px;padding:0}#Informazioni{display:var(--Display)}.margine{opacity:var(--OpacityReverse);position:relative;margin:50px 0;top:110px;height:45px;width:100%;-webkit-transition:.3s;transition:.3s;z-index:-2}#divMappa{left:2%}#divMappa,#divShare{position:relative;height:60px;width:80px;cursor:pointer}#divShare{top:-60px;left:120px;-ms-flex-line-pack:center;align-content:center}"; },
        enumerable: true,
        configurable: true
    });
    return cwAnteprima;
}());
var wcVideo = /** @class */ (function () {
    function wcVideo(hostRef) {
        Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
        this.Component_Height = "100px"; //altezza della componente
        this.Component_Border = "black";
        this.Titolo_Visibility = "collapse"; //visualizzazione estesa
        this.Titolo_Colore = "white"; //delay utile a non far scomparire gli elementi prima della chiusura della finestra
        this.Titolo_Size = "0px"; //visualizzazione estesa
        this.Img_Position = "absolute";
        this.Img_Larghezza = "95px";
        this.Img_Altezza = "95px";
        this.Img_MarginLeft = "5px";
        this.Descrizione_Color = "black";
        this.Mappa_Display = "none";
        this.Display = "none";
        this.DisplayReverse = "block";
        this.Opacity = "0";
        this.OpacityReverse = "1";
        this.ImgTop = "auto";
        this.MousePointer = "default";
        this.MarginTitolo = "0px";
        this.aperto = false;
        this.AddDurata = 1;
        this.openHeight = "auto"; //altezza da esteso
        this.urlMappa = "https://www.google.com/maps/search/?api=1&query=";
        this.chiudiAnteprima = true;
        this.eventMappa = Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "eventMappa", 7);
        this.eventShare = Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "eventShare", 7);
        this.eventVideo = Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "eventVideo", 7);
    }
    //passa a visualizzazione compatta
    wcVideo.prototype.close = function () {
        this.Component_Height = "100px";
        this.Component_Border = "black";
        this.Titolo_Visibility = "none";
        this.Titolo_Colore = "white";
        this.Titolo_Size = "0px";
        this.Img_Position = "absolute";
        this.Img_Larghezza = "95px";
        this.Img_Altezza = "95px";
        this.Img_MarginLeft = "5px";
        this.Descrizione_Color = "black";
        this.Mappa_Display = "none";
        this.Display = "none";
        this.DisplayReverse = "block";
        this.Opacity = "0";
        this.OpacityReverse = "1";
        this.DisplayReverse = "block";
        this.ImgTop = "auto";
        this.MousePointer = "default";
        this.MarginTitolo = "0px";
    };
    //passa a visualizzazione estesa
    wcVideo.prototype.open = function () {
        var _this = this;
        this.Component_Height = "auto";
        this.Component_Border = "white";
        this.Titolo_Visibility = "block";
        this.Titolo_Colore = "black";
        this.Titolo_Size = "25px";
        this.Img_Position = "relative";
        this.Img_Larghezza = "96%";
        this.Img_Altezza = "auto";
        this.Img_MarginLeft = "0px";
        this.Descrizione_Color = "white";
        this.Mappa_Display = "block";
        setTimeout(function () { _this.Display = "block"; }, 100);
        this.DisplayReverse = "none";
        this.Opacity = "1";
        setTimeout(function () { _this.OpacityReverse = "0"; }, 100);
        this.ImgTop = "-80px";
        this.MousePointer = "pointer";
        this.MarginTitolo = "40px";
    };
    wcVideo.prototype.DataEvento = function () {
        if (this.dataevento != "") {
            this.AddDurata++;
            return [
                Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", null, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("span", null, "data evento: "), this.dataevento)
            ];
        }
        return;
    };
    wcVideo.prototype.Orario = function () {
        if (this.orario != "") {
            this.AddDurata++;
            return [
                Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", null, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("span", null, "orario: "), this.orario)
            ];
        }
        return;
    };
    wcVideo.prototype.Durata = function () {
        if (this.durata != "" && this.AddDurata < 3) {
            return [
                Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", null, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("span", null, "durata: "), this.durata)
            ];
        }
        return;
    };
    wcVideo.prototype.CalcolaSizeH1 = function () {
        var titolo = "";
        /*if (this.titolo.length > 35) {
          for (let i = 0; i < 35; i++) {
            titolo += this.titolo[i];
          }
          titolo += "...";
        }
        else*/
        titolo = this.titolo;
        console.log(titolo);
        return titolo;
    };
    wcVideo.prototype.VisualizzaDettaglio = function () {
        if (this.chiudiAnteprima) {
            if (!this.aperto)
                this.open();
            else
                this.close();
            this.aperto = !this.aperto;
        }
        else
            this.chiudiAnteprima = true;
    };
    wcVideo.prototype.VisualizzaMappa = function (event) {
        this.chiudiAnteprima = false;
        this.eventMappa.emit(event);
    };
    wcVideo.prototype.VisualizzaShare = function (event) {
        this.chiudiAnteprima = false;
        this.eventShare.emit(event);
    };
    wcVideo.prototype.VisualizzaVideo = function (event) {
        if (this.aperto) {
            this.chiudiAnteprima = false;
            this.eventVideo.emit(event);
        }
    };
    wcVideo.prototype.render = function () {
        var _this = this;
        var styles = {
            '--displayReverse': this.DisplayReverse,
            '--imgTop': this.ImgTop,
            '--mousePointer': this.MousePointer,
            '--marginTitolo': this.MarginTitolo,
            '--Component_height': this.Component_Height,
            '--Component_Border': this.Component_Border,
            '--Titolo_Visibility': this.Titolo_Visibility,
            '--Titolo_Colore': this.Titolo_Colore,
            '--Titolo_Size': this.Titolo_Size,
            '--Img_Position': this.Img_Position,
            '--Img_Larghezza': this.Img_Larghezza,
            '--Img_Altezza': this.Img_Altezza,
            '--Img_MarginLeft': this.Img_MarginLeft,
            '--Descrizione_Color': this.Descrizione_Color,
            '--Mappa_Display': this.Mappa_Display,
            '--Display': this.Display,
            '--DisplayReverse': this.DisplayReverse,
            '--Opacity': this.Opacity,
            '--OpacityReverse': this.OpacityReverse
        };
        return [
            Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "component", onClick: function () { return _this.VisualizzaDettaglio(); }, style: styles }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("h1", { id: "TitoloEspanso" }, this.titolo, "Titolo"), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("svg", { class: "pointer", onClick: function (e) { return _this.VisualizzaVideo(e); }, id: "play", xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("path", { fill: 'none', d: 'M0 0h24v24H0V0z' }), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5z' })), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("img", { src: this.img }), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "descrizione" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { id: "centra" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("h1", { id: "titolo" }, this.CalcolaSizeH1(), "Titolo"), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { id: "anteprima" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", null, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("span", null, "pubblicato il: "), this.datapubblicazione), this.DataEvento(), this.Orario(), this.Durata()))), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { id: "Informazioni" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "testo" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", { id: "descrizione" }, this.descrizione)), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "info" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { id: "divMappa", onClick: function (e) { return _this.VisualizzaMappa(e); } }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("svg", { id: "mappa" }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("path", { fill: 'none', d: 'M0 0h24v24H0V0z' }), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("path", { d: 'M12 7.27l4.28 10.43-3.47-1.53-.81-.36-.81.36-3.47 1.53L12 7.27M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z' })), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", { id: "TxtMappa" }, "Indicazioni")), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { id: "divShare", onClick: function (e) { return _this.VisualizzaShare(e); } }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("svg", { id: "share", xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' }, Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("path", { fill: 'none', d: 'M0 0h24v24H0V0z' }), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("path", { d: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z' })), Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["f"])("p", { id: "TxtShare" }, "Condividi")))))
        ];
    };
    Object.defineProperty(wcVideo.prototype, "element", {
        get: function () { return Object(_wc_video_5effe51c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(wcVideo, "style", {
        get: function () { return "\@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap\");.component{padding:10px 0;height:var(--Component_Height);border:1px solid var(--Component_Border);margin-bottom:5px;width:100%;font-family:Source Sans Pro,sans-serif}.component,.component img{-webkit-transition:.3s;transition:.3s}.component img{position:var(--Img_Position);height:var(--Img_Altezza);width:var(--Img_Larghezza);margin-left:var(--Img_MarginLeft);z-index:0;display:block;margin-left:auto;margin-right:auto;max-width:900px;max-height:700px;top:var(--imgTop)}.component .descrizione{margin:0 0 0 100px;padding:0 18px 0 5px}.descrizione{color:var(--Descrizione_Color);-webkit-transition:.3s;transition:.3s}.descrizione #centra{height:100px;display:table-cell;vertical-align:middle}#titolo{position:relative;width:100%;height:auto;z-index:0;opacity:var(--OpacityReverse);-webkit-transition:1;transition:1}.descrizione h1{padding:0;margin:0 0 5px 0;font-size:18px;max-height:55px;overflow:hidden;width:calc(100vw - 125px)}.descrizione p{margin:1px 0;width:calc(100vw - 125);font-size:12px}.descrizione span{color:grey}.descrizione #campi{max-height:45px;overflow:hidden}#TitoloEspanso{visibility:var(--Titolo_Visibility);color:var(--Titolo_Colore);-webkit-transition:.3s;transition:.3s;font-size:var(--Titolo_Size);text-align:center;margin-top:var(--marginTitolo)}.info svg{position:relative;left:25px;height:30px;width:30px}.info p{float:left;margin:0}.testo{opacity:var(--Opacity);-webkit-transition:1.2s;transition:1.2s}#descrizione{position:relative;text-align:justify;display:var(--Mappa_Display);margin:auto;width:96%}.info{opacity:var(--Opacity);position:relative;margin-top:70px;top:20px;height:45px;width:100%;-webkit-transition:.3s;transition:.3s}#mappa{cursor:pointer;margin:0;padding:0}#mappa,#TxtMappa{display:var(--Display)}#TxtMappa{position:relative;top:8px}#share,#TxtShare{display:var(--Display);margin:0}#TxtShare{position:relative;top:8px;left:6px;padding:0}#Informazioni{display:var(--Display);top:-120px;position:relative}.margine{opacity:var(--OpacityReverse);position:relative;margin:50px 0;top:10px;height:45px;width:100%;-webkit-transition:.3s;transition:.3s;z-index:-2}#divMappa{left:2%}#divMappa,#divShare{position:relative;height:60px;width:80px;cursor:pointer}#divShare{top:-60px;left:120px;-ms-flex-line-pack:center;align-content:center}#play{display:var(--Display);height:80px;width:80px;z-index:1000000;opacity:var(--Opacity);position:relative;padding:20px;cursor:pointer;top:60px;margin-left:auto;margin-right:auto}#anteprima{opacity:var(--OpacityReverse);-webkit-transition:1;transition:1}.pointer{cursor:var(--mousePointer)}"; },
        enumerable: true,
        configurable: true
    });
    return wcVideo;
}());



/***/ })

}]);
//# sourceMappingURL=140.js.map