(self.webpackChunk=self.webpackChunk||[]).push([[1258],{15294:function(p,T){"use strict";var l={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};T.Z=l},81004:function(p,T,l){"use strict";l.r(T),l.d(T,{default:function(){return k}});var P=l(49677),F=l.n(P),B=l(15009),x=l.n(B),A=l(99289),b=l.n(A),L=l(12444),E=l.n(L),O=l(72004),S=l.n(O),U=l(25098),y=l.n(U),C=l(31996),w=l.n(C),I=l(26037),N=l.n(I),M=l(9783),u=l.n(M),H=l(39318),G=l(21990),_=l(95982),e={},f=function(){function g(h,i){if(E()(this,g),this.uniforms={},this.program=e.createProgram(),e.attachShader(this.program,h),e.attachShader(this.program,i),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS))throw e.getProgramInfoLog(this.program);for(var r=e.getProgramParameter(this.program,e.ACTIVE_UNIFORMS),t=0;t<r;t++){var n=e.getActiveUniform(this.program,t).name;this.uniforms[n]=e.getUniformLocation(this.program,n)}}return S()(g,[{key:"bind",value:function(){e.useProgram(this.program)}}]),g}(),W=function(){function g(){var h=this;E()(this,g),u()(this,"canvas",{}),u()(this,"config",{}),u()(this,"pointers",[]),u()(this,"splatStack",[]),u()(this,"bloomFramebuffers",[]),u()(this,"ext",{}),u()(this,"gl",{}),u()(this,"clearProgram",{}),u()(this,"colorProgram",{}),u()(this,"backgroundProgram",{}),u()(this,"displayProgram",{}),u()(this,"displayBloomProgram",{}),u()(this,"displayShadingProgram",{}),u()(this,"displayBloomShadingProgram",{}),u()(this,"bloomPrefilterProgram",{}),u()(this,"bloomBlurProgram",{}),u()(this,"bloomFinalProgram",{}),u()(this,"splatProgram",{}),u()(this,"advectionProgram",{}),u()(this,"divergenceProgram",{}),u()(this,"curlProgram",{}),u()(this,"vorticityProgram",{}),u()(this,"pressureProgram",{}),u()(this,"gradienSubtractProgram",{}),u()(this,"blit",{}),u()(this,"simWidth",""),u()(this,"simHeight",""),u()(this,"dyeWidth",""),u()(this,"dyeHeight",""),u()(this,"density",""),u()(this,"velocity",""),u()(this,"divergence",""),u()(this,"curl",""),u()(this,"pressure",""),u()(this,"bloom",""),u()(this,"ditheringTexture",{}),u()(this,"lastColorChangeTime",""),u()(this,"pointerPrototype",{id:-1,x:0,y:0,dx:0,dy:0,down:!1,moved:!1,color:[30,0,300]}),u()(this,"getSupportedFormat",function(i,r,t,n){if(!h.supportRenderTextureFormat(i,r,t,n))switch(r){case i.R16F:return h.getSupportedFormat(i,i.RG16F,i.RG,n);case i.RG16F:return h.getSupportedFormat(i,i.RGBA16F,i.RGBA,n);default:return null}return{internalFormat:r,format:t}}),u()(this,"supportRenderTextureFormat",function(i,r,t,n){var a=i.createTexture();i.bindTexture(i.TEXTURE_2D,a),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,r,4,4,0,t,n,null);var o=i.createFramebuffer();i.bindFramebuffer(i.FRAMEBUFFER,o),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,a,0);var s=i.checkFramebufferStatus(i.FRAMEBUFFER);return s==i.FRAMEBUFFER_COMPLETE})}return S()(g,[{key:"init",value:function(i){this.canvas=document.getElementById(i),this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.config={SIM_RESOLUTION:256,DYE_RESOLUTION:1024,DENSITY_DISSIPATION:.97,VELOCITY_DISSIPATION:.98,PRESSURE_DISSIPATION:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.3,SHADING:!0,COLORFUL:!0,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,POINTER_COLOR:{r:0,g:.15,b:0},SOUND_SENSITIVITY:.25,NORMALIZE_VOLUME:!0,AUDIO_RESPONSIVE:!0},this.pointers.push(this.pointerPrototype);var r=this.getWebGLContext(this.canvas),t=r.gll,n=r.ext;this.ext=n,e=t,this.isMobile()&&(this.config.SHADING=!1),this.ext.supportLinearFiltering||(this.config.SHADING=!1,this.config.BLOOM=!1);var a=this.compileShader(e.VERTEX_SHADER,`
            precision highp float;

            attribute vec2 aPosition;
            varying vec2 vUv;
            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform vec2 texelSize;

            void main () {
                vUv = aPosition * 0.5 + 0.5;
                vL = vUv - vec2(texelSize.x, 0.0);
                vR = vUv + vec2(texelSize.x, 0.0);
                vT = vUv + vec2(0.0, texelSize.y);
                vB = vUv - vec2(0.0, texelSize.y);
                gl_Position = vec4(aPosition, 0.0, 1.0);
            }
        `),o=this.compileShader(e.FRAGMENT_SHADER,`
            precision mediump float;
            precision mediump sampler2D;

            varying highp vec2 vUv;
            uniform sampler2D uTexture;
            uniform float value;

            void main () {
                gl_FragColor = value * texture2D(uTexture, vUv);
            }
        `),s=this.compileShader(e.FRAGMENT_SHADER,`
            precision mediump float;

            uniform vec4 color;

            void main () {
                gl_FragColor = color;
            }
        `),v=this.compileShader(e.FRAGMENT_SHADER,`
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uTexture;
            uniform float aspectRatio;

            #define SCALE 25.0

            void main () {
                vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
                float v = mod(uv.x + uv.y, 2.0);
                v = v * 0.1 + 0.8;
                gl_FragColor = vec4(vec3(v), 1.0);
            }
        `),m=this.compileShader(e.FRAGMENT_SHADER,`
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uTexture;

            void main () {
                vec3 C = texture2D(uTexture, vUv).rgb;
                float a = max(C.r, max(C.g, C.b));
                gl_FragColor = vec4(C, a);
            }
        `),c=this.compileShader(e.FRAGMENT_SHADER,`
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uTexture;
            uniform sampler2D uBloom;
            uniform sampler2D uDithering;
            uniform vec2 ditherScale;

            void main () {
                vec3 C = texture2D(uTexture, vUv).rgb;
                vec3 bloom = texture2D(uBloom, vUv).rgb;
                vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;
                noise = noise * 2.0 - 1.0;
                bloom += noise / 800.0;
                bloom = pow(bloom.rgb, vec3(1.0 / 2.2));
                C += bloom;
                float a = max(C.r, max(C.g, C.b));
                gl_FragColor = vec4(C, a);
            }
        `),d=this.compileShader(e.FRAGMENT_SHADER,`
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uTexture;
            uniform vec2 texelSize;

            void main () {
                vec3 L = texture2D(uTexture, vL).rgb;
                vec3 R = texture2D(uTexture, vR).rgb;
                vec3 T = texture2D(uTexture, vT).rgb;
                vec3 B = texture2D(uTexture, vB).rgb;
                vec3 C = texture2D(uTexture, vUv).rgb;

                float dx = length(R) - length(L);
                float dy = length(T) - length(B);

                vec3 n = normalize(vec3(dx, dy, length(texelSize)));
                vec3 l = vec3(0.0, 0.0, 1.0);

                float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
                C.rgb *= diffuse;

                float a = max(C.r, max(C.g, C.b));
                gl_FragColor = vec4(C, a);
            }
        `),V=this.compileShader(e.FRAGMENT_SHADER,`
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uTexture;
            uniform sampler2D uBloom;
            uniform sampler2D uDithering;
            uniform vec2 ditherScale;
            uniform vec2 texelSize;

            void main () {
                vec3 L = texture2D(uTexture, vL).rgb;
                vec3 R = texture2D(uTexture, vR).rgb;
                vec3 T = texture2D(uTexture, vT).rgb;
                vec3 B = texture2D(uTexture, vB).rgb;
                vec3 C = texture2D(uTexture, vUv).rgb;

                float dx = length(R) - length(L);
                float dy = length(T) - length(B);

                vec3 n = normalize(vec3(dx, dy, length(texelSize)));
                vec3 l = vec3(0.0, 0.0, 1.0);

                float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
                C *= diffuse;

                vec3 bloom = texture2D(uBloom, vUv).rgb;
                vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;
                noise = noise * 2.0 - 1.0;
                bloom += noise / 800.0;
                bloom = pow(bloom.rgb, vec3(1.0 / 2.2));
                C += bloom;

                float a = max(C.r, max(C.g, C.b));
                gl_FragColor = vec4(C, a);
            }
        `),Y=this.compileShader(e.FRAGMENT_SHADER,`
            precision mediump float;
            precision mediump sampler2D;

            varying vec2 vUv;
            uniform sampler2D uTexture;
            uniform vec3 curve;
            uniform float threshold;

            void main () {
                vec3 c = texture2D(uTexture, vUv).rgb;
                float br = max(c.r, max(c.g, c.b));
                float rq = clamp(br - curve.x, 0.0, curve.y);
                rq = curve.z * rq * rq;
                c *= max(rq, br - threshold) / max(br, 0.0001);
                gl_FragColor = vec4(c, 0.0);
            }
        `),K=this.compileShader(e.FRAGMENT_SHADER,`
            precision mediump float;
            precision mediump sampler2D;

            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uTexture;

            void main () {
                vec4 sum = vec4(0.0);
                sum += texture2D(uTexture, vL);
                sum += texture2D(uTexture, vR);
                sum += texture2D(uTexture, vT);
                sum += texture2D(uTexture, vB);
                sum *= 0.25;
                gl_FragColor = sum;
            }
        `),Z=this.compileShader(e.FRAGMENT_SHADER,`
            precision mediump float;
            precision mediump sampler2D;

            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uTexture;
            uniform float intensity;

            void main () {
                vec4 sum = vec4(0.0);
                sum += texture2D(uTexture, vL);
                sum += texture2D(uTexture, vR);
                sum += texture2D(uTexture, vT);
                sum += texture2D(uTexture, vB);
                sum *= 0.25;
                gl_FragColor = sum * intensity;
            }
        `),j=this.compileShader(e.FRAGMENT_SHADER,`
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uTarget;
            uniform float aspectRatio;
            uniform vec3 color;
            uniform vec2 point;
            uniform float radius;

            void main () {
                vec2 p = vUv - point.xy;
                p.x *= aspectRatio;
                vec3 splat = exp(-dot(p, p) / radius) * color;
                vec3 base = texture2D(uTarget, vUv).xyz;
                gl_FragColor = vec4(base + splat, 1.0);
            }
        `),$=this.compileShader(e.FRAGMENT_SHADER,`
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uVelocity;
            uniform sampler2D uSource;
            uniform vec2 texelSize;
            uniform vec2 dyeTexelSize;
            uniform float dt;
            uniform float dissipation;

            vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
                vec2 st = uv / tsize - 0.5;

                vec2 iuv = floor(st);
                vec2 fuv = fract(st);

                vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
                vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
                vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
                vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

                return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
            }

            void main () {
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);
                gl_FragColor.a = 1.0;
            }
        `),J=this.compileShader(e.FRAGMENT_SHADER,`
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uVelocity;
            uniform sampler2D uSource;
            uniform vec2 texelSize;
            uniform float dt;
            uniform float dissipation;

            void main () {
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                gl_FragColor = dissipation * texture2D(uSource, coord);
                gl_FragColor.a = 1.0;
            }
        `),Q=this.compileShader(e.FRAGMENT_SHADER,`
            precision mediump float;
            precision mediump sampler2D;

            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uVelocity;

            void main () {
                float L = texture2D(uVelocity, vL).x;
                float R = texture2D(uVelocity, vR).x;
                float T = texture2D(uVelocity, vT).y;
                float B = texture2D(uVelocity, vB).y;

                vec2 C = texture2D(uVelocity, vUv).xy;
                if (vL.x < 0.0) { L = -C.x; }
                if (vR.x > 1.0) { R = -C.x; }
                if (vT.y > 1.0) { T = -C.y; }
                if (vB.y < 0.0) { B = -C.y; }

                float div = 0.5 * (R - L + T - B);
                gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
            }
        `),q=this.compileShader(e.FRAGMENT_SHADER,`
            precision mediump float;
            precision mediump sampler2D;

            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uVelocity;

            void main () {
                float L = texture2D(uVelocity, vL).y;
                float R = texture2D(uVelocity, vR).y;
                float T = texture2D(uVelocity, vT).x;
                float B = texture2D(uVelocity, vB).x;
                float vorticity = R - L - T + B;
                gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
            }
        `),ee=this.compileShader(e.FRAGMENT_SHADER,`
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uVelocity;
            uniform sampler2D uCurl;
            uniform float curl;
            uniform float dt;

            void main () {
                float L = texture2D(uCurl, vL).x;
                float R = texture2D(uCurl, vR).x;
                float T = texture2D(uCurl, vT).x;
                float B = texture2D(uCurl, vB).x;
                float C = texture2D(uCurl, vUv).x;

                vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
                force /= length(force) + 0.0001;
                force *= curl * C;
                force.y *= -1.0;

                vec2 vel = texture2D(uVelocity, vUv).xy;
                gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
            }
        `),te=this.compileShader(e.FRAGMENT_SHADER,`
            precision mediump float;
            precision mediump sampler2D;

            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uPressure;
            uniform sampler2D uDivergence;

            vec2 boundary (vec2 uv) {
                return uv;
                // uncomment if you use wrap or repeat texture mode
                // uv = min(max(uv, 0.0), 1.0);
                // return uv;
            }

            void main () {
                float L = texture2D(uPressure, boundary(vL)).x;
                float R = texture2D(uPressure, boundary(vR)).x;
                float T = texture2D(uPressure, boundary(vT)).x;
                float B = texture2D(uPressure, boundary(vB)).x;
                float C = texture2D(uPressure, vUv).x;
                float divergence = texture2D(uDivergence, vUv).x;
                float pressure = (L + R + B + T - divergence) * 0.25;
                gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
            }
        `),ie=this.compileShader(e.FRAGMENT_SHADER,`
            precision mediump float;
            precision mediump sampler2D;

            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uPressure;
            uniform sampler2D uVelocity;

            vec2 boundary (vec2 uv) {
                return uv;
                // uv = min(max(uv, 0.0), 1.0);
                // return uv;
            }

            void main () {
                float L = texture2D(uPressure, boundary(vL)).x;
                float R = texture2D(uPressure, boundary(vR)).x;
                float T = texture2D(uPressure, boundary(vT)).x;
                float B = texture2D(uPressure, boundary(vB)).x;
                vec2 velocity = texture2D(uVelocity, vUv).xy;
                velocity.xy -= vec2(R - L, T - B);
                gl_FragColor = vec4(velocity, 0.0, 1.0);
            }
        `);this.clearProgram=new f(a,o),this.colorProgram=new f(a,s),this.backgroundProgram=new f(a,v),this.displayProgram=new f(a,m),this.displayBloomProgram=new f(a,c),this.displayShadingProgram=new f(a,d),this.displayBloomShadingProgram=new f(a,V),this.bloomPrefilterProgram=new f(a,Y),this.bloomBlurProgram=new f(a,K),this.bloomFinalProgram=new f(a,Z),this.splatProgram=new f(a,j),this.advectionProgram=new f(a,this.ext.supportLinearFiltering?J:$),this.divergenceProgram=new f(a,Q),this.curlProgram=new f(a,q),this.vorticityProgram=new f(a,ee),this.pressureProgram=new f(a,te),this.gradienSubtractProgram=new f(a,ie),this.blit=function(){return e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0),function(re){e.bindFramebuffer(e.FRAMEBUFFER,re),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}}(),this.ditheringTexture=this.createTextureAsync(l(98421)),this.initFramebuffers(),this.multipleSplats(parseInt(String(Math.random()*20))+5),this.lastColorChangeTime=Date.now(),this.update(),this.initEventListener()}},{key:"indexOfMax",value:function(i){if(i.length===0)return-1;for(var r=i[0],t=0,n=1;n<i.length;n++)i[n]>r&&(t=n,r=i[n]);return t}},{key:"getWebGLContext",value:function(i){var r={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},t=this.canvas.getContext("webgl2",r),n=!!t;n||(t=this.canvas.getContext("webgl",r)||this.canvas.getContext("experimental-webgl",r));var a,o;n?(t.getExtension("EXT_color_buffer_float"),o=t.getExtension("OES_texture_float_linear")):(a=t.getExtension("OES_texture_half_float"),o=t.getExtension("OES_texture_half_float_linear")),t.clearColor(0,0,0,1);var s=n?t.HALF_FLOAT:a.HALF_FLOAT_OES,v,m,c;return n?(v=this.getSupportedFormat(t,t.RGBA16F,t.RGBA,s),m=this.getSupportedFormat(t,t.RG16F,t.RG,s),c=this.getSupportedFormat(t,t.R16F,t.RED,s)):(v=this.getSupportedFormat(t,t.RGBA,t.RGBA,s),m=this.getSupportedFormat(t,t.RGBA,t.RGBA,s),c=this.getSupportedFormat(t,t.RGBA,t.RGBA,s)),{gll:t,ext:{formatRGBA:v,formatRG:m,formatR:c,halfFloatTexType:s,supportLinearFiltering:o}}}},{key:"captureScreenshot",value:function(){this.colorProgram.bind(),e.uniform4f(this.colorProgram.uniforms.color,0,0,0,1),this.blit(this.density.write.fbo),this.render(this.density.write.fbo),e.bindFramebuffer(e.FRAMEBUFFER,this.density.write.fbo);var i=this.dyeWidth*this.dyeHeight*4,r=new Float32Array(i);e.readPixels(0,0,this.dyeWidth,this.dyeHeight,e.RGBA,e.FLOAT,r);for(var t=new Uint8Array(i),n=0,a=this.dyeHeight-1;a>=0;a--)for(var o=0;o<this.dyeWidth;o++){var s=a*this.dyeWidth*4+o*4;t[s+0]=this.clamp01(r[n+0])*255,t[s+1]=this.clamp01(r[n+1])*255,t[s+2]=this.clamp01(r[n+2])*255,t[s+3]=this.clamp01(r[n+3])*255,n+=4}var v=document.createElement("canvas"),m=v.getContext("2d");v.width=this.dyeWidth,v.height=this.dyeHeight;var c=m.createImageData(this.dyeWidth,this.dyeHeight);c.data.set(t),m.putImageData(c,0,0);var d=v.toDataURL();this.downloadURI("fluid.png",d),URL.revokeObjectURL(d)}},{key:"clamp01",value:function(i){return Math.min(Math.max(i,0),1)}},{key:"downloadURI",value:function(i,r){var t=document.createElement("a");t.download=i,t.href=r,document.body.appendChild(t),t.click(),document.body.removeChild(t)}},{key:"isMobile",value:function(){return/Mobi|Android/i.test(navigator.userAgent)}},{key:"compileShader",value:function(i,r){var t=e.createShader(i);if(e.shaderSource(t,r),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))throw e.getShaderInfoLog(t);return t}},{key:"initFramebuffers",value:function(){var i=this.getResolution(this.config.SIM_RESOLUTION),r=this.getResolution(this.config.DYE_RESOLUTION);this.simWidth=i.width,this.simHeight=i.height,this.dyeWidth=r.width,this.dyeHeight=r.height;var t=this.ext.halfFloatTexType,n=this.ext.formatRGBA,a=this.ext.formatRG,o=this.ext.formatR,s=this.ext.supportLinearFiltering?e.LINEAR:e.NEAREST;this.density?this.density=this.resizeDoubleFBO(this.density,this.dyeWidth,this.dyeHeight,n.internalFormat,n.format,t,s):this.density=this.createDoubleFBO(this.dyeWidth,this.dyeHeight,n.internalFormat,n.format,t,s),this.velocity?this.velocity=this.resizeDoubleFBO(this.velocity,this.simWidth,this.simHeight,a.internalFormat,a.format,t,s):this.velocity=this.createDoubleFBO(this.simWidth,this.simHeight,a.internalFormat,a.format,t,s),this.divergence=this.createFBO(this.simWidth,this.simHeight,o.internalFormat,o.format,t,e.NEAREST),this.curl=this.createFBO(this.simWidth,this.simHeight,o.internalFormat,o.format,t,e.NEAREST),this.pressure=this.createDoubleFBO(this.simWidth,this.simHeight,o.internalFormat,o.format,t,e.NEAREST),this.initBloomFramebuffers()}},{key:"initBloomFramebuffers",value:function(){var i=this.getResolution(this.config.BLOOM_RESOLUTION),r=this.ext.halfFloatTexType,t=this.ext.formatRGBA,n=this.ext.supportLinearFiltering?e.LINEAR:e.NEAREST;this.bloom=this.createFBO(i.width,i.height,t.internalFormat,t.format,r,n),this.bloomFramebuffers.length=0;for(var a=0;a<this.config.BLOOM_ITERATIONS;a++){var o=i.width>>a+1,s=i.height>>a+1;if(o<2||s<2)break;var v=this.createFBO(o,s,t.internalFormat,t.format,r,n);this.bloomFramebuffers.push(v)}}},{key:"createFBO",value:function(i,r,t,n,a,o){e.activeTexture(e.TEXTURE0);var s=e.createTexture();e.bindTexture(e.TEXTURE_2D,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,i,r,0,n,a,null);var v=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,v),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0),e.viewport(0,0,i,r),e.clear(e.COLOR_BUFFER_BIT),{texture:s,fbo:v,width:i,height:r,attach:function(c){return e.activeTexture(e.TEXTURE0+c),e.bindTexture(e.TEXTURE_2D,s),c}}}},{key:"createDoubleFBO",value:function(i,r,t,n,a,o){var s=this.createFBO(i,r,t,n,a,o),v=this.createFBO(i,r,t,n,a,o);return{get read(){return s},set read(m){s=m},get write(){return v},set write(m){v=m},swap:function(){var c=s;s=v,v=c}}}},{key:"resizeFBO",value:function(i,r,t,n,a,o,s){var v=this.createFBO(r,t,n,a,o,s);return this.clearProgram.bind(),e.uniform1i(this.clearProgram.uniforms.uTexture,i.attach(0)),e.uniform1f(this.clearProgram.uniforms.value,1),this.blit(v.fbo),v}},{key:"resizeDoubleFBO",value:function(i,r,t,n,a,o,s){return i.read=this.resizeFBO(i.read,r,t,n,a,o,s),i.write=this.createFBO(r,t,n,a,o,s),i}},{key:"createTextureAsync",value:function(i){var r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texImage2D(e.TEXTURE_2D,0,e.RGB,1,1,0,e.RGB,e.UNSIGNED_BYTE,new Uint8Array([255,255,255]));var t={texture:r,width:1,height:1,attach:function(o){return e.activeTexture(e.TEXTURE0+o),e.bindTexture(e.TEXTURE_2D,r),o}},n=new Image;return n.onload=function(){t.width=n.width,t.height=n.height,e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,n)},n.src=i,t}},{key:"update",value:function(){this.resizeCanvas(),this.input(),this.config.PAUSED||this.step(.016),this.render(null),requestAnimationFrame(this.update.bind(this))}},{key:"input",value:function(){this.splatStack.length>0&&this.multipleSplats(this.splatStack.pop());for(var i=0;i<this.pointers.length;i++){var r=this.pointers[i];r.moved&&(this.splat(r.x,r.y,r.dx,r.dy,r.color),r.moved=!1)}if(this.config.COLORFUL&&this.lastColorChangeTime+100<Date.now()){this.lastColorChangeTime=Date.now();for(var t=0;t<this.pointers.length;t++){var n=this.pointers[t];n.color=this.generateColor()}}}},{key:"step",value:function(i){e.disable(e.BLEND),e.viewport(0,0,this.simWidth,this.simHeight),this.curlProgram.bind(),e.uniform2f(this.curlProgram.uniforms.texelSize,1/this.simWidth,1/this.simHeight),e.uniform1i(this.curlProgram.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.curl.fbo),this.vorticityProgram.bind(),e.uniform2f(this.vorticityProgram.uniforms.texelSize,1/this.simWidth,1/this.simHeight),e.uniform1i(this.vorticityProgram.uniforms.uVelocity,this.velocity.read.attach(0)),e.uniform1i(this.vorticityProgram.uniforms.uCurl,this.curl.attach(1)),e.uniform1f(this.vorticityProgram.uniforms.curl,this.config.CURL),e.uniform1f(this.vorticityProgram.uniforms.dt,i),this.blit(this.velocity.write.fbo),this.velocity.swap(),this.divergenceProgram.bind(),e.uniform2f(this.divergenceProgram.uniforms.texelSize,1/this.simWidth,1/this.simHeight),e.uniform1i(this.divergenceProgram.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.divergence.fbo),this.clearProgram.bind(),e.uniform1i(this.clearProgram.uniforms.uTexture,this.pressure.read.attach(0)),e.uniform1f(this.clearProgram.uniforms.value,this.config.PRESSURE_DISSIPATION),this.blit(this.pressure.write.fbo),this.pressure.swap(),this.pressureProgram.bind(),e.uniform2f(this.pressureProgram.uniforms.texelSize,1/this.simWidth,1/this.simHeight),e.uniform1i(this.pressureProgram.uniforms.uDivergence,this.divergence.attach(0));for(var r=0;r<this.config.PRESSURE_ITERATIONS;r++)e.uniform1i(this.pressureProgram.uniforms.uPressure,this.pressure.read.attach(1)),this.blit(this.pressure.write.fbo),this.pressure.swap();this.gradienSubtractProgram.bind(),e.uniform2f(this.gradienSubtractProgram.uniforms.texelSize,1/this.simWidth,1/this.simHeight),e.uniform1i(this.gradienSubtractProgram.uniforms.uPressure,this.pressure.read.attach(0)),e.uniform1i(this.gradienSubtractProgram.uniforms.uVelocity,this.velocity.read.attach(1)),this.blit(this.velocity.write.fbo),this.velocity.swap(),this.advectionProgram.bind(),e.uniform2f(this.advectionProgram.uniforms.texelSize,1/this.simWidth,1/this.simHeight),this.ext.supportLinearFiltering||e.uniform2f(this.advectionProgram.uniforms.dyeTexelSize,1/this.simWidth,1/this.simHeight);var t=this.velocity.read.attach(0);e.uniform1i(this.advectionProgram.uniforms.uVelocity,t),e.uniform1i(this.advectionProgram.uniforms.uSource,t),e.uniform1f(this.advectionProgram.uniforms.dt,i),e.uniform1f(this.advectionProgram.uniforms.dissipation,this.config.VELOCITY_DISSIPATION),this.blit(this.velocity.write.fbo),this.velocity.swap(),e.viewport(0,0,this.dyeWidth,this.dyeHeight),this.ext.supportLinearFiltering||e.uniform2f(this.advectionProgram.uniforms.dyeTexelSize,1/this.dyeWidth,1/this.dyeHeight),e.uniform1i(this.advectionProgram.uniforms.uVelocity,this.velocity.read.attach(0)),e.uniform1i(this.advectionProgram.uniforms.uSource,this.density.read.attach(1)),e.uniform1f(this.advectionProgram.uniforms.dissipation,this.config.DENSITY_DISSIPATION),this.blit(this.density.write.fbo),this.density.swap()}},{key:"render",value:function(i){this.config.BLOOM&&this.applyBloom(this.density.read,this.bloom),i==null||!this.config.TRANSPARENT?(e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND)):e.disable(e.BLEND);var r=i==null?e.drawingBufferWidth:this.dyeWidth,t=i==null?e.drawingBufferHeight:this.dyeHeight;if(e.viewport(0,0,r,t),!this.config.TRANSPARENT){this.colorProgram.bind();var n=this.config.BACK_COLOR;e.uniform4f(this.colorProgram.uniforms.color,n.r/255,n.g/255,n.b/255,1),this.blit(i)}if(i==null&&this.config.TRANSPARENT&&(this.backgroundProgram.bind(),e.uniform1f(this.backgroundProgram.uniforms.aspectRatio,this.canvas.width/this.canvas.height),this.blit(null)),this.config.SHADING){var a=this.config.BLOOM?this.displayBloomShadingProgram:this.displayShadingProgram;if(a.bind(),e.uniform2f(a.uniforms.texelSize,1/r,1/t),e.uniform1i(a.uniforms.uTexture,this.density.read.attach(0)),this.config.BLOOM){e.uniform1i(a.uniforms.uBloom,this.bloom.attach(1)),e.uniform1i(a.uniforms.uDithering,this.ditheringTexture.attach(2));var o=this.getTextureScale(this.ditheringTexture,r,t);e.uniform2f(a.uniforms.ditherScale,o.x,o.y)}}else{var s=this.config.BLOOM?this.displayBloomProgram:this.displayProgram;if(s.bind(),e.uniform1i(s.uniforms.uTexture,this.density.read.attach(0)),this.config.BLOOM){e.uniform1i(s.uniforms.uBloom,this.bloom.attach(1)),e.uniform1i(s.uniforms.uDithering,this.ditheringTexture.attach(2));var v=this.getTextureScale(this.ditheringTexture,r,t);e.uniform2f(s.uniforms.ditherScale,v.x,v.y)}}this.blit(i)}},{key:"applyBloom",value:function(i,r){if(!(this.bloomFramebuffers.length<2)){var t=r;e.disable(e.BLEND),this.bloomPrefilterProgram.bind();var n=this.config.BLOOM_THRESHOLD*this.config.BLOOM_SOFT_KNEE+1e-4,a=this.config.BLOOM_THRESHOLD-n,o=n*2,s=.25/n;e.uniform3f(this.bloomPrefilterProgram.uniforms.curve,a,o,s),e.uniform1f(this.bloomPrefilterProgram.uniforms.threshold,this.config.BLOOM_THRESHOLD),e.uniform1i(this.bloomPrefilterProgram.uniforms.uTexture,i.attach(0)),e.viewport(0,0,t.width,t.height),this.blit(t.fbo),this.bloomBlurProgram.bind();for(var v=0;v<this.bloomFramebuffers.length;v++){var m=this.bloomFramebuffers[v];e.uniform2f(this.bloomBlurProgram.uniforms.texelSize,1/t.width,1/t.height),e.uniform1i(this.bloomBlurProgram.uniforms.uTexture,t.attach(0)),e.viewport(0,0,m.width,m.height),this.blit(m.fbo),t=m}e.blendFunc(e.ONE,e.ONE),e.enable(e.BLEND);for(var c=this.bloomFramebuffers.length-2;c>=0;c--){var d=this.bloomFramebuffers[c];e.uniform2f(this.bloomBlurProgram.uniforms.texelSize,1/t.width,1/t.height),e.uniform1i(this.bloomBlurProgram.uniforms.uTexture,t.attach(0)),e.viewport(0,0,d.width,d.height),this.blit(d.fbo),t=d}e.disable(e.BLEND),this.bloomFinalProgram.bind(),e.uniform2f(this.bloomFinalProgram.uniforms.texelSize,1/t.width,1/t.height),e.uniform1i(this.bloomFinalProgram.uniforms.uTexture,t.attach(0)),e.uniform1f(this.bloomFinalProgram.uniforms.intensity,this.config.BLOOM_INTENSITY),e.viewport(0,0,r.width,r.height),this.blit(r.fbo)}}},{key:"splat",value:function(i,r,t,n,a){e.viewport(0,0,this.simWidth,this.simHeight),this.splatProgram.bind(),e.uniform1i(this.splatProgram.uniforms.uTarget,this.velocity.read.attach(0)),e.uniform1f(this.splatProgram.uniforms.aspectRatio,this.canvas.width/this.canvas.height),e.uniform2f(this.splatProgram.uniforms.point,i/this.canvas.width,1-r/this.canvas.height),e.uniform3f(this.splatProgram.uniforms.color,t,-n,1),e.uniform1f(this.splatProgram.uniforms.radius,this.config.SPLAT_RADIUS/100),this.blit(this.velocity.write.fbo),this.velocity.swap(),e.viewport(0,0,this.dyeWidth,this.dyeHeight),e.uniform1i(this.splatProgram.uniforms.uTarget,this.density.read.attach(0)),e.uniform3f(this.splatProgram.uniforms.color,a.r,a.g,a.b),this.blit(this.density.write.fbo),this.density.swap()}},{key:"multipleSplats",value:function(i){for(var r=0;r<i;r++){var t=this.generateColor();t.r*=10,t.g*=10,t.b*=10;var n=this.canvas.width*Math.random(),a=this.canvas.height*Math.random(),o=1e3*(Math.random()-.5),s=1e3*(Math.random()-.5);this.splat(n,a,o,s,t)}}},{key:"resizeCanvas",value:function(){(this.canvas.width!=this.canvas.clientWidth||this.canvas.height!=this.canvas.clientHeight)&&(this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.initFramebuffers())}},{key:"generateColor",value:function(){var i=this.HSVtoRGB(Math.random(),1,1);return i.r*=.15,i.g*=.15,i.b*=.15,i}},{key:"HSVtoRGB",value:function(i,r,t){var n,a,o,s,v,m,c,d;switch(s=Math.floor(i*6),v=i*6-s,m=t*(1-r),c=t*(1-v*r),d=t*(1-(1-v)*r),s%6){case 0:n=t,a=d,o=m;break;case 1:n=c,a=t,o=m;break;case 2:n=m,a=t,o=d;break;case 3:n=m,a=c,o=t;break;case 4:n=d,a=m,o=t;break;case 5:n=t,a=m,o=c;break}return{r:n,g:a,b:o}}},{key:"RGBToHue",value:function(i,r,t){var n=Math.min(i,r,t),a=Math.max(i,r,t),o=a-n,s=0,v=0,m=0;return o==0?s=0:a==i?s=(r-t)/o%6:a==r?s=(t-i)/o+2:s=(i-r)/o+4,s=Math.round(s*60),s<0&&(s+=360),s}},{key:"getResolution",value:function(i){var r=e.drawingBufferWidth/e.drawingBufferHeight;r<1&&(r=1/r);var t=Math.round(i*r),n=Math.round(i);return e.drawingBufferWidth>e.drawingBufferHeight?{width:t,height:n}:{width:n,height:t}}},{key:"getTextureScale",value:function(i,r,t){return{x:r/i.width,y:t/i.height}}},{key:"initEventListener",value:function(){var i=this;this.canvas.addEventListener("mousemove",function(r){i.pointers[0].moved=i.pointers[0].down,i.pointers[0].dx=(r.offsetX-i.pointers[0].x)*5,i.pointers[0].dy=(r.offsetY-i.pointers[0].y)*5,i.pointers[0].x=r.offsetX,i.pointers[0].y=r.offsetY}),this.canvas.addEventListener("touchmove",function(r){r.preventDefault();for(var t=r.targetTouches,n=0;n<t.length;n++){var a=i.pointers[n];a.moved=a.down,a.dx=(t[n].pageX-a.x)*8,a.dy=(t[n].pageY-a.y)*8,a.x=t[n].pageX,a.y=t[n].pageY}},!1),this.canvas.addEventListener("mouseenter",function(){i.pointers[0].down=!0,i.pointers[0].color=i.config.POINTER_COLOR}),this.canvas.addEventListener("touchstart",function(r){r.preventDefault();for(var t=r.targetTouches,n=0;n<t.length;n++)n>=i.pointers.length&&i.pointers.push(i.pointerPrototype),i.pointers[n].id=t[n].identifier,i.pointers[n].down=!0,i.pointers[n].x=t[n].pageX,i.pointers[n].y=t[n].pageY,i.pointers[n].color=i.config.POINTER_COLOR}),this.canvas.addEventListener("mousedown",function(){i.multipleSplats(parseInt(String(Math.random()*20))+5)}),window.addEventListener("mouseleave",function(){i.pointers[0].down=!1}),window.addEventListener("touchend",function(r){for(var t=r.changedTouches,n=0;n<t.length;n++)for(var a=0;a<i.pointers.length;a++)t[n].identifier==i.pointers[a].id&&(i.pointers[a].down=!1)}),window.addEventListener("keydown",function(r){r.code==="KeyP"&&(i.config.PAUSED=!i.config.PAUSED),r.key===" "&&i.splatStack.push(parseInt(Math.random()*20)+5)})}}]),g}(),z=new W,D=z,X=l(47347),R=l(85893),k=function(g){w()(i,g);var h=N()(i);function i(){var r;E()(this,i);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r=h.call.apply(h,[this].concat(n)),u()(y()(r),"state",{}),u()(y()(r),"BEATS",[1,600,600,300,300,600,300,300,300,600,300]),u()(y()(r),"isPlaying",!1),u()(y()(r),"playBeats",function(o){var s=r.BEATS[o];r.isPlaying=!1,s&&(r.isPlaying=!0,setTimeout(function(){D.multipleSplats(parseInt(String(Math.random()*10))+5),r.playBeats(o+1)},s))}),r}return S()(i,[{key:"didShow",value:function(){var r=b()(x()().mark(function n(){return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:case"end":return o.stop()}},n)}));function t(){return r.apply(this,arguments)}return t}()},{key:"didMount",value:function(){var r=b()(x()().mark(function n(){return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:D.init("canv");case 1:case"end":return o.stop()}},n)}));function t(){return r.apply(this,arguments)}return t}()},{key:"render",value:function(){var t=this;return F()(this.state),(0,R.jsxs)(G.Z,{title:"",children:[(0,R.jsx)("div",{className:X.Z.btns,children:(0,R.jsx)(_.Z,{type:"primary",onClick:function(){t.isPlaying||t.playBeats(0)},children:"\u6765\u70B9\u8282\u594F"})}),(0,R.jsx)("canvas",{id:"canv",style:{width:"100%",height:"600px"}})]})}}]),i}(H.Z)},98421:function(p,T,l){"use strict";p.exports=l.p+"static/LDR_RGB1_0.8bf25685.png"},49677:function(p){function T(l){if(l==null)throw new TypeError("Cannot destructure "+l)}p.exports=T,p.exports.__esModule=!0,p.exports.default=p.exports}}]);
