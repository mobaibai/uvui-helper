import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'name',
    description: '宫格的name',
    type: 'string / number',
    default: 3,
    value: '-'
  },
  {
    name: 'bgColor',
    description: '宫格的背景颜色',
    type: 'string',
    default: 'transparent',
    value: '-'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '默认内容插槽'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击事件',
    parameter: 'name'
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
