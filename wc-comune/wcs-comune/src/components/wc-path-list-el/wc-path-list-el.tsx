import { Component, Prop, Event } from '@stencil/core';

@Component({
  tag: 'wc-path-list-el',
  styleUrl: 'wc-path-list-el.css',
  shadow: true
})
export class WcPathList {
  @Prop() id: string;
  @Prop() img: string;
  @Prop() text: string;
  @Prop() title: string;
  @Prop() mainColor: string;
  @Prop() descColor: string;
  
  @Event() pathSelected: EventEmitter;

  pathSelectedHandler(path: string) {
    this.pathSelected.emit(path);
    console.log("Cliccato", path);
  }

  render() {
    return (
      [
      <div class="container" onClick={() => this.pathSelectedHandler(this.id)}>
        <div class="image">
          <img style={{borderColor: this.mainColor}} src={this.img}></img>
        </div>
        <div class="title">
          <h3 style={{color: this.mainColor}}>{this.title}</h3>
        </div>
        <div class="description">
          <p style={{color: this.descColor}}>{this.text}</p>
        </div>
      </div>,

      <hr />
    ]
    );
  }
}
