import Phaser from 'phaser';
import IsoPlugin from 'phaser3-plugin-isometric';

export class Map extends Phaser.Scene {
  iso: any;

  static isoGroup: Phaser.GameObjects.Group;

  static isoSprite: Phaser.GameObjects.GameObjectFactory;

  position: Number;

  constructor() {
    super({
      key: 'Map',
      mapAdd: { isoPlugin: 'iso' },
    });
    this.position = 2;
  }

  preload(): void {
    this.load.image('towerBrick', 'assets/tower_brick.png');
    this.load.image('towerFire', 'assets/tower_fire.png');
    this.load.image('towerIce', 'assets/tower_ice.png');
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
    let tile;
    // Fire, Ice and Brick Towers Code Start
    const towerX = this.game.renderer.width / 10;
    const towerXGap = this.game.renderer.width / 22;
    const brick = this.add
      .image(towerX, 100, 'towerBrick')
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.position = -1;
      });
    this.add.text(towerX - 20, 150, 'Brick');
    brick.setScale(0.5);

    const fire = this.add
      .image(towerX + towerXGap * 1, 100, 'towerFire')
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.position = 0;
      });
    this.add.text(towerX + towerXGap * 1 - 20, 150, 'Fire');
    fire.setScale(0.5);

    const ice = this.add
      .image(towerX + towerXGap * 2, 100, 'towerIce')
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.position = 1;
      });
    this.add.text(towerX + towerXGap * 2 - 20, 150, 'Ice');
    ice.setScale(0.5);
    // Fire, Ice and Brick Towers Code End
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
            'save',
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

    // Map code starts

    Map.isoGroup = this.add.group();

    this.iso.projector.origin.setTo(
      this.game.renderer.width / 2200,
      this.game.renderer.height / 3000,
    );
    for (let xx = 0; xx < 512; xx += 16) {
      for (let yy = 0; yy < 512; yy += 16) {
        // @ts-expect-error

        tile = this.add.isoSprite(xx, yy, 0, 'tile', Map.isoGroup);

        tile.setInteractive();
        // ts-except error is used because typescript is not able to detect the phaser-isometric plugin because it is in javascript
        tile.on('pointerdown', () => {
          if (this.position === -1) {
            // @ts-expect-error
            const insertTower = this.add.isoSprite(
              xx,
              yy,
              2,
              'towerBrick',
              Map.isoGroup,
            );

            insertTower.setScale(0.15);
            this.position = 2;
          }
          if (this.position === 0) {
            // @ts-expect-error
            const insertTower = this.add.isoSprite(
              xx,
              yy,
              2,
              'towerFire',
              Map.isoGroup,
            );
            insertTower.setScale(0.15);
            this.position = 2;
          }
          if (this.position === 1) {
            // @ts-expect-error

            const insertTower = this.add.isoSprite(
              xx,
              yy,
              2,
              'towerIce',
              Map.isoGroup,
            );
            insertTower.setScale(0.15);
            this.position = 2;
          }
        });
      }
    }
  }
}
