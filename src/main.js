import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import axios from "@/config/axios.config";
import mixin from "./config/mixins";
import bootstrapVue from "bootstrap-vue";
import "./registerServiceWorker";
import "../node_modules/toastr/build/toastr.css";
import "../node_modules/nprogress/nprogress.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueAwesomeSwiper);
Vue.use(bootstrapVue);
Vue.use(mixin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
