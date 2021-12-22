import '@codecharacter-2022/map-designer';
import '@codecharacter-2022/renderer';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

@customElement('dashboard-page')
export class DashboardPage extends LitElement {
  render() {
    return html`
      <main>
        <cc-renderer></cc-renderer>
        <cc-map-designer></cc-map-designer>
      </main>
    `;
  }
}
