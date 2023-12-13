import { DocumentAttribute, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'color',
    description: '线条的颜色',
    type: 'string',
    default: '#d6d7d9',
    value: '-'
  },
  {
    name: 'length',
    description: '长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带rpx单位的值等',
    type: 'string / number',
    default: '100%',
    value: '-'
  },
  {
    name: 'direction',
    description: '线条的方向，row：横向，col：竖向',
    type: 'string',
    default: 'row',
    value: 'row / col'
  },
  {
    name: 'hairline',
    description: '是否显示细边框',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'margin',
    description: '线条与上下左右元素的间距，字符串形式，如"30rpx"、"20rpx 30rpx"，默认单位px',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'dashed',
    description: '是否虚线，false：实线，true：虚线',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  }
]

export const document: UDocument = { attributes }

export default document
