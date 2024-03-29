import { Component, Prop, Event,h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wc-path-list-el',
  styleUrl: 'wc-path-list-el.css',
  shadow: true
})
export class WcPathList {
  /** ID percorso */
  @Prop() identifier: string;
  /** Immagine del percorso */
  @Prop() img: string;
  /** Descrizione breve */
  @Prop() text: string;
  /** Titolo del percorso */
  @Prop() titlePath: string;
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
      <div class="container" onClick={() => this.pathSelectedHandler(this.identifier)} style={{background: this.bgColor}}>
        <div class="title">
          <div style={{color: this.mainColor}}>{this.titlePath}</div>
        </div>
        <div class="detail-bar"></div>
        <div class="description">
          <div style={{color: this.descColor}} innerHTML={this.text} ></div>        
        </div>
        <div class="image">
          <img src={this.img}></img>
        </div>
      </div>
    ]
    );
  }
}
