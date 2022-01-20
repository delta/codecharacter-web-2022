import { TestScene } from './scenes/Test';
import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import Phaser from 'phaser';

@customElement('cc-map-designer')
export class MapDesigner extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0.2em;
      box-sizing: border-box;
    }
  `;

  private _game!: Phaser.Game;

  firstUpdated(): void {
    this._game = new Phaser.Game({
      type: Phaser.AUTO,
      parent:
        this.shadowRoot?.querySelector<HTMLElement>('#renderer') ?? undefined,
      scene: [TestScene],
      dom: {
        createContainer: false,
      },
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    });
  }

  disconnectedCallback(): void {
    this._game.destroy(true);
  }

  render(): TemplateResult {
    return html` <div id="renderer"></div> `;
  }
}
