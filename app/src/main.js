// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueAxios from "vue-axios"
import {Plugin1} from "../static/js/plugin1";
Vue.use(Plugin1);
Vue.config.productionTip = false
Vue.use(vueAxios,axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
