import { newE2EPage } from '@stencil/core/testing';

describe('hello-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hello-component></hello-component>');

    const element = await page.find('hello-component');
    expect(element).toHaveClass('hydrated');
  });
});
