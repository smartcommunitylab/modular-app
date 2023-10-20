import { Component, h } from '@stencil/core';

@Component({
  tag: 'claudio-component',
  styleUrl: 'hello-component.css',
  shadow: true,
})
export class HelloComponent {

  render() {
    return (
      <p>Componente di Claudio</p>
    );
  }

}
