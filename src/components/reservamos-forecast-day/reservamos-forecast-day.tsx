import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { ICoordiantes } from '../../interfaces/coordinates';

@Component({
  tag: 'reservamos-forecast-day',
  styleUrl: 'reservamos-forecast-day.css',
  shadow: true,
})
export class ReservamosForecastDay {
  @Prop() coords: ICoordiantes;

  @Watch('coords')
  getForecast(coords: ICoordiantes): void {
    searchForecastFor(coords).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    }) 
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
