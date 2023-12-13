import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'col',
    description: '宫格的列数',
    type: 'string / number',
    default: 3,
    value: '-'
  },
  {
    name: 'border',
    description: '是否显示宫格的边框',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'align',
    description: '宫格的对齐方式，用于控制只有一两个宫格时的对齐场景',
    type: 'string',
    default: 'left',
    value: AttributeConstants.hAlign
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
