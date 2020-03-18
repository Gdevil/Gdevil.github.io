// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/iconfont/iconfont.css';
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/dist/css/swiper.css';
import App from './App';
import apiClient from '@/service/user';
import assets from 'u/assets';
import useAuthorize from 'u/sessionAuth';
import VueClipboard from 'vue-clipboard2';
import observeSession from 'u/observe';
import store from 'u/store';

Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(VueAwesomeSwiper);
Vue.prototype.$apiClient = apiClient;
Vue.prototype.$assets = assets;
const [user] = useAuthorize();
Vue.prototype.$user = user;
Vue.prototype.$store = store;
Vue.use(VueClipboard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
 //  created(){
 //  	//刷新后如果为登陆状态则获取数据
	// !!user.token && user.getUserInfo()

	// //定义全局方法，在调用window.setSessionStorage的时候，发布者发布信息
	// window.setSessionStorage = (key, value) => {
	// 	observeSession.emmit('watchSesStore', { key, value })
	// }
	// // 监听存储在sessionStorage登陆状态变化，如果为登陆状态则获取数据，监听者监听信息
	// observeSession.on('watchSesStore', e => {
	// 	sessionStorage.setItem(e.key, e.value)
	// 	e.key === 'login' && e.value === 'login'&& user.getUserInfo()
	// })
 //  }
});
