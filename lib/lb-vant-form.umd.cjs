(function(n,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("vue")):typeof define=="function"&&define.amd?define(["vue"],o):(n=typeof globalThis<"u"?globalThis:n||self,n["lb-vant-form"]=o(n.Vue))})(this,function(n){"use strict";const o={class:"page-container"},p=n.defineComponent({name:"lbVantForm"}),r=n.defineComponent({...p,props:{id:{type:String,default:()=>""}},emits:["loadData"],setup(t,{expose:e,emit:c}){const s=t,a=n.reactive({});n.watch(()=>s.id,l=>{l&&i()}),n.onBeforeMount(async()=>{await m()});const m=async()=>{await n.nextTick(),await i(),console.log("init")},i=async()=>{const d=await""({id:s.id});Object.assign(a,d),console.log("loadData:",d)};return e({loadData:i,submit:async()=>{c("loadData"),console.log("submit:")},cancel:async()=>{console.log("cancel:")}}),(l,d)=>(n.openBlock(),n.createElementBlock("div",o))}}),u="",_=((t,e)=>{const c=t.__vccOpts||t;for(const[s,a]of e)c[s]=a;return c})(r,[["__scopeId","data-v-c06d800c"]]),f=[_];return{install:function(t){f.map(e=>t.component(e.name,e))},LbVantForm:_}});
