<template>
  <div class="payment w-100 h-auto position-relative">
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
        <p class="header font-weight-bold h3 mb-0">Enter Payment Info</p>
        <p class="fa-13 font-italic text-black-50 mb-5">
          All fields required unless noted otherwise.
        </p>
        <div class="w-75 payment-form pt-2">
          <div class="w-100 border-bottom my-3">
            <p class="mb-0 font-weight-bold fa-14 pb-2">
              SELECT PAYMENT METHOD
            </p>
          </div>
          <div class="w-100 mb-2 select-payment-method-area">
            <div class="w-75 d-flex">
              <b-form-radio></b-form-radio>
              <p class="pr-2">Credit Card</p>
            </div>
          </div>
          <div class="w-100 mb-2 card-number-area">
            <label class="fa-12 font-weight-bold">CARD NUMBER</label>
            <div class="w-75 h-50px d-flex border rounded-0">
              <input
                placeholder="Card Number"
                type="text"
                class="form-control border-0 w-90 rounded-0 h-100"
              />
              <i class="fa fa-lock fa-12 py-3 ml-auto mr-2 text-muted"></i>
            </div>
          </div>
          <div class="w-100 mb-5 card-info-area pb-3">
            <div class="w-75 h-50px d-flex">
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
export default {
  name: "payment",
  components: { DeliveryAddressForm, ListView, PurchaseItemsCalculator }
};
</script>

<style scoped></style>
