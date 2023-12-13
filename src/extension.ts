import { ExtensionContext } from 'vscode'
import * as vscode from 'vscode'

import { UViewHoverProvier } from './hover-tips/uview-hover-provider'
import { UViewCompletionItemProvider } from './completion/uview-completion-item-povider'

export function activate(context: ExtensionContext): void {
  // 注册 completion 提示
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        }
      ],
      new UViewCompletionItemProvider(),
      '',
      ' ',
      ':',
      '<',
      '"',
      "'",
      '/',
      '@',
      '(',
      '-'
    )
  )

  // 注册 hover 提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        }
      ],
      new UViewHoverProvier()
    )
  )

  console.log('extension "uview-helper" is activated!')
}

// this method is called when your extension is deactivated
export function deactivate() {
  console.error('extension "uview-helper" is deactivated!')
}

export default {
  activate,
  deactivate
}
