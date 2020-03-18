<template>
  <div id="main">
    <a class="absoluteBackHome" href="/"><el-button  round icon="el-icon-s-home"></el-button></a>
    <div id="screen">
      <div id="command">
        <div id="bar"></div>
        </div>
        <button class="btn">back</button>
    </div>
  </div>
</template>

<script>
var m3D = function () {
  var diapo = [],
    imb,
    scr,
    bar,
    selected,
    urlInfo,
    imagesPath = "images/",
    camera = {x:0, y:0, z:-650, s:0, fov: 500},
    nw = 0,
    nh = 0;
  camera.setTarget = function (c0, t1, p) {
    if (Math.abs(t1 - c0) > .1) {
      camera.s = 1;
      camera.p = 0;
      camera.d = t1 - c0;
      if (p) {
        camera.d *= 2;
        camera.p = 9;
      }
    }
  }
  camera.tween = function (v) {
    if (camera.s != 0) {
      camera.p += camera.s;
      camera[v] += camera.d * camera.p * .01;
      if (camera.p == 10) camera.s = -1;
      else if (camera.p == 0) camera.s = 0;
    }
    return camera.s;
  }
  var Diapo = function (n, img, x, y, z) {
    if (img) {
      this.url = img.url;
      this.title = img.title;
      this.color = img.color;
      this.isLoaded = false;
      if (document.createElement("canvas").getContext) {
        this.srcImg = new Image();
        // console.log('path',imagesPath + img.src,require('./images/46eae50db6.jpg'))
        this.srcImg.src = img.src;
        this.img = document.createElement("canvas");
        this.canvas = true;
        this.img.className = "fog";
        scr.appendChild(this.img);
      } else {
        this.img = document.createElement('img');
        this.img.src = img.src;
        scr.appendChild(this.img);
      }
      this.img.onclick = function () {
        if (camera.s) return;
        if (this.diapo.isLoaded) {
          if (this.diapo.urlActive) {
            top.location.href = this.diapo.url;
          } else {
            let Z=this.diapo.z;
            let X=this.diapo.x;
            let Y=this.diapo.y;
            camera.tz = (Z - camera.fov)*0.93;
            camera.tx = X;
            camera.ty = Y;
            if (selected) {
              selected.but.className = "button viewed";
              selected.img.className = "";
              selected.img.style.cursor = "pointer";
              selected.urlActive = false;
            }
            this.diapo.but.className = "button selected";
            interpolation(false);
            selected = this.diapo;
          }
        }
      }
      document.getElementsByClassName("btn")[0].onclick = function(e){
        camera.tz = -1000;
        camera.tx = 0;
        camera.ty = 0;
      };
      this.but = document.createElement('div');
      this.but.className = "button";
      bar.appendChild(this.but);
      this.but.diapo = this;
      this.but.style.left = Math.round((this.but.offsetWidth  * 1.2) * (n % 4)) + 'px';
      this.but.style.top  = Math.round((this.but.offsetHeight * 1.2) * Math.floor(n / 4)) + 'px';
      this.but.onclick = this.img.onclick;
      imb = this.img;
      this.img.diapo = this;
      this.zi = 25000;
    } else {
      this.img = document.createElement('div');
      this.isLoaded = true;
      this.img.className = "fog";
      scr.appendChild(this.img);
      this.w = 300;
      this.h = 300;
      this.zi = 15000;
    }
    this.x = x;
    this.y = y;
    this.z = z;
    this.css = this.img.style;
  }
  Diapo.prototype.anim = function () {
    this.img.className = "fog";
    if (this.isLoaded) {
      var x = this.x - camera.x;
      var y = this.y - camera.y;
      var z = this.z - camera.z;
      if (z < 20) z += 5000;
      var p = camera.fov / z;
      var w = this.w * p;
      var h = this.h * p;
      this.css.left   = Math.round(nw + x * p - w * .5) + 'px';
      this.css.top    = Math.round(nh + y * p - h * .5) + 'px';  
      this.css.width  = Math.round(w) + 'px';
      this.css.height = Math.round(h) + 'px';
      this.css.zIndex = this.zi - Math.round(z);
    } else {
      this.isLoaded = this.loading();
      
    }
  }
  Diapo.prototype.loading = function () {
    if ((this.canvas && this.srcImg.complete) || this.img.complete) {
      if (this.canvas) {
        this.w = this.srcImg.width;
        this.h = this.srcImg.height;
        this.img.width = this.w;
        this.img.height = this.h;
        var context = this.img.getContext("2d");
        context.drawImage(this.srcImg, 0, 0, this.w, this.h);
      } else {
        this.w = this.img.width;
        this.h = this.img.height;
      }
      this.but.className += " loaded";
      return true;
    }
    
    return false;
  }
  var resize = function () {
    nw = scr.offsetWidth * .5;
    nh = scr.offsetHeight * .5;
  }
  var interpolation = function (bicubic) {
    var i = 0, o;
    while( o = diapo[i++] ) {
      if (o.but) {
        o.css.msInterpolationMode = bicubic ? 'bicubic' : 'nearest-neighbor'; 
        o.css.imageRendering = bicubic ? 'optimizeQuality' : 'optimizeSpeed'; 
      }
    }
  }
  var init = function (data) {
    scr = document.getElementById("screen");
    bar = document.getElementById("bar");
    resize();
    var i = 0, 
        o,
      n = data.length;
    while( o = data[i++] ) {
      var x = 1000 * ((i % 4) - 1.5);
      var y = Math.round(Math.random() * 4000) - 2000;
      var z = i * (5000 / n);
      diapo.push( new Diapo(i - 1, o, x, y, z));
      var k = diapo.length - 1;
      for (var j = 0; j < 3; j++) {
        var x = Math.round(Math.random() * 4000) - 2000;
        var y = Math.round(Math.random() * 4000) - 2000;
        diapo.push( new Diapo(k, null, x, y, z + 100));
      }
    }
    run();
  }
  var run = function () {
    if (camera.tx) {
      if (!camera.s) camera.setTarget(camera.x, camera.tx);
      var m = camera.tween('x');
      if (!m) camera.tx = 0;
    } else if (camera.ty) {
      if (!camera.s) camera.setTarget(camera.y, camera.ty); 
      var m = camera.tween('y');
      if (!m) camera.ty = 0;
    } else if (camera.tz) {
      if (!camera.s) camera.setTarget(camera.z, camera.tz);
      var m = camera.tween('z');
      if (!m) {
        camera.tz = 0;
        interpolation(true);
        if(selected){
          if (selected.url) {
            selected.img.style.cursor = "pointer";
            selected.urlActive = true;
            selected.img.className = "href";
          } else {
            selected.img.style.cursor = "default";
            selected.canvas=selected.img;
          }
        }
      }
    }
    var i = 0, o;
    while( o = diapo[i++] ) o.anim();
    setTimeout(run, 32);
  }
  return {
    init : init
  };
  canvas.addClass("fog");
}();

