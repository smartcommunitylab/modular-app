import { Component, Prop, Event, Element } from '@stencil/core';
import { Icons } from '../../shared/icons';


@Component({
  tag: 'wc-tabs',
  styleUrl: 'wc-tabs.css',
  shadow: true
})
export class WcTabs {
  @Prop() content: string;
  @Prop() iconColor: string = "black";
  @Prop() bgColor: string = "white";
  @Prop({mutable: true}) tabActived: string = "info";
  
  @Event() tabSelected: EventEmitter;
  @Element() el: HTMLElement;

  private objContent: {target:string, icon:string }[];
  private icons = new Icons().iconList;

  componentWillLoad(){
    this.objContent = JSON.parse(this.content);
  }

  tabSelectedHandler(tab: string) {
    this.tabActived = tab;
    this.tabSelected.emit(tab);
    console.log("Cliccato", tab);
  }

  render() {
    var tmp = [];

    if(this.objContent){
        this.objContent.forEach(element => {
          tmp.push( 
            <div id={'tab-'+element.target} class="content" onClick={() => this.tabSelectedHandler(element.target)}>
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
