
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-5GddAViN.js";import{d as w,r as a,k as r,a1 as l,aj as f,a as h,W as x,X as s,f as o,u as i}from"./@vue-DJ53MWs5.js";const g=o("div",{class:"flex items-center justify-between"},[o("div",{class:"text-32rpx"}," 数据统计 ")],-1),P={class:"h-500px"},k={class:"table-box"},j=w({name:"ProjectNews",__name:"table_statistics",setup(T){function u(){let t=[{id:1,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:2,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:3,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:4,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:5,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:6,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:7,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:8,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:9,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:10,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188}];return new Promise(n=>{setTimeout(()=>{n({data:{records:t||[],total:100}})},1e3)})}const d=a(),c=r({});function C(t){return{list:t&&t.records||[],total:t&&t.total||0}}const e=a({});function p(t){e.value=t;let n={...t};return u()}const v=r([{prop:"index",label:"排序",width:80,render:t=>l("span",null,[t.$index+(e.value.pageNum-1)*e.value.pageSize+1])},{prop:"visitCount",label:"访问量",minWidth:100,sortable:!0,search:{el:"input"}},{prop:"turnover",label:"成交额",sortable:!0,minWidth:100},{prop:"downloadCount",label:"下载量",sortable:!0,minWidth:100},{prop:"dealCount",label:"成交量",sortable:!0,minWidth:100}]);return(t,n)=>{const m=b,_=f("ElCard");return h(),x(_,{title:"数据统计",shadow:"hover",class:"rounded-10px"},{header:s(()=>[g]),default:s(()=>[o("div",P,[o("div",k,[l(m,{ref_key:"proTableRef",ref:d,"tool-button":!1,"is-show-search":!1,border:!1,title:"资源管理","request-api":p,columns:i(v),"data-callback":C,"init-param":i(c),"show-pagination":!0,"highlight-current-row":""},null,8,["columns","init-param"])])])]),_:1})}}});export{j as _};