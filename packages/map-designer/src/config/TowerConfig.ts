import Tower from './Tower.js';

export default class TowerConfig {
  // TODO: Fetch from network
  static readonly towers = [
    new Tower(2, 'tower1', 'tower_round.png', 'tower_round_thumbnail.png', 100),
    new Tower(
      3,
      'tower2',
      'tower_square.png',
      'tower_square_thumbnail.png',
      200,
    ),
  ];
}
