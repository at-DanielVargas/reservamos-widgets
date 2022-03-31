import { newSpecPage } from '@stencil/core/testing';
import { ReservamosForecast } from '../reservamos-forecast';

describe('reservamos-forecast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ReservamosForecast],
      html: `<reservamos-forecast></reservamos-forecast>`,
    });
    expect(page.root).toEqualHtml(`
      <reservamos-forecast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </reservamos-forecast>
    `);
  });
});
