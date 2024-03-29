import { Component, ViewChild } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonInfiniteScroll, IonContent, Platform } from '@ionic/angular';
import { DatiService } from '../../services/dati-service.service';
import * as moment from 'moment';
import { UtilsService } from '../../services/utils.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'funerali-page',
  templateUrl: 'funerali.page.html',
  styleUrls: ['funerali.page.scss'],
})
export class FuneraliPage {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent) content: IonContent;

  isRicercaOpen = false; //true se la barra di ricerca è aperta
  isGiorniOpen = false; //true se la barra dei giorni è aperta
  isSepoltura = false; //controlla se ci troviamo in schermata funerali o sepoltura
  linkMappa = "https://www.google.com/maps/search/?api=1&query="; //link a maps
  //todo stringhe
  string = "";
  vetFunerali: any[] = [];

  date = new Date(); //data odierna
  search: boolean;
  dates: any = [];
  showFunerali: any = [];
  fullDates: any = [];
  actualVisualized: any;
  dataMorte: any;
  dataFunerale: any;
  oraMorte: any;
  luogoFunerale: any;
  partenzaFunerale: any;
  mappa: any;
  condividi: any;
  emptyList: boolean = false;
  networkMessage: any;
  refElement: any;

  constructor(private social: SocialSharing,
    private datiService: DatiService,
    private plt: Platform,
    private utils: UtilsService,
    private translate: TranslateService) {
    var language = window[this.utils.getAppModuleName()]['language'];
    this.translate.use(language);
  }

  ngOnInit() {
    this.utils.presentLoading()
    this.CaricaDati().then(() => {
      if (this.dates.length > 0) {
        this.selectFirstDate();}
              this.utils.hideLoading();
    }, err => {
      this.utils.hideLoading();
    })
    this.translate.get('data_morte').subscribe(
      value => {
        this.dataMorte = value;
        this.dataFunerale = this.translate.instant('data_funerale');
        this.oraMorte = this.translate.instant('ora_morte');
        this.luogoFunerale = this.translate.instant('luogo_funerale');
        this.partenzaFunerale = this.translate.instant('partenza_funerale');
        this.mappa = this.translate.instant('mappa');
        this.condividi = this.translate.instant('condividi');
        this.networkMessage = this.translate.instant('network_message');
        this.string = JSON.stringify({
          dataMorte: this.dataMorte,
          dataFunerale: this.dataFunerale,
          oraMorte: this.oraMorte,
          luogoFunerale: this.luogoFunerale,
          partenzaFunerale: this.partenzaFunerale,
          mappa: this.mappa,
          condividi: this.condividi
        })
      }
    );

  }
  searchAndIos() {
    return this.plt.is('ios') && this.search
  }
  typingTimer;                //timer identifier
  doneTypingInterval = 500;  //time in ms, 5 second for example
  toggleSearch() {
    this.search = !this.search;
    const searchbar = <HTMLElement>document.querySelector('.search-funerali');
    if (searchbar.style.display === 'none') {
      searchbar.style.display = 'unset';
      searchbar.focus();
    } else {
      searchbar.style.display = 'none';
      this.dates.forEach(c => {
        this.showFunerali[c] = this.vetFunerali.filter(function (el) {
          return (el.dataFunerale == c);
        });
      });
    }
  }
  ionViewDidEnter() {
    if (this.dates.length > 0) {
      this.selectFirstDate();
      // this.selectInternalElement(this.refElement);
    }
  }
  subCategories(array: Array<any>) {
    var i = null;
    array.forEach((element, index) => {
      var data = element.dataFunerale;
      if (!this.fullDates.includes(data)) {
        this.fullDates.push(data);
        if (((moment(data, 'DD/MM/YYYY').isSame(moment(), "day")) || (moment(data, 'DD/MM/YYYY').isAfter(moment(), "day"))) && !i)
          i = this.fullDates.length - 1;
      }
    });
    if (!i)
      i = this.fullDates.length - 1;
    this.dates = this.fullDates;
    console.log("data" + JSON.stringify(this.dates));
    this.refElement = this.dates[i];

  }
  oneElement(category) {
    if (this.showFunerali && this.showFunerali[category])
      return (this.showFunerali[category].length > 0)
  }
  searchChanged(input: any) {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      if (!input.detail) {
        this.dates.forEach(c => {

          this.showFunerali[c] = this.vetFunerali.filter(el => {
            return (el.dataFunerale ? el.dataFunerale : el.dataPartenza == c);
          });
        });
        // emptyList = false;
      }
      else {
        const value = input.detail.value;
        // const _this = this;
        this.dates.forEach(c => {
          this.showFunerali[c] = this.vetFunerali.filter(el => {
            if (el.nome) {
              var data =el.dataFunerale ? el.dataFunerale : el.dataPartenza;
              return (el.nome.toLowerCase().indexOf(value.toLowerCase()) > -1 && data == c);
            }
            return false
          });
        });
      }
    }, this.doneTypingInterval);
  }

  buildShowPois(filters?) {
    this.showFunerali = [];
    this.vetFunerali.forEach(p => {
      var data = p.dataFunerale ? p.dataFunerale : p.dataPartenza;

      if (!this.showFunerali[data]) {
        this.showFunerali[data] = [];
      }
      if (filters ? filters.filter(item => {
        return (item.isChecked && p.cat.filter(cat => cat == item.value).length > 0)
        // if (p.cat)
        // return (item.isChecked && (p.cat.filter(cat => cat == item.value).length > 0 || p.parentObjectName == item.value))
        // else (item.isChecked &&   p.parentObjectName == item.value)
      }).length > 0 : true) {
        this.showFunerali[data].push(p);

      }
    });
    //orderArray
    // this.orderArray('asc', this);
  }
  // orderArray(condition: string, _this: any) {
  //   _this.categories.forEach(c => {
  //     if (condition.indexOf('asc') > -1) {
  //       _this.showPois[c] = _this.showPois[c].sort((a, b) => (a.fromTime > b.fromTime) ? 1 : -1);
  //     } else {
  //       _this.showPois[c] = _this.showPois[c].sort((a, b) => (a.fromTime < b.fromTime) ? 1 : -1);
  //     }
  //   });
  // }
  selectFirstDate() {
      setTimeout(() => {
        //scroll to posiition
        this.selectInternalElement(this.refElement);
        var element = document.getElementById(this.actualVisualized);
        if (element)
          element.scrollIntoView({ block: "center" });
      }
        , 500)
  }
  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    console.log("onIntersection");

    if (visible && this.actualVisualized != target.className)
      this.actualVisualized = target.className;
    //scroll to posiition
    var element = document.getElementById(this.actualVisualized);
    if (element)
      element.scrollIntoView({ block: "center" });
    // console.log(JSON.stringify(target) + "  " + visible);
  }
  isSelected(date) {
    return date == this.actualVisualized;
  }
  sendParam(item) {
    return JSON.stringify(item);
  }

  selectInternalElement(ref) {
    var elem: any = document.getElementsByClassName(ref);
    if (elem.length > 0) {
      let yOffset = elem[0].offsetTop;
      this.content.scrollToPoint(0, yOffset - 100, 0);
      var myElement = document.getElementById(ref);
      var topPos = myElement.offsetLeft;
      document.getElementById('idDates').scrollLeft = topPos - (window.innerWidth / 2);
    }
    this.actualVisualized = ref;

  }

  yyyymmdd(date: Date): string {
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    return [date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('');
  };
  //restituisce la data formattata
  GetFormattedData() {
    return this.date.getDate() + "/" + this.date.getMonth() + "/" + this.date.getFullYear();
  }

  //vai al giorno successivo
  NextDay() {
    this.date.setDate(this.date.getDate() + 1);
    document.getElementById("data").innerHTML = this.GetFormattedData();
  }

  //vai al giorno precedente
  PreviusDay() {
    this.date.setDate(this.date.getDate() - 1);
    document.getElementById("data").innerHTML = this.GetFormattedData();
  }


  Ricerca() {

  }

  //condividi da mobile per i funerali
  CondividiFunerali(i) {
    var msg =(i.nome + " " + this.luogoFunerale + i.luogoFunerale + " " + this.dataFunerale + i.dataFunerale + " " + this.oraMorte + i.oraFunerale)
    this.social?.share(msg);
    
  }

  // //condividi da mobile per sepolture
  // CondividSepolture(i) {
  //   this.social.canShareViaEmail().then(() => {
  //     this.social.share(this.vetDefunti[i].nominativo + " " + this.vetDefunti[i].paeseSepoltura, null, null);
  //   }).catch(() => {
  //     alert("Il servizio di condivisione non è disponibile per questo dispositivo");
  //   });
  // }

  //apre maps
  IndicazioniFunerali(i) {
    window.open(encodeURI(this.linkMappa + this.vetFunerali[i].luogoFunerale), '_system')
  }

  // //apre maps
  // IndicazioniSepolture(i) {
  //   window.open(encodeURI(this.linkMappa + this.vetDefunti[i].paeseSepoltura), '_system')
  // }

  //mostra il div contenente i funerali e nasconde le sepolture
  Funerali() {
    document.getElementById("sepolture").style.display = "none";
    document.getElementById("funerali").style.display = "inherit";
    document.getElementById("titleSepoltura").style.fontWeight = "300";
    document.getElementById("titleFunerali").style.fontWeight = "600";
    this.isSepoltura = false;
    this.CloseRicerca();
  }

  //mostra il div contenente le sepolture e nasconde i funerali
  Sepolture() {
    document.getElementById("sepolture").style.display = "inherit";
    document.getElementById("funerali").style.display = "none";
    document.getElementById("titleSepoltura").style.fontWeight = "600";
    document.getElementById("titleFunerali").style.fontWeight = "300";
    this.isSepoltura = true;
    this.CloseRicerca();
  }

  //gestisce l'apertura e la chiusura della ricerca
  OpenCloseRicerca() {
    this.isRicercaOpen = !this.isRicercaOpen;
    console.log('isRicercaOpen');
    if (!this.isRicercaOpen) {
      document.getElementById("ricercaNome").style.display = "inherit";
      if (this.isSepoltura) {
        document.getElementById("buttonGiorni").style.visibility = "hidden"; //se è sepoltura nasconde la barra giorni
      }
      else {
        document.getElementById("buttonGiorni").style.visibility = "visible";
      }
      document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="close"></ion-icon>'; //imposta come svg in alto a destra una croce
      // this.isRicercaOpen = true;
    }
    else {
      this.CloseRicerca();
    }
  }

  //test per l'infinity scroll
  CaricaDati(): Promise<any> {

    return new Promise<void>((resolve, reject) => {
      let startDate = new Date();
      var pastDate = startDate.getDate() - 7;
      startDate.setDate(pastDate);
      this.datiService.getDati(this.yyyymmdd(startDate)).then((res) => {
        if (res.length > 0) {
          this.emptyList = false;
          console.log(res);
          this.vetFunerali = this.convertDates(res);
          this.vetFunerali = this.cleanNames(this.vetFunerali);
          this.subCategories(this.vetFunerali);
          this.buildShowPois();
        } else {
          this.emptyList = true;
        }
        resolve();
      }, err => {
        reject();
        this.emptyList = true;
        this.utils.showErrorConnectionMessage(this.networkMessage);
      })
    })
  }
  cleanNames(vetFunerali: any[]): any[] {
    return vetFunerali.map(el => {
      if (el.nome)
        el.nome = el.nome.replace(/,/g, ' ');
      return el

    })
  }
  convertDates(res: any): any[] {
    return res.map(el => {

      if (el.dataFunerale)
        el.dataFunerale = (moment(el.dataFunerale, 'YYYY-MM-DD').format('DD/MM/YYYY'))
      if (el.dataMorte)
        el.dataMorte = (moment(el.dataMorte, 'YYYY-MM-DD').format('DD/MM/YYYY'))
      if (el.oraFunerale)
        el.oraFunerale = (moment(el.oraFunerale, 'HH:mm:ss').format('HH:mm'))
      if (el.dataPartenza)
        el.dataPartenza = (moment(el.dataPartenza, 'YYYY-MM-DD').format('DD/MM/YYYY'))
      if (el.oraPartenza)
        el.oraPartenza = (moment(el.oraPartenza, 'HH:mm:ss').format('HH:mm'))
      return el;
    })

  }

  //chiude la ricerca
  CloseRicerca() {
    document.getElementById("ricercaNome").style.display = "none";
    document.getElementById("barraGiorni").style.height = "0px";
    document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="search"></ion-icon>';
    // this.isRicercaOpen = false;
    this.isGiorniOpen = false;
  }

  //apre la barra dei giorni
  OpenBarraGiorni() {
    if (this.isGiorniOpen) {
      document.getElementById("barraGiorni").style.height = "0px";
    }
    else {
      document.getElementById("barraGiorni").style.height = "auto";
    }
    this.isGiorniOpen = !this.isGiorniOpen;
  }

  //raggiunge la cima della pagina
  GoOnTop() {
    document.getElementById("top").scrollIntoView();
  }
}
