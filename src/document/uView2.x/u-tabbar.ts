import { DocumentAttribute, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value',
    description: '当前匹配项的name',
    type: 'string / number',
    default: null,
    value: '-'
  },
  {
    name: 'safe-area-inset-bottom',
    description: '是否为iPhoneX留出底部安全距离',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'border',
    description: '是否显示上方边框',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'z-index',
    description: '元素层级zIndex',
    type: 'string / number',
    default: 1,
    value: '-'
  },
  {
    name: 'active-color',
    description: '选中标签的颜色',
    type: 'string',
    default: '#1989fa',
    value: '-'
  },
  {
    name: 'inactive-color',
    description: '未选中标签的颜色',
    type: 'string',
    default: '#7d7e80',
    value: '-'
  },
  {
    name: 'fixed',
    description: '是否固定在底部',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'placeholder',
    description: 'fixed定位固定在底部时，是否生成一个等高元素防止塌陷',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
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
