
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as J}from"./index.vue_vue_type_script_setup_true_lang-C68lWNek.js";import{_ as K}from"./index-i__5yuuA.js";import{_ as Q}from"./index-2KTzvvSh.js";import{_ as Y}from"./index-EBgu0xiU.js";import{a as Z,e as ee}from"./sys_menu-ppqU2Xeg.js";import{g as le}from"./sys_resource-VOiCgP9U.js";import{j as te}from"./lodash-es-l8Yk8yFo.js";import{a as T}from"./element-plus-DdTkCxgE.js";import{d as oe,r as V,w as ae,o as ne,k as se,aj as i,a as y,c as P,f as d,a0 as ue,a1 as e,X as a,$ as u,W as j,_ as $,u as A,F as me}from"./@vue-DJ53MWs5.js";import{_ as ie}from"./vue-esign-BNnrYaMl.js";import"./index.vue_vue_type_script_setup_true_lang-5GddAViN.js";import"./@element-plus-Ngrzdf6G.js";import"./sortablejs-C_eVYoc1.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./GridItem.vue_vue_type_script_setup_true_lang-B-s0jwix.js";import"./monaco-editor-PTJBK6lV.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-Dd0W0IWH.js";import"./floating-vue-DjZaMi6K.js";import"./@floating-ui-Y0iFLo_g.js";import"./vue-m-message-BxJX2Zqc.js";import"./overlayscrollbars-CZjZ1Dbc.js";import"./@iconify-C4HLlXtv.js";import"./overlayscrollbars-vue-BxfA_dC8.js";import"./@headlessui-Bm2TyfRI.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-RCkyKLW7.js";import"./pinia-DmVFObHF.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-Bg2mojPD.js";import"./hotkeys-js-BfWqkGRU.js";import"./vue-i18n-BnGu2oZ8.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./path-browserify-DTVwunqE.js";import"./axios-DmypytPv.js";import"./@vueuse-Bz9Gvxjd.js";import"./nprogress-BdJdCxhg.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";const re={class:"mb-4 pt-2"},pe={class:"px-3 py-1.2 text-16px font-500"},de={class:"mx-2 mt-2"},ce={class:"flex-1 overflow-auto px-4 py-2"},fe={key:0},_e={key:1},ve={class:"flex items-center"},be={class:"flex items-center"},Ve={class:"flex items-center"},he={class:"flex items-center"},ye={class:"flex items-center"},ge={class:"menu-footer h-14 flex items-center justify-center"},xe=oe({name:"MenuDetail",__name:"menuDetail",props:{menuTreeList:{default:[]}},emits:["success"],setup(B,{expose:E,emit:N}){const F=B,C=N,U=V("add"),h=V(!1),D=V(!1),R=V({"meta.title":[{required:!0,message:"请输入显示名称"}],"meta.iframe":[{required:!0,message:"请输入iframe地址"}],"meta.link":[{required:!0,message:"请输入外链地址"}],"meta.type":[{required:!0,message:"请选择菜单类型"}],name:[{required:!0,message:"请输入别名"}],sort:[{required:!0,message:"请输入排序"}]}),L=V([]),o=V({});ae(()=>F.menuTreeList,t=>{L.value=[{children:q(t),label:"顶级菜单",value:"0"}]},{deep:!0}),ne(()=>{O()});function O(){o.value={id:"",pid:"",name:"",path:"",component:"",redirect:"",sort:1,meta:{title:"",icon:"",activeMenu:"",type:"",menu:!1,breadcrumb:!1,cache:!1,threeMenu:!1,isFull:!1,link:"",iframe:""},apiPermissionsIdList:[]},L.value=[{children:q(F.menuTreeList),label:"顶级菜单",value:"0"}]}function q(t){const l=[];return t&&t.forEach(m=>{let r={value:m.id,pid:m.pid,label:m.meta&&m.meta.title||"",children:m.children&&m.children.length>0?q(m.children):null};l.push(r)}),l}const S=V();async function W(){S.value.validate(async t=>{if(t){h.value=!0;try{let l=te(o.value),m=[];if(l.apiPermissionsIdList&&l.apiPermissionsIdList.map(r=>{m.push(r.value)}),l.apiPermissionsIdList=m,l.id=l.id.includes("menuId-")?"":l.id,U.value==="add"){let r=await Z(l);h.value=!1,r.code===200&&(C("success",l),T.success({message:"操作成功!",showClose:!0,duration:1e3}))}else{let r=await ee(l);h.value=!1,r.code===200&&(C("success",l),T.success({message:"操作成功!",showClose:!0,duration:1e3}))}}catch{h.value=!1}}else return!1})}async function z(t,l,m="add"){var b,g,s,p,c,f,_,x,k,v,w,M;if(U.value=m,D.value=!0,m==="add"){o.value=Object.assign({},t),o.value.pid=l;return}o.value={id:t.id,pid:l,name:t.name,path:t.path,component:t.component,redirect:t.redirect,sort:t.sort||1,meta:{title:(b=t==null?void 0:t.meta)==null?void 0:b.title,icon:((g=t==null?void 0:t.meta)==null?void 0:g.icon)||"",activeMenu:(s=t==null?void 0:t.meta)==null?void 0:s.activeMenu,type:(p=t==null?void 0:t.meta)==null?void 0:p.type,menu:(c=t==null?void 0:t.meta)==null?void 0:c.menu,breadcrumb:(f=t==null?void 0:t.meta)==null?void 0:f.breadcrumb,cache:(_=t==null?void 0:t.meta)==null?void 0:_.cache,threeMenu:(x=t==null?void 0:t.meta)==null?void 0:x.threeMenu,isFull:(k=t==null?void 0:t.meta)==null?void 0:k.isFull,link:(v=t==null?void 0:t.meta)==null?void 0:v.link,iframe:(w=t==null?void 0:t.meta)==null?void 0:w.iframe},apiPermissionsIdList:t.apiPermissions||[]};let r=[];(M=t.apiPermissions)==null||M.forEach(I=>{r.push({value:I.id,label:I.name})}),o.value.apiPermissionsIdList=r||[]}const X=se([{type:"selection",fixed:"left",width:80},{type:"index",label:"#",width:60},{prop:"name",label:"资源名称",minWidth:100,search:{el:"input"}}]);return E({acceptParams:z}),(t,l)=>{const m=i("el-divider"),r=i("el-empty"),b=i("el-radio-button"),g=i("el-radio-group"),s=i("el-form-item"),p=i("el-input"),c=Y,f=i("el-icon"),_=i("el-tooltip"),x=i("el-tree-select"),k=Q,v=i("el-checkbox"),w=i("el-input-number"),M=K,I=i("el-form"),G=i("el-button"),H=J;return y(),P(me,null,[d("div",re,[d("div",pe,ue(`${U.value==="add"?"新增":"编辑"}-${o.value.meta&&o.value.meta.title}`),1),d("div",de,[e(m,{"border-style":"dashed",class:"m-0 w-full"})])]),d("div",ce,[D.value?(y(),P("div",_e,[e(I,{ref_key:"menuDetailFormRef",ref:S,class:"grid grid-cols-2 gap-x-20 gap-y-2",model:o.value,rules:R.value,"label-width":"120px","label-position":"left"},{default:a(()=>[e(s,{label:"菜单类型:",prop:"meta.type",class:"col-span-2"},{default:a(()=>[e(g,{modelValue:o.value.meta.type,"onUpdate:modelValue":l[0]||(l[0]=n=>o.value.meta.type=n),onChange:l[1]||(l[1]=()=>{o.value.meta.iframe=null,o.value.meta.link=null})},{default:a(()=>[e(b,{value:"menu"},{default:a(()=>[u(" 菜单 ")]),_:1}),e(b,{value:"iframe"},{default:a(()=>[u(" Iframe ")]),_:1}),e(b,{value:"link"},{default:a(()=>[u(" 外链 ")]),_:1}),e(b,{value:"button"},{default:a(()=>[u(" 按钮 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o.value.meta.type==="iframe"?(y(),j(s,{key:0,label:"Iframe地址:",prop:"meta.iframe"},{default:a(()=>[e(p,{modelValue:o.value.meta.iframe,"onUpdate:modelValue":l[2]||(l[2]=n=>o.value.meta.iframe=n),clearable:"",placeholder:"请输入Iframe地址"},null,8,["modelValue"])]),_:1})):$("",!0),o.value.meta.type==="link"?(y(),j(s,{key:1,label:"外链地址:",prop:"meta.link"},{default:a(()=>[e(p,{modelValue:o.value.meta.link,"onUpdate:modelValue":l[3]||(l[3]=n=>o.value.meta.link=n),clearable:"",placeholder:"请输入外链地址"},null,8,["modelValue"])]),_:1})):$("",!0),e(s,{label:"菜单名称:",prop:"meta.title"},{default:a(()=>[e(p,{modelValue:o.value.meta.title,"onUpdate:modelValue":l[4]||(l[4]=n=>o.value.meta.title=n),maxlength:"50",clearable:"",placeholder:"菜单显示名字"},null,8,["modelValue"])]),_:1}),e(s,{prop:"name"},{label:a(()=>[d("div",ve,[u(" 别名: "),e(_,{content:"<div class='w-40'>系统唯一且与内置组件名一致，否则导致缓存失效。如类型为Iframe的菜单，别名将代替源地址显示在地址栏</span>","raw-content":""},{default:a(()=>[e(f,null,{default:a(()=>[e(c,{name:"ep:question-filled"})]),_:1})]),_:1})])]),default:a(()=>[e(p,{modelValue:o.value.name,"onUpdate:modelValue":l[5]||(l[5]=n=>o.value.name=n),maxlength:"50",clearable:"",placeholder:"菜单别名"},null,8,["modelValue"])]),_:1}),e(s,{label:"上级菜单:",prop:"pid"},{default:a(()=>[e(x,{modelValue:o.value.pid,"onUpdate:modelValue":l[6]||(l[6]=n=>o.value.pid=n),data:L.value,"render-after-expand":!1,class:"w-full",placeholder:"顶级菜单",clearable:"","check-strictly":"","show-checkbox":"","check-on-click-node":""},null,8,["modelValue","data"])]),_:1}),e(s,{label:"菜单图标:",prop:"meta.icon"},{default:a(()=>[e(k,{modelValue:o.value.meta.icon,"onUpdate:modelValue":l[7]||(l[7]=n=>o.value.meta.icon=n)},null,8,["modelValue"])]),_:1}),e(s,{label:"是否缓存:",prop:"meta.cache"},{default:a(()=>[e(v,{modelValue:o.value.meta.cache,"onUpdate:modelValue":l[8]||(l[8]=n=>o.value.meta.cache=n)},{default:a(()=>[u(" 是否缓存 ")]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"路由地址:",prop:"path"},{default:a(()=>[e(p,{modelValue:o.value.path,"onUpdate:modelValue":l[9]||(l[9]=n=>o.value.path=n),clearable:"",placeholder:""},null,8,["modelValue"])]),_:1}),e(s,{label:"是否三级路由:",prop:"meta.threeMenu"},{label:a(()=>[d("div",be,[u(" 是否三级路由: "),e(_,{content:"<div class='w-40'>非特殊情况不勾选</span>","raw-content":""},{default:a(()=>[e(f,null,{default:a(()=>[e(c,{name:"ep:question-filled"})]),_:1})]),_:1})])]),default:a(()=>[e(v,{modelValue:o.value.meta.threeMenu,"onUpdate:modelValue":l[10]||(l[10]=n=>o.value.meta.threeMenu=n)},{default:a(()=>[u(" 是否三级路由 ")]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"菜单是否全屏:",prop:"meta.isFull"},{default:a(()=>[e(v,{modelValue:o.value.meta.isFull,"onUpdate:modelValue":l[11]||(l[11]=n=>o.value.meta.isFull=n)},{default:a(()=>[u(" 菜单是否全屏 ")]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"重定向:",prop:"redirect"},{default:a(()=>[e(p,{modelValue:o.value.redirect,"onUpdate:modelValue":l[12]||(l[12]=n=>o.value.redirect=n),clearable:"",placeholder:""},null,8,["modelValue"])]),_:1}),e(s,{prop:"activeMenu"},{label:a(()=>[d("div",Ve,[u(" 菜单高亮: "),e(_,{content:"<div class='w-40'>子节点或详情页需要高亮的上级菜单路由地址</span>","raw-content":""},{default:a(()=>[e(f,null,{default:a(()=>[e(c,{name:"ep:question-filled"})]),_:1})]),_:1})])]),default:a(()=>[e(p,{modelValue:o.value.meta.activeMenu,"onUpdate:modelValue":l[13]||(l[13]=n=>o.value.meta.activeMenu=n),clearable:"",placeholder:""},null,8,["modelValue"])]),_:1}),e(s,{label:"排序:",prop:"sort"},{default:a(()=>[e(w,{modelValue:o.value.sort,"onUpdate:modelValue":l[14]||(l[14]=n=>o.value.sort=n),"controls-position":"right",max:1e4,min:1,style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(s,{prop:"component",class:"col-span-2"},{label:a(()=>[d("div",he,[u(" 视图: "),e(_,{content:"<div class='w-40'>如父节点、外链或Iframe等没有视图的菜单填写LinkLayout</span>","raw-content":""},{default:a(()=>[e(f,null,{default:a(()=>[e(c,{name:"ep:question-filled"})]),_:1})]),_:1})])]),default:a(()=>[e(p,{modelValue:o.value.component,"onUpdate:modelValue":l[15]||(l[15]=n=>o.value.component=n),clearable:"",placeholder:""},{prepend:a(()=>[u(" views/ ")]),_:1},8,["modelValue"])]),_:1}),e(s,{prop:"meta.menu",class:"col-span-2"},{label:a(()=>[d("div",ye,[u(" 是否显示: "),e(_,{content:"<div class='w-40'>菜单不显示在导航中，例如详情页</span>","raw-content":""},{default:a(()=>[e(f,null,{default:a(()=>[e(c,{name:"ep:question-filled"})]),_:1})]),_:1})])]),default:a(()=>[e(v,{modelValue:o.value.meta.menu,"onUpdate:modelValue":l[16]||(l[16]=n=>o.value.meta.menu=n)},{default:a(()=>[u(" 显示菜单 ")]),_:1},8,["modelValue"]),e(v,{modelValue:o.value.meta.breadcrumb,"onUpdate:modelValue":l[17]||(l[17]=n=>o.value.meta.breadcrumb=n)},{default:a(()=>[u(" 显示面包屑 ")]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"接口权限:",prop:"apiPermissionsIdList",class:"col-span-2"},{default:a(()=>[e(M,{modelValue:o.value.apiPermissionsIdList,"onUpdate:modelValue":l[18]||(l[18]=n=>o.value.apiPermissionsIdList=n),multiple:"",columns:A(X),"request-api":A(le),"table-props":{label:"name",value:"id"}},null,8,["modelValue","columns","request-api"])]),_:1})]),_:1},8,["model","rules"])])):(y(),P("div",fe,[e(r,{description:"请选择左侧菜单后操作","image-size":100})]))]),d("div",ge,[e(H,{value:["add:menu:btn"]},{default:a(()=>[e(G,{type:"primary",loading:h.value,onClick:W},{default:a(()=>[u(" 保 存 ")]),_:1},8,["loading"])]),_:1})])],64)}}}),fl=ie(xe,[["__scopeId","data-v-b84e7a27"]]);export{fl as default};