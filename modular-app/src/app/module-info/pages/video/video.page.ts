import { Component, ViewChild } from '@angular/core';
import { DatiServiceService } from '../../services/dati-service.service';
import { TipoEvento } from '../../domain/tipo-evento';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  urlMappa = "https://www.google.com/maps/search/?api=1&query=";

  isRicercaOpen: boolean = false;
  DatiEvento: TipoEvento[];
  daCercare: string;
  datiRicerca: TipoEvento[] = [];
  start: number = 0;
  vetNuoviDati;

  parametriPost = {
    "fromDate": null,
    "size": 10,
    "sortForList": 0,
    "source": ["Video di TrentoInforma"],
    "start": 0,
    "tag": [],
    "themes": []
  }

  constructor(private datiService: DatiServiceService, private social: SocialSharing) { }

  visualizzaMappa(latitudine: string, longitudine: string) {
    window.open(encodeURI(this.urlMappa + latitudine + "," + longitudine), '_system');
  }

  visualizzaShare(titolo: string, img: string, linkVideo: string) {
    console.log("Share");
    this.social.canShareViaEmail().then(() => {
      this.social.share(titolo.toString(), null, img.toString(), linkVideo.toString());
    }).catch(() => {
      alert("Il servizio di condivisione non è disponibile per questo dispositivo");
    });
  }

  visualizzaVideo(urlVideo: string) {
    window.open(encodeURI(urlVideo), '_system');
  }

  ngOnInit() {
    this.DatiEvento = this.datiService.getDati(this.parametriPost);
    console.log(this.DatiEvento);
    this.datiRicerca = this.DatiEvento;
  }

  OpenCloseRicerca() {
    if (!this.isRicercaOpen) {
      document.getElementById("barraDiRicerca").style.display = "inherit";
      document.getElementById("btnImpostazioniRicerca").innerHTML = "<svg width='24' height='24' viewBox='0 0 24 24'><path fill='none' d='M0 0h24v24H0V0z'/><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/></svg>";
      this.infiniteScroll.disabled = true;
      this.Ricerca();
    }
    else {
      document.getElementById("barraDiRicerca").style.display = "none";
      document.getElementById("btnImpostazioniRicerca").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='none' d='M0 0h24v24H0V0z'/><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>";
      this.datiRicerca = this.DatiEvento;
      this.infiniteScroll.disabled = false;
    }
    this.isRicercaOpen = !this.isRicercaOpen;
  }

  Ricerca() {
    let vetRisultati: any[] = [];
    if (this.daCercare != null) {
      for (let item of this.DatiEvento) {
        if ((item.description.toUpperCase().includes(this.daCercare.toUpperCase())) || (item.title.toUpperCase().includes(this.daCercare.toUpperCase()))) {
          vetRisultati.push(item);
        }
      }
      this.datiRicerca = vetRisultati;
      vetRisultati = null;
    }
  }

  caricaAltriDati(event) {
    this.start += 10;
    let parametriPost = {
      "fromDate": null,
      "size": 10,
      "sortForList": 0,
      "source": ["Video di TrentoInforma"],
      "start": this.start,
      "tag": [],
      "themes": []
    }
    this.vetNuoviDati = this.datiService.getDati(parametriPost);
    console.log(this.datiRicerca);

    setTimeout(() => { this.visualizzaDati(this.vetNuoviDati, event) }, 1500);
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

  formattaData(data): string {
    let anno: string = data.slice(0, 4);
    let mese: string = data.slice(4, 6);
    let giorno: string = data.slice(6, 8);
    return giorno + "/" + mese + "/" + anno;
  }
}