import Phaser from 'phaser';

export class TestScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'TestScene',
    });
  }

  create(): void {
    const graphics = this.add.graphics({
      lineStyle: { width: 2, color: 0xaaaa00 },
    });
    const triangle = Phaser.Geom.Triangle.BuildEquilateral(400, 25, 300);
    const points = Phaser.Geom.Triangle.Decompose(triangle);
    let angle = 0;
    while (angle < Math.PI * 2) {
      Phaser.Geom.Triangle.Offset(
        triangle,
        Math.cos(angle) * 15,
        Math.sin(angle) * 15,
      );
      Phaser.Geom.Triangle.Rotate(triangle, Math.PI / 20);
      Phaser.Geom.Triangle.Decompose(triangle, points);
      angle += Math.PI / 20;
    }
    graphics.strokePoints(points);
  }
}
