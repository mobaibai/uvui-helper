import { DocumentAttribute, DocumentEvent, DocumentMethod, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'show',
    description: '用于控制选择器的弹出与收起',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'show-toolbar',
    description: '是否显示顶部的操作栏',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'title',
    description: '顶部中间的标题',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'columns',
    description: '设置每一列的数据，见上方说明',
    type: 'array',
    default: '-',
    value: '-'
  },
  {
    name: 'loading',
    description: '加载状态',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'item-height',
    description: '各列中，单个选项的高度',
    type: 'string / number',
    default: 44,
    value: '-'
  },
  {
    name: 'cancel-text',
    description: '取消按钮的文字',
    type: 'string',
    default: '取消',
    value: '-'
  },
  {
    name: 'confirm-text',
    description: '确认按钮的文字',
    type: 'string',
    default: '确认',
    value: '-'
  },
  {
    name: 'cancel-color',
    description: '取消按钮的颜色',
    type: 'string',
    default: '#909193',
    value: '-'
  },
  {
    name: 'confirm-color',
    description: '确认按钮的颜色',
    type: 'string',
    default: '#3c9cff',
    value: '-'
  },
  {
    name: 'single-index',
    description: '选择器只有一列时，默认选中项的索引，从0开始',
    type: 'array',
    default: [0],
    value: '-'
  },
  {
    name: 'visible-item-count',
    description: '每列中可见选项的数量',
    type: 'string / number',
    default: 5,
    value: '-'
  },
  {
    name: 'key-name',
    description: '自定义需要展示的text属性键名',
    type: 'string',
    default: 'text',
    value: '-'
  },
  {
    name: 'close-on-click-overlay',
    description: '是否允许点击遮罩关闭选择器（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'default-index',
    description: '各列的默认索引',
    type: 'array',
    default: '-',
    value: '-'
  },
  {
    name: 'immediate-change',
    description: '是否在手指松开时立即触发change事件。若不开启则会在滚动动画结束后触发change事件，只在微信2.21.1及以上有效',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'setIndexs',
    description: '(index, setLastIndex) 设置对应列的选择值',
    parameter: '—'
  },
  {
    name: 'setColumnValues',
    description: '多列联动时需要用到，见上方说明，注意微信小程序的特殊用法',
    parameter: '—'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'close',
    description: '关闭选择器时触发',
    parameter: ''
  },
  {
    name: 'change',
    description: '当选择值变化时触发',
    parameter: 'array'
  },
  {
    name: 'confirm',
    description: '点击确定按钮，返回当前选择的值',
    parameter: 'array'
  },
  {
    name: 'cancel',
    description: '点击取消按钮',
    parameter: ''
  }
]

export const document: UDocument = { attributes, methods, events }

export default document
