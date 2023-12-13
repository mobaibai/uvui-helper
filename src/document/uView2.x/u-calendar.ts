import { DocumentAttribute, DocumentEvent, DocumentMethod, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '标题内容',
    type: 'string',
    value: '-',
    default: '日期选择'
  },
  {
    name: 'show-title',
    description: '是否显示标题',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'show-subtitle',
    description: '是否显示副标题',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'mode',
    description: '日期类型选择, multiple-可以选择多个日期，range-选择日期范围（多个月需配合monthNum属性使用）',
    type: 'string',
    value: 'single / multiple / range',
    default: 'single'
  },
  {
    name: 'start-text',
    description: 'mode=range时，第一个日期底部的提示文字',
    type: 'string',
    value: '-',
    default: '开始'
  },
  {
    name: 'end-text',
    description: 'mode=range时，最后一个日期底部的提示文字',
    type: 'string',
    value: '-',
    default: '结束'
  },
  {
    name: 'custom-list',
    description: '自定义列表',
    type: 'array',
    value: '-',
    default: []
  },
  {
    name: 'color',
    description: '主题色，对底部按钮和选中日期有效',
    type: 'string',
    value: '-',
    default: '#3c9cff'
  },
  {
    name: 'min-date',
    description: '最小的可选日期',
    type: 'number / string',
    value: '-',
    default: 0
  },
  {
    name: 'max-date',
    description: '最大可选日期',
    type: 'number / string',
    value: '-',
    default: 0
  },
  {
    name: 'default-date',
    description: '默认选中的日期，mode为multiple或range是必须为数组格式',
    type: 'array / string / Date',
    value: '-',
    default: null
  },
  {
    name: 'max-count',
    description: 'mode=multiple时，最多可选多少个日期',
    type: 'number / string',
    value: '-',
    default: 'number.MAX_SAFE_INTEGER'
  },
  {
    name: 'row-height',
    description: '日期行高',
    type: 'number / string',
    value: '-',
    default: 56
  },
  {
    name: 'formatter',
    description: '日期格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)',
    type: 'function',
    value: '-',
    default: null
  },
  {
    name: 'show-lunar',
    description: '是否显示农历',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'show-mark',
    description: '是否显示月份背景色',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'confirm-text',
    description: '确定按钮的文字',
    type: 'string',
    value: '-',
    default: '确定'
  },
  {
    name: 'confirm-disabled-text',
    description: '确认按钮处于禁用状态时的文字',
    type: 'string',
    value: '-',
    default: '确定'
  },
  {
    name: 'show',
    description: '是否显示日历弹窗',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'close-on-click-overlay',
    description: '是否允许点击遮罩关闭日历 （注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'readonly',
    description: '是否为只读状态，只读状态下禁止选择日期',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'max-range',
    description: '日期区间最多可选天数，默认无限制，mode = range时有效',
    type: 'number / string',
    value: '-',
    default: '-'
  },
  {
    name: 'range-prompt',
    description: '范围选择超过最多可选天数时的提示文案，mode = range时有效',
    type: 'string',
    value: '-',
    default: '选择天数不能超过 xx 天'
  },
  {
    name: 'show-range-prompt',
    description: '范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'allow-same-day',
    description: '是否允许日期范围的起止时间为同一天，mode = range时有效',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'round',
    description: '圆角值，默认无圆角',
    type: 'number / string',
    value: '-',
    default: 0
  },
  {
    name: 'month-num',
    description: '最大展示的月份数量',
    type: 'number / string',
    value: '-',
    default: 3
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
    name: 'confirm',
    description: '日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发',
    parameter: '选择日期相关的返回参数'
  },
  {
    name: 'close',
    description: '日历关闭时触发',
    parameter: '可定义页面关闭时的回调事件'
  }
]

export const document: UDocument = { attributes, methods, events }

export default document
