import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description: '按钮的样式类型',
    type: 'string',
    value: AttributeConstants.type,
    default: '—'
  },
  {
    name: 'show',
    description: '是否显示',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'text',
    description: '显示的值',
    type: 'string / number',
    value: '-',
    default: '-'
  },
  {
    name: 'prefix-icon',
    description: '前置图标',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'suffix-icon',
    description: '后置图标',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'mode',
    description: '文本处理的匹配模式text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接',
    type: 'string',
    value: 'price / phone / name / date / link',
    default: '-'
  },
  {
    name: 'href',
    description: 'mode=link下，配置的链接',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'format',
    description: '格式化规则',
    type: 'string / function',
    value: '-',
    default: '-'
  },
  {
    name: 'call',
    description: 'mode=phone时，点击文本是否拨打电话',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'open-type',
    description: '小程序的打开方式',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'bold',
    description: '是否粗体，默认normal',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'block',
    description: '是否块状',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'lines',
    description: '文本显示的行数，如果设置，超出此行数，将会显示省略号',
    type: 'string / number',
    value: '-',
    default: '-'
  },
  {
    name: 'color',
    description: '文本颜色',
    type: 'string',
    value: '-',
    default: '#303133'
  },
  {
    name: 'size',
    description: '字体大小',
    type: 'string / number',
    value: '-',
    default: 15
  },
  {
    name: 'icon-style',
    description: '图标的样式',
    type: 'object / string',
    value: '-',
    default: '15px'
  },
  {
    name: 'decoration',
    description: '文字装饰，下划线，中划线等',
    type: 'string',
    value: 'none / underline / line-through',
    default: 'none'
  },
  {
    name: 'margin',
    description: '外边距，对象、字符串，数值形式均可',
    type: 'object / number / string',
    value: '-',
    default: '-'
  },
  {
    name: 'line-height',
    description: '文本行高',
    type: 'number / string',
    value: '-',
    default: '-'
  },
  {
    name: 'align',
    description: '文本对齐方式',
    type: 'string',
    value: AttributeConstants.hAlign,
    default: 'left'
  },
  {
    name: 'word-wrap',
    description: '文字换行',
    type: 'string',
    value: 'normal / break-word / anywhere',
    default: 'normal'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击触发事件',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
