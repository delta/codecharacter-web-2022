import Phaser from 'phaser';
import IsoPlugin from 'phaser3-plugin-isometric';

export class Map extends Phaser.Scene {
  iso: any;

  static isoGroup: Phaser.GameObjects.Group;

  static isoSprite: Phaser.GameObjects.GameObjectFactory;

  position: Number;

  totalTiles: number;

  tileWidth: number;

  tile: { value: number; x: number; y: number }[];

  tilePositon: number[][];

  towers: { key: number; name: string; url: string; borderValue: number }[];

  storageKey: string;

  offset: number;

  buttonAnimvalue: number;

  constructor() {
    super({
      key: 'Map',
      mapAdd: { isoPlugin: 'iso' },
    });
    this.position = -1;
    this.buttonAnimvalue = 5;
    this.tile = [];
    this.tilePositon = [];
    this.totalTiles = 512;
    this.tileWidth = 8;
    this.offset = 8;
    this.towers = [
      { key: 1, name: 'Tower1', url: 'assets/tower1.png', borderValue: 1.3 },
      { key: 2, name: 'Tower2', url: 'assets/tower2.png', borderValue: 2.4 },
    ];
    this.storageKey = 'towers';
  }

  preload(): void {
    this.towers.forEach(tower => {
      this.load.image(tower.name, tower.url);
    });
    this.load.image('save', 'assets/save.png');
    this.load.image('commit', 'assets/commit.png');
    this.load.image('up', 'assets/up.png');
    this.load.image('buttonDrop', 'assets/dropdown.png');
    this.load.image('tile', 'assets/tiles.png');
    this.load.scenePlugin({
      key: 'IsoPlugin',
      url: IsoPlugin,
      sceneKey: 'iso',
    });
  }

  create(): void {
    let buttonBorder: Phaser.GameObjects.Rectangle;
    const rect = Array.from({ length: this.towers.length }, () => 0);
    const towerX = this.game.renderer.width / 10;
    const towerXGap = this.game.renderer.width / 12;
    this.towers.forEach(tower => {
      const towerButton = this.add
        .image(towerX + towerXGap * (tower.key - 1), 100, tower.name)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
          this.position = tower.key;
          rect[tower.key - 1] = 1;
          for (let i = 0; i < rect.length; i += 1) {
            if (i !== tower.key - 1 && rect[i] === 1) buttonBorder.destroy();
          }
          buttonBorder = this.add.rectangle(
            towerX + towerXGap * (tower.key - 1),
            (towerX + towerXGap * (tower.key - 1)) / tower.borderValue,
            120,
            120,
          );
          buttonBorder.setStrokeStyle(4, 0xefc53f);
        });
      const towerName = this.add.text(
        towerX + towerXGap * (tower.key - 1) - 30,
        150,
        tower.name,
      );

      // Tower button animations
      towerButton.on('pointerover', () => {
        towerButton.y += this.buttonAnimvalue;
        towerName.y += this.buttonAnimvalue;
      });
      towerButton.on('pointerout', () => {
        towerButton.y -= this.buttonAnimvalue;
        towerName.y -= this.buttonAnimvalue;
      });
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
    this.saveButton();

    Map.isoGroup = this.add.group();

    this.iso.projector.origin.setTo(
      this.game.renderer.width / 2200,
      this.game.renderer.height / 3000,
    );
    this.setTiles(this.totalTiles, this.tileWidth);
  }

  saveButton(): void {
    let check = true;

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
            'commit',
          );
          const commitText = this.add
            .text(this.game.renderer.width - 235, 130, 'Commit', {
              fontStyle: 'bold',
              fontSize: '20px',
            })
            .setColor('white')
            .setOrigin(0);

          commit.setScale(0.8);
          drop.destroy();
          const up = this.add.image(this.game.renderer.width - 138, 100, 'up');
          up.setInteractive().on(
            Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,
            () => {
              commit.destroy();
              commitText.destroy();
              up.destroy();
              save.destroy();
              drop.destroy();
              this.saveButton();
            },
          );
          up.setScale(0.8);
          commit
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
              commit.destroy();
              commitText.destroy();
              up.destroy();
              save.destroy();
              drop.destroy();
              this.saveButton();
              check = true;
            });
        }
      });
    // save button animations
    save.on('pointerdown', () => {
      save.y += this.buttonAnimvalue;
      drop.y += this.buttonAnimvalue;
    });
    save.on('pointerup', () => {
      save.y -= this.buttonAnimvalue;
      drop.y -= this.buttonAnimvalue;
    });
    drop.setScale(0.8);
  }

  setTiles(noOftiles: number, increment: number): void {
    if (!localStorage.getItem(this.storageKey)) {
      for (let xx = 0; xx < noOftiles - 1; xx += increment) {
        this.tilePositon.push([]);

        for (let yy = 0; yy < noOftiles - 1; yy += increment) {
          this.tilePositon[xx / increment][yy / increment] = 0;
          localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.tilePositon),
          );
        }
      }
    } else {
      this.tilePositon = JSON.parse(
        localStorage.getItem(this.storageKey) || '{}',
      );
    }
    this.displayTiles();
  }

  displayTiles(): void {
    let tile;
    for (let xx = 0; xx < this.tilePositon.length; xx += 1)
      for (let yy = 0; yy < this.tilePositon[xx].length; yy += 1) {
        // ts-except error is used because typescript is not able to detect the phaser-isometric plugin because it is in javascript

        // @ts-expect-error

        tile = this.add.isoSprite(
          xx * this.tileWidth,
          yy * this.tileWidth,
          0,
          'tile',
          Map.isoGroup,
        );

        tile.setScale(0.09);
        tile.setInteractive();
        this.towers.forEach(t => {
          if (this.tilePositon[xx][yy] === t.key) {
            // @ts-expect-error
            const insertTower = this.add.isoSprite(
              xx * this.tileWidth + this.offset,
              yy * this.tileWidth + this.offset,
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
              this.tilePositon[xx][yy] = t.key;
              localStorage.setItem(
                this.storageKey,
                JSON.stringify(this.tilePositon),
              );
              // @ts-expect-error
              const insertTower = this.add.isoSprite(
                xx * this.tileWidth + this.offset,
                yy * this.tileWidth + this.offset,
                10,
                t.name,
                Map.isoGroup,
              );
              insertTower.setScale(0.09);
              this.position = -1;
            }
          });
        });
      }
  }
}
