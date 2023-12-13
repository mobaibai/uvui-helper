/**
 * 文档属性类型
 *
 * @export
 * @interface DocumentAttribute
 */
export interface DocumentAttribute {
  // 参数名称
  name: string
  // 说明
  description: string
  // 类型
  type: string
  // 可选值
  value: string
  // 默认值
  default: any
}

/**
 * 文档事件类型
 *
 * @export
 * @interface DocumentEvent
 */
export interface DocumentEvent {
  /**
   * 事件名称
   */
  name: string
  /**
   * 说明
   */
  description: string
  /**
   * 参数
   */
  parameter: string
}

/**
 * 文档方法类型
 *
 * @export
 * @interface DocumentMethod
 */
export interface DocumentMethod {
  // 方法名称
  name: string
  // 说明
  description: string
  // 参数
  parameter: string
}

/**
 * 文档插槽类型
 *
 * @export
 * @interface DocumentSlot
 */
export interface DocumentSlot {
  // 插槽名称
  name: string
  // 说明
  description: string
}

/**
 * 文档范围方法类型
 *
 * @export
 * @interface DocumentScopedSlot
 */
export type DocumentScopedSlot = DocumentSlot

/**
 * 基础文档接口
 *
 * @export
 * @interface BaseDocument
 */
export interface BaseDocument {
  /**
   * 属性
   */
  attributes?: DocumentAttribute[]
  /**
   * 方法
   */
  methods?: DocumentMethod[]
  /**
   * 事件
   */
  events?: DocumentEvent[]
  /**
   * 作用域插槽
   */
  scopedSlots?: DocumentScopedSlot[]
  /**
   * 插槽
   */
  slots?: DocumentSlot[]
}

/**
 * UViewUI文档类型
 * 用于扩展具有其他字段的文档类型
 *
 * @export
 * @interface UDocument
 * @extends {BaseDocument}
 */
export interface UDocument extends BaseDocument {
  pickerOptions?: DocumentAttribute[]
  shortcuts?: DocumentAttribute[]
  selectOptions?: DocumentAttribute[]
  props?: DocumentAttribute[]
}

/**
 * 本地化文档类型
 *
 * @export
 * @type LocalDocument
 */
export type LocalDocument = Record<string, Record<string, any>>

import Version1Document from './uView1.x'
import Version2Document from './uView2.x'

// 统一导出文档
export const localDocument: LocalDocument = {
  uView1: Version1Document,
  uView2: Version2Document
}
