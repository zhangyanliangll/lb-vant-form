import { createApp } from 'vue'
// import vColorPicker from '../packages/main'
import App from './App.vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

const app = createApp(App)

// app.use(vColorPicker)
app.directive('hljs', (el) => {
  const blocks = el.querySelectorAll('pre')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})

app.mount('#app')
