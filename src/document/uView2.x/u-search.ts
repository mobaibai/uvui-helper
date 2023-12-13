import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '双向绑定输入框搜索值',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'shape',
    description: '搜索框形状，round-圆形，square-方形',
    type: 'string',
    default: 'round',
    value: 'round / square'
  },
  {
    name: 'bg-color',
    description: '搜索框背景颜色',
    type: 'string',
    default: '#f2f2f2',
    value: '-'
  },
  {
    name: 'placeholder',
    description: '占位文字内容',
    type: 'string',
    default: '请输入关键字',
    value: '-'
  },
  {
    name: 'clearabled',
    description: '是否启用清除控件',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'focus',
    description: '是否自动获得焦点',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'show-action',
    description: '是否显示右侧控件(右侧的"搜索"按钮)',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'action-style',
    description: '右侧控件的样式，对象形式',
    type: 'object',
    default: '-',
    value: '-'
  },
  {
    name: 'action-text',
    description: '右侧控件文字',
    type: 'string',
    default: '搜索',
    value: '-'
  },
  {
    name: 'input-align',
    description: '输入框内容水平对齐方式',
    type: 'string',
    default: 'left',
    value: AttributeConstants.hAlign
  },
  {
    name: 'input-style',
    description: '自定义输入框样式，对象形式',
    type: 'object',
    default: '-',
    value: '-'
  },
  {
    name: 'disabled',
    description: '是否启用输入框',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'border-color',
    description: '边框颜色，配置了颜色，才会有边框',
    type: 'string',
    default: 'transparent',
    value: '-'
  },
  {
    name: 'search-icon-color',
    description: '搜索图标的颜色，默认同输入框字体颜色',
    type: 'string',
    default: '#909399',
    value: '-'
  },
  {
    name: 'search-icon-size',
    description: '搜索图标的大小',
    type: 'number',
    default: 22,
    value: '-'
  },
  {
    name: 'color',
    description: '输入框字体颜色',
    type: 'string',
    default: '#606266',
    value: '-'
  },
  {
    name: 'placeholder-color',
    description: 'placeholder的颜色',
    type: 'string',
    default: '#909399',
    value: '-'
  },
  {
    name: 'search-icon',
    description: '输入框左边的图标，可以为uView图标名称或图片路径',
    type: 'string',
    default: 'search',
    value: '-'
  },
  {
    name: 'margin',
    description: '组件与其他上下左右元素之间的距离，带单位的字符串形式，如"30rpx"、"30rpx 20rpx"等写法',
    type: 'string',
    default: 0,
    value: '-'
  },
  {
    name: 'animation',
    description: '是否开启动画，见上方说明',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'value',
    description: '输入框初始值',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'maxlength',
    description: '输入框最大能输入的长度，-1为不限制长度',
    type: 'string / number',
    default: -1,
    value: '-'
  },
  {
    name: 'height',
    description: '输入框高度，单位rpx',
    type: 'string / number',
    default: 64,
    value: '-'
  },
  {
    name: 'label',
    description: '搜索左侧文本信息',
    type: 'string / number',
    default: '-',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '输入框内容发生变化时触发',
    parameter: 'value：输入框的值'
  },
  {
    name: 'search',
    description: '用户确定搜索时触发，用户按回车键，或者手机键盘右下角的"搜索"键时触发',
    parameter: 'value：输入框的值'
  },
  {
    name: 'custom',
    description: '用户点击右侧控件时触发',
    parameter: 'value：输入框的值'
  },
  {
    name: 'blur',
    description: '输入框失去焦点时触发',
    parameter: 'value：输入框的值'
  },
  {
    name: 'focus',
    description: '输入框获得焦点时触发',
    parameter: 'value：输入框的值'
  },
  {
    name: 'clear',
    description: '配置了clearabled后，清空内容时会发出此事件',
    parameter: '-'
  },
  {
    name: 'click',
    description: 'disabled为true时，点击输入框，发出此事件，用于跳转搜索页',
    parameter: '-'
  },
  {
    name: 'click-icon',
    description: '左侧icon点击时候时触发',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
