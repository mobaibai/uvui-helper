import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'name',
    description: '步进器标识符，在change回调返回',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'v-model',
    description: '用于双向绑定的值，初始化时设置设为默认min值(最小值)',
    type: 'string / number',
    default: 1,
    value: '-'
  },
  {
    name: 'min',
    description: '用户可输入的最小值',
    type: 'string / number',
    default: 1,
    value: '-'
  },
  {
    name: 'max',
    description: '用户可输入的最大值',
    type: 'string / number',
    default: 'number.MAX_SAFE_INTEGER',
    value: '-'
  },
  {
    name: 'step',
    description: '步长，每次加或减的值，支持小数值，如需小数',
    type: 'string / number',
    default: 1,
    value: '-'
  },
  {
    name: 'integer',
    description: '是否只能输入正整数',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'disabled',
    description: '是否禁用操作，包括输入框，加减按钮',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'disabled-input',
    description: '是否禁止输入框',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'async-change',
    description: '是否开启异步变更，开启后需要手动控制输入值',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'input-width',
    description: '输入框宽度，单位px',
    type: 'string / number',
    default: 35,
    value: '-'
  },
  {
    name: 'show-minus',
    description: '是否显示减少按钮',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'show-plus',
    description: '是否显示增加按钮',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'decimal-length',
    description: '显示的小数位数',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'long-press',
    description: '是否允许长按进行加减',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'color',
    description: '输入框文字和加减按钮图标的颜色',
    type: 'string',
    default: '#323233',
    value: '-'
  },
  {
    name: 'button-size',
    description: '按钮大小，宽高等于此值，单位px，输入框高度和此值保持一致',
    type: 'string / number',
    default: 30,
    value: '-'
  },
  {
    name: 'bg-color',
    description: '输入框和按钮的背景颜色',
    type: 'string',
    default: '#EBECEE',
    value: '-'
  },
  {
    name: 'cursor-spacing',
    description: '指定光标于键盘的距离，避免键盘遮挡输入框，单位px',
    type: 'string / number',
    default: 100,
    value: '-'
  },
  {
    name: 'disable-plus',
    description: '是否禁用增加按钮',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'disable-minus',
    description: '是否禁用减少按钮',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'icon-style',
    description: '加减按钮图标的样式',
    type: 'string',
    default: '-',
    value: '-'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'minus',
    description: '减少按钮'
  },
  {
    name: 'input',
    description: '输入框'
  },
  {
    name: 'plus',
    description: '增加按钮'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'focus',
    description: '输入框得到焦点触发(按钮可点击情况下)，对象形式',
    parameter: 'value：输入框当前值，name：步进器标识符'
  },
  {
    name: 'blur',
    description: '输入框失去焦点时触发，对象形式',
    parameter: 'value：输入框当前值，name：步进器标识符'
  },
  {
    name: 'change',
    description: '输入框内容发生变化时触发，对象形式',
    parameter: 'value：输入框当前值，name：步进器标识符'
  },
  {
    name: 'overlimit',
    description: '超过范围阈值时触发',
    parameter: 'type：（minus已达最小值，plus已达最大值）'
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
