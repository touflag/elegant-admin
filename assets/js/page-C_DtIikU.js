
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-C2ZDmhpM.js";import{_ as A}from"./index.vue_vue_type_script_setup_true_lang-BtwM8tsY.js";import{f as x}from"./index-EBgu0xiU.js";import{u as E,o as g}from"./vue-router-Bg2mojPD.js";import{d as B,r as f,aj as s,a as C,c as $,a1 as t,X as u,f as c,u as v,D as k,$ as D}from"./@vue-DJ53MWs5.js";import{_ as w}from"./vue-esign-BNnrYaMl.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-Dd0W0IWH.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./floating-vue-DjZaMi6K.js";import"./@floating-ui-Y0iFLo_g.js";import"./vue-m-message-BxJX2Zqc.js";import"./overlayscrollbars-CZjZ1Dbc.js";import"./@iconify-C4HLlXtv.js";import"./overlayscrollbars-vue-BxfA_dC8.js";import"./@headlessui-Bm2TyfRI.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-RCkyKLW7.js";import"./lodash-es-l8Yk8yFo.js";import"./pinia-DmVFObHF.js";import"./vue-demi-Dq6ymT-8.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-DdTkCxgE.js";import"./@vueuse-Bz9Gvxjd.js";import"./nprogress-BdJdCxhg.js";import"./@element-plus-Ngrzdf6G.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BnGu2oZ8.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-PTJBK6lV.js";import"./path-browserify-DTVwunqE.js";import"./axios-DmypytPv.js";const S={class:"block"},I={class:"block"},K={class:"block"},P=B({name:"KeepAliveDemoPage",__name:"page",setup(R){const N=E(),p=x(),i=f(!1),l=f(1);function d(r){let e;switch(r){case 1:e="keepAliveDemoDetail";break;case 2:e="keepAliveDemoNestedDetail";break}N.push({name:e})}return g((r,e)=>{var n,a;const o=(a=(n=e.matched.at(-1))==null?void 0:n.components)==null?void 0:a.default.name;i.value&&["keepAliveDemoDetail","keepAliveDemoNestedDetail"].includes(r.name)?o&&p.add(o):o&&p.remove(o)}),(r,e)=>{const o=A,n=s("ElSwitch"),a=s("ElInputNumber"),_=s("ElButton"),V=b;return C(),$("div",null,[t(o,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现。"}),t(V,null,{default:u(()=>[c("div",S,[t(n,{modelValue:v(i),"onUpdate:modelValue":e[0]||(e[0]=m=>k(i)?i.value=m:null),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),c("div",I,[t(a,{modelValue:v(l),"onUpdate:modelValue":e[1]||(e[1]=m=>k(l)?l.value=m:null)},null,8,["modelValue"])]),c("div",K,[t(_,{onClick:e[2]||(e[2]=m=>d(1))},{default:u(()=>[D(" 进入同级路由页面 ")]),_:1}),t(_,{onClick:e[3]||(e[3]=m=>d(2))},{default:u(()=>[D(" 进入下级路由页面 ")]),_:1})])]),_:1})])}}}),Ve=w(P,[["__scopeId","data-v-724b770e"]]);export{Ve as default};