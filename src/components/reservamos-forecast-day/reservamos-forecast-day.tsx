import { Component, Fragment, h, Host, Prop } from '@stencil/core';
import { dayName } from '../../utils/utils';

@Component({
  tag: 'reservamos-forecast-day',
  styleUrl: 'reservamos-forecast-day.css',
  shadow: false,
})
export class ReservamosForecastDay {
  @Prop() forecastDay: any;

  getIcon(icon: string): string {
    let weatherIconMap = {
      '01d': 'wi-day-sunny',
      '02d': 'wi-day-cloudy',
      '03d': 'wi-cloud',
      '04d': 'wi-cloudy',
      '09d': 'wi-day-showers',
      '10d': 'wi-day-rain',
      '11d': 'wi-day-lightning',
      '13d': 'wi-snow',
      '50d': 'wi-fog',
    };

    return (<i class={`wi ${weatherIconMap[icon]}`}></i>);
  }

  render() {
    console.log(this.forecastDay);
    return (
      <Host class="box">
        <p class="is-capitalized">{dayName(this.forecastDay.timestamp)}</p>
        <h1 class="title">{this.getIcon(this.forecastDay.weather[0].icon)}</h1>
        <p>{this.forecastDay.weather[0].description}</p>
        <h1>
          Max:{this.forecastDay.temp.max} - Min: {this.forecastDay.temp.min}
        </h1>
      </Host>
    );
  }
}
