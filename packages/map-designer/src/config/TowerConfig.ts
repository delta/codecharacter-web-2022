import TowerType from './TowerType.js';

export default class TowerConfig {
  // TODO: Fetch from network
  static readonly towers = [
    new TowerType(
      2,
      'tower1',
      'tower_round.png',
      'tower_round_thumbnail.png',
      100,
    ),
    new TowerType(
      3,
      'tower2',
      'tower_square.png',
      'tower_square_thumbnail.png',
      200,
    ),
  ];
}
