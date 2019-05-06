import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wc-gallery',
  styleUrl: 'wc-gallery.scss',
  shadow: true
})
export class WcGallery {
  @Prop({ mutable: true }) gallery;


  render() {
    if (this.gallery)
    return (
      <div class="wrapper">
        <div>
          {this.gallery.map((element) =>
            <div>
              <img src="{element.image}" />
              <div>{element.name}</div>
            </div>
          )}
        </div>
        <input checked type="radio" name="slider" id="slide1" />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />
        <input type="radio" name="slider" id="slide4" />
        <input type="radio" name="slider" id="slide5" />

        <div class="slider-wrapper">
          <div class="inner">
            <article>
              <div class="info top-left">
                <h3>Malacca</h3></div>
              <img src="https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg" />
            </article>

            <article>
              <div class="info bottom-right">
                <h3>Cameron Highland</h3></div>
              <img src="https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg" />
            </article>

            <article>
              <div class="info bottom-left">
                <h3>New Delhi</h3></div>
              <img src="https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg" />
            </article>

            <article>
              <div class="info top-right">
                <h3>Ladakh</h3></div>
              <img src="https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg" />
            </article>

            <article>
              <div class="info bottom-left">
                <h3>Nubra Valley</h3></div>
              <img src="https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg" />
            </article>
          </div>
        </div>

        <div class="slider-prev-next-control">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
          <label htmlFor="slide5"></label>
        </div>
        <div class="slider-dot-control">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
          <label htmlFor="slide5"></label>
        </div>
      </div>
    );
    else console.log("gallery"+this.gallery)
  }

}