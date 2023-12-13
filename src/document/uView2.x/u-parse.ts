import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bg-color',
    description: '背景颜色，只适用与APP-PLUS-NVUE',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'content',
    description: '要显示的富文本字符串',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'copy-link',
    description: '是否允许外部链接被点击时自动复制',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'domain',
    description: '主域名，设置后将给链接自动拼接上主域名或协议名',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'error-img',
    description: '图片出错时的占位图链接',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'lazy-load',
    description: '是否开启图片懒加载，nvue不支持此属性',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'loading-img',
    description: '图片加载完成前的占位图，详见占位图',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'pause-video',
    description: '是否在播放一个视频时自动暂停其它视频',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'preview-img',
    description: '是否开启图片被点击时自动预览',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'scroll-table',
    description: '是否自动给table添加一个滚动层（使表格可以单独横向滚动）',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'selectable',
    description: '是否开启长按复制内容',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'set-title',
    description: '是否自动将title标签的内容设置到页面标题',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'show-img-menu',
    description: '是否开启图片被长按时显示菜单',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'tag-style',
    description: '设置标签的默认样式',
    type: 'object',
    default: '-',
    value: '-'
  },
  {
    name: 'use-anchor',
    description: '是否使用页面内锚点',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'load',
    description: 'dom 加载完成时触发',
    parameter: '所有节点被添加到节点树中时触发，无返回值，可以调用 api'
  },
  {
    name: 'ready',
    description: '渲染完成时触发',
    parameter: '返回 boundingClientRect 的查询结果（包含宽高、位置等信息），所有图片（除懒加载）加载完成时才会触发，图片较大时可能 延时较长'
  },
  {
    name: 'error',
    description: '出错时触发',
    parameter: '返回一个 object，其中 source 是错误来源，errMsg 为错误信息，target 包含出错标签的具体信息'
  },
  {
    name: 'img-tap',
    description: '图片被点击时触发',
    parameter: '返回一个 object，其中 src 是图片链接，ignore 是一个函数，在事件中调用将不进行预览；可用于阻挡 onShow 的调用'
  },
  {
    name: 'link-tap',
    description: '在链接被点击时触发',
    parameter: '返回一个 object，其中包含了被点击的 a 标签的所有属性，ignore 是一个函数，在事件中调用后将不自动跳转/复制；可在该事件中进行下载文档等进一步操作'
  }
]

export const document: UDocument = { attributes, events }

export default document
