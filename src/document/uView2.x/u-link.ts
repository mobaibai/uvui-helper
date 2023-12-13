import { DocumentAttribute, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'color',
    description: '文字颜色',
    type: 'string',
    default: "color['u-primary']",
    value: '-'
  },
  {
    name: 'font-size',
    description: '字体大小，默认单位px',
    type: 'string / number',
    default: 15,
    value: '-'
  },
  {
    name: 'under-line',
    description: '是否显示下划线',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'href',
    description: '跳转的链接，要带上http(s)',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'mp-tips',
    description: '各个小程序平台把链接复制到粘贴板后的提示语',
    type: 'string',
    default: '链接已复制，请在浏览器打开',
    value: '-'
  },
  {
    name: 'line-color',
    description: '下划线颜色，默认同color参数颜色',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'text',
    description: '超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色',
    type: 'string',
    default: '-',
    value: '-'
  }
]

export const document: UDocument = { attributes }

export default document
