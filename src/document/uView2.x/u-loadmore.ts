import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'status',
    description: '组件状态',
    type: 'string',
    default: 'loadmore',
    value: 'loading / nomore / loadmore'
  },
  {
    name: 'bg-color',
    description: '组件背景颜色，在页面是非白色时会用到（默认为transparent）',
    type: 'string',
    default: 'transparent',
    value: '-'
  },
  {
    name: 'icon',
    description: '加载中时是否显示图标',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'font-size',
    description: '字体大小，单位rpx',
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
    name: 'loading-icon',
    description: '加载中状态的图标',
    type: 'string',
    default: 'circle',
    value: 'circle / spinner / semicircle'
  },
  {
    name: 'loadmore-text',
    description: '加载前的提示语',
    type: 'string',
    default: '加载更多',
    value: '-'
  },
  {
    name: 'loadingText',
    description: '加载中提示语',
    type: 'string',
    default: '正在加载...',
    value: '-'
  },
  {
    name: 'nomore-text',
    description: '没有更多的提示语',
    type: 'string',
    default: '没有更多了',
    value: '-'
  },
  {
    name: 'is-dot',
    description: 'status为nomore时，内容显示为一个“●”',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'icon-color',
    description: '加载中的动画图标的颜色',
    type: 'string',
    default: '#b7b7b7',
    value: '-'
  },
  {
    name: 'margin-top',
    description: '与前一个元素的距离，单位rpx',
    type: 'string / number',
    default: 10,
    value: '-'
  },
  {
    name: 'margin-bottom',
    description: '与后一个元素的距离，单位rpx',
    type: 'string / number',
    default: 10,
    value: '-'
  },
  {
    name: 'height',
    description: '高度',
    type: 'string / number',
    default: 'auto',
    value: '-'
  },
  {
    name: 'line',
    description: '是否显示左边分割线',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'loadmore',
    description: 'status为loadmore时，点击组件会发出此事件',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
