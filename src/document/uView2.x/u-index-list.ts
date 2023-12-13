import { DocumentAttribute, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'index-list',
    description: '索引字符列表，数组',
    type: 'array[string / number]',
    default: [],
    value: 'A-Z'
  },
  {
    name: 'inactive-color',
    description: '右边锚点状态非激活时的颜色',
    type: 'string',
    default: '#606266',
    value: '-'
  },
  {
    name: 'active-color',
    description: '右边锚点状态激活时的颜色',
    type: 'string',
    default: '#5677fc',
    value: '-'
  },
  {
    name: 'sticky',
    description: '是否开启锚点自动吸顶',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'custom-nav-height',
    description: '自定义导航栏的高度，单位默认px',
    type: 'string / number',
    default: 0,
    value: '-'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '默认内容插槽'
  }
]

export const document: UDocument = { attributes, slots }

export default document
