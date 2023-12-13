import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'maxlength',
    description: '输入字符个数',
    type: 'string / number',
    default: 6,
    value: '-'
  },
  {
    name: 'dot',
    description: '是否用圆点填充',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'mode',
    description: '模式选择，见上方"基本使用"说明',
    type: 'string',
    default: 'box',
    value: 'box / bottomLine / middleLine'
  },
  {
    name: 'hairline',
    description: '是否细边框',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'space',
    description: '字符间的距离',
    type: 'string / number',
    default: 10,
    value: '-'
  },
  {
    name: 'v-model',
    description: '预置值',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'focus',
    description: '是否自动获取焦点',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'bold',
    description: '字体和输入横线是否加粗',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'color',
    description: '字体颜色',
    type: 'string',
    default: '#606266',
    value: '-'
  },
  {
    name: 'font-size',
    description: '字体大小，单位rpx',
    type: 'string / number',
    default: 18,
    value: '-'
  },
  {
    name: 'size',
    description: '输入框的大小，宽等于高',
    type: 'string / number',
    default: 35,
    value: '-'
  },
  {
    name: 'disabledKeyboard',
    description: '禁止点击输入框唤起系统键盘',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'border-color',
    description: '边框和线条颜色',
    type: 'string',
    default: '#c9cacc',
    value: '-'
  },
  {
    name: 'disabled-dot',
    description: '是否禁止输入"."符号',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '输入内容发生改变时触发，具体见上方说明',
    parameter: 'value：当前输入的值'
  },
  {
    name: 'finish',
    description: '输入字符个数达maxlength值时触发，见上方说明',
    parameter: 'value：当前输入的值'
  }
]

export const document: UDocument = { attributes, events }

export default document
