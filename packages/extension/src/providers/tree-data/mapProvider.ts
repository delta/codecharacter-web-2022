import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { mapDesignerPanel } from '../../panels/mapDesignerPanel';

export class CodeCharacterMap extends vscode.TreeItem {
  constructor(public readonly fileName: string) {
    super(fileName.split('.json')[0], vscode.TreeItemCollapsibleState.None);
    this.fileName = fileName;
  }

  iconPath = new vscode.ThemeIcon('globe');

  command = {
    command: 'codecharacter-2022.openMapFile',
    title: 'Open Map File',
    arguments: [this.fileName],
  };

  contextValue = 'map';
}

export class MapProvider implements vscode.TreeDataProvider<CodeCharacterMap> {
  panel: vscode.WebviewPanel | undefined;

  latestMapData: Array<Array<number>> | undefined;

  constructor(private readonly context: vscode.ExtensionContext) {
    context.subscriptions.push(
      vscode.commands.registerCommand('codecharacter-2022.refreshMaps', () =>
        this.refresh(),
      ),
    );
    context.subscriptions.push(
      vscode.commands.registerCommand(
        'codecharacter-2022.openMapFile',
        (mapFile: string) => {
          mapDesignerPanel.loadMap(mapFile, context);
        },
      ),
    );

    context.subscriptions.push(
      vscode.commands.registerCommand(
        'codecharacter-2022.deleteMapFile',
        (map: CodeCharacterMap) => {
          const mapPath = path.join(
            context.globalStorageUri.fsPath,
            'data',
            'maps',
            map.fileName,
          );
          fs.unlink(mapPath, err => {
            if (err) {
              vscode.window.showErrorMessage(err.message);
            } else {
              vscode.commands.executeCommand('codecharacter-2022.refreshMaps');
              mapDesignerPanel.closePanelOnDelete(map.fileName);
              vscode.window.showInformationMessage(
                `Map file ${map.fileName} deleted successfully`,
              );
            }
          });
        },
      ),
    );

    context.subscriptions.push(
      vscode.commands.registerCommand('codecharacter-2022.addMapFile', () => {
        vscode.window
          .showInputBox({
            prompt: 'Enter the name of the file',
            placeHolder: `map`,
          })
          .then((fileName?: string) => {
            if (!fileName || !/^[A-Za-z0-9_-]+$/.test(fileName)) {
              throw new Error('Invalid file name');
            }
            const mapFilePath = path.join(
              context.globalStorageUri.fsPath,
              'data',
              'maps',
              `${fileName}.json`,
            );
            let defaultMapData = [];
            for (let i = 0; i < 64; i++) {
              let row = [];
              for (let j = 0; j < 64; j++) {
                row.push(0);
              }
              defaultMapData.push(row);
            }
            fs.writeFile(mapFilePath, JSON.stringify(defaultMapData), err => {
              if (err) {
                vscode.window.showErrorMessage(err.message);
              } else {
                vscode.commands.executeCommand(
                  'codecharacter-2022.refreshMaps',
                );
                vscode.commands.executeCommand(
                  'codecharacter-2022.openMapFile',
                  `${fileName}.json`,
                );
                vscode.window.showInformationMessage(
                  'Map file created successfully',
                );
              }
            });
          });
      }),
    );
  }

  private _onDidChangeTreeData: vscode.EventEmitter<
    CodeCharacterMap | undefined
  > = new vscode.EventEmitter<CodeCharacterMap | undefined>();

  readonly onDidChangeTreeData: vscode.Event<CodeCharacterMap | undefined> =
    this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  getTreeItem(element: CodeCharacterMap): vscode.TreeItem {
    return element;
  }

  getChildren(element?: CodeCharacterMap): Thenable<CodeCharacterMap[]> {
    const mapsFolderPath = path.join(
      this.context.globalStorageUri.fsPath,
      'data',
      'maps',
    );
    if (!fs.existsSync(mapsFolderPath)) {
      fs.mkdirSync(mapsFolderPath, { recursive: true });
    }
    return new Promise((resolve, reject) => {
      fs.readdir(mapsFolderPath, (err, files) => {
        if (err) {
          reject(err);
        } else {
          const mapFiles = files.filter(file => file.endsWith('.json'));
          resolve(mapFiles.map(file => new CodeCharacterMap(file)));
        }
      });
    });
  }
}
