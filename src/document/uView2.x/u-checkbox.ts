import { DocumentAttribute, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'name',
    description: 'checkbox的名称',
    type: 'string / number / boolean',
    default: '-',
    value: '-'
  },
  {
    name: 'shape',
    description: '形状，square为方形，circle为圆型',
    type: 'string',
    default: 'square',
    value: AttributeConstants.shape
  },
  {
    name: 'size',
    description: '整体的大小',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'checked',
    description: '是否默认选中',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'active-color',
    description: '选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'inactive-color',
    description: '未选中的颜色',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'icon-size',
    description: '图标的大小，单位px',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'icon-color',
    description: '图标颜色',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'label',
    description: 'label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'label-size',
    description: 'label的字体大小，px单位',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'label-color',
    description: 'label的颜色',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'label-disabled',
    description: '是否禁止点击提示语选中复选框',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  }
]

export const document: UDocument = { attributes }

export default document
