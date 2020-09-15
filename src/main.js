import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '../public/reset.css'
import '../src/promiss'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

Vue.config.productionTip = false;


router.beforeEach( (to,from,next) => {
  document.title="UNI-ADMIN"
  if(to.hasOwnProperty("meta")){
    document.title=to.meta.title
  }
  next()
})

console.log(process.env.VUE_APP_BASE_API)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
