import { DocumentAttribute, DocumentEvent, DocumentMethod, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '输入的值',
    type: 'number / string',
    default: '-',
    value: '-'
  },
  {
    name: 'placeholder',
    description: '输入框为空时的占位符',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'height',
    description: '输入框高度',
    type: 'string / number',
    default: 70,
    value: '-'
  },
  {
    name: 'confirm-type',
    description: '设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效',
    type: 'string',
    default: 'done',
    value: '-'
  },
  {
    name: 'disabled',
    description: '是否禁用输入框',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'count',
    description: '是否显示统计字数',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'focus',
    description: '是否自动获取焦点，nvue不支持，H5取决于浏览器的实现',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'auto-height',
    description: '是否自动增加高度',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'fixed',
    description: '如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'cursor-spacing',
    description: '指定光标与键盘的距离',
    type: 'number',
    default: 0,
    value: '-'
  },
  {
    name: 'cursor',
    description: '指定focus时的光标位置',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'show-confirm-bar',
    description: '是否显示键盘上方带有”完成“按钮那一栏',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'selection-start',
    description: '光标起始位置，自动聚集时有效，需与selection-end搭配使用',
    type: 'string / number',
    default: '-1',
    value: '-'
  },
  {
    name: 'selection-end',
    description: '光标结束位置，自动聚集时有效，需与selection-start搭配使用',
    type: 'string / number',
    default: '-1',
    value: '-'
  },
  {
    name: 'adjust-position',
    description: '键盘弹起时，是否自动上推页面',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'disable-default-padding',
    description: '是否去掉 iOS 下的默认内边距，只微信小程序有效',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'hold-keyboard',
    description: 'focus时，点击页面的时候不收起键盘，微信小程序有效',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'maxlength',
    description: '最大输入长度，设置为 -1 的时候不限制最大长度',
    type: 'string / number',
    default: '-1',
    value: '-'
  },
  {
    name: 'border',
    description: '边框类型，surround-四周边框，bottom-底部边框，none-无边框',
    type: 'string',
    default: 'surround',
    value: 'surround / bottom / none'
  },
  {
    name: 'placeholder-class',
    description: '指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/',
    type: 'string',
    default: 'input-placeholder',
    value: '-'
  },
  {
    name: 'placeholder-style',
    description: '指定placeholder的样式，字符串/对象形式，如"color: red;"',
    type: 'string / object',
    default: 'color: #c0c4cc',
    value: '-'
  },
  {
    name: 'formatter',
    description: '输入过滤或格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)',
    type: 'function',
    default: 'null',
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
    name: 'focus',
    description: '输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度',
    parameter: 'e'
  },
  {
    name: 'blur',
    description: '输入框失去焦点时触发，event.detail = {value, cursor}',
    parameter: 'e'
  },
  {
    name: 'confirm',
    description: '点击完成时， 触发 confirm 事件',
    parameter: 'e'
  },
  {
    name: 'keyboardheightchange',
    description: '键盘高度发生变化的时候触发此事件',
    parameter: 'e'
  },
  {
    name: 'input',
    description: '当键盘输入时，触发 input 事件',
    parameter: 'e.detail.value'
  },
  {
    name: 'linechange',
    description: '输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}',
    parameter: 'e'
  }
]

export const document: UDocument = { attributes, methods, events }

export default document
