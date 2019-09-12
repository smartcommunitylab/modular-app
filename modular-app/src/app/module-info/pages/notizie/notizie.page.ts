import { Component, ViewChild } from '@angular/core';
import { DatiServiceService } from '../../services/dati-service.service';
import { TipoEvento } from '../../domain/tipo-evento';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonInfiniteScroll, Platform } from '@ionic/angular';
import { ConfigService } from '../../services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'notizie-page',
  templateUrl: 'notizie.page.html',
  styleUrls: ['notizie.page.scss'],
})


export class NotiziePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  urlMappa = "https://www.google.com/maps/search/?api=1&query=";

  isRicercaOpen: boolean = false;
  DatiEvento: TipoEvento[];
  daCercare: string;
  datiRicerca: TipoEvento[] = [];
  vetDate: Date[] = [];
  emptyList: boolean = false;
  start: number = 0;
  vetNuoviDati;
  parametriPost = {
    "fromDate": null,
    "size": 10,
    "sortForList": 1,
    "source": ["Avvisi oggetti rinvenuti"],
    "start": 0
  }
  language: any;
  stringData: any;


  constructor(private datiService: DatiServiceService, 
    private plt:Platform,
     private social: SocialSharing,
      private config: ConfigService, 
      private translate: TranslateService,
      private utils:UtilsService) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
  }

  visualizzaMappa(latitudine: string, longitudine: string) {
    window.open(encodeURI(this.urlMappa + latitudine + "," + longitudine), '_system');
  }
  searchAndIos() {
    return this.plt.is('ios') && this.isRicercaOpen
  }
  visualizzaShare(titolo: string, img: string, descrizione: string) {
    console.log("Share");
    this.social.canShareViaEmail().then(() => {
      this.social.share(titolo.toString() + " " + descrizione.toString(), null, img.toString());
    }).catch(() => {
      alert("Il servizio di condivisione non è disponibile per questo dispositivo");
    });
  }

  ngOnInit() {
    this.translate.get('data_pubblicazione').subscribe(x=>{
      this.stringData=x;
    });
    this.utils.presentLoading();
    this.datiService.getDati(this.parametriPost).then(data => {
      if (data.length == 0) {
        this.emptyList = true;
      }
      this.DatiEvento = data;
      this.DatiEvento.forEach(evento => {
        evento.image = evento.image.replace('.jpg', '_medium.jpg');
      })
      this.datiRicerca = this.DatiEvento;
      this.utils.hideLoading();
    },err => {
      this.utils.hideLoading();

    });

  }



  visualizzaDati(vet, event) {
    for (let item of vet) {
      this.datiRicerca.push(item);
    }
    console.log(this.datiRicerca);

    if (vet.length < 10) {
      event.target.disabled = true;
    }
    event.target.complete();
  }

  OpenCloseRicerca() {
    this.isRicercaOpen = !this.isRicercaOpen;
    const searchbar = <HTMLElement>document.querySelector('.search-notizie');
    if (searchbar.style.display === 'none') {
      searchbar.style.display = 'unset';
      searchbar.focus();
      this.datiRicerca = this.DatiEvento;
    } else {
      searchbar.style.display = 'none';
    }
  }


  typingTimer;                //timer identifier
  doneTypingInterval = 500;  //time in ms, 5 second for example
  Ricerca() {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      if (this.daCercare!=null) {
          let parametriPost = {
            "fromDate": null,
            "size": 10,
            "sortForList": 1,
            "source": ["Avvisi oggetti rinvenuti"],
            "start": 0,
            "filter":this.daCercare
          }
          this.datiService.getDati(parametriPost).then(data => {
            if (data.length == 0) {
              this.emptyList = true;
            }
             else {
               this.emptyList = false;
               this.DatiEvento = data;
               this.DatiEvento.forEach(evento => {
                evento.image = evento.image.replace('.jpg', '_medium.jpg');
              })
               this.datiRicerca = this.DatiEvento;
             }

          });
        }
    }, this.doneTypingInterval);

  }

  caricaAltriDati(event) {
    this.start += 10;
    let parametriPost = {
      "fromDate": null,
      "size": 10,
      "sortForList": 1,
      "source": ["Avvisi oggetti rinvenuti"],
      "start": this.start,
      "filter":this.daCercare
    }
    this.datiService.getDati(parametriPost).then(dati => {
      this.vetNuoviDati = dati;
      this.visualizzaDati(this.vetNuoviDati, event)
    });
    console.log(this.datiRicerca);

  }
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

  formattaData(data): string {
    let anno: string = data.slice(0, 4);
    let mese: string = data.slice(4, 6);
    let giorno: string = data.slice(6, 8);
    return this.stringData+ giorno + "/" + mese + "/" + anno;
  }
}
