import TroopType from './TroopType.js';

export default class TroopConfig {
  static readonly troops: Array<TroopType> = [
    new TroopType(10, 3),
    new TroopType(10, 3),
  ];
}
