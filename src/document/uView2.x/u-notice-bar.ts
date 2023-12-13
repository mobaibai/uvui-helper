import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'text',
    description: '显示的内容，direction为column时要求为数组，为row时要求为字符串',
    type: 'array / string',
    default: '-',
    value: '-'
  },
  {
    name: 'direction',
    description: '通告滚动模式，row：横向滚动，column：竖向滚动',
    type: 'string',
    default: 'row',
    value: 'row / column'
  },
  {
    name: 'step',
    description: 'direction为row时，是否使用步进形式滚动',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'icon',
    description: '是否显示左侧的音量图标',
    type: 'string',
    default: 'volume',
    value: '-'
  },
  {
    name: 'mode',
    description: '通告模式，link：显示右箭头，closable：显示右侧关闭图标',
    type: 'string',
    default: '-',
    value: 'link / closable'
  },
  {
    name: 'color',
    description: '文字颜色',
    type: 'string',
    default: '#f9ae3d',
    value: '-'
  },
  {
    name: 'bg-color',
    description: '背景颜色',
    type: 'string',
    default: '#fdf6ec',
    value: '-'
  },
  {
    name: 'speed',
    description: '水平滚动时的滚动速度，即每秒滚动多少px，这有利于控制文字无论多少时，都能有一个恒定的速度',
    type: 'string / number',
    default: 80,
    value: '-'
  },
  {
    name: 'font-size',
    description: '字体大小',
    type: 'string / number',
    default: 14,
    value: '-'
  },
  {
    name: 'duration',
    description: '滚动一个周期的时间长，单位ms',
    type: 'string / number',
    default: 2000,
    value: '-'
  },
  {
    name: 'disable-touch',
    description: '是否禁止用手滑动切换',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'url',
    description: '跳转的页面路径',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'link-type',
    description: '页面跳转的类型',
    type: 'string',
    default: 'navigateTo',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击通告文字触发',
    parameter: 'index: 点击的text的索引'
  },
  {
    name: 'close',
    description: '点击右侧关闭图标触发',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
