import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'urls',
    description: '头像图片组',
    type: 'array',
    default: [],
    value: '-'
  },
  {
    name: 'max-count',
    description: '最多展示的头像数量',
    type: 'string / number',
    default: 5,
    value: '-'
  },
  {
    name: 'shape',
    description: '头像形状',
    type: 'string',
    default: 'circle',
    value: AttributeConstants.shape
  },
  {
    name: 'mode',
    description: '图片裁剪模式',
    type: 'string',
    default: 'aspectFill',
    value: AttributeConstants.imageMode
  },
  {
    name: 'show-more',
    description: '超出maxCount时是否显示查看更多的提示',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'size',
    description: '头像大小',
    type: 'string / number',
    default: 40,
    value: '-'
  },
  {
    name: 'key-name',
    description: '指定从数组的对象元素中读取哪个属性作为图片地址',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'gap',
    description: '头像之间的遮挡比例（0.4代表遮挡40%）',
    type: 'string / number',
    default: 0.5,
    value: '-'
  },
  {
    name: 'extra-value',
    description: '需额外显示的值，如设置则优先于内部的urls.length - maxCount值',
    type: 'string / number',
    default: '-',
    value: '-'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '默认内容插槽'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'show-more',
    description: '头像组更多点击',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
