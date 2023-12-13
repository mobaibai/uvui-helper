import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '../constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'src',
    description: '图片地址，强烈建议使用绝对或者网络路径',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'mode',
    description: '裁剪模式，见uniapp image [mode](https://uniapp.dcloud.io/component/image.html)',
    type: 'string',
    value: AttributeConstants.imageMode,
    default: 'aspectFill'
  },
  {
    name: 'alt',
    description: '原生 alt',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'width',
    description: '宽度，单位任意，如果为数值，默认单位px',
    type: 'string / number',
    value: '-',
    default: 300
  },
  {
    name: 'height',
    description: '高度，单位任意，如果为数值，默认单位px',
    type: 'string / number',
    value: '—',
    default: 225
  },
  {
    name: 'shape',
    description: '图片形状，circle-圆形，square-方形',
    type: 'string',
    value: 'circle / square',
    default: 'square'
  },
  {
    name: 'radius',
    description: '圆角，默认单位px',
    type: 'string / number',
    value: '—',
    default: 0
  },
  {
    name: 'lazy-load',
    description: '是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效',
    type: 'boolean',
    value: 'true / false',
    default: true
  },
  {
    name: 'show-menu-by-longpress',
    description: '是否开启长按图片显示识别小程序码菜单，仅微信小程序有效',
    type: 'boolean',
    value: 'true / false',
    default: true
  },
  {
    name: 'loading-icon',
    description: '加载中的图标，或者小图片',
    type: 'string',
    value: '—',
    default: 'photo'
  },
  {
    name: 'error-icon',
    description: '加载失败的图标，或者小图片',
    type: 'string',
    value: '—',
    default: 'error-circle'
  },
  {
    name: 'show-loading',
    description: '是否显示加载中的图标或者自定义的slot',
    type: 'boolean',
    value: 'true / false',
    default: true
  },
  {
    name: 'fade',
    description: '是否需要淡入效果',
    type: 'boolean',
    value: 'true / false',
    default: true
  },
  {
    name: 'webp',
    description: '只支持网络资源，只对微信小程序有效',
    type: 'boolean',
    value: 'true / false',
    default: false
  },
  {
    name: 'duration',
    description: '搭配fade参数的过渡时间，单位ms',
    type: 'string / number',
    value: '-',
    default: 500
  },
  {
    name: 'bg-color',
    description: '背景颜色，用于深色页面加载图片时，为了和背景色融合',
    type: 'string',
    value: '-',
    default: '#f3f4f6'
  }
]

export const events: DocumentEvent[] = [
  { name: 'click', description: '点击图片时触发', parameter: '-' },
  { name: 'error', description: '图片加载失败时触发', parameter: '(err: 错误信息)' },
  { name: 'load', description: '图片加载成功时触发', parameter: '-' }
]

export const slots: DocumentSlot[] = [
  { name: 'loading', description: '自定义加载中的提示内容' },
  { name: 'error', description: '自定义失败的提示内容' }
]

export const document: UDocument = { attributes, events, slots }

export default document
