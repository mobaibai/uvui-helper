import { DocumentAttribute, DocumentEvent, DocumentMethod, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'time',
    description: '倒计时时长，单位ms',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'format',
    description: '时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒',
    type: 'string',
    default: 'HH:mm:ss',
    value: '-'
  },
  {
    name: 'auto-start',
    description: '是否自动开始倒计时',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'millisecond',
    description: '是否展示毫秒倒计时',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'start',
    description: '开始倒计时',
    parameter: '—'
  },
  {
    name: 'pause',
    description: '暂停倒计时',
    parameter: '—'
  },
  {
    name: 'reset',
    description: '重置倒计时',
    parameter: '—'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '过程中，倒计时变化时触发',
    parameter: 'time: 剩余的时间'
  },
  {
    name: 'finish',
    description: '倒计时结束',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, methods, events }

export default document
