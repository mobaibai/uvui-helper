import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'show',
    description: '是否展示',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'title',
    description: '设置标题',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'description',
    description: '选项上方的描述信息，见上方文档示例',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'actions',
    description: '按钮的文字数组，见上方文档示例',
    type: 'array<object>',
    default: '[]',
    value: '-'
  },
  {
    name: 'cancel-text',
    description: '取消按钮的文字，不为空时显示按钮',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'close-on-click-action',
    description: '点击某个菜单项时是否关闭弹窗，见上方文档示例',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'safe-area-inset-bottom',
    description: '是否开启底部安全区适配',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'open-type',
    description: '小程序的打开方式',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'close-on-click-overlay',
    description: '点击遮罩是否允许关闭，见上方文档示例（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'round',
    description: '圆角值，默认无圆角',
    type: 'string / number',
    default: 0,
    value: '-'
  },
  {
    name: 'lang',
    description: '指定返回用户信息的语言，zh_CN：简体中文，zh_TW：繁体中文，en；英文',
    type: 'string',
    default: 'en',
    value: 'zh_CN / zh_TW / en'
  },
  {
    name: 'session-from',
    description: '会话来源，open-type="contact"时有效。只微信小程序有效',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'send-message-title',
    description: '会话内消息卡片标题，openType="contact"时有效',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'send-message-path',
    description: '会话内消息卡片点击跳转小程序路径，openType="contact"时有效',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'send-message-img',
    description: '会话内消息卡片图片，openType="contact"时有效',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'show-message-card',
    description: '是否显示会话内消息卡片，设置此参数为true，用户进入客服会话会在右下角显示“可能要发送的小程序”提示，用户点击后可以快速发送小程序消息，openType="contact"时有效',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'app-parameter',
    description: '打开APP时，向APP传递的参数，openType=launchApp时有效',
    type: 'string',
    default: '-',
    value: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'select',
    description: '点击ActionSheet列表项时触发',
    parameter: '-'
  },
  {
    name: 'close',
    description: '点击取消按钮时触发',
    parameter: '-'
  },
  {
    name: 'getuserinfo',
    description: '用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，openType="getUserInfo"时有效',
    parameter: 'detail'
  },
  {
    name: 'contact',
    description: '客服消息回调，openType="contact"时有效',
    parameter: '-'
  },
  {
    name: 'getphonenumber',
    description: '获取用户手机号回调，openType="getPhoneNumber"时有效',
    parameter: '-'
  },
  {
    name: 'error',
    description: '当使用开放能力时，发生错误的回调，openType="error"时有效',
    parameter: '-'
  },
  {
    name: 'launchapp',
    description: '打开 APP 成功的回调，openType="launchApp"时有效',
    parameter: '-'
  },
  {
    name: 'opensetting',
    description: '在打开授权设置页后回调，openType="openSetting"时有效',
    parameter: '-'
  }
]

export const document: UDocument = { attributes, events }

export default document
