import { Component, Element, Prop, State, Event, EventEmitter, h } from '@stencil/core';


@Component({
  tag: 'wc-video',
  styleUrl: 'wc-video.css',
  shadow: true
})
export class wcVideo {
  @Element() element: HTMLElement;

  @State() @Prop() titolo: string;
  @Prop() img: string;
  @Prop() video: string;

  @Prop() datapubblicazione: string;
  @Prop() dataevento: string;
  @Prop() orario: string;
  @Prop() durata: string;

  @Prop() luogo: string;
  @Prop() descrizione: string;

  @State() Component_Height: string = "100px"; //altezza della componente
  @State() Component_Border: string = "black"; 
  
  @State() Titolo_Visibility: string = "collapse"; //visualizzazione estesa
  @State() Titolo_Colore: string = "white"; //delay utile a non far scomparire gli elementi prima della chiusura della finestra
  @State() Titolo_Size: string = "0px"; //visualizzazione estesa
  
  @State() Img_Position: string = "absolute";
  @State() Img_Larghezza: string = "95px";
  @State() Img_Altezza: string = "95px";
  @State() Img_MarginLeft: string = "5px";

  @State() Descrizione_Color: string = "black";

  @State() Mappa_Display: string = "none";
  @State() Display: string = "none";
  @State() DisplayReverse: string = "block";
  @State() Opacity: string = "0";
  @State() OpacityReverse: string = "1";



  @State() ImgTop: string = "auto";

  @State() MousePointer: string = "default";

  @State() MarginTitolo: string = "0px";






  @Event() eventMappa: EventEmitter;
  @Event() eventShare: EventEmitter;
  @Event() eventVideo: EventEmitter;




  aperto: boolean = false;
  AddDurata = 1;
  openHeight: string = "auto"; //altezza da esteso


  urlMappa = "https://www.google.com/maps/search/?api=1&query=";


  chiudiAnteprima: boolean = true;

  //passa a visualizzazione compatta
  close() {
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
  }

  //passa a visualizzazione estesa
  open() {
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
    setTimeout(() => { this.Display = "block" }, 100);
    this.DisplayReverse = "none";
    this.Opacity = "1";
    setTimeout(() => { this.OpacityReverse = "0" }, 100);
   
    this.ImgTop = "-80px";
    this.MousePointer = "pointer";
    this.MarginTitolo = "40px";
  }

  DataEvento() {
    if (this.dataevento != "") {
      this.AddDurata++;
      return [
        <p><span>data evento: </span>{this.dataevento}</p>
      ]
    }
    return;
  }

  Orario() {
    if (this.orario != "") {
      this.AddDurata++;
      return [
        <p><span>orario: </span>{this.orario}</p>
      ]
    }
    return;
  }

  Durata() {
    if (this.durata != "" && this.AddDurata < 3) {
      return [
        <p><span>durata: </span>{this.durata}</p>
      ]
    }
    return;
  }

  CalcolaSizeH1() {
    let titolo = "";
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
  }

  VisualizzaDettaglio() {
    if (this.chiudiAnteprima) {
      if (!this.aperto)
        this.open();
      else
        this.close();

      this.aperto = !this.aperto;
    } else
      this.chiudiAnteprima = true;
  }


  VisualizzaMappa(event: any) {
    this.chiudiAnteprima = false;
    this.eventMappa.emit(event);
  }


  VisualizzaShare(event: any) {
    this.chiudiAnteprima = false;
    this.eventShare.emit(event);
  }

  VisualizzaVideo(event: any) {
    if (this.aperto) {
      this.chiudiAnteprima = false;
      this.eventVideo.emit(event);
    }
  }

  render() {

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
      <div class="component" onClick={() => this.VisualizzaDettaglio()} style={styles}>
        <h1 id="TitoloEspanso">{this.titolo}Titolo</h1>
        <svg class="pointer" onClick={(e) => this.VisualizzaVideo(e)} id="play" xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='none' d='M0 0h24v24H0V0z' /><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5z' /></svg>
        <img src={this.img}></img>
        <div class="descrizione">
          <div id="centra">
            <h1 id="titolo">{this.CalcolaSizeH1()}Titolo</h1>
            <div id="anteprima">
              <p><span>pubblicato il: </span>{this.datapubblicazione}</p>
              {this.DataEvento()}
              {this.Orario()}
              {this.Durata()}
            </div>
          </div>
        </div>
        <div id="Informazioni">
          <div class="testo">
            <p id="descrizione">{this.descrizione}</p>
          </div>
          <div class="info" >
            <div id="divMappa" onClick={(e) => this.VisualizzaMappa(e)}>
              <svg id="mappa" ><path fill='none' d='M0 0h24v24H0V0z' /><path d='M12 7.27l4.28 10.43-3.47-1.53-.81-.36-.81.36-3.47 1.53L12 7.27M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z' /></svg>
              <p id="TxtMappa">Indicazioni</p>
            </div>
            <div id="divShare" onClick={(e) => this.VisualizzaShare(e)}>
              <svg id="share" xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='none' d='M0 0h24v24H0V0z' /><path d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z' /></svg>
              <p id="TxtShare">Condividi</p>
            </div>
          </div>
        </div>
      </div>
    ];
  }
}
