import { newE2EPage } from '@stencil/core/testing';

describe('wc-trasporti-map', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<wc-trasporti-map></wc-trasporti-map>');
    const element = await page.find('wc-trasporti-table');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<wc-trasporti-map></wc-trasporti-map>');
    const component = await page.find('wc-trasporti-map');
    const element = await page.find('wc-trasporti-map >>> div');
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
