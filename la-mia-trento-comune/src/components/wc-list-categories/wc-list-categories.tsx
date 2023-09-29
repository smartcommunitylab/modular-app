import { Component, Prop,h} from '@stencil/core';

@Component({
  tag: 'wc-list-categories',
  styleUrl: 'wc-list-categories.css',
  shadow: true
})
export class WcListCategories {
  /**
   * The first name
   */
  @Prop({ mutable: true }) category;


  getCategory() {
    return this.category;
  }
  render() {
    return (
      <div class="container">
        <div>
          {this.getCategory()}
        </div>
      </div>
    );
  }

}
