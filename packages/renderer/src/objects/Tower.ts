import TowerType from '../config/TowerType';
import { HealthBar } from './HealthBar';

export class Tower extends Phaser.GameObjects.Image {
  readonly towerType: TowerType;

  healthBar: HealthBar;

  constructor(
    scene: Phaser.Scene,
    towerType: TowerType,
    x: number,
    y: number,
    healthBar: HealthBar,
  ) {
    super(scene, x, y, `${towerType.name}-sprite`);

    this.towerType = towerType;
    this.healthBar = healthBar;
  }

  setHp(hpValue: number): void {
    this.healthBar.setHp((hpValue / this.towerType.hp) * 100);
  }
}
