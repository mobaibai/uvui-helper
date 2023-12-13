import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'hairline',
    description: '是否显示按钮的细边框',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'size',
    description: '按钮的大小',
    type: 'string',
    value: AttributeConstants.size,
    default: 'normal'
  },
  {
    name: 'type',
    description: '按钮的样式类型',
    type: 'string',
    value: AttributeConstants.type,
    default: '—'
  },
  {
    name: 'shape',
    description: '按钮外观形状，见上方说明',
    type: 'string',
    value: AttributeConstants.shape,
    default: 'square'
  },
  {
    name: 'plain',
    description: '按钮是否镂空，背景色透明',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'disabled',
    description: '是否禁用状态',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'loading',
    description: '按钮名称前是否带 loading 图标',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: false
  },
  {
    name: 'loading-text',
    description: '加载中提示文字',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'loading-mode',
    description: '加载状态图标类型',
    type: 'string',
    value: '-',
    default: 'spinner'
  },
  {
    name: 'loading-size',
    description: '加载图标大小',
    type: 'string / number',
    value: '-',
    default: 15
  },
  {
    name: 'open-type',
    description: '开放能力，具体请看uniapp稳定关于button组件部分说明',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'form-type',
    description: '用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'app-pramerter',
    description: '打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'hover-stop-propagation',
    description: '指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true）',
    type: 'boolean',
    value: AttributeConstants.bool,
    default: true
  },
  {
    name: 'lang',
    description: '指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文',
    type: 'string',
    value: '-',
    default: 'en'
  },
  {
    name: 'session-from',
    description: '会话来源，openType="contact"时有效',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'send-message-title',
    description: '会话内消息卡片标题，openType="contact"时有效',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'send-message-path',
    description: '会话内消息卡片点击跳转小程序路径，openType="contact"时有效',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'send-message-img',
    description: '会话内消息卡片图片，openType="contact"时有效',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'send-message-card',
    description: '是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'data-name',
    description: '额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'throttle-time',
    description: '节流，一定时间内只能触发一次，单位毫秒',
    type: 'string / number',
    value: '-',
    default: 0
  },
  {
    name: 'hover-start-time',
    description: '按住后多久出现点击态，单位毫秒',
    type: 'string / number',
    value: '-',
    default: 0
  },
  {
    name: 'hover-stay-time',
    description: '手指松开后点击态保留时间，单位毫秒',
    type: 'string / number',
    value: '-',
    default: 200
  },
  {
    name: 'text',
    description: '按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'icon',
    description: '按钮图标',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'icon-color',
    description: '按钮颜色',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'color',
    description: '按钮颜色，支持传入linear-gradient渐变色',
    type: 'string',
    value: '—',
    default: '-'
  }
]

export const events: DocumentEvent[] = [
  { name: 'click', description: '按钮点击，请勿使用@tap点击事件，微信小程序无效，返回值为点击事件及参数', parameter: '-' },
  { name: 'getphonenumber', description: 'open-type="getPhoneNumber"时有效', parameter: '-' },
  { name: 'getuserinfo', description: '用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo', parameter: '-' },
  { name: 'error', description: '当使用开放能力时，发生错误的回调', parameter: '-' },
  { name: 'opensetting', description: '在打开授权设置页并关闭后回调', parameter: '-' },
  { name: 'launchapp', description: '打开 APP 成功的回调', parameter: '-' }
]

export const document: UDocument = { attributes, events }

export default document
