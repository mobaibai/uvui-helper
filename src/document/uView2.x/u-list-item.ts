import { DocumentAttribute, UDocument } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'anchor',
    description: '用于滚动到指定item',
    type: 'string / number',
    value: '-',
    default: '—'
  }
]

export const document: UDocument = { attributes }

export default document
