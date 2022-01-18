import { events, RendererEvents } from './events/EventEmitter';

export class RendererUtils {
  static loadLog(log: string): void {
    events.emit(RendererEvents.LOAD_LOG, log);
  }
}
