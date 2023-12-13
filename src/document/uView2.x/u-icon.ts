import { DocumentAttribute, DocumentEvent, UDocument } from '@/document'
// import { UDocument } from '@/document'
// import { DocumentAttribute } from '@/document'
// import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'name',
    description: '图标名称，见[示例图标集](https://www.uviewui.com/components/icon.html)，如名称带有/，会被认为是图片图标',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'color',
    description: '图标颜色',
    type: 'string',
    value: '-',
    default: "color['u-content-color']"
  },
  {
    name: 'size',
    description: '图标字体大小，单位默认px',
    type: 'string / number',
    value: '—',
    default: '16px'
  },
  {
    name: 'bold',
    description: '是否显示粗体',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'index',
    description: '一个用于区分多个图标的值，点击图标时通过click事件传出',
    type: 'string / number',
    value: '—',
    default: '-'
  },
  {
    name: 'hover-class',
    description: '图标按下去的样式类，用法同uni的view组件的hover-class参数，详见：hover-class',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'custom-prefix',
    description: '自定义字体图标库时，需要写上此值，详见：[扩展自定义图标库](https://www.uviewui.com/guide/customIcon.html)',
    type: 'string',
    value: '—',
    default: 'uicon'
  },
  {
    name: 'label',
    description: '图标右侧/下方的label文字',
    type: 'string / number',
    value: '—',
    default: '-'
  },
  {
    name: 'label-pos',
    description: 'label相对于图标的位置',
    type: 'string',
    value: '—',
    default: 'right'
  },
  {
    name: 'label-size',
    description: 'label字体大小，单位默认px',
    type: 'string / number',
    value: '—',
    default: '15px'
  },
  {
    name: 'label-color',
    description: 'label字体颜色',
    type: 'string',
    value: '—',
    default: "color['u-content-color']"
  },
  {
    name: 'space',
    description: 'label与图标的距离，单位默认px',
    type: 'string / number',
    value: '—',
    default: '3px'
  },
  {
    name: 'img-mode',
    description: '图片裁剪、缩放的模式，image组件原生属性，详见：image',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'width',
    description: 'name为图片路径时图片的宽度，单位默认px',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'height',
    description: 'name为图片路径时图片的高度，单位默认px',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'top',
    description: '图标到顶部的距离，如果某些场景，如果图标没有垂直居中，可以调整此参数，单位默认px',
    type: 'string / number',
    value: '—',
    default: 0
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '点击图标时触发',
    parameter: 'index: 通过props传递的index值'
  }
]

export const document: UDocument = { attributes, events }

export default document
