import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from "vue-axios"
import ElementUI from 'element-ui';
// import './assets/element/style/theme/index.css';
// sass 编辑器使用这个？
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './store'

// 拦截器
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 8) {
    sessionStorage.clear();
    window.location.href = '/#/';
    return null;
  }else if(res.success == false){
    sessionStorage.clear();
    window.location.href = '/#/';
    return null;
  }else{
    return res;
  }
  // if (res.msg != null) {
  //   this.showAlert(res.msg);
  // }
});
// 读取缓存判断是否有登录记录
// router.beforeEach(function(to,from,next){
//   if(store.state.userInfo||to.path==='/account'){
//     next();
//   }else{
//     next({path:'/account'})
//   }
// })
Vue.config.productionTip = false
Vue.use(axios,VueAxios)
Vue.use(ElementUI)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
