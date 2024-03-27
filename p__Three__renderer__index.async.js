"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6133],{12814:function(N,f,r){r.r(f),r.d(f,{default:function(){return H}});var w=r(49677),x=r.n(w),S=r(15009),h=r.n(S),b=r(99289),g=r.n(b),I=r(12444),y=r.n(I),E=r(72004),p=r.n(E),j=r(25098),z=r.n(j),F=r(31996),D=r.n(F),T=r(26037),L=r.n(T),P=r(9783),t=r.n(P),U=r(39318),v=r(61456),Z=r(21990),c=r(18423),Y=r(5461),i=c.Z.Three,A=c.Z.TWEEN,W=c.Z.dat,O=c.Z.Stats,R=c.Z.OrbitControls,B=p()(function m(){var e=this;y()(this,m),t()(this,"container",void 0),t()(this,"camera",void 0),t()(this,"orthocam",void 0),t()(this,"scene",void 0),t()(this,"renderer",void 0),t()(this,"stats",void 0),t()(this,"animateFrame",void 0),t()(this,"tween",void 0),t()(this,"controls",void 0),t()(this,"clock",new i.Clock),t()(this,"Geometrys",{}),t()(this,"Materials",{}),t()(this,"Meshs",{}),t()(this,"particleSystem",void 0),t()(this,"GuiInit",null),t()(this,"guiData",{autoRotate:!0,blurSize:.5,radiusSize:.7}),t()(this,"init",function(a){e.container=document.getElementById(a);var n=e.container.clientWidth,o=e.container.clientHeight;e.scene=new i.Scene,e.camera=new i.PerspectiveCamera(60,n/o,1,500),e.camera.position.set(0,0,80),e.camera.lookAt(e.scene.position);var s=n/15,l=o/15;e.orthocam=new i.OrthographicCamera(s/-2,s/2,l/2,l/-2,1,1e3),e.orthocam.position.set(0,0,80),e.orthocam.layers.set(1),e.orthocam.layers.enable(2),e.renderer=new i.WebGLRenderer({}),e.renderer.autoClear=!1,e.renderer.setClearColor(16777215),e.renderer.setPixelRatio(window.devicePixelRatio),e.renderer.setSize(n,o),e.container.appendChild(e.renderer.domElement),e.controls=new R(e.camera,e.renderer.domElement),e.controls.enableDamping=!0,e.controls.dampingFactor=.1,e.addThings(),e.addLight(),e.animate(),e.initStats(),e.initGui()}),t()(this,"destroy",function(){e.toggleGui(0),Object.values(e.Geometrys).forEach(function(a){a.dispose()}),Object.values(e.Materials).forEach(function(a){a.dispose()}),e.scene.clear(),e.renderer.dispose(),e.renderer.forceContextLoss(),e.camera=null,e.scene=null,e.renderer=null,e.GuiInit=null,e.stats=null,e.tween&&(e.tween.stop(),e.tween=null),cancelAnimationFrame(e.animateFrame)}),t()(this,"initStats",function(){e.stats=new O,e.stats.showPanel(0),e.stats.dom.style.position="absolute",e.container.appendChild(e.stats.dom)}),t()(this,"initGui",function(){if(e.GuiInit){e.toggleGui();return}e.GuiInit=new W.GUI({}),e.GuiInit.domElement.style.position="absolute",e.GuiInit.domElement.style.right="10px",e.GuiInit.domElement.style.top="10px";var a=e.GuiInit.addFolder("\u63A7\u5236\u7A97\u53E3");a.add(e.guiData,"blurSize",0,1,.005).name("blurSize").onChange(function(n){e.Materials.haloMaterial.uniforms.blur_size.value=n}),a.add(e.guiData,"radiusSize",0,1,.005).name("radiusSize").onChange(function(n){e.Materials.haloMaterial.uniforms.radius_size.value=n}),a.open()}),t()(this,"toggleGui",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(!(!e.GuiInit||!e.GuiInit.domElement)){var n=e.GuiInit.domElement.style.display=="none"?"":"none";a==0&&(n="none"),e.GuiInit.domElement.style.display=n}}),t()(this,"addLight",function(){var a=new i.AmbientLight(6842472);e.scene.add(a);var n=new i.DirectionalLight(16777215);n.position.set(1,1,1),n.intensity=.6,e.scene.add(n)}),t()(this,"addThings",function(){e.Geometrys.cubeGeometry=new i.BoxGeometry(10,10,10),e.Materials.cubeMaterial=new i.MeshPhongMaterial({color:16777215}),e.Meshs.cube=new i.Mesh(e.Geometrys.cubeGeometry,e.Materials.cubeMaterial),e.Meshs.cube.rotation.set(.2,.2,0),e.scene.add(e.Meshs.cube),e.Geometrys.ballGeometry=new i.SphereGeometry(10,32,16),e.Materials.ballMaterial=new i.ShaderMaterial({uniforms:{val:{value:0},color1:{value:new i.Color("#e2b985")},color2:{value:new i.Color("#8d6eb4")}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,fragmentShader:`
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform float val;
        varying vec2 vUv;

        void main() {
          float y = vUv.y;
          // \u53D1\u5149\u7684\u5F3A\u5EA6
          float glowIntensity = 1.5;

          vec3 co1 = color1.rgb * glowIntensity;
          vec3 co2 = color2.rgb * glowIntensity;
          // vec3 co3 = color3.rgb * glowIntensity;
          vec3 gradientColor;
          // if (y <= 0.5) {
            gradientColor = mix(co1, co2, y * 2.0);
          // } else {
          //   gradientColor = mix(co2, co3, y * 2.0 - 1.0);
          // }

          vec4 finalColor = vec4(gradientColor, 1.0 * 1.0);
          gl_FragColor = finalColor;
        }
      `}),e.Meshs.ball=new i.Mesh(e.Geometrys.ballGeometry,e.Materials.ballMaterial),e.Meshs.ball.layers.set(1),e.scene.add(e.Meshs.ball),e.addCircle(),e.initTween()}),t()(this,"addCircle",function(){e.Materials.haloMaterial=new i.ShaderMaterial({uniforms:{color_1:{value:new i.Color("#6158db")},color_2:{value:new i.Color("#c23de6")},blur_size:{value:.5},radius_size:{value:.7},opacity:{value:1}},vertexShader:`
        #define GLSLIFY 1
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        #define GLSLIFY 1
        /* Easing Sine InOut equation */
        /* Adapted from Robert Penner easing equations */
        #define PI 3.141592653589793
        
        float easeSineInOut(float t) {
          return -0.5 * (cos(PI * t * 2.0) - 1.0);
        }
        
        float circle(in vec2 _uv, in float _radius, in float _blur){
          return 1. - smoothstep(_radius-(_radius*_blur), _radius+(_radius*_blur), dot(_uv,_uv)*4.0);
        }
        
        uniform vec3 color_1;
        uniform vec3 color_2;
        
        uniform float blur_size;
        uniform float radius_size;
        uniform float opacity;
        
        varying vec2 vUv;
        
        mat2 rotate(float _a) {
          return mat2(cos(_a), -sin(_a), sin(_a), cos(_a));
        }
        
        vec2 start = vec2(0.25, 0.8);
        vec2 end   = vec2(0.65, 0.1);
        
        void main() {
          vec2 uv = vUv - 0.5;
      
          float c = circle(uv, radius_size, blur_size);
      
          // Color
          vec2 gDir = end - start;
          float lenSq = dot(gDir, gDir * 0.8);
          vec2 relCoord = uv + 0.5 - start;
          float pct = dot(relCoord, gDir) / lenSq;
      
          vec3 color = mix(color_1, color_2, pct);
          vec4 finalColor = vec4(color, c * opacity);
      
          gl_FragColor = finalColor;
        }
      `,transparent:!0}),e.Meshs.halo=new i.Mesh(new i.CircleBufferGeometry(40,8),e.Materials.haloMaterial),e.Meshs.halo.name="halo",e.scene.add(e.Meshs.halo)}),t()(this,"initTween",function(){}),t()(this,"animate",function(){e.stats&&e.stats.begin();var a=e.clock.getDelta();e.render(),A.update(),e.controls.update();var n=Date.now()*.0015,o=20*Math.sin(n),s=-20*Math.sin(n*2);e.Meshs.ball.position.set(o,s,0),e.stats&&e.stats.end(),e.animateFrame=requestAnimationFrame(e.animate)}),t()(this,"render",function(){var a=e.container.clientWidth,n=e.container.clientHeight;e.renderer.clear(),e.orthocam.layers.set(1),e.renderer.setViewport(a-100-10,n-100-10,100,100),e.renderer.render(e.scene,e.orthocam),e.renderer.setViewport(0,0,a,n),e.renderer.render(e.scene,e.camera)})}),V=new B,C=V,u=r(85893),$=v.Z.Title,M=v.Z.Paragraph,G=v.Z.Text,H=function(m){D()(a,m);var e=L()(a);function a(){var n;y()(this,a);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return n=e.call.apply(e,[this].concat(s)),t()(z()(n),"state",{}),n}return p()(a,[{key:"didShow",value:function(){var n=g()(h()().mark(function s(){return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:case"end":return d.stop()}},s)}));function o(){return n.apply(this,arguments)}return o}()},{key:"didMount",value:function(){var n=g()(h()().mark(function s(){return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:C.init("WebGL-output-renderer");case 1:case"end":return d.stop()}},s)}));function o(){return n.apply(this,arguments)}return o}()},{key:"willUnmount",value:function(){C.destroy()}},{key:"render",value:function(){return x()(this.state),(0,u.jsxs)(Z.Z,{title:"\u6E32\u67D3\u5668",children:[(0,u.jsxs)(v.Z,{children:[(0,u.jsx)(M,{children:(0,u.jsx)(G,{children:"alpha: \u900F\u660E\u80CC\u666F"})}),(0,u.jsxs)(M,{children:[(0,u.jsx)(G,{children:"layers: \u7269\u4F53\u53EA\u6709\u548CCamera\u5728\u540C\u4E00\u4E2A\u5C42\u65F6\u624D\u53EF\u89C1"}),(0,u.jsx)("a",{href:"https://threejs.org/docs/index.html?q=object#api/zh/core/Layers",children:"https://threejs.org/docs/index.html?q=object#api/zh/core/Layers"})]})]}),(0,u.jsx)("div",{id:"WebGL-output-renderer",style:{width:"600px",height:"600px",position:"relative"}})]})}}]),a}(U.Z)}}]);
