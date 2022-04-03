import { Component, Fragment, h, Prop } from '@stencil/core';
import { IDay } from '../../interfaces/forecast';
import {dayName} from '../../utils/utils';

@Component({
  tag: 'reservamos-forecast-day',
  styleUrl: 'reservamos-forecast-day.css',
  shadow: false,
})
export class ReservamosForecastDay {
  @Prop() forecastDay: any;

  getIcon(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  render() {
    console.log(this.forecastDay)
    return (
      <Fragment>
        <p>{dayName(this.forecastDay.timestamp)}</p>
        <img src={this.getIcon(this.forecastDay.weather[0].icon)} />
        <p>{this.forecastDay.weather[0].description}</p>
        <h1>Max:{this.forecastDay.temp.max} - Min: {this.forecastDay.temp.min}</h1>
      </Fragment>
    );
  }
}
