<template>
  <div class="menuBox">
    <div class="container">
      <div class="filter">
        <div class="filterLis">
          <div class="filterLeft">
            选择省份：
          </div>
          <div class="filterRight">
            <div class="filterRadio"></div>
          </div>
        </div>
        <el-radio v-for="(item,ind) in province" v-model="radio" :label="item.id" border size="mini">{{item.name}}</el-radio>
      </div>
    </div>
    <nav-foot></nav-foot>
  </div>
</template>

<script>
import store from 'u/store';
import navFoot from 'c/navFoot';

export default {
  components: {
    navFoot
  },
  data() {
    return {
      radio: '1',
      province:[]
    };
  },
  created() {
    this.init()
  },
  computed: {},
  methods: {
    init(){
      this.getCity()
    },
    async getCity(){
      let res = await this.$apiClient.base.city();
      console.log(res);
      this.province = res.body;
    },
    handleSelect(ind) {
      console.log(ind)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.filter {
  text-align: left;
  padding:30px 0;
  .el-radio {
    margin-right:10px;
  }
}
</style>
