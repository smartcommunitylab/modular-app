import { Component, Prop, Event, Element } from '@stencil/core';
import { Icons } from '../../utils/icons';

@Component({
  tag: 'wc-tabs',
  styleUrl: 'wc-tabs.css',
  shadow: true
})
export class WcTabs {
  /** Oggeto JSON contenente i dettagli delle tab. */
  /*  [
        {
          target: <string> --> pagina da visualizzare
          icon: <string> --> identificativo icona (vedi shared/icons.tsx)
        }
      ]
  */
  @Prop() content: string;
  /** Colore icona di default (pagina non attiva) */
  @Prop() iconColor: string = "black";
  /** Colore sfondo tabs */
  @Prop() bgColor: string = "white";
  /** Identificativo pagina attiva, fare riferimento a proprietà "content" */
  @Prop({mutable: true}) tabActived: string = "info";
  
  @Event({
    eventName: "tabSelected", 
    composed: true, 
    bubbles: true
  }) tabSelected: EventEmitter;
  
  @Element() el: HTMLElement;

  private objContent: {target:string, icon:string }[];
  private icons = new Icons().iconList;

  componentWillLoad(){
    this.objContent = JSON.parse(this.content);
  }

  tabSelectedHandler(tab: string) {
    this.tabActived = tab;
    this.tabSelected.emit(tab);
  }

  render() {
    var tmp = [];
    // Costruzione dinamica delle tab in base alla proprietà "content"
    if(this.objContent){
        this.objContent.forEach(element => {
          tmp.push( 
            <div id={'tab-'+element.target} class="content" onClick={() => this.tabSelectedHandler(element.target)}>
              {/* Controllo pagina attiva e colore icona */}
              {(this.tabActived == element.target) ? this.icons[element.icon]("white"):this.icons[element.icon](this.iconColor)}
            </div> 
        );
      })
    }

    return (
      <div class="container" style={{backgroundColor: this.bgColor}}>
        {tmp}
      </div>
    );
  }

}
