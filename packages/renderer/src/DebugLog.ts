export class DebugLog {
  static log = '';
  static updateLogCallback = (newLog: string): void => {
    console.log(newLog);
  };
}
