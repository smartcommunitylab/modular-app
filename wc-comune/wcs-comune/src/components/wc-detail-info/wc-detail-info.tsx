import { Component, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'wc-detail-info',
  styleUrl: 'wc-detail-info.css',
  shadow: true
})
export class WcDetailInfo {
  /**
   * The first name
   */
  @Prop({ mutable: true }) info;
  @Watch('info') cjsonHandler() {
    console.log("changed");

  }

  render() {
    return (
      <div>
        <div innerHTML={this.info.title}>
        </div>
        <div innerHTML={this.info.subtitle}>
        </div>
        <div innerHTML={this.info.description}>
        </div>
      </div>
    );
  }

}
