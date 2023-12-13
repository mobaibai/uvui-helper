import { DocumentAttribute, DocumentMethod, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'loading',
    description: '是否加载中',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'message',
    description: '显示的文本',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'icon',
    description: '图标，或者绝对路径的图片',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'position',
    description: 'toast出现的位置',
    type: 'string',
    default: 'center',
    value: AttributeConstants.vAlign
  },
  {
    name: 'type',
    description: '主题类型',
    type: 'string',
    default: 'primary',
    value: AttributeConstants.type
  },
  {
    name: 'params',
    description: '跳转的参数',
    type: 'object',
    default: '-',
    value: '-'
  },
  {
    name: 'duration',
    description: '展示时间，单位ms',
    type: 'string / number',
    default: 2000,
    value: '-'
  },
  {
    name: 'complete',
    description: '执行完后的回调函数',
    type: 'function',
    default: null,
    value: '-'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'show',
    description: '显示toast，如需一进入页面就显示toast，请在onReady生命周期调用',
    parameter: '—'
  }
]

export const document: UDocument = { attributes, methods }

export default document
