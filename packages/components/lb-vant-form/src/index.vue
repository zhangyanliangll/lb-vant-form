<template>
  <Form class="lb-vant-form">
    <CellGroup inset>
      <template v-for="(item, index) in formGroup" :key="index">
        <Field
          v-model="value1"
          name="picker"
          v-bind="item"
          @click="onShow(item)"
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
    <component
      :is="targetElement === 'van-picker' ? Popup : 'div'"
      v-model:show="isShow"
      position="bottom"
    >
      <component
        :ref="valueKey"
        :is="Elements[targetElement]"
        :columns="options"
        v-model:show="isShow"
        v-bind="optionProps"
        v-on="targetEvent || {}"
        @confirm="onConfirm"
        @cancel="isShow = false"
      />
    </component>
    <!-- <Popup
      v-model:show="piack.isShow"
      position="bottom"
      v-if="piack.targetElement === 'van-picker'"
    >
      <Picker
        :ref="piack.key"
        v-bind="{
          ...piack.optionAlias,
          ...piack.optionProps,
        }"
        :columns="piack.options"
        @confirm="piack.onConfirm"
        @cancel="piack.isShow = false"
        v-on="piack.targetEvent || {}"
      />
    </Popup>-->
    <!-- <template>
      <component
        v-if="piack.targetElement"
        :ref="piack.key"
        :is="Elements[piack.targetElement]"
        v-model:show="piack.isShow"
        v-bind="piack.optionProps"
        v-on="piack.targetEvent || {}"
        @confirm="piack.onConfirm"
        @cancel="piack.isShow = false"
      />
    </template> -->
  </teleport>
</template>

<script lang="ts" setup>
import {
  onBeforeMount,
  watch,
  reactive,
  nextTick,
  ref,
  toRefs,
  markRaw,
} from 'vue'
import { Form, CellGroup, Field, Popup } from 'vant'
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
        {
          targetElement: 'van-calendar',
          label: '交付日期',
          isLink: true,
          readonly: true,
          value: 'handoverDate',
          placeholder: '请选择交付日期',
          optionProps: {
            'value-format': 'YYYY-MM-DD',
            type: 'range',
            color: '#00B9EF',
          },
          separateQuery: ['bizDateBegina', 'bizDateEndb'],
        },
        {
          targetElement: 'van-date-picker',
          label: '交付日期',
          isLink: true,
          readonly: true,
          value: 'handoverDate',
          placeholder: '请选择交付日期',
          optionProps: {
            'value-format': 'YYYY-MM-DD',
            type: 'range',
            color: '#00B9EF',
          },
          separateQuery: ['bizDateBegina', 'bizDateEndb'],
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

let Elements: any = {}

const value1 = ref()

// 显示 选择 弹框
let componentConfig = reactive<any>({
  value: '', //需要更新的 key
  isShow: false,
  targetElement: '', // 组件名字
  optionAlias: {
    label: 'text',
    value: 'value',
  },
  optionProps: {},
  options: [],
  onShow(row: any) {
    // const { targetElement } = row
    // this.isShow
    const { onConfirm, onShow } = (componentConfig = {})
    // Object.assign(this, { ...row, isShow: true, targetElement })
    // console.log(this, '*-*-*-*-*-*-*')
    // this.key = value
  },
  onConfirm({ value, text }: any) {
    this.isShow = false
  },
})

const {
  value: valueKey,
  isShow,
  targetElement,
  targetEvent,
  optionProps,
  options,
  onConfirm,
  onShow,
} = toRefs(componentConfig)

onBeforeMount(async () => {
  await init()
})

const getElementList = () => {
  props.formGroup.forEach(async ({ targetElement }: any) => {
    if (targetElement) {
      const names = targetElement.split('-')
      const name = names[0] === 'van' ? getElementName(names) : targetElement

      Elements[targetElement] = markRaw(
        ((await import(`vant/lib`)) as any)[name],
      )
    }
  })
}

const getElementName = (names: any) => {
  let str = ''
  names.forEach((value: string) => {
    if (value != 'van') {
      str += value.substr(0, 1).toUpperCase() + value.substring(1)
    }
  })
  return str
}

// 初始化
const init = async () => {
  await getElementList()
}

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
