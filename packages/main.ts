import type { Plugin, App } from 'vue'

// 导入表单组件
import LbVantForm from './components/lb-vant-form/src/index.vue'

// 组件列表
const components = [LbVantForm]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install: Plugin['install'] = function (app: App) {
  // 遍历注册全局组件
  components.map((component) => app.component(component.name, component))
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  LbVantForm,
}
