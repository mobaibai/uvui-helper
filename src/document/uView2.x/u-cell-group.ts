import { DocumentAttribute, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '分组标题',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'border',
    description: '是否显示外边框',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'customStyle',
    description: "用户自定义外部样式，对象形式，如{'font-size': '12px'} 或 {'fontSize': '12px'}",
    type: 'object',
    value: '-',
    default: '-'
  }
]

export const document: UDocument = { attributes }

export default document
