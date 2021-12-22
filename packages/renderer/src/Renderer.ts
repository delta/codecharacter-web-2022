import { TestScene } from './scenes/Test.js';
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import Phaser from 'phaser';

@customElement('cc-renderer')
export class Renderer extends LitElement {
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

  firstUpdated() {
    this._game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: this.shadowRoot!.querySelector<HTMLElement>('#renderer')!,
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

  disconnectedCallback() {
    this._game.destroy(true);
  }

  render() {
    return html` <div id="renderer"></div> `;
  }
}
