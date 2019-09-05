import { Component, Element, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'wc-anteprima',
  styleUrl: 'wc-anteprima.css',
  shadow: true
})

export class cwAnteprima {

  @Element() element: HTMLElement;

  @Prop() titolo: string;
  @Prop() img: string;
  @Prop() datapubblicazione: string;
  @Prop() dataevento: string;
  @Prop() orario: string;
  @Prop() durata: string;
  @Prop() luogo: string;
  @Prop() descrizione: string;
  @Prop() showimage: boolean = true;
  @Prop() abstract: string;
  @Prop() web: string;
  @Prop() link: string;
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
  @State() OpacityReverse: string = "0";


  @Event() eventMappa: EventEmitter;
  @Event() eventShare: EventEmitter;

  aperto: boolean = false;
  AddDurata = 1;
  chiudiAnteprima: boolean = true;
  linkInner: string;
  webInner: string;

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
    this.OpacityReverse = "0";
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
    setTimeout(() => { this.OpacityReverse = "1" }, 100);
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
  componentDidLoad() {

    var links = this.element.shadowRoot.querySelector('.external-link');
    [].forEach.call(links, link => {
      link.addEventListener("mousedown", function (event) {
        console.log("href clicked, lets try to stop event propagation");
        event.stopPropagation();
        event.preventDefault();
        return false;
      });
    });

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


  VisualizzaMappa(todo: any) {
    this.chiudiAnteprima = false;
    this.eventMappa.emit(todo);
  }


  VisualizzaShare(todo: any) {
    this.chiudiAnteprima = false;
    this.eventShare.emit(todo);
  }

  render() {

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
      <div class="component" onClick={() => this.VisualizzaDettaglio()} style={styles}>
        {/* <h1 id="TitoloEspanso">{this.titolo}Titolo</h1> */}
        <h1 id="titolo">{this.titolo}</h1>

        <div class="detail-bar"></div>
        {this.showimage
          ? <img src={this.img}></img>
          : ""
        }
        <div class="descrizione">
          <div id="centra">
          </div>
        </div>
        <div id="Informazioni">
          <div id="data" innerHTML={this.datapubblicazione}></div>
          <div id="abstract" innerHTML={this.abstract}></div>
          <div class="testo">
            <p id="descrizione" innerHTML={this.descrizione}></p>
          </div>



          <div class="margine"></div>
          {this.link && this.link != ""
            ? <div class="external-link" onClick={() => this.openLink(this.link)} >DOWNLOAD</div>

            : ""
          }
          {this.web && this.link != ""
            ? <div class="external-link" onClick={() => this.openLink(this.web)} >APRI</div>

            : ""
          }
        </div>
      </div>
    ];
  }
  openLink(web: string): void {
    window.open(web, '_blank')
    }
  getLink(webInner: string): string {
    return "<a href='" + webInner + "' class='external-link'></a>"
  }
}
