import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'reservamos-app',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  @Prop() city: string;

  componentWillLoad() {
    let url = `https://search.reservamos.mx/api/v2/places?q=${this.city}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const results = data
          .filter(element => element.result_type === 'city')
          .map(city => ({
            ...city,
            sort_criteria: Number(parseFloat(city.sort_criteria).toFixed(2)),
          }));
        // .find(match => match.sort_criteria > 0.60)
        console.log(results);

        // hello world
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div class="block">
        <div class="container is-max-desktop">
          <div class="card">
            <div class="card-content">
              <h3>¿A donde te gustaria viajar?</h3>
            </div>
          </div>
        </div>
        <div class="container is-max-desktop">
          <div class="card">
            <div class="card-content">
              <p class="subtitle is-text-centered">Como esta el clima en</p>
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Tweets</p>
                    <p class="title">3,456</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
