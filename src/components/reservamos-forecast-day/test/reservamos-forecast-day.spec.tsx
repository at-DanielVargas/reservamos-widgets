import { newSpecPage } from '@stencil/core/testing';
import { ReservamosForecastDay } from '../reservamos-forecast-day';

describe('reservamos-forecast-day', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ReservamosForecastDay],
      html: `<reservamos-forecast-day></reservamos-forecast-day>`,
    });
    expect(page.root).toEqualHtml(`
      <reservamos-forecast-day>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </reservamos-forecast-day>
    `);
  });
});
