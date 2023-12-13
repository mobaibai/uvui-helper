import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description: '主题类型',
    type: 'string',
    value: AttributeConstants.type,
    default: 'primary'
  },
  {
    name: 'disabled',
    description: '不可用',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'size',
    description: '标签大小',
    type: 'string',
    value: 'large / medium / mini',
    default: 'medium'
  },
  {
    name: 'shape',
    description: '标签形状',
    type: 'string',
    value: AttributeConstants.shape,
    default: 'square'
  },
  {
    name: 'text',
    description: '标签的文字内容',
    type: 'string / number',
    value: '-',
    default: '-'
  },
  {
    name: 'bg-color',
    description: '背景颜色，默认为空字符串，即不处理',
    type: 'string',
    value: '-',
    default: '#C6C7CB'
  },
  {
    name: 'color',
    description: '标签字体颜色，默认为空字符串，即不处理',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'border-color',
    description: '标签的边框颜色',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'close-color',
    description: '关闭按钮图标的颜色',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'name',
    description: '点击时返回的索引值，用于区分例遍的数组哪个元素被点击了',
    type: 'string / number',
    value: '-',
    default: '-'
  },
  {
    name: 'plain-fill',
    description: '镂空时是否填充背景色',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'plain',
    description: '是否镂空',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'closable',
    description: '是否可关闭，设置为true，文字右边会出现一个关闭图标',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'show',
    description: '标签显示与否',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'icon',
    description: '内置图标，或绝对路径的图片',
    type: 'string',
    value: '-',
    default: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击标签触发',
    parameter: 'index: 传递的index参数值'
  },
  {
    name: 'close',
    description: 'closable为true时，点击标签关闭按钮触发',
    parameter: 'index: 传递的index参数值'
  }
]

export const document: UDocument = { attributes, events }

export default document
