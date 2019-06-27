/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface WcAnteprima {
    'dataevento': string;
    'datapubblicazione': string;
    'descrizione': string;
    'durata': string;
    'img': string;
    'luogo': string;
    'orario': string;
    'titolo': string;
  }
  interface WcVideo {
    'dataevento': string;
    'datapubblicazione': string;
    'descrizione': string;
    'durata': string;
    'img': string;
    'luogo': string;
    'orario': string;
    'titolo': string;
    'video': string;
  }
}

declare global {


  interface HTMLWcAnteprimaElement extends Components.WcAnteprima, HTMLStencilElement {}
  var HTMLWcAnteprimaElement: {
    prototype: HTMLWcAnteprimaElement;
    new (): HTMLWcAnteprimaElement;
  };

  interface HTMLWcVideoElement extends Components.WcVideo, HTMLStencilElement {}
  var HTMLWcVideoElement: {
    prototype: HTMLWcVideoElement;
    new (): HTMLWcVideoElement;
  };
  interface HTMLElementTagNameMap {
    'wc-anteprima': HTMLWcAnteprimaElement;
    'wc-video': HTMLWcVideoElement;
  }
}

declare namespace LocalJSX {
  interface WcAnteprima extends JSXBase.HTMLAttributes<HTMLWcAnteprimaElement> {
    'dataevento'?: string;
    'datapubblicazione'?: string;
    'descrizione'?: string;
    'durata'?: string;
    'img'?: string;
    'luogo'?: string;
    'onEventMappa'?: (event: CustomEvent<any>) => void;
    'onEventShare'?: (event: CustomEvent<any>) => void;
    'orario'?: string;
    'titolo'?: string;
  }
  interface WcVideo extends JSXBase.HTMLAttributes<HTMLWcVideoElement> {
    'dataevento'?: string;
    'datapubblicazione'?: string;
    'descrizione'?: string;
    'durata'?: string;
    'img'?: string;
    'luogo'?: string;
    'onEventMappa'?: (event: CustomEvent<any>) => void;
    'onEventShare'?: (event: CustomEvent<any>) => void;
    'onEventVideo'?: (event: CustomEvent<any>) => void;
    'orario'?: string;
    'titolo'?: string;
    'video'?: string;
  }

  interface IntrinsicElements {
    'wc-anteprima': WcAnteprima;
    'wc-video': WcVideo;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


