import { Component, Prop, Event } from '@stencil/core';

@Component({
  tag: 'wc-path-list-el',
  styleUrl: 'wc-path-list-el.css',
  shadow: true
})
export class WcPathList {
  /** ID percorso */
  @Prop() id: string;
  /** Immagine del percorso */
  @Prop() img: string;
  /** Descrizione breve */
  @Prop() text: string;
  /** Titolo del percorso */
  @Prop() title: string;
  /** Colore titolo e bordo immagine */
  @Prop() mainColor: string;
  /** Colore descrizione breve */
  @Prop() descColor: string;
  /** Tipo di POI */
  @Prop() type: string;
  /** Colore sfondo card */
  @Prop() bgColor: string = "white";
  
  @Event({
    eventName: "pathSelected", 
    composed: true, 
    bubbles: true
  }) pathSelected: EventEmitter;

  pathSelectedHandler(path: string) {
    this.pathSelected.emit(path+";"+this.type);
  }

  render() {
    return (
      [
      <div class="container" onClick={() => this.pathSelectedHandler(this.id)} style={{background: this.bgColor}}>
        <div class="image">
          <img src={this.img}></img>
        </div>
        <div class="title">
          <h3 style={{color: this.mainColor}}>{this.title}</h3>
        </div>
        <div class="description">
          <p style={{color: this.descColor}} innerHTML={this.text} ></p>        
        </div>
      </div>
    ]
    );
  }
}
