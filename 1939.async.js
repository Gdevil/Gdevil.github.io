(self.webpackChunk=self.webpackChunk||[]).push([[1939],{32857:function(h,s){"use strict";var o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};s.Z=o},48820:function(h,s){"use strict";var o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};s.Z=o},27363:function(h,s){"use strict";var o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};s.Z=o},63404:function(h,s){"use strict";var o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};s.Z=o},20640:function(h,s,o){"use strict";var n=o(11742),l={"text/plain":"Text","text/html":"Url",default:"Text"},g="Copy to clipboard: #{key}, Enter";function c(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function i(t,e){var r,y,D,d,U,p,w=!1;e||(e={}),r=e.debug||!1;try{D=n(),d=document.createRange(),U=document.getSelection(),p=document.createElement("span"),p.textContent=t,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(m){if(m.stopPropagation(),e.format)if(m.preventDefault(),typeof m.clipboardData=="undefined"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var S=l[e.format]||l.default;window.clipboardData.setData(S,t)}else m.clipboardData.clearData(),m.clipboardData.setData(e.format,t);e.onCopy&&(m.preventDefault(),e.onCopy(m.clipboardData))}),document.body.appendChild(p),d.selectNodeContents(p),U.addRange(d);var a=document.execCommand("copy");if(!a)throw new Error("copy command was unsuccessful");w=!0}catch(m){r&&console.error("unable to copy using execCommand: ",m),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),w=!0}catch(S){r&&console.error("unable to copy using clipboardData: ",S),r&&console.error("falling back to prompt"),y=c("message"in e?e.message:g),window.prompt(y,t)}}finally{U&&(typeof U.removeRange=="function"?U.removeRange(d):U.removeAllRanges()),p&&document.body.removeChild(p),D()}return w}h.exports=i},62906:function(h,s){"use strict";s.Z={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}},18758:function(h,s){"use strict";var o={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"};s.Z=o},43763:function(h,s,o){"use strict";o.d(s,{Z:function(){return p}});var n=o(87462),l=o(71002),g=o(1413),c=o(91),i=o(67294),t=o(11276),e=o(43159),r=o(93967),y=o.n(r);function D(w){var a=w.showArrow,m=w.arrowContent,S=w.children,z=w.prefixCls,H=w.id,I=w.overlayInnerStyle,N=w.className,V=w.style;return i.createElement("div",{className:y()("".concat(z,"-content"),N),style:V},a!==!1&&i.createElement("div",{className:"".concat(z,"-arrow"),key:"arrow"},m),i.createElement("div",{className:"".concat(z,"-inner"),id:H,role:"tooltip",style:I},typeof S=="function"?S():S))}var d=function(a,m){var S=a.overlayClassName,z=a.trigger,H=z===void 0?["hover"]:z,I=a.mouseEnterDelay,N=I===void 0?0:I,V=a.mouseLeaveDelay,G=V===void 0?.1:V,_=a.overlayStyle,u=a.prefixCls,v=u===void 0?"rc-tooltip":u,x=a.children,b=a.onVisibleChange,E=a.afterVisibleChange,C=a.transitionName,f=a.animation,L=a.motion,M=a.placement,B=M===void 0?"right":M,A=a.align,P=A===void 0?{}:A,j=a.destroyTooltipOnHide,R=j===void 0?!1:j,W=a.defaultVisible,k=a.getTooltipContainer,F=a.overlayInnerStyle,Y=a.arrowContent,T=a.overlay,O=a.id,Q=a.showArrow,q=(0,c.Z)(a,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"]),K=(0,i.useRef)(null);(0,i.useImperativeHandle)(m,function(){return K.current});var $=(0,g.Z)({},q);"visible"in a&&($.popupVisible=a.visible);var ee=function(){return i.createElement(D,{showArrow:Q,arrowContent:Y,key:"content",prefixCls:v,id:O,overlayInnerStyle:F},T)},Z=!1,X=!1;if(typeof R=="boolean")Z=R;else if(R&&(0,l.Z)(R)==="object"){var J=R.keepParent;Z=J===!0,X=J===!1}return i.createElement(t.Z,(0,n.Z)({popupClassName:S,prefixCls:v,popup:ee,action:H,builtinPlacements:e.C,popupPlacement:B,ref:K,popupAlign:P,getPopupContainer:k,onPopupVisibleChange:b,afterPopupVisibleChange:E,popupTransitionName:C,popupAnimation:f,popupMotion:L,defaultPopupVisible:W,destroyPopupOnHide:Z,autoDestroy:X,mouseLeaveDelay:G,popupStyle:_,mouseEnterDelay:N},$),x)},U=(0,i.forwardRef)(d),p=U},43159:function(h,s,o){"use strict";o.d(s,{C:function(){return g}});var n={adjustX:1,adjustY:1},l=[0,0],g={left:{points:["cr","cl"],overflow:n,offset:[-4,0],targetOffset:l},right:{points:["cl","cr"],overflow:n,offset:[4,0],targetOffset:l},top:{points:["bc","tc"],overflow:n,offset:[0,-4],targetOffset:l},bottom:{points:["tc","bc"],overflow:n,offset:[0,4],targetOffset:l},topLeft:{points:["bl","tl"],overflow:n,offset:[0,-4],targetOffset:l},leftTop:{points:["tr","tl"],overflow:n,offset:[-4,0],targetOffset:l},topRight:{points:["br","tr"],overflow:n,offset:[0,-4],targetOffset:l},rightTop:{points:["tl","tr"],overflow:n,offset:[4,0],targetOffset:l},bottomRight:{points:["tr","br"],overflow:n,offset:[0,4],targetOffset:l},rightBottom:{points:["bl","br"],overflow:n,offset:[4,0],targetOffset:l},bottomLeft:{points:["tl","bl"],overflow:n,offset:[0,4],targetOffset:l},leftBottom:{points:["br","bl"],overflow:n,offset:[-4,0],targetOffset:l}},c=null},79370:function(h,s,o){"use strict";o.d(s,{G:function(){return c}});var n=o(98924),l=function(t){if((0,n.Z)()&&window.document.documentElement){var e=Array.isArray(t)?t:[t],r=window.document.documentElement;return e.some(function(y){return y in r.style})}return!1},g=function(t,e){if(!l(t))return!1;var r=document.createElement("div"),y=r.style[t];return r.style[t]=e,r.style[t]!==y};function c(i,t){return!Array.isArray(i)&&t!==void 0?g(i,t):l(i)}},11742:function(h){h.exports=function(){var s=document.getSelection();if(!s.rangeCount)return function(){};for(var o=document.activeElement,n=[],l=0;l<s.rangeCount;l++)n.push(s.getRangeAt(l));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null;break}return s.removeAllRanges(),function(){s.type==="Caret"&&s.removeAllRanges(),s.rangeCount||n.forEach(function(g){s.addRange(g)}),o&&o.focus()}}},49677:function(h){function s(o){if(o==null)throw new TypeError("Cannot destructure "+o)}h.exports=s,h.exports.__esModule=!0,h.exports.default=h.exports},64175:function(h,s,o){"use strict";o.d(s,{w:function(){return G}});var n=o(99477),l=o(98671),g=o(71911);const c=new n.Vector3,i=new n.Vector3,t=new n.Vector4,e=new n.Vector4,r=new n.Vector4,y=new n.Vector3,D=new n.Matrix4,d=new n.Line3,U=new n.Vector3,p=new n.Box3,w=new n.Sphere,a=new n.Vector4;let m,S;function z(_,u,v){return a.set(0,0,-u,1).applyMatrix4(_.projectionMatrix),a.multiplyScalar(1/a.w),a.x=S/v.width,a.y=S/v.height,a.applyMatrix4(_.projectionMatrixInverse),a.multiplyScalar(1/a.w),Math.abs(Math.max(a.x,a.y))}function H(_,u){const v=_.matrixWorld,x=_.geometry,b=x.attributes.instanceStart,E=x.attributes.instanceEnd,C=Math.min(x.instanceCount,b.count);for(let f=0,L=C;f<L;f++){d.start.fromBufferAttribute(b,f),d.end.fromBufferAttribute(E,f),d.applyMatrix4(v);const M=new n.Vector3,B=new n.Vector3;m.distanceSqToSegment(d.start,d.end,B,M),B.distanceTo(M)<S*.5&&u.push({point:B,pointOnLine:M,distance:m.origin.distanceTo(B),object:_,face:null,faceIndex:f,uv:null,uv1:null})}}function I(_,u,v){const x=u.projectionMatrix,E=_.material.resolution,C=_.matrixWorld,f=_.geometry,L=f.attributes.instanceStart,M=f.attributes.instanceEnd,B=Math.min(f.instanceCount,L.count),A=-u.near;m.at(1,r),r.w=1,r.applyMatrix4(u.matrixWorldInverse),r.applyMatrix4(x),r.multiplyScalar(1/r.w),r.x*=E.x/2,r.y*=E.y/2,r.z=0,y.copy(r),D.multiplyMatrices(u.matrixWorldInverse,C);for(let P=0,j=B;P<j;P++){if(t.fromBufferAttribute(L,P),e.fromBufferAttribute(M,P),t.w=1,e.w=1,t.applyMatrix4(D),e.applyMatrix4(D),t.z>A&&e.z>A)continue;if(t.z>A){const T=t.z-e.z,O=(t.z-A)/T;t.lerp(e,O)}else if(e.z>A){const T=e.z-t.z,O=(e.z-A)/T;e.lerp(t,O)}t.applyMatrix4(x),e.applyMatrix4(x),t.multiplyScalar(1/t.w),e.multiplyScalar(1/e.w),t.x*=E.x/2,t.y*=E.y/2,e.x*=E.x/2,e.y*=E.y/2,d.start.copy(t),d.start.z=0,d.end.copy(e),d.end.z=0;const W=d.closestPointToPointParameter(y,!0);d.at(W,U);const k=n.MathUtils.lerp(t.z,e.z,W),F=k>=-1&&k<=1,Y=y.distanceTo(U)<S*.5;if(F&&Y){d.start.fromBufferAttribute(L,P),d.end.fromBufferAttribute(M,P),d.start.applyMatrix4(C),d.end.applyMatrix4(C);const T=new n.Vector3,O=new n.Vector3;m.distanceSqToSegment(d.start,d.end,O,T),v.push({point:O,pointOnLine:T,distance:m.origin.distanceTo(O),object:_,face:null,faceIndex:P,uv:null,uv1:null})}}}class N extends n.Mesh{constructor(u=new l.z,v=new g.Y({color:Math.random()*16777215})){super(u,v),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const u=this.geometry,v=u.attributes.instanceStart,x=u.attributes.instanceEnd,b=new Float32Array(2*v.count);for(let C=0,f=0,L=v.count;C<L;C++,f+=2)c.fromBufferAttribute(v,C),i.fromBufferAttribute(x,C),b[f]=f===0?0:b[f-1],b[f+1]=b[f]+c.distanceTo(i);const E=new n.InstancedInterleavedBuffer(b,2,1);return u.setAttribute("instanceDistanceStart",new n.InterleavedBufferAttribute(E,1,0)),u.setAttribute("instanceDistanceEnd",new n.InterleavedBufferAttribute(E,1,1)),this}raycast(u,v){const x=this.material.worldUnits,b=u.camera;b===null&&!x&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const E=u.params.Line2!==void 0&&u.params.Line2.threshold||0;m=u.ray;const C=this.matrixWorld,f=this.geometry,L=this.material;S=L.linewidth+E,f.boundingSphere===null&&f.computeBoundingSphere(),w.copy(f.boundingSphere).applyMatrix4(C);let M;if(x)M=S*.5;else{const A=Math.max(b.near,w.distanceToPoint(m.origin));M=z(b,A,L.resolution)}if(w.radius+=M,m.intersectsSphere(w)===!1)return;f.boundingBox===null&&f.computeBoundingBox(),p.copy(f.boundingBox).applyMatrix4(C);let B;if(x)B=S*.5;else{const A=Math.max(b.near,p.distanceToPoint(m.origin));B=z(b,A,L.resolution)}p.expandByScalar(B),m.intersectsBox(p)!==!1&&(x?H(this,v):I(this,b,v))}}var V=o(59823);class G extends N{constructor(u=new V.L,v=new g.Y({color:Math.random()*16777215})){super(u,v),this.isLine2=!0,this.type="Line2"}}},59823:function(h,s,o){"use strict";o.d(s,{L:function(){return l}});var n=o(98671);class l extends n.z{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(c){const i=c.length-3,t=new Float32Array(2*i);for(let e=0;e<i;e+=3)t[2*e]=c[e],t[2*e+1]=c[e+1],t[2*e+2]=c[e+2],t[2*e+3]=c[e+3],t[2*e+4]=c[e+4],t[2*e+5]=c[e+5];return super.setPositions(t),this}setColors(c){const i=c.length-3,t=new Float32Array(2*i);for(let e=0;e<i;e+=3)t[2*e]=c[e],t[2*e+1]=c[e+1],t[2*e+2]=c[e+2],t[2*e+3]=c[e+3],t[2*e+4]=c[e+4],t[2*e+5]=c[e+5];return super.setColors(t),this}fromLine(c){const i=c.geometry;return this.setPositions(i.attributes.position.array),this}}},71911:function(h,s,o){"use strict";o.d(s,{Y:function(){return l}});var n=o(99477);n.UniformsLib.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new n.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},n.ShaderLib.line={uniforms:n.UniformsUtils.merge([n.UniformsLib.common,n.UniformsLib.fog,n.UniformsLib.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class l extends n.ShaderMaterial{constructor(c){super({type:"LineMaterial",uniforms:n.UniformsUtils.clone(n.ShaderLib.line.uniforms),vertexShader:n.ShaderLib.line.vertexShader,fragmentShader:n.ShaderLib.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(i){this.uniforms.diffuse.value=i}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(i){i===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(i){this.uniforms.linewidth.value=i}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(i){!!i!="USE_DASH"in this.defines&&(this.needsUpdate=!0),i===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(i){this.uniforms.dashScale.value=i}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(i){this.uniforms.dashSize.value=i}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(i){this.uniforms.dashOffset.value=i}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(i){this.uniforms.gapSize.value=i}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(i){this.uniforms.opacity.value=i}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(i){this.uniforms.resolution.value.copy(i)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(i){!!i!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),i===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(c)}}},98671:function(h,s,o){"use strict";o.d(s,{z:function(){return c}});var n=o(99477);const l=new n.Box3,g=new n.Vector3;class c extends n.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],r=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(r),this.setAttribute("position",new n.Float32BufferAttribute(t,3)),this.setAttribute("uv",new n.Float32BufferAttribute(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,r=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),r.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const r=new n.InstancedInterleavedBuffer(e,6,1);return this.setAttribute("instanceStart",new n.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceEnd",new n.InterleavedBufferAttribute(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const r=new n.InstancedInterleavedBuffer(e,6,1);return this.setAttribute("instanceColorStart",new n.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceColorEnd",new n.InterleavedBufferAttribute(r,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new n.WireframeGeometry(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new n.Box3);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),l.setFromBufferAttribute(e),this.boundingBox.union(l))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new n.Sphere),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let y=0;for(let D=0,d=t.count;D<d;D++)g.fromBufferAttribute(t,D),y=Math.max(y,r.distanceToSquared(g)),g.fromBufferAttribute(e,D),y=Math.max(y,r.distanceToSquared(g));this.boundingSphere.radius=Math.sqrt(y),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}}}]);
