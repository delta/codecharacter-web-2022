import { MapProvider } from './providers/tree-data/mapProvider';
import { SourceCodeProvider } from './providers/tree-data/sourceCodeProvider';
import * as path from 'path';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('CodeCharacter 2022 extension is now active');

  // vscode.commands.executeCommand(
  //   'vscode.openFolder',
  //   vscode.Uri.file(path.join(context.globalStorageUri.fsPath, 'data')),
  //   false,
  // );
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
