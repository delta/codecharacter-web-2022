import Phaser from 'phaser';

export class Button extends Phaser.Scene {
  constructor() {
    super({
      key: 'Button',
    });
  }

  preload(): void {
    this.load.image('towerBrick', 'assets/tower_brick.png');
    this.load.image('towerFire', 'assets/tower_fire.png');
    this.load.image('towerIce', 'assets/tower_ice.png');
    this.load.image('save', 'assets/save.png');
    this.load.image('buttonDrop', 'assets/dropdown.png');
  }

  create(): void {
    let check = true;
    const outerRect = this.add.rectangle(
      0,
      100,
      this.game.renderer.width + this.game.renderer.width,
      180,
    );
    outerRect.setStrokeStyle(2, 0xffffff);
    const rect = this.add.rectangle(
      this.game.renderer.width / 7,
      100,
      240,
      120,
    );
    rect.setStrokeStyle(2, 0x1a65ac);
    const brick = this.add
      .image(this.game.renderer.width / 10, 100, 'towerBrick')
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        // console.log('hello phaser');
      });
    brick.setScale(0.5);
    const fire = this.add
      .image(
        this.game.renderer.width / 10 + this.game.renderer.width / 22,
        100,
        'towerFire',
      )
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        // console.log('hello phaser1');
      });
    fire.setScale(0.5);

    const ice = this.add
      .image(
        this.game.renderer.width / 10 +
          this.game.renderer.width / 22 +
          this.game.renderer.width / 22,
        100,
        'towerIce',
      )
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        // console.log('hello phaser2');
      });
    ice.setScale(0.5);
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
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        // console.log('hello phaser4');
      });
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
  }
}
