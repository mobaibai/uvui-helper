import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'loading',
    description: '是否处于加载中',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'size',
    description: '开关尺寸，单位px',
    type: 'string / number',
    default: 25,
    value: '-'
  },
  {
    name: 'active-color',
    description: '打开时的背景色',
    type: 'string',
    default: '#2979ff',
    value: '-'
  },
  {
    name: 'inactive-color',
    description: '关闭时的背景色',
    type: 'string',
    default: '#ffffff',
    value: '-'
  },
  {
    name: 'v-model',
    description: '通过v-model双向绑定的值',
    type: 'string / number / boolean',
    default: false,
    value: '-'
  },
  {
    name: 'active-value',
    description: 'switch打开时的值',
    type: 'string / number / boolean',
    default: true,
    value: '-'
  },
  {
    name: 'inactive-value',
    description: 'switch关闭时的值',
    type: 'string / number / boolean',
    default: false,
    value: '-'
  },
  {
    name: 'async-change',
    description: '是否开启异步变更，开启后需要手动控制输入值',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'space',
    description: '圆点与外边框的距离',
    type: 'string / number',
    default: 0,
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '在switch打开或关闭时触发',
    parameter: 'value：打开时为activeColor值，关闭时为inactiveColor值'
  },
  {
    name: 'input',
    description: '在switch打开或关闭时触发（没开启异步）',
    parameter: 'value：打开时为activeColor值，关闭时为inactiveColor值'
  }
]

export const document: UDocument = { attributes, events }

export default document
