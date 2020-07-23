<template>
  <div class="remove-cart-product">
    <b-modal
      v-model="show"
      id="remove-cart-product-alert"
      no-close-on-backdrop
      hide-footer
      @close="close"
    >
      <template v-slot:modal-header>
        <header class="d-flex justify-content-between align-items-center w-100">
          <h3 class="text-capitalize ">Remove Cart Product</h3>
          <i class="fa fa-times" style=" cursor:pointer" @click="close()" />
        </header>
      </template>
      <div class="wrapper">
        <b-row>
          <b-col>
            <p class="p-3">
              Are you sure, you do really want to remove
              <b>{{ product.name }}</b> from your product cart list?
            </p>
          </b-col>
        </b-row>
        <b-row align-h="between">
          <b-col cols="4"
            ><b-button variant="danger" @click="close" class="footer-btn btn"
              >Cancel</b-button
            ></b-col
          >
          <b-col cols="4">
            <b-button
              block
              variant="primary"
              @click="remove"
              :disabled="loading"
              style="float: right"
              class="footer-btn"
              ><b-spinner v-if="loading" small></b-spinner>
              <span v-else>Remove</span></b-button
            ></b-col
          >
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
  /* eslint-disable */
import { mapMutations } from "vuex";

export default {
  name: "remove-cart-product",
  props: {
    product: Object,
  },
  data() {
    return {
      show: true,
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["SET_CART_PRODUCTS"]),
    close() {
      this.$emit("close");
      this.product = "";
    },
    remove() {
      this.loading = true;
      const products = JSON.parse(localStorage.getItem("iki-cart"));
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === this.product.id) {
          products.splice(i, 1);
        }
      }
      this.SET_CART_PRODUCTS(products);
      localStorage.setItem("iki-cart", JSON.stringify(products));
      this.loading = false;
      this.$emit("remove-success", this.product);
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to,
.slide-fade-leave-active {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
