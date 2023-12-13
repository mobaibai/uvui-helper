import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'name',
    description: 'item标签的名称，作为与uTabbar的value参数匹配的标识符',
    type: 'string / number',
    default: null,
    value: '-'
  },
  {
    name: 'icon',
    description: 'uView内置图标或者绝对路径的图片',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'badge',
    description: '右上角的角标提示信息',
    type: 'string / number',
    default: null,
    value: '-'
  },
  {
    name: 'dot',
    description: '是否显示圆点，将会覆盖badge参数',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'text',
    description: '描述文本',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'badge-style',
    description: '控制徽标的位置，对象或者字符串形式，可以设置top和right属性',
    type: 'object / string',
    default: 'top:6px;right:2px;',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '切换选项时触发',
    parameter: 'index：当前要切换项的name'
  },
  {
    name: 'change',
    description: '切换选项时触发',
    parameter: 'index：当前要切换项的name'
  }
]

export const document: UDocument = { attributes, events }

export default document
