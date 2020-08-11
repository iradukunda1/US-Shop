<template>
  <div class="cart-calculator">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-muted">Your cart</span>
      <span class="badge badge-primary badge-pill">{{
        cartProducts.length
      }}</span>
    </h4>
    <ul class="list-group mb-3">
      <li
        class="list-group-item d-flex justify-content-between lh-condensed"
        v-for="(product, id) in savedCartProduct"
        :key="id"
      >
        <div>
          <h6 class="my-0">{{ product.name }}</h6>
        </div>
        <span class="text-muted" style="width:120px">{{
          product.price * QtyProduct(product) + product.currency
        }}</span>
        <input
          type="text"
          class="bg-white border-0"
          style="max-width: 50px;"
          :value="QtyProduct(product)"
          aria-label="Amount (to the nearest dollar)"
          disabled
        />
      </li>
      <hr />
      <li class="list-group-item d-flex justify-content-between">
        <span>Total (INR)</span>
        <strong> {{ totalValue.toFixed(2) }}Frw</strong>
      </li>
    </ul>
  </div>
</template>
<script>
  /* eslint-disable */
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "cartCalculator",
  data() {
    return {
      totalValue: 0.0,
    };
  },
  computed: {
    ...mapState(["cartProducts"]),

    savedCartProduct() {
      return [
        ...new Set(this.cartProducts.map((v) => JSON.stringify(v))),
      ].map((v) => JSON.parse(v));
    },
  },
  methods: {
    calculateTotalPrice() {
      this.totalValue = 0;
      this.cartProducts.forEach((product) => {
        this.totalValue += parseFloat(product.price);
      });
      this.$store.state.resources.totalPrice = this.totalValue;
    },
    QtyProduct(product) {
      return this.cartProducts.filter((v) => v.id === product.id).length;
    },
  },
  created() {
    this.calculateTotalPrice();
    // .replace(/[^0-9\.]+/g, "")
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .cart-calculator {
  }
}
@media (min-width: 375px) and (max-width: 425px) {
  .cart-calculator {
  }
}
@media screen and(max-width: 375px) {
  .cart-calculator {
  }
}
@media screen and( max-width: 320px) {
  .cart-calculator {
  }
}
</style>
