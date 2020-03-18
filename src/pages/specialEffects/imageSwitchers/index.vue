<template>
  <div class="main">
    <a class="absoluteBackHome" href="/"><el-button  round icon="el-icon-s-home"></el-button></a>
    
    <div id="wrap">
      <div id="imgs">
          <div><img src="./images/1.jpg" /></div>
          <div><img src="./images/2.jpg" /></div>
          <div><img src="./images/3.jpg" /></div>
          <div><img src="./images/4.jpg" /></div>
          <div><img src="./images/5.jpg" /></div>
          <div><img src="./images/6.jpg" /></div>
          <div><img src="./images/7.jpg" /></div>
          <div><img src="./images/8.jpg" /></div>
          <div><img src="./images/9.png" /></div>
      </div>
      <div id="navs">
        <a href="javascript:;" class="active"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
      </div>
      <el-select class="selectBox" v-model="value" placeholder="请选择" @change='selectFun'>
        <el-option-group
          v-for="group in options"
          :key="group.label"
          :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.value"
            :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
    </div>
  </div>
</template>

<script>
import './pageSwitch.js';

export default {
  components: {
  },
  data() {
    return {
      value: '',
      options: [{
          options: [
            {value: 'fade'}
          ]
        }, {
            label: "滚动效果",
            options: [
                {value: 'scroll'},
                {value: 'scroll3d'},
                {value: 'scrollCover'},
                {value: 'scrollCoverReverse'},
                {value: 'scrollCoverIn'},
                {value: 'scrollCoverOut'},
                {value: 'scrollX'},
                {value: 'scroll3dX'},
                {value: 'scrollCoverX'},
                {value: 'scrollCoverReverseX'},
                {value: 'scrollCoverInX'},
                {value: 'scrollCoverOutX'},
                {value: 'scrollY'},
                {value: 'scroll3dY'},
                {value: 'scrollCoverY'},
                {value: 'scrollCoverReverseY'},
                {value: 'scrollCoverInY'},
                {value: 'scrollCoverOutY'},
            ]
        },
        {
            label: "滑动效果",
            options: [
                {value: 'slide'},
                {value: 'slideCover'},
                {value: 'slideCoverReverse'},
                {value: 'slideCoverIn'},
                {value: 'slideCoverOut'},
                {value: 'slideX'},
                {value: 'slideCoverX'},
                {value: 'slideCoverReverseX'},
                {value: 'slideCoverInX'},
                {value: 'slideCoverOutX'},
                {value: 'slideY'},
                {value: 'slideCoverY'},
                {value: 'slideCoverReverseY'},
                {value: 'slideCoverInY'},
                {value: 'slideCoverOutY'},
            ]
        },
        {
            label: "裁切效果",
            options: [
                {value: 'slice'},
                {value: 'sliceX'},
                {value: 'sliceY'},
            ]
        },
        {
            label: "缩放效果",
            options: [
                {value: 'zoom'},
                {value: 'zoomCover'},
                {value: 'zoomCoverReverse'},
                {value: 'zoomCoverIn'},
                {value: 'zoomCoverOut'},
                {value: 'zoomX'},
                {value: 'zoomCoverX'},
                {value: 'zoomCoverReverseX'},
                {value: 'zoomCoverInX'},
                {value: 'zoomCoverOutX'},
                {value: 'zoomY'},
                {value: 'zoomCoverY'},
                {value: 'zoomCoverReverseY'},
                {value: 'zoomCoverInY'},
                {value: 'zoomCoverOutY'},
            ]
        },
        {
            label: "扭曲效果",
            options: [
                {value: 'skew'},
                {value: 'skewCover'},
                {value: 'skewCoverReverse'},
                {value: 'skewCoverIn'},
                {value: 'skewCoverOut'},
                {value: 'skewCoverX'},
                {value: 'skewCoverReverseX'},
                {value: 'skewCoverInX'},
                {value: 'skewCoverOutX'},
                {value: 'skewY'},
                {value: 'skewCoverY'},
                {value: 'skewCoverReverseY'},
                {value: 'skewCoverInY'},
                {value: 'skewCoverOutY'},
            ]
        },
        {
            label: "翻转效果",
            options: [
                {value: 'flip'},
                {value: 'flip3d'},
                {value: 'flipClock'},
                {value: 'flipPaper'},
                {value: 'flipCover'},
                {value: 'flipCoverReverse'},
                {value: 'flipCoverIn'},
                {value: 'flipCoverOut'},
                {value: 'flipX'},
                {value: 'flip3dX'},
                {value: 'flipClockX'},
                {value: 'flipPaperX'},
                {value: 'flipCoverX'},
                {value: 'flipCoverReverseX'},
                {value: 'flipCoverInX'},
                {value: 'flipCoverOutX'},
                {value: 'flipY'},
                {value: 'flip3dY'},
                {value: 'flipClockY'},
                {value: 'flipPaperY'},
                {value: 'flipCoverY'},
                {value: 'flipCoverReverseY'},
                {value: 'flipCoverInY'},
                {value: 'flipCoverOutY'},
            ]
        },
        {
            label: "爆炸效果",
            options: [
                {value: 'bomb'},
                {value: 'bombCover'},
                {value: 'bombCoverReverse'},
                {value: 'bombCoverIn'},
                {value: 'bombCoverOut'},
                {value: 'bombX'},
                {value: 'bombCoverX'},
                {value: 'bombCoverReverseX'},
                {value: 'bombCoverInX'},
                {value: 'bombCoverOutX'},
                {value: 'bombY'},
                {value: 'bombCoverY'},
                {value: 'bombCoverReverseY'},
                {value: 'bombCoverInY'},
                {value: 'bombCoverOutY'},
            ]
        }]
    };
  },
  created() {

  },
  mounted() {
    this.init()
  },
  computed: {},
  methods: {
    init(){
      // let reg=location.search.match(/ts=([^&]*)/)
      let reg = this.$route.query.ts
      let ts=reg||'flipClock'
      // let ts= this.value||'flipClock'
      this.value = ts

      let a=new pageSwitch('imgs',{
        duration:1000,
        start:0,
        direction:1,
        loop:true,
        ease:/flip(?!Paper)/.test(ts)?'bounce':'ease',
        transition:ts,
        mouse:true,
        mousewheel:true,
        arrowkey:true
      })
      let navs=document.getElementById('navs').getElementsByTagName('a');

      a.on('before',function(m,n){
        navs[m].className='';
        navs[n].className='active';
      });

      if(/^(?:scroll3d|flip)/.test(ts)){
        document.getElementById('imgs').className='visible';
      }

      for(let i=0;i<navs.length;i++){
        !function(i){
          navs[i].onclick=function(){
            a.slide(i);
          }
        }(i);
      }
    },
    selectFun(e) {
      // location.href='?ts='+e;
      let path = this.$router.history.current.path
      this.$router.push({ path, query: {ts:e} })
      // this.init()

      window.location.reload()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main{background:#379EB6;min-height: 100vh;text-align: center;position: relative;}
#wrap{min-height:100%;_height:100%;min-width:320px;overflow:hidden;padding: 50px 0;}
#imgs{position:relative;width:320px;height:568px;margin:0 auto;overflow:hidden;border-radius:15px;z-index:1;background:url(images/loading.gif) no-repeat center center;}
#imgs.visible{overflow:visible;}
#imgs div{overflow:hidden;}
#imgs img{width:100%;height:100%;display:block;}
#navs{z-index:10;position:absolute;left:50%;top:225px;margin-left:180px;width:4px;}
#navs a{overflow:hidden;display:block;width:2px;height:20px;border:1px solid #fff;margin:0 0 4px;transition:background 600ms ease;}
#navs .active{background:#fff;}
.selectBox {margin-top: 10px;}
@media (max-width:540px) {
#navs{left:auto;right:10px;top:50%;margin-top:-117px;}
#imgs{position:absolute;top:0;width:100%;height:100%;margin:0;border-radius:0;}
#imgs img{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);transform:translate(-50%,-50%);min-height:100%;height:auto;}
}

</style>
