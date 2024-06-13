
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

var $0={grad:.9,turn:360,rad:360/(2*Math.PI)},g=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},l=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=Math.pow(10,e)),Math.round(a*t)/a+0},s=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=1),t>a?a:t>e?t:e},g0=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},i0=function(t){return{r:s(t.r,0,255),g:s(t.g,0,255),b:s(t.b,0,255),a:s(t.a)}},C=function(t){return{r:l(t.r),g:l(t.g),b:l(t.b),a:l(t.a,3)}},N0=/^#([0-9a-f]{3,8})$/i,R=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},v0=function(t){var e=t.r,a=t.g,r=t.b,n=t.a,o=Math.max(e,a,r),f=o-Math.min(e,a,r),u=f?o===e?(a-r)/f:o===a?2+(r-e)/f:4+(e-a)/f:0;return{h:60*(u<0?u+6:u),s:o?f/o*100:0,v:o/255*100,a:n}},y0=function(t){var e=t.h,a=t.s,r=t.v,n=t.a;e=e/360*6,a/=100,r/=100;var o=Math.floor(e),f=r*(1-a),u=r*(1-(e-o)*a),i=r*(1-(1-e+o)*a),h=o%6;return{r:255*[r,u,f,f,i,r][h],g:255*[i,r,r,u,f,f][h],b:255*[f,f,i,r,r,u][h],a:n}},l0=function(t){return{h:g0(t.h),s:s(t.s,0,100),l:s(t.l,0,100),a:s(t.a)}},h0=function(t){return{h:l(t.h),s:l(t.s),l:l(t.l),a:l(t.a,3)}},s0=function(t){return y0((a=(e=t).s,{h:e.h,s:(a*=((r=e.l)<50?r:100-r)/100)>0?2*a/(r+a)*100:0,v:r+a,a:e.a}));var e,a,r},N=function(t){return{h:(e=v0(t)).h,s:(n=(200-(a=e.s))*(r=e.v)/100)>0&&n<200?a*r/100/(n<=100?n:200-n)*100:0,l:n/2,a:e.a};var e,a,r,n},I0=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,q0=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,H0=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,j0=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,T={string:[[function(t){var e=N0.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?l(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?l(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=H0.exec(t)||j0.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:i0({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=I0.exec(t)||q0.exec(t);if(!e)return null;var a,r,n=l0({h:(a=e[1],r=e[2],r===void 0&&(r="deg"),Number(a)*($0[r]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return s0(n)},"hsl"]],object:[[function(t){var e=t.r,a=t.g,r=t.b,n=t.a,o=n===void 0?1:n;return g(e)&&g(a)&&g(r)?i0({r:Number(e),g:Number(a),b:Number(r),a:Number(o)}):null},"rgb"],[function(t){var e=t.h,a=t.s,r=t.l,n=t.a,o=n===void 0?1:n;if(!g(e)||!g(a)||!g(r))return null;var f=l0({h:Number(e),s:Number(a),l:Number(r),a:Number(o)});return s0(f)},"hsl"],[function(t){var e=t.h,a=t.s,r=t.v,n=t.a,o=n===void 0?1:n;if(!g(e)||!g(a)||!g(r))return null;var f=function(u){return{h:g0(u.h),s:s(u.s,0,100),v:s(u.v,0,100),a:s(u.a)}}({h:Number(e),s:Number(a),v:Number(r),a:Number(o)});return y0(f)},"hsv"]]},b0=function(t,e){for(var a=0;a<e.length;a++){var r=e[a][0](t);if(r)return[r,e[a][1]]}return[null,void 0]},P0=function(t){return typeof t=="string"?b0(t.trim(),T.string):typeof t=="object"&&t!==null?b0(t,T.object):[null,void 0]},D=function(t,e){var a=N(t);return{h:a.h,s:s(a.s+100*e,0,100),l:a.l,a:a.a}},O=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},d0=function(t,e){var a=N(t);return{h:a.h,s:a.s,l:s(a.l+100*e,0,100),a:a.a}},U=function(){function t(e){this.parsed=P0(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return l(O(this.rgba),2)},t.prototype.isDark=function(){return O(this.rgba)<.5},t.prototype.isLight=function(){return O(this.rgba)>=.5},t.prototype.toHex=function(){return e=C(this.rgba),a=e.r,r=e.g,n=e.b,f=(o=e.a)<1?R(l(255*o)):"","#"+R(a)+R(r)+R(n)+f;var e,a,r,n,o,f},t.prototype.toRgb=function(){return C(this.rgba)},t.prototype.toRgbString=function(){return e=C(this.rgba),a=e.r,r=e.g,n=e.b,(o=e.a)<1?"rgba("+a+", "+r+", "+n+", "+o+")":"rgb("+a+", "+r+", "+n+")";var e,a,r,n,o},t.prototype.toHsl=function(){return h0(N(this.rgba))},t.prototype.toHslString=function(){return e=h0(N(this.rgba)),a=e.h,r=e.s,n=e.l,(o=e.a)<1?"hsla("+a+", "+r+"%, "+n+"%, "+o+")":"hsl("+a+", "+r+"%, "+n+"%)";var e,a,r,n,o},t.prototype.toHsv=function(){return e=v0(this.rgba),{h:l(e.h),s:l(e.s),v:l(e.v),a:l(e.a,3)};var e},t.prototype.invert=function(){return v({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),v(D(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),v(D(this.rgba,-e))},t.prototype.grayscale=function(){return v(D(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),v(d0(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),v(d0(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?v({r:(a=this.rgba).r,g:a.g,b:a.b,a:e}):l(this.rgba.a,3);var a},t.prototype.hue=function(e){var a=N(this.rgba);return typeof e=="number"?v({h:e,s:a.s,l:a.l,a:a.a}):l(a.h)},t.prototype.isEqual=function(e){return this.toHex()===v(e).toHex()},t}(),v=function(t){return t instanceof U?t:new U(t)},c0=[],C0=function(t){t.forEach(function(e){c0.indexOf(e)<0&&(e(U,T),c0.push(e))})};function D0(t,e){var a={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var n in a)r[a[n]]=n;var o={};t.prototype.toName=function(f){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var u,i,h=r[this.toHex()];if(h)return h;if(f!=null&&f.closest){var H=this.toRgb(),k=1/0,w="black";if(!o.length)for(var z in a)o[z]=new t(a[z]).toRgb();for(var c in a){var j=(u=H,i=o[c],Math.pow(u.r-i.r,2)+Math.pow(u.g-i.g,2)+Math.pow(u.b-i.b,2));j<k&&(k=j,w=c)}return w}},e.string.push([function(f){var u=f.toLowerCase(),i=u==="transparent"?"#0000":a[u];return i?new t(i).toRgb():null},"name"])}var d=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=1),t>a?a:t>e?t:e},V=function(t){var e=t/255;return e<.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},G=function(t){return 255*(t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t)},W=96.422,X=100,Y=82.521,R0=function(t){var e,a,r={x:.9555766*(e=t).x+-.0230393*e.y+.0631636*e.z,y:-.0282895*e.x+1.0099416*e.y+.0210077*e.z,z:.0122982*e.x+-.020483*e.y+1.3299098*e.z};return a={r:G(.032404542*r.x-.015371385*r.y-.004985314*r.z),g:G(-.00969266*r.x+.018760108*r.y+41556e-8*r.z),b:G(556434e-9*r.x-.002040259*r.y+.010572252*r.z),a:t.a},{r:d(a.r,0,255),g:d(a.g,0,255),b:d(a.b,0,255),a:d(a.a)}},L0=function(t){var e=V(t.r),a=V(t.g),r=V(t.b);return function(n){return{x:d(n.x,0,W),y:d(n.y,0,X),z:d(n.z,0,Y),a:d(n.a)}}(function(n){return{x:1.0478112*n.x+.0228866*n.y+-.050127*n.z,y:.0295424*n.x+.9904844*n.y+-.0170491*n.z,z:-.0092345*n.x+.0150436*n.y+.7521316*n.z,a:n.a}}({x:100*(.4124564*e+.3575761*a+.1804375*r),y:100*(.2126729*e+.7151522*a+.072175*r),z:100*(.0193339*e+.119192*a+.9503041*r),a:t.a}))},I=216/24389,M=24389/27,p0=function(t){var e=L0(t),a=e.x/W,r=e.y/X,n=e.z/Y;return a=a>I?Math.cbrt(a):(M*a+16)/116,{l:116*(r=r>I?Math.cbrt(r):(M*r+16)/116)-16,a:500*(a-r),b:200*(r-(n=n>I?Math.cbrt(n):(M*n+16)/116)),alpha:e.a}},F0=function(t,e,a){var r,n=p0(t),o=p0(e);return function(f){var u=(f.l+16)/116,i=f.a/500+u,h=u-f.b/200;return R0({x:(Math.pow(i,3)>I?Math.pow(i,3):(116*i-16)/M)*W,y:(f.l>8?Math.pow((f.l+16)/116,3):f.l/M)*X,z:(Math.pow(h,3)>I?Math.pow(h,3):(116*h-16)/M)*Y,a:f.alpha})}({l:d((r={l:n.l*(1-a)+o.l*a,a:n.a*(1-a)+o.a*a,b:n.b*(1-a)+o.b*a,alpha:n.alpha*(1-a)+o.alpha*a}).l,0,400),a:r.a,b:r.b,alpha:d(r.alpha)})};function O0(t){function e(a,r,n){n===void 0&&(n=5);for(var o=[],f=1/(n-1),u=0;u<=n-1;u++)o.push(a.mix(r,f*u));return o}t.prototype.mix=function(a,r){r===void 0&&(r=.5);var n=a instanceof t?a:new t(a),o=F0(this.toRgb(),n.toRgb(),r);return new t(o)},t.prototype.tints=function(a){return e(this,"#fff",a)},t.prototype.shades=function(a){return e(this,"#000",a)},t.prototype.tones=function(a){return e(this,"#808080",a)}}var J=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},$=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=Math.pow(10,e)),Math.round(a*t)/a+0},b=function(t,e,a){return e===void 0&&(e=0),a===void 0&&(a=1),t>a?a:t>e?t:e},K=function(t){var e=t/255;return e<.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},Q=function(t){return 255*(t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t)},Z=96.422,_=100,e0=82.521,S0=function(t){var e,a,r={x:.9555766*(e=t).x+-.0230393*e.y+.0631636*e.z,y:-.0282895*e.x+1.0099416*e.y+.0210077*e.z,z:.0122982*e.x+-.020483*e.y+1.3299098*e.z};return a={r:Q(.032404542*r.x-.015371385*r.y-.004985314*r.z),g:Q(-.00969266*r.x+.018760108*r.y+41556e-8*r.z),b:Q(556434e-9*r.x-.002040259*r.y+.010572252*r.z),a:t.a},{r:b(a.r,0,255),g:b(a.g,0,255),b:b(a.b,0,255),a:b(a.a)}},E0=function(t){var e=K(t.r),a=K(t.g),r=K(t.b);return function(n){return{x:b(n.x,0,Z),y:b(n.y,0,_),z:b(n.z,0,e0),a:b(n.a)}}(function(n){return{x:1.0478112*n.x+.0228866*n.y+-.050127*n.z,y:.0295424*n.x+.9904844*n.y+-.0170491*n.z,z:-.0092345*n.x+.0150436*n.y+.7521316*n.z,a:n.a}}({x:100*(.4124564*e+.3575761*a+.1804375*r),y:100*(.2126729*e+.7151522*a+.072175*r),z:100*(.0193339*e+.119192*a+.9503041*r),a:t.a}))},q=216/24389,x=24389/27,A0=function(t){var e=t.l,a=t.a,r=t.b,n=t.alpha,o=n===void 0?1:n;if(!J(e)||!J(a)||!J(r))return null;var f=function(u){return{l:b(u.l,0,400),a:u.a,b:u.b,alpha:b(u.alpha)}}({l:Number(e),a:Number(a),b:Number(r),alpha:Number(o)});return B0(f)},B0=function(t){var e=(t.l+16)/116,a=t.a/500+e,r=e-t.b/200;return S0({x:(Math.pow(a,3)>q?Math.pow(a,3):(116*a-16)/x)*Z,y:(t.l>8?Math.pow((t.l+16)/116,3):t.l/x)*_,z:(Math.pow(r,3)>q?Math.pow(r,3):(116*r-16)/x)*e0,a:t.alpha})};function V0(t,e){t.prototype.toLab=function(){return r=E0(this.rgba),o=r.y/_,f=r.z/e0,n=(n=r.x/Z)>q?Math.cbrt(n):(x*n+16)/116,a={l:116*(o=o>q?Math.cbrt(o):(x*o+16)/116)-16,a:500*(n-o),b:200*(o-(f=f>q?Math.cbrt(f):(x*f+16)/116)),alpha:r.a},{l:$(a.l,2),a:$(a.a,2),b:$(a.b,2),alpha:$(a.alpha,3)};var a,r,n,o,f},t.prototype.delta=function(a){a===void 0&&(a="#FFF");var r=a instanceof t?a:new t(a),n=function(o,f){var u=o.l,i=o.a,h=o.b,H=f.l,k=f.a,w=f.b,z=180/Math.PI,c=Math.PI/180,j=Math.pow(Math.pow(i,2)+Math.pow(h,2),.5),m0=Math.pow(Math.pow(k,2)+Math.pow(w,2),.5),t0=(u+H)/2,P=Math.pow((j+m0)/2,7),a0=.5*(1-Math.pow(P/(P+Math.pow(25,7)),.5)),L=i*(1+a0),F=k*(1+a0),S=Math.pow(Math.pow(L,2)+Math.pow(h,2),.5),E=Math.pow(Math.pow(F,2)+Math.pow(w,2),.5),r0=(S+E)/2,y=L===0&&h===0?0:Math.atan2(h,L)*z,m=F===0&&w===0?0:Math.atan2(w,F)*z;y<0&&(y+=360),m<0&&(m+=360);var A=m-y,B=Math.abs(m-y);B>180&&m<=y?A+=360:B>180&&m>y&&(A-=360);var p=y+m;B<=180?p/=2:p=(y+m<360?p+360:p-360)/2;var w0=1-.17*Math.cos(c*(p-30))+.24*Math.cos(2*c*p)+.32*Math.cos(c*(3*p+6))-.2*Math.cos(c*(4*p-63)),M0=H-u,n0=E-S,o0=2*Math.sin(c*A/2)*Math.pow(S*E,.5),x0=1+.015*Math.pow(t0-50,2)/Math.pow(20+Math.pow(t0-50,2),.5),f0=1+.045*r0,u0=1+.015*r0*w0,k0=30*Math.exp(-1*Math.pow((p-275)/25,2)),z0=-2*Math.pow(P/(P+Math.pow(25,7)),.5)*Math.sin(2*c*k0);return Math.pow(Math.pow(M0/1/x0,2)+Math.pow(n0/1/f0,2)+Math.pow(o0/1/u0,2)+z0*n0*o0/(1*f0*1*u0),.5)}(this.toLab(),r.toLab())/100;return b($(n,3))},e.object.push([A0,"lab"])}export{C0 as k,V0 as l,O0 as m,D0 as n};