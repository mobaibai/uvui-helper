import { DocumentAttribute, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'offset-top',
    description: '吸顶时与顶部的距离，单位rpx',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'custom-nav-height',
    description: '导航栏高度，自定义导航栏时，需要传入此值',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'disabled',
    description: '是否禁用吸顶功能',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'bg-color',
    description: '组件背景颜色',
    type: 'string',
    default: '#ffffff',
    value: '-'
  },
  {
    name: 'z-index',
    description: '吸顶时的zIndex值，NVUE无效',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'index',
    description: '自定义标识，用于区分是哪一个组件',
    type: 'string / number',
    default: '-',
    value: '-'
  }
]

export const document: UDocument = { attributes }

export default document
