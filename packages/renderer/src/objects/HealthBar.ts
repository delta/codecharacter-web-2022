import Phaser from 'phaser';

export class HealthBar {
  bar: Phaser.GameObjects.Graphics;

  x: number;

  y: number;

  value: number;

  p: number;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.bar = new Phaser.GameObjects.Graphics(scene);

    this.x = x;
    this.y = y;
    this.value = 100;
    this.p = 60 / 100;

    this.draw();

    scene.add.existing(this.bar);
  }

  setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;

    this.draw();
  }

  setHp(amount: number): boolean {
    this.value = amount;

    if (this.value < 0) {
      this.value = 0;
    }

    this.draw();

    return this.value === 0;
  }

  draw(): void {
    this.bar.clear();

    this.bar.fillStyle(0xffffff);
    this.bar.fillRect(this.x, this.y, 60, 4);

    if (this.value < 30) {
      this.bar.fillStyle(0xff0000);
    } else {
      this.bar.fillStyle(0x00ff00);
    }
    const d = Math.floor(this.p * this.value);
    this.bar.fillRect(this.x, this.y, d, 4);
  }

  destroy(): void {
    this.bar.destroy();
  }
}
