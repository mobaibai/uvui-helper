import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'tips',
    description: '没有网络时的提示语',
    type: 'string',
    default: '哎呀，网络信号丢失',
    value: '-'
  },
  {
    name: 'z-index',
    description: '组件的zIndex值',
    type: 'string / number',
    default: 10080,
    value: '-'
  },
  {
    name: 'image',
    description: '无网络的图片提示，可用的src地址或base64图片',
    type: 'string',
    default: '-',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'retry',
    description: '用户点击页面的"重试"按钮时触发',
    parameter: '-'
  },
  {
    name: 'connected',
    description: '"重试"后，有网络触发',
    parameter: '-'
  },
  {
    name: 'disconnected',
    description: '"重试"后，无网络触发',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
