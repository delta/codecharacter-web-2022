import * as vscode from 'vscode';
import * as path from 'path';

class RendererPanel {
  panel: vscode.WebviewPanel | undefined;

  renderLog(log: string, context: vscode.ExtensionContext) {
    let logLocal: string = log;
    if (!this.panel) {
      this.panel = vscode.window.createWebviewPanel(
        'rendererPanel',
        'Renderer',
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
        },
      );

      const staticScriptPath = vscode.Uri.file(
        path.join(context.extensionPath, 'dist', 'renderer-static.js'),
      );

      const assetsPath = vscode.Uri.file(
        path.join(context.extensionPath, 'assets'),
      );

      const staticScriptSrc = this.panel.webview.asWebviewUri(staticScriptPath);
      const assetsSrc = this.panel.webview.asWebviewUri(assetsPath);

      this.panel.webview.html = this._getRendererWebView(
        staticScriptSrc,
        assetsSrc,
      );

      this.panel.iconPath = vscode.Uri.file(
        path.join(context.extensionPath, 'media', 'icon.svg'),
      );

      this.panel.onDidDispose(() => {
        this.panel = undefined;
      });
    } else {
      this.panel.reveal(vscode.ViewColumn.Beside);
    }

    this.panel?.webview.postMessage({
      command: 'loadLog',
      log: logLocal,
    });
    this.panel.webview.onDidReceiveMessage(message => {
      switch (message.command) {
        case 'ready':
          setTimeout(() => {
            this.panel?.webview.postMessage({
              command: 'loadLog',
              log: logLocal,
            });
            logLocal = '';
          }, 3000);
          break;
        default:
          break;
      }
    });
  }

  private _getRendererWebView(
    staticScriptSrc: vscode.Uri,
    assetsSrc: vscode.Uri,
  ) {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Renderer</title>
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

export const rendererPanel = new RendererPanel();
