
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

const __vite__fileDeps=["./index-DyTS3Lxc.js","./vue-esign-BNnrYaMl.js","./@vue-DJ53MWs5.js","../css/vue-esign-L8gvZECO.css","./index-CWXA9Xnn.js","./index-EBgu0xiU.js","./vite-plugin-fake-server-4rIte7rE.js","./mockjs-Dd0W0IWH.js","./@imengyu-BQwzwvVc.js","./vue-CAygiDOH.js","../css/@imengyu-B328e8Sj.css","./floating-vue-DjZaMi6K.js","./@floating-ui-Y0iFLo_g.js","../css/floating-vue-CkisWYDT.css","./vue-m-message-BxJX2Zqc.js","../css/vue-m-message-B24OszcH.css","./overlayscrollbars-CZjZ1Dbc.js","../css/overlayscrollbars-CGst_du_.css","./@iconify-C4HLlXtv.js","./overlayscrollbars-vue-BxfA_dC8.js","./@headlessui-Bm2TyfRI.js","./mitt-DJ65BbbF.js","./crypto-js-RCkyKLW7.js","./lodash-es-l8Yk8yFo.js","./pinia-DmVFObHF.js","./vue-demi-Dq6ymT-8.js","./vue-router-Bg2mojPD.js","./hotkeys-js-BfWqkGRU.js","./element-plus-DdTkCxgE.js","./@vueuse-Bz9Gvxjd.js","./nprogress-BdJdCxhg.js","./@element-plus-Ngrzdf6G.js","./@sxzz-D9SI2xQl.js","./@ctrl-r5W6hzzQ.js","./dayjs-p2P62yYc.js","./async-validator-CRbnkQr6.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-B6fDCfyv.js","../css/element-plus-Btye3PdL.css","./vue-i18n-BnGu2oZ8.js","./@intlify-CEEhciFb.js","./colord-CrBFWQzZ.js","./monaco-editor-PTJBK6lV.js","../css/monaco-editor-F5UdC8UO.css","./path-browserify-DTVwunqE.js","./axios-DmypytPv.js","../css/index-B_5LBRhi.css","./icon.vue_vue_type_script_setup_true_lang-CXPPfzEY.js","./index-UHZvj2w8.js","./index-CHnRhHdo.js","./vuedraggable-Ce-5l_FJ.js","./sortablejs-C_eVYoc1.js","./string-DlSNwMlA.js","./index-BlyR8I0x.js","./index-BXVFjQiQ.js","../css/index-Db3zgr0n.css","./index-DuB7YUlV.js","./index-ngwsTW-r.js","./index-DXIKTC7e.js","./index-Cz3AGAqS.js","./tree.vue_vue_type_script_setup_true_lang-DHVxNM7X.js","./index-DcmDPo48.js","./index-7Z9FhGdS.js","./index-DOkK7ppQ.js","./index-CPY7ZjFE.js","./index-T0O-EpEq.js","./index-D559mUfz.js","./outline-CPpAhXi0.js","./attributeView-s99_6jyN.js","./styleView-Cd8Fv66i.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{p as L,n as J,o as re,_ as Ie}from"./index-EBgu0xiU.js";import{_ as w}from"./monaco-editor-PTJBK6lV.js";import{u as xe}from"./vue-router-Bg2mojPD.js";import{g as fe,c as De}from"./string-DlSNwMlA.js";import{r as y,o as me,w as R,e as he,d as W,k as Q,i as q,a7 as Se,p as z,s as Pe,b as K,aj as Ce,u as x,a as O,W as N,X as S,Z as ue,U as te,a1 as $,ae as ce,af as de,R as M,_ as _e,l as ve,V as Ve,c as j,f as F,F as Ae,aa as Re,aL as ye,n as ae,m as Oe,ag as pe,aw as Te,ax as $e}from"./@vue-DJ53MWs5.js";import{y as Le,z as Me,A as ne,B as oe}from"./@vueuse-Bz9Gvxjd.js";import{_ as ze}from"./vue-esign-BNnrYaMl.js";function B(t,s=new WeakMap){if(typeof t!="object"||t===null)return t;if(s.has(t))return s.get(t);if(Array.isArray(t)){const n=t.map(o=>B(o,s));return s.set(t,n),n}const a={};return s.set(t,a),Object.keys(t).forEach(n=>{a[n]=B(t[n],s)}),a}function bt(t){const[s]=Be([B(t)],a=>{var o,e;const n={...a,id:`${a.type}_${fe(8)}`};return(n.field||n.input)&&!((e=(o=L.getComponentConfingByType(n.type))==null?void 0:o.editConstraints)!=null&&e.fixedField)&&(n.field=n.id),n});return s}function X(t,s){for(const[a,n]of Object.entries(s)){const o=t==null?void 0:t[a];o&&n&&typeof o=="object"&&typeof n=="object"?X(o,n):t[a]=n}Object.keys(t).reverse().forEach(a=>{Object.prototype.hasOwnProperty.call(s,a)||(Array.isArray(s)?t.splice(a,1):delete t[a])})}function ge(t,s,a=[],n=new WeakMap){const o=e=>{if(Array.isArray(e))return e.map(o);if(typeof e=="object"&&e!==null){if(n.has(e))return"[Circular]";n.set(e,!0);const l=Object.keys(e).sort(),r={};return l.forEach(f=>{a.includes(f)||(r[f]=o(e[f]))}),n.delete(e),r}else return e};return JSON.stringify(o(t))===JSON.stringify(o(s))}function Fe(t,s){const a=[];let n=!1;function o(e){if(a.push(e),e.id===s&&(n=!0),!n&&e.children!=null&&e.children.length>0)for(let l=0;l<e.children.length&&(o(e.children[l]),!n);l++);if(!n&&e.slots)for(let l in e.slots)for(let r=0;r<e.slots[l].length&&(o(e.slots[l][r]),!n);r++);n||a.pop()}return t.forEach(o),a}function Et(t,s){const a=t.split(".");let n=s;for(let o=0;o<a.length;o++)if(n=n[a[o]],typeof n>"u")return;return n}function wt(t,s,a){const n=s.split(".");let o=a;n.forEach((e,l)=>{if(l===n.length-1){o[e]=t;return}o=o[e]??(o[e]={})})}function se(t,s,a=!1,n){const o=[],e=[...t];for(;e.length;){const l=e.pop();if(l!=null&&l.children&&!n&&e.push(...l.children),l!=null&&l.slots&&!n)for(let r in l.slots)e.push(...l.slots[r]);if(s(l)&&(o.push(l),a))return l}return a?!1:o}function Be(t,s,a){const n=[...t];for(;n.length;){const o=n.pop();if(o!=null&&o.children&&!a&&n.push(...o.children),o!=null&&o.slots&&!a)for(let e in o.slots)n.push(...o.slots[e]);X(o,s(o))}return t}function kt(t,s){const a=se(t,n=>n.id===s,!0);if(!a)throw new Error(`没有查询到id为${s}的节点`);return a}function It(t,s){const a=[{type:"",children:t}];let n=0,o=null;if(se(a,e=>{if(o=e.children??null,!o){if(e!=null&&e.slots)for(let l in e.slots){o=e.slots[l];for(let r=0;r<o.length;r++)if(o[r].id===s)return n=r,!0}return!1}for(let l=0;l<o.length;l++)if(o[l].id===s)return n=l,!0;return!1},!0),!o)throw new Error(`没有查询到id为${s}的节点`);return{list:o,schema:o[n],index:n}}function xt(t,s="children"){let a=[];const n=[];for(a=a.concat(t);a.length;){const o=a.shift();o[s]&&(a=a.concat(o[s]),delete o[s]),n.push(o)}return n}function Dt(){const{isDark:t}=G(),s=Le(t);return{isDark:t,toggleDark:s}}function Ne(){const t=y(!1);return me(()=>{Ue(t),He(t)}),R(()=>t.value,()=>{t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),{isDark:t}}function Ue(t){let s=document.documentElement;s&&(s.classList.contains("dark")?t.value=!0:t.value=!1)}function He(t){let s=document.querySelector("html"),a=new MutationObserver(n=>{for(let o of n)if(o.type==="attributes"&&o.attributeName==="class"){const e=o.target;t.value=Array.from(e.classList).includes("dark")}});a.observe(s,{attributes:!0,attributeFilter:["class"]}),he(()=>{a.disconnect()})}function Ze(){const t=y(1),s=y(!1),{isDark:a}=Ne(),{pressSpace:n,pressShift:o,pressCtrl:e}=qe();return{canvasScale:t,pressSpace:n,pressShift:o,pressCtrl:e,disabledZoom:s,isDark:a}}const G=Me(Ze);function qe(){const t=y(!1),s=y(!1),a=y(!1);return ne(" ",n=>{let o=n.target;["INPUT","TEXTAREA"].includes(o.tagName)||n.preventDefault(),t.value=!0}),oe(" ",()=>{t.value=!1}),ne("Shift",n=>{n.preventDefault(),s.value=!0}),oe("Shift",()=>{s.value=!1}),ne("Control",n=>{n.preventDefault(),a.value=!0}),oe("Control",()=>{a.value=!1}),{pressSpace:t,pressShift:s,pressCtrl:a}}function St(t){const{pressSpace:s}=G();let a=0,n=0;function o(r){var f;a=r.x,n=r.y,(f=r.dataTransfer)==null||f.setDragImage(document.createElement("div"),0,0)}function e(r){if(r.preventDefault(),!r.x||!r.y||!s.value)return;const f=r.x-a,g=r.y-n;a=r.x,n=r.y,t.value&&(t.value.scrollTop-=g,t.value.scrollLeft-=f)}function l(){s.value=!1}return{handleElementDragStart:o,handleElementDrag:e,handleElementDragEnd:l}}function Pt(t){const{pressCtrl:s,canvasScale:a,disabledZoom:n}=G();function o(e){if(!s.value||n.value)return;e.preventDefault();let l=0;e.deltaY<0?l=a.value+.05:l=a.value-.05,!(l>150||l<.5)&&(a.value=l)}return R(()=>a.value,e=>{t.value&&!n.value&&(t.value.style.transform=`scale(${e})`)}),{handleZoom:o,canvasScale:a}}function Ct(t,s=16.66){let a;function n(){o(),a=window.setInterval(t,s)}function o(){window.clearInterval(a)}return{startTimedQuery:n,stopTimedQuery:o}}function be(){const t=y({}),s=y({}),a=y(!1),n=y([]);function o(d){return t.value[d]}function e(d,u){t.value[d]=u}function l(d){delete t.value[d]}function r(d,u=!1){const _=Object.entries(L.publicMethods).reduce((E,[v,c])=>(E[v]=c.handler,E),{});try{new Function(`const elegant = this;${d}`).bind({..._,getComponent:o,find:o,defineExpose:f,publicMethods:_,pluginManager:L})()}catch{}}function f(d){d!=null&&(s.value=d)}function g(d,...u){d==null||d.forEach(_=>{var E,v,c;_.type==="public"&&((E=L.publicMethods[_.methodName])==null||E.handler(...u)),_.type==="custom"&&((c=(v=s.value)[_.methodName])==null||c.call(v,...u)),_.type==="component"&&(_.componentId!=null&&o(_.componentId))[_.methodName](..._.args?JSON.parse(_.args):u)})}function D(d=!0){a.value=d}function T(d){const u=se(d,()=>!0);n.value=u.map(_=>_.id)}return{componentInstances:t,funcs:s,isDesignMode:a,defaultComponentIds:n,getComponentInstance:o,find:o,addComponentInstance:e,removeComponentInstance:l,setMethods:r,doActions:g,setDesignMode:D,setDefaultComponentIds:T}}const Je=W({name:"ENode",__name:"node",props:{componentSchema:{},modelValue:{},ruleField:{},resetFormData:{type:Boolean},name:{}},emits:["update:modelValue","change"],setup(t,{emit:s}){const a=t,n=s,{proxy:o}=ve();let e=Q(B(a.componentSchema));R(()=>a.componentSchema,i=>{ge(e,i,["children"])||X(e,B(i))},{deep:!0});let l=q("formData",{});const r=q("slots",{}),f=q("pageManager",{}),g=q("disabled",{value:!1}),D=q("ruleFieldPrefix",null),T=q("resetFormData",!1);(a.resetFormData||T)&&(l={});const d=L.getComponent("form-item"),u=y(),_=y(),E=Se();Object.keys(E).length&&z("nodeAttrs",E);const v=Pe(null),c=Q({}),k=K(()=>{var i,m;return(i=e.componentProps)!=null&&i.hidden?!1:typeof e.show=="boolean"?e.show:((m=e.show)==null?void 0:m.call(e,{values:l}))??!0}),A=K(()=>{var V;const i=k.value&&((V=e.rules)==null?void 0:V.map(h=>({...h,validator:h.validator&&f.funcs.value[h.validator]})));let m=e.field;a.ruleField?m=a.ruleField:D&&e.field&&(m=B(D),m.push(e.field));const I={...e,rules:i,rule:i,field:m};return I.children&&delete I.children,I}),b=K(()=>L.getComponentConfingByType(e.type)??null),P=K(()=>{var I,V;const i=((I=b.value)==null?void 0:I.bindModel)??"modelValue",m={};return e.on&&Object.keys(e.on).forEach(h=>{m[`on${De(h)}`]=(...Z)=>f.doActions(e.on[h],...Z)}),{...a,...e.componentProps,disabled:(g==null?void 0:g.value)||((V=e.componentProps)==null?void 0:V.disabled),bindModel:i,[`onUpdate:${i}`]:p,...m}});function C(){return l[e.field??""]??a.modelValue}R(()=>u.value,()=>{H()},{immediate:!0});function H(){var m;const i=u.value||o;e.id&&i&&(e.input&&(i.setValue=p,i.getValue=()=>l[e.field]||a.modelValue),i.setAttr=(I,V)=>e.componentProps[I]=V,i.getAttr=I=>e.componentProps[I],f.addComponentInstance(e.id,i),(m=b.value)!=null&&m.defaultSchema.input&&e.noFormItem!==!0&&_.value&&f.addComponentInstance(`${e.id}formItem`,_.value))}function ee(){var i;e.id&&(f.removeComponentInstance(e.id),(i=b.value)!=null&&i.defaultSchema.input&&e.noFormItem!==!0&&f.removeComponentInstance(`${e.id}formItem`))}async function Y(){var m,I,V;if(typeof((m=e.componentProps)==null?void 0:m.defaultValue)<"u"){const h=f.isDesignMode.value?(I=e.componentProps)==null?void 0:I.defaultValue:l[e.field]??((V=e.componentProps)==null?void 0:V.defaultValue);p(B(h))}if(e.type==="slot"){const h=e.slotName;if(!h)return;v.value=W({setup(){return()=>M(r,h,{componentSchema:e,model:l})}});return}const i=L.getComponent(e.type);if(i)if(typeof i=="function"){const h=await i();v.value=h.default??h}else v.value=i}function p(i){Ee(i),n("update:modelValue",i),n("change",i,e),e.field&&(l[e.field]=i)}const U=y([]),le=y("");function Ee(i){var m,I,V;if(["select","checkbox","radio","cascader"].includes(e.type)){le.value!==i&&U.value&&U.value.length&&U.value.forEach(Z=>{ke(Z)});let h=(I=(m=e.componentProps)==null?void 0:m.options)==null?void 0:I.find(Z=>Z.value===i);h!=null&&h.links&&((V=h==null?void 0:h.links)!=null&&V.length)&&(le.value=i,U.value=h.links||[],h.links.forEach(Z=>{we(Z)}))}}function we(i){const m=f.getComponentInstance(i);m&&m.setAttr("hidden",!1)}function ke(i){const m=f.getComponentInstance(i);m&&m.setAttr("hidden",!0)}let ie=null;return R(()=>e,i=>{const m=JSON.stringify({...i,children:void 0});if(m===ie)return!1;ie=m,Y()},{immediate:!0,deep:!0}),he(ee),(i,m)=>{var V;const I=Ce("ENode");return x(e).noFormItem!==!0&&((V=b.value)!=null&&V.defaultSchema.input)&&v.value&&k.value?(O(),N(x(d),te({key:0,ref_key:"formItemRef",ref:_},A.value),{default:S(()=>[(O(),N(ue(v.value),te({ref_key:"componentInstance",ref:u},{...P.value,...c,[P.value.bindModel]:C()},{onVnodeMounted:H}),{node:S(h=>[$(I,ce(de(h)),null,16)]),"edit-node":S(()=>[M(i.$slots,"edit-node")]),_:3},16))]),_:3},16)):v.value&&k.value?(O(),N(ue(v.value),te({key:1,ref_key:"componentInstance",ref:u,model:x(l)},{...P.value,...c,[P.value.bindModel]:C()},{onVnodeMounted:H}),{node:S(h=>[$(I,ce(de(h)),null,16)]),"edit-node":S(()=>[M(i.$slots,"edit-node")]),_:3},16,["model"])):_e("",!0)}}}),Ke={key:0,class:"elegant-loading-box"},We={class:"elegant-builder-main"},Xe={class:"elegant-loading-box"},Qe=W({__name:"builder",props:{pageSchema:{},disabled:{type:Boolean}},emits:["ready"],setup(t,{expose:s,emit:a}){const n=t,o=a,e=J(()=>w(()=>import("./index-DyTS3Lxc.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),l=be(),r=Ve(),f=y({}),g=y(!1),D=Q({schemas:[]});R(()=>n.pageSchema,c=>{X(D,c)},{immediate:!0,deep:!0}),R(()=>D.script,c=>{c&&c!==""&&l.setMethods(c,!0)},{immediate:!0}),z("slots",r),z("pageManager",l),z("forms",f),z("pageSchema",D),z("disabled",K(()=>n.disabled));function T(c="default"){return new Promise(async(k,A)=>{var C;if(!g.value){const H=R(g,async()=>{H(),k(await T(c))});return}const b=(C=f.value)==null?void 0:C[c];if(!b)return A(`表单 [name=${c}] 不存在`),!1;const P=B(await b.getData());k(P)})}function d(c="default"){return new Promise(async(k,A)=>{var P;if(!g.value){const C=R(g,async()=>{C(),k(await d(c))});return}const b=(P=f.value)==null?void 0:P[c];if(!b)return A(`表单 [name=${c}] 不存在`),!1;try{await b.validate();const C=await b.getData();k(C)}catch(C){A(C)}})}function u(c,k="default"){var b;if(!g.value){const P=R(g,()=>{P(),u(c,k)});return}const A=(b=f.value)==null?void 0:b[k];if(!A)return!1;A.setData(c)}function _(c="default"){return new Promise(async(k,A)=>{var P;if(!g.value){const C=R(g,async()=>{C(),k(await _(c))});return}const b=(P=f.value)==null?void 0:P[c];if(!b)return A(`表单 [name=${c}] 不存在`),!1;k(b)})}const{proxy:E}=ve();function v(){ae(()=>{g.value=!0,o("ready",l),E&&l.addComponentInstance("builder",E)})}return s({ready:g,getData:T,setData:u,validate:d,getFormInstance:_}),(c,k)=>x(L).initialized.value?(O(),N(ye,{key:1,onResolve:v},{default:S(()=>[F("div",We,[(O(!0),j(Ae,null,Re(D.schemas,(A,b)=>(O(),N(x(Je),{key:b,"component-schema":A},null,8,["component-schema"]))),128))])]),fallback:S(()=>[F("div",Xe,[$(x(e))])]),_:1})):(O(),j("div",Ke))}}),Ye={class:"min-w-750px rounded"},je={class:"h-full rounded"},Ge=W({__name:"index",setup(t,{expose:s}){const a=L.getComponent("monacoEditor"),n=L.getComponent("modal"),o=y(null),e=y(!1),l=y(!1),r=y({}),f=q("pageSchema"),g=y(null),D=y("");function T(){l.value=!1}function d(){e.value=!1}function u(){e.value=!0,D.value=fe()}async function _(){try{const E=await g.value.validate();r.value=JSON.stringify(E,null,2),ae(()=>{var v;(v=o.value)==null||v.setValue(r.value)}),l.value=!0}catch(E){typeof E=="string"&&alert(`${E}\r
请添加表单组件后再尝试！`)}}return s({handleOpen:u}),(E,v)=>(O(),N(x(n),{modelValue:e.value,"onUpdate:modelValue":v[1]||(v[1]=c=>e.value=c),title:"预览",class:"w-900px",width:"900px","ok-text":"输出结果",onClose:d,onOk:_},{default:S(()=>[F("div",Ye,[(O(),N(x(Qe),{key:D.value,ref_key:"kb",ref:g,"page-schema":x(f)},null,8,["page-schema"])),$(x(n),{modelValue:l.value,"onUpdate:modelValue":v[0]||(v[0]=c=>l.value=c),title:"表单数据",class:"w-860px",width:"860px",onClose:T,onOk:T},{default:S(()=>[F("div",je,[$(x(a),{ref_key:"monacoEditorRef",ref:o,"auto-toggle-theme":"",class:"editor h-full","model-value":r.value},null,8,["model-value"])])]),_:1},8,["modelValue"])])]),_:1},8,["modelValue"]))}}),et={key:0,class:"elegant-loading-box"},tt={class:"elegant-designer-main"},nt={class:"elegant-header-container"},ot={class:"elegant-loading-box"},at=W({__name:"designer",props:{disabledZoom:{type:Boolean,default:!1},hiddenHeader:{type:Boolean,default:!1},lockDefaultSchemaEdit:{type:Boolean,default:!1},title:{default:"EpicDesigner默认项目"},defaultSchema:{default:()=>({schemas:[{type:"page",id:"root",label:"页面",children:[],componentProps:{style:{padding:"16px"}}}],script:""})}},emits:["ready","save","reset","toggleDeviceMode"],setup(t,{expose:s,emit:a}){const n=t,o=a,e=J(()=>w(()=>import("./index-CWXA9Xnn.js"),__vite__mapDeps([4,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]),import.meta.url)),l=J(()=>w(()=>import("./index-UHZvj2w8.js"),__vite__mapDeps([48,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]),import.meta.url)),r=J(()=>w(()=>import("./index-CHnRhHdo.js"),__vite__mapDeps([49,2,29,30,8,9,10,5,6,7,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50,51,52,1,3]),import.meta.url)),f=J(()=>w(()=>import("./index-BlyR8I0x.js"),__vite__mapDeps([53,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]),import.meta.url)),g=J(()=>w(()=>import("./index-DyTS3Lxc.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),D=be();D.setDesignMode(),D.setDefaultComponentIds(n.defaultSchema.schemas);const T=y(null),d=Q({checkedNode:null,hoverNode:null,disableHover:!1,matched:[]}),u=Q({schemas:[],script:n.defaultSchema.script}),{disabledZoom:_}=G();R(()=>n.disabledZoom,p=>{_.value=p},{immediate:!0}),R(()=>u.script,p=>{p&&p!==""&&D.setMethods(p)},{immediate:!0}),z("pageSchema",u),z("pageManager",D),z("designerProps",K(()=>n)),z("designer",{setCheckedNode:v,setHoverNode:c,setDisableHover:A,handleToggleDeviceMode:ee,reset:C,state:d});function E(){u.schemas=B(n.defaultSchema.schemas),v(u.schemas[0]),re.push(u.schemas,"初始化撤销功能")}async function v(p=u.schemas[0]){d.checkedNode=p,d.matched=Fe(u.schemas,p.id)}async function c(p=null){var U;if(!p||d.disableHover)return d.hoverNode=null,!1;if((p==null?void 0:p.id)===((U=d.hoverNode)==null?void 0:U.id))return!1;d.hoverNode=p}function k(){ae(()=>{o("ready",{pageManager:D})})}async function A(p=!1){d.disableHover=p}function b(p){X(u,p)}function P(){return pe(u)}function C(){ge(u.schemas,n.defaultSchema.schemas)&&u.script===n.defaultSchema.script||(X(u.schemas,n.defaultSchema.schemas),u.script=n.defaultSchema.script,v(u.schemas[0]),re.push(u.schemas,"重置操作"),o("reset",u))}function H(){o("save",pe(u))}function ee(p){o("toggleDeviceMode",p)}function Y(){T.value.handleOpen()}return E(),s({setData:b,getData:P,reset:C,preview:Y}),(p,U)=>x(L).initialized.value?(O(),N(ye,{key:1,onResolve:k},{default:S(()=>[F("div",tt,[F("div",nt,[M(p.$slots,"header",{},()=>[n.hiddenHeader?_e("",!0):(O(),N(x(e),{key:0,onPreview:Y,onSave:H},{header:S(()=>[M(p.$slots,"header-prefix")]),prefix:S(()=>[M(p.$slots,"header-prefix")]),title:S(()=>[M(p.$slots,"header-title")]),"right-prefix":S(()=>[M(p.$slots,"header-right-prefix")]),"right-action":S(()=>[M(p.$slots,"header-right-action")]),"right-suffix":S(()=>[M(p.$slots,"header-right-suffix")]),_:3}))])]),F("div",{class:Oe(["elegant-split-view-container",{"hidden-header":p.hiddenHeader}])},[$(x(l)),$(x(r)),$(x(f))],2),$(Ge,{ref_key:"previewRef",ref:T},null,512)])]),fallback:S(()=>[F("div",ot,[$(x(g))])]),_:3})):(O(),j("div",et))}}),st={component:async()=>await w(()=>import("./index-BXVFjQiQ.js"),__vite__mapDeps([54,42,43,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,44,45,46,1,3,52,55]),import.meta.url),defaultSchema:{label:"代码编辑器",type:"monacoEditor",field:"monacoEditor",icon:"elegant-icon-write",input:!0},config:{attribute:[{label:"字段名",type:"input",field:"field"},{label:"标题",type:"input",field:"label"},{label:"默认值",type:"monacoEditor",field:"componentProps.defaultValue"}]},bindModel:"model-value"},lt={component:async()=>await w(()=>import("./index-DuB7YUlV.js"),__vite__mapDeps([56,2]),import.meta.url),defaultSchema:{label:"页面",type:"page",componentProps:{},children:[]},config:{attribute:[{label:"页面名称",type:"input",componentProps:{placeholder:"请输入"},field:"componentProps.name"}]}};function it(t){t.component("EInputSize",async()=>await w(()=>import("./index-ngwsTW-r.js"),__vite__mapDeps([57,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]),import.meta.url)),t.component("EColEditor",async()=>await w(()=>import("./index-DXIKTC7e.js"),__vite__mapDeps([58,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,52,47]),import.meta.url)),t.component("EActionEditor",async()=>await w(()=>import("./index-Cz3AGAqS.js"),__vite__mapDeps([59,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,50,51,47,52,60,1,3]),import.meta.url)),t.component("ERuleEditor",async()=>await w(()=>import("./index-DcmDPo48.js"),__vite__mapDeps([61,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,52,1,3]),import.meta.url)),t.component("EOptionsEditor",async()=>await w(()=>import("./index-7Z9FhGdS.js"),__vite__mapDeps([62,2,29,30,8,9,10,5,6,7,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,52,50,51,47]),import.meta.url)),t.component("ENode",async()=>await w(()=>import("./index-DOkK7ppQ.js"),__vite__mapDeps([63,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,52,1,3]),import.meta.url)),t.component("EOptionCorrelation",async()=>await w(()=>import("./index-CPY7ZjFE.js"),__vite__mapDeps([64,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,52,1,3]),import.meta.url)),t.registerActivitybar({id:"component_view",title:"组件",icon:"elegant-icon-mokuai_1",component:async()=>await w(()=>import("./index-T0O-EpEq.js"),__vite__mapDeps([65,2,50,8,9,10,51,5,6,7,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,52,1,3]),import.meta.url)}),t.registerActivitybar({id:"sound_code_view",title:"源码",icon:"elegant-icon-daima1",component:async()=>await w(()=>import("./index-D559mUfz.js"),__vite__mapDeps([66,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,52,1,3]),import.meta.url)}),t.registerActivitybar({id:"outline_view",title:"大纲",icon:"elegant-icon-juxingkaobei",component:async()=>await w(()=>import("./outline-CPpAhXi0.js"),__vite__mapDeps([67,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,60,47,50,51]),import.meta.url)}),t.registerRightSidebar({id:"attribute_view",title:"属性",component:async()=>await w(()=>import("./attributeView-s99_6jyN.js"),__vite__mapDeps([68,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,52,1,3]),import.meta.url)}),t.registerRightSidebar({id:"style_view",title:"样式",component:async()=>await w(()=>import("./styleView-Cd8Fv66i.js"),__vite__mapDeps([69,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,52,1,3]),import.meta.url)}),[st,lt].forEach(a=>{t.registerComponent(a)})}it(L);const rt=t=>(Te("data-v-28197f8d"),t=t(),$e(),t),ut={class:"elegant-designer-box"},ct=rt(()=>F("span",{class:"ml-4px text-14px"},"返回",-1)),dt=W({__name:"index",setup(t){const s=xe(),a=y(),n={schemas:[{type:"page",id:"root",label:"页面",children:[{label:"表单",type:"form",componentProps:{name:"default",labelWidth:100,"label-position":"top"},children:[{label:"您的身份是",type:"radio",field:"radio_xpls3ww4",input:!0,componentProps:{options:[{label:"家长",value:"option_22i498sd"},{label:"学生",value:"option_b94fenks",links:[]}],size:"default"},id:"radio_xpls3ww4"},{label:"您（或您的孩子）所选择课程是",type:"radio",field:"radio_uonztj0i",input:!0,componentProps:{options:[{label:"语文",value:"option_22i498sd"},{label:"数学",value:"option_uc1rdff4",links:[]},{label:"英语",value:"option_n96uigyg",links:[]}],size:"default"},id:"radio_uonztj0i"},{label:"授课老师为",type:"select",field:"select_jvojdh2k",input:!0,componentProps:{options:[{label:"托尼老师",value:"option_694vkr5f",links:[]},{label:"张三丰老师",value:"option_1huuovdc",links:[]},{label:"张雪峰老师",value:"option_n9il8y2c",links:[]}],placeholder:"请选择",size:"default",effect:"light",placement:"bottom-start"},id:"select_jvojdh2k"},{label:"您有极大可能把我们推荐给身边的朋友",type:"radio",field:"radio_jm1kxy75",input:!0,componentProps:{options:[{label:"不可能",value:"option_22i498sd",links:["slider_es0mehas"]},{label:"极有可能",value:"option_awrynffg",links:["slider_es0mehas"]}],size:"default"},id:"radio_jm1kxy75"},{label:"请从0到10进行打分",type:"slider",field:"slider_es0mehas",input:!0,componentProps:{placement:"top-start",showTooltip:!0,hidden:!0},id:"slider_es0mehas"},{label:"您对课程的满意程度为？",type:"radio",field:"radio_cdlaku47",input:!0,componentProps:{options:[{label:"很不满意",value:"option_22i498sd",links:["slider_ggjxvqg7"]},{label:"非常满意",value:"option_vzx5c2l3",links:["slider_ggjxvqg7"]}],size:"default"},id:"radio_cdlaku47"},{label:"请从0到10进行打分",type:"slider",field:"slider_ggjxvqg7",input:!0,componentProps:{placement:"top-start",showTooltip:!0,hidden:!0},id:"slider_ggjxvqg7"},{label:"上课后，学生成绩是否有所提高？",type:"radio",field:"radio_f8ntslo0",input:!0,componentProps:{options:[{label:"明显提高",value:"option_22i498sd"},{label:"有所提高",value:"option_umfx0rva",links:[]},{label:"没有明显效果",value:"option_1prpfoag",links:[]}],size:"default"},id:"radio_f8ntslo0"},{label:"您是否愿意继续参加我们的其他课程？",type:"radio",field:"radio_at4xbyag",input:!0,componentProps:{options:[{label:"愿意继续参加",value:"option_22i498sd"},{label:"需要考虑",value:"option_s48xc4ws",links:[]},{label:"不再参加",value:"option_018npznl",links:[]}],size:"default"},id:"radio_at4xbyag"},{label:"您的意见和建议",type:"textarea",field:"textarea_5im11oab",input:!0,componentProps:{placeholder:"请输入",type:"textarea",autosize:{maxRows:5,minRows:5},maxlength:500},id:"textarea_5im11oab"}],id:"form_ay0pvtu0"}],componentProps:{style:{padding:"16px"}}}],script:"",canvas:{}};me(()=>{var e;(e=a.value)==null||e.setData(n)});function o(e){}return(e,l)=>{const r=Ie;return O(),j("div",ut,[$(x(at),{ref_key:"designerRef",ref:a,title:"调查问卷",onSave:o},{"header-prefix":S(()=>[F("div",{class:"header-back ml-10px flex cursor-pointer items-center rounded-4px px-10px py-4px text-18px font-500",onClick:l[0]||(l[0]=f=>x(s).back())},[$(r,{name:"ep:back"}),ct])]),_:1},512)])}}}),pt=ze(dt,[["__scopeId","data-v-28197f8d"]]),Vt=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));export{Je as _,Ct as a,St as b,Pt as c,X as d,kt as e,It as f,bt as g,B as h,xt as i,ge as j,Et as k,Dt as l,Vt as m,wt as s,G as u};