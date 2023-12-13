import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'safe-area-inset-top',
    description: '是否开启顶部安全区适配',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'placeholder',
    description: '固定在顶部时，是否生成一个等高元素，以防止塌陷',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'fixed',
    description: '导航栏是否固定在顶部',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'border',
    description: '导航栏底部是否显示下边框',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'left-icon',
    description: '左边返回图标的名称，只能为uView自带的图标',
    type: 'string',
    default: 'arrow-left',
    value: '-'
  },
  {
    name: 'left-text',
    description: '左边的提示文字',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'right-text',
    description: '右边的提示文字',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'right-icon',
    description: '右边返回图标的名称，只能为uView自带的图标',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'title',
    description: '导航栏标题，如设置为空字符，将会隐藏标题占位区域',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'bg-color',
    description: '导航栏背景设置',
    type: 'string',
    default: '#ffffff',
    value: '-'
  },
  {
    name: 'title-width',
    description: '导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx',
    type: 'string / number',
    default: '400rpx',
    value: '-'
  },
  {
    name: 'height',
    description: '导航栏高度（不包括状态栏高度在内，内部自动加上），单位px',
    type: 'string / number',
    default: '44px',
    value: '-'
  },
  {
    name: 'left-icon-size',
    description: '左侧返回图标的大小',
    type: 'string / number',
    default: '20px',
    value: '-'
  },
  {
    name: 'left-icon-color',
    description: '左侧返回图标的颜色',
    type: 'string',
    default: '#303133',
    value: '-'
  },
  {
    name: 'auto-back',
    description: '点击左侧区域（返回图标），是否自动返回上一页',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'title-style',
    description: '标题的样式，对象或字符串形式',
    type: 'string / object',
    default: '-',
    value: '-'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'left',
    description: '自定义左侧部分内容'
  },
  {
    name: 'right',
    description: '自定义右侧部分内容'
  },
  {
    name: 'center',
    description: '自定义中部内容'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'left-click',
    description: '点击左侧区域',
    parameter: '-'
  },
  {
    name: 'right-click',
    description: '点击右侧区域',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
