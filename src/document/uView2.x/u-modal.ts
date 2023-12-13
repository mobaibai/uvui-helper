import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'show',
    description: '是否显示模态框，请赋值给show',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'title',
    description: '标题内容',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'content',
    description: '模态框内容，如传入slot内容，则此参数无效',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'confirm-text',
    description: '确认按钮的文字',
    type: 'string',
    default: '确认',
    value: '-'
  },
  {
    name: 'cancel-text',
    description: '取消按钮的文字',
    type: 'string',
    default: '取消',
    value: '-'
  },
  {
    name: 'show-confirm-button',
    description: '是否显示确认按钮',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'show-cancel-button',
    description: '是否显示取消按钮',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'confirm-color',
    description: '确认按钮的颜色',
    type: 'string',
    default: '#2979ff',
    value: '-'
  },
  {
    name: 'cancel-color',
    description: '取消按钮的颜色',
    type: 'string',
    default: '#606266',
    value: '-'
  },
  {
    name: 'button-reverse',
    description: '对调确认和取消的位置',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'zoom',
    description: '是否开启缩放模式',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'async-close',
    description: '是否异步关闭，只对确定按钮有效，见上方说明',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'close-on-click-overlay',
    description: '是否允许点击遮罩关闭Modal（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'negative-top',
    description: '往上偏移的值，给一个负的marginTop，往上偏移，避免和键盘重合的情况，单位任意，数值则默认为rpx单位',
    type: 'string / number',
    default: '0',
    value: '-'
  },
  {
    name: 'width',
    description: 'modal宽度，不支持百分比，可以数值，px，rpx单位',
    type: 'string / number',
    default: '650rpx',
    value: '-'
  },
  {
    name: 'confirm-button-shape',
    description: '确认按钮的样式，如设置，将不会显示取消按钮',
    type: 'string',
    default: 'square',
    value: AttributeConstants.shape
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '传入自定义内容，一般为富文本，见上方说明'
  },
  {
    name: 'confirm-button',
    description: '传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'confirm',
    description: '点击确认按钮时触发',
    parameter: '-'
  },
  {
    name: 'cancel',
    description: '点击取消按钮时触发',
    parameter: '-'
  },
  {
    name: 'close',
    description: '点击遮罩关闭出发，closeOnClickOverlay为true有效',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
