import { Component, Prop, Event, EventEmitter, State } from '@stencil/core';
import { TipoFunerale } from '../../Dati/tipoDatiFunerali';

//eventi generati: condividi, indicazioni
//versione pacchetto 0.2.3, per compilare in stencil cambiare versione di stencil

@Component({
  tag: 'dettaglio-morte',
  styleUrl: 'dettaglio-morte.css',
  shadow: true
})

export class Sepoltura {

  // @Prop() defunto: TipoDefunto; //defunto
  @Prop() string: string;
  @Prop() funerale: string; //funerale
  @State() funeraleState: TipoFunerale; //funerale
  @State() stringState; //funerale
  // @Prop() isFunerale: boolean; //true se è un funerale, false se è un defunto

  // @State() height: string = "184px"; //altezza del contenitore
  // @State() visibilitàEstesa: string = "hidden"; //visualizzazione estesa
  // @State() visibilitàCompatta: string = "visible"; //visualizzazione compatta
  // @State() transitionDelay: string = "0.2s"; //delay utile a non far scomparire gli elementi prima della chiusura della finestra

  // openHeight: string; //altezza da esteso

  @Event() condividi: EventEmitter; //evento genreato col click di condividi
  @Event() indicazioni: EventEmitter; //evento genrato col click di indicazioni

  componentWillLoad() {
    this.funeraleState = JSON.parse(this.funerale);
    this.stringState = JSON.parse(this.string);
  }
  condividiEvent(todo: any) {
    this.condividi.emit(todo);
  }

  indicazioniEvent(todo: any) {
    this.indicazioni.emit(todo);
  }

  // calcolaAltezzaContainer(){
  //   if(this.isFunerale){
  //     this.openHeight="490px";
  //   }
  //   else{
  //     this.openHeight="445px";
  //   }
  // }

  //passa a visualizzazione compatta
  // close() {
  //   this.height = "184px";
  //   this.visibilitàEstesa = "hidden";
  //   this.visibilitàCompatta = "visible";
  //   this.transitionDelay = "0s";
  // }

  //passa a visualizzazione estesa
  // open() {
  //   this.height = this.openHeight;
  //   this.visibilitàEstesa = "visible";
  //   this.visibilitàCompatta = "hidden";
  //   this.transitionDelay = "0.2s";
  // }

  //crea la componente in base al suo tipo (Funerale o Sepoltura)
  createComponent() {
    // var styles = {
    //   '--height': this.height,
    //   '--visibilità-estesa': this.visibilitàEstesa,
    //   '--visibiltà-compatta': this.visibilitàCompatta,
    //   '--transition-delay': this.transitionDelay
    // };

    return [
      <div class="container">

        <div class="nome">{this.funeraleState ? this.funeraleState.nome : ""}</div>
        <div class="horizontal-line"></div>
        <div class="riga">
          <div class="label">{this.stringState["dataMorte"]}</div>
          <div class="dato">{this.funeraleState.dataMorte ? this.funeraleState.dataMorte : ""}</div>
        </div>
        {this.funeraleState.dataPartenza
          ? <div class="label text-center">{this.stringState["partenzaFunerale"]}</div>
          : <div class="label text-center">{this.stringState["luogoFunerale"]}</div>
        }
        <div class="dato text-center">{this.funeraleState.luogoFunerale ? this.funeraleState.luogoFunerale : ""}</div>
        <div class="data-label">
          <div class="label ">{this.stringState["dataFunerale"]}</div>
          {this.funeraleState.dataPartenza
            ? <div class="dato">{this.funeraleState.dataPartenza}</div>
            : <div class="dato">{this.funeraleState.dataFunerale ? this.funeraleState.dataFunerale : ""}</div>
          }
        </div>
        <div class="data-label">
          <div class="label ">{this.stringState["oraMorte"]}</div>
          {this.funeraleState.dataPartenza
            ? <div class="dato ">{this.funeraleState.oraPartenza}</div>
            : <div class="dato ">{this.funeraleState.oraFunerale ? this.funeraleState.oraFunerale : ""}</div>
          }
        </div>
        <div class="icone esteso">
          {/* <div class="azioni" onClick={e => this.indicazioniEvent(e)}>
            <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path fill="#11b3ef" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" fill="#11b3ef" /></svg>
            <div class="azione-label">{this.stringState["mappa"]}</div>
          </div> */}
          {/* <div id="secondaIcona" class="azioni" onClick={e => this.condividiEvent(e)}>
            <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path fill="#11b3ef" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
            {/* <div class="azione-label">{this.stringState["condividi"]}</div> }
          </div> */}
          <div class="contact-container" onClick={e => this.condividiEvent(e)}>
          <div class="icon icon-contact" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path fill="#11b3ef"  d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
            </svg>            </div>  
            </div>
        </div>
      </div>
    ];
  }

  render() {
    // this.calcolaAltezzaContainer();
    return [
      <div class="component">
        {this.createComponent()}
      </div>
    ];
  }
}