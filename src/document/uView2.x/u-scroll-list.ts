import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'indicator-width',
    description: '指示器的整体宽度',
    type: 'string / number',
    default: 50,
    value: '-'
  },
  {
    name: 'indicator-bar-width',
    description: '滑块的宽度',
    type: 'string / number',
    default: 20,
    value: '-'
  },
  {
    name: 'indicator',
    description: '是否显示面板指示器',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'indicator-color',
    description: '指示器非激活颜色',
    type: 'string',
    default: '#f2f2f2',
    value: '-'
  },
  {
    name: 'indicator-active-color',
    description: '指示器滑块颜色',
    type: 'string',
    default: '#3c9cff',
    value: '-'
  },
  {
    name: 'indicator-style',
    description: '指示器样式，可通过bottom，left，right进行定位',
    type: 'string / object',
    default: '-',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'left',
    description: '滑动到左边时触发',
    parameter: '-'
  },
  {
    name: 'right',
    description: '滑动到右边时触发',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
