import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'show',
    description: '是否展示组件',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'mode',
    description: '使用的动画模式',
    type: 'string',
    default: 'fade',
    value: 'fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in / zoom-out'
  },
  {
    name: 'duration',
    description: '动画的执行时间，单位ms',
    type: 'string / number',
    default: 300,
    value: '-'
  },
  {
    name: 'timing-function',
    description: '使用的动画过渡函数，见上方说明',
    type: 'string',
    default: 'ease-out',
    value: '-'
  },
  {
    name: 'custom-style',
    description: '自定义样式',
    type: 'object',
    default: '-',
    value: '-'
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
    name: 'before-enter',
    description: '进入前触发',
    parameter: '-'
  },
  {
    name: 'enter',
    description: '进入中触发',
    parameter: '-'
  },
  {
    name: 'after-enter',
    description: '进入后触发',
    parameter: '-'
  },
  {
    name: 'before-leave',
    description: '离开前触发',
    parameter: '-'
  },
  {
    name: 'leave',
    description: '离开中触发',
    parameter: '-'
  },
  {
    name: 'after-leave',
    description: '离开后触发',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
