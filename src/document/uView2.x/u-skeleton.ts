import { DocumentAttribute, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'loading',
    description: '是否显示骨架占位图，设置为false将会展示子组件内容',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'animate',
    description: '是否开启动画效果',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'rows',
    description: '段落占位图行数',
    type: 'number / string',
    default: 0,
    value: '-'
  },
  {
    name: 'rows-width',
    description: '段落占位图的宽度，可以为百分比，数值，带单位字符串等，可通过数组传入指定每个段落行的宽度',
    type: 'string / array / number',
    default: '100%',
    value: '-'
  },
  {
    name: 'rows-height',
    description: '段落的高度',
    type: 'string / array / number',
    default: 18,
    value: '-'
  },
  {
    name: 'title',
    description: '是否展示标题占位图',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'title-width',
    description: '标题的宽度',
    type: 'string / number',
    default: '50%',
    value: '-'
  },
  {
    name: 'title-height',
    description: '标题的高度',
    type: 'string / number',
    default: 18,
    value: '-'
  },
  {
    name: 'avatar',
    description: '是否展示头像占位图',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'avatar-size',
    description: '头像占位图大小',
    type: 'string / number',
    default: 32,
    value: '-'
  },
  {
    name: 'avatar-shape',
    description: '头像占位图的形状，circle：圆形，square：方形',
    type: 'string',
    default: 'circle',
    value: AttributeConstants.shape
  }
]

export const document: UDocument = { attributes }

export default document
