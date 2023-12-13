import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '分组标题',
    type: 'string / number',
    value: '-',
    default: '-'
  },
  {
    name: 'label',
    description: '标题下方的描述信息',
    type: 'string / number',
    value: '-',
    default: '-'
  },
  {
    name: 'value',
    description: '右侧的内容',
    type: 'string / number',
    value: '-',
    default: '-'
  },
  {
    name: 'icon',
    description: '左侧图标名称，或者图片链接(本地文件建议使用绝对地址)',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'disabled',
    description: '是否禁用cell',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'border',
    description: '是否显示下边框',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'center',
    description: '内容是否垂直居中(主要是针对右侧的value部分)',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'url',
    description: '点击后跳转的URL地址',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'link-type',
    description: '链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作',
    type: 'string',
    value: '-',
    default: 'navigateTo'
  },
  {
    name: 'clickable',
    description: '是否开启点击反馈(表现为点击时加上灰色背景)',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'is-link',
    description: '是否展示右侧箭头并开启点击反馈',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'required',
    description: '是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'right-icon',
    description: '右侧的图标箭头',
    type: 'string',
    value: AttributeConstants.bool,
    default: 'arrow-right'
  },
  {
    name: 'arrow-direction',
    description: '右侧箭头的方向，可选值为：left，up，down',
    type: 'string',
    value: 'left / right / top / bottom',
    default: 'right'
  },
  {
    name: 'icon-style',
    description: '左侧图标样式',
    type: 'object / string',
    value: '-',
    default: '-'
  },
  {
    name: 'right-icon-style',
    description: '右侧箭头图标的样式',
    type: 'object / string',
    value: '-',
    default: '-'
  },
  {
    name: 'title-style',
    description: '标题的样式',
    type: 'object / string',
    value: '-',
    default: '-'
  },
  {
    name: 'size',
    description: '单位元的大小，可选值为large',
    type: 'string',
    value: 'large',
    default: '-'
  },
  {
    name: 'stop',
    description: '点击cell是否阻止事件传播',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'name',
    description: '标识符，用于在click事件中进行返回',
    type: 'string / number',
    value: '-',
    default: '-'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'title',
    description: '自定义左侧标题部分的内容，如需使用，请勿定义title参数，或赋值null即可'
  },
  {
    name: 'label',
    description: '自定义label内容'
  },
  {
    name: 'value',
    description: '自定义右侧标题部分的内容，如需使用，请勿定义value参数，或赋值null即可'
  },
  {
    name: 'icon',
    description: '自定义左侧的图标'
  },
  {
    name: 'right-icon',
    description: '自定义右侧图标内容，需设置arrow为false才起作用'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击cell列表时触发',
    parameter: '(name: props的name参数标识符)'
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
