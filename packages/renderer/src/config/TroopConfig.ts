import TroopType from './TroopType.js';

export default class TroopConfig {
  static readonly troops: Array<TroopType> = [
    new TroopType(10, 2),
    new TroopType(20, 4),
  ];
}
