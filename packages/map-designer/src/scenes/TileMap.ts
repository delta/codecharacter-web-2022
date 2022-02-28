import Phaser from 'phaser';
import { Pan, Pinch } from 'phaser3-rex-plugins/plugins/gestures.js';
import TowerConfig from '../config/TowerConfig.js';
import TowerType from '../config/TowerType.js';
import { events, MapDesignerEvents } from '../events/EventEmitter.js';
import { Tower } from '../objects/Tower.js';
import { Parameters } from '../Parameters.js';

enum SelectedObjectType {
  TOWER,
  ERASER,
  MOVE,
}

export class TileMap extends Phaser.Scene {
  _selectedObjectType = SelectedObjectType.TOWER;

  _selectedTower: TowerType = TowerConfig.towers[0];

  controls!: Phaser.Cameras.Controls.SmoothedKeyControl;

  map!: Phaser.Tilemaps.Tilemap;

  groundLayer!: Phaser.Tilemaps.TilemapLayer;

  coinsUsed = 0;

  _currentTowers: Map<number, Tower> = new Map();

  constructor() {
    super({
      key: 'TileMap',
    });
  }

  preload(): void {
    this.load.image('tile', './assets/tile.png');
    this.load.image('tile_crystal_N', './assets/tile_crystal_N.png');
    this.load.image('tile_E', './assets/tile_E.png');
    this.load.image('tile_treeQuad_N', './assets/tile_treeQuad_N.png');
    TowerConfig.towers.forEach(tower => {
      this.load.image(`${tower.name}-sprite`, `./assets/${tower.asset}`);
    });
    this.load.tilemapTiledJSON('map', './assets/map-2.json');
  }

