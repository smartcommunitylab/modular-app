import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wc-path-info',
  styleUrl: 'wc-path-info.css',
  shadow: true
})
export class WcPathInfo {

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

  render() {
    return (
      <div class="container">
        <div class="image">
          <img src={this.img}></img>
        </div>
        <div class="info-title" style={{color:this.headingColor}}>
          {this.title}
        </div>
        <div class="subtitle">
          <p innerHTML={this.subtitle}></p>
        </div>
        <div class="text">
          <p innerHTML={this.text}></p>
        </div>
        <div class="title-2" style={{color:this.headingColor}}>
          Informazioni
        </div>
        <div class="info text">
          <p innerHTML={this.info}></p>
        </div>
      </div>
    )
  }

}
