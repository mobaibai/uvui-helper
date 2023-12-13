import { DocumentAttribute, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'direction',
    description: 'row：横向，column：竖向',
    type: 'string',
    default: 'row',
    value: 'row / column'
  },
  {
    name: 'current',
    description: '设置当前处于第几步',
    type: 'number / string',
    default: 0,
    value: '-'
  },
  {
    name: 'active-color',
    description: '激活状态颜色',
    type: 'string',
    default: '#3c9cff',
    value: '-'
  },
  {
    name: 'inactive-color',
    description: '未激活状态颜色',
    type: 'string',
    default: '#969799',
    value: '-'
  },
  {
    name: 'active-icon',
    description: '激活状态的图标',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'inactive-icon',
    description: '未激活状态图标',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'dot',
    description: '是否显示点类型',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '自定步骤状态内容'
  }
]

export const document: UDocument = { attributes, slots }

export default document
