import { TileMap } from './scenes/TileMap.js';
import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import Phaser from 'phaser';

@customElement('cc-renderer')
export class Renderer extends LitElement {
  private _game!: Phaser.Game;

  firstUpdated(): void {
    this._game = new Phaser.Game({
      type: Phaser.AUTO,
      parent:
        this.shadowRoot?.querySelector<HTMLElement>('#renderer') ?? undefined,
      scene: [TileMap],
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
