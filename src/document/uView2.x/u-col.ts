import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'span',
    description: '栅格占据的列数，总12等分，可选值：1-12',
    type: 'string / number',
    value: '-',
    default: 0
  },
  {
    name: 'offset',
    description: '分栏左边偏移，计算方式与span相同',
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
    value: AttributeConstants.align,
    default: 'stretch'
  },
  {
    name: 'text-align',
    description: '文字水平对齐方式',
    type: 'string',
    value: AttributeConstants.hAlign,
    default: 'left'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: 'col被点击，会阻止事件冒泡到row',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
