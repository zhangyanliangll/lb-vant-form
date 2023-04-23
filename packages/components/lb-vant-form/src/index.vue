<template>
  <Form class="lb-vant-form">
    <CellGroup inset>
      <template v-for="(item, index) in formGroup" :key="index">
        <Field
          v-model="value"
          name="picker"
          v-bind="item"
          @click="piack.onShow(item)"
        >
          <template
            #input
            v-if="['van-picker', 'van-calendar'].includes(item.targetElement as string)"
          >
            <div v-if="!value">
              {{ item.placeholder }}
            </div>
            <div v-else-if="item.targetElement === 'van-picker'">
              {{ value }}
            </div>
          </template>
        </Field>
      </template>
    </CellGroup>
  </Form>
  <!-- 弹层组件 -->
  <teleport :to="teleportId">
    <Popup v-model:show="piack.isShow" position="bottom">
      <Picker
        v-bind="piack.optionAlias"
        :columns="piack.columns"
        @confirm="piack.onConfirm"
        @cancel="piack.isShow = false"
      />
    </Popup>
  </teleport>
</template>

<script lang="ts" setup>
import { onBeforeMount, watch, reactive, nextTick, ref } from 'vue'
import { Form, CellGroup, Field, Popup, Picker } from 'vant'

// 组件名字
defineOptions({
  name: 'lb-vant-form',
})

const props = defineProps({
  id: {
    type: String,
    default: () => '',
  },
  teleportId: {
    type: String,
    default: '#app',
  },
  formGroup: {
    // type: any [],
    default: () => {
      return [
        {
          label: '房屋地址',
          value: 'propertyAddress',
          placeholder: '请输入房屋地址',
          clearable: true,
          rules: [],
        },
        {
          targetElement: 'van-picker',
          label: '支付方式',
          isLink: true,
          readonly: true,
          value: 'paymentMethod',
          placeholder: '请选择支付方式',
          optionAlias: {
            label: 'text',
            value: 'value',
          },
          options: [
            {
              text: '现金',
              value: 'CASH',
            },
            {
              text: '银行转账',
              value: 'TRANSFER',
            },
            {
              text: '第三方平台支付（支付宝、微信）',
              value: 'THIRD_PLATFORM',
            },
          ],
        },
      ]
    },
  },
  modelValue: {
    // 实际传参
    type: Object,
    default: () => {
      return {}
    },
  },
})

const emit = defineEmits(['update:modelValue', 'submit', 'cancel'])

const value = ref()

// 显示 选择 弹框
const piack = reactive<any>({
  key: '',
  isShow: false,
  optionAlias: {
    label: 'text',
    value: 'value',
  },
  columns: [],
  onShow({ value, options }: any) {
    piack.key = value
    piack.columns = options
    piack.isShow = true
  },
  onConfirm({ value, text }: any) {
    piack.isShow = false
  },
})

onBeforeMount(async () => {
  await init()
})

// 初始化
const init = async () => {}

// 提交
const submit = async () => {
  emit('submit')
  console.log('submit:')
}

// 取消
const cancel = async () => {
  emit('cancel')
  console.log('cancel:')
}

// 暴露方法属性
defineExpose({
  submit,
  cancel,
})
</script>

<style lang="scss" scoped>
.lb-vant-form {
  background-color: #fff;
  height: calc(100%);
  max-height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none; /*隐藏滚动条*/
    transition: all 0.5s linear;
  }
}

::v-deep {
  .van-cell-group--inset {
    margin: 0;
    .van-cell__title {
      width: 26%;
      flex: none;
      margin-right: var(--van-field-label-margin-right);
    }
    .van-cell__value {
      flex: 1;
    }
  }
}
</style>
