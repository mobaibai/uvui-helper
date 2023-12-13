import { DocumentAttribute, DocumentEvent, DocumentMethod, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value',
    description: '当前展开面板的name，非手风琴模式：[<string|number>]，手风琴模式：string|number',
    type: 'string / number / array',
    default: '—',
    value: '-'
  },
  {
    name: 'accordion',
    description: '是否手风琴模式',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'border',
    description: '是否显示外边框',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'init',
    description: '重新初始化内部高度计算，用于异步获取内容的情形，请结合this.$nextTick()使用',
    parameter: '—'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '主体部分的内容'
  },
  {
    name: 'title',
    description: '标题内容'
  },
  {
    name: 'icon',
    description: 'icon'
  },
  {
    name: 'value',
    description: '右侧value'
  },
  {
    name: 'right-icon',
    description: '右侧icon'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)',
    parameter: 'activeNames: string | array'
  },
  {
    name: 'open',
    description: '当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)',
    parameter: 'activeNames: string | array'
  },
  {
    name: 'close',
    description: '当前激活面板关闭时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)',
    parameter: 'activeNames: string | array'
  }
]

export const document: UDocument = { attributes, methods, slots, events }

export default document
