<template>
  <div class="delivery-component w-100 h-auto position-relative">
    <p class="help row mx-0 d-flex w-100 justify-content-end pr-4 pt-3">
      <span
        ><i class="fas fa-comment-dots pr-3"></i>
        <a href="javascript:;;" class="fa-12">Click to Chat</a></span
      ><span class="fa-12 pl-3 pt-1"
        ><a href="javascript:;;">Need Help? +250780633340</a>
      </span>
    </p>
    <div class="row justify-content-center mx-0 w-100 my-4 pb-5">
      <div class="delivery-info-container w-50">
        <p class="header font-weight-bold h3">Enter Delivery Information</p>
        <div class="w-75 delivery-form pt-2">
          <delivery-address-form />
        </div>
      </div>
      <div class="delivery-items w-25">
        <purchase-items-calculator />
        <div class="w-100 cart-list-items my-4">
          <list-view :borderBottom="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import listView from "../carts/list-view";
import PurchaseItemsCalculator from "@/components/products/purchase/purchase-items-calculator";
import DeliveryAddressForm from "@/components/products/address/delivery-address-form";
export default {
  name: "delivery",
  components: { DeliveryAddressForm, PurchaseItemsCalculator, listView },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.delivery-component {
  .cart-list-items {
    height: calc(100vh - 270px);
    overflow-y: overlay;
  }
  .cart-list-items::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  .cart-list-items::-webkit-scrollbar-thumb {
    background-color: rgb(0, 124, 173);
    border-radius: 35px;
  }
  .cart-list-items::-webkit-scrollbar-track {
    background-color: transparent;
  }
}
</style>