  create(): void {
    this.map = this.add.tilemap('map');

    const landscapeTile = [
      this.map.addTilesetImage('tile.png', 'tile'),
      this.map.addTilesetImage('tile_crystal_N.png', 'tile_crystal_N'),
      this.map.addTilesetImage('tile_E.png', 'tile_E'),
      this.map.addTilesetImage('tile_treeQuad_N.png', 'tile_treeQuad_N'),
    ];
    this.groundLayer = this.map.createLayer('Ground', landscapeTile, 0, 0);
    this.groundLayer.setDepth(0);

    this.groundLayer.setCullPadding(6, 6);

    events.on(MapDesignerEvents.TOWER_SELECTED, (tower: TowerType) => {
      this._selectedObjectType = SelectedObjectType.TOWER;
      this._selectedTower = tower;
    });

    events.on(MapDesignerEvents.ERASER_SELECTED, () => {
      this._selectedObjectType = SelectedObjectType.ERASER;
    });

    events.on(MapDesignerEvents.MOVE_SELECTED, () => {
      this._selectedObjectType = SelectedObjectType.MOVE;
    });

    events.on(MapDesignerEvents.LOAD_MAP, (mapData: Array<Array<number>>) => {
      this._loadMap(mapData);
    });

    const pinch = new Pinch(this);
    const pan = new Pan(this);
    const camera = this.cameras.main;
    camera.zoom = 0.1;
    camera.setScroll(-200, 2000);
    pinch.on(
      'pinch',
      () => {
        if (this._selectedObjectType === SelectedObjectType.MOVE) {
          const {
            scaleFactor,
            centerX,
            centerY,
            movementCenterX,
            movementCenterY,
          } = pinch;
          const oldZoom = camera.zoom;
          const newZoom = oldZoom * scaleFactor;

          const { width, height } = this.game.canvas;
          const xFromCenter = centerX - width / 2;
          const yFromCenter = centerY - height / 2;

          camera.scrollX +=
            xFromCenter / oldZoom -
            xFromCenter / newZoom -
            movementCenterX * newZoom;
          camera.scrollY +=
            yFromCenter / oldZoom -
            yFromCenter / newZoom -
            movementCenterY * newZoom;
          camera.setZoom(newZoom);
        }
      },
      this,
    );

    pan.on(
      'pan',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (newPan: any) => {
        const { dx, dy } = newPan;
        if (
          this.input.activePointer.middleButtonDown() ||
          this._selectedObjectType === SelectedObjectType.MOVE
        ) {
          camera.scrollX -= dx / camera.zoom;
          camera.scrollY -= dy / camera.zoom;
        }
      },
      this,
    );

    this.input.on(
      Phaser.Input.Events.POINTER_MOVE,
      (pointer: Phaser.Input.Pointer) => {
        const tile = this.map.getTileAtWorldXY(
          pointer.worldX - Parameters.mapTileOffsetX,
          pointer.worldY - Parameters.mapTileOffsetY,
          false,
          camera,
          this.groundLayer,
        );
        if (tile && this.game.device.os.desktop) {
          this.tweens.addCounter({
            from: 200,
            to: 255,
            duration: 500,
            onUpdate(tween) {
              const value = Math.floor(tween.getValue());
              tile.tint = Phaser.Display.Color.GetColor(value, value, value);
            },
          });
        }
        if (tile && this.input.activePointer.primaryDown) {
          this._performActionAt(tile.x, tile.y);
        }
      },
    );

    this.input.on(
      Phaser.Input.Events.POINTER_DOWN,
      (pointer: Phaser.Input.Pointer) => {
        const tile = this.map.getTileAtWorldXY(
          pointer.worldX - Parameters.mapTileOffsetX,
          pointer.worldY - Parameters.mapTileOffsetY,
          false,
          camera,
          this.groundLayer,
        );
        if (
          tile &&
          (this.input.activePointer.leftButtonDown() ||
            this.input.activePointer.wasTouch) &&
          !pinch.isPinched &&
          !pan.isPanned
        ) {
          this._performActionAt(tile.x, tile.y);
        }
      },
    );

    this.input.on(
      Phaser.Input.Events.POINTER_WHEEL,
      (pointer: Phaser.Input.Pointer) => {
        const oldZoom = camera.zoom;
        const newZoom = oldZoom * (pointer.deltaY > 0 ? 0.9 : 1.1);

        const { width, height } = this.game.canvas;
        const xFromCenter = pointer.x - width / 2;
        const yFromCenter = pointer.y - height / 2;

        camera.setZoom(newZoom);
        camera.scrollX += xFromCenter / oldZoom - xFromCenter / newZoom;
        camera.scrollY += yFromCenter / oldZoom - yFromCenter / newZoom;
      },
    );

    events.emit(MapDesignerEvents.COINS_CHANGED, Parameters.totalCoins);

    const storedMapData = localStorage.getItem(Parameters.mapLocalStorageKey);
    if (storedMapData) {
      this._loadMap(JSON.parse(storedMapData));
    } else {
      this._loadMap(this._getEmptyMap());
    }

    events.on(MapDesignerEvents.CLEAR_MAP, () => {
      this._loadMap(this._getEmptyMap());
    });

    this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.input.off(Phaser.Input.Events.POINTER_UP);
      this.input.off(Phaser.Input.Events.POINTER_MOVE);
      this.input.off(Phaser.Input.Events.POINTER_DOWN);
      this.input.off(Phaser.Input.Events.POINTER_WHEEL);
    });
  }

  private _performActionAt(x: number, y: number) {
    if (this._selectedObjectType === SelectedObjectType.MOVE) {
      return;
    }
    if (
      x === 0 ||
      y === 0 ||
      x === Parameters.mapWidth - 1 ||
      y === Parameters.mapHeight - 1
    ) {
      return;
    }
    if (
      this._selectedObjectType === SelectedObjectType.TOWER &&
      this._selectedTower.price > Parameters.totalCoins - this.coinsUsed
    ) {
      return;
    }
    if (this._selectedObjectType === SelectedObjectType.ERASER) {
      const tileIndex = x * 100 + y;
      if (this._currentTowers.has(tileIndex)) {
        this._currentTowers.get(tileIndex)?.destroy();
        this._currentTowers.delete(tileIndex);
        this._updateMap();
      }
      return;
    }
    const tile = this.groundLayer.getTileAt(x, y);
    const tileIndex = x * 100 + y;
    if (
      !this._currentTowers.has(tileIndex) ||
      this._currentTowers.get(tileIndex)?.towerType !== this._selectedTower
    ) {
      this._currentTowers.get(tileIndex)?.destroy();
      this._currentTowers.set(
        tileIndex,
        this.add.existing(
          new Tower(
            this,
            this._selectedTower,
            tile.pixelX + Parameters.mapTileHalfWidth,
            tile.pixelY + Parameters.mapTileHalfHeight,
          ),
        ),
      );
      this._updateMap();
    }
  }

  private _updateMap() {
    const mapData: Array<Array<number>> = [];
    let coins = 0;
    for (let y = 0; y < Parameters.mapHeight; y++) {
      const row: Array<number> = [];
      for (let x = 0; x < Parameters.mapWidth; x++) {
        if (this._currentTowers.has(x * 100 + y)) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const towerType = this._currentTowers.get(x * 100 + y)!.towerType;
          const tileIndex = TowerConfig.towers.findIndex(
            tower => tower.tileId === towerType.tileId,
          );
          row.push(tileIndex + 1 ?? 0);
          coins += towerType?.price ?? 0;
        } else {
          row.push(0);
        }
      }
      mapData.push(row);
    }
    events.emit(MapDesignerEvents.MAP_DATA_CHANGED, mapData);
    localStorage.setItem(
      Parameters.mapLocalStorageKey,
      JSON.stringify(mapData),
    );

    this.coinsUsed = coins;
    events.emit(MapDesignerEvents.COINS_CHANGED, Parameters.totalCoins - coins);
  }

  private _getEmptyMap() {
    const mapData: Array<Array<number>> = [];
    for (let y = 0; y < Parameters.mapHeight; y++) {
      const row: Array<number> = [];
      for (let x = 0; x < Parameters.mapWidth; x++) {
        row.push(0);
      }
      mapData.push(row);
    }
    return mapData;
  }

  private _loadMap(mapData: Array<Array<number>>): void {
    for (const tower of this._currentTowers.values()) {
      tower.destroy();
    }
    this._currentTowers.clear();
    localStorage.setItem(
      Parameters.mapLocalStorageKey,
      JSON.stringify(mapData),
    );

    let coins = 0;
    for (let y = 0; y < Parameters.mapHeight; y++) {
      for (let x = 0; x < Parameters.mapWidth; x++) {
        const tileId = mapData[y][x];
        if (tileId >= 1) {
          const towerId = tileId - 1;
          const tile = this.groundLayer.getTileAt(x, y);
          const tileIndex = x * 100 + y;
          this._currentTowers.set(
            tileIndex,
            this.add.existing(
              new Tower(
                this,
                TowerConfig.towers[towerId],
                tile.pixelX + Parameters.mapTileHalfWidth,
                tile.pixelY + Parameters.mapTileHalfHeight,
              ),
            ),
          );
          coins += TowerConfig.towers[towerId].price;
        }
      }
    }

    this.coinsUsed = coins;
    events.emit(MapDesignerEvents.COINS_CHANGED, Parameters.totalCoins - coins);

    this._updateMap();
  }
}
