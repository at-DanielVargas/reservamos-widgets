import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'reservamos-search',
  styleUrl: 'reservamos-search.css',
  shadow: false,
})
export class ReservamosSearch {

  @Event({eventName: 'search'}) search: EventEmitter<string>;

  @Prop() placeholder: string = '';


  handleKeypress(e) {
    this.search.emit(e.target.value);
  }

  render() {
    return (
      <Host>
        <input class="input is-normal" onKeyUp={this.handleKeypress} type="text" placeholder={this.placeholder} />
      </Host>
    );
  }

}
