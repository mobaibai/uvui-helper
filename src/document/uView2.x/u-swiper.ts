import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'list',
    description: '轮播图数据',
    type: 'array',
    default: '-',
    value: '-'
  },
  {
    name: 'indicator',
    description: '是否显示面板指示器',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'indicator-active-color',
    description: '指示器激活的颜色',
    type: 'string',
    default: '#FFFFFF',
    value: '-'
  },
  {
    name: 'indicator-cnactive-color',
    description: '指示器非激活颜色',
    type: 'string',
    default: 'rgba(255, 255, 255, 0.35)',
    value: '-'
  },
  {
    name: 'indicator-style',
    description: '指示器样式，可通过bottom，left，right进行定位',
    type: 'string / object',
    default: '-',
    value: '-'
  },
  {
    name: 'indicator-mode',
    description: '指示器模式',
    type: 'string',
    default: 'line',
    value: 'line / dot'
  },
  {
    name: 'autoplay',
    description: '是否自动切换',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'current',
    description: '当前所在滑块的index',
    type: 'number / string',
    default: 0,
    value: '-'
  },
  {
    name: 'current-item-id',
    description: '当前所在滑块的itemId，不能与current被同时指定',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'interval',
    description: '滑块自动切换时间间隔（ms）',
    type: 'string / number',
    default: 3000,
    value: '-'
  },
  {
    name: 'duration',
    description: '滑块切换过程所需时间（ms），nvue不支持',
    type: 'string / number',
    default: 300,
    value: '-'
  },
  {
    name: 'circular',
    description: '播放到末尾后是否重新回到开头',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'previous-margin',
    description: '前边距，可用于露出前一项的一小部分，nvue和支付宝不支持',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'next-margin',
    description: '后边距，可用于露出后一项的一小部分，nvue和支付宝不支持',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'acceleration',
    description: '当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'display-multiple-items',
    description: '同时显示的滑块数量，nvue、支付宝小程序不支持',
    type: 'number',
    default: 1,
    value: '-'
  },
  {
    name: 'easing-function',
    description: '指定swiper切换缓动动画类型，只对微信小程序有效',
    type: 'string',
    default: 'default',
    value: 'default / linear / easeInCubic / easeOutCubic / easeInOutCubic'
  },
  {
    name: 'key-name',
    description: 'list数组中指定对象的目标属性名',
    type: 'string',
    default: 'url',
    value: '-'
  },
  {
    name: 'img-mode',
    description: '图片的裁剪模式',
    type: 'string',
    default: 'aspectFill',
    value: AttributeConstants.imageMode
  },
  {
    name: 'height',
    description: '组件高度',
    type: 'string / number',
    default: 130,
    value: '-'
  },
  {
    name: 'bg-color',
    description: '背景颜色',
    type: 'string',
    default: '#f3f4f6',
    value: '-'
  },
  {
    name: 'radius',
    description: '组件圆角，数值或带单位的字符串',
    type: 'string / number',
    default: 4,
    value: '-'
  },
  {
    name: 'loading',
    description: '是否加载中',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'show-title',
    description: '是否显示标题，要求数组对象中有title属性',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '默认内容插槽'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击轮播图时触发',
    parameter: 'index：点击了第几张图片，从0开始'
  },
  {
    name: 'change',
    description: '轮播图切换时触发(自动或者手动切换)',
    parameter: 'index：切换到第几张图片，从0开始'
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
