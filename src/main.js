import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 高德地图
import './plugin/amap';

//全局组件
import './components/back/index.js';

//element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
