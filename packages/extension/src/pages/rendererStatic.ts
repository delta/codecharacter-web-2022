import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { RendererComponent, RendererUtils } from '@codecharacter-2022/renderer';

type VSCode = {
  postMessage(message: any): void;
  getState(): any;
  setState(state: any): void;
};

declare var vscode: VSCode;

window.addEventListener('message', event => {
  const message = event.data;
  switch (message.command) {
    case 'loadLog':
      const log = message.log;
      RendererUtils.loadLog(log);
      break;
    default:
      break;
  }
});

ReactDOM.render(
  React.createElement(RendererComponent),
  document.getElementById('root'),
);

vscode.postMessage({
  command: 'ready',
});
