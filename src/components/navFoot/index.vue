<template>
  <div class="footBox">
    <div class="foot">
      <div class="container">
        <div class="footTop">
            
          <div class="footLogo">
            <img :src="$assets.logo">
          </div>
        
            
        </div>
        <div class="footBottom">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="footSec">
                
              </div>
            </el-col>
            <el-col :span="8">
              <div class="footSec">
                
              </div>
            </el-col>
            <el-col :span="8">
              <div class="footSec">
                
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="copyright">
    </div>
  </div>
</template>

<script>

export default {
  name: 'nav-foot',
  props: [],
  data() {
    return {
      
    };
  },
  created() {
    // this.getInfo()
  },
  mounted() {
    
  },
  methods: {
    link(url) {
      this.$router.push({name: url})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.foot {
  background: #010305;
  padding: 60px 0;
}
.footTop {
  display: flex;
  align-items: center;
  .footLogo {
    padding-right: 50px;
    img {
      height: 120px;
    }
  }
  .text {
    padding: 10px 50px;
    padding-right: 0;
    border-left: solid 1px #fff;
    text-align: left;
    color: #fff;
    font-size: 20px;
    line-height: 1.8;
  }
}
.footBottom {
  margin-top: 80px;
  .footSec {
    text-align: left;
    padding-left: 20px;
    p{
      text-align: left;
      font-size: 16px;
      line-height: 26px;
      color: #fff;
      margin: 5px 0 15px;
      a {
        color: #fff;
      }
    }
    .ewm {
      display: inline-block;
      text-align: center;
      h5 {
        font-size: 16px;
        color: #fff;
        margin: 0 0 10px;
      }
      img {
        width: 130px;
      }
    }
  }
}
.copyright {
  background: #fff;
  padding: 10px 0;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}
</style>
