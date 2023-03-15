# lbVantForm

> 基于 Vant 的表单插件

## 安装

```bash
# vue3
npm install lb-vant-form -S
```

## 使用

### vue3 使用

在`main.ts`文件中引入并注册

```ts
import lbVantForm from 'lb-vant-form'
const app = createApp(App)
app.use(lbVantForm)
```

在页面中使用

```vue
<script lang="ts" setup>
import { ref } from 'vue'
</script>
<template>
  <lb-vant-form></lb-vant-form>
</template>
```

## 特点

1. 简单易用，减少代码的重复书写，解耦;
2. 提供以 `npm` 的形式安装提供全局组件;
3. 在支持 html5 input[type='color'] 的浏览器实现了「更多颜色」的功能

## 选项

你可以通过在所在的元素上设置以下属性来配置`color-picker`

1. `defaultColor`：默认颜色，如`defaultColor="#ff0000"`
2. `disabled`：禁用状态，如`disabled=true`

## 事件

`change`颜色值改变的时候触发

```js
<lb-vant-form />
```
