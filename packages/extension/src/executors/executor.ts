import * as vscode from 'vscode';
import { Writable } from 'stream';
import { rendererPanel } from '../panels/rendererPanel';
import { CCodeExecutor } from './cExecutor';
import { CppCodeExecutor } from './cppExecutor';
import { PythonCodeExecutor } from './pythonExecutor';
import { JavaCodeExecutor } from './javaExecutor';

export const outputChannel = vscode.window.createOutputChannel(
  'Code Character Executor',
);

export const provideInitialInput = (
  mapData: Array<Array<number>>,
  userStdin: Writable,
  simulatorStdin: Writable,
) => {
  for (let writeable of [userStdin, simulatorStdin]) {
    writeable.write('100 1000\n');
    writeable.write('2\n');
    writeable.write('10 3 3 3 1\n');
    writeable.write('10 3 3 3 1\n');
    writeable.write('2\n');
    writeable.write('10 4 5 1 1\n');
    writeable.write('10 6 5 1 1\n');
    writeable.write('64 64 ');
    for (let y = 0; y < mapData.length; y++) {
      for (let x = 0; x < mapData[y].length; x++) {
        writeable.write(`${mapData[y][x]} `);
      }
    }
    writeable.write('\n');
  }
};

export const getLogFromSimulatorLog = (log: string): string => {
  const indexOfInit = log.indexOf('INIT');
  const indexOfEnd = log.indexOf('END');
  return log.substring(indexOfInit, indexOfEnd + 3);
};

class Executor {
  cExecutor: CCodeExecutor;
  cppExecutor: CppCodeExecutor;
  javaExecutor: JavaCodeExecutor;
  pythonExecutor: PythonCodeExecutor;

  constructor() {
    this.cExecutor = new CCodeExecutor();
    this.cppExecutor = new CppCodeExecutor();
    this.javaExecutor = new JavaCodeExecutor();
    this.pythonExecutor = new PythonCodeExecutor();
  }

  async execute(
    context: vscode.ExtensionContext,
    mapData: Array<Array<number>>,
    uri: vscode.Uri,
    languageId: string,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      switch (languageId) {
        case 'c':
          this.cExecutor
            .execute(mapData, uri)
            .then(log => {
              rendererPanel.renderLog(log, context);
              vscode.window.showInformationMessage('Execution succeeded');
              resolve();
            })
            .catch(err => {
              reject(err);
              vscode.window.showErrorMessage(`Execution failed: ${err}`);
            });
          break;
        case 'cpp':
          this.cppExecutor
            .execute(mapData, uri)
            .then(log => {
              rendererPanel.renderLog(log, context);
              vscode.window.showInformationMessage('Execution succeeded');
              resolve();
            })
            .catch(err => {
              reject(err);
            });
          break;
        case 'java':
          this.javaExecutor
            .execute(mapData, uri)
            .then(log => {
              rendererPanel.renderLog(log, context);
              vscode.window.showInformationMessage('Execution succeeded');
              resolve();
            })
            .catch(err => {
              reject(err);
            });
          break;
        case 'python':
          this.pythonExecutor
            .execute(mapData, uri)
            .then(log => {
              rendererPanel.renderLog(log, context);
              vscode.window.showInformationMessage('Execution succeeded');
              resolve();
            })
            .catch(err => {
              reject(err);
            });
          break;
        default:
          reject('Unsupported language');
      }
    });
  }
}

export const executor = new Executor();
