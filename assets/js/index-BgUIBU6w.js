
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as X}from"./index.vue_vue_type_script_setup_true_lang-C68lWNek.js";import{_ as Y}from"./HDropdownMenu.vue_vue_type_script_setup_true_lang-D7L19AqU.js";import{z as G,_ as J}from"./index-EBgu0xiU.js";import{d as O,r as c,w as Z,o as ee,aj as o,aq as te,a as S,c as le,f as m,a1 as l,X as n,Y as ne,W as oe,u as a,D as ae,a0 as se,a8 as T}from"./@vue-DJ53MWs5.js";import{B as E,T as ie,P,Q as re}from"./@element-plus-Ngrzdf6G.js";import{g as ce,d as ue}from"./sys_menu-ppqU2Xeg.js";import de from"./menuDetail-B6rtiOce.js";import{a as V,b as me}from"./element-plus-DdTkCxgE.js";import{_ as pe}from"./vue-esign-BNnrYaMl.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-Dd0W0IWH.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./floating-vue-DjZaMi6K.js";import"./@floating-ui-Y0iFLo_g.js";import"./vue-m-message-BxJX2Zqc.js";import"./overlayscrollbars-CZjZ1Dbc.js";import"./@iconify-C4HLlXtv.js";import"./overlayscrollbars-vue-BxfA_dC8.js";import"./@headlessui-Bm2TyfRI.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-RCkyKLW7.js";import"./lodash-es-l8Yk8yFo.js";import"./pinia-DmVFObHF.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-Bg2mojPD.js";import"./hotkeys-js-BfWqkGRU.js";import"./vue-i18n-BnGu2oZ8.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-PTJBK6lV.js";import"./path-browserify-DTVwunqE.js";import"./axios-DmypytPv.js";import"./@vueuse-Bz9Gvxjd.js";import"./nprogress-BdJdCxhg.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./index-i__5yuuA.js";import"./index.vue_vue_type_script_setup_true_lang-5GddAViN.js";import"./sortablejs-C_eVYoc1.js";import"./GridItem.vue_vue_type_script_setup_true_lang-B-s0jwix.js";import"./index-2KTzvvSh.js";import"./sys_resource-VOiCgP9U.js";const fe={class:"table-container"},_e={class:"menu-box rounded"},ve={class:"flex items-center pl-2"},he={class:"flex-center gap-1 text-#333333"},ge={class:"mx-2 mt-2"},xe={class:"custom-tree-node el-tree-node__label"},be={class:"label text-ellipsis"},ke={class:"do absolute right-10px"},ye=O({name:"SysSettingMenu",__name:"index",setup(Ce){const f=c(""),D=c(1),x=c([]),_=c([]),F=c({label:t=>t.meta&&t.meta.title||""}),s=c(!1),i=c(),b=c();Z(()=>f.value,t=>{i.value.filter(t)}),ee(()=>{v()});async function v(){s.value=!0;let t=await ce({});s.value=!1,x.value=G(t.data)||[],_.value=t.data||[]}function j(){v()}const L=c();function q(t,e){let d=e.level===1?"0":e.parent.data.id;b.value.acceptParams(t,d,t.mode||"edit"),L.value.$el.scrollTop=0}function z(t,e){return t?(e.meta&&e.meta.title||"").includes(t):!0}async function $(t,e){D.value++;let d={pid:t?t.id:"",name:"",path:"",id:`menuId-${D.value}`,component:"",redirect:"",sort:1,meta:{title:"未命名",icon:"",activeMenu:"",type:"menu",menu:!1,breadcrumb:!1,cache:!1,threeMenu:!1,isFull:!1,link:"",iframe:""},apiPermissionsIdList:[],mode:"add"};s.value=!0,s.value=!1;let h=e?e.data.id:"0";b.value.acceptParams(d,h,"add")}async function N(t){let e=null;if(t?e=[t]:e=i.value.getCheckedNodes(),e.length===0)return V.warning("请选择需要删除的项"),!1;if(await me.confirm("确认删除已选择的菜单吗？","提示",{type:"warning",confirmButtonText:"确认"}).catch(()=>{})!=="confirm")return!1;s.value=!0;let g={idList:e.map(r=>r.id.includes("menuId-")?null:r.id).filter(r=>r)};g.idList.length>0?ue(g.idList).then(()=>{s.value=!1,v()}).catch(()=>{s.value=!1}):(s.value=!1,e.forEach(r=>{i.value.remove(r),_.value.forEach((k,y)=>{k.id==r.id&&_.value.splice(y,1)})})),V.success("操作成功")}function A(t){t?i.value.setCheckedNodes(_.value):i.value.setCheckedKeys([],!1)}function R(t){for(let e=0;e<i.value.store._getAllNodes().length;e++)t?i.value.store._getAllNodes()[e].expanded=!0:i.value.store._getAllNodes()[e].expanded=!1}return(t,e)=>{const d=o("el-input"),h=J,g=o("el-icon"),r=Y,k=o("el-divider"),y=o("el-header"),p=o("el-button"),H=o("el-button-group"),C=X,K=o("el-tree"),B=o("el-main"),Q=o("el-footer"),M=o("el-container"),U=o("el-aside"),W=te("loading");return S(),le("div",fe,[m("div",_e,[l(M,{class:"h-full"},{default:n(()=>[ne((S(),oe(U,{width:"270px",class:"menu-l mr-1 h-full rounded rounded-6px bg-[var(--g-container-bg)]"},{default:n(()=>[l(M,{class:"h-full"},{default:n(()=>[l(y,{class:"p-0 pt-2"},{default:n(()=>[m("div",ve,[l(d,{modelValue:a(f),"onUpdate:modelValue":e[0]||(e[0]=u=>ae(f)?f.value=u:null),placeholder:"输入关键字进行过滤",clearable:""},null,8,["modelValue"]),l(r,{items:[[{label:"选择全部",handle:()=>A(!0)},{label:"取消选择",handle:()=>A(!1)}],[{label:"展开全部",handle:()=>R(!0)},{label:"折叠全部",handle:()=>R(!1)}]],class:"flex-center cursor-pointer px-2"},{default:n(()=>[m("div",he,[l(g,{class:"rotate-90"},{default:n(()=>[l(h,{name:"ep:more-filled"})]),_:1})])]),_:1},8,["items"])]),m("div",ge,[l(k,{"border-style":"dashed",class:"m-0 w-full"})])]),_:1}),l(B,{class:"h-full p-0"},{default:n(()=>[l(K,{ref_key:"menuTreeRef",ref:i,class:"menu","default-expand-all":!0,"node-key":"id",data:a(x),props:a(F),"expand-on-click-node":!1,"check-strictly":"","show-checkbox":"",draggable:"","highlight-current":"","filter-node-method":z,"check-on-click-node":!0},{default:n(({node:u,data:w})=>[m("span",xe,[m("span",be,se(u.label),1),m("span",ke,[l(C,{value:["add:menu:btn","del:menu:btn"]},{default:n(()=>[l(H,{size:"small"},{default:n(()=>[l(p,{icon:a(E),onClick:T(I=>$(w,u),["stop"])},null,8,["icon","onClick"]),l(p,{icon:a(ie),onClick:T(I=>q(w,u),["stop"])},null,8,["icon","onClick"]),l(p,{type:"danger",icon:a(P),onClick:T(I=>N(w),["stop"])},null,8,["icon","onClick"])]),_:2},1024)]),_:2},1024)])])]),_:1},8,["data","props"])]),_:1}),l(Q,{class:"h-14 flex items-center justify-center"},{default:n(()=>[l(p,{type:"primary",icon:a(re),onClick:e[1]||(e[1]=u=>j())},null,8,["icon"]),l(C,{value:["add:menu:btn"],class:"mx-3"},{default:n(()=>[l(p,{type:"primary",icon:a(E),onClick:e[2]||(e[2]=u=>$())},null,8,["icon"])]),_:1}),l(C,{value:["del:menu:btn"]},{default:n(()=>[l(p,{type:"danger",icon:a(P),onClick:e[3]||(e[3]=u=>N())},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1})),[[W,a(s)]]),l(M,{class:"menu-r rounded-6px bg-[var(--g-container-bg)]"},{default:n(()=>[l(B,{ref_key:"mainRef",ref:L,class:"flex flex-col p-0"},{default:n(()=>[l(de,{ref_key:"menuDetailRef",ref:b,"menu-tree-list":a(x),onSuccess:v},null,8,["menu-tree-list"])]),_:1},512)]),_:1})]),_:1})])])}}}),ht=pe(ye,[["__scopeId","data-v-9e986c6d"]]);export{ht as default};