/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcTrasportiMap {
        "center": string;
        /**
          * Icona marker per "posizione attuale"
         */
        "mainMarkerIcon": string;
        /**
          * Icona marker POI
         */
        "poiMarkerIcon": string;
        /**
          * Array di punti da inserire nella mappa
         */
        "points": string;
        "showPoints": () => Promise<void>;
        "userpoisition": string;
        "zoomlevel": number;
    }
    interface WcTrasportiStop {
        "accessibility": boolean;
        "arrows": boolean;
        "citta": string;
        "color": string;
        "data": string;
        "day": string;
        "font": string;
        "labeldelay": string;
        "labeltrips": string;
        "littletable": boolean;
        "name": string;
        "numero": string;
        "route": string;
        "showtrips": boolean;
        "tripsvalue": string;
    }
    interface WcTrasportiTable {
        "accessibility": boolean;
        "agencyid": string;
        "arrows": boolean;
        "citta": string;
        "color": string;
        "data": string;
        "datetable": string;
        "day": string;
        "emptytable": boolean;
        "emptytablelabel": string;
        "font": string;
        "labeldelay": string;
        "labeltrips": string;
        "langTrasporti": string;
        "littletable": boolean;
        "numero": string;
        "showHeader": boolean;
        "showtrips": boolean;
        "titleTrasporti": string;
        "titolo": string;
        "tripsvalue": string;
    }
}
export interface WcTrasportiMapCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcTrasportiMapElement;
}
export interface WcTrasportiStopCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcTrasportiStopElement;
}
export interface WcTrasportiTableCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcTrasportiTableElement;
}
declare global {
    interface HTMLWcTrasportiMapElement extends Components.WcTrasportiMap, HTMLStencilElement {
    }
    var HTMLWcTrasportiMapElement: {
        prototype: HTMLWcTrasportiMapElement;
        new (): HTMLWcTrasportiMapElement;
    };
    interface HTMLWcTrasportiStopElement extends Components.WcTrasportiStop, HTMLStencilElement {
    }
    var HTMLWcTrasportiStopElement: {
        prototype: HTMLWcTrasportiStopElement;
        new (): HTMLWcTrasportiStopElement;
    };
    interface HTMLWcTrasportiTableElement extends Components.WcTrasportiTable, HTMLStencilElement {
    }
    var HTMLWcTrasportiTableElement: {
        prototype: HTMLWcTrasportiTableElement;
        new (): HTMLWcTrasportiTableElement;
    };
    interface HTMLElementTagNameMap {
        "wc-trasporti-map": HTMLWcTrasportiMapElement;
        "wc-trasporti-stop": HTMLWcTrasportiStopElement;
        "wc-trasporti-table": HTMLWcTrasportiTableElement;
    }
}
declare namespace LocalJSX {
    interface WcTrasportiMap {
        "center"?: string;
        /**
          * Icona marker per "posizione attuale"
         */
        "mainMarkerIcon"?: string;
        "onMapInitiated"?: (event: WcTrasportiMapCustomEvent<any>) => void;
        "onMapMoved"?: (event: WcTrasportiMapCustomEvent<any>) => void;
        "onPoiSelected"?: (event: WcTrasportiMapCustomEvent<any>) => void;
        /**
          * Icona marker POI
         */
        "poiMarkerIcon"?: string;
        /**
          * Array di punti da inserire nella mappa
         */
        "points"?: string;
        "userpoisition"?: string;
        "zoomlevel"?: number;
    }
    interface WcTrasportiStop {
        "accessibility"?: boolean;
        "arrows"?: boolean;
        "citta"?: string;
        "color"?: string;
        "data"?: string;
        "day"?: string;
        "font"?: string;
        "labeldelay"?: string;
        "labeltrips"?: string;
        "littletable"?: boolean;
        "name"?: string;
        "numero"?: string;
        "onChangeDateEvent"?: (event: WcTrasportiStopCustomEvent<any>) => void;
        "onShowStopEvent"?: (event: WcTrasportiStopCustomEvent<any>) => void;
        "route"?: string;
        "showtrips"?: boolean;
        "tripsvalue"?: string;
    }
    interface WcTrasportiTable {
        "accessibility"?: boolean;
        "agencyid"?: string;
        "arrows"?: boolean;
        "citta"?: string;
        "color"?: string;
        "data"?: string;
        "datetable"?: string;
        "day"?: string;
        "emptytable"?: boolean;
        "emptytablelabel"?: string;
        "font"?: string;
        "labeldelay"?: string;
        "labeltrips"?: string;
        "langTrasporti"?: string;
        "littletable"?: boolean;
        "numero"?: string;
        "onChangeDateEvent"?: (event: WcTrasportiTableCustomEvent<any>) => void;
        "onShowStopEvent"?: (event: WcTrasportiTableCustomEvent<any>) => void;
        "showHeader"?: boolean;
        "showtrips"?: boolean;
        "titleTrasporti"?: string;
        "titolo"?: string;
        "tripsvalue"?: string;
    }
    interface IntrinsicElements {
        "wc-trasporti-map": WcTrasportiMap;
        "wc-trasporti-stop": WcTrasportiStop;
        "wc-trasporti-table": WcTrasportiTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-trasporti-map": LocalJSX.WcTrasportiMap & JSXBase.HTMLAttributes<HTMLWcTrasportiMapElement>;
            "wc-trasporti-stop": LocalJSX.WcTrasportiStop & JSXBase.HTMLAttributes<HTMLWcTrasportiStopElement>;
            "wc-trasporti-table": LocalJSX.WcTrasportiTable & JSXBase.HTMLAttributes<HTMLWcTrasportiTableElement>;
        }
    }
}
