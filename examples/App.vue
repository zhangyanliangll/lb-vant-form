<template>
  <div id="app">
    <div class="page-header">
      <h1>lb-vant-form</h1>
      <h2>基于 Vant 4.0 二次封装的表单组件</h2>
      <a
        href="https://github.com/zhangyanliangll/lb-vant-form"
        class="btn"
        target="_blank"
        >View on GitHub</a
      >
    </div>
    <div class="page-content" v-hljs>
      <h2>Demo</h2>
      <div class="lb-vant-form-container">
        <lb-vant-form />
      </div>
      <h2>特点</h2>
      <ol>
        <li>简单易用，解耦</li>
        <li>提供以 npm 的形式安装提供全局组件</li>
      </ol>
      <h2>安装</h2>
      <pre>$ npm install lb-vant-form -S</pre>
      <h2>使用</h2>
      <h3>在 `main.js` 文件中引入插件并注册</h3>
      <pre>
            # main.js
            import LbVantForm from 'lb-vant-form'
            Vue.use(LbVantForm)
        </pre
      >
      <h3>在项目中使用 LbVantForm</h3>
      <pre>
    &lt;template&gt;
        &lt;lb-vant-form  v-model=&quot;color&quot; /&gt;
      &lt;/template&gt;
      &lt;script&gt;
        export default {
          data () {
            return {
              color: &#x27;#ff0000&#x27;
            }
          }
        }
      &lt;/script&gt;</pre
      >
      <h2>选项</h2>
      <p>你可以通过在所在的元素上设置以下属性来配置<code>color-picker</code></p>
      <ol>
        <li>
          <code>defaultColor</code>：默认颜色，如<code
            >defaultColor="#ff0000"</code
          >
        </li>
        <li><code>disabled</code>：禁用状态，如<code>disabled=true</code></li>
      </ol>
      <h2>事件</h2>
      <p><code>change</code>颜色值改变的时候触发</p>
      <pre>
          &lt;lb-vant-form v-model=&quot;color&quot; v-on:change=&quot;headleChangeColor&quot;/&gt;
      </pre>
    </div>
    <div class="page-footer">
      lb-vant-form 插件由<a
        href="https://zhangyanliangll.github.io/about/"
        target="_blank"
        >Tiankui Star</a
      >编写
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style lang="scss">
@import 'vant/lib/index.css';
@import 'assets/main';

.lb-vant-form-container {
  width: 350px;
  height: 600px;
  background: red;
}
</style>
