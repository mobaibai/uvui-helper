import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'src',
    description: '头像路径，如加载失败，将会显示默认头像（不能为相对路径）',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'shape',
    description: '头像形状',
    type: 'string',
    default: 'circle',
    value: AttributeConstants.shape
  },
  {
    name: 'size',
    description: '头像尺寸，可以为指定字符串（large，default，mini），或者数值',
    type: 'string / number',
    default: 40,
    value: '-'
  },
  {
    name: 'mode',
    description: '头像图片的裁剪类型，与uni的image组件的mode参数一致，如效果达不到需求，可尝试传widthFix值',
    type: 'string',
    default: 'scaleToFill',
    value: AttributeConstants.imageMode
  },
  {
    name: 'text',
    description: '用文字替代图片，级别优先于src',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'bg-color',
    description: '背景颜色，一般显示文字时用',
    type: 'string',
    default: '#c0c4cc',
    value: '-'
  },
  {
    name: 'color',
    description: '文字颜色',
    type: 'string',
    default: '#ffffff',
    value: '-'
  },
  {
    name: 'font-size',
    description: '文字大小',
    type: 'string / number',
    default: 18,
    value: '-'
  },
  {
    name: 'icon',
    description: '显示的图标',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'mp-avatar',
    description: '显示小程序头像，只对百度，微信，QQ小程序有效',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'random-bg-color',
    description: '是否使用随机背景色',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'default-url',
    description: '加载失败的默认头像（组件有内置默认图片）',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'color-index',
    description: '如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0到19之间',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'name',
    description: '组件标识符',
    type: 'string',
    default: 'level',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击事件',
    parameter: 'index: 用户传递的标识符'
  }
]

export const document: UDocument = { attributes, events }

export default document
