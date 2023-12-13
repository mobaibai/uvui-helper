import { DocumentAttribute, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'mode',
    description: '按钮形状',
    type: 'string',
    default: 'circle',
    value: AttributeConstants.shape
  },
  {
    name: 'icon',
    description: 'uView内置图标名称，或图片路径',
    type: 'string',
    default: 'arrow-upward',
    value: '-'
  },
  {
    name: 'text',
    description: '返回顶部按钮的提示文字',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'duration',
    description: '返回顶部过程中的过渡时间，单位ms',
    type: 'string / number',
    default: 100,
    value: '-'
  },
  {
    name: 'scroll-top',
    description: '页面的滚动距离，通过onPageScroll生命周期获取',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'top',
    description: '滚动条滑动多少距离时显示，单位rpx',
    type: 'string / number',
    default: 400,
    value: '-'
  },
  {
    name: 'bottom',
    description: '返回按钮位置到屏幕底部的距离，单位rpx',
    type: 'string / number',
    default: 100,
    value: '-'
  },
  {
    name: 'right',
    description: '返回按钮位置到屏幕右边的距离，单位rpx',
    type: 'string / number',
    default: 20,
    value: '-'
  },
  {
    name: 'z-index',
    description: '返回顶部按钮的层级',
    type: 'string / number',
    default: 9,
    value: '-'
  },
  {
    name: 'icon-style',
    description: '图标的样式，对象形式',
    type: 'object',
    default: '-',
    value: '-'
  },
  {
    name: 'custom-style',
    description: '按钮外层的自定义样式',
    type: 'object',
    default: '-',
    value: '-'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '默认内容插槽'
  }
]

export const document: UDocument = { attributes, slots }

export default document
