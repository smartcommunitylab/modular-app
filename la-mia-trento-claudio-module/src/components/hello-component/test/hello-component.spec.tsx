import { newSpecPage } from '@stencil/core/testing';
import { HelloComponent } from '../hello-component';

describe('hello-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HelloComponent],
      html: `<hello-component></hello-component>`,
    });
    expect(page.root).toEqualHtml(`
      <hello-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hello-component>
    `);
  });
});
