import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'show',
    description: '控制打开或者关闭',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'index',
    description: '标识符，如果是vFor，可用index索引',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'auto-close',
    description: '是否自动关闭其他swipe按钮组',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'threshold',
    description: '滑动距离阈值，只有大于此值，才被认为是要打开菜单',
    type: 'number',
    default: 20,
    value: '-'
  },
  {
    name: 'options',
    description: '右侧按钮内容',
    type: 'array',
    default: [],
    value: '-'
  },
  {
    name: 'duration',
    description: '动画过渡时间，单位ms',
    type: 'string / number',
    default: 300,
    value: '-'
  },
  {
    name: 'name',
    description: '标识符，如果是vFor，可用index索引值',
    type: 'string / number',
    default: '-',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '按钮被点击时触发',
    parameter: 'name: props参数name的值，index: 第几个按钮被点击'
  }
]

export const document: UDocument = { attributes, events }

export default document
