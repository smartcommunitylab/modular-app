/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DettaglioMorte {
        "funerale": string;
        "string": string;
    }
}
export interface DettaglioMorteCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDettaglioMorteElement;
}
declare global {
    interface HTMLDettaglioMorteElement extends Components.DettaglioMorte, HTMLStencilElement {
    }
    var HTMLDettaglioMorteElement: {
        prototype: HTMLDettaglioMorteElement;
        new (): HTMLDettaglioMorteElement;
    };
    interface HTMLElementTagNameMap {
        "dettaglio-morte": HTMLDettaglioMorteElement;
    }
}
declare namespace LocalJSX {
    interface DettaglioMorte {
        "funerale"?: string;
        "onCondividi"?: (event: DettaglioMorteCustomEvent<any>) => void;
        "onIndicazioni"?: (event: DettaglioMorteCustomEvent<any>) => void;
        "string"?: string;
    }
    interface IntrinsicElements {
        "dettaglio-morte": DettaglioMorte;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dettaglio-morte": LocalJSX.DettaglioMorte & JSXBase.HTMLAttributes<HTMLDettaglioMorteElement>;
        }
    }
}
