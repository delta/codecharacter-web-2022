import Phaser from 'phaser';
import IsoPlugin from 'phaser3-plugin-isometric';
import Troop from './Troop.js';

export class Scene extends Phaser.Scene {
  iso: any;

  static isoGroup: Phaser.GameObjects.Group;

  static isoSprite: Phaser.GameObjects.GameObjectFactory;

  position: Number;

  brickTower: string;

  fireTower: string;

  iceTower: string;

  brickPositions: { x: number; y: number }[];

  icePositions: { x: number; y: number }[];

  firePositions: { x: number; y: number }[];

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
  }

  preload(): void {
    this.load.image('towerBrick', 'assets/tower_brick.png');
    // this.load.image('towerFire', 'assets/tower_fire.png');
    this.load.image('towerIce', 'assets/iceTower.png');
    this.load.image('towerFireB', 'assets/fireTowerBottom.png');
    this.load.image('towerFireM', 'assets/fireTowerMid.png');
    this.load.image('towerFireT', 'assets/fireTowerTop.png');
    this.load.image('save', 'assets/save.png');
    this.load.image('buttonDrop', 'assets/dropdown.png');
    this.load.image('tile', 'assets/tiles.png');
    this.load.image('ufo', 'assets/ufo.png');
    this.load.scenePlugin({
      key: 'IsoPlugin',
      url: IsoPlugin,
      sceneKey: 'iso',
    });
  }

  create(): void {
    let check = true;
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

    const fireB = this.add
      .image(towerX + towerXGap * 1, 100, 'towerFireB')
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.position = 0;
      });
    this.add.text(towerX + towerXGap * 1 - 20, 150, 'Fire');
    fireB.setScale(0.5);

    const fireM = this.add
      .image(towerX + towerXGap * 1, 80, 'towerFireM')
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.position = 0;
      });
    fireM.setScale(0.5);

    const fireT = this.add
      .image(towerX + towerXGap * 1, 60, 'towerFireT')
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.position = 0;
      });
    fireT.setScale(0.5);

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

    Map.isoGroup = this.add.group();
    Map.troopGroup = this.add.group();

    this.iso.projector.origin.setTo(
      this.game.renderer.width / 2200,
      this.game.renderer.height / 3000,
    );
    this.settiles(512);
  }

  settiles(noOftiles: Number): void {
    let tile;
    let prevBricks;
    let prevIce;
    let prevFire;
    if (localStorage.getItem(this.brickTower)) {
      this.brickPositions = JSON.parse(
        localStorage.getItem(this.brickTower) || '{}',
      );
    }
    if (localStorage.getItem(this.iceTower)) {
      this.icePositions = JSON.parse(
        localStorage.getItem(this.iceTower) || '{}',
      );
    }
    if (localStorage.getItem(this.fireTower)) {
      this.firePositions = JSON.parse(
        localStorage.getItem(this.fireTower) || '{}',
      );
    }
    for (let xx = 0; xx < noOftiles; xx += 16) {
      for (let yy = 0; yy < noOftiles; yy += 16) {
        // @ts-expect-error
        tile = this.add.isoSprite(xx, yy, 0, 'tile', Map.isoGroup);
        tile.setInteractive();
        // ts-except error is used because typescript is not able to detect the phaser-isometric plugin because it is in javascript
        tile.on('pointerdown', () => {
          if (this.position === -1) {
            this.brickPositions.push({ x: xx, y: yy });
            localStorage.setItem(
              this.brickTower,
              JSON.stringify(this.brickPositions),
            );
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
            this.firePositions.push({ x: xx, y: yy });
            localStorage.setItem(
              this.fireTower,
              JSON.stringify(this.firePositions),
            );
            // @ts-expect-error
            const insertTowerB = this.add.isoSprite(
              xx,
              yy,
              7,
              'towerFireB',
              Map.isoGroup,
            );
            // @ts-expect-error
            const insertTowerM = this.add.isoSprite(
              xx,
              yy,
              13,
              'towerFireM',
              Map.isoGroup,
            );
            // @ts-expect-error
            const insertTowerT = this.add.isoSprite(
              xx,
              yy,
              20,
              'towerFireT',
              Map.isoGroup,
            );
            insertTowerB.setScale(0.15);
            insertTowerM.setScale(0.15);
            insertTowerT.setScale(0.15);
            this.position = 6;
          }
          if (this.position === 1) {
            this.icePositions.push({ x: xx, y: yy });
            localStorage.setItem(
              this.iceTower,
              JSON.stringify(this.icePositions),
            );
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
   
    if (localStorage.getItem(this.brickTower)) {
      prevBricks = JSON.parse(localStorage.getItem(this.brickTower) || '{}');
      for (let i = 0; i < prevBricks.length; i += 1) {
        // @ts-expect-error
        const insertTower = this.add.isoSprite(
          prevBricks[i].x,
          prevBricks[i].y,
          2,
          'towerBrick',
          Map.isoGroup,
        );
        insertTower.setScale(0.15);
      }
    }
    if (localStorage.getItem(this.iceTower)) {
      prevIce = JSON.parse(localStorage.getItem(this.iceTower) || '{}');
      for (let i = 0; i < prevIce.length; i += 1) {
        // @ts-expect-error
        const insertTower = this.add.isoSprite(
          prevIce[i].x,
          prevIce[i].y,
          2,
          'towerIce',
          Map.isoGroup,
        );
        insertTower.setScale(0.15);
      }
    }
    if (localStorage.getItem(this.fireTower)) {
      prevFire = JSON.parse(localStorage.getItem(this.fireTower) || '{}');
      for (let i = 0; i < prevFire.length; i += 1) {
        // @ts-expect-error
        const insertTowerB = this.add.isoSprite(
          prevFire[i].x,
          prevFire[i].y,
          7,
          'towerFireB',
          Map.isoGroup,
        );
        // @ts-expect-error
        const insertTowerM = this.add.isoSprite(
          prevFire[i].x,
          prevFire[i].y,
          13,
          'towerFireM',
          Map.isoGroup,
        );
        // @ts-expect-error
        const insertTowerT = this.add.isoSprite(
          prevFire[i].x,
          prevFire[i].y,
          20,
          'towerFireT',
          Map.isoGroup,
        );
        insertTowerB.setScale(0.15);
        insertTowerM.setScale(0.15);
        insertTowerT.setScale(0.15);
      }
    }
  }

  update(): void {
    Map.troopGroup.children.iterate((child : any) => {
      if(child !== undefined) child.destroy();
    });
    new Troop(this, 16, 16, 15, 15, 0, 5).update();
    new Troop(this, 16, 256, 15, 15, 5, 0).update();
  }
}
