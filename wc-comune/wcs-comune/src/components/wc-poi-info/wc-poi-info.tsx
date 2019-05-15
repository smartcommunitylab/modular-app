import { Component, Prop, Event } from '@stencil/core';
import { Icons } from '../../utils/icons';

@Component({
  tag: 'wc-poi-info',
  styleUrl: 'wc-poi-info.css',
  shadow: true
})
export class WcPathInfo {
/** Oggeto JSON contenente i dettagli dei contatti. */
  /*  { 
        address: <string>, --> Indirizzo
        distance: <string>, --> Distanza da posizione attuale
        email?: <string>, --> Indirizzo Email
        phone?: <string>, --> Numero di telefono
        url?: <string> --> Link Homepage POI
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
  private contactsJSON: { address:string, distance:string, email?:string, phone?:string, url?:string  };
  
  componentWillLoad(){
    this.contactsJSON = JSON.parse(this.contacts);
  }

  contactClickHandler(type:string, value:string){
    this.contactClick.emit(type, value);
    console.log("Cliccato: ", type, value);
  }

  render() {
    var keys = Object.keys(this.contactsJSON)
    var tmpinfo = [];

    keys.forEach(k => {
      tmpinfo.push(
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
    
    return (
      <div class="container">
        <div class="image">
          <img src={this.img}></img>
        </div>
        <div class="info-title" style={{color:this.headingColor}}>
          {this.title}
        </div>
        <div class="contacts">
          {tmpinfo}
        </div>
        <div class="subtitle">
          {this.subtitle}
        </div>
        <div class="text">
          {this.text}
        </div>
        <div class="title-2" style={{color:this.headingColor}}>
          Informazioni
        </div>
        <div class="info text">
          {this.info}
        </div>
      </div>
    )
  }

}
