/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ReservamosForecast {
        "city": string;
    }
}
declare global {
    interface HTMLReservamosForecastElement extends Components.ReservamosForecast, HTMLStencilElement {
    }
    var HTMLReservamosForecastElement: {
        prototype: HTMLReservamosForecastElement;
        new (): HTMLReservamosForecastElement;
    };
    interface HTMLElementTagNameMap {
        "reservamos-forecast": HTMLReservamosForecastElement;
    }
}
declare namespace LocalJSX {
    interface ReservamosForecast {
        "city"?: string;
    }
    interface IntrinsicElements {
        "reservamos-forecast": ReservamosForecast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "reservamos-forecast": LocalJSX.ReservamosForecast & JSXBase.HTMLAttributes<HTMLReservamosForecastElement>;
        }
    }
}