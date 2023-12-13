import { DocumentAttribute, DocumentEvent, DocumentMethod, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'start-val',
    description: '开始值',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'end-val',
    description: '结束值',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'duration',
    description: '滚动过程所需的时间，单位ms',
    type: 'string / number',
    default: 2000,
    value: '-'
  },
  {
    name: 'autoplay',
    description: '是否自动开始滚动',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'decimals',
    description: '要显示的小数位数，见上方说明',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'use-easing',
    description: '滚动结束时，是否缓动结尾，见上方说明',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'decimal',
    description: '十进制分割',
    type: 'string',
    default: '.',
    value: '-'
  },
  {
    name: 'color',
    description: '字体颜色',
    type: 'string',
    default: '#606266',
    value: '-'
  },
  {
    name: 'font-size',
    description: '字体大小，单位px',
    type: 'string / number',
    default: 22,
    value: '-'
  },
  {
    name: 'bold',
    description: '字体是否加粗',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'separator',
    description: '千位分隔符，见上方说明',
    type: 'string',
    default: '-',
    value: '-'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'start',
    description: 'autoplay为false时，通过此方法启动滚动',
    parameter: '—'
  },
  {
    name: 'reStart',
    description: '暂停后重新开始滚动(从暂停前的值开始滚动)',
    parameter: '—'
  },
  {
    name: 'paused',
    description: '暂停滚动',
    parameter: '—'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'end',
    description: '数值滚动到目标值时触发',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, methods, events }

export default document
