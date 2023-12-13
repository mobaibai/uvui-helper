import { DocumentAttribute, UDocument } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'text',
    description: '列表锚点文本内容',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'color',
    description: '列表锚点文字颜色',
    type: 'string',
    default: '#606266',
    value: '-'
  },
  {
    name: 'size',
    description: '列表锚点文字大小，单位默认px',
    type: 'string / number',
    default: 14,
    value: '-'
  },
  {
    name: 'bg-color',
    description: '列表锚点背景颜色',
    type: 'string',
    default: '#dedede',
    value: '-'
  },
  {
    name: 'height',
    description: '列表锚点高度，单位默认px',
    type: 'string / number',
    default: 32,
    value: '-'
  }
]

export const document: UDocument = { attributes }

export default document
