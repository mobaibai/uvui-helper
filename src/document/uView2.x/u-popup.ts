import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'show',
    description: '是否展示弹窗',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'overlay',
    description: '是否显示遮罩',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'mode',
    description: '弹出方向',
    type: 'string',
    default: 'bottom',
    value: 'top / right / bottom / center'
  },
  {
    name: 'duration',
    description: '遮罩打开或收起的动画过渡时间，单位ms',
    type: 'string / number',
    default: 300,
    value: '-'
  },
  {
    name: 'closeable',
    description: '是否显示关闭图标',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'overlay-style',
    description: "遮罩自定义样式，一般用于修改遮罩颜色，如：{background: 'rgba(3, 100, 219, 0.5)'}",
    type: 'object / string',
    default: '-',
    value: '-'
  },
  {
    name: 'overlay-opacity',
    description: '遮罩透明度，0-1之间，勿与overlayStyle共用',
    type: 'number / string',
    default: 0.5,
    value: '-'
  },
  {
    name: 'close-on-click-overlay',
    description: '点击遮罩是否关闭弹窗（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'z-index',
    description: '弹出层的zIndex值',
    type: 'number / string',
    default: 10075,
    value: '-'
  },
  {
    name: 'safe-area-inset-bottom',
    description: '是否为留出底部安全距离',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'safe-area-inset-top',
    description: '是否留出顶部安全距离（状态栏高度）',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'close-icon-pos',
    description: '自定义关闭图标位置，topLeft为左上角，topRight为右上角，bottomLeft为左下角，bottomRight为右下角',
    type: 'string',
    default: 'top-right',
    value: 'top-left / top-right / bottom-left / bottom-right'
  },
  {
    name: 'round',
    description: "设置圆角值，仅对'mode = top	bottom cener'有效",
    type: 'number / string',
    default: '',
    value: ''
  },
  {
    name: 'zoom',
    description: '当mode=center时 是否开启缩放',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'bg-color',
    description: '背景色，一般用于特殊弹窗内容场景，设置为transparent可去除默认的白色背景',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'custom-style',
    description: '用户自定义样式',
    type: 'object',
    default: '-',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'open',
    description: '弹出层打开',
    parameter: '-'
  },
  {
    name: 'close',
    description: '弹出层收起',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
