/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface WcCategoryButton {
    /**
    * Colore sfondo container
    */
    'bgColor': string;
    /**
    * Nome della categoria
    */
    'category': string;
    /**
    * Riferimento icona, vedi file 'shared/icons.tsx'
    */
    'icon': string;
    /**
    * Allineamento icona - top, left, right
    */
    'iconAlign': string;
    /**
    * Colore riempimento icona
    */
    'iconFill': string;
    /**
    * Colore testo
    */
    'textColor': string;
  }
  interface WcCategoryButtonAttributes extends StencilHTMLAttributes {
    /**
    * Colore sfondo container
    */
    'bgColor'?: string;
    /**
    * Nome della categoria
    */
    'category'?: string;
    /**
    * Riferimento icona, vedi file 'shared/icons.tsx'
    */
    'icon'?: string;
    /**
    * Allineamento icona - top, left, right
    */
    'iconAlign'?: string;
    /**
    * Colore riempimento icona
    */
    'iconFill'?: string;
    'onCategorySelected'?: (event: CustomEvent) => void;
    /**
    * Colore testo
    */
    'textColor'?: string;
  }

  interface WcDetailInfo {
    /**
    * The first name
    */
    'info': any;
  }
  interface WcDetailInfoAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'info'?: any;
  }

  interface WcGallery {
    'gallery': any;
  }
  interface WcGalleryAttributes extends StencilHTMLAttributes {
    'gallery'?: any;
  }

  interface WcListCategories {
    /**
    * The first name
    */
    'category': any;
  }
  interface WcListCategoriesAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'category'?: any;
  }

  interface WcListPoi {
    /**
    * The first name
    */
    'poi': any;
    /**
    * The middle name
    */
    'wcAddress': string;
  }
  interface WcListPoiAttributes extends StencilHTMLAttributes {
    'onPoiCompleted'?: (event: CustomEvent) => void;
    /**
    * The first name
    */
    'poi'?: any;
    /**
    * The middle name
    */
    'wcAddress'?: string;
  }

  interface WcPathInfo {
    /**
    * Colore titoli
    */
    'headingColor': string;
    /**
    * Immagine del percorso
    */
    'img': string;
    /**
    * Informazioni a fine pagina
    */
    'info': string;
    /**
    * Sottotitolo del percorso
    */
    'subtitle': string;
    /**
    * Descrizione e testo
    */
    'text': string;
    /**
    * Titolo del percorso
    */
    'title': string;
  }
  interface WcPathInfoAttributes extends StencilHTMLAttributes {
    /**
    * Colore titoli
    */
    'headingColor'?: string;
    /**
    * Immagine del percorso
    */
    'img'?: string;
    /**
    * Informazioni a fine pagina
    */
    'info'?: string;
    /**
    * Sottotitolo del percorso
    */
    'subtitle'?: string;
    /**
    * Descrizione e testo
    */
    'text'?: string;
    /**
    * Titolo del percorso
    */
    'title'?: string;
  }

  interface WcPathListEl {
    /**
    * Colore descrizione breve
    */
    'descColor': string;
    /**
    * ID percorso
    */
    'id': string;
    /**
    * Immagine del percorso
    */
    'img': string;
    /**
    * Colore titolo e bordo immagine
    */
    'mainColor': string;
    /**
    * Descrizione breve
    */
    'text': string;
    /**
    * Titolo del percorso
    */
    'title': string;
  }
  interface WcPathListElAttributes extends StencilHTMLAttributes {
    /**
    * Colore descrizione breve
    */
    'descColor'?: string;
    /**
    * ID percorso
    */
    'id'?: string;
    /**
    * Immagine del percorso
    */
    'img'?: string;
    /**
    * Colore titolo e bordo immagine
    */
    'mainColor'?: string;
    'onPathSelected'?: (event: CustomEvent) => void;
    /**
    * Descrizione breve
    */
    'text'?: string;
    /**
    * Titolo del percorso
    */
    'title'?: string;
  }

  interface WcTabs {
    /**
    * Colore sfondo tabs
    */
    'bgColor': string;
    /**
    * Oggeto JSON contenente i dettagli delle tab.
    */
    'content': string;
    /**
    * Colore icona di default (pagina non attiva)
    */
    'iconColor': string;
    /**
    * Identificativo pagina attiva, fare riferimento a proprietà "content"
    */
    'tabActived': string;
  }
  interface WcTabsAttributes extends StencilHTMLAttributes {
    /**
    * Colore sfondo tabs
    */
    'bgColor'?: string;
    /**
    * Oggeto JSON contenente i dettagli delle tab.
    */
    'content'?: string;
    /**
    * Colore icona di default (pagina non attiva)
    */
    'iconColor'?: string;
    'onTabSelected'?: (event: CustomEvent) => void;
    /**
    * Identificativo pagina attiva, fare riferimento a proprietà "content"
    */
    'tabActived'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WcCategoryButton': Components.WcCategoryButton;
    'WcDetailInfo': Components.WcDetailInfo;
    'WcGallery': Components.WcGallery;
    'WcListCategories': Components.WcListCategories;
    'WcListPoi': Components.WcListPoi;
    'WcPathInfo': Components.WcPathInfo;
    'WcPathListEl': Components.WcPathListEl;
    'WcTabs': Components.WcTabs;
  }

  interface StencilIntrinsicElements {
    'wc-category-button': Components.WcCategoryButtonAttributes;
    'wc-detail-info': Components.WcDetailInfoAttributes;
    'wc-gallery': Components.WcGalleryAttributes;
    'wc-list-categories': Components.WcListCategoriesAttributes;
    'wc-list-poi': Components.WcListPoiAttributes;
    'wc-path-info': Components.WcPathInfoAttributes;
    'wc-path-list-el': Components.WcPathListElAttributes;
    'wc-tabs': Components.WcTabsAttributes;
  }


  interface HTMLWcCategoryButtonElement extends Components.WcCategoryButton, HTMLStencilElement {}
  var HTMLWcCategoryButtonElement: {
    prototype: HTMLWcCategoryButtonElement;
    new (): HTMLWcCategoryButtonElement;
  };

  interface HTMLWcDetailInfoElement extends Components.WcDetailInfo, HTMLStencilElement {}
  var HTMLWcDetailInfoElement: {
    prototype: HTMLWcDetailInfoElement;
    new (): HTMLWcDetailInfoElement;
  };

  interface HTMLWcGalleryElement extends Components.WcGallery, HTMLStencilElement {}
  var HTMLWcGalleryElement: {
    prototype: HTMLWcGalleryElement;
    new (): HTMLWcGalleryElement;
  };

  interface HTMLWcListCategoriesElement extends Components.WcListCategories, HTMLStencilElement {}
  var HTMLWcListCategoriesElement: {
    prototype: HTMLWcListCategoriesElement;
    new (): HTMLWcListCategoriesElement;
  };

  interface HTMLWcListPoiElement extends Components.WcListPoi, HTMLStencilElement {}
  var HTMLWcListPoiElement: {
    prototype: HTMLWcListPoiElement;
    new (): HTMLWcListPoiElement;
  };

  interface HTMLWcPathInfoElement extends Components.WcPathInfo, HTMLStencilElement {}
  var HTMLWcPathInfoElement: {
    prototype: HTMLWcPathInfoElement;
    new (): HTMLWcPathInfoElement;
  };

  interface HTMLWcPathListElElement extends Components.WcPathListEl, HTMLStencilElement {}
  var HTMLWcPathListElElement: {
    prototype: HTMLWcPathListElElement;
    new (): HTMLWcPathListElElement;
  };

  interface HTMLWcTabsElement extends Components.WcTabs, HTMLStencilElement {}
  var HTMLWcTabsElement: {
    prototype: HTMLWcTabsElement;
    new (): HTMLWcTabsElement;
  };

  interface HTMLElementTagNameMap {
    'wc-category-button': HTMLWcCategoryButtonElement
    'wc-detail-info': HTMLWcDetailInfoElement
    'wc-gallery': HTMLWcGalleryElement
    'wc-list-categories': HTMLWcListCategoriesElement
    'wc-list-poi': HTMLWcListPoiElement
    'wc-path-info': HTMLWcPathInfoElement
    'wc-path-list-el': HTMLWcPathListElElement
    'wc-tabs': HTMLWcTabsElement
  }

  interface ElementTagNameMap {
    'wc-category-button': HTMLWcCategoryButtonElement;
    'wc-detail-info': HTMLWcDetailInfoElement;
    'wc-gallery': HTMLWcGalleryElement;
    'wc-list-categories': HTMLWcListCategoriesElement;
    'wc-list-poi': HTMLWcListPoiElement;
    'wc-path-info': HTMLWcPathInfoElement;
    'wc-path-list-el': HTMLWcPathListElElement;
    'wc-tabs': HTMLWcTabsElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
