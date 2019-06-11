import { Component, Prop, Event } from '@stencil/core';
import { Icons } from '../../utils/icons';
import { DetailsInfo } from '../../utils/utils';

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

  /** Titolo del percorso */
  @Prop() title: string;
  /** Sottotitolo del percorso */
  @Prop() subtitle: string;
  /** Immagine del percorso */
  @Prop() img: string;
  /** Descrizione e testo */
  @Prop({mutable:true}) text: string;
  /** Informazioni a fine pagina */
  @Prop() info: string;
  /** Colore titoli */
  @Prop() headingColor: string = "red";
  /** Oggetto JSON per contatti e info aggiuntive */
  @Prop({mutable:true}) contacts:string;

  @Event() contactClick: EventEmitter;

  private icons = new Icons().iconList;
  private contactsJSON: DetailsInfo;
  private tmptags = [];
  private tmpContacts = [];

  componentWillLoad(){
    if(this.contacts){
      this.contactsJSON = JSON.parse(this.contacts);
      this.buildTag();
      this.buildContacts(this.contactsJSON);
    }
  }

  contactClickHandler(type:string, value:string){
    this.contactClick.emit(type, value);
    console.log("Cliccato: ", type, value);
  }
  
  buildTag() {
    if(this.contactsJSON.cat){
      this.contactsJSON.cat.forEach(c => {
        this.tmptags.push(
          <div class="tag"><p>{c}</p></div>
        )
      });
    }
  }

  private showTags(){
    var tmp = 
    <div class="tags">
      {this.tmptags}
    </div>
    if (this.tmptags.length > 0){
      return tmp;
    }
    else{
      return '';
    }
  }

  buildContacts(arr: DetailsInfo){
    var tmp: any = {};

    if (arr.address) {
      tmp.address = arr.address;
    }
    if (arr.phone) {
      tmp.phone = arr.phone;
    }
    if (arr.url) {
      tmp.url = arr.url;
      tmp.share = arr.url;
    }

    var keys = Object.keys(tmp);

    keys.forEach(k => {
      this.tmpContacts.push(
        <div class="contact-container" onClick={() => k.indexOf('share') > -1 ? 
        this.contactClickHandler(k,this.contactsJSON['url']) : 
        this.contactClickHandler(k,this.contactsJSON[k])
      }>
          <div class="icon">
            {this.icons[k]("black")}
          </div>
          <div class="contactLabel">{k}</div>
        </div>
      )
    });
  }

  render() {
    
    return (
      <div class="card">
        <div class="container">
          <div class="info-title" style={{color:this.headingColor}}>
            {this.title}
          </div>
          <div class="subtitle" innerHTML={this.subtitle} >
          </div>
          <div class="image">
            <img src={this.img}></img>
          </div>
          <div class="contacts">
            {this.tmpContacts}
          </div>
          <hr/>
          <div class="datetime">
            {(this.contactsJSON)?((this.contactsJSON.date)?this.contactsJSON.date:''):''} {(this.contactsJSON)?((this.contactsJSON.time)?this.contactsJSON.time:''):''}
          </div>
          <div class="address">
            {(this.contactsJSON)?this.contactsJSON.address:''}
          </div>
          {this.showTags()}
          <div class="text" innerHTML={this.text}>
          </div>
          <div class="title-2" style={{color:this.headingColor}}>
            {(this.info && this.info!='') ? "Informazioni": ""}
          </div>
          <div class="info text" innerHTML={this.info}>
          </div>
        </div>
      </div>
    )
  }

}
