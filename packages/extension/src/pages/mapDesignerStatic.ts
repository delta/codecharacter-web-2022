import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  MapDesignerComponent,
  MapDesignerUtils,
} from '@codecharacter-2022/map-designer';

type VSCode = {
  postMessage(message: any): void;
  getState(): any;
  setState(state: any): void;
};

declare var vscode: VSCode;

const saveMapCallback = (mapData: Array<Array<number>>) => {
  vscode.postMessage({
    command: 'saveMap',
    mapData: mapData,
  });
};

window.addEventListener('message', event => {
  const message = event.data;
  switch (message.command) {
    case 'loadMap':
      const mapData = message.mapData;
      MapDesignerUtils.preloadMap(mapData);
      MapDesignerUtils.loadMap(mapData);
      break;
    default:
      break;
  }
});

ReactDOM.render(
  React.createElement(MapDesignerComponent, { saveMapCallback }),
  document.getElementById('root'),
);

vscode.postMessage({
  command: 'ready',
});
