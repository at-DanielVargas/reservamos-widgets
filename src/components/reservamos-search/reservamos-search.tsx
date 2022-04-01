import { Component, Host, h, Event, EventEmitter, Prop, State } from '@stencil/core';
import debounce from 'lodash/debounce';
import { ICity } from '../../interfaces/city';
import { searchCity } from '../../utils/utils';

@Component({
  tag: 'reservamos-search',
  styleUrl: 'reservamos-search.css',
  shadow: false,
})
export class ReservamosSearch {
  @Event() search: EventEmitter<ICity>;
  @Prop() url: string;
  @Prop() placeholder: string = '';
  @State() suggestions: boolean = false;

  @State() cities: ICity[] = [];


  handleNavigateCities(e: KeyboardEvent): void {
    console.log('up/down', e.keyCode)
  }

  handleKeypress = debounce((e: KeyboardEvent) => {
    this.suggestions = false;

    if (e.keyCode === 40 || e.keyCode === 38) {
      this.handleNavigateCities(e);
    } else {
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
            <input class="input is-normal" onKeyUp={event => this.handleKeypress(event)} type="text" placeholder={this.placeholder} />
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              {this.cities.map((city: ICity) => (
                <span class="dropdown-item">
                  {city.city_name}, ({city.state})
                </span>
              ))}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
