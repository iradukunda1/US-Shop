import Vue from "vue";
import axios from "axios";
import router from "@/router";
import VueAxios from "vue-axios";
import store from "@/store";
import NProgress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";

Vue.use(VueAxios, axios);

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.headers.common["Authorization"] = "Bearer " + store.getters.auth.token;

axios.interceptors.request.use(
  config => {
    NProgress.start();
    return config;
  },
  error => {
    NProgress.done();
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    NProgress.done();
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // store.dispatch("logout");
          break;
        case 404:
          router.push("*");
          break;
      }
    }

    NProgress.done();
    return Promise.reject(error);
  }
);

Vue.prototype.$axios = axios;
export default axios;
