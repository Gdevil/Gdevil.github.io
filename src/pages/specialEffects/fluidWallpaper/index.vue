<template>
  <div class="fullPage">
    <a class="absoluteBackHome" href="/"><el-button  round icon="el-icon-s-home"></el-button></a>
    <canvas id="canv"></canvas>
  </div>
</template>

<script>
import './dat.gui.min.js';
import wallPaper from './script.js';


export default {
  components: {

  },
  data() {
    return {
      
    };
  },
  // created() {
  //   this.init()
  // },
  mounted() {
    this.init()
  },
  computed: {},
  methods: {
    init(){
      // import('./script_old.js');
      wallPaper.init('canv')
    }
  }
};
</script>

<style lang='scss' scoped>
.fullPage {
  width: 100%;
  height: 100vh;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
