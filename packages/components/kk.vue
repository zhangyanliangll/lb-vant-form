<template>
  <div class="page-container">123123123</div>
</template>

<script lang="ts" setup>
import { onBeforeMount, watch, reactive, nextTick } from 'vue'

// 组件名字
const pageName = ''

// defineOptions({
//   name: pageName,
// })

const props = defineProps({
  id: {
    type: String,
    default: () => '',
  },
})
const emit = defineEmits(['loadData'])

const detail: any = reactive({})

watch(
  () => props.id,
  (value: string) => {
    if (value) {
      loadData()
    }
  },
)

onBeforeMount(async () => {
  await init()
})

// 初始化
const init = async () => {
  await nextTick()
  await loadData()
  console.log('init')
}

// 加载数据
const loadData = async () => {
  // const api: any = ''
  // const result = await api({
  //   id: props.id,
  // })
  // Object.assign(detail, result)
  // console.log('loadData:', result)
}

// 提交
const submit = async () => {
  emit('loadData')
  console.log('submit:')
}

// 取消
const cancel = async () => {
  console.log('cancel:')
}

// 暴露方法属性
defineExpose({
  name: pageName,
  loadData,
  submit,
  cancel,
})
</script>

<style lang="scss" scoped>
.page-container {
}
</style>
