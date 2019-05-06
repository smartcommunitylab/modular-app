import { Component, Prop, Event } from '@stencil/core';

@Component({
  tag: 'wc-category-button',
  styleUrl: 'wc-category-button.css',
  shadow: true
})
export class WcCategoryButton {
  @Prop() category:string;
  @Prop() icon:string;
  @Prop() class:string;
  @Event() categorySelected: EventEmitter;

  categorySelectedHandler(category: string) {
    this.categorySelected.emit(category);
    console.log("Cliccato", category);
  }

  private getCategory(): string {
    if (this.category)
      return this.category
    return ""
  }
  private getIcon(): string {
    if (this.icon)
      return this.icon
    return ""
  }
  private getClass(): string{
    if(this.class)
      return this.class
    return ""
  }
  render() {
    return (
      <div  class="container" onClick={() =>this.categorySelectedHandler(this.category)}>
        <div class="img-button">
          <img src={this.getIcon()}></img>
        </div>
        <div class={'text-button ' + this.getClass()}>
          {this.getCategory()}
        </div>

      </div>
    );
  }

}
