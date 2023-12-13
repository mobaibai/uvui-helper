import { DocumentAttribute, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'icon',
    description: '内置图标名称，或图片路径，建议绝对路径',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'text',
    description: '文字提示',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'text-color',
    description: '文字颜色',
    type: 'string',
    default: '#c0c4cc',
    value: '-'
  },
  {
    name: 'text-size',
    description: '文字大小',
    type: 'string / number',
    default: 14,
    value: '-'
  },
  {
    name: 'icon-color',
    description: '图标的颜色',
    type: 'string',
    default: '#c0c4cc',
    value: '-'
  },
  {
    name: 'icon-size',
    description: '图标的大小',
    type: 'string / number',
    default: 90,
    value: '-'
  },
  {
    name: 'mode',
    description: '内置模式，[模式说明](https://www.uviewui.com/components/empty.html)',
    type: 'string',
    default: 'data',
    value: 'car / page / search / address / wifi / order / coupon / favor / permission / history / news / message / list / data'
  },
  {
    name: 'width',
    description: '图标的宽度，单位px',
    type: 'string / number',
    default: 160,
    value: '-'
  },
  {
    name: 'height',
    description: '图标的高度，单位px',
    type: 'string / number',
    default: '160',
    value: '-'
  },
  {
    name: 'show',
    description: '是否显示组件',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'margin-top',
    description: '组件到上一个元素的间距，单位px',
    type: 'string / number',
    default: 0,
    value: '-'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '给组件底部传入slot内容'
  }
]

export const document: UDocument = { attributes, slots }

export default document
