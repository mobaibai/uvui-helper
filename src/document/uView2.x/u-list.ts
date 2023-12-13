import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'show-scrollbar',
    description: '控制是否出现滚动条，仅nvue有效',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'lower-threshold',
    description: '距底部多少时触发scrolltolower事件',
    type: 'string / number',
    default: 50,
    value: '-'
  },
  {
    name: 'upper-threshold',
    description: '距顶部多少时触发scrolltoupper事件，非nvue有效',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'scroll-top',
    description: '设置竖向滚动条位置',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'offset-accuracy',
    description: '控制onscroll事件触发的频率，仅nvue有效',
    type: 'string / number',
    default: 10,
    value: '-'
  },
  {
    name: 'enable-flex',
    description: '启用flexbox布局。开启后，当前节点声明了display:flex就会成为flexcontainer，并作用于其孩子节点，仅微信小程序有效',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'paging-enabled',
    description: '是否按分页模式显示List，默认值false',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'scrollable',
    description: '是否允许List滚动',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'scroll-intoView',
    description: '值应为某子元素id（id不能以数字开头）',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'scroll-with-animation',
    description: '在设置滚动条位置时使用动画过渡',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'enable-back-to-top',
    description: 'iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只对微信小程序有效',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'height',
    description: '列表的高度',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'width',
    description: '列表宽度',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'preLoad-screen',
    description: '列表前后预渲染的屏数，1代表一个屏幕的高度，1。5代表1个半屏幕高度',
    type: 'string / number',
    default: 1,
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'scroll',
    description: '滚动条滚动触发事件',
    parameter: 'scrollTop: 滚动条位置'
  },
  {
    name: 'scrolltolower',
    description: '滚动到底部触发事件',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
