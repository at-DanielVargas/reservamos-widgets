import { newSpecPage } from '@stencil/core/testing';
import { ReservamosSearch } from '../reservamos-search';

describe('reservamos-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ReservamosSearch],
      html: `<reservamos-search></reservamos-search>`,
    });
    expect(page.root).toEqualHtml(`
      <reservamos-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </reservamos-search>
    `);
  });
});
