import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'dashed',
    description: '是否虚线',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'hairline',
    description: '是否细线',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'dot',
    description: '是否以点替代文字，优先于text字段起作用',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'text-position',
    description: '内容文本的位置',
    type: 'string',
    default: 'center',
    value: AttributeConstants.hAlign
  },
  {
    name: 'text',
    description: '文本内容',
    type: 'String_Number',
    default: '-',
    value: '-'
  },
  {
    name: 'text-size',
    description: '文本大小',
    type: 'String_Number',
    default: 14,
    value: '-'
  },
  {
    name: 'text-color',
    description: '文本颜色',
    type: 'string',
    default: '#909399',
    value: '-'
  },
  {
    name: 'line-color',
    description: '线条颜色',
    type: 'string',
    default: '#dcdfe6',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击事件',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
