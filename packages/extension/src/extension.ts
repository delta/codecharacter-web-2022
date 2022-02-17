import { MapProvider } from './providers/tree-data/mapProvider';
import { SourceCodeProvider } from './providers/tree-data/sourceCodeProvider';
import * as path from 'path';
import * as fs from 'fs';
import * as vscode from 'vscode';
import fetch from 'node-fetch';

export function activate(context: vscode.ExtensionContext) {
  console.log('CodeCharacter 2022 extension is now active');

  fetch(
    'https://api.github.com/repos/delta/codecharacter-simulator-2022/releases/latest',
  )
    .then(res => res.json())
    .then(async res => {
      const createdAt = new Date(res.created_at);
      const existingSimulatorReleaseTimestamp = context.globalState.get<Date>(
        'simulatorReleaseTimestamp',
      );
      if (
        existingSimulatorReleaseTimestamp === undefined ||
        existingSimulatorReleaseTimestamp < createdAt ||
        fs.existsSync(
          path.join(context.globalStorageUri.fsPath, 'simulator'),
        ) === false
      ) {
        vscode.window.showInformationMessage(
          `CodeCharacter 2022 simulator is out of date. Updating to version ${res.tag_name}...`,
        );
        const simulatorBinary = await fetch(res.assets[0].browser_download_url);
        const fileStream = fs.createWriteStream(
          path.join(context.globalStorageUri.fsPath, 'simulator'),
        );
        await new Promise((resolve, reject) => {
          simulatorBinary?.body?.pipe(fileStream);
          simulatorBinary?.body?.on('error', reject);
          fileStream.on('finish', resolve);
        });
        fs.chmodSync(
          path.join(context.globalStorageUri.fsPath, 'simulator'),
          '755',
        );
        context.globalState.update('simulatorReleaseTimestamp', createdAt);
        vscode.window.showInformationMessage(
          `Simulator updated to version ${res.tag_name}`,
        );
      } else {
        vscode.window.showInformationMessage('Simulator binary is up to date');
      }
    });
  vscode.commands.executeCommand('codecharacter-2022-codes.focus');

  const mapProvider = new MapProvider(context);
  vscode.window.createTreeView('codecharacter-2022-maps', {
    treeDataProvider: mapProvider,
  });

  const sourceCodeProvider = new SourceCodeProvider(context);
  vscode.window.createTreeView('codecharacter-2022-codes', {
    treeDataProvider: sourceCodeProvider,
  });
}

export function deactivate() {}
