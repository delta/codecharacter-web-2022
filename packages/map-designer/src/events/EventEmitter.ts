import Phaser from 'phaser';

class MapDesignerEvents {
  static readonly TOWER_SELECTED = 'TOWER_SELECTED';

  static readonly ERASER_SELECTED = 'ERASER_SELECTED';

  static readonly MOVE_SELECTED = 'MOVE_SELECTED';

  static readonly COINS_CHANGED = 'COINS_CHANGED';

  static readonly LOAD_MAP = 'LOAD_MAP';

  static readonly MAP_DATA_CHANGED = 'MAP_DATA_CHANGED';

  static readonly CLEAR_MAP = 'CLEAR_MAP';
}

const events = new Phaser.Events.EventEmitter();

export { events, MapDesignerEvents };
