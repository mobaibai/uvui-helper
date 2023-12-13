import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'gutter',
    description: '栅格间隔，左右各为此值的一半，单位任意',
    type: 'string / number',
    value: '-',
    default: 0
  },
  {
    name: 'justify',
    description: '水平排列方式(微信小程序暂不支持)',
    type: 'string',
    value: AttributeConstants.justify,
    default: 'start'
  },
  {
    name: 'align',
    description: '垂直排列方式',
    type: 'string',
    value: AttributeConstants.vAlign,
    default: 'center'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: 'row被点击',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
