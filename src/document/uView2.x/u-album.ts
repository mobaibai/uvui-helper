import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'urls',
    description: '图片地址列表，支持 array<string> / array<object>形式',
    type: 'array',
    default: '-',
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
    name: 'single-size',
    description: '单图时，图片长边的长度',
    type: 'string / number',
    default: 180,
    value: '-'
  },
  {
    name: 'multiple-size',
    description: '多图时，图片边长',
    type: 'string / number',
    default: 70,
    value: '-'
  },
  {
    name: 'space',
    description: '多图时，图片水平和垂直之间的间隔',
    type: 'string / number',
    default: 6,
    value: '-'
  },
  {
    name: 'single-mode',
    description: '单图时，图片缩放裁剪的模式',
    type: 'string',
    default: 'scaleToFill',
    value: '-'
  },
  {
    name: 'multiple-mode',
    description: '多图时，图片缩放裁剪的模式',
    type: 'string',
    default: 'aspectFill',
    value: AttributeConstants.imageMode
  },
  {
    name: 'max-count',
    description: '最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量',
    type: 'string / number',
    default: 9,
    value: '-'
  },
  {
    name: 'preview-full-image',
    description: '是否可以预览图片',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'row-count',
    description: '每行展示图片数量，如设置，singleSize和multipleSize将会无效',
    type: 'string / number',
    default: 3,
    value: '-'
  },
  {
    name: 'show-more',
    description: '超出maxCount时是否显示查看更多的提示',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'album-width',
    description: '某些特殊的情况下，需要让文字与相册的宽度相等，这里事件的形式对外发送',
    parameter: 'width'
  }
]

export const document: UDocument = { attributes, events }

export default document
