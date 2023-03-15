import { defineComponent as l, reactive as r, watch as p, onBeforeMount as m, nextTick as u, openBlock as f, createElementBlock as g } from "vue";
const y = { class: "page-container" }, v = l({
  name: "lbVantForm"
}), b = /* @__PURE__ */ l({
  ...v,
  props: {
    id: {
      type: String,
      default: () => ""
    }
  },
  emits: ["loadData"],
  setup(t, { expose: n, emit: o }) {
    const c = t, a = r({});
    p(
      () => c.id,
      (s) => {
        s && e();
      }
    ), m(async () => {
      await d();
    });
    const d = async () => {
      await u(), await e(), console.log("init");
    }, e = async () => {
      const i = await ""({
        id: c.id
      });
      Object.assign(a, i), console.log("loadData:", i);
    };
    return n({
      loadData: e,
      submit: async () => {
        o("loadData"), console.log("submit:");
      },
      cancel: async () => {
        console.log("cancel:");
      }
    }), (s, i) => (f(), g("div", y));
  }
});
const x = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [c, a] of n)
    o[c] = a;
  return o;
}, _ = /* @__PURE__ */ x(b, [["__scopeId", "data-v-c06d800c"]]), w = [_], k = function(t) {
  w.map((n) => t.component(n.name, n));
}, F = {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: k,
  // 以下是具体的组件列表
  LbVantForm: _
};
export {
  F as default
};
