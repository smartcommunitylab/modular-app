import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'wc-gallery',
  styleUrl: 'wc-gallery.scss',
  shadow: true
})
export class WcGallery {
  @Prop({ mutable: true }) gallery;
  @Element() el: HTMLElement;
  slideIndex: number = 1;
  img = [];
  label = [];
  dots = [];
  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

  currentDiv(n) {
    this.showDivs(this.slideIndex = n);
  }

  showDivs(n) {
    if (this.img[n - 1]) {
      this.img[n - 1].style.display = "block";
      this.label[n - 1].style.display = "block";
    }

    var i;
    if (n > this.img.length) {
      console.log("n > length");

      this.slideIndex = 1
    }
    if (n < 1) {
      console.log("n <1");

      this.slideIndex = this.img.length
    }
    for (i = 0; i < this.img.length; i++) {
      console.log("all none");

      (this.img[i] as HTMLElement).style.display = "none";
      (this.label[i] as HTMLElement).style.display = "none";
    }
    for (i = 0; i < this.dots.length; i++) {

      this.dots[i].className = this.dots[i].className.replace("white", "");
    }
    if (this.img.length > 0 && this.img[this.slideIndex - 1]) {
      console.log("display block");

      this.img[this.slideIndex - 1].style.display = "block";
      this.label[this.slideIndex - 1].style.display = "block";
    }
    if (this.dots.length > 0 && this.dots[this.slideIndex - 1] as HTMLElement)
      this.dots[this.slideIndex - 1].className += " white";
  }

  render() {

    if (this.gallery) {
      console.log("gallery is made of " + this.gallery.length);

      return ([
        <div class="content display-container">
          {this.gallery.map((element) =>
            <div>
              <img class="slide" src={element.image} ref={el => { this.img.push(el as HTMLElement) }}></img>
              <div class="nameSlide" ref={el => { this.label.push(el as HTMLElement) }}>{element.name} </div>
            </div>
          )}
          <div class=" container display-bottommiddle" >
            <div class="arrow left" onClick={() => this.plusDivs(-1)}>&#10094;</div>
            <div class="arrow right" onClick={() => this.plusDivs(1)}>&#10095;</div>
            {this.gallery.map((_element, index) =>
              <span class="badge  transparent hover-white" ref={el => { this.dots.push(el as HTMLElement) }} onClick={() => this.currentDiv(index)}></span>

            )}
          </div>
        </div>
      ]);
    }
    else {
      console.log("gallery is empty");
    }
  }

  componentDidLoad() {
    console.log("component did load");
    this.showDivs(1);
  }
  componentDidUpdate() {
    console.log("component did load");
    this.showDivs(1);
  }
}