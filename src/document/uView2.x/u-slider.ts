import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '双向绑定滑块选择值',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'block-size',
    description: '滑块的大小',
    type: 'string / number',
    default: 18,
    value: '12 - 28'
  },
  {
    name: 'min',
    description: '可选的最小值(0-100之间)',
    type: 'string / number',
    default: 1,
    value: '-'
  },
  {
    name: 'max',
    description: '可选的最大值(0-100之间)',
    type: 'string / number',
    default: 100,
    value: '-'
  },
  {
    name: 'step',
    description: '选择的步长',
    type: 'string / number',
    default: 1,
    value: '-'
  },
  {
    name: 'active-color',
    description: '进度条的激活部分颜色',
    type: 'string',
    default: '#2979ff',
    value: '-'
  },
  {
    name: 'inactive-color',
    description: '进度条的背景颜色',
    type: 'string',
    default: '#c0c4cc',
    value: '-'
  },
  {
    name: 'block-color',
    description: '滑块背景颜色',
    type: 'string',
    default: '#ffffff',
    value: '-'
  },
  {
    name: 'show-value',
    description: '是否显示当前value',
    type: 'boolean',
    default: false,
    value: 'true'
  },
  {
    name: 'block-style',
    description: '滑块按钮自定义样式，对象形式',
    type: 'object / string',
    default: '-',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'input',
    description: '更新v-model的（拖动过程中）',
    parameter: 'value：当前值'
  },
  {
    name: 'changing',
    description: '触发事件（拖动过程中）',
    parameter: 'value：当前值'
  },
  {
    name: 'change',
    description: '触发事件',
    parameter: 'value：当前值'
  }
]

export const document: UDocument = { attributes, events }

export default document
