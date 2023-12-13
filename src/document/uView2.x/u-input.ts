import { DocumentAttribute, DocumentEvent, DocumentMethod, DocumentSlot, UDocument } from '@/document'
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
    name: 'type',
    description: '输入框类型，见上方说明',
    type: 'string',
    default: 'text',
    value: 'text / number / idcard / digit / password'
  },
  {
    name: 'disabled',
    description: '是否禁用输入框',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'disabled-color',
    description: '禁用状态时的背景色',
    type: 'string',
    default: '#f5f7fa',
    value: '-'
  },
  {
    name: 'clearable',
    description: '是否显示清除控件',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'password',
    description: '是否密码类型',
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
    name: 'placeholder',
    description: '输入框为空时的占位符',
    type: 'string',
    default: '-',
    value: '-'
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
    name: 'showWord-limit',
    description: '是否显示输入字数统计，只在 type="text"或type="textarea"时有效',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'confirm-type',
    description: '设置右下角按钮的文字，兼容性详见uni-app文档',
    type: 'string',
    default: 'done',
    value: 'send / search / next / go / done'
  },
  {
    name: 'confirm-hold',
    description: '点击键盘右下角按钮时是否保持键盘不收起，H5无效',
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
    name: 'focus',
    description: '自动获取焦点，在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'autoBlur',
    description: '键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'disable-default-padding',
    description: '是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'cursor',
    description: '指定focus时光标的位置',
    type: 'string / number',
    default: '-1',
    value: '-'
  },
  {
    name: 'cursor-spacing',
    description: '输入框聚焦时底部与键盘的距离',
    type: 'string / number',
    default: '30',
    value: '-'
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
    name: 'input-align',
    description: '输入框内容对齐方式',
    type: 'string',
    default: 'left',
    value: AttributeConstants.hAlign
  },
  {
    name: 'font-size',
    description: '输入框字体的大小',
    type: 'string / number',
    default: '15px',
    value: '-'
  },
  {
    name: 'color',
    description: '输入框字体颜色',
    type: 'string',
    default: '#303133',
    value: '-'
  },
  {
    name: 'prefix-icon',
    description: '输入框前置图标',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'prefix-icon-style',
    description: '前置图标样式，对象或字符串',
    type: 'string / object',
    default: '-',
    value: '-'
  },
  {
    name: 'suffix-icon',
    description: '输入框后置图标',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'suffix-icon-style',
    description: '后置图标样式，对象或字符串',
    type: 'string / object',
    default: '-',
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
    name: 'readonly',
    description: '是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'shape',
    description: '输入框形状，circle-圆形，square-方形',
    type: 'string',
    default: 'square',
    value: AttributeConstants.shape
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

export const slots: DocumentSlot[] = [
  {
    name: 'prefix',
    description: '输入框前置内容，nuve环境需u--input有效，非nvue环境需u-input才有效'
  },
  {
    name: 'suffix',
    description: '输入框后置内容，nuve环境需u--input有效，非nvue环境需u-input才有效'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'blur',
    description: '输入框失去焦点时触发',
    parameter: 'event: input默认参数，event.detail.value获取内容'
  },
  {
    name: 'focus',
    description: '输入框聚焦时触发',
    parameter: '-'
  },
  {
    name: 'confirm',
    description: '点击完成按钮时触发',
    parameter: 'value：内容值'
  },
  {
    name: 'keyboardheightchange',
    description: '键盘高度发生变化的时候触发此事件',
    parameter: '-'
  },
  {
    name: 'input',
    description: '内容发生变化触发此事件',
    parameter: 'value：内容值'
  },
  {
    name: 'change',
    description: '内容发生变化触发此事件',
    parameter: 'value：内容值'
  },
  {
    name: 'clear',
    description: '点击清空内容',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, methods, slots, events }

export default document
