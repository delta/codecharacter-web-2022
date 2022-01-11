import Phaser from "phaser";

export default class HealthBar {
    bar: Phaser.GameObjects.Graphics;

    x: number;

    y: number;

    value: number;

    p: number;

    constructor (scene: Phaser.Scene, x: number, y: number)
    {
        this.bar = new Phaser.GameObjects.Graphics(scene).setDepth(512);

        this.x = x;
        this.y = y;
        this.value = 100;
        this.p = 76 / 100;

        // this.draw();

        scene.add.existing(this.bar);
    }

    decrease (amount: number)
    {
        this.value -= amount;

        if (this.value < 0)
        {
            this.value = 0;
        }

        // this.draw();

        return (this.value === 0);
    }

    draw (x: number, y: number)
    {
        this.bar.clear();

        //  BG
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(x, y, 80, 16);

        //  Health

        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(x + 2, y + 2, 76, 12);

        if (this.value < 30)
        {
            this.bar.fillStyle(0xff0000);
        }
        else
        {
            this.bar.fillStyle(0x00ff00);
        }

        const d = Math.floor(this.p * this.value);

        this.bar.fillRect(x + 2, y + 2, d, 12);
    }

}
