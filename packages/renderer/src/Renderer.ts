import { TileMap } from './scenes/TileMap.js';
import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import Phaser from 'phaser';
import { events, RendererEvents } from './events/EventEmitter.js';

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
      backgroundColor: '#18729b',
    });
  }

  disconnectedCallback(): void {
    events.emit(RendererEvents.SHUTDOWN);
    events.removeAllListeners();
    this._game.scene.getScene('TileMap').events.removeAllListeners();
    this._game.destroy(true);
  }

  render(): TemplateResult {
    return html` <div id="renderer"></div> `;
  }
}
