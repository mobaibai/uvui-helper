import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'label',
    description: '左侧提示文字',
    type: 'string',
    value: '-',
    default: '—'
  },
  {
    name: 'prop',
    description: '表单域model对象的属性名，在使用 validate、resetFields 方法的情况下，该属性是必填的',
    type: 'string',
    value: '-',
    default: '—'
  },
  {
    name: 'border-bottom',
    description: '是否显示下边框，如不需要下边框，需同时将u-form的同名参数设置为false',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'label-width',
    description: '提示文字的宽度，单位rpx，如设置，将覆盖u-form的同名参数',
    type: 'string / number',
    value: '数值 / auto',
    default: 45
  },
  {
    name: 'right-icon',
    description: '右侧自定义字体图标(限uView内置图标)或图片地址',
    type: 'string',
    value: '-',
    default: '—'
  },
  {
    name: 'left-icon',
    description: '左侧自定义字体图标(限uView内置图标)或图片地址',
    type: 'string',
    value: '-',
    default: '—'
  },
  {
    name: 'left-icon-style',
    description: '左侧自定义字体图标的样式',
    type: 'object',
    value: '-',
    default: 'left'
  },
  {
    name: 'required',
    description: '是否显示左边的"*"号，这里仅起展示作用，如需校验必填，请通过rules配置必填规则，如需在swiper标签内显示星号，需要给予swiper-item内第一个根节点一定的margin样式',
    type: 'string',
    value: AttributeConstants.bool,
    default: false
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: 'Form Item 的内容'
  },
  {
    name: 'right',
    description: '右侧自定义内容，可以在此传入一个按钮，用于获取验证码等场景'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击时触发',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
