
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{d as $,i as S,r as b,b as y,a as d,c as u,f as i,F as D,aa as F,m as j,a0 as w,a1 as n,X as V,u as r,U as z,Y as A,a2 as E}from"./@vue-DJ53MWs5.js";import{d as G}from"./vuedraggable-Ce-5l_FJ.js";import{p as c,o as M}from"./index-DPTGWM0y.js";import{g as B,f as P}from"./index-Bk_RL8th.js";import{_ as I}from"./icon.vue_vue_type_script_setup_true_lang-CXPPfzEY.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./sortablejs-C_eVYoc1.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-Dd0W0IWH.js";import"./floating-vue-DjZaMi6K.js";import"./@floating-ui-Y0iFLo_g.js";import"./vue-m-message-BxJX2Zqc.js";import"./overlayscrollbars-CZjZ1Dbc.js";import"./@iconify-C4HLlXtv.js";import"./overlayscrollbars-vue-BxfA_dC8.js";import"./@headlessui-Bm2TyfRI.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-RCkyKLW7.js";import"./lodash-es-l8Yk8yFo.js";import"./pinia-DmVFObHF.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-Bg2mojPD.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-DdTkCxgE.js";import"./@vueuse-Bz9Gvxjd.js";import"./nprogress-BdJdCxhg.js";import"./@element-plus-Ngrzdf6G.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BnGu2oZ8.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-PTJBK6lV.js";import"./path-browserify-DTVwunqE.js";import"./axios-DmypytPv.js";import"./vue-esign-BNnrYaMl.js";const X={class:"elegant-component-view flex flex-col"},Y={class:"flex flex-1 overflow-auto"},q={class:"elegant-tabs-box"},H=["title","onClick"],J={class:"box-border h-full flex-1 overflow-auto py-2"},K={class:"elegant-search-box px-10px pb-6px"},O=["onClick"],Q={class:"pt-42px text-center text-gray-400"},Ee=$({__name:"index",setup(R){const L=c.getComponent("input"),h=S("pageSchema"),v=S("designer"),f=c.getComponentSchemaGroups(),l=b(""),g={title:"全部",list:[]},s=b(g),N=y(()=>[g,...f.value]),m=y(()=>{let o=s.value.list;if(s.value.title==="全部"){const t=f.value.map(e=>e.list);o=[].concat(...t)}return l.value?o.filter(t=>{var e;return(e=t.label)==null?void 0:e.includes(l.value)}):o});function U(o){s.value=o}function T(o){var _,C,k;const t=P(h.schemas,((_=v.state.checkedNode)==null?void 0:_.id)??"root");if(!t)return!1;let{list:e,schema:a,index:p}=t;a.children&&!((k=(C=c.getComponentConfingByType(a.type))==null?void 0:C.editConstraints)!=null&&k.childImmovable)&&(e=a.children,p=a.children.length-1);const x=B(o);e.splice(p+1,0,x),v.setCheckedNode(x),M.push(h.schemas,"插入组件")}return(o,t)=>(d(),u("div",X,[i("div",Y,[i("div",q,[(d(!0),u(D,null,F(N.value,(e,a)=>(d(),u("div",{key:a,class:j(["elegant-tab cursor-pointer truncate",{checked:s.value.title===e.title}]),title:e.title,onClick:p=>U(e)},w(e.title),11,H))),128))]),i("div",J,[i("div",K,[n(r(L),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),value:l.value,"onUpdate:value":t[1]||(t[1]=e=>l.value=e),placeholder:"搜索组件",clearable:"","allow-clear":""},{prefix:V(()=>[n(r(I),{name:"icon-chaxun"})]),_:1},8,["modelValue","value"])]),n(r(G),z({modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=e=>m.value=e)},{group:{name:"edit-draggable",pull:"clone",put:!1},sort:!1,animation:180,ghostClass:"moving"},{clone:r(B),"item-key":"id",class:"grid grid-cols-[auto_auto] gap-2 px-10px"}),{item:V(({element:e})=>[i("div",{class:"elegant-componet-item flex items-center truncate",onClick:a=>T(e)},[n(r(I),{prefix:"",name:r(c).getComponentConfingByType(e.type).icon??""},null,8,["name"]),i("div",null,w(e.label),1)],8,O)]),_:1},16,["modelValue","clone"]),A(i("div",Q," 没有查询到的组件 ",512),[[E,!m.value.length]])])])]))}});export{Ee as default};