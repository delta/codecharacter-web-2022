import * as vscode from 'vscode';
import * as fs from 'fs';
import path = require('path');
import { executor } from '../../executors/executor';
import rimraf = require('rimraf');

enum TreeItemType {
  file,
  folder,
}

export class SourceTreeItem extends vscode.TreeItem {
  children: SourceTreeItem[] = [];

  constructor(
    readonly itemType: TreeItemType,
    readonly itemPath: string,
    readonly language: string,
    readonly name?: string,
  ) {
    super(
      name
        ? vscode.Uri.file(path.join(itemPath, `${name}.${language}`))
        : vscode.Uri.file(itemPath),
      vscode.TreeItemCollapsibleState.None,
    );
    if (this.itemType === TreeItemType.folder) {
      this.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
      this.iconPath = vscode.ThemeIcon.Folder;
      this.contextValue = 'sourceFolder';

      fs.readdir(this.itemPath, (err, files) => {
        if (err) {
          vscode.window.showErrorMessage(
            `Error reading directory ${this.itemPath}`,
          );
          return;
        } else {
          files = files.filter(file =>
            fs.statSync(path.join(this.itemPath, file)).isDirectory(),
          );
          this.children = files.map(file => {
            const filePath = path.join(this.itemPath, file);
            return new SourceTreeItem(
              TreeItemType.file,
              filePath,
              this.language,
              file,
            );
          });
        }
      });
    } else {
      this.collapsibleState = vscode.TreeItemCollapsibleState.None;
      this.iconPath = new vscode.ThemeIcon('file');
      this.contextValue = 'sourceFile';
      this.command = {
        command: 'codecharacter-2022.openCodeFile',
        title: 'Open Code',
        arguments: [this.name, this.language],
      };
    }
  }
}

export class SourceCodeProvider
  implements vscode.TreeDataProvider<SourceTreeItem>
{
  panel: vscode.WebviewPanel | undefined;
  children: SourceTreeItem[] = [];

  constructor(private readonly context: vscode.ExtensionContext) {
    this._populateChildren(context);

    context.subscriptions.push(
      vscode.commands.registerCommand('codecharacter-2022.refreshCodes', () =>
        this.refresh(),
      ),
    );

    context.subscriptions.push(
      vscode.commands.registerCommand(
        'codecharacter-2022.openCodeFile',
        (name: string, language: string) => {
          const codeFilePath = path.join(
            context.globalStorageUri.fsPath,
            'data',
            'codes',
            language,
            name,
            `${name}.${language}`,
          );
          const codeFileUri = vscode.Uri.file(codeFilePath);
          vscode.workspace.openTextDocument(codeFileUri).then(doc => {
            vscode.window.showTextDocument(doc);
          });
        },
      ),
    );

    context.subscriptions.push(
      vscode.commands.registerCommand(
        'codecharacter-2022.addCodeFile',
        (folder: SourceTreeItem) => {
          vscode.window
            .showInputBox({
              prompt: 'Enter the name of the file (without any extension)',
              placeHolder: 'file',
            })
            .then((fileName?: string) => {
              if (!fileName || !/^[A-Za-z0-9_-]+$/.test(fileName)) {
                throw new Error('Invalid file name');
              }
              const folderPath = path.join(folder.itemPath, fileName);
              fs.mkdir(folderPath, err => {
                if (err) {
                  vscode.window.showErrorMessage(
                    `Error creating directory ${folderPath}`,
                  );
                  return;
                }
                const codeFilePath = path.join(
                  folderPath,
                  `${fileName}.${folder.language}`,
                );
                fs.writeFile(codeFilePath, '', err => {
                  if (err) {
                    vscode.window.showErrorMessage(
                      `Error writing file ${codeFilePath}`,
                    );
                    return;
                  } else {
                    vscode.commands.executeCommand(
                      'codecharacter-2022.refreshCodes',
                    );
                    vscode.window.showInformationMessage(
                      `Created file ${codeFilePath}`,
                    );
                  }
                });
              });
            });
        },
      ),
    );

    context.subscriptions.push(
      vscode.commands.registerCommand(
        'codecharacter-2022.deleteCodeFile',
        (codeFile: SourceTreeItem) => {
          const folderPath = codeFile.itemPath;
          rimraf(folderPath, err => {
            if (err) {
              vscode.window.showErrorMessage(
                `Error deleting directory ${folderPath}`,
              );
              return;
            }
            vscode.window.showInformationMessage(
              `Deleted code file ${path.basename(codeFile.itemPath)}`,
            );
            vscode.commands.executeCommand('codecharacter-2022.refreshCodes');
          });
        },
      ),
    );

    context.subscriptions.push(
      vscode.commands.registerCommand(
        'codecharacter-2022.runCode',
        async () => {
          if (!vscode.window.activeTextEditor) {
            return;
          }
          let { document } = vscode.window.activeTextEditor;
          const maps = fs.readdirSync(
            path.join(context.globalStorageUri.fsPath, 'data', 'maps'),
          );
          vscode.window.showQuickPick(maps).then(async map => {
            if (!map) {
              return;
            }
            const mapPath = path.join(
              context.globalStorageUri.fsPath,
              'data',
              'maps',
              map,
            );
            const mapData = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
            executor
              .execute(context, mapData, document.uri, document.languageId)
              .then(() => vscode.window.showInformationMessage('Code executed'))
              .catch(() =>
                vscode.window.showErrorMessage('Error executing code'),
              );
          });
        },
      ),
    );
  }

  private async _populateChildren(
    context: vscode.ExtensionContext,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const codesDirectoryPath = path.join(
        context.globalStorageUri.fsPath,
        'data',
        'codes',
      );
      for (const language of ['c', 'cpp', 'java', 'py']) {
        if (!fs.existsSync(path.join(codesDirectoryPath, language))) {
          fs.mkdirSync(path.join(codesDirectoryPath, language), {
            recursive: true,
          });
        }
      }
      fs.readdir(codesDirectoryPath, (err, languages) => {
        if (err) {
          vscode.window.showErrorMessage('Error reading code folders');
          reject();
        }
        this.children = languages.map(
          language =>
            new SourceTreeItem(
              TreeItemType.folder,
              path.join(codesDirectoryPath, language),
              language,
            ),
        );
        resolve();
      });
    });
  }

  private _onDidChangeTreeData: vscode.EventEmitter<
    SourceTreeItem | undefined
  > = new vscode.EventEmitter<SourceTreeItem | undefined>();

  readonly onDidChangeTreeData: vscode.Event<SourceTreeItem | undefined> =
    this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  getTreeItem(element: SourceTreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: SourceTreeItem): Thenable<SourceTreeItem[]> {
    return new Promise(async resolve => {
      await this._populateChildren(this.context);
      if (!element) {
        resolve(this.children);
      }
      resolve(element?.children ?? []);
    });
  }
}
