
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{d as A,n as xe,aw as He,ax as Ae,a as c,W as M,ay as Me,aj as T,c as S,f as v,F as Oe,R as N,_ as Q,S as j,m as K,ab as ke,X as x,a1 as ue,U as ce,ae as Be,af as Le,r as q,at as Ee,j as De,a0 as Re}from"./@vue-DJ53MWs5.js";import{e as Fe,g as Ie,h as je,i as Ve,j as We,k as Ge,B as qe,D as J}from"./@floating-ui-Y0iFLo_g.js";function fe(e,t){for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(typeof t[o]=="object"&&e[o]?fe(e[o],t[o]):e[o]=t[o])}const u={disabled:!1,distance:5,skidding:0,container:"body",boundary:void 0,instantMove:!1,disposeTimeout:150,popperTriggers:[],strategy:"absolute",preventOverflow:!0,flip:!0,shift:!0,overflowPadding:0,arrowPadding:0,arrowOverflow:!0,autoHideOnMousedown:!1,themes:{tooltip:{placement:"top",triggers:["hover","focus","touch"],hideTriggers:e=>[...e,"click"],delay:{show:200,hide:0},handleResize:!1,html:!1,loadingContent:"..."},dropdown:{placement:"bottom",triggers:["click"],delay:0,handleResize:!0,autoHide:!0},menu:{$extend:"dropdown",triggers:["hover","focus"],popperTriggers:["hover"],delay:{show:0,hide:400}}}};function b(e,t){let o=u.themes[e]||{},i;do i=o[t],typeof i>"u"?o.$extend?o=u.themes[o.$extend]||{}:(o=null,i=u[t]):o=null;while(o);return i}function Ue(e){const t=[e];let o=u.themes[e]||{};do o.$extend&&!o.$resetCss?(t.push(o.$extend),o=u.themes[o.$extend]||{}):o=null;while(o);return t.map(i=>`v-popper--theme-${i}`)}function ee(e){const t=[e];let o=u.themes[e]||{};do o.$extend?(t.push(o.$extend),o=u.themes[o.$extend]||{}):o=null;while(o);return t}let w=!1;if(typeof window<"u"){w=!1;try{const e=Object.defineProperty({},"passive",{get(){w=!0}});window.addEventListener("test",null,e)}catch{}}let me=!1;typeof window<"u"&&typeof navigator<"u"&&(me=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);const ge=["auto","top","bottom","left","right"].reduce((e,t)=>e.concat([t,`${t}-start`,`${t}-end`]),[]),te={hover:"mouseenter",focus:"focus",click:"click",touch:"touchstart",pointer:"pointerdown"},oe={hover:"mouseleave",focus:"blur",click:"click",touch:"touchend",pointer:"pointerup"};function ie(e,t){const o=e.indexOf(t);o!==-1&&e.splice(o,1)}function V(){return new Promise(e=>requestAnimationFrame(()=>{requestAnimationFrame(e)}))}const l=[];let g=null;const se={};function ne(e){let t=se[e];return t||(t=se[e]=[]),t}let U=function(){};typeof window<"u"&&(U=window.Element);function r(e){return function(t){return b(t.theme,e)}}const W="__floating-vue__popper",ve=()=>A({name:"VPopper",provide(){return{[W]:{parentPopper:this}}},inject:{[W]:{default:null}},props:{theme:{type:String,required:!0},targetNodes:{type:Function,required:!0},referenceNode:{type:Function,default:null},popperNode:{type:Function,required:!0},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:r("disabled")},positioningDisabled:{type:Boolean,default:r("positioningDisabled")},placement:{type:String,default:r("placement"),validator:e=>ge.includes(e)},delay:{type:[String,Number,Object],default:r("delay")},distance:{type:[Number,String],default:r("distance")},skidding:{type:[Number,String],default:r("skidding")},triggers:{type:Array,default:r("triggers")},showTriggers:{type:[Array,Function],default:r("showTriggers")},hideTriggers:{type:[Array,Function],default:r("hideTriggers")},popperTriggers:{type:Array,default:r("popperTriggers")},popperShowTriggers:{type:[Array,Function],default:r("popperShowTriggers")},popperHideTriggers:{type:[Array,Function],default:r("popperHideTriggers")},container:{type:[String,Object,U,Boolean],default:r("container")},boundary:{type:[String,U],default:r("boundary")},strategy:{type:String,validator:e=>["absolute","fixed"].includes(e),default:r("strategy")},autoHide:{type:[Boolean,Function],default:r("autoHide")},handleResize:{type:Boolean,default:r("handleResize")},instantMove:{type:Boolean,default:r("instantMove")},eagerMount:{type:Boolean,default:r("eagerMount")},popperClass:{type:[String,Array,Object],default:r("popperClass")},computeTransformOrigin:{type:Boolean,default:r("computeTransformOrigin")},autoMinSize:{type:Boolean,default:r("autoMinSize")},autoSize:{type:[Boolean,String],default:r("autoSize")},autoMaxSize:{type:Boolean,default:r("autoMaxSize")},autoBoundaryMaxSize:{type:Boolean,default:r("autoBoundaryMaxSize")},preventOverflow:{type:Boolean,default:r("preventOverflow")},overflowPadding:{type:[Number,String],default:r("overflowPadding")},arrowPadding:{type:[Number,String],default:r("arrowPadding")},arrowOverflow:{type:Boolean,default:r("arrowOverflow")},flip:{type:Boolean,default:r("flip")},shift:{type:Boolean,default:r("shift")},shiftCrossAxis:{type:Boolean,default:r("shiftCrossAxis")},noAutoFocus:{type:Boolean,default:r("noAutoFocus")},disposeTimeout:{type:Number,default:r("disposeTimeout")}},emits:{show:()=>!0,hide:()=>!0,"update:shown":e=>!0,"apply-show":()=>!0,"apply-hide":()=>!0,"close-group":()=>!0,"close-directive":()=>!0,"auto-hide":()=>!0,resize:()=>!0},data(){return{isShown:!1,isMounted:!1,skipTransition:!1,classes:{showFrom:!1,showTo:!1,hideFrom:!1,hideTo:!0},result:{x:0,y:0,placement:"",strategy:this.strategy,arrow:{x:0,y:0,centerOffset:0},transformOrigin:null},randomId:`popper_${[Math.random(),Date.now()].map(e=>e.toString(36).substring(2,10)).join("_")}`,shownChildren:new Set,lastAutoHide:!0,pendingHide:!1,containsGlobalTarget:!1,isDisposed:!0,mouseDownContains:!1}},computed:{popperId(){return this.ariaId!=null?this.ariaId:this.randomId},shouldMountContent(){return this.eagerMount||this.isMounted},slotData(){return{popperId:this.popperId,isShown:this.isShown,shouldMountContent:this.shouldMountContent,skipTransition:this.skipTransition,autoHide:typeof this.autoHide=="function"?this.lastAutoHide:this.autoHide,show:this.show,hide:this.hide,handleResize:this.handleResize,onResize:this.onResize,classes:{...this.classes,popperClass:this.popperClass},result:this.positioningDisabled?null:this.result,attrs:this.$attrs}},parentPopper(){var e;return(e=this[W])==null?void 0:e.parentPopper},hasPopperShowTriggerHover(){var e,t;return((e=this.popperTriggers)==null?void 0:e.includes("hover"))||((t=this.popperShowTriggers)==null?void 0:t.includes("hover"))}},watch:{shown:"$_autoShowHide",disabled(e){e?this.dispose():this.init()},async container(){this.isShown&&(this.$_ensureTeleport(),await this.$_computePosition())},triggers:{handler:"$_refreshListeners",deep:!0},positioningDisabled:"$_refreshListeners",...["placement","distance","skidding","boundary","strategy","overflowPadding","arrowPadding","preventOverflow","shift","shiftCrossAxis","flip"].reduce((e,t)=>(e[t]="$_computePosition",e),{})},created(){this.autoMinSize,this.autoMaxSize},mounted(){this.init(),this.$_detachPopperNode()},activated(){this.$_autoShowHide()},deactivated(){this.hide()},beforeUnmount(){this.dispose()},methods:{show({event:e=null,skipDelay:t=!1,force:o=!1}={}){var i,s;(i=this.parentPopper)!=null&&i.lockedChild&&this.parentPopper.lockedChild!==this||(this.pendingHide=!1,(o||!this.disabled)&&(((s=this.parentPopper)==null?void 0:s.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_scheduleShow(e,t),this.$emit("show"),this.$_showFrameLocked=!0,requestAnimationFrame(()=>{this.$_showFrameLocked=!1})),this.$emit("update:shown",!0))},hide({event:e=null,skipDelay:t=!1}={}){var o;if(!this.$_hideInProgress){if(this.shownChildren.size>0){this.pendingHide=!0;return}if(this.hasPopperShowTriggerHover&&this.$_isAimingPopper()){this.parentPopper&&(this.parentPopper.lockedChild=this,clearTimeout(this.parentPopper.lockedChildTimer),this.parentPopper.lockedChildTimer=setTimeout(()=>{this.parentPopper.lockedChild===this&&(this.parentPopper.lockedChild.hide({skipDelay:t}),this.parentPopper.lockedChild=null)},1e3));return}((o=this.parentPopper)==null?void 0:o.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.pendingHide=!1,this.$_scheduleHide(e,t),this.$emit("hide"),this.$emit("update:shown",!1)}},init(){var e;this.isDisposed&&(this.isDisposed=!1,this.isMounted=!1,this.$_events=[],this.$_preventShow=!1,this.$_referenceNode=((e=this.referenceNode)==null?void 0:e.call(this))??this.$el,this.$_targetNodes=this.targetNodes().filter(t=>t.nodeType===t.ELEMENT_NODE),this.$_popperNode=this.popperNode(),this.$_innerNode=this.$_popperNode.querySelector(".v-popper__inner"),this.$_arrowNode=this.$_popperNode.querySelector(".v-popper__arrow-container"),this.$_swapTargetAttrs("title","data-original-title"),this.$_detachPopperNode(),this.triggers.length&&this.$_addEventListeners(),this.shown&&this.show())},dispose(){this.isDisposed||(this.isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.$_detachPopperNode(),this.isMounted=!1,this.isShown=!1,this.$_updateParentShownChildren(!1),this.$_swapTargetAttrs("data-original-title","title"))},async onResize(){this.isShown&&(await this.$_computePosition(),this.$emit("resize"))},async $_computePosition(){if(this.isDisposed||this.positioningDisabled)return;const e={strategy:this.strategy,middleware:[]};(this.distance||this.skidding)&&e.middleware.push(Fe({mainAxis:this.distance,crossAxis:this.skidding}));const t=this.placement.startsWith("auto");if(t?e.middleware.push(Ie({alignment:this.placement.split("-")[1]??""})):e.placement=this.placement,this.preventOverflow&&(this.shift&&e.middleware.push(je({padding:this.overflowPadding,boundary:this.boundary,crossAxis:this.shiftCrossAxis})),!t&&this.flip&&e.middleware.push(Ve({padding:this.overflowPadding,boundary:this.boundary}))),e.middleware.push(We({element:this.$_arrowNode,padding:this.arrowPadding})),this.arrowOverflow&&e.middleware.push({name:"arrowOverflow",fn:({placement:i,rects:s,middlewareData:n})=>{let a;const{centerOffset:p}=n.arrow;return i.startsWith("top")||i.startsWith("bottom")?a=Math.abs(p)>s.reference.width/2:a=Math.abs(p)>s.reference.height/2,{data:{overflow:a}}}}),this.autoMinSize||this.autoSize){const i=this.autoSize?this.autoSize:this.autoMinSize?"min":null;e.middleware.push({name:"autoSize",fn:({rects:s,placement:n,middlewareData:a})=>{var p;if((p=a.autoSize)!=null&&p.skip)return{};let d,h;return n.startsWith("top")||n.startsWith("bottom")?d=s.reference.width:h=s.reference.height,this.$_innerNode.style[i==="min"?"minWidth":i==="max"?"maxWidth":"width"]=d!=null?`${d}px`:null,this.$_innerNode.style[i==="min"?"minHeight":i==="max"?"maxHeight":"height"]=h!=null?`${h}px`:null,{data:{skip:!0},reset:{rects:!0}}}})}(this.autoMaxSize||this.autoBoundaryMaxSize)&&(this.$_innerNode.style.maxWidth=null,this.$_innerNode.style.maxHeight=null,e.middleware.push(Ge({boundary:this.boundary,padding:this.overflowPadding,apply:({availableWidth:i,availableHeight:s})=>{this.$_innerNode.style.maxWidth=i!=null?`${i}px`:null,this.$_innerNode.style.maxHeight=s!=null?`${s}px`:null}})));const o=await qe(this.$_referenceNode,this.$_popperNode,e);Object.assign(this.result,{x:o.x,y:o.y,placement:o.placement,strategy:o.strategy,arrow:{...o.middlewareData.arrow,...o.middlewareData.arrowOverflow}})},$_scheduleShow(e,t=!1){if(this.$_updateParentShownChildren(!0),this.$_hideInProgress=!1,clearTimeout(this.$_scheduleTimer),g&&this.instantMove&&g.instantMove&&g!==this.parentPopper){g.$_applyHide(!0),this.$_applyShow(!0);return}t?this.$_applyShow():this.$_scheduleTimer=setTimeout(this.$_applyShow.bind(this),this.$_computeDelay("show"))},$_scheduleHide(e,t=!1){if(this.shownChildren.size>0){this.pendingHide=!0;return}this.$_updateParentShownChildren(!1),this.$_hideInProgress=!0,clearTimeout(this.$_scheduleTimer),this.isShown&&(g=this),t?this.$_applyHide():this.$_scheduleTimer=setTimeout(this.$_applyHide.bind(this),this.$_computeDelay("hide"))},$_computeDelay(e){const t=this.delay;return parseInt(t&&t[e]||t||0)},async $_applyShow(e=!1){clearTimeout(this.$_disposeTimer),clearTimeout(this.$_scheduleTimer),this.skipTransition=e,!this.isShown&&(this.$_ensureTeleport(),await V(),await this.$_computePosition(),await this.$_applyShowEffect(),this.positioningDisabled||this.$_registerEventListeners([...J(this.$_referenceNode),...J(this.$_popperNode)],"scroll",()=>{this.$_computePosition()}))},async $_applyShowEffect(){if(this.$_hideInProgress)return;if(this.computeTransformOrigin){const t=this.$_referenceNode.getBoundingClientRect(),o=this.$_popperNode.querySelector(".v-popper__wrapper"),i=o.parentNode.getBoundingClientRect(),s=t.x+t.width/2-(i.left+o.offsetLeft),n=t.y+t.height/2-(i.top+o.offsetTop);this.result.transformOrigin=`${s}px ${n}px`}this.isShown=!0,this.$_applyAttrsToTarget({"aria-describedby":this.popperId,"data-popper-shown":""});const e=this.showGroup;if(e){let t;for(let o=0;o<l.length;o++)t=l[o],t.showGroup!==e&&(t.hide(),t.$emit("close-group"))}l.push(this),document.body.classList.add("v-popper--some-open");for(const t of ee(this.theme))ne(t).push(this),document.body.classList.add(`v-popper--some-open--${t}`);this.$emit("apply-show"),this.classes.showFrom=!0,this.classes.showTo=!1,this.classes.hideFrom=!1,this.classes.hideTo=!1,await V(),this.classes.showFrom=!1,this.classes.showTo=!0,this.noAutoFocus||this.$_popperNode.focus()},async $_applyHide(e=!1){if(this.shownChildren.size>0){this.pendingHide=!0,this.$_hideInProgress=!1;return}if(clearTimeout(this.$_scheduleTimer),!this.isShown)return;this.skipTransition=e,ie(l,this),l.length===0&&document.body.classList.remove("v-popper--some-open");for(const o of ee(this.theme)){const i=ne(o);ie(i,this),i.length===0&&document.body.classList.remove(`v-popper--some-open--${o}`)}g===this&&(g=null),this.isShown=!1,this.$_applyAttrsToTarget({"aria-describedby":void 0,"data-popper-shown":void 0}),clearTimeout(this.$_disposeTimer);const t=this.disposeTimeout;t!==null&&(this.$_disposeTimer=setTimeout(()=>{this.$_popperNode&&(this.$_detachPopperNode(),this.isMounted=!1)},t)),this.$_removeEventListeners("scroll"),this.$emit("apply-hide"),this.classes.showFrom=!1,this.classes.showTo=!1,this.classes.hideFrom=!0,this.classes.hideTo=!1,await V(),this.classes.hideFrom=!1,this.classes.hideTo=!0},$_autoShowHide(){this.shown?this.show():this.hide()},$_ensureTeleport(){if(this.isDisposed)return;let e=this.container;if(typeof e=="string"?e=window.document.querySelector(e):e===!1&&(e=this.$_targetNodes[0].parentNode),!e)throw new Error("No container for popover: "+this.container);e.appendChild(this.$_popperNode),this.isMounted=!0},$_addEventListeners(){const e=o=>{this.isShown&&!this.$_hideInProgress||(o.usedByTooltip=!0,!this.$_preventShow&&this.show({event:o}))};this.$_registerTriggerListeners(this.$_targetNodes,te,this.triggers,this.showTriggers,e),this.$_registerTriggerListeners([this.$_popperNode],te,this.popperTriggers,this.popperShowTriggers,e);const t=o=>{o.usedByTooltip||this.hide({event:o})};this.$_registerTriggerListeners(this.$_targetNodes,oe,this.triggers,this.hideTriggers,t),this.$_registerTriggerListeners([this.$_popperNode],oe,this.popperTriggers,this.popperHideTriggers,t)},$_registerEventListeners(e,t,o){this.$_events.push({targetNodes:e,eventType:t,handler:o}),e.forEach(i=>i.addEventListener(t,o,w?{passive:!0}:void 0))},$_registerTriggerListeners(e,t,o,i,s){let n=o;i!=null&&(n=typeof i=="function"?i(n):i),n.forEach(a=>{const p=t[a];p&&this.$_registerEventListeners(e,p,s)})},$_removeEventListeners(e){const t=[];this.$_events.forEach(o=>{const{targetNodes:i,eventType:s,handler:n}=o;!e||e===s?i.forEach(a=>a.removeEventListener(s,n)):t.push(o)}),this.$_events=t},$_refreshListeners(){this.isDisposed||(this.$_removeEventListeners(),this.$_addEventListeners())},$_handleGlobalClose(e,t=!1){this.$_showFrameLocked||(this.hide({event:e}),e.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),t&&(this.$_preventShow=!0,setTimeout(()=>{this.$_preventShow=!1},300)))},$_detachPopperNode(){this.$_popperNode.parentNode&&this.$_popperNode.parentNode.removeChild(this.$_popperNode)},$_swapTargetAttrs(e,t){for(const o of this.$_targetNodes){const i=o.getAttribute(e);i&&(o.removeAttribute(e),o.setAttribute(t,i))}},$_applyAttrsToTarget(e){for(const t of this.$_targetNodes)for(const o in e){const i=e[o];i==null?t.removeAttribute(o):t.setAttribute(o,i)}},$_updateParentShownChildren(e){let t=this.parentPopper;for(;t;)e?t.shownChildren.add(this.randomId):(t.shownChildren.delete(this.randomId),t.pendingHide&&t.hide()),t=t.parentPopper},$_isAimingPopper(){const e=this.$_referenceNode.getBoundingClientRect();if($>=e.left&&$<=e.right&&_>=e.top&&_<=e.bottom){const t=this.$_popperNode.getBoundingClientRect(),o=$-f,i=_-m,s=t.left+t.width/2-f+(t.top+t.height/2)-m+t.width+t.height,n=f+o*s,a=m+i*s;return C(f,m,n,a,t.left,t.top,t.left,t.bottom)||C(f,m,n,a,t.left,t.top,t.right,t.top)||C(f,m,n,a,t.right,t.top,t.right,t.bottom)||C(f,m,n,a,t.left,t.bottom,t.right,t.bottom)}return!1}},render(){return this.$slots.default(this.slotData)}});if(typeof document<"u"&&typeof window<"u"){if(me){const e=w?{passive:!0,capture:!0}:!0;document.addEventListener("touchstart",t=>re(t,!0),e),document.addEventListener("touchend",t=>ae(t,!0),e)}else window.addEventListener("mousedown",e=>re(e,!1),!0),window.addEventListener("click",e=>ae(e,!1),!0);window.addEventListener("resize",Ye)}function re(e,t){if(u.autoHideOnMousedown)we(e,t);else for(let o=0;o<l.length;o++){const i=l[o];try{i.mouseDownContains=i.popperNode().contains(e.target)}catch{}}}function ae(e,t){u.autoHideOnMousedown||we(e,t)}function we(e,t){const o={};for(let i=l.length-1;i>=0;i--){const s=l[i];try{const n=s.containsGlobalTarget=s.mouseDownContains||s.popperNode().contains(e.target);s.pendingHide=!1,requestAnimationFrame(()=>{if(s.pendingHide=!1,!o[s.randomId]&&pe(s,n,e)){if(s.$_handleGlobalClose(e,t),!e.closeAllPopover&&e.closePopover&&n){let p=s.parentPopper;for(;p;)o[p.randomId]=!0,p=p.parentPopper;return}let a=s.parentPopper;for(;a&&pe(a,a.containsGlobalTarget,e);)a.$_handleGlobalClose(e,t),a=a.parentPopper}})}catch{}}}function pe(e,t,o){return o.closeAllPopover||o.closePopover&&t||Xe(e,o)&&!t}function Xe(e,t){if(typeof e.autoHide=="function"){const o=e.autoHide(t);return e.lastAutoHide=o,o}return e.autoHide}function Ye(){for(let e=0;e<l.length;e++)l[e].$_computePosition()}let f=0,m=0,$=0,_=0;typeof window<"u"&&window.addEventListener("mousemove",e=>{f=$,m=_,$=e.clientX,_=e.clientY},w?{passive:!0}:void 0);function C(e,t,o,i,s,n,a,p){const d=((a-s)*(t-n)-(p-n)*(e-s))/((p-n)*(o-e)-(a-s)*(i-t)),h=((o-e)*(t-n)-(i-t)*(e-s))/((p-n)*(o-e)-(a-s)*(i-t));return d>=0&&d<=1&&h>=0&&h<=1}const Ke={extends:ve()},O=(e,t)=>{const o=e.__vccOpts||e;for(const[i,s]of t)o[i]=s;return o};function Ze(e,t,o,i,s,n){return c(),S("div",{ref:"reference",class:K(["v-popper",{"v-popper--shown":e.slotData.isShown}])},[N(e.$slots,"default",Be(Le(e.slotData)))],2)}const Qe=O(Ke,[["render",Ze]]);function Je(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var o=e.indexOf("Trident/");if(o>0){var i=e.indexOf("rv:");return parseInt(e.substring(i+3,e.indexOf(".",i)),10)}var s=e.indexOf("Edge/");return s>0?parseInt(e.substring(s+5,e.indexOf(".",s)),10):-1}let z;function X(){X.init||(X.init=!0,z=Je()!==-1)}var k={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){X(),xe(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",z&&this.$el.appendChild(e),e.data="about:blank",z||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!z&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const et=Me();He("data-v-b329ee4c");const tt={class:"resize-observer",tabindex:"-1"};Ae();const ot=et((e,t,o,i,s,n)=>(c(),M("div",tt)));k.render=ot;k.__scopeId="data-v-b329ee4c";k.__file="src/components/ResizeObserver.vue";const ye=(e="theme")=>({computed:{themeClass(){return Ue(this[e])}}}),it=A({name:"VPopperContent",components:{ResizeObserver:k},mixins:[ye()],props:{popperId:String,theme:String,shown:Boolean,mounted:Boolean,skipTransition:Boolean,autoHide:Boolean,handleResize:Boolean,classes:Object,result:Object},emits:["hide","resize"],methods:{toPx(e){return e!=null&&!isNaN(e)?`${e}px`:null}}}),st=["id","aria-hidden","tabindex","data-popper-placement"],nt={ref:"inner",class:"v-popper__inner"},rt=v("div",{class:"v-popper__arrow-outer"},null,-1),at=v("div",{class:"v-popper__arrow-inner"},null,-1),pt=[rt,at];function dt(e,t,o,i,s,n){const a=T("ResizeObserver");return c(),S("div",{id:e.popperId,ref:"popover",class:K(["v-popper__popper",[e.themeClass,e.classes.popperClass,{"v-popper__popper--shown":e.shown,"v-popper__popper--hidden":!e.shown,"v-popper__popper--show-from":e.classes.showFrom,"v-popper__popper--show-to":e.classes.showTo,"v-popper__popper--hide-from":e.classes.hideFrom,"v-popper__popper--hide-to":e.classes.hideTo,"v-popper__popper--skip-transition":e.skipTransition,"v-popper__popper--arrow-overflow":e.result&&e.result.arrow.overflow,"v-popper__popper--no-positioning":!e.result}]]),style:j(e.result?{position:e.result.strategy,transform:`translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`}:void 0),"aria-hidden":e.shown?"false":"true",tabindex:e.autoHide?0:void 0,"data-popper-placement":e.result?e.result.placement:void 0,onKeyup:t[2]||(t[2]=ke(p=>e.autoHide&&e.$emit("hide"),["esc"]))},[v("div",{class:"v-popper__backdrop",onClick:t[0]||(t[0]=p=>e.autoHide&&e.$emit("hide"))}),v("div",{class:"v-popper__wrapper",style:j(e.result?{transformOrigin:e.result.transformOrigin}:void 0)},[v("div",nt,[e.mounted?(c(),S(Oe,{key:0},[v("div",null,[N(e.$slots,"default")]),e.handleResize?(c(),M(a,{key:0,onNotify:t[1]||(t[1]=p=>e.$emit("resize",p))})):Q("",!0)],64)):Q("",!0)],512),v("div",{ref:"arrow",class:"v-popper__arrow-container",style:j(e.result?{left:e.toPx(e.result.arrow.x),top:e.toPx(e.result.arrow.y)}:void 0)},pt,4)],4)],46,st)}const $e=O(it,[["render",dt]]),_e={methods:{show(...e){return this.$refs.popper.show(...e)},hide(...e){return this.$refs.popper.hide(...e)},dispose(...e){return this.$refs.popper.dispose(...e)},onResize(...e){return this.$refs.popper.onResize(...e)}}};let Y=function(){};typeof window<"u"&&(Y=window.Element);const ht=A({name:"VPopperWrapper",components:{Popper:Qe,PopperContent:$e},mixins:[_e,ye("finalTheme")],props:{theme:{type:String,default:null},referenceNode:{type:Function,default:null},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:void 0},positioningDisabled:{type:Boolean,default:void 0},placement:{type:String,default:void 0},delay:{type:[String,Number,Object],default:void 0},distance:{type:[Number,String],default:void 0},skidding:{type:[Number,String],default:void 0},triggers:{type:Array,default:void 0},showTriggers:{type:[Array,Function],default:void 0},hideTriggers:{type:[Array,Function],default:void 0},popperTriggers:{type:Array,default:void 0},popperShowTriggers:{type:[Array,Function],default:void 0},popperHideTriggers:{type:[Array,Function],default:void 0},container:{type:[String,Object,Y,Boolean],default:void 0},boundary:{type:[String,Y],default:void 0},strategy:{type:String,default:void 0},autoHide:{type:[Boolean,Function],default:void 0},handleResize:{type:Boolean,default:void 0},instantMove:{type:Boolean,default:void 0},eagerMount:{type:Boolean,default:void 0},popperClass:{type:[String,Array,Object],default:void 0},computeTransformOrigin:{type:Boolean,default:void 0},autoMinSize:{type:Boolean,default:void 0},autoSize:{type:[Boolean,String],default:void 0},autoMaxSize:{type:Boolean,default:void 0},autoBoundaryMaxSize:{type:Boolean,default:void 0},preventOverflow:{type:Boolean,default:void 0},overflowPadding:{type:[Number,String],default:void 0},arrowPadding:{type:[Number,String],default:void 0},arrowOverflow:{type:Boolean,default:void 0},flip:{type:Boolean,default:void 0},shift:{type:Boolean,default:void 0},shiftCrossAxis:{type:Boolean,default:void 0},noAutoFocus:{type:Boolean,default:void 0},disposeTimeout:{type:Number,default:void 0}},emits:{show:()=>!0,hide:()=>!0,"update:shown":e=>!0,"apply-show":()=>!0,"apply-hide":()=>!0,"close-group":()=>!0,"close-directive":()=>!0,"auto-hide":()=>!0,resize:()=>!0},computed:{finalTheme(){return this.theme??this.$options.vPopperTheme}},methods:{getTargetNodes(){return Array.from(this.$el.children).filter(e=>e!==this.$refs.popperContent.$el)}}});function lt(e,t,o,i,s,n){const a=T("PopperContent"),p=T("Popper");return c(),M(p,ce({ref:"popper"},e.$props,{theme:e.finalTheme,"target-nodes":e.getTargetNodes,"popper-node":()=>e.$refs.popperContent.$el,class:[e.themeClass],onShow:t[0]||(t[0]=()=>e.$emit("show")),onHide:t[1]||(t[1]=()=>e.$emit("hide")),"onUpdate:shown":t[2]||(t[2]=d=>e.$emit("update:shown",d)),onApplyShow:t[3]||(t[3]=()=>e.$emit("apply-show")),onApplyHide:t[4]||(t[4]=()=>e.$emit("apply-hide")),onCloseGroup:t[5]||(t[5]=()=>e.$emit("close-group")),onCloseDirective:t[6]||(t[6]=()=>e.$emit("close-directive")),onAutoHide:t[7]||(t[7]=()=>e.$emit("auto-hide")),onResize:t[8]||(t[8]=()=>e.$emit("resize"))}),{default:x(({popperId:d,isShown:h,shouldMountContent:B,skipTransition:L,autoHide:E,show:D,hide:y,handleResize:R,onResize:F,classes:I,result:Ne})=>[N(e.$slots,"default",{shown:h,show:D,hide:y}),ue(a,{ref:"popperContent","popper-id":d,theme:e.finalTheme,shown:h,mounted:B,"skip-transition":L,"auto-hide":E,"handle-resize":R,classes:I,result:Ne,onHide:y,onResize:F},{default:x(()=>[N(e.$slots,"popper",{shown:h,hide:y})]),_:2},1032,["popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:3},16,["theme","target-nodes","popper-node","class"])}const Z=O(ht,[["render",lt]]),ut={...Z,name:"VDropdown",vPopperTheme:"dropdown"},ct={...Z,name:"VMenu",vPopperTheme:"menu"},ft={...Z,name:"VTooltip",vPopperTheme:"tooltip"},mt=A({name:"VTooltipDirective",components:{Popper:ve(),PopperContent:$e},mixins:[_e],inheritAttrs:!1,props:{theme:{type:String,default:"tooltip"},html:{type:Boolean,default:e=>b(e.theme,"html")},content:{type:[String,Number,Function],default:null},loadingContent:{type:String,default:e=>b(e.theme,"loadingContent")},targetNodes:{type:Function,required:!0}},data(){return{asyncContent:null}},computed:{isContentAsync(){return typeof this.content=="function"},loading(){return this.isContentAsync&&this.asyncContent==null},finalContent(){return this.isContentAsync?this.loading?this.loadingContent:this.asyncContent:this.content}},watch:{content:{handler(){this.fetchContent(!0)},immediate:!0},async finalContent(){await this.$nextTick(),this.$refs.popper.onResize()}},created(){this.$_fetchId=0},methods:{fetchContent(e){if(typeof this.content=="function"&&this.$_isShown&&(e||!this.$_loading&&this.asyncContent==null)){this.asyncContent=null,this.$_loading=!0;const t=++this.$_fetchId,o=this.content(this);o.then?o.then(i=>this.onResult(t,i)):this.onResult(t,o)}},onResult(e,t){e===this.$_fetchId&&(this.$_loading=!1,this.asyncContent=t)},onShow(){this.$_isShown=!0,this.fetchContent()},onHide(){this.$_isShown=!1}}}),gt=["innerHTML"],vt=["textContent"];function wt(e,t,o,i,s,n){const a=T("PopperContent"),p=T("Popper");return c(),M(p,ce({ref:"popper"},e.$attrs,{theme:e.theme,"target-nodes":e.targetNodes,"popper-node":()=>e.$refs.popperContent.$el,onApplyShow:e.onShow,onApplyHide:e.onHide}),{default:x(({popperId:d,isShown:h,shouldMountContent:B,skipTransition:L,autoHide:E,hide:D,handleResize:y,onResize:R,classes:F,result:I})=>[ue(a,{ref:"popperContent",class:K({"v-popper--tooltip-loading":e.loading}),"popper-id":d,theme:e.theme,shown:h,mounted:B,"skip-transition":L,"auto-hide":E,"handle-resize":y,classes:F,result:I,onHide:D,onResize:R},{default:x(()=>[e.html?(c(),S("div",{key:0,innerHTML:e.finalContent},null,8,gt)):(c(),S("div",{key:1,textContent:Re(e.finalContent)},null,8,vt))]),_:2},1032,["class","popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:1},16,["theme","target-nodes","popper-node","onApplyShow","onApplyHide"])}const yt=O(mt,[["render",wt]]),Te="v-popper--has-tooltip";function $t(e,t){let o=e.placement;if(!o&&t)for(const i of ge)t[i]&&(o=i);return o||(o=b(e.theme||"tooltip","placement")),o}function Se(e,t,o){let i;const s=typeof t;return s==="string"?i={content:t}:t&&s==="object"?i=t:i={content:!1},i.placement=$t(i,o),i.targetNodes=()=>[e],i.referenceNode=()=>e,i}let G,P,_t=0;function Tt(){if(G)return;P=q([]),G=Ee({name:"VTooltipDirectiveApp",setup(){return{directives:P}},render(){return this.directives.map(t=>De(yt,{...t.options,shown:t.shown||t.options.shown,key:t.id}))},devtools:{hide:!0}});const e=document.createElement("div");document.body.appendChild(e),G.mount(e)}function St(e,t,o){Tt();const i=q(Se(e,t,o)),s=q(!1),n={id:_t++,options:i,shown:s};return P.value.push(n),e.classList&&e.classList.add(Te),e.$_popper={options:i,item:n,show(){s.value=!0},hide(){s.value=!1}}}function be(e){if(e.$_popper){const t=P.value.indexOf(e.$_popper.item);t!==-1&&P.value.splice(t,1),delete e.$_popper,delete e.$_popperOldShown,delete e.$_popperMountTarget}e.classList&&e.classList.remove(Te)}function de(e,{value:t,modifiers:o}){const i=Se(e,t,o);if(!i.content||b(i.theme||"tooltip","disabled"))be(e);else{let s;e.$_popper?(s=e.$_popper,s.options.value=i):s=St(e,t,o),typeof t.shown<"u"&&t.shown!==e.$_popperOldShown&&(e.$_popperOldShown=t.shown,t.shown?s.show():s.hide())}}const bt={beforeMount:de,updated:de,beforeUnmount(e){be(e)}};function he(e){e.addEventListener("mousedown",H),e.addEventListener("click",H),e.addEventListener("touchstart",Pe,w?{passive:!0}:!1)}function le(e){e.removeEventListener("mousedown",H),e.removeEventListener("click",H),e.removeEventListener("touchstart",Pe),e.removeEventListener("touchend",Ce),e.removeEventListener("touchcancel",ze)}function H(e){const t=e.currentTarget;e.closePopover=!t.$_vclosepopover_touch,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}function Pe(e){if(e.changedTouches.length===1){const t=e.currentTarget;t.$_vclosepopover_touch=!0;const o=e.changedTouches[0];t.$_vclosepopover_touchPoint=o,t.addEventListener("touchend",Ce),t.addEventListener("touchcancel",ze)}}function Ce(e){const t=e.currentTarget;if(t.$_vclosepopover_touch=!1,e.changedTouches.length===1){const o=e.changedTouches[0],i=t.$_vclosepopover_touchPoint;e.closePopover=Math.abs(o.screenY-i.screenY)<20&&Math.abs(o.screenX-i.screenX)<20,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}}function ze(e){const t=e.currentTarget;t.$_vclosepopover_touch=!1}const Pt={beforeMount(e,{value:t,modifiers:o}){e.$_closePopoverModifiers=o,(typeof t>"u"||t)&&he(e)},updated(e,{value:t,oldValue:o,modifiers:i}){e.$_closePopoverModifiers=i,t!==o&&(typeof t>"u"||t?he(e):le(e))},beforeUnmount(e){le(e)}};function Ct(e,t={}){e.$_vTooltipInstalled||(e.$_vTooltipInstalled=!0,fe(u,t),e.directive("tooltip",bt),e.directive("close-popper",Pt),e.component("VTooltip",ft),e.component("VDropdown",ut),e.component("VMenu",ct))}const xt={version:"5.2.2",install:Ct,options:u};export{xt as G};