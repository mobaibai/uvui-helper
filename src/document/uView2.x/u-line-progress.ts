import { DocumentAttribute, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'active-color',
    description: '进度条激活部分的颜色',
    type: 'string',
    default: '#19be6b',
    value: '-'
  },
  {
    name: 'inactive-color',
    description: '进度条的底色，默认为灰色',
    type: 'string',
    default: '#ececec',
    value: '-'
  },
  {
    name: 'percentage',
    description: '进度百分比，数值',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'show-text',
    description: '是否在进度条内部显示百分比的值',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'height',
    description: '进度条的高度，默认单位px',
    type: 'string / number',
    default: 12,
    value: '-'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '传入自定义的显示内容，将会覆盖默认显示的百分比值'
  }
]

export const document: UDocument = { attributes, slots }

export default document
