<template>
  <div class="fullPage">
    <canvas></canvas>
  </div>
</template>

<script>
import './dat.gui.min.js';


export default {
  components: {

  },
  data() {
    return {
      
    };
  },
  created() {
    this.init()
  },
  computed: {},
  methods: {
    init(){
      import('./script.js');
    }
  }
};
</script>

<style lang='scss' scoped>
.fullPage {
  width: 100%;
  height: 100%;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
