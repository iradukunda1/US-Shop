<template>
  <div class="delivery-component w-100 h-auto position-relative">
    <p class="help row mx-0  w-100 justify-content-end pr-4 pt-3">
      <span class="chat-link-container"
        ><i class="fas fa-comment-dots pr-3"></i>
        <a href="javascript:;;" class="fa-12">Click to Chat</a></span
      ><span class="fa-12 pl-3 pt-1 contact-link-container"
        ><a href="javascript:;;">Need Help? +250788514704</a>
      </span>
    </p>
    <div
      class="row justify-content-center mx-0 w-100 my-4 pb-5 delivery-content-container"
    >
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
@media screen and (max-width: 768px) {
  .delivery-component {
    .delivery-content-container {
      padding: 0 3rem 3rem 3rem !important;
      .delivery-info-container {
        width: 60% !important;
        .delivery-form {
          width: 100% !important;
        }
      }
      .delivery-items {
        width: 40% !important;
      }
    }
  }
}
@media (min-width: 375px) and (max-width: 425px) {
  .delivery-component {
    .delivery-content-container {
      .delivery-info-container {
        width: 100% !important;
        .header {
          font-size: 1.6rem !important;
        }
      }
      .delivery-items {
        width: 95% !important;
      }
    }
  }
}
@media screen and(max-width: 375px) {
  .delivery-component {
    .delivery-content-container .delivery-info-container .header {
      font-size: 1.3rem !important;
    }
    .chat-link-container {
      font-size: 70%;
      padding-top: 0.25rem;
      i{
        padding-right: 0.25rem !important;
      }
      a {
        font-size: 90% !important;
      }
    }
    .contact-link-container {
      padding-left: 0.5rem !important;
      a {
        font-size: 84% !important;
      }
    }
  }
}
@media screen and( max-width: 320px) {
  .delivery-component {
    .delivery-content-container {
      .delivery-info-container {
        width: 100% !important;
        .header {
          font-size: 0.9rem !important;
        }
      }
      .delivery-items {
        width: 95% !important;
      }
    }
  }
}
</style>
