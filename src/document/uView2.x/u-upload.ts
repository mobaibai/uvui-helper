import { DocumentAttribute, DocumentEvent, DocumentMethod, DocumentSlot, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'accept',
    description: '接受的文件类型，file只支持H5（只有微信小程序才支持把accept配置为all、media）',
    type: 'string',
    default: 'image',
    value: 'all / media / image / file / video'
  },
  {
    name: 'capture',
    description: '图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头',
    type: 'string / array',
    default: "['album', 'camera']",
    value: '-'
  },
  {
    name: 'compressed',
    description: '当accept为video时生效，是否压缩视频，默认为true',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'camera',
    description: '当accept为video时生效，可选值为back或front',
    type: 'string',
    default: 'back',
    value: '-'
  },
  {
    name: 'max-duration',
    description: '当accept为video时生效，拍摄视频最长拍摄时间，单位秒',
    type: 'number',
    default: 60,
    value: AttributeConstants.bool
  },
  {
    name: 'upload-icon',
    description: '上传区域的图标，只能内置图标',
    type: 'string',
    default: 'camera-fill',
    value: '-'
  },
  {
    name: 'upload-icon-color',
    description: '上传区域的图标的颜色',
    type: 'string',
    default: '#D3D4D6',
    value: '-'
  },
  {
    name: 'use-before-read',
    description: '是否启用(显示/隐藏)组件',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'preview-full-image',
    description: '启用全屏预览',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'max-count',
    description: '最大选择图片的数量',
    type: 'string / number',
    default: 52,
    value: '-'
  },
  {
    name: 'disabled',
    description: '是否启用(显示/隐藏)组件',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'image-mode',
    description: '预览上传的图片时的裁剪模式，和image组件mode属性一致',
    type: 'string',
    default: 'aspectFill',
    value: AttributeConstants.imageMode
  },
  {
    name: 'name',
    description: '标识符，可以在回调函数的第二项参数中获取',
    type: 'string',
    default: 'file',
    value: '-'
  },
  {
    name: 'size-type',
    description: 'original 原图，compressed 压缩图，默认二者都有，H5无效',
    type: 'array<string>',
    default: "['original', 'compressed']",
    value: '-'
  },
  {
    name: 'multiple',
    description: '是否开启图片多选，部分安卓机型不支持',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'deletable',
    description: '是否显示删除图片的按钮',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'max-size',
    description: '选择单个文件的最大大小，单位B(byte)，默认不限制',
    type: 'string / number',
    default: 'number.MAX_VALUE',
    value: '-'
  },
  {
    name: 'file-list',
    description: '显示已上传的文件列表',
    type: 'array',
    default: '-',
    value: '-'
  },
  {
    name: 'upload-text',
    description: '上传区域的提示文字',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'width',
    description: '内部预览图片区域和选择图片按钮的区域宽度，单位rpx，不能是百分比，或者auto',
    type: 'string / number',
    default: 80,
    value: '-'
  },
  {
    name: 'height',
    description: '内部预览图片区域和选择图片按钮的区域高度，单位rpx，不能是百分比，或者auto',
    type: 'string / number',
    default: 80,
    value: '-'
  },
  {
    name: 'preview-image',
    description: '是否在上传完成后展示预览图',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'afterRead',
    description: '读取后的处理函数',
    parameter: '—'
  },
  {
    name: 'beforeRead',
    description: '读取前的处理函数',
    parameter: '—'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '自定义上传样式'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'after-read',
    description: '读取后的处理函数',
    parameter: '(file, lists, name)，错误信息'
  },
  {
    name: 'before-read',
    description: '读取前的处理函数',
    parameter: '(file, lists, name)，错误信息'
  },
  {
    name: 'oversize',
    description: '图片大小超出最大允许大小',
    parameter: '(file, lists, name), name为通过props传递的index参数'
  },
  {
    name: 'click-preview',
    description: '全屏预览图片时触发',
    parameter: '(url, lists, name)，url为当前选中的图片地址，index为通过props传递的index参数'
  },
  {
    name: 'delete',
    description: '删除图片',
    parameter: '传递index 回调 event 参数 包含index，file，name'
  }
]

export const document: UDocument = { attributes, methods, slots, events }

export default document
