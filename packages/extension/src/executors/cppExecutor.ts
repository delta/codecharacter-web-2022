import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { spawn, spawnSync } from 'child_process';
import {
  getLogFromSimulatorLog,
  outputChannel,
  provideInitialInput,
} from './executor';

export class CppCodeExecutor {
  async execute(
    mapData: Array<Array<number>>,
    uri: vscode.Uri,
    context: vscode.ExtensionContext,
  ): Promise<string> {
    const executablePath = this._compile(uri);
    const userExecutable = spawn(executablePath);
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

  private _compile(uri: vscode.Uri): string {
    const tmpdir = fs.mkdtempSync(path.join(os.tmpdir(), 'cc_'));
    const executablePath = path.join(tmpdir, 'main');
    const child = spawnSync('g++', ['-o', executablePath, uri.fsPath]);
    outputChannel?.clear();
    outputChannel?.append(child.stdout.toString());
    outputChannel?.append(child.stderr.toString());
    if (child.status !== 0) {
      throw new Error('Compilation failed');
    } else {
      vscode.window.showInformationMessage('Compilation succeeded');
      return executablePath;
    }
  }
}
