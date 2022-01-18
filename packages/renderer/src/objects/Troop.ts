import Phaser from 'phaser';
import TroopType from '../config/TroopType.js';
import { Parameters } from '../Parameters.js';
import { HealthBar } from './HealthBar.js';

export type Direction =
  | 'east'
  | 'west'
  | 'north'
  | 'south'
  | 'northEast'
  | 'northWest'
  | 'southEast'
  | 'southWest';
type DirectionParameters = {
  offset: number;
  x: number;
  y: number;
};
type Directions = {
  [key: string]: DirectionParameters;
};

const directions: Directions = {
  east: { offset: 128, x: 2, y: 0 },
  northEast: { offset: 96, x: 2, y: -1 },
  north: { offset: 64, x: 0, y: -2 },
  northWest: { offset: 32, x: -2, y: -1 },
  west: { offset: 0, x: -2, y: 0 },
  southWest: { offset: 224, x: -2, y: 1 },
  south: { offset: 192, x: 0, y: 2 },
  southEast: { offset: 160, x: 2, y: 1 },
};

type Animation = {
  startFrame: number;
  endFrame: number;
};
type Animations = {
  [key: string]: Animation;
};

const anims: Animations = {
  idle: {
    startFrame: 0,
    endFrame: 4,
  },
  walk: {
    startFrame: 4,
    endFrame: 12,
  },
  attack: {
    startFrame: 12,
    endFrame: 20,
  },
  die: {
    startFrame: 20,
    endFrame: 28,
  },
  shoot: {
    startFrame: 28,
    endFrame: 32,
  },
};

export class Troop extends Phaser.GameObjects.Image {
  troopType: TroopType;

  destinationX: number;

  destinationY: number;

  motion: string;

  animation: Animation;

  direction: DirectionParameters;

  speed: number;

  f: number;

  hp: HealthBar;

  idleTimer: Phaser.Time.TimerEvent;

  frameTimer: Phaser.Time.TimerEvent;

  idleTimerConfig: Phaser.Types.Time.TimerEventConfig = {
    delay: Parameters.timePerTurn * 5,
    callback: this._switchToIdle,
    callbackScope: this,
  };

  constructor(
    scene: Phaser.Scene,
    troopType: TroopType,
    x: number,
    y: number,
    motion: string,
    direction?: Direction | undefined,
  ) {
    super(scene, x, y, 'skeleton');

    this.troopType = troopType;

    this.destinationX = x;
    this.destinationY = y;

    this.motion = motion;
    this.animation = anims[motion];
    this.direction = directions[direction ?? 'east'];
    this.speed = Parameters.timePerTurn / 10000;
    this.angle = 0;
    this.f = this.animation.startFrame;

    this.hp = new HealthBar(scene, x - 30, y - 30);

    this.depth = 50;

    this.frameTimer = scene.time.delayedCall(
      this.speed * 1000,
      this.changeFrame,
      [],
      this,
    );

    this.idleTimer = scene.time.addEvent(this.idleTimerConfig);
  }

  changeFrame(): void {
    this.f += 1;
    if (this.f === this.animation.endFrame) {
      if (this.motion === 'die') {
        return;
      }
      this.f = this.animation.startFrame;
    } else {
      this.frame = this.texture.get(this.direction.offset + this.f);
    }
    this.frameTimer = this.scene.time.delayedCall(
      this.speed * 1000,
      this.changeFrame,
      [],
      this,
    );
  }

  _setDirectionFromDelta(dx: number, dy: number): void {
    let angle = Math.atan2(dy, dx);
    angle = angle < 0 ? angle + Math.PI * 2 : angle;
    this.angle = angle;

    const fraction = angle / (Math.PI * 2);

    this.direction =
      directions[Object.keys(directions)[Math.floor(fraction * 8)] || 'north'];
  }

  _switchToIdle(): void {
    this.motion = 'idle';
    this.animation = anims[this.motion];
    this.f = this.animation.startFrame;
  }

  moveTo(x: number, y: number): void {
    this.idleTimer.reset(this.idleTimerConfig);
    if (this.destinationX === x && this.destinationY === y) {
      this.motion = 'idle';
      this.animation = anims[this.motion];
      this.f = this.animation.startFrame;
      return;
    }
    const prevMotion = this.motion;
    this.motion = 'walk';
    this.animation = anims[this.motion];
    if (prevMotion !== 'walk') {
      this.f = this.animation.startFrame;
    }
    this.scene.tweens.add({
      targets: this,
      x: { value: x, duration: Parameters.timePerTurn },
      y: { value: y, duration: Parameters.timePerTurn },
      onUpdate: () => {
        this.hp.setPosition(this.x - 30, this.y - 30);
      },
    });
    this.x = this.destinationX;
    this.y = this.destinationY;
    this.destinationX = x;
    this.destinationY = y;
    const dx = x - this.x;
    const dy = y - this.y;
    this._setDirectionFromDelta(dx, -dy);
  }

  attack(x: number, y: number): void {
    this.idleTimer.reset(this.idleTimerConfig);
    this.motion = 'attack';
    this.animation = anims[this.motion];
    this.f = this.animation.startFrame;
    this.x = this.destinationX;
    this.y = this.destinationY;
    this.hp.setPosition(this.x - 40, this.y - 50);
    const dx = x - this.x;
    const dy = y - this.y;
    this._setDirectionFromDelta(dx, -dy);
  }

  dead(): void {
    this.idleTimer.reset(this.idleTimerConfig);
    this.motion = 'die';
    this.animation = anims[this.motion];
    this.f = this.animation.startFrame;
  }

  setHp(hpValue: number): void {
    this.hp.setHp((hpValue / this.troopType.hp) * 100);
  }

  destroy(fromScene?: boolean): void {
    this.hp.destroy();
    this.frameTimer.destroy();
    this.idleTimer.destroy();
    super.destroy(fromScene);
  }
}
