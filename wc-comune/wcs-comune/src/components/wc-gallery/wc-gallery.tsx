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
  // plusDivs(n) {
  //   this.showDivs(this.slideIndex += n);
  // }

  // currentDiv(n) {
  //   this.showDivs(this.slideIndex = n);
  // }

  // showDivs(n) {
  //   if (this.img[n - 1]) {
  //     this.img[n - 1].style.display = "block";
  //     this.label[n - 1].style.display = "block";
  //   }

  //   var i;
  //   if (n > this.img.length) {
  //     console.log("n > length");

  //     this.slideIndex = 1
  //   }
  //   if (n < 1) {
  //     console.log("n <1");

  //     this.slideIndex = this.img.length
  //   }
  //   for (i = 0; i < this.img.length; i++) {
  //     console.log("all none");

  //     (this.img[i] as HTMLElement).style.display = "none";
  //     (this.label[i] as HTMLElement).style.display = "none";
  //   }
  //   for (i = 0; i < this.dots.length; i++) {

  //     this.dots[i].className = this.dots[i].className.replace("white", "");
  //   }
  //   if (this.img.length > 0 && this.img[this.slideIndex - 1]) {
  //     console.log("display block");

  //     this.img[this.slideIndex - 1].style.display = "block";
  //     this.label[this.slideIndex - 1].style.display = "block";
  //   }
  //   if (this.dots.length > 0 && this.dots[this.slideIndex - 1] as HTMLElement)
  //     this.dots[this.slideIndex - 1].className += " white";
  // }
  itemSelectedHandler(element: string) {
    console.log("emit "+element);
    this.elementSelected.emit(element);
  }
  render() {
    // this.gallery = [{ 'image': 'http://www.comune.trento.it/var/comunetn/storage/images/applicazioni/comune-in-tasca/turista/in-evidenza/museum-pass/8622743-10-ita-IT/Museum-Pass.jpg ', name: 'ciao' }, { 'image': 'http://www.comune.trento.it/var/comunetn/storage/images/applicazioni/comune-in-tasca/turista/in-evidenza/museum-pass/8622743-10-ita-IT/Museum-Pass.jpg ', name: 'ciao' }, { 'image': 'http://www.comune.trento.it/var/comunetn/storage/images/applicazioni/comune-in-tasca/turista/in-evidenza/museum-pass/8622743-10-ita-IT/Museum-Pass.jpg ', name: 'ciao' }]
    if (this.gallery && this.gallery.length>0) {
      console.log(this.gallery);
      this.gallery = JSON.parse(this.gallery);
      console.log(this.gallery);
      console.log("gallery is made of " + this.gallery.length);

      return (
        // <div >
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
            {/* <div class=" container display-bottommiddle" >
              <div class="arrow left" onClick={() => this.plusDivs(-1)}>&#10094;</div>
              <div class="arrow right" onClick={() => this.plusDivs(1)}>&#10095;</div>
              {
                this.gallery.map((_element, index) =>
                  <span class="badge  transparent hover-white" ref={el => { this.dots.push(el as HTMLElement) }} onClick={() => this.currentDiv(index)}></span>

                )
              }
            </div > */}
          </ion-slides>
        // </div >
      );
    }
    else {
      console.log("gallery is empty");
    }
  }

  // componentDidLoad() {
  //   console.log("component did load");
  //   this.showDivs(1);
  // }
  // componentDidUpdate() {
  //   console.log("component did load");
  //   this.showDivs(1);
  // }
}