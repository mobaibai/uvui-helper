import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'text',
    description: '需要显示的提示文字',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'copy-text',
    description: '点击复制按钮时，复制的文本，为空则使用text值',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'size',
    description: '文本大小',
    type: 'string / number',
    default: 14,
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
    name: 'bg-color',
    description: '弹出提示框时，文本的背景色',
    type: 'string',
    default: 'transparent',
    value: '-'
  },
  {
    name: 'direction',
    description: '弹出提示的方向，top上方，bottom下方',
    type: 'string',
    default: 'top',
    value: 'top / bottom'
  },
  {
    name: 'z-index',
    description: '弹出提示的zIndex，nvue无效',
    type: 'string / number',
    default: 10071,
    value: '-'
  },
  {
    name: 'show-copy',
    description: '是否显示复制按钮',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'buttons',
    description: '扩展的按钮组',
    type: 'array',
    default: '-',
    value: '-'
  },
  {
    name: 'overlay',
    description: '是否显示透明遮罩以防止触摸穿透',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'show-toast',
    description: '是否显示复制成功或者失败的toast',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击触发事件',
    parameter: 'index，被点击按钮的索引'
  }
]

export const document: UDocument = { attributes, events }

export default document
