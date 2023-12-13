import { DocumentAttribute, UDocument } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'length',
    description: '轮播的长度',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'current',
    description: '当前处于活动状态的轮播的索引',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'indicator-active-color',
    description: '指示器非激活颜色',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'indicator-inactive-color',
    description: '指示器的激活颜色',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'indicator-style',
    description: '指示器的形式',
    type: 'string',
    default: 'line',
    value: 'dot / line'
  }
]

export const document: UDocument = { attributes }

export default document
