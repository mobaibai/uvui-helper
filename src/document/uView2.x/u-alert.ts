import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '显示的文字',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'type',
    description: '使用预设的颜色',
    type: 'string',
    default: 'warning',
    value: AttributeConstants.type
  },
  {
    name: 'description',
    description: '辅助性文字，颜色比title浅一点，字号也小一点，可选',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'closable',
    description: '关闭按钮（默认为叉号icon图标）',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'show-icon',
    description: '是否显示左边的辅助图标',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'effect',
    description: '多图时，图片缩放裁剪的模式',
    type: 'string',
    default: 'light',
    value: 'light /	dark'
  },
  {
    name: 'center',
    description: '文字是否居中',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'font-size',
    description: '字体大小',
    type: 'string / number',
    default: 14,
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击组件时触发',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
