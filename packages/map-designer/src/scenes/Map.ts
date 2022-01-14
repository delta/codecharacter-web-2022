import Phaser from 'phaser';
import IsoPlugin from 'phaser3-plugin-isometric';

export class Map extends Phaser.Scene {
  iso: any;

  static isoGroup: Phaser.GameObjects.Group;

  static isoSprite: Phaser.GameObjects.GameObjectFactory;

  position: Number;

  totalTiles: number;

  tileWidth: number;

  brickTower: string;

  fireTower: string;

  iceTower: string;

  brickPositions: { x: number; y: number }[];

  icePositions: { x: number; y: number }[];

  firePositions: { x: number; y: number }[];

  tiles: { value: number; x: number; y: number }[];

  tilesPositon: number[][];

  towers: { key: number; name: string; url: string }[];

  storageKey: string;

  constructor() {
    super({
      key: 'Map',
      mapAdd: { isoPlugin: 'iso' },
    });
    this.position = 2;
    this.brickTower = 'brickTower';
    this.iceTower = 'iceTower';
    this.fireTower = 'fireTower';
    this.brickPositions = [];
    this.icePositions = [];
    this.firePositions = [];
    this.tiles = [];
    this.tilesPositon = [];
    this.totalTiles = 512;
    this.tileWidth = 8;
    this.towers = [
      { key: 1, name: 'tower1', url: 'assets/tower_brick.png' },
      { key: 2, name: 'tower2', url: 'assets/tower_fire.png' },
      { key: 3, name: 'tower3', url: 'assets/tower_ice.png' },
    ];
    this.storageKey = 'towers';
  }

  preload(): void {
    this.towers.forEach(tower => {
      this.load.image(tower.name, tower.url);
    });
    this.load.image('save', 'assets/save.png');
    this.load.image('buttonDrop', 'assets/dropdown.png');
    this.load.image('tile', 'assets/tiles.png');
    this.load.scenePlugin({
      key: 'IsoPlugin',
      url: IsoPlugin,
      sceneKey: 'iso',
    });
  }

  create(): void {
    let check = true;
    const towerX = this.game.renderer.width / 10;
    const towerXGap = this.game.renderer.width / 22;
    this.towers.forEach(tower => {
      const towerButton = this.add
        .image(towerX + towerXGap * (tower.key - 1), 100, tower.name)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
          this.position = tower.key;
        });
      this.add.text(towerX + towerXGap * (tower.key - 1) - 30, 150, tower.name);
      towerButton.setScale(0.5);
    });
    const coins = this.add.text(
      this.game.renderer.width / 2.5,
      50,
      'COINS LEFT',
    );
    coins.setScale(2);
    const coinText = this.add.text(this.game.renderer.width / 2.3, 100, '0000');
    coinText.setScale(1.5);

    const save = this.add
      .image(this.game.renderer.width - 200, 100, 'save')
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {});
    save.setScale(0.8);
    this.add
      .text(this.game.renderer.width - 230, 90, 'Save', {
        fontStyle: 'bold',
        fontSize: '20px',
      })
      .setColor('white')
      .setOrigin(0);
    const drop = this.add.image(
      this.game.renderer.width - 138,
      100,
      'buttonDrop',
    );

    drop
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        if (check) {
          check = false;
          const commit = this.add.image(
            this.game.renderer.width - 200,
            140,
            'Save',
          );
          const commitText = this.add
            .text(this.game.renderer.width - 235, 130, 'Commit', {
              fontStyle: 'bold',
              fontSize: '20px',
            })
            .setColor('white')
            .setOrigin(0);
          commit
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
              commit.destroy();
              commitText.destroy();
              check = true;
            });
          commit.setScale(0.8);
        }
      });
    drop.setScale(0.8);

    Map.isoGroup = this.add.group();

    this.iso.projector.origin.setTo(
      this.game.renderer.width / 2200,
      this.game.renderer.height / 3000,
    );
    this.setTiles(this.totalTiles, this.tileWidth);
  }

  setTiles(noOftiles: number, increment: number): void {
    if (!localStorage.getItem(this.storageKey)) {
      for (let xx = 0; xx < noOftiles; xx += increment) {
        this.tilesPositon.push([]);

        for (let yy = 0; yy < noOftiles; yy += increment) {
          this.tilesPositon[xx / increment][yy / increment] = 0;
          localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.tilesPositon),
          );
        }
      }
    } else {
      this.tilesPositon = JSON.parse(
        localStorage.getItem(this.storageKey) || '{}',
      );
    }
    this.displayTiles();
  }

  displayTiles(): void {
    let tile;
    for (let xx = 0; xx < this.tilesPositon.length; xx += 1)
      for (let yy = 0; yy < this.tilesPositon[xx].length; yy += 1) {
        // ts-except error is used because typescript is not able to detect the phaser-isometric plugin because it is in javascript

        // @ts-expect-error

        tile = this.add.isoSprite(
          xx * this.tileWidth,
          yy * this.tileWidth,
          0,
          'tile',
          Map.isoGroup,
        );
        tile.setInteractive();
        this.towers.forEach(t => {
          if (this.tilesPositon[xx][yy] === t.key) {
            // @ts-expect-error
            const insertTower = this.add.isoSprite(
              xx * this.tileWidth,
              yy * this.tileWidth,
              10,
              t.name,
              Map.isoGroup,
            );
            insertTower.setScale(0.09);
          }
        });
        tile.on('pointerdown', () => {
          this.towers.forEach(t => {
            if (this.position === t.key) {
              this.tilesPositon[xx][yy] = t.key;
              localStorage.setItem(
                this.storageKey,
                JSON.stringify(this.tilesPositon),
              );
              // @ts-expect-error
              const insertTower = this.add.isoSprite(
                xx * this.tileWidth,
                yy * this.tileWidth,
                10,
                t.name,
                Map.isoGroup,
              );
              insertTower.setScale(0.09);
            }
          });
        });
      }
  }
}
