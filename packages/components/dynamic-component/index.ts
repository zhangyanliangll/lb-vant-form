import type { Plugin } from 'vue'
// 导入组件
import DynamicComponent from './src'

// 为组件提供 install 安装方法，供按需引入
DynamicComponent.install = function (app, options) {
  app.component(DynamicComponent.name, DynamicComponent)
} as Plugin

console.log('name', DynamicComponent.name)

// 默认导出组件
export default DynamicComponent
