import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from "vue-axios"
import ElementUI from 'element-ui';
// import './assets/element/style/theme/index.css';
// sass 编辑器使用这个？
import 'element-ui/lib/theme-chalk/index.css'

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
Vue.config.productionTip = false
Vue.use(axios,VueAxios)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