export default {
  components: {

  },
  data() {
    return {
      radio: '1',
    };
  },
  created() {
    
  },
  mounted(){
    this.init()
  },
  computed: {},
  methods: {
    init(){
      let h=document.documentElement.clientHeight;
      let w=document.documentElement.clientWidth;
      let Left=[];
      let Top=[];
      for(let i=0;i<500;i++){
        Left[i]=this.random(-150,150);
        Top[i]=this.random(-150,150);
      }

      let main = document.getElementById("main");
      
      main.addEventListener('mousemove', e => {
        let x=e.pageX;
        let y=e.pageY;
        x=2*(x-w/2)/w;
        y=2*(y-h/2)/h;
        let fog = document.getElementsByClassName('fog')
        let olength=fog.length;
        for(let i=0;i<olength;i++){
          // fog[i].setAttribute('margin-left', x*-Left[i]);
          // fog[i].setAttribute('margin-top', y*Top[i]);
          fog[i].style.marginTop = y*Top[i]+'px'
          fog[i].style.marginLeft = x*-Left[i]+'px'
          // fog.eq(i).css({'marginLeft':x*-Left[i],'marginTop':y*Top[i]});
        }
      });
      // window.mousemove(function(e){
      //   let x=e.pageX;
      //   let y=e.pageY;
      //   x=2*(x-w/2)/w;
      //   y=2*(y-h/2)/h;
      //   let olength=$(".fog").length;
      //   for(i=0;i<olength;i++){
      //     $(".fog").eq(i).css({'marginLeft':x*-Left[i],'marginTop':y*Top[i]});
      //   }
      // })
      setTimeout(function() {
        m3D.init(
          [ 
            { src: require('./images/1.jpg') },
            { src: require('./images/2.jpg') },
            { src: require('./images/3.jpg') },
            { src: require('./images/4.jpg') },
            { src: require('./images/5.png') },
            { src: require('./images/6.jpg') },
            { src: require('./images/7.jpg') },
            { src: require('./images/8.jpg') },
            { src: require('./images/9.jpg') },
            { src: require('./images/10.jpg') },
            { src: require('./images/11.jpg') },
            { src: require('./images/12.jpg') },
            { src: require('./images/13.jpg') },
            { src: require('./images/14.jpg') },
          ]
        );
      }, 500);
    },
    random(min, max){
      return Math.floor(Math.random() * (max - min) + min)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

  #main {
    position: absolute;
    width:100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background: #eee;
    width: 100%;
    height: 100%;
    color: #fff;
    font-family: arial;
    font-size: 0.8em;
  }
  #screen {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    overflow: hidden;
  }
  #command {
    position:absolute;
    left: 1em;
    top: 1em;
    width: 130px;
    z-index: 30000;
    background:#000;
    border: #000 solid 1em;
    visibility: hidden;
  }
  #bar {
    position:relative;
    left: 1em;
    top: 1em;
    height: 200px;
  }
</style>
<style lang='scss'>
  #screen img, canvas { 
    position: absolute;
    left: -9999px;
    cursor: pointer;
        image-rendering: optimizeSpeed;
  }
  #screen .href {
    border: #FFF dotted 1px;
  }
  #screen .fog { 
    position: absolute;
  }
  #screen div.fog{
    background: #fff;
    opacity: 0.1;
    filter: alpha(opacity=10);
  }
  #screen #bar .button { 
    position: absolute;
    background: #222;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  #screen #bar .loaded { 
    background: #666;
  }
  #screen #bar .viewed { 
    background: #fff;
  }
  #screen #bar .selected { 
    background: #f00;
  }
  #screen .btn{
    padding:4px 21px;
    position:absolute;
    bottom:20px;
    left:20px;
    font-size:20px;
    font-weight:bold;
  }
</style>
