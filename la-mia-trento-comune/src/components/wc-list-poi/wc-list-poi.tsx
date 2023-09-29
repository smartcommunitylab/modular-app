import { Component, Prop, Watch, Event,h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wc-list-poi',
  styleUrl: 'wc-list-poi.css',
  shadow: true
})
export class WcPoi {
  /**
   * The first name
   */
  @Prop({ mutable: true }) poi;
  @Watch('poi') cjsonHandler() {
    console.log("changed");

  }
  // @Prop({ mutable: true }) poiObject:any;
  /**
   * The middle name
   */
  @Prop({ mutable: true }) wcAddress: string;
  @Event() poiCompleted: EventEmitter;

  poiCompletedHandler(poi: any) {
    this.poiCompleted.emit(poi);
  }

  private getPoiTitle(): string {
    if (this.poi)
      return this.poi.title;
  }


  private getPoiAddress() {
    if (this.poi && this.poi.address)
      return this.poi.address;
  }
  private getPoiAddressName() {
    if (this.poi && this.poi.address)
      return this.getPoiAddress().name;
  }
  private getImg() {
    if (this.poi)
      return this.poi.image;
  }
  componentDidLoad() {
    console.log(this.getPoiTitle())
    this.poiCompletedHandler(this.poi);
  }
  render() {
    return (
      <div class="container">
        <div innerHTML={this.poi.title}>
        </div>
        <div innerHTML={this.poi.subtitle}>
        </div>
        <div>
          {this.getPoiAddressName()}
        </div>
        <div innerHTML={this.poi.description}>
        </div>
        <div>
          <img src={this.getImg()}></img>
        </div>
      </div>
    );
  }

}
