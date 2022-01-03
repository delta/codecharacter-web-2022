import Phaser from 'phaser';

export class Map extends Phaser.Scene {
  private gridContainer: Phaser.GameObjects.Container;

  constructor() {
    super({
      key: 'Map',
    });
  }

  create(): void {
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 3;
    this.gridContainer = this.add.container(screenCenterX,screenCenterY);

    // Draw a 5 by 8 grid of 75 width hexagons at 5,5 - They will be placed in the gridContainer so will be at 80,80
    this.drawHexGrid(8,8,55,5,5);
    this.gridContainer.angle += 60;

}

drawHexGrid(width: number, height: number, hexHeight: number,startX:number = 0,startY:number = 0) {
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
      //http://csharphelper.com/blog/2015/10/draw-a-hexagonal-grid-in-c/
      const width: number = (4 * (height / 2 / Math.sqrt(3)));
      const y: number = height / 2;
      const hexCoords: number[] = [0, y, width * 0.25, y - height / 2, width * 0.75, y - height / 2,  width, y,  width * 0.75, y + height / 2, width * 0.25, y + height / 2];
      return hexCoords;
  }
}
