<template>
  <div class="purchase-items-calculator w-100">
    <div class="row mx-0 w-100 ">
      <div
        class="sign-button btn rounded-0 bg-white text-dark fa-13 fa pt-2 px-3"
        @click="sign()"
      >
        SIGN IN
      </div>
      <span class="fa-13 text-justify mb-0 pl-3 w-75">
        Get access to saved addresses and payment info.
      </span>
    </div>
    <div class="p-2 border rounded-0 bg-grey order-price mt-4">
      <ul class="list-unstyled mb-0 p-4">
        <li class="d-flex justify-content-between ">
          <p class="text-black-50 mb-0 fa-12">Order Subtotal</p>
          <span class="font-weight-light fa-13">$55.00</span>
        </li>
        <li class="d-flex justify-content-between">
          <p class="text-black-50 mb-0 fa-12">Estimated Tax</p>
          <span class="fa-13">$6.00</span>
        </li>
        <li class="d-flex justify-content-between">
          <p class="fa-14 mb-0">Estimated Subtotal</p>
          <p class="font-weight-bold mb-0 fa-14">$61.24</p>
        </li>
      </ul>
    </div>
    <div class="w-100 mb-4 apply-coupon-area">
      <label class="fa-12 font-weight-bold">Have a Coupon Code?</label>
      <div class="w-100 d-flex h-50px">
        <input
          placeholder="enter your coupon"
          type="text"
          v-model="coupon"
          class="form-control  rounded-0 w-75 h-100"
        />
        <div
          class="submitCoupon w-25 py-3 cursor-pointer rounded-0 bg-white fa-13 fa text-center"
        >
          APPLY
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "purchase-items-calculator",
  data() {
    return {
      coupon: ""
    };
  },
  methods: {
    sign() {
      if (this.$store.getters.auth.token) {
        this.$store.dispatch("setResources", [
          "user",
          this.$store.getters.auth.user
        ]);
      } else {
        this.$store.dispatch("setView", "Login");
        this.$store.dispatch("setAccessories", ["details"]);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.purchase-items-calculator {
  .sign-button {
    border: 2px solid black;
  }
  .submitCoupon {
    color: blue;
    border: 2px solid rgb(0, 124, 173);
    &:hover {
      color: white;
      background-color: rgb(0, 124, 173) !important;
    }
  }
}
</style>
