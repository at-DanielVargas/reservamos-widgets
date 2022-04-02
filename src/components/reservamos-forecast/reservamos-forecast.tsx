import { Component, Host, h, Prop, Watch } from '@stencil/core';
import {searchCity} from '../../utils/utils';

@Component({
  tag: 'reservamos-forecast',
  styleUrl: 'reservamos-forecast.css',
  shadow: false,
})
export class ReservamosForecast {


  @Prop() city: string;

  @Watch('city')
  searchCities(city: string): void {
    searchCity(city).then(results => {
      console.log(results)
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <Host>
        <p>{this.city}</p>
      </Host>
    );
  }

}
