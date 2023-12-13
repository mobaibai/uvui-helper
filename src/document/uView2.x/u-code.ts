import { DocumentAttribute, DocumentEvent, DocumentMethod, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'seconds',
    description: '倒计时所需的秒数',
    type: 'number / string',
    default: 60,
    value: '-'
  },
  {
    name: 'startText',
    description: '开始前的提示语，见上方说明',
    type: 'string',
    default: '获取验证码',
    value: '-'
  },
  {
    name: 'changeText',
    description: '倒计时期间的提示语，必须带有字母"x"，见上方说明',
    type: 'string',
    default: 'X秒重新获取',
    value: '-'
  },
  {
    name: 'endText',
    description: '倒计结束的提示语，见上方说明',
    type: 'string',
    default: '重新获取',
    value: '-'
  },
  {
    name: 'keepRunning',
    description: '是否在H5刷新或各端返回再进入时继续倒计时',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'uniqueKey',
    description: '多个组件之间继续倒计时的区分key，见上方说明',
    type: 'string',
    default: '-',
    value: '-'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'start',
    description: '开始倒计时',
    parameter: '—'
  },
  {
    name: 'reset',
    description: '结束当前正在进行中的倒计时，设置组件为可以重新获取验证码的状态',
    parameter: '—'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '倒计时期间，每秒触发一次',
    parameter: 'text: 当前剩余多少秒的状态，见上方说明'
  },
  {
    name: 'start',
    description: '开始倒计时触发',
    parameter: '-'
  },
  {
    name: 'end',
    description: '结束倒计时触发',
    parameter: '-'
  },
  {
    name: 'change',
    description: '倒计时期间，每秒触发一次',
    parameter: '-'
  },
  {
    name: 'change',
    description: '倒计时期间，每秒触发一次',
    parameter: '-'
  },
  {
    name: 'change',
    description: '倒计时期间，每秒触发一次',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, methods, events }

export default document
