import Phaser from 'phaser';

class RendererEvents {
  static readonly PLACE_TOWER = 'PLACE_TOWER';

  static readonly NEXT_TURN = 'NEXT_TURN';

  static readonly MOVE_TROOP = 'MOVE_ATTACKER';

  static readonly SPAWN_TROOP = 'SPAWN_ATTACKER';

  static readonly SHOOT_TROOP = 'SHOOT_TROOP';

  static readonly SHOOT_TOWER = 'SHOOT_TOWER';

  static readonly DEAD = 'DEAD';

  static readonly CHANGE_DESTRUCTION = 'CHANGE_DESTRUCTION';

  static readonly CHANGE_COINS = 'CHANGE_COINS';

  static readonly PAUSE = 'PAUSE';

  static readonly RESUME = 'RESUME';

  static readonly RESET = 'RESET';

  static readonly LOAD_LOG = 'LOAD_LOG';
}

const events = new Phaser.Events.EventEmitter();

export { events, RendererEvents };
