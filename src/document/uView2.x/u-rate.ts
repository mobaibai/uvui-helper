import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'v-model',
    description: '双向绑定选择星星的数量',
    type: 'string / number',
    default: 1,
    value: '-'
  },
  {
    name: 'count',
    description: '最多可选的星星数量',
    type: 'string / number',
    default: 5,
    value: '-'
  },
  {
    name: 'disabled',
    description: '是否禁止用户操作',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'readonly',
    description: '是否只读',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'size',
    description: '星星的大小，单位rpx',
    type: 'string / number',
    default: 18,
    value: '-'
  },
  {
    name: 'inactive-color',
    description: '未选中星星的颜色',
    type: 'string',
    default: '#b2b2b2',
    value: '-'
  },
  {
    name: 'active-color',
    description: '选中的星星颜色',
    type: 'string',
    default: '#FA3534',
    value: '-'
  },
  {
    name: 'gutter',
    description: '星星之间的距离',
    type: 'string / number',
    default: 4,
    value: '-'
  },
  {
    name: 'min-count',
    description: '最少选中星星的个数',
    type: 'string / number',
    default: 1,
    value: '-'
  },
  {
    name: 'allow-half',
    description: '是否允许半星选择',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'active-icon',
    description: '选中时的图标名，只能为uView的内置图标',
    type: 'string',
    default: 'star-fill',
    value: '-'
  },
  {
    name: 'inactive-icon',
    description: '未选中时的图标名，只能为uView的内置图标',
    type: 'string',
    default: 'star',
    value: '-'
  },
  {
    name: 'touchable',
    description: '是否可以通过滑动手势选择评分',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '选中的星星发生变化时触发',
    parameter: 'value：当前选中的星星的数量，如果使用v-model双向绑定方式，无需监听此事件'
  }
]

export const document: UDocument = { attributes, events }

export default document
