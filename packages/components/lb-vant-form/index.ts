import type { Plugin, App } from 'vue'
// 导入组件
import LbVantForm from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
LbVantForm.install = function (app: App) {
  app.component(LbVantForm.name, LbVantForm)
} as Plugin

console.log('name', LbVantForm.name)

// 默认导出组件
export default LbVantForm
