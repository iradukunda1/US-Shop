<template>
  <div class="payment w-100 h-auto position-relative">
    <div class="d-flex pt-3">
        <span
            class="back-to-delivery-btn d-none cursor-pointer pt-1"
            @click="
            $router.push({ name: 'Purchase', params: { params: 'delivery' } })
          "
        >
          <i class="fas fa-arrow-left"></i>
        </span>
      <p class="help d-flex mx-0 d-flex w-100 justify-content-end pr-4">
        <span class="chat-link-container"
          ><i class="fas fa-comment-dots pr-3"></i>
          <a href="javascript:;;" class="fa-12">Click to Chat</a></span
        ><span class="fa-12 pl-3 pt-1 contact-link-container"
          ><a href="javascript:;;">Need Help? +250788514704</a>
        </span>
      </p>
    </div>
    <div
      class="row justify-content-center payment-content-container mx-0 w-100 my-4 pb-5"
    >
      <div class="payment-info-container w-50">
        <p class="header font-weight-bold h3 mb-0">Enter Payment Info</p>
        <p class="fa-13 font-italic text-black-50 mb-5 sub-header">
          All fields required unless noted otherwise.
        </p>
        <div class="w-75 payment-form pt-2">
          <div class="mr-5 border-bottom my-3">
            <p class="mb-0 font-weight-bold fa-14 pb-2">
              SELECT PAYMENT METHOD
            </p>
          </div>
          <div class="w-100 mb-2 select-payment-method-area">
            <div class="w-75 select-payment-method">
              <div class="credit-card-payment form-check mb-2">
                <b-form-radio
                  type="radio"
                  class="form-check-input"
                  id="credit-card"
                  v-model="selected"
                  value="card"
                  name="paymentMethods"
                  >Credit Card</b-form-radio
                >
                <b-form-radio
                  type="radio"
                  class="form-check-input"
                  id="mobile-card"
                  v-model="selected"
                  value="mobile"
                  name="paymentMethods"
                  >Mobile Money</b-form-radio
                >
              </div>
            </div>
          </div>
          <div class="w-100 mb-2 mobile-method" v-if="selected == 'mobile'">
            <label class="fa-12 font-weight-bold">MOBILE MONEY NUMBER</label>
            <div class="w-75 h-50px d-flex mobile-card border rounded-0">
              <vue-tel-input
                id="phoneNumber"
                class="form-control rounded-0  h-100"
                v-bind="phoneNumber"
              />
            </div>
          </div>
          <div class="card-methods" v-if="selected == 'card'">
            <div class="w-100 mb-2 card-number-area">
              <label class="fa-12 font-weight-bold">CARD NUMBER</label>
              <div class="w-75 h-50px d-flex card-number border rounded-0">
                <input
                  placeholder="Card Number"
                  type="text"
                  class="form-control border-0 w-90 rounded-0 h-100"
                />
                <i class="fa fa-lock fa-12 py-3 ml-auto mr-2 text-muted"></i>
              </div>
            </div>
            <div class="w-100 mb-5 card-info-area pb-3">
              <div class="w-75 h-50px card-info d-flex">
                <div class="state-area w-50 h-100">
                  <label class="fa-12 fa">EXPIRED DATE</label>
                  <input
                    placeholder="MMYY"
                    type="text"
                    class="form-control  rounded-0  h-100"
                  />
                </div>
                <div class="w-50 zip-number-area ml-2 h-100">
                  <label class="fa-12 fa">CREDIT CODE</label>
                  <input
                    placeholder="CVC"
                    type="text"
                    class="form-control  rounded-0  h-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-100 border-bottom mb-2">
            <p class="mb-0 font-weight-bold fa-14 pb-2">
              ENTER BILLING ADDRESS
            </p>
          </div>
          <delivery-address-form />
        </div>
      </div>
      <div class="payment-items w-25">
        <purchase-items-calculator />
        <div class="w-100 cart-list-items my-4">
          <list-view :border-bottom="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseItemsCalculator from "@/components/products/purchase/purchase-items-calculator";
import ListView from "@/components/products/carts/list-view";
import DeliveryAddressForm from "@/components/products/address/delivery-address-form";
import { VueTelInput } from "vue-tel-input";
export default {
  components: {
    DeliveryAddressForm,
    ListView,
    PurchaseItemsCalculator,
    VueTelInput
  },
  name: "payment",
  data() {
    return {
      phoneNumber: {
        placeholder: "78xxxxxxx",
        required: true,
        inputId: "phoneNumber",
        defaultCountry: "RW",
        disabledFetchingCountry: true,
        validCharactersOnly: true,
        maxLen: 15,
        autocomplete: "off",
        enabledCountryCode: false
      },
      mobileMoney: false,
      selected: "card"
    };
  }
};
</script>

<style scoped lang="scss">
.payment {
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
  .payment {
    .payment-content-container {
      padding: 0 3rem 3rem 3rem !important;
      .payment-info-container {
        width: 60% !important;
        .payment-form {
          width: 100% !important;
        }
      }
      .payment-items {
        width: 40% !important;
      }
    }
  }
}
@media screen and (max-width: 740px) {
  .payment {
    .back-to-delivery-btn{
      flex: 1;
      margin-left: 2rem;
      display: flex !important;
    }
  }
}
@media screen and (max-width: 705px) {
  .payment {
    .payment-content-container {
      .payment-info-container {
        width: 85% !important;
        .header {
          font-size: 1.5rem !important;
        }
      }
      .payment-items {
        margin-top: 3rem !important;
        width: 85% !important;
      }
    }
  }
}
@media screen and(max-width: 425px) {
  .payment {
    .payment-content-container {
      padding: 0 2rem !important;
      .payment-info-container {
        width: 95% !important;
        .header {
          font-size: 1.2rem !important;
        }
      }
      .payment-items {
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
    .card-number,
    .card-info {
      width: 95% !important;
    }
  }
}
</style>
