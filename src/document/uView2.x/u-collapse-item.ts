import { DocumentAttribute, UDocument } from '@/document'
import { AttributeConstants } from '@/document/constants'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '面板标题',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'value',
    description: '标题右侧内容',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'label',
    description: '标题下方的描述信息',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'disabled',
    description: '面板是否可以打开或收起',
    type: 'boolean',
    default: false,
    value: AttributeConstants.bool
  },
  {
    name: 'is-link',
    description: '是否展示右侧箭头并开启点击反馈',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'clickable',
    description: '是否开启点击反馈',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'border',
    description: '是否显示内边框',
    type: 'boolean',
    default: true,
    value: AttributeConstants.bool
  },
  {
    name: 'align',
    description: '标题的对齐方式',
    type: 'string',
    default: 'left',
    value: AttributeConstants.hAlign
  },
  {
    name: 'name',
    description: '唯一标识符，如不设置，默认用当前collapseItem的索引值',
    type: 'string / number',
    default: '-',
    value: '-'
  },
  {
    name: 'icon',
    description: '标题左侧图片，可为绝对路径的图片或内置图标',
    type: 'string',
    default: '-',
    value: '-'
  },
  {
    name: 'duration',
    description: '面板展开收起的过渡时间，单位ms',
    type: 'number',
    default: 300,
    value: '-'
  }
]

export const document: UDocument = { attributes }

export default document
