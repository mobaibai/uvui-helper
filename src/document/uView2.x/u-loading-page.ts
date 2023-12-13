import { DocumentAttribute, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'loading-text',
    description: '提示内容',
    type: 'string / number',
    value: '-',
    default: '正在加载'
  },
  {
    name: 'image',
    description: '文字上方用于替换loading动画的图片',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'loading-mode',
    description: '加载动画的模式',
    type: 'string',
    value: 'circle / spinner / semicircle',
    default: 'circle'
  },
  {
    name: 'loading',
    description: '是否加载中',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'bg-color',
    description: '背景颜色',
    type: 'string',
    value: '-',
    default: '#ffffff'
  },
  {
    name: 'color',
    description: '文本颜色',
    type: 'string',
    value: '-',
    default: '#C8C8C8'
  },
  {
    name: 'font-size',
    description: '文字大小',
    type: 'string / number',
    value: '-',
    default: 19
  },
  {
    name: 'loading-color',
    description: '加载中图标的颜色',
    type: 'string',
    value: '-',
    default: '#C8C8C8'
  }
]

export const document: UDocument = { attributes }

export default document
