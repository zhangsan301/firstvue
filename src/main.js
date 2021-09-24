import Vue from 'vue'
import App from './App.vue'

import router from '@/views'

//全局导入异步相关组件
import axios from "axios"
import qstring from "querystring"

// 导入并使用vue element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//定义Vue中的全局变量。prototype代表,在每个Vue组件中都可以使用的变量。
//全局变量在所有组件中使用的方式是: this.$变量名，如: this.$axios,this.$qstring
Vue.prototype.$axios = axios;
Vue.prototype.$qstring = qstring;

Vue.config.productionTip = false

new Vue({
  router, //引入路由表
  render: h => h(App),
}).$mount('#app')
