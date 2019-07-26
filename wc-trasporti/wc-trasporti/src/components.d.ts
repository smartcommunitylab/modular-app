/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface WcTrasportiMap {
    'center': string;
    /**
    * Icona marker per "posizione attuale"
    */
    'mainMarkerIcon': string;
    /**
    * Icona marker POI
    */
    'poiMarkerIcon': string;
    /**
    * Oggeto JSON contenente i dettagli dei POI. ULTIMO ELEMENTO = Posizione attuale Array di punti da inserire nella mappa
    */
    'points': string;
    'showPoints': () => Promise<void>;
    'userpoisition': string;
    'zoomlevel': number;
  }
  interface WcTrasportiMapAttributes extends StencilHTMLAttributes {
    'center'?: string;
    /**
    * Icona marker per "posizione attuale"
    */
    'mainMarkerIcon'?: string;
    'onMapInitiated'?: (event: CustomEvent) => void;
    'onMapMoved'?: (event: CustomEvent) => void;
    'onPoiSelected'?: (event: CustomEvent) => void;
    /**
    * Icona marker POI
    */
    'poiMarkerIcon'?: string;
    /**
    * Oggeto JSON contenente i dettagli dei POI. ULTIMO ELEMENTO = Posizione attuale Array di punti da inserire nella mappa
    */
    'points'?: string;
    'userpoisition'?: string;
    'zoomlevel'?: number;
  }

  interface WcTrasportiStop {
    'accessibility': boolean;
    'arrows': boolean;
    'citta': string;
    'color': string;
    'data': string;
    'day': string;
    'font': string;
    'labeldelay': string;
    'labeltrips': string;
    'littletable': boolean;
    'name': string;
    'numero': string;
    'route': string;
    'showtrips': boolean;
    'tripsvalue': string;
  }
  interface WcTrasportiStopAttributes extends StencilHTMLAttributes {
    'accessibility'?: boolean;
    'arrows'?: boolean;
    'citta'?: string;
    'color'?: string;
    'data'?: string;
    'day'?: string;
    'font'?: string;
    'labeldelay'?: string;
    'labeltrips'?: string;
    'littletable'?: boolean;
    'name'?: string;
    'numero'?: string;
    'onChangeDateEvent'?: (event: CustomEvent) => void;
    'onShowStopEvent'?: (event: CustomEvent) => void;
    'route'?: string;
    'showtrips'?: boolean;
    'tripsvalue'?: string;
  }

  interface WcTrasportiTable {
    'accessibility': boolean;
    'agencyid': string;
    'arrows': boolean;
    'citta': string;
    'color': string;
    'data': string;
    'datetable': string;
    'day': string;
    'font': string;
    'labeldelay': string;
    'labeltrips': string;
    'lang': string;
    'littletable': boolean;
    'numero': string;
    'showHeader': boolean;
    'showtrips': boolean;
    'title': string;
    'titolo': string;
    'tripsvalue': string;
  }
  interface WcTrasportiTableAttributes extends StencilHTMLAttributes {
    'accessibility'?: boolean;
    'agencyid'?: string;
    'arrows'?: boolean;
    'citta'?: string;
    'color'?: string;
    'data'?: string;
    'datetable'?: string;
    'day'?: string;
    'font'?: string;
    'labeldelay'?: string;
    'labeltrips'?: string;
    'lang'?: string;
    'littletable'?: boolean;
    'numero'?: string;
    'onChangeDateEvent'?: (event: CustomEvent) => void;
    'onShowStopEvent'?: (event: CustomEvent) => void;
    'showHeader'?: boolean;
    'showtrips'?: boolean;
    'title'?: string;
    'titolo'?: string;
    'tripsvalue'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WcTrasportiMap': Components.WcTrasportiMap;
    'WcTrasportiStop': Components.WcTrasportiStop;
    'WcTrasportiTable': Components.WcTrasportiTable;
  }

  interface StencilIntrinsicElements {
    'wc-trasporti-map': Components.WcTrasportiMapAttributes;
    'wc-trasporti-stop': Components.WcTrasportiStopAttributes;
    'wc-trasporti-table': Components.WcTrasportiTableAttributes;
  }


  interface HTMLWcTrasportiMapElement extends Components.WcTrasportiMap, HTMLStencilElement {}
  var HTMLWcTrasportiMapElement: {
    prototype: HTMLWcTrasportiMapElement;
    new (): HTMLWcTrasportiMapElement;
  };

  interface HTMLWcTrasportiStopElement extends Components.WcTrasportiStop, HTMLStencilElement {}
  var HTMLWcTrasportiStopElement: {
    prototype: HTMLWcTrasportiStopElement;
    new (): HTMLWcTrasportiStopElement;
  };

  interface HTMLWcTrasportiTableElement extends Components.WcTrasportiTable, HTMLStencilElement {}
  var HTMLWcTrasportiTableElement: {
    prototype: HTMLWcTrasportiTableElement;
    new (): HTMLWcTrasportiTableElement;
  };

  interface HTMLElementTagNameMap {
    'wc-trasporti-map': HTMLWcTrasportiMapElement
    'wc-trasporti-stop': HTMLWcTrasportiStopElement
    'wc-trasporti-table': HTMLWcTrasportiTableElement
  }

  interface ElementTagNameMap {
    'wc-trasporti-map': HTMLWcTrasportiMapElement;
    'wc-trasporti-stop': HTMLWcTrasportiStopElement;
    'wc-trasporti-table': HTMLWcTrasportiTableElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
