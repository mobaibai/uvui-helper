import { DocumentEvent, DocumentMethod, DocumentSlot, UDocument } from '@/document'

export const methods: DocumentMethod[] = [
  {
    name: 'show',
    description: '显示并加载配置',
    parameter: '{}'
  },
  {
    name: 'primary / success / warning /error',
    description: '显示当前主题消息提示',
    parameter: '-'
  },
  {
    name: 'close',
    description: '关闭消息提示',
    parameter: '-'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'date',
    description: '单元格代表的日期'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'icon',
    description: '通知图标',
    parameter: '-'
  }
]

export const document: UDocument = { methods, slots, events }

export default document
