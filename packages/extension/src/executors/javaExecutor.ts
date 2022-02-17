import * as vscode from 'vscode';
import * as path from 'path';
import { spawn } from 'child_process';
import {
  getLogFromSimulatorLog,
  outputChannel,
  provideInitialInput,
} from './executor';

export class JavaCodeExecutor {
  async execute(
    mapData: Array<Array<number>>,
    uri: vscode.Uri,
    context: vscode.ExtensionContext,
  ): Promise<string> {
    const userExecutable = spawn('java', [uri.fsPath]);
    const simulatorExecutable = spawn(
      path.join(context.globalStorageUri.fsPath, 'simulator'),
    );
    return new Promise((resolve, reject) => {
      let simulatorLog = '';
      outputChannel?.show();
      userExecutable.stdout.on('data', data => {
        simulatorExecutable.stdin.write(data);
        outputChannel?.append(`>>> ${data.toString()}`);
      });
      simulatorExecutable.stdout.on('data', data => {
        userExecutable.stdin.write(data);
        outputChannel?.append(`<<< ${data.toString()}`);
      });

      userExecutable.stderr.on('data', data => {
        outputChannel?.append(`[E] ${data.toString()}`);
      });
      simulatorExecutable.stderr.on('data', data => {
        simulatorLog += data.toString();
        outputChannel?.append(`[E] ${data.toString()}`);
      });

      userExecutable.on('close', () => {
        simulatorExecutable.kill();
        setTimeout(() => resolve(getLogFromSimulatorLog(simulatorLog)), 1000);
      });
      simulatorExecutable.on('close', () => {
        userExecutable.kill();
        setTimeout(() => resolve(getLogFromSimulatorLog(simulatorLog)), 1000);
      });
      userExecutable.on('error', err => {
        reject(err);
      });
      simulatorExecutable.on('error', err => {
        reject(err);
      });

      provideInitialInput(
        mapData,
        userExecutable.stdin,
        simulatorExecutable.stdin,
      );
    });
  }
}
