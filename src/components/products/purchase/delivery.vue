<template>
  <div class="delivery-component w-100 h-auto position-relative">
    <div class="d-flex pt-3">
      <p
        class="back-to-cart-btn d-none cursor-pointer px-2 py-1  fa-12 border"
        @click="$router.push({ name: 'Cart' })"
      >
        CART
      </p>
      <p class="help row mx-0  w-100 justify-content-end pr-4">
        <span class="chat-link-container"
          ><i class="fas fa-comment-dots pr-3"></i>
          <a href="javascript:;;" class="fa-12">Click to Chat</a></span
        ><span class="fa-12 pl-3 pt-1 contact-link-container"
          ><a href="javascript:;;">Need Help? +250788514704</a>
        </span>
      </p>
    </div>
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
@media screen and (max-width: 740px) {
  .delivery-component {
    .back-to-cart-btn {
      flex: 1;
      margin-left: 2rem;
      display: flex !important;
    }
  }
}
@media screen and (max-width: 705px) {
  .delivery-component {
    .delivery-content-container {
      .delivery-info-container {
        width: 85% !important;
        .header {
          font-size: 1.5rem !important;
        }
      }
      .delivery-items {
        margin-top: 3rem !important;
        width: 85% !important;
      }
    }
  }
}
@media screen and(max-width: 425px) {
  .delivery-component {
    .delivery-content-container {
      padding: 0 2rem !important;
      .delivery-info-container {
        width: 95% !important;
        .header {
          font-size: 1.2rem !important;
        }
      }
      .delivery-items {
        width: 95% !important;
      }
    }
    .chat-link-container {
      font-size: 70%;
      padding-top: 0.25rem;
      i {
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
</style>