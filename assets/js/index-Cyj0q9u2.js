
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-BtwM8tsY.js";import{_ as E}from"./index-EBgu0xiU.js";import{v as y}from"./vue-esign-BNnrYaMl.js";import B from"./alert-fIhRA-QA.js";import{a as N}from"./element-plus-DdTkCxgE.js";import{d as S,r as f,aj as _,a as g,c as h,a1 as t,X as e,f as d,$ as s,u as n,_ as T,n as V}from"./@vue-DJ53MWs5.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-Dd0W0IWH.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./floating-vue-DjZaMi6K.js";import"./@floating-ui-Y0iFLo_g.js";import"./vue-m-message-BxJX2Zqc.js";import"./overlayscrollbars-CZjZ1Dbc.js";import"./@iconify-C4HLlXtv.js";import"./overlayscrollbars-vue-BxfA_dC8.js";import"./@headlessui-Bm2TyfRI.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-RCkyKLW7.js";import"./lodash-es-l8Yk8yFo.js";import"./pinia-DmVFObHF.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-Bg2mojPD.js";import"./hotkeys-js-BfWqkGRU.js";import"./vue-i18n-BnGu2oZ8.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-PTJBK6lV.js";import"./path-browserify-DTVwunqE.js";import"./axios-DmypytPv.js";import"./@vueuse-Bz9Gvxjd.js";import"./nprogress-BdJdCxhg.js";import"./@element-plus-Ngrzdf6G.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";const $={class:"flex flex-1 flex-col"},D={style:{"margin-bottom":"0"}},R={class:"ml-8px"},A={class:"py-10px"},I=["src"],bo=S({name:"ComponentExampleSignCanvas",__name:"index",setup(M){const l=f(),i=f({lineWidth:6,lineColor:"#000000",bgColor:"#ffffff",isCrop:!1}),p=f("");function C(){l.value.reset(),V(()=>{i.value.bgColor="#ffffff"})}function v(){l.value.generate().then(r=>{p.value=r}).catch(()=>{N("画板为空，无法生成图片")})}function k(){l.value.generate().then(r=>{const o=new Image;o.setAttribute("crossOrigin","anonymous"),o.onload=()=>{const a=document.createElement("a"),c=new MouseEvent("click");a.download=Date.parse(new Date().toString()).toString(),a.href=o.src,a.dispatchEvent(c)},o.src=r})}function w(r){window.open(r,"_blank")}return(r,o)=>{const a=_("ElTag"),c=E,m=_("ElButton"),x=b;return g(),h("div",$,[t(B),t(x,{title:"电子签名"},{content:e(()=>[d("p",D,[s(" 安装命令："),t(a,null,{default:e(()=>[s("pnpm add vue-esign")]),_:1})])]),default:e(()=>[t(m,{onClick:o[0]||(o[0]=u=>w("https://github.com/JaimeCheng/vue-esign"))},{icon:e(()=>[t(c,{name:"ep:link"})]),default:e(()=>[s(" 访问 vue-esign ")]),_:1})]),_:1}),d("div",R,[t(n(y),{ref_key:"esignRef",ref:l,bgColor:n(i).bgColor,"onUpdate:bgColor":o[1]||(o[1]=u=>n(i).bgColor=u),width:500,height:300,"is-crop":n(i).isCrop,"line-width":n(i).lineWidth,"line-color":n(i).lineColor},null,8,["bgColor","is-crop","line-width","line-color"]),d("div",A,[t(m,{onClick:C},{default:e(()=>[s(" 清空画板 ")]),_:1}),t(m,{onClick:v},{default:e(()=>[s(" 生成图片 ")]),_:1}),t(m,{onClick:k},{default:e(()=>[s(" 下载图片 ")]),_:1})]),n(p)?(g(),h("img",{key:0,src:n(p),width:500,height:300},null,8,I)):T("",!0)])])}}});export{bo as default};