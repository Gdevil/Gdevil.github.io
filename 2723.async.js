"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2723],{38400:function(Z,O,a){a.d(O,{Ee:function(){return W},CA:function(){return N},xv:function(){return c},G7:function(){return k}});var x=a(97857),m=a.n(x),G=a(13769),y=a.n(G),R=a(12444),I=a.n(R),T=a(72004),A=a.n(T),j=a(31996),s=a.n(j),f=a(26037),S=a.n(f),H=a(93967),E=a.n(H),L=a(67294),U=a(31780),M=a(85893),K=["className","children"],N=function(h){s()(p,h);var u=S()(p);function p(){return I()(this,p),u.apply(this,arguments)}return A()(p,[{key:"render",value:function(){var e=this.props,t=e.className,o=e.children,n=y()(e,K);return(0,M.jsxs)("span",m()(m()({className:E()(U.Z.button,t)},n),{},{children:[o,(0,M.jsx)("span",{className:U.Z.bord}),(0,M.jsx)("span",{className:U.Z.bord1})]}))}}]),p}(L.Component),B=a(92497),z=["className"],k=L.forwardRef(function(h,u){var p=h.className,g=y()(h,z);return(0,M.jsx)("div",m()({className:E()(B.Z.view,p),ref:u},g))});k.defaultProps={};var r=a(9783),v=a.n(r),D=["className","type"],c=function(u){var p=u.className,g=u.type,e=y()(u,D);return(0,M.jsx)("span",m()({className:E()(B.Z.text,v()({},B.Z[g||""],!!g),p)},e))};c.defaultProps={};var d=["className","src","size"],b=function(u){var p=u.className,g=u.src,e=u.size,t=y()(u,d);return g?(0,M.jsx)("img",m()({className:E()({},p),src:g,width:e},t)):null};b.defaultProps={};var P=["className","src"],W=L.forwardRef(function(h,u){var p=h.className,g=h.src,e=y()(h,P);return(0,M.jsx)("img",m()({className:E()({},p),src:g},e))});W.defaultProps={}},83006:function(Z,O,a){a.d(O,{Z:function(){return k}});var x=a(97857),m=a.n(x),G=a(13769),y=a.n(G),R=a(12444),I=a.n(R),T=a(72004),A=a.n(T),j=a(25098),s=a.n(j),f=a(31996),S=a.n(f),H=a(26037),E=a.n(H),L=a(9783),U=a.n(L),M=a(67294),K=a(39318),N=a(86267),B=a(85893),z=["className","children","initCallback","onScroll"],k=function(r){S()(D,r);var v=E()(D);function D(){var c;I()(this,D);for(var d=arguments.length,b=new Array(d),P=0;P<d;P++)b[P]=arguments[P];return c=v.call.apply(v,[this].concat(b)),U()(s()(c),"scroll",void 0),U()(s()(c),"subscribeScroll",function(){var W=c.props.onScroll;W&&c.scroll.on("scroll",function(h){W(h)})}),c}return A()(D,[{key:"didMount",value:function(){var d=this;this.scroll=new N.ZP({el:document.querySelector("[data-scroll-container]"),smooth:!0,lerp:.05,multiplier:.4}),this.scroll.stop(),setTimeout(function(){d.scroll.update(),d.subscribeScroll(),console.log("this.props.initCallback?",d.props.initCallback),d.props.initCallback&&d.props.initCallback(d.scroll)},200)}},{key:"didHide",value:function(){}},{key:"willUnmount",value:function(){this.scroll.destroy()}},{key:"render",value:function(){var d=this.props,b=d.className,P=d.children,W=d.initCallback,h=d.onScroll,u=y()(d,z);return(0,B.jsx)("div",m()(m()({"data-scroll-container":!0,className:b},u),{},{children:P}))}}]),D}(K.Z)},56264:function(Z,O,a){a.d(O,{G7:function(){return m.G7},xv:function(){return m.xv}});var x=a(83006),m=a(38400)},31274:function(Z,O,a){a.d(O,{b:function(){return p}});var x=a(15009),m=a.n(x),G=a(99289),y=a.n(G),R=a(72004),I=a.n(R),T=a(12444),A=a.n(T),j=a(9783),s=a.n(j),f=a(18423),S=a(88821),H=a(53942),E=a(61411),L=a(97809),U=a(54458),M=a(89079),K=a(27242),N=a(12739),B=a(93865),z=N.Z.gsap,k=(0,H.hA)(),r=f.Z.Three,v=f.Z.TWEEN,D=f.Z.dat,c=f.Z.Stats,d=f.Z.OrbitControls,b=f.Z.OBJLoader,P=f.Z.MTLLoader,W=new r.Color,h=function(e,t,o){var n=(t+150)/700-Math.abs(e)/300*.2-0;return W.setHSL(o/100+.51,1,Math.max(.1,n),r.SRGBColorSpace),W},u=I()(function g(){var e=this;A()(this,g),s()(this,"container",void 0),s()(this,"containerBg",void 0),s()(this,"camera",void 0),s()(this,"scene",void 0),s()(this,"sceneBg",void 0),s()(this,"rendererMain",void 0),s()(this,"rendererBg",void 0),s()(this,"stats",void 0),s()(this,"animateFrame",void 0),s()(this,"tween",void 0),s()(this,"controls",void 0),s()(this,"clock",new r.Clock),s()(this,"cameraFocusP",new r.Vector3(0,0,0)),s()(this,"cameraP",new r.Vector3(0,160,0)),s()(this,"lightHouseP",new r.Vector3(40,0,50)),s()(this,"indexScrollGroup",new r.Group),s()(this,"boatGroup",new r.Group),s()(this,"tweenValues",{boatGpPositionState:0,boatGpRotateY:0}),s()(this,"composePasses",{}),s()(this,"composer",void 0),s()(this,"Geometrys",{}),s()(this,"Materials",{}),s()(this,"Meshs",{}),s()(this,"textureLoader",new r.TextureLoader),s()(this,"GuiInit",null),s()(this,"guiData",{testMode:!1,enableMouseMove:!1,speedX:-1,speedY:0,scale:.22,strength:1.8,wavePointNum:80,focus:65,aperture:.4,maxblur:.005,pixelSize:1}),s()(this,"mouseData",{mouseX:0,mouseY:0}),s()(this,"heightRate",.051),s()(this,"windowW",window.innerWidth),s()(this,"windowH",window.innerHeight),s()(this,"windowHalfX",window.innerWidth/2),s()(this,"windowHalfY",window.innerHeight/2),s()(this,"callbackFuns",{}),s()(this,"onSubscribe",function(t,o){var n=e.callbackFuns[t]||[];n.push(o),e.callbackFuns[t]=n}),s()(this,"triggerSubscribe",function(t,o){e.callbackFuns[t]&&e.callbackFuns[t].length>0&&e.callbackFuns[t].forEach(function(n){n.call(e,o)})}),s()(this,"init",function(t){e.containerBg=document.getElementById(t+"-bg"),e.container=document.getElementById(t);var o=e.container.clientWidth,n=e.container.clientHeight;e.scene=new r.Scene,e.scene.backgroundBlurriness=.35,new r.TextureLoader().load(S.Z.mainBackground,function(i){i.mapping=r.EquirectangularReflectionMapping,i.colorSpace=r.SRGBColorSpace,e.sceneBg=i}),e.camera=new r.PerspectiveCamera(45,o/n,1,1e3),e.camera.focus=.1,e.camera.position.copy(e.cameraP),e.camera.lookAt(e.cameraFocusP),e.rendererMain=new r.WebGLRenderer({alpha:!0,antialias:!0}),e.rendererMain.setPixelRatio(window.devicePixelRatio),e.rendererMain.setSize(o,n),e.container.appendChild(e.rendererMain.domElement),e.rendererBg=new r.WebGLRenderer({antialias:!0}),e.rendererBg.setClearColor(536902),e.rendererBg.setPixelRatio(window.devicePixelRatio),e.rendererBg.setSize(o,n),e.containerBg.appendChild(e.rendererBg.domElement),e.controls=new d(e.camera,e.rendererMain.domElement),e.controls.enableDamping=!0,e.controls.dampingFactor=.1,e.initEventListen(),e.addLight(),e.initStats(),e.addThings(),e.addComposer(),e.initGui(),e.animate()}),s()(this,"destroy",function(){e.toggleGui(0),Object.values(e.Geometrys).forEach(function(t){t.dispose()}),Object.values(e.Materials).forEach(function(t){t.dispose()}),e.scene.clear(),e.rendererMain.dispose(),e.rendererBg.dispose(),e.rendererMain.forceContextLoss(),e.rendererBg.forceContextLoss(),e.camera=null,e.scene=null,e.rendererMain=null,e.rendererBg=null,e.GuiInit=null,e.stats=null,e.tween&&(e.tween.stop(),e.tween=null),window.removeEventListener("pointermove",e.onPointerMove),window.removeEventListener("resize",e.onWindowResize),window.removeEventListener("blur",e.onWindowBlur),window.removeEventListener("focus",e.onWindowFocus),cancelAnimationFrame(e.animateFrame)}),s()(this,"scrollY",0),s()(this,"scrollTo",function(t){if(e.scrollY=t.y,t.y<e.windowH||t.y<e.windowH*2||t.y<e.windowH*3||t.y<e.windowH*4,t.y<e.windowH){var o=t.y/e.windowH;e.lightHouseP.x=(15-40)*o+40,e.lightHouseP.z=(-5-50)*o+50,e.birdPosState=1}else if(t.y>e.windowH*2){var n=t.y-e.windowH*2;e.lightHouseP.x=15-n*.2,e.lightHouseP.z=-5-n*.2,e.birdPosState=2}else e.lightHouseP.x=15,e.lightHouseP.z=-5,e.birdPosState=1;if(t.y>e.windowH*2.5&&t.y<e.windowH*3&&e.BoatRotateLerp(t.direction=="down"?-.5:.5,3,function(_){e.cameraFocusP.x=-(_-.5)*e.windowW*.2*e.heightRate}),!(t.y<e.windowH*2.5)){if(!(t.y>e.windowH*3))var i=(t.y-e.windowH*2.5)/(e.windowH*.5)}}),s()(this,"initStats",function(){B.Z.ENV!=="production"&&(e.stats=new c,e.stats&&(e.stats.showPanel(0),e.stats.dom.style.position="absolute",e.container.appendChild(e.stats.dom)))}),s()(this,"initEventListen",function(){window.addEventListener("pointermove",e.onPointerMove),window.addEventListener("resize",e.onWindowResize),window.addEventListener("blur",e.onWindowBlur),window.addEventListener("focus",e.onWindowFocus)}),s()(this,"onWindowResize",function(){e.windowW=window.innerWidth,e.windowH=window.innerHeight,e.windowHalfX=window.innerWidth/2,e.windowHalfY=window.innerHeight/2,e.camera.aspect=window.innerWidth/window.innerHeight,e.camera.updateProjectionMatrix(),e.rendererMain.setSize(window.innerWidth,window.innerHeight),e.rendererBg.setSize(window.innerWidth,window.innerHeight)}),s()(this,"onPointerMove",function(t){t.isPrimary===!1||!e.focusState||(e.mouseData.mouseX=t.clientX-e.windowHalfX,e.mouseData.mouseY=t.clientY-e.windowHalfY)}),s()(this,"focusState",1),s()(this,"onWindowBlur",function(){e.focusState=0}),s()(this,"onWindowFocus",function(){e.focusState=1}),s()(this,"initGui",function(){if(B.Z.ENV!=="production"){if(e.GuiInit){e.toggleGui();return}e.GuiInit=new D.GUI({}),e.GuiInit.domElement.style.position="absolute",e.GuiInit.domElement.style.right="10px",e.GuiInit.domElement.style.top="10px";var t=e.GuiInit.addFolder("\u63A7\u5236\u7A97\u53E3");t.add(e.guiData,"testMode").name("\u6D4B\u8BD5\u76F8\u673A").onChange(function(o){e.rendererMain.domElement.style.pointerEvents=o?"all":"none",document.querySelector("div.dg.ac").style.zIndex=o?5:0}),t.add(e.guiData,"speedX",-2,2,.005),t.add(e.guiData,"speedY",-2,2,.005),t.add(e.guiData,"scale",.01,.8,.002),t.add(e.guiData,"strength",-4,8,.01),t.open(),t=e.GuiInit.addFolder("\u540E\u671F\u5408\u6210"),t.add(e.guiData,"focus",1,200,1).onChange(e.matChanger),t.add(e.guiData,"aperture",0,15,.02).onChange(e.matChanger),t.add(e.guiData,"maxblur",0,.1,.005).onChange(e.matChanger),t.add(e.guiData,"pixelSize",1,50,1).onChange(function(o){e.composePasses.renderPixelatedPass.setPixelSize(e.guiData.pixelSize)}),t.add(e.composePasses.renderPixelatedPass,"normalEdgeStrength").min(0).max(2).step(.05),t.add(e.composePasses.renderPixelatedPass,"depthEdgeStrength").min(0).max(1).step(.05)}}),s()(this,"matChanger",function(){e.composePasses.bokehPass.uniforms.focus.value=e.guiData.focus,e.composePasses.bokehPass.uniforms.aperture.value=e.guiData.aperture*1e-5,e.composePasses.bokehPass.uniforms.maxblur.value=e.guiData.maxblur}),s()(this,"toggleGui",function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(!(!e.GuiInit||!e.GuiInit.domElement)){var o=e.GuiInit.domElement.style.display=="none"?"":"none";t==0&&(o="none"),e.GuiInit.domElement.style.display=o}}),s()(this,"addLight",function(){var t=new r.AmbientLight(16777215);t.intensity=.6,t.layers.enable(1),e.scene.add(t);var o=new r.DirectionalLight(16777215);o.position.set(-30,0,30),o.intensity=.33,o.layers.enable(1),e.scene.add(o);var n=new r.DirectionalLight(16777215);n.position.set(30,30,30),n.intensity=.23,n.layers.enable(1),e.scene.add(n)}),s()(this,"newMesh",function(t,o,n){return e.Geometrys[t]=o,e.Materials[t]=n,e.Meshs[t]=new r.Mesh(e.Geometrys[t],e.Materials[t]),e.Meshs[t].scale.set(0,0,0),e.Meshs[t]}),s()(this,"addThings",y()(m()().mark(function t(){return m()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.scene.add(e.indexScrollGroup),e.scene.add(e.boatGroup),e.boatGroup.position.set(0,6,-70),n.next=5,e.addBoat();case 5:return n.next=7,e.addLightHouse();case 7:return n.next=9,e.addBird();case 9:return n.next=11,e.addWheel();case 11:e.addWaves(),e.boatGroup.add(e.newMesh("cube",new r.BoxGeometry(10,10,10),new r.MeshPhongMaterial({color:16777215}))),e.Meshs.cube.layers.set(1),e.indexScrollGroup.add(e.newMesh("sphere",new r.SphereGeometry(7,24,12),new r.MeshPhongMaterial({color:16771653}))),e.Meshs.sphere.position.y=-e.windowH*3*e.heightRate,e.Meshs.sphere.layers.set(1),setTimeout(function(){e.triggerLoad()},100);case 18:case"end":return n.stop()}},t)}))),s()(this,"triggerLoad",function(){e.triggerSubscribe("afterLoad")}),s()(this,"addBoat",function(){return new Promise(function(t,o){var n=e.textureLoader.load(S.Z.ash_Color),i=e.textureLoader.load(S.Z.ash_Bump);n.wrapS=i.wrapS=r.RepeatWrapping,n.wrapT=i.wrapT=r.RepeatWrapping,n.repeat.set(.2,.2),i.repeat.set(.2,.2);var _=new P;_.load("../models/boat.mtl",function(l){l.preload();var F=new b;console.log(l),F.setMaterials(l),F.load("../models/boat.obj",function(w){w.traverse(function(C){C instanceof r.Mesh&&(C.name=="body"||C.name=="house"?(C.material.map=n,C.material.bumpMap=i,C.material.bumpScale=.06,C.material.shininess=15,C.material.refractionRatio=.1):C.material.shininess=3)}),console.log("test OBJ:::",w),w.scale.set(4,4,4),w.receiveShadow=!0,w.castShadow=!0,e.Meshs.boat=w,e.boatGroup.add(e.Meshs.boat),t()},function(w){console.log(w.loaded/w.total*100+"% loaded")},function(w){console.log(w)})})})}),s()(this,"addWheel",function(){return new Promise(function(t,o){var n=new b;n.load("../models/wheel.obj",function(i){i.traverse(function(_){_ instanceof r.Mesh&&(_.receiveShadow=!0,_.castShadow=!0,_.layers.set(1))}),i.position.set(0,-e.windowH*e.heightRate,0),i.scale.set(2,2,2),i.rotation.set(1.5,0,0),i.receiveShadow=!0,i.castShadow=!0,e.Meshs.wheel=i,e.indexScrollGroup.add(e.Meshs.wheel),e.Meshs.wheel.layers.set(1),t()},function(i){console.log(i.loaded/i.total*100+"% loaded")},function(i){console.log(i)})})}),s()(this,"addLightHouse",function(){return new Promise(function(t,o){var n=new P;n.load("../models/lighthouse.mtl",function(i){i.preload();var _=new b;console.log(i),_.setMaterials(i),_.load("../models/lighthouse.obj",function(l){l.traverse(function(F){}),l.position.copy(e.lightHouseP),l.scale.set(0,0,0),l.receiveShadow=!0,l.castShadow=!0,e.Meshs.lighthouse=l,console.log("rotation",l.position,l.rotation),e.scene.add(e.Meshs.lighthouse),t()},function(l){console.log(l.loaded/l.total*100+"% loaded")},function(l){console.log(l)})})})}),s()(this,"mixer",void 0),s()(this,"addBird",function(){return new Promise(function(t,o){var n=new E.y;n.load("../models/bird.fbx",function(i){e.mixer=new r.AnimationMixer(i);var _=e.mixer.clipAction(i.animations[0]);_.play(),i.traverse(function(l){l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),e.Meshs.bird=i,e.Meshs.bird.scale.set(0,0,0),e.Meshs.bird.position.copy(e.Meshs.lighthouse.position),e.scene.add(e.Meshs.bird),t()})})}),s()(this,"posBaseX",0),s()(this,"posBaseY",0),s()(this,"addWaves",function(){e.Geometrys.wave=new r.PlaneGeometry(600,600,e.guiData.wavePointNum,e.guiData.wavePointNum);var t=e.Geometrys.wave.attributes.position.array;e.Geometrys.wave.setAttribute("color",new r.BufferAttribute(new Float32Array(t.length),3)),e.setWavePoints(),e.Materials.wave=new r.MeshPhongMaterial({color:15595770,side:r.DoubleSide,flatShading:!0,vertexColors:!0,transparent:!0,opacity:.95}),e.Meshs.wave=new r.Mesh(e.Geometrys.wave,e.Materials.wave),e.Meshs.wave.receiveShadow=!0,e.Meshs.wave.castShadow=!0,e.Meshs.wave.position.set(0,0,-200),e.Meshs.wave.rotation.set(Math.PI*.5,0,0),e.Meshs.wave.layers.set(0),e.scene.add(e.Meshs.wave)}),s()(this,"setWavePoints",function(){for(var t=e.Geometrys.wave.attributes.position.array,o=e.Geometrys.wave.attributes.color,n=0;n<t.length;n+=3){t[n+2]=e.getWaveZ(n/3);var i=h(t[n],t[n+1],t[n+2]);o.setXYZ(n/3,i.r,i.g,i.b),n/3==1174&&(e.boatY=t[n+2])}e.Geometrys.wave.attributes.position.needsUpdate=!0,e.Geometrys.wave.attributes.color.needsUpdate=!0,e.Geometrys.wave.computeVertexNormals()}),s()(this,"addComposer",function(){var t=new U.C(e.scene,e.camera),o={focus:e.guiData.focus,aperture:e.guiData.aperture,maxblur:e.guiData.maxblur};e.composePasses.bokehPass=new M.A(e.scene,e.camera,o),e.composer=new L.x(e.rendererBg),e.composePasses.renderPixelatedPass=new K.q(e.guiData.pixelSize,e.scene,e.camera),e.composePasses.renderPixelatedPass.normalEdgeStrength=0,e.composer.addPass(t),e.composer.addPass(e.composePasses.renderPixelatedPass),e.matChanger()}),s()(this,"startAnimate",function(){new v.Tween(e.tweenValues).to({boatGpPositionState:1},4e3).easing(v.Easing.Quadratic.Out).start().onUpdate(function(t){e.boatGroup.position.z=-70*(1-e.tweenValues.boatGpPositionState)}).onComplete(function(){}),new v.Tween(e.cameraP).to({y:35,z:50},2e3).easing(v.Easing.Quadratic.InOut).delay(1e3).start().onUpdate(function(t){e.camera.position.copy(e.cameraP),e.rotateBoat(e.cameraP.z/100)}).onComplete(function(){e.triggerSubscribe("afterAnimate"),e.guiData.enableMouseMove=!0,e.Meshs.lighthouse.scale.set(3,3,3),e.Meshs.bird.scale.set(.05,.05,.05)})}),s()(this,"BoatRotateLerp",function(t,o,n){e.tweenValues.boatGpRotateY!=t&&(e.tweenValues.boatGpRotateY=t,new v.Tween(e.boatGroup.rotation).to({y:t},o*1e3).easing(v.Easing.Quadratic.InOut).start().onUpdate(function(i){e.rotateBoat(i.y),n&&n(i.y)}))}),s()(this,"rotateBoat",function(t){e.boatGroup.rotation.y=t;var o=1;e.guiData.speedX=-Math.cos(e.boatGroup.rotation.y)*o,e.guiData.speedY=Math.sin(e.boatGroup.rotation.y)*o}),s()(this,"getWaveZ",function(t){var o=e.guiData.wavePointNum+1,n=Math.floor(t/o)*e.guiData.scale+e.posBaseX,i=Math.floor(t%o)*e.guiData.scale+e.posBaseY,_=k(n,i);return _*e.guiData.strength}),s()(this,"waveAnimate",function(t){e.Meshs.wave&&(e.posBaseX+=t*e.guiData.speedX,e.posBaseY+=t*e.guiData.speedY,e.setWavePoints())}),s()(this,"boatY",0),s()(this,"boatAnimate",function(t){var o=e.tweenValues.boatGpPositionState,n=o>1?0:1-o;e.boatGroup.position.y=6*n-e.boatY}),s()(this,"birdPosState",1),s()(this,"birdPos",new r.Vector3(0,0,0)),s()(this,"birdAnimate",function(t){var o=e.birdPos;if(e.Meshs.bird&&e.Meshs.lighthouse){var n=Date.now()*.001,i=Math.cos(n)*3,_=e.birdPosState==1?e.lightHouseP.clone().add(new r.Vector3(-4,i+10,1)):e.boatGroup.position.clone().multiply(new r.Vector3(1,0,1)).add(new r.Vector3(4,i+6,-6));e.birdPos.copy(_),e.Meshs.bird.position.lerp(e.birdPos,.03);var l=e.boatGroup.position.clone().add(new r.Vector3(0,i+6,0));e.Meshs.bird.lookAt(l)}}),s()(this,"animate",function(){e.animateFrame=requestAnimationFrame(e.animate),e.focusState&&(e.stats&&e.stats.begin(),e.render(),v.update(),e.guiData.testMode&&e.controls.update(),e.stats&&e.stats.end())}),s()(this,"render",function(){var t=e.clock.getDelta();e.waveAnimate(t),e.boatAnimate(t),e.mixer&&e.mixer.update(t),e.guiData.testMode||(e.guiData.enableMouseMove&&e.camera.position.lerp(e.cameraP.clone().set(e.mouseData.mouseX*.02+e.cameraP.x,e.cameraP.y-e.mouseData.mouseY*.02,e.cameraP.z),.1),e.camera.lookAt(e.cameraFocusP)),e.indexScrollGroup.position.y+=(e.scrollY*e.heightRate-e.indexScrollGroup.position.y)*.3,e.Meshs.lighthouse&&e.Meshs.lighthouse.position.lerp(e.lightHouseP,.05),e.birdAnimate(t),e.camera.layers.set(0),e.composer.render(10),e.camera.layers.set(1),e.rendererMain.render(e.scene,e.camera)})}),p=new u}}]);