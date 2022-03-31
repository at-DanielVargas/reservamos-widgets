import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'reservamos-forecast-day',
  styleUrl: 'reservamos-forecast-day.css',
  shadow: true,
})
export class ReservamosForecastDay {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
