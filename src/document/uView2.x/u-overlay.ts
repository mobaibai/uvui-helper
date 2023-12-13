import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'show',
    description: '是否显示遮罩',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'z-index',
    description: 'zIndex层级',
    type: 'string / number',
    default: 10070,
    value: '-'
  },
  {
    name: 'duration',
    description: '动画时长，单位毫秒',
    type: 'string / number',
    default: 300,
    value: '-'
  },
  {
    name: 'opacity',
    description: '不透明度值，当做rgba的第四个参数',
    type: 'string / number',
    default: 0.5,
    value: '-'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '默认插槽，用于在遮罩层上方嵌入内容'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击遮罩发送此事件',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
