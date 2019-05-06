import { Component, Prop } from '@stencil/core';
// import { WcPoi } from '../wc-poi/wc-poi';

@Component({
  tag: 'wc-path',
  styleUrl: 'wc-path.css',
  shadow: true
})
export class WcPath {
  /**
   * The first name
   */
  @Prop() path: Object[];

  /**
   * The middle name
   */
  @Prop() description: string;



  render() {
    return <div>Questo e' un PATH {this.description}</div>;
  }
}
