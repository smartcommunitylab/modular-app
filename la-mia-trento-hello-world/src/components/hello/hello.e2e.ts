import { newE2EPage } from '@stencil/core/testing';

describe('hello-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<hello-component></hello-component>');
    const element = await page.find('hello-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<hello-component></hello-component>');
    const component = await page.find('hello-component');
    const element = await page.find('hello-component >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
