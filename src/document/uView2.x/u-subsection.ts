import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'list',
    description: '选项的数组',
    type: 'array',
    default: '-',
    value: '-'
  },
  {
    name: 'current',
    description: '初始化时默认选中的选项索引值',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'active-color',
    description: '激活时的颜色',
    type: 'string',
    default: '#3c9cff',
    value: '-'
  },
  {
    name: 'inactive-color',
    description: '未激活时的颜色',
    type: 'string',
    default: '#303133',
    value: '-'
  },
  {
    name: 'mode',
    description: '模式选择',
    type: 'string',
    default: 'button',
    value: 'subsection'
  },
  {
    name: 'font-size',
    description: '字体大小，单位px',
    type: 'string / number',
    default: 12,
    value: '-'
  },
  {
    name: 'bold',
    description: '激活选项的字体是否加粗',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'bg-color',
    description: '组件背景颜色，mode为button时有效',
    type: 'string',
    default: '#eeeeef',
    value: '-'
  },
  {
    name: 'key-name',
    description: '从list元素对象中读取的键名',
    type: 'string',
    default: 'name',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '分段器选项发生改变时触发',
    parameter: 'index：选项的index索引值，从0开始'
  }
]

export const document: UDocument = { attributes, events }

export default document
