import '../src/pages/Home.js';
import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';

describe('HomePage Test', () => {
  let element: any;
  beforeEach(async () => {
    element = await fixture(html`<home-page></home-page>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Home Page');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
