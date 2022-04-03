import { Component, Host, h, Event, EventEmitter, Prop, State } from '@stencil/core';
import debounce from 'lodash/debounce';
import { ICity } from '../../interfaces/city';
import { ICoordinates } from '../../interfaces/coordinates';
import { searchCity } from '../../utils/utils';

@Component({
  tag: 'reservamos-search',
  styleUrl: 'reservamos-search.css',
  shadow: false,
})
export class ReservamosSearch {
  @Event() search: EventEmitter<ICity>;
  @Event() suggestionSelected: EventEmitter<ICoordinates>;
  @Prop() url: string;
  @Prop() placeholder: string = '';
  @State() suggestions: boolean = false;
  @State() cities: ICity[] = [];
  @State() suggestionIndex: number = 0;

  handleNavigateCities(e: KeyboardEvent): void {
    if (e.keyCode === 40 && this.suggestionIndex < this.cities.length - 1) {
      this.suggestionIndex++;
      return;
    }

    if (e.keyCode === 38 && this.suggestionIndex !== 0) {
      this.suggestionIndex--;
      return;
    }

    if (e.keyCode === 13) {
      const selectedCity = this.cities[this.suggestionIndex];
      this.suggestionSelected.emit({
        latitude: Number(selectedCity.lat),
        longitude: Number(selectedCity.long),
      });
      this.suggestions = false;
    }
  }

  handleKeypress = debounce((e: KeyboardEvent) => {
    if (![40, 39, 37, 38, 13].includes(e.keyCode)) {
      const value = (e.target as HTMLInputElement).value;
      if (value !== '') {
        searchCity(value).then(result => {
          if (result.length > 0) {
            this.suggestions = true;
          }
          this.cities = result;
        });
      }
    }
  }, 400);

  render() {
    return (
      <Host>
        <div class={`dropdown ${this.suggestions && 'is-active'}`}>
          <div class="dropdown-trigger">
            <input
              class="input is-normal"
              onKeyDown={event => this.handleNavigateCities(event)}
              onKeyUp={event => this.handleKeypress(event)}
              type="text"
              placeholder={this.placeholder}
            />
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              {this.cities.map((city: ICity, index: number) => (
                <a href="#" class={`dropdown-item ${this.suggestionIndex === index && 'is-active'}`}>
                  {city.city_name}, ({city.state})
                </a>
              ))}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
