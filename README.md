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
