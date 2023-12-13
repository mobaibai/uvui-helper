import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'name',
    description: '标识符',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'v-model',
    description: '绑定的值',
    type: 'array',
    default: [],
    value: '-'
  },
  {
    name: 'shape',
    description: '形状，circle-圆形，square-方形',
    type: 'string',
    default: 'square',
    value: AttributeConstants.shape
  },
  {
    name: 'disabled',
    description: '是否禁用全部checkbox',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'active-color',
    description: '选中状态下的颜色，如子Checkbox组件设置此值，将会覆盖本值',
    type: 'string',
    default: '#2979ff',
    value: '-'
  },
  {
    name: 'inactive-color',
    description: '未选中的颜色',
    type: 'string',
    default: '#c8c9cc',
    value: '-'
  },
  {
    name: 'size',
    description: '整个组件的尺寸，默认px',
    type: 'string',
    default: 18,
    value: '-'
  },
  {
    name: 'placement',
    description: '布局方式，row-横向，column-纵向',
    type: 'string',
    default: 'row',
    value: 'row / column'
  },
  {
    name: 'label-size',
    description: 'label的字体大小，px单位',
    type: 'string / number',
    default: 14,
    value: '-'
  },
  {
    name: 'label-color',
    description: 'label的字体颜色',
    type: 'string',
    default: '#303133',
    value: '-'
  },
  {
    name: 'label-disabled',
    description: '是否禁止点击文本操作',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'icon-color',
    description: '图标颜色',
    type: 'string',
    default: '#ffffff',
    value: '-'
  },
  {
    name: 'icon-size',
    description: '图标的大小，单位px',
    type: 'string / number',
    default: 12,
    value: '-'
  },
  {
    name: 'icon-placement',
    description: '勾选图标的对齐方式，left-左边，right-右边',
    type: 'string',
    default: 'left',
    value: 'left / right'
  },
  {
    name: 'border-bottom',
    description: '竖向配列时，是否显示下划线',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '任一个checkbox状态发生变化时触发，回调为一个对象',
    parameter: 'detail = array( [元素为被选中的checkbox的name] )'
  }
]

export const document: UDocument = { attributes, events }

export default document
