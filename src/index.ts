/**
 * 扩展语言选项枚举
 */
export enum ExtensionVersion {
  uView2 = 'uView2',
  uView1 = 'en-US'
}

export interface ExtensionConfigutation {
  version: ExtensionVersion
}
