import { Component, Host, h, Prop } from '@stencil/core';
import { ICoordiantes } from '../../interfaces/coordinates';

@Component({
  tag: 'reservamos-forecast-day',
  styleUrl: 'reservamos-forecast-day.css',
  shadow: true,
})
export class ReservamosForecastDay {
  @Prop() cords: ICoordiantes;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
