import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'auto-close',
    description: '是否自动关闭其他swipe按钮组',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '内容'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击组件时触发	',
    parameter: 'index'
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
