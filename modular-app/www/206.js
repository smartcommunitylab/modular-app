(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[206],{

/***/ "./node_modules/wcs-dettagliofunerale/dist/esm/es5/build/jtuq09vl.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/wcs-dettagliofunerale/dist/esm/es5/build/jtuq09vl.entry.js ***!
  \*********************************************************************************/
/*! exports provided: DettaglioMorte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettaglioMorte", function() { return Sepoltura; });
/* harmony import */ var _wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wc-dettagliofunerale.core.js */ "./node_modules/wcs-dettagliofunerale/dist/esm/es5/wc-dettagliofunerale.core.js");
var Sepoltura=function(){function i(){this.height="184px",this.visibilitàEstesa="hidden",this.visibilitàCompatta="visible",this.transitionDelay="0.2s"}return i.prototype.condividiEvent=function(i){this.condividi.emit(i)},i.prototype.indicazioniEvent=function(i){this.indicazioni.emit(i)},i.prototype.calcolaAltezzaContainer=function(){this.openHeight=this.isFunerale?"490px":"445px"},i.prototype.close=function(){this.height="184px",this.visibilitàEstesa="hidden",this.visibilitàCompatta="visible",this.transitionDelay="0s"},i.prototype.open=function(){this.height=this.openHeight,this.visibilitàEstesa="visible",this.visibilitàCompatta="hidden",this.transitionDelay="0.2s"},i.prototype.createComponent=function(){var i=this,t={"--height":this.height,"--visibilità-estesa":this.visibilitàEstesa,"--visibiltà-compatta":this.visibilitàCompatta,"--transition-delay":this.transitionDelay};return this.isFunerale?[Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"bordo",style:t},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"container"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1",null,this.funerale.nominativo),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"riga"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"right",class:"colonna"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"nato il"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2",null,this.funerale.dataNascita)),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"left",class:"colonna"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"morto il"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2",null,this.funerale.dataMorte))),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"apri",onClick:function(){return i.open()}},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"maggiori informazioni"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{d:"M7 10l5 5 5-5H7z"}))),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"esteso"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",{id:"tipoEvento",class:"esteso"},"funerale celebrato presso"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2",{id:"titoloLuogo",class:"luogoFunerale esteso"},this.funerale.luogoFunerale),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",{id:"comune",class:"pFunerale esteso"},this.funerale.comuneFunerale),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"riga esteso funerale"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"right",class:"colonna"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"data"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2",null,this.funerale.dataFunerale)),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"left",class:"colonna"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"ora"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2",null,this.funerale.oraFunerale))),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"icone esteso"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"azioni",onClick:function(t){return i.indicazioniEvent(t)}},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg",{viewBox:"0 0 24 24"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"}),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle",{cx:"12",cy:"9",r:"2.5"})),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"Indicazioni")),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"secondaIcona",class:"azioni",onClick:function(t){return i.condividiEvent(t)}},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg",{viewBox:"0 0 24 24"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"})),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"Condividi"))),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"chiudi esteso",onClick:function(){return i.close()}},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"nascondi dettagli"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg",{viewBox:"0 0 24 24"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{d:"M7 14l5-5 5 5H7z"}))))))]:[Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"bordo",style:t},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"container"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1",null,this.defunto.nominativo),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"riga"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"right",class:"colonna"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"nato il"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2",null,this.defunto.dataNascita)),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"left",class:"colonna"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"morto il"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2",null,this.defunto.dataMorte))),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"apri",onClick:function(){return i.open()}},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"maggiori informazioni"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{d:"M7 10l5 5 5-5H7z"}))),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"esteso"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",{id:"tipoEvento",class:"esteso"},"luogo sepoltura"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2",{id:"titoloLuogo",class:"esteso"},this.defunto.paeseSepoltura),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",{id:"dettaglioSepoltura",class:"esteso"},"Fila: ",this.defunto.numeroFila," - Colonna: ",this.defunto.numeroColonna,Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("br",null),"Numero cella: ",this.defunto.numeroCella),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"icone esteso"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{onClick:function(t){return i.indicazioniEvent(t)}},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg",{viewBox:"0 0 24 24"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"}),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle",{cx:"12",cy:"9",r:"2.5"})),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"Indicazioni")),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"secondaIcona",onClick:function(t){return i.condividiEvent(t)}},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg",{viewBox:"0 0 24 24"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"})),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"Condividi"))),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"chiudi esteso",onClick:function(){return i.close()}},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,"nascondi dettagli"),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg",{viewBox:"0 0 24 24"},Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path",{d:"M7 14l5-5 5 5H7z"}))))))]},i.prototype.render=function(){return this.calcolaAltezzaContainer(),[Object(_wc_dettagliofunerale_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"component"},this.createComponent())]},Object.defineProperty(i,"is",{get:function(){return"dettaglio-morte"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"properties",{get:function(){return{defunto:{type:"Any",attr:"defunto"},funerale:{type:"Any",attr:"funerale"},height:{state:!0},isFunerale:{type:Boolean,attr:"is-funerale"},transitionDelay:{state:!0},"visibilitàCompatta":{state:!0},"visibilitàEstesa":{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"events",{get:function(){return[{name:"condividi",method:"condividi",bubbles:!0,cancelable:!0,composed:!0},{name:"indicazioni",method:"indicazioni",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return"\@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap\");.component{color:#707070;font-family:Source Sans Pro,sans-serif}.bordo{width:96%;height:var(--height);margin-left:2%;border:1px solid #707070;background:#fff;color:#707070;font-weight:300;overflow:visible;-webkit-transition:all .2s;transition:all .2s;margin-top:25px}.container{margin-left:3%;width:94%}.container *{margin-bottom:5px}.container h1{font-size:30px;padding-bottom:7px;border-bottom:1px solid #707070}#left,#right{width:47%;position:absolute}#left{left:47%}.colonna p{margin-top:10px;font-size:19px}.colonna h2{font-size:21px;margin-top:5px}.riga{height:75px;position:relative}#tipoEvento{border-top:1px solid #707070;padding-top:10px;margin-top:0;font-size:18px}#titoloLuogo{margin-top:17px;font-size:25px}#dettaglioSepoltura{margin-top:17px;font-size:19px}.esteso{visibility:var(--visibilità-estesa);-webkit-transition-delay:var(--transition-delay);transition-delay:var(--transition-delay)}.icone{margin-top:35px;height:80px}.icone div{text-align:center;position:absolute}.icone svg{width:45px;height:35px;margin-bottom:0}.icone p{margin-top:0;font-size:18px}#secondaIcona{left:42%}.chiudi{margin-top:-12px;text-align:center}.chiudi p{font-size:19px;font-weight:400;width:80%;margin-left:10%;margin-bottom:0}.chiudi svg{margin-top:-25px;width:80px;height:80px}#apri{visibility:var(--visibiltà-compatta);position:absolute;width:94%;margin-left:-3%;margin-top:-15px;text-align:center}#apri p{font-size:19px;font-weight:400;width:100%;margin-bottom:0}#apri svg{margin-top:-30px;width:80px;height:80px}#comune{margin-top:-5px}.funerale{margin-top:15px;margin-bottom:-8px}.pFunerale{font-size:19px}"},enumerable:!0,configurable:!0}),i}();

/***/ })

}]);
//# sourceMappingURL=206.js.map