import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'duration',
    description: '滑块移动一次所需的时间，单位ms',
    type: 'string / number',
    default: 300,
    value: '-'
  },
  {
    name: 'list',
    description: "标签数组，元素为对象，如[{name: '推荐'}]",
    type: 'array',
    default: '-',
    value: '-'
  },
  {
    name: 'line-color',
    description: '滑块颜色',
    type: 'string',
    default: '#3c9cff',
    value: '-'
  },
  {
    name: 'active-style',
    description: '菜单选择中时的样式',
    type: 'string / object',
    default: "{ color: '#303133' }",
    value: '-'
  },
  {
    name: 'inactive-style',
    description: '菜单非选中时的样式',
    type: 'string / object',
    default: "{ color: '#606266' }",
    value: '-'
  },
  {
    name: 'line-width',
    description: '滑块长度',
    type: 'string / number',
    default: 20,
    value: '-'
  },
  {
    name: 'line-height',
    description: '滑块高度',
    type: 'string / number',
    default: 3,
    value: '-'
  },
  {
    name: 'line-bg-size',
    description: '滑块背景显示大小，当滑块背景设置为图片时使用',
    type: 'string',
    default: 'cover',
    value: '-'
  },
  {
    name: 'item-style',
    description: '菜单item的样式',
    type: 'string / object',
    default: "{ height: '44px' }",
    value: '-'
  },
  {
    name: 'scrollable',
    description: '菜单是否可滚动',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'current',
    description: '当前选中标签的索引',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'key-name',
    description: '从list元素对象中读取的键名',
    type: 'string',
    default: 'name',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击事件',
    parameter: 'index: 标签索引值，item: 传入的其他值'
  },
  {
    name: 'change',
    description: '标签索引改变时触发(disalbed时不会触发)',
    parameter: 'index: 标签索引值，item: 传入的其他值'
  }
]

export const document: UDocument = { attributes, events }

export default document
