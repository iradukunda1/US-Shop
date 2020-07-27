<template>
  <main class="main web-nav-layout border-bottom">
    <div class="navbar-header d-flex position-relative mb-0 px-3">
      <div class="header-log d-block mt-3">
        <div class="mb-0">
          <span class="c-default mr-2 h3">S.U</span>
          <span class="text-info h4 mt-1">BOUQUETS</span>
        </div>
        <span class="small ml-5">an FTD company</span>
      </div>
      <div class="header-content d-flex ml-auto mt-3">
        <div class="nav-item" @click="$router.push('/')">
          <p class="p-3 cursor-pointer mb-0">HOME</p>
        </div>
        <div class="nav-item ">
          <p class="p-3 cursor-pointer mb-0">FLOWER</p>
        </div>
        <div class="nav-item ">
          <p class="p-3 cursor-pointer mb-0">BIRTH-DAY</p>
        </div>
        <div class="nav-item ">
          <p class="p-3 cursor-pointer mb-0">ABOUT</p>
        </div>
        <div class="nav-item">
          <p class="p-3 cursor-pointer mb-0">CONTACT</p>
        </div>
      </div>
      <div class="header-options ml-auto mt-3">
        <ul class="d-flex mb-0 pt-1">
          <li class="web-navbar-search d-block mr-0">
            <i class="fas fa-search fa-15 ml-3"></i>&nbsp;
            <p class="mb-0 fa-12">SEARCH</p>
          </li>
          <li class="web-navbar-cart d-block mr-0 px-4" id="popover-container">
            <div class="mb-0" id="cart-popover">
              <i class="fas fa-cart-plus mt-1 fa-15"></i>
              <span class="badge badge-primary position-absolute">{{
                cartProducts.length
              }}</span
              >&nbsp;
              <p class="mb-0 fa-12">CART</p>
            </div>
          </li>
          <li
            class="web-navbar-account d-block mr-0"
            @click="view('Login')"
          >
            <i class="fas fa-user-circle fa-15 ml-3"></i>&nbsp;
            <p class="mb-0 fa-12">ACCOUNT</p>
          </li>
          <b-popover
            target="cart-popover"
            triggers="hover"
            placement="bottom-right"
            container="popover-container"
            ref="popover"
          >
            <template v-slot:title class="px-5">
              <div class="text-dark pl-3">Your Cart List Product</div>
            </template>
            <div>
              <div class="justify-content-center align-items-center">
                <h3 class="mb-0 mx-5">Oops!</h3>
                <h4 class="mb-0">No Products Found</h4>
                <p class="mx-5">Your cart is empty</p>
              </div>
            </div>
          </b-popover>
        </ul>
      </div>
    </div>
  </main>
</template>
<script>
/* eslint-disable */
import { mapState, mapGetters, mapMutations } from "vuex";
import {
  getLoggedInUser,
  isLoggedIn
} from "../components/shared/service/authService";

export default {
  data() {
    return {
      totalValue: 0.0,
      logo: "/assets/images/logo.jpg",
      search: null
    };
  },
  computed: {
    ...mapState(["cartProducts", "loggedUser"]),

    ...mapGetters(["auth"]),

    user() {
      return this.auth;
    },

    cartProducts() {
      return this.$store.getters.cartProducts;
    },
    products() {
      return [
        ...new Set(this.cartProducts.map(v => JSON.stringify(v)))
      ].map(v => JSON.parse(v));
    }
  },
  watch: {
    cartProducts() {
      this.totalValue = 0;
      this.cartProducts.forEach(product => {
        this.totalValue += parseFloat(product.price);
      });
      this.$store.state.resources.totalPrice = this.totalValue;
    }
  },
  mounted() {},
  methods: {
    view(data) {
      if (this.user.token) {
        this.$router.push("/Me");
        this.$store.dispatch("setResources", ["user", this.user]);
      } else {
        this.$store.dispatch("setView", data);
        this.$store.dispatch("setAccessories", ["details"]);
      }
    },
    /* Initially loading the cart products from local storage */
    QtyProduct(product) {
      return this.cartProducts.filter(v => v.id === product.id).length;
    },
    ...mapMutations(["SET_CART_PRODUCTS", "ADD_LOGGED_USER"]),

    getLocalProducts() {
      const products = JSON.parse(localStorage.getItem("iki-cart"));
      if (products) {
        this.SET_CART_PRODUCTS(products);
      }
    },

    loc_logout() {
      this.$store.dispatch("logout");
      // Promise.all([
      //   localStorage.removeItem("_auth" && "iki-cart"),
      //   this.$store.dispatch("logout"),
      // ]).then(() => {
      //   this.$router.replace({ name: "Home" });
      // });
    }
  },
  created() {
    this.getLocalProducts();
    //
    // const loggedUser = getLoggedInUser();
    //
    // this.ADD_LOGGED_USER(loggedUser);
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/webNav";
</style>
