import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'reservamos-forecast',
  styleUrl: 'reservamos-forecast.css',
  shadow: true,
})
export class ReservamosForecast {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
