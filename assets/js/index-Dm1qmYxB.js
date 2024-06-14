
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as w}from"./index.vue_vue_type_script_setup_true_lang-C2ZDmhpM.js";import{t as V}from"./tinymce--cBW4X22.js";import{E}from"./@tinymce-CF52LJ_p.js";import{u as H,_ as M}from"./index-EBgu0xiU.js";import{d as v,r as g,o as T,w as $,b as B,a as y,c as x,a1 as n,u as l,D as S,aj as h,X as s,f as b,$ as f}from"./@vue-DJ53MWs5.js";import{_ as C}from"./vue-esign-BNnrYaMl.js";import{_ as A}from"./index.vue_vue_type_script_setup_true_lang-BtwM8tsY.js";import j from"./alert-fIhRA-QA.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-Dd0W0IWH.js";import"./floating-vue-DjZaMi6K.js";import"./@floating-ui-Y0iFLo_g.js";import"./vue-m-message-BxJX2Zqc.js";import"./overlayscrollbars-CZjZ1Dbc.js";import"./@iconify-C4HLlXtv.js";import"./overlayscrollbars-vue-BxfA_dC8.js";import"./@headlessui-Bm2TyfRI.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-RCkyKLW7.js";import"./lodash-es-l8Yk8yFo.js";import"./pinia-DmVFObHF.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-Bg2mojPD.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-DdTkCxgE.js";import"./@vueuse-Bz9Gvxjd.js";import"./nprogress-BdJdCxhg.js";import"./@element-plus-Ngrzdf6G.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BnGu2oZ8.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-PTJBK6lV.js";import"./path-browserify-DTVwunqE.js";import"./axios-DmypytPv.js";const z={class:"editor"},P=v({name:"Tinymce",__name:"index",props:{modelValue:{},setting:{},disabled:{type:Boolean}},emits:["update:modelValue"],setup(k,{emit:a}){const r=k,m=a,e=g("");T(()=>{V.init({}),e.value=r.modelValue}),$(()=>e.value,t=>{m("update:modelValue",t)});const c=H(),d=g({license_key:"gpl",selector:"textarea",language_url:"tinymce/langs/zh-Hans.js",language:"zh-Hans",skin_url:c.settings.app.colorScheme==="light"?"tinymce/skins/ui/oxide":"tinymce/skins/ui/oxide-dark",content_css:c.settings.app.colorScheme==="light"?"tinymce/skins/content/default/content.min.css":"tinymce/skins/content/dark/content.min.css",min_height:250,max_height:700,placeholder:"在这里输入文字",plugins:"autolink autoresize fullscreen image insertdatetime link lists media preview table wordcount code searchreplace",toolbar:"undo redo | blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor removeformat | link image media table insertdatetime searchreplace | preview code fullscreen | fontsizeselect fontselect",branding:!1,promotion:!1,menubar:!0,toolbar_mode:"sliding",fontsize_formats:"12px 14px 16px 18px 24px 36px 48px 56px 72px",font_formats:"微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",insertdatetime_formats:["%Y年%m月%d日","%H点%M分%S秒","%Y-%m-%d","%H:%M:%S"],images_upload_handler:t=>new Promise(o=>{const i=`data:image/jpeg;base64,${t.base64()}`;o(i)}),file_picker_types:"media",file_picker_callback:(t,o,i)=>{if(i.filetype==="media"){const p=".mp4,.mkv, .avi,.wmv, .rmvb,.mov,.mpg,.mpeg,.webm",u=document.createElement("input");u.setAttribute("type","file"),u.setAttribute("accept",p),u.click(),u.onchange=async function(){}}},video_template_callback:t=>`<video width="100%" height="auto" controls="controls" src=${t.source} />`}),_=B(()=>Object.assign(d.value,r.setting));return(t,o)=>(y(),x("div",z,[n(l(E),{modelValue:l(e),"onUpdate:modelValue":o[0]||(o[0]=i=>S(e)?e.value=i:null),init:l(_)},null,8,["modelValue","init"])]))}}),N=C(P,[["__scopeId","data-v-b8cbe653"]]),Y={class:"flex flex-1 flex-col"},F=b("p",{style:{"margin-bottom":"0"}}," 安装成功后，在框架 /public 目录下创建 tinymce 文件夹，并将 /node_modules/tinymce 目录下的 langs 和 skins 文件夹复制到 /public/tinymce 目录下。 ",-1),q=["innerHTML"],Te=v({__name:"index",setup(k){const a=g("<h1>Elegant-admin</h1>");function r(m){window.open(m,"_blank")}return(m,e)=>{const c=h("ElTag"),d=M,_=h("ElButton"),t=A,o=N,i=w;return y(),x("div",Y,[n(j),n(t,{title:"TinyMCE 编辑器"},{content:s(()=>[b("p",null,[f(" 安装命令："),n(c,null,{default:s(()=>[f("pnpm add tinymce @tinymce/tinymce-vue")]),_:1})]),F]),default:s(()=>[n(_,{onClick:e[0]||(e[0]=p=>r("https://github.com/tinymce/tinymce"))},{icon:s(()=>[n(d,{name:"ep:link"})]),default:s(()=>[f(" 访问 TinyMCE ")]),_:1})]),_:1}),n(i,null,{default:s(()=>[n(o,{modelValue:l(a),"onUpdate:modelValue":e[1]||(e[1]=p=>S(a)?a.value=p:null)},null,8,["modelValue"]),b("div",{class:"preview",innerHTML:l(a)},null,8,q)]),_:1})])}}});export{Te as default};