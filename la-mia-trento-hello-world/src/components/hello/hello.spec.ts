import { newSpecPage } from '@stencil/core/testing';
import { HelloComponent } from './hello';

describe('hello-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HelloComponent],
      html: '<hello-component></hello-component>',
    });
    expect(root).toEqualHtml(`
      <hello-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </hello-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HelloComponent],
      html: `<hello-component first="Stencil" last="'Don't call me a framework' JS"></hello-component>`,
    });
    expect(root).toEqualHtml(`
      <hello-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </hello-component>
    `);
  });
});
