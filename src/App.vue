<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive">
            <!-- 这里是会被缓存的视图组件，比如列表A页面 -->
        </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
        <!-- 这里是不被缓存的视图组件，比如详情B页面-->
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
* {
  box-sizing: border-box;
  line-height: 1;
}
*:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
body, html {
  padding:0;
  margin:0;
}
a {
  text-decoration:none;
  outline:none;
  cursor: pointer;
}
input {
  border:1px solid #ccc;
  outline:none;
}
textarea {
  border:1px solid #ccc;
  outline:none;
}
h1,h2,h3,h4,h5,h6,p {
  font-weight:300;
  color:#333;
  line-height: 1.6;
  margin:0;
}
ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
[v-cloak] {
  display: none;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 96%;
  max-width: 1280px;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
