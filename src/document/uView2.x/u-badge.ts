import { DocumentAttribute, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'
// import { UDocument } from '@/document'
// import { DocumentAttribute } from '@/document'
// import { AttributeConstants } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description: '主题类型',
    type: 'string',
    value: AttributeConstants.type,
    default: 'error'
  },
  {
    name: 'is-dot',
    description: '不展示数字，只有一个小点',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'value',
    description: '展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为0且show-zero为false时隐藏',
    type: 'string / number',
    value: '-',
    default: '-'
  },
  {
    name: 'show',
    description: '组件是否显示',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'max',
    description: "最大值，超过最大值会显示 '{max}+'",
    type: 'string / number',
    value: '-',
    default: 99
  },
  {
    name: 'show-zero',
    description: '当数值为 0 时，是否展示 Badge',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'bg-color',
    description: '背景颜色，优先级比type高，如设置，type参数会失效',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'color',
    description: '字体颜色',
    type: 'string',
    value: '-',
    default: '#ffffff'
  },
  {
    name: 'shape',
    description: '徽标形状，circle-四角均为圆角，horn-左下角为直角',
    type: 'string',
    value: 'circle / horn',
    default: 'circle'
  },
  {
    name: 'number-type',
    description: '置数字的显示方式，详细见上方文档',
    type: 'string',
    value: 'overflow / ellipsis / limit',
    default: 'overflow'
  },
  {
    name: 'offset',
    description: '设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效',
    type: 'array',
    value: '-',
    default: '-'
  },
  {
    name: 'inverted',
    description: '是否反转背景和字体颜色',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'absolute',
    description: '组件是否绝对定位，为true时，offset参数才有效',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  }
]

export const document: UDocument = { attributes }

export default document
