import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export class MapDesignerPanel {
  panel: vscode.WebviewPanel | undefined;

  currentMapFilePath!: string;

  latestMapData!: Array<Array<number>>;

  context!: vscode.ExtensionContext;

  loadMap(mapFile: string, context: vscode.ExtensionContext) {
    this.context = context;
    this.currentMapFilePath = path.join(
      context.globalStorageUri.fsPath,
      'data',
      'maps',
      mapFile,
    );

    if (!this.panel) {
      this.panel = vscode.window.createWebviewPanel(
        'mapDesignerPanel',
        'Map Designer',
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
        },
      );

      const staticScriptPath = vscode.Uri.file(
        path.join(context.extensionPath, 'dist', 'map-designer-static.js'),
      );

      const assetsPath = vscode.Uri.file(
        path.join(context.extensionPath, 'assets'),
      );

      const staticScriptSrc = this.panel.webview.asWebviewUri(staticScriptPath);
      const assetsSrc = this.panel.webview.asWebviewUri(assetsPath);

      this.panel.webview.html = this._getMapDesignerWebView(
        staticScriptSrc,
        assetsSrc,
      );

      this.panel.onDidDispose(() => {
        this.panel = undefined;
      });

      this.panel.webview.onDidReceiveMessage(message => {
        switch (message.command) {
          case 'saveMap':
            fs.writeFile(
              this.currentMapFilePath,
              JSON.stringify(message.mapData),
              err => {
                if (err) {
                  vscode.window.showErrorMessage(err.message);
                } else {
                  vscode.commands.executeCommand(
                    'codecharacter-2022.refreshMaps',
                  );
                  vscode.window.showInformationMessage(
                    'Map saved successfully',
                  );
                }
              },
            );
            break;
          case 'ready':
            this.panel?.webview.postMessage({
              command: 'loadMap',
              mapData: this.latestMapData,
            });
            break;
          default:
            vscode.window.showInformationMessage('Message not recognized');
            break;
        }
      });
    } else {
      this.panel.reveal();
    }

    fs.readFile(this.currentMapFilePath, (err, data) => {
      if (err) {
        vscode.window.showErrorMessage(err.message);
      }
      if (data && this.panel) {
        try {
          this.latestMapData = JSON.parse(data.toString());
        } catch (e) {
          vscode.window.showErrorMessage('Map file is not valid JSON');
          return;
        }
        this.panel.title = `${mapFile} (Map)`;
        this.panel.iconPath = vscode.Uri.file(
          path.join(context.extensionPath, 'media', 'icon.svg'),
        );
        this.panel.webview.postMessage({
          command: 'loadMap',
          mapData: this.latestMapData,
        });
      }
    });
  }

  closePanelOnDelete(fileName: string) {
    if (this.panel) {
      if (
        this.currentMapFilePath ===
        path.join(
          this.context.globalStorageUri.fsPath,
          'data',
          'maps',
          fileName,
        )
      ) {
        this.panel.dispose();
      }
    }
  }

  _getMapDesignerWebView(staticScriptSrc: vscode.Uri, assetsSrc: vscode.Uri) {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Map Designer</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
  </head>
  <body>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: black;
      }

      canvas {
        margin: 0 !important;
        padding: 0 !important;
      }
    </style>
    <div id="root"></div>
    <script>
      const open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function (method, url, ...rest) {
        url = url.replace(/.*\\/assets/, "${assetsSrc}");
        return open.call(this, method, url, ...rest);
      };
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function (node) {
            node.querySelectorAll && node.querySelectorAll('img').forEach(function (img) {
              img.src = img.src.replace(/.*\\/assets/, "${assetsSrc}");
            });
          });
        });
      });
      var target = document.body;
      observer.observe(target, {attributes: true, subtree: true, childList: true});

      const vscode = acquireVsCodeApi();
    </script>
    <script src="${staticScriptSrc}"></script>
  </body>
  </html>`;
  }
}

export const mapDesignerPanel = new MapDesignerPanel();
