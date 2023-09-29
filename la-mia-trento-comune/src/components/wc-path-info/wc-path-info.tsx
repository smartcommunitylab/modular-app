import { Component, Prop,h } from '@stencil/core';

@Component({
  tag: 'wc-path-info',
  styleUrl: 'wc-path-info.css',
  shadow: true
})
export class WcPathInfo {

  /** Titolo del percorso */
  @Prop() titlePath: string;
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

  render() {
    return (
      <div class="container">
        <div class="image">
          <img src={this.img}></img>
        </div>
        <div class="info-title" style={{color:this.headingColor}}>
          {this.titlePath}
        </div>
        <div class="subtitle" innerHTML={this.subtitle}>
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
