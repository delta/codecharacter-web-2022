import TowerType from '../config/TowerType';

export class Tower extends Phaser.GameObjects.Image {
  readonly towerType: TowerType;

  constructor(scene: Phaser.Scene, towerType: TowerType, x: number, y: number) {
    super(scene, x, y, `${towerType.name}-sprite`);

    this.towerType = towerType;
    this.depth = y;
  }
}
