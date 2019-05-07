import { Component, Prop, Event } from '@stencil/core';
import { Icons } from '../../shared/icons';

@Component({
  tag: 'wc-category-button',
  styleUrl: 'wc-category-button.css',
  shadow: true
})
export class WcCategoryButton {
  @Prop() category: string;
  @Prop() icon: string;
  @Prop() iconAlign: string = "left";
  @Prop() bgColor: string = "white";
  @Prop() iconFill: string;
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
    console.log("Cliccato", category);
  }

  render() {
    return (
      <div  class="container" style={{backgroundColor:this.bgColor}} onClick={() =>this.categorySelectedHandler(this.category)}>
        <div class="img-button">
        <div class={('icon icon-'+this.iconAlign)}>
          {this.icons.iconList[this.icon](this.iconFill)}
        </div>
          {/* <img src={this.icon} class={('icon icon-'+this.iconAlign)}></img> */}
        </div>
        <div class="text-button" style={{color:this.textColor}}>
          {this.category}
        </div>
      </div>
    );
  }
}
