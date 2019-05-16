import { Component, Prop, Event } from '@stencil/core';
import { Icons } from '../../utils/icons';
// import '@ionic/core';
@Component({
  tag: 'wc-category-button',
  styleUrl: 'wc-category-button.css',
  shadow: true
})
export class WcCategoryButton {
  /** Nome della categoria */
  @Prop() category: string;
  /** Riferimento icona, vedi file 'shared/icons.tsx' */
  @Prop() icon: string;
  /** Allineamento icona - top, left, right */
  @Prop() iconAlign: string = "left";
  /** Colore sfondo container */
  @Prop() bgColor: string = "white";
  /** Colore riempimento icona */
  @Prop() iconFill: string;
  /** Colore testo */
  @Prop() textColor: string;

  @Event() categorySelected: EventEmitter;

  icons = new Icons();

  componentWillLoad(){
    if (!this.iconFill)
      this.iconFill = "black";
    if (!this.textColor)
      this.textColor = "black";
  }

  categorySelectedHandler(category: string) {
    this.categorySelected.emit(category);
  }

  render() {
    return (
      <div  class="container" style={{backgroundColor:this.bgColor}} onClick={() =>this.categorySelectedHandler(this.category)}>
      

        <div class="img-button">
        
          <div class={('icon icon-'+this.iconAlign)}>
          {
            (this.icons.iconList[this.icon])?
            this.icons.iconList[this.icon](this.iconFill)
            :<img src={this.icon}></img>

          }
          </div>
        
        </div>
        <div class="text-button" style={{color:this.textColor}}>
          {this.category}
        </div>
      </div>
    );
  }
}
