// import { encryptUser } from "../components/shared/service/authService";
// import jwt_decoder from "jwt-decode";
import router from "../router/index";
import axios from "axios";

export default {
  /*------------------cart handler----------------*/

  SET_CART_PRODUCTS: (state, products) => {
    state.cartProducts = [];
    state.cartProducts = products;
  },
  ADD_CART_LOCAL: (state, product) => {
    state.cartProducts.push(product);
    localStorage.setItem("iki-cart", JSON.stringify(state.cartProducts));
  },
  ADD_ORDER_LOCAL: (state, product) => {
    state.orderProducts.push(product);
    localStorage.setItem("iki-order", JSON.stringify(state.orderProducts));
  },
  SET_ORDER_PRODUCTS: (state, products) => {
    state.orderProducts = [];
    state.orderProducts = products;
  },

  /*------------------User Authentication handler----------------*/

  ADD_LOGGED_USER: (state, data) => {
    state.auth.user = data.user;
    state.auth.token = data.token;
    // state.auth.user = jwt_decoder(data.token);
  },

  logout(state) {
    localStorage.clear();
    delete axios.defaults.headers.common["Authorization"];
    state.auth.token = null;
    state.auth.user = {};
    if (state.auth.user.roles && state.auth.user.roles.length) {
      if (state.auth.user.roles.includes("Admin")) {
        router.push({ name: "Home" });
      } else if (state.auth.user.roles.includes("User")) {
        router.push({ name: "Home" });
      } else {
        router.push("/404/error-page");
      }
    } else {
      router.go(-1);
    }
  },
  resetState(state) {
    Object.assign(state, "");
  },

  /*------------------resources handler----------------*/

  setResources(state, data) {
    if (data[1] && data[0] == "users") {
      state.resources.users = data[1];
    }
    if (data[1] && data[0] == "addresses") {
      state.resources.addresses = data[1];
    } else if (data[1] && data[0] == "products") {
      state.resources.products = data[1];
    } else if (data[1] && data[0] == "comments") {
      state.resources.comments = data[1];
    } else if (data[1] && data[0] == "orders") {
      state.resources.orders = data[1];
    } else if (data[1] && data[0] == "categories") {
      state.resources.categories = data[1];
    } else if (data[1] && data[0] == "tags") {
      state.resources.tags = data[1];
    } else if (data[1] && data[0] == "trigger") {
      state.resources.trigger = { ...state.resources.trigger, ...data[1] };
    } else {
      if (data[1]) state.resources[data[0]] = data[1];
    }
  },

  PRODUCT_EDIT: state => {
    state.pages.productEdit = true;
  },
  view(state, data) {
    state.accessories.view = null;
    setTimeout(() => {
      state.accessories.view = data;
    });
  },
  setAccessories(state, data) {
    state.accessories[data[0]] = data[1];
  }
};
