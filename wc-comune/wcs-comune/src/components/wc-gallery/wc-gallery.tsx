import { Component, Prop, Element,Event } from '@stencil/core';
import '@ionic/core';

@Component({
  tag: 'wc-gallery',
  styleUrl: 'wc-gallery.scss',
  shadow: true
})
export class WcGallery {
  @Prop({ mutable: true }) gallery;

  @Element() el: HTMLElement;
  @Event() elementSelected: EventEmitter;

  slideIndex: number = 1;
  img = [];
  label = [];
  dots = [];
  options: {
    initialSlide: 1,
    speed: 400
  };
  
  itemSelectedHandler(element: string) {
    console.log("emit "+element);
    this.elementSelected.emit(element);
  }
  render() {
    if (this.gallery && this.gallery.length>0) {
      console.log(this.gallery);
      this.gallery = JSON.parse(this.gallery);
      console.log(this.gallery);
      console.log("gallery is made of " + this.gallery.length);

      return (
          <ion-slides pager={true} options={this.options}>
            {
              this.gallery.map((element) =>
                <ion-slide>
                  <div onClick={() =>this.itemSelectedHandler(element)}>
                    <img src={element.image} ref={el => { this.img.push(el as HTMLElement) }}></img>
                    <div ref={el => { this.label.push(el as HTMLElement) }}>{element.name} </div>
                  </div>
                </ion-slide>
              )
            }
          </ion-slides>
      );
    }
    else {
      console.log("gallery is empty");
    }
  }
}