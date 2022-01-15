/* eslint-disable no-undef */
/* eslint-disable default-case */
import Phaser from "phaser";
import HealthBar from "./HealthBar.js";

let goDown = true;
let d = 0;
export default class Troop extends Phaser.GameObjects.Image {
    constructor(scene: Phaser.Scene, x: number, y: number, z: number, dx: number, dy: number){
        super(scene, x, y, 'troop', z);

        this.x = x;
        this.y = y;
        this.hp = new HealthBar(scene, this.x, this.y - 110);
        this.z = z;
        this.dx = dx;
        this.dy = dy;
    }

    update(){
        // @ts-expect-error
        const insertUfo = this.scene.add.isoSprite(
            this.x,
            this.y+(d/4),
            this.z,
            'ufo',
            Map.troopGroup,
        );
        insertUfo.setScale(0.2)
        this.hp.draw(this.x, this.y - 110 + (d/4));
        if(goDown){
            d+=1;
            if(d>800){
            goDown=false;
            }
        }
        else{
            d-=1;
            if(d<=0){
            goDown=true;
            }
        }
    }
};