import { DocumentAttribute, DocumentEvent, DocumentMethod, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'show-height',
    description: '内容超出此高度才会显示展开全文按钮，单位rpx',
    type: 'string / number',
    default: 400,
    value: '-'
  },
  {
    name: 'toggle',
    description: '展开后是否显示收起按钮',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'close-text',
    description: '关闭时的提示文字',
    type: 'string',
    default: '展开阅读全文',
    value: '-'
  },
  {
    name: 'open-text',
    description: '展开时的提示文字',
    type: 'string',
    default: '收起',
    value: '-'
  },
  {
    name: 'color',
    description: '提示文字的颜色',
    type: 'string',
    default: '#2979ff',
    value: '-'
  },
  {
    name: 'font-size',
    description: '提示文字的大小，默认单位px',
    type: 'string / number',
    default: 14,
    value: '-'
  },
  {
    name: 'shadow-style',
    description: '对阴影的自定义处理，对象形式见上方说明',
    type: 'object',
    default: '-',
    value: '-'
  },
  {
    name: 'text-indent',
    description: '段落首行缩进的字符个数',
    type: 'string',
    default: '2em',
    value: '-'
  },
  {
    name: 'name',
    description: '用于在open和close事件中当作回调参数返回',
    type: 'string / number',
    default: '-',
    value: '-'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'init',
    description: '重新初始化组件内部高度计算过程，如果内嵌[u-parse](https://www.uviewui.com/components/parse.html)组件时可能需要用到',
    parameter: '—'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'open',
    description: '内容被展开时触发',
    parameter: 'name - props中传入的name参数值'
  },
  {
    name: 'close',
    description: '内容被收起时触发',
    parameter: 'name - props中传入的name参数值'
  }
]

export const document: UDocument = { attributes, methods, events }

export default document
