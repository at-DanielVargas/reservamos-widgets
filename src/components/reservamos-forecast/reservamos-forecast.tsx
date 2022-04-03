import { Component, Host, h, Prop, Watch, State } from '@stencil/core';
import { ICoordinates } from '../../interfaces/coordinates';
import { IDay } from '../../interfaces/forecast';
import { searchForecastFor } from '../../utils/utils';

@Component({
  tag: 'reservamos-forecast',
  styleUrl: 'reservamos-forecast.css',
  shadow: false,
})
export class ReservamosForecast {
  @Prop({ mutable: true }) coords: ICoordinates;

  @State() forecast: IDay[] = [];

  @Watch('coords')
  getForecast(coords: ICoordinates): void {
    searchForecastFor(coords).then(result => {
      this.forecast = result.forecast;
    });
  }

  render() {
    return (
      <Host>
        <nav class="level">
          {this.forecast.map(day => (
            <div class="level-item has-text-centered">
              <reservamos-forecast-day forecastDay={day}></reservamos-forecast-day>
            </div>
          ))}
        </nav>
      </Host>
    );
  }
}
