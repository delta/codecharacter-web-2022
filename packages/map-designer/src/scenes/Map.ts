import Phaser from 'phaser';

export class Map extends Phaser.Scene {
  private gridContainer: Phaser.GameObjects.Container;

  constructor() {
    super({
      key: 'Map',
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
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 3;
    this.gridContainer = this.add.container(screenCenterX,screenCenterY);

    // Draw a 5 by 8 grid of 75 width hexagons at 5,5 - They will be placed in the gridContainer so will be at 80,80
    this.drawHexGrid(8,8,55,5,5);
    this.gridContainer.angle += 55;

    let check = true;

    // Fire, Ice and Brick Towers Code Start

    const brick = this.add
      .image(this.game.renderer.width / 10, 100, 'towerBrick')
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
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
        console.log("ehllo");
      });
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
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
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

drawHexGrid(width: number, height: number, hexHeight: number,startX:number = 0,startY:number = 0): void {
    const hexCoords: number[] = this.getHexCoords(hexHeight);
    for (let x: number = 0; x <= width-1; x+=1) {
        for (let y: number = 0; y <= height-1; y+=1) {
            const hexX = x * hexHeight - (x*(hexHeight/9));
            let hexY = y * hexHeight + (y*2);
            if (x % 2 === 1) {
                hexY+= hexHeight / 2;

            }
            const hex1 = this.add.polygon(hexX+startX, hexY+startY, hexCoords, 0xffffff);
            hex1.setStrokeStyle(1, 0xefc53f);
            hex1.setData('painted',false);
            hex1.setInteractive({ cursor: 'pointer' }).on('pointerdown', () => {
                console.log('click x:'+x+' y:'+y);

                hex1.setStrokeStyle(2, 0xef15ff);
                hex1.data.values.painted = !hex1.data.values.painted;
                if (hex1.data.values.painted)
                {
                    hex1.setFillStyle(0x3000ff)
                }else{
                    hex1.setFillStyle(0xffffff)
                }
            }).on('pointerup', () => {
                hex1.setStrokeStyle(1, 0xefc53f);
            });
            this.gridContainer.add(hex1);
        }
    }
}

  getHexCoords(height: number): number[] {
      // http://csharphelper.com/blog/2015/10/draw-a-hexagonal-grid-in-c/
      const width: number = (4 * (height / 2 / Math.sqrt(3)));
      const y: number = height / 2;
      const hexCoords: number[] = [0, y, width * 0.25, y - height / 2, width * 0.75, y - height / 2,  width, y,  width * 0.75, y + height / 2, width * 0.25, y + height / 2];
      return hexCoords;
  }
}
