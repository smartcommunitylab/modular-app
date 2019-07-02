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

  interface WcTrasportiTable {
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
    'numero': string;
    'showtrips': boolean;
    'title': string;
    'tripsvalue': string;
  }
  interface WcTrasportiTableAttributes extends StencilHTMLAttributes {
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
    'numero'?: string;
    'onChangeDateEvent'?: (event: CustomEvent) => void;
    'onShowStopEvent'?: (event: CustomEvent) => void;
    'showtrips'?: boolean;
    'title'?: string;
    'tripsvalue'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WcTrasportiMap': Components.WcTrasportiMap;
    'WcTrasportiTable': Components.WcTrasportiTable;
  }

  interface StencilIntrinsicElements {
    'wc-trasporti-map': Components.WcTrasportiMapAttributes;
    'wc-trasporti-table': Components.WcTrasportiTableAttributes;
  }


  interface HTMLWcTrasportiMapElement extends Components.WcTrasportiMap, HTMLStencilElement {}
  var HTMLWcTrasportiMapElement: {
    prototype: HTMLWcTrasportiMapElement;
    new (): HTMLWcTrasportiMapElement;
  };

  interface HTMLWcTrasportiTableElement extends Components.WcTrasportiTable, HTMLStencilElement {}
  var HTMLWcTrasportiTableElement: {
    prototype: HTMLWcTrasportiTableElement;
    new (): HTMLWcTrasportiTableElement;
  };

  interface HTMLElementTagNameMap {
    'wc-trasporti-map': HTMLWcTrasportiMapElement
    'wc-trasporti-table': HTMLWcTrasportiTableElement
  }

  interface ElementTagNameMap {
    'wc-trasporti-map': HTMLWcTrasportiMapElement;
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
