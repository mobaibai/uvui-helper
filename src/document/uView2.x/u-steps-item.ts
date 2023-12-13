import { DocumentAttribute, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '标题文字',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'current',
    description: '描述文本',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'icon-size',
    description: '图标大小',
    type: 'string / number',
    default: 17,
    value: '-'
  },
  {
    name: 'error',
    description: '当前步骤是否处于失败状态',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  }
]

export const document: UDocument = { attributes }

export default document
