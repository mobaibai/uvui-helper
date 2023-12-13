import { DocumentAttribute, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'show',
    description: '显示与否',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'color',
    description: '图标颜色',
    type: 'string',
    value: '-',
    default: "color['u-tips-color']"
  },
  {
    name: 'text-color',
    description: '提示文本颜色',
    type: 'string',
    value: '-',
    default: "color['u-tips-color']"
  },
  {
    name: 'vertical',
    description: '图标和文字是否垂直排列',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'mode',
    description: '模式选择',
    type: 'string',
    value: 'circle / semicircle',
    default: 'circle'
  },
  {
    name: 'size',
    description: '加载图标的大小，单位px',
    type: 'string / number',
    value: '-',
    default: 24
  },
  {
    name: 'text-size',
    description: '加载文字的大小，单位px',
    type: 'string / number',
    value: '-',
    default: 15
  },
  {
    name: 'text',
    description: '文字内容',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'timing-function',
    description: '指定animation-timing-function的css属性，但只支持mode为circle或semicircle才有效',
    type: 'string',
    value: '-',
    default: 'ease-in-out'
  },
  {
    name: 'duration',
    description: '动画执行周期时间，单位ms',
    type: 'string / number',
    value: '-',
    default: 1200
  },
  {
    name: 'inactive-color',
    description: '图标的暗边颜色, mode为circle 模式有效',
    type: 'string',
    value: '-',
    default: 'transparent'
  }
]

export const document: UDocument = { attributes }

export default document
