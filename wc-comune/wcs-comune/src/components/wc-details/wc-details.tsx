import { Component, Prop, Event, Element } from '@stencil/core';
import { Icons } from '../../utils/icons';
import { DetailsInfo } from '../../utils/utils';
// import { getLocaleComponentStrings } from "../../utils/locale";

@Component({
  tag: 'wc-details',
  styleUrl: 'wc-details.css',
  shadow: true
})
export class WcDetails {
  /** Oggeto JSON contenente i dettagli dei contatti. */
  /*  { 
        address: <string>, --> Indirizzo
        distance: <string>, --> Distanza da posizione attuale
        email?: <string>, --> Indirizzo Email
        phone?: <string>, --> Numero di telefono
        url?: <string>, --> Link Homepage POI
        date?: <string>, --> Date evento
        time?: <string>, --> Orari Evento
        price?: <string>, --> Prezzi evento
        cat?: Array<string>, --> Categoria Evento
      }
  */
  @Prop() id: string;
  /** Titolo del percorso */
  @Prop() title: string;
  /** Sottotitolo del percorso */
  @Prop() subtitle: string;
  /** Immagine del percorso */
  @Prop() img: string;
  /** Descrizione e testo */
  @Prop({ mutable: true }) text: string;
  /** Informazioni a fine pagina */
  @Prop() info: string;
  /** Colore titoli */
  @Prop() headingColor: string = "#707070";
  /** Colore tag e puslanti */
  @Prop() secondColor: string = "red";
  /** Oggetto JSON per contatti e info aggiuntive */
  @Prop({ mutable: true }) contacts: string;
  /** Scritta alternativa per immagine */
  @Prop() altImage: string
  /** Lingua da utilizzare */
  @Prop() language: string
  /*external strings for contacts*/
  @Prop() stringsinput: string;
  /*more details or not*/
  @Prop() expandable: boolean = false;
  /*more details or not*/
  @Prop() expanse: boolean = false;
  /*distance  */
  @Prop() distance: string;
  @Prop() showimg: boolean = true;
  @Prop() showtags: boolean = true;
  @Event() contactClick: EventEmitter;
  /*Emit when the expandable is clicked*/
  @Event() expandeClick: EventEmitter;
  /*Emit when the tag is clicked*/
  @Event() tagClicked: EventEmitter;
  @Element() element: HTMLElement;

  private icons = new Icons().iconList;
  private contactsJSON: DetailsInfo;
  private tmptags = [];
  private tmpContacts = [];
  private strings: any;
  private url: any;
  async componentWillLoad() {
    if (this.stringsinput) {
      this.strings = JSON.parse(this.stringsinput);
    }
    // this.strings = await getLocaleComponentStrings(this.element,this.language);

    if (this.contacts) {
      this.contactsJSON = JSON.parse(this.contacts);
      this.buildTag();
      this.buildContacts(this.contactsJSON);
    }
  }

  contactClickHandler(type: string, value: string, event: UIEvent) {
    event.stopPropagation();
    var returnValue = {
      type: type,
      value: value
    }
    this.contactClick.emit(JSON.stringify(returnValue));
    console.log("Cliccato: ", type, value);
  }
  clickTag(tag, event: UIEvent) {
    this.tagClicked.emit(tag)
    event.stopPropagation();;
  }
  buildTag() {
    if (this.contactsJSON.cat) {
      this.contactsJSON.cat.forEach(c => {
        this.tmptags.push(
          <div class="tag" onClick={(event: UIEvent) => this.clickTag(c, event)}><p>{c}</p></div>
        )
      });
    }
  }

  private showTags() {
    var tmp =
      <div class="tags">
        {this.tmptags}
      </div>
    if (this.tmptags.length > 0) {
      return tmp;
    }
    else {
      return '';
    }
  }

  buildContacts(arr: DetailsInfo) {
    var tmp: any = {};

    if (arr.address) {
      tmp.address = arr.address;
    }
    if (arr.phone) {
      tmp.phone = arr.phone;
    }
    if (arr.url) {
      this.url = arr.url;
    }
    tmp.share = this.contactsJSON;

    var keys = Object.keys(tmp);

    keys.forEach(k => {
      this.tmpContacts.push(
        <div class="external-container">
          <div class="contact-container" onClick={(event: UIEvent) => k.indexOf('share') > -1 ?
            this.contactClickHandler(k, JSON.stringify(this.contactsJSON), event) :
            this.contactClickHandler(k, this.contactsJSON[k], event)
          }>
            <div class="icon icon-contact">
              {this.icons[k](this.secondColor)}
            </div>
            <div class="contactLabel">{this.strings[k]}</div>
          </div>
        </div>
      )
    });
  }
  expande(event: UIEvent) {
    console.log("expande");
    this.expandeClick.emit(this.id);
    event.stopPropagation();

  }
  render() {

    return (
      <div class={!this.expanse ? "card" : ""} onClick={(event: UIEvent) => this.expandable ?
        this.expande(event)
        : ""
      }>
        {
          this.expanse
            ? <div>
              {this.img && this.showimg
                ? <div class="expanse-image image">
                  <img src={this.img} alt={this.altImage}></img>
                </div>
                : ""
              }
            </div>
            : ""
        }
        <div class="container">
          <div class="info-title" style={{ color: this.headingColor }}>
            {this.title}
          </div>
          <div class="subtitle" innerHTML={this.subtitle} >
          </div>
          {this.expandable
            ? <div class="detail-bar"></div>
            : ""
          }
          {!this.expanse
            ? <div>
              {this.img && this.showimg
                ? <div class="image">
                  <img src={this.img} alt={this.altImage}></img>
                </div>
                : ""
              }
            </div>
            : ""
          }
          <div class="contacts">
            {this.tmpContacts}
          </div>
          {this.url
            ? <div class="url" onClick={(event: UIEvent) => this.contactClickHandler("url", this.url, event)}>
              {(this.url) ? this.url : ''}
            </div>
            : ""
          }
          <div class="datetime">
            {(this.contactsJSON) ? ((this.contactsJSON.date) ? this.contactsJSON.date : '') : ''} {(this.contactsJSON) ? ((this.contactsJSON.time) ? this.contactsJSON.time : '') : ''}
          </div>
          <div class="address">
            {(this.contactsJSON) ? this.contactsJSON.address : ''}
          </div>
          <div class="distance">
            {(this.distance) ? this.distance : ''}
          </div>
          {this.showtags
            ? <div>{this.showTags()}</div>
            : ""
          }

          {this.expanse
            ? <div class="description">
            <div class="text" innerHTML={this.text}></div>
              <div class="title-2" style={{ color: this.headingColor }}>
                {(this.info && this.info != '') ? "Informazioni" : ""}
              </div>
              <div class="info text" innerHTML={this.info}>
              </div>
            </div>
            : ""
          }
        </div>
      </div>
    )
  }

}
