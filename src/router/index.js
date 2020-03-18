import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/index';
import FluidWallpaper from '../pages/specialEffects/fluidWallpaper'
import ThreeDPhotos from '../pages/specialEffects/3D_photos'
import ImageSwitchers from '../pages/specialEffects/imageSwitchers'

Vue.use(Router);

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {
        title: '首页',
        keepAlive: true, //此组件需要被缓存
        scrollTopApp: 0
      },
      component: Index
    },
    {
      path: '/fluidWallpaper',
      name: 'FluidWallpaper',
      meta: {
        title: '流体墙纸'
      },
      component: FluidWallpaper
    },
    {
      path: '/3D_photos',
      name: 'ThreeDPhotos',
      meta: {
        title: '3D 照片墙'
      },
      component: ThreeDPhotos
    },
    {
      path: '/imageSwitchers',
      name: 'ImageSwitchers',
      meta: {
        title: '100种图片切换效果'
      },
      component: ImageSwitchers
    }
  ]
});
router.beforeEach((to, from, next) => {

  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  next();

});
router.afterEach((to, from) => {
  // console.log("to.meta",to.meta.scrollTopApp)
  if(to.meta.scrollTopApp){
    setTimeout(function(){
      document.getElementById("app").scrollTop = to.meta.scrollTopApp
    },1)
  }else {
    document.getElementById("app").scrollTop = 0;
  }
  
})



const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//解决报错 Navigating to current location ("/index") is not allowed

export default router