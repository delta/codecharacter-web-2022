import { events, MapDesignerEvents } from './events/EventEmitter';
import { Parameters } from './Parameters';

export class MapDesignerUtils {
  /**
   * Can be used to load map data when the map designer instance
   * is already available
   *
   * @param mapData 2D array of map data
   */
  static loadMap(mapData: Array<Array<number>>): void {
    events.emit(MapDesignerEvents.LOAD_MAP, mapData);
  }

  /**
   * Can be used to update the total coins available
   *
   * @param totalCoins Total coins available
   */
  static setTotalCoins(totalCoins: number): void {
    Parameters.totalCoins = totalCoins;
  }

  /**
   * Can be used to load map data when the map designer instance
   * is not available yet
   *
   * @param mapData 2D array of map data
   */
  static preloadMap(mapData: Array<Array<number>>): void {
    localStorage.setItem(
      Parameters.mapLocalStorageKey,
      JSON.stringify(mapData),
    );
  }
}
