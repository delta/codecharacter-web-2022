import { DebugLog } from './DebugLog';
import { events, RendererEvents } from './events/EventEmitter';

export class RendererUtils {
  static loadLog(log: string): void {
    events.emit(RendererEvents.LOAD_LOG, log);
    events.emit(RendererEvents.RESET_UI);
  }

  static setUpdateLogCallback(callback: (newLog: string) => void): void {
    DebugLog.updateLogCallback = callback;
  }

  static debugLog = DebugLog.log;
}
