import Phaser from 'phaser';
import TowerType from '../config/TowerType.js';
import { HealthBar } from './HealthBar.js';

export class Tower {
  readonly towerType: TowerType;

  readonly tile: Phaser.Tilemaps.Tile;

  healthBar: HealthBar;

  constructor(
    towerType: TowerType,
    tile: Phaser.Tilemaps.Tile,
    healthBar: HealthBar,
  ) {
    this.towerType = towerType;
    this.tile = tile;
    this.healthBar = healthBar;
  }
}
