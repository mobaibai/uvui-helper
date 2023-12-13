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
    name: 'v-model',
    description: '绑定值',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'title',
    description: '顶部标题',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'mode',
    description: '展示格式',
    type: 'string',
    default: 'datetime',
    value: 'datetime / date / time / year-month'
  },
  {
    name: 'max-date',
    description: '可选的最大时间（时间戳毫秒）',
    type: 'number',
    default: '-',
    value: '-'
  },
  {
    name: 'min-date',
    description: '可选的最小时间（时间戳毫秒）',
    type: 'number',
    default: '-',
    value: '-'
  },
  {
    name: 'min-hour',
    description: '可选的最小小时，仅mode=time有效',
    type: 'number',
    default: 0,
    value: '-'
  },
  {
    name: 'max-hour',
    description: '可选的最大小时，仅mode=time有效',
    type: 'number',
    default: 23,
    value: '-'
  },
  {
    name: 'min-minute',
    description: '可选的最小分钟，仅mode=time有效',
    type: 'number',
    default: 0,
    value: '-'
  },
  {
    name: 'max-minute',
    description: '可选的最大分钟，仅mode=time有效',
    type: 'number',
    default: 59,
    value: '-'
  },
  {
    name: 'filter',
    description: '选项过滤函数',
    type: 'function',
    default: null,
    value: '-'
  },
  {
    name: 'formatter',
    description: '输入过滤或格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)',
    type: 'function',
    default: null,
    value: '-'
  },
  {
    name: 'loading',
    description: '是否显示加载中状态',
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
    name: 'visible-item-count',
    description: '每列中可见选项的数量',
    type: 'string / number',
    default: 5,
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
    default: [],
    value: '-'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'setFormatter',
    description: '为兼容微信小程序而暴露的内部方法，见上方说明',
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
    parameter: ''
  },
  {
    name: 'confirm',
    description: '点击确定按钮，返回当前选择的值',
    parameter: ''
  },
  {
    name: 'cancel',
    description: '点击取消按钮',
    parameter: ''
  }
]

export const document: UDocument = { attributes, methods, events }

export default document
