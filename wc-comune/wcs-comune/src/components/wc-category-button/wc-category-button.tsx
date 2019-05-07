import { Component, Prop, Event } from '@stencil/core';

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

  @Event() categorySelected: EventEmitter;

  categorySelectedHandler(category: string) {
    this.categorySelected.emit(category);
    console.log("Cliccato", category);
  }

  render() {
    return (
      <div  class="container" style={{backgroundColor:this.bgColor}} onClick={() =>this.categorySelectedHandler(this.category)}>
        <div class="img-button">
          <img src={this.icon} class={('icon icon-'+this.iconAlign)}></img>
        </div>
        <div class="text-button">
          {this.category}
        </div>

      </div>
    );
  }
}
