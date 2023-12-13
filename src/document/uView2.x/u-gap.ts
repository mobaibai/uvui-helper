import { DocumentAttribute, UDocument } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bg-color',
    description: '背景颜色',
    type: 'string',
    default: 'transparent',
    value: '-'
  },
  {
    name: 'height',
    description: '间隔槽高度，单位px',
    type: 'string / number',
    default: 20,
    value: '-'
  },
  {
    name: 'margin-top',
    description: '与前一个元素的距离，单位px',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'margin-bottom',
    description: '与后一个元素的距离，单位px',
    type: 'string / number',
    default: 0,
    value: '-'
  }
]

export const document: UDocument = { attributes }

export default document
