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
        cat?: <string>, --> Categoria Evento
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
  private tmpinfo = [];

  componentWillLoad(){
    if(this.contacts){
      this.contactsJSON = JSON.parse(this.contacts);
      this.buildDetail();
    }
  }

  contactClickHandler(type:string, value:string){
    this.contactClick.emit(type, value);
    console.log("Cliccato: ", type, value);
  }
  
  buildDetail() {
    var keys = Object.keys(this.contactsJSON)
    keys.forEach(k => {
      this.tmpinfo.push(
        <div class="container" onClick={()=>this.contactClickHandler(k,this.contactsJSON[k])}>
          <div class="icon">
          { (k.indexOf("distance")!=0) ? this.icons[k]("red") : this.icons[k](this.headingColor) }
          </div>
          <div class="contact-info">
            {this.contactsJSON[k]}
          </div>
        </div>,
        <br/>
      )
    });
  }

  private showContacts(){
    var tmp = 
    <div class="contacts">
      {this.tmpinfo}
    </div>
    if (this.tmpinfo.length > 0){
      return tmp;
    }
    else{
      return '';
    }
  }

  render() {
    
    return (
      <div class="container">
        <div class="image">
          <img src={this.img}></img>
        </div>
        <div class="info-title" style={{color:this.headingColor}}>
          {this.title}
        </div>
        {this.showContacts()}
        <div class="subtitle" innerHTML={this.subtitle} >
        </div>
        <div class="text" innerHTML={this.text}>
        </div>
        <div class="title-2" style={{color:this.headingColor}}>
          {(this.info && this.info!='') ? "Informazioni": ""}
        </div>
        <div class="info text" innerHTML={this.info}>
        </div>
      </div>
    )
  }

}
