<template>
  <div class= "menu">
    <div style= "background: #fff;">
      <div class= "container">
        <div class= "menuHead">
          <div class= "logo">
            <img :src= "$assets.logo">
          </div>
          <div class= "search">
            <el-row class= "row">
              <el-col :span= "18">
                <el-input size= "small" v-model= "search" class= "input"></el-input>
              </el-col>
              <el-col :span= "6">
                <el-button size= "small" type= "primary" icon= "el-icon-search" class= "btn" @click= "searchFun()">搜索</el-button>
              </el-col>
            </el-row>
          </div>
          <div class= "pubBtn">
            <el-button @click="centerDialogVisible = true;" size= "small" type= "success" icon= "el-icon-circle-plus-outline" class= "btn">免费发布信息</el-button>
          </div>
        </div>
      </div>
    </div>
    <div style= "background: #01004C;">
      <div class= "container">
        <el-menu
          :default-active= "$route.path"
          class= "el-menu"
          mode= "horizontal"
          @select= "handleSelect"
          background-color= "#01004C"
          text-color= "#b2b1e2"
          active-text-color= "#fff"
          :router= "router"
        >
          <el-menu-item index= "/">首页</el-menu-item>
          <el-menu-item index= "/saleList">在售二手</el-menu-item>
          <el-menu-item index= "/buylist">求购信息</el-menu-item>
          <el-menu-item index= "/vip">会员特权</el-menu-item>
          <el-menu-item index= "/account">二手管理</el-menu-item>
        </el-menu>
      </div>
    </div>
    <el-dialog
      title="请选择"
      :visible.sync="centerDialogVisible"
      :modal-append-to-body= 'false'
      width="380px"
      center>
      <div class="select">
        <ul>
          <li @click="link('PubSale')">
            <img :src="$assets.sale">
            <h5>我要卖挖机</h5>
            <p>点此进入发布</p>
          </li>
          <li @click="link('PubBuy')">
            <img :src="$assets.buying">
            <h5>我要求购</h5>
            <p>点此进入发布</p>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import observeSession from 'u/observe';

export default {
  name: 'nav-menu',
  props: [],
  data() {
    return {
      router: true,
      search: this.$store.globalData.get('searchKeywords'),
      centerDialogVisible: false
    };
  },
  created() {},
  methods: {
    handleSelect(ind) {},
    searchFun() {
      const keywords = this.search;
      this.$store.globalData.set('searchKeywords',keywords)
      if(this.$router.history.current.name == 'SaleList') {
        observeSession.emmit('searchObserve', { keywords })
      }else {
        this.$router.push({name: 'SaleList', params: {search: true}})
      }
    },
    link(url) {
      this.$router.push({name: url})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.menu {
  position: fixed;
  top:30px;
  left:0;
  width: 100%;
  z-index: 98;
}
.menuHead {
  display: flex;
  align-items: center;
  padding: 19px 0;
  .logo {
    img {
      height: 25px;
    }
  }
  .search {
    flex:1;
    padding:0 30px;
    .row {
      max-width: 460px;
      margin:0 auto;
    }
    
  }
  .pubBtn {

  }
  .btn {
    width: 100%;
  }
}
.select {
  ul {
    &:after {
      content: '';
      display: table;
      clear: both;
    };
    li {
      width: 50%;
      float: left;
      text-align: center;
      cursor: pointer;
      img {
        width: 60px;
      }
      h5 {
        margin: 10px 0 0;
        font-size: 18px;
        color: #333;
      }
      p {
        font-size: 14px;
        color: #666;
      }
    }
  }
}
</style>
