import { DocumentAttribute, DocumentMethod, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'model',
    description: '表单数据对象',
    type: 'object',
    value: '-',
    default: '—'
  },
  {
    name: 'rules',
    description: '通过ref设置，如果rules中有自定义方法等，需要使用setRules方法设置规则，见上方说明',
    type: 'object / function / array',
    value: '-',
    default: '—'
  },
  {
    name: 'error-type',
    description: '错误的提示方式，见上方说明',
    type: 'string',
    value: 'none / message / toast / border-bottom',
    default: 'message'
  },
  {
    name: 'border-bottom',
    description: '是否显示表单域的下划线边框',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'label-position',
    description: '表单域提示文字的位置，left-左侧，top-上方',
    type: 'string',
    value: 'left / top',
    default: 'left'
  },
  {
    name: 'label-width',
    description: '提示文字的宽度，单位px',
    type: 'string / number',
    value: '数值 / auto',
    default: 45
  },
  {
    name: 'label-align',
    description: 'lable字体的对齐方式',
    type: 'string',
    value: AttributeConstants.hAlign,
    default: 'left'
  },
  {
    name: 'label-style',
    description: 'lable的样式，对象形式',
    type: 'object',
    value: '-',
    default: 'left'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'validate',
    description: '对整个表单进行校验的方法',
    parameter: '—'
  },
  {
    name: 'setRules',
    description: '如果rules中有自定义方法等，需要用此方法设置rules规则，否则微信小程序无效',
    parameter: 'Function(rules)'
  },
  {
    name: 'validateField',
    description: '对部分表单字段进行校验',
    parameter: 'Function(value, Function(errorsRes))'
  },
  {
    name: 'resetFields',
    description: '对整个表单进行重置，将所有字段值重置为初始值并移除校验结果',
    parameter: '—'
  },
  {
    name: 'clearValidate',
    description: '清空校验结果',
    parameter: 'Function(props)'
  }
]

export const document: UDocument = { attributes, methods }

export default document
