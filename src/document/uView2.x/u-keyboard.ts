import { DocumentAttribute, DocumentEvent, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'mode',
    description: '键盘的类型，number-数字键盘，card-身份证键盘，car-车牌号键盘',
    type: 'string',
    value: 'car / number / card',
    default: 'car'
  },
  {
    name: 'dot-disabled',
    description: '是否显示"."按键，只在mode=number时有效',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'tooltip',
    description: '是否显示键盘顶部工具条',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'show-tips',
    description: '是否显示工具条中间的提示',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'tips',
    description: '工具条中间的提示文字，见上方基本使用的说明',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'show-cancel',
    description: '是否显示工具条左边的"取消"按钮',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'show-confirm',
    description: '是否显示工具条右边的"完成"按钮',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'random',
    description: '是否打乱键盘按键的顺序',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'safe-area-inset-bottom',
    description: '是否开启底部安全区适配',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'close-on-click-overlay',
    description: '是否允许点击遮罩收起键盘（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'show',
    description: '控制键盘的弹出与收起',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'overlay',
    description: '是否显示遮罩',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'z-index',
    description: '弹出键盘的z-index值',
    type: 'string / number',
    value: '-',
    default: 1075
  },
  {
    name: 'confirm-text',
    description: '确认按钮的文字',
    type: 'string',
    value: '-',
    default: '确认'
  },
  {
    name: 'cancel-text',
    description: '取消按钮的文字',
    type: 'string',
    value: '-',
    default: '取消'
  },
  {
    name: 'custom-style',
    description: '自定义样式，对象形式',
    type: 'object',
    value: '-',
    default: {}
  },
  {
    name: 'auto-change',
    description: 'mode为car下，输入文字后，是否自动切换为字母模式',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    description: '内容将会显示键盘的工具条上面，可以结合MessageInput 验证码输入组件实现类似支付宝输入密码时，上方显示输入内容的功能'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '按键被点击(不包含退格键被点击)',
    parameter: '按键的值'
  },
  {
    name: 'close',
    description: '键盘关闭',
    parameter: ''
  },
  {
    name: 'confirm',
    description: '键盘顶部工具条右边的"完成"按钮被点击',
    parameter: ''
  },
  {
    name: 'cancel',
    description: '键盘顶部工具条左边的"取消"按钮被点击',
    parameter: ''
  },
  {
    name: 'backspace',
    description: '键盘退格键被点击',
    parameter: ''
  }
]

export const document: UDocument = { attributes, slots, events }

export default document
