
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as w}from"./index.vue_vue_type_script_setup_true_lang-C2ZDmhpM.js";import{T as h}from"./typeit-CHrUKvLT.js";import{d as f,r as T,o as v,a as d,c as y,R as x,f as l,aj as u,a1 as o,X as n,$ as _}from"./@vue-DJ53MWs5.js";import{_ as E}from"./vue-esign-BNnrYaMl.js";import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-BtwM8tsY.js";import{_ as B}from"./index-EBgu0xiU.js";import I from"./alert-fIhRA-QA.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-Dd0W0IWH.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./floating-vue-DjZaMi6K.js";import"./@floating-ui-Y0iFLo_g.js";import"./vue-m-message-BxJX2Zqc.js";import"./overlayscrollbars-CZjZ1Dbc.js";import"./@iconify-C4HLlXtv.js";import"./overlayscrollbars-vue-BxfA_dC8.js";import"./@headlessui-Bm2TyfRI.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-RCkyKLW7.js";import"./lodash-es-l8Yk8yFo.js";import"./pinia-DmVFObHF.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-Bg2mojPD.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-DdTkCxgE.js";import"./@vueuse-Bz9Gvxjd.js";import"./nprogress-BdJdCxhg.js";import"./@element-plus-Ngrzdf6G.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BnGu2oZ8.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-PTJBK6lV.js";import"./path-browserify-DTVwunqE.js";import"./axios-DmypytPv.js";const C=f({name:"TypeIt",props:{options:{type:Object,default:()=>({})}},setup(p,{expose:i}){function s(t){throw new TypeError(t)}function r(){return navigator.language}const e=T(null);return v(()=>{var m;const t=(m=e.value)==null?void 0:m.querySelector(".type-it");if(!t){const c=r()==="zh-CN"?"请确保有且只有一个具有class属性为 'type-it' 的元素":"Please make sure that there is only one element with a class attribute of 'type-it'";s(c)}const a=new h(t,p.options).go();i({typeIt:a})}),{typedItRef:e}}}),N={ref:"typedItRef"},P=l("span",{class:"type-it"},null,-1);function b(p,i,s,r,e,t){return d(),y("div",N,[x(p.$slots,"default",{},()=>[P])],512)}const j=E(C,[["render",b]]),M={class:"flex py-20px"},vt=f({name:"ProTypeit",__name:"index",setup(p){const i={strings:["我是一只小小小鸟","想要飞呀飞","却怎么也飞不高"]};function s(r){window.open(r,"_blank")}return(r,e)=>{const t=u("ElTag"),a=B,m=u("ElButton"),c=k,g=j,$=w;return d(),y("div",null,[o(I),o(c,{title:"打字机组件"},{content:n(()=>[l("p",null,[_(" 安装命令："),o(t,null,{default:n(()=>[_("pnpm add typeit")]),_:1})])]),default:n(()=>[o(m,{onClick:e[0]||(e[0]=R=>s("https://www.typeitjs.com"))},{icon:n(()=>[o(a,{name:"ep:link"})]),default:n(()=>[_(" 访问 Typeit ")]),_:1})]),_:1}),o($,null,{default:n(()=>[l("div",M,[o(g,{options:i})])]),_:1})])}}});export{vt as default};