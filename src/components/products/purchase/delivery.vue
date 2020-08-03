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
          <form @submit.prevent>
            <div class="w-100 mb-2">
              <label class="fa-12 fa">LOCATION TYPE</label>
              <div class="w-60 h-50px d-flex">
                <b-form-select
                  id="locationType"
                  v-model="delivery.residence"
                  class="form-control cursor-pointer rounded-0  h-100"
                  :options="locations"
                >
                </b-form-select
                ><i
                  class="fas fa-info-circle text-info pl-2 my-auto fa-12 cursor-pointer"
                ></i>
              </div>
            </div>
            <div class="w-100 mb-2 recipient-firstName-area">
              <label class="fa-12 fa">Recipient First Name</label>
              <div class="w-75 h-50px">
                <input
                  placeholder="Recipient First Name"
                  type="text"
                  v-model="delivery.firstName"
                  class="form-control  rounded-0  h-100"
                />
              </div>
            </div>
            <div class="w-100 mb-2 recipient-lastName-area">
              <label class="fa-12 fa">Recipient Last Name</label>
              <div class="w-75 h-50px">
                <input
                  placeholder="Recipient Last Name"
                  type="text"
                  v-model="delivery.lastName"
                  class="form-control  rounded-0  h-100"
                />
              </div>
            </div>
            <div class="w-100 mb-2 Company-businessName-area">
              <label class="fa-12 fa">Company / Business Name</label>
              <div class="w-75 h-50px">
                <input
                  placeholder="Company/Business Name"
                  type="text"
                  v-model="delivery.businessName"
                  class="form-control  rounded-0  h-100"
                />
              </div>
            </div>
            <div class="w-100 mb-2 street-address-area">
              <label class="fa-12 fa">Street Address</label>
              <div class="w-75 h-50px">
                <input
                  placeholder="Street Address"
                  type="text"
                  v-model="delivery.streetAddress"
                  class="form-control  rounded-0  h-100"
                />
              </div>
            </div>
            <div class="w-100 mb-2 apartment-area">
              <label class="fa-12 fa">Apartment or Suite</label>
              <div class="w-75 h-50px">
                <input
                  placeholder="Apartment or Suite (optional)"
                  type="text"
                  v-model="delivery.apartment"
                  class="form-control  rounded-0  h-100"
                />
              </div>
            </div>
            <div class="w-100 mb-2 city-area">
              <label class="fa-12 fa">City</label>
              <div class="w-75 h-50px">
                <input
                  placeholder="City"
                  type="text"
                  v-model="delivery.city"
                  class="form-control  rounded-0  h-100"
                />
              </div>
            </div>
            <div class="w-100 mb-5 state-zip-area">
              <div class="w-75 h-50px d-flex">
                <div class="state-area w-50 h-100">
                  <label class="fa-12 fa">SELECT STATE</label>
                  <b-form-select
                    v-model="delivery.state"
                    :options="states"
                    class="form-control cursor-pointer rounded-0  h-100"
                  ></b-form-select>
                </div>
                <div class="w-50 zip-number-area ml-2 h-100">
                  <label class="fa-12 fa">DELIVERY ZIP</label>
                  <input
                    placeholder="enter zip code"
                    type="text"
                    v-model="delivery.zip"
                    class="form-control  rounded-0  h-100"
                  />
                </div>
              </div>
            </div>
            <div class="w-100 mb-2 country-area">
              <label class="fa-12 fa" for="deliveryCountry">COUNTRY</label>
              <div class="w-75 h-50px">
                <b-form-select
                  id="deliveryCountry"
                  v-model="delivery.country"
                  class="form-control cursor-pointer rounded-0  h-100"
                  :options="countries"
                >
                </b-form-select>
              </div>
            </div>
            <div class="w-100 mb-2 delivery-PhoneNumber-area">
              <label class="fa-12 fa">Delivery Phone Number</label>
              <div class="w-60 h-50px d-flex">
                <vue-tel-input
                  id="phoneNumber"
                  class="form-control rounded-0  h-100"
                  v-bind="phoneNumber"
                  v-model="delivery.phoneNumber"
                /><i
                  class="fas fa-info-circle text-info pl-2 my-auto fa-12 cursor-pointer"
                ></i>
              </div>
            </div>
            <div class="w-100 mb-2">
              <div class="w-75 d-flex">
                <b-form-checkbox type="checkbox" />
                <p class="mb-0 pl-2 fa-13 text-black-50 pt-1">
                  Send annual reminder email
                </p>
              </div>
            </div>
            <div class="w-100 confirmation-area">
              <div class="w-100 border-bottom my-3">
                <p class="mb-0 font-weight-bold fa-14 pb-2">
                  ORDER CONFIRMATION
                </p>
              </div>
              <div class="w-75 h-50px email-area mb-5">
                <label class="fa-12 font-weight-bold"
                  >Where can we send your order confirmation email?</label
                >
                <input
                  placeholder="email"
                  type="email"
                  v-model="delivery.email"
                  class="form-control  rounded-0  h-100"
                />
              </div>
            </div>
            <div
              class="bg-button w-50 text-white fa-14  font-weight-bold rounded-0  btn py-2 px-4"
            >
              CONTINUE TO PAYMENT
            </div>
          </form>
        </div>
      </div>
      <div class="delivery-items w-25">
        <div class="row mx-0 w-100 ">
          <div
            class="sign-button btn rounded-0 bg-white text-dark fa-13 fa pt-2 px-3"
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
              v-model="delivery.coupon"
              class="form-control  rounded-0 w-75 h-100"
            />
            <div
              class="submitCoupon w-25 py-3 cursor-pointer rounded-0 bg-white fa-13 fa text-center"
            >
              APPLY
            </div>
          </div>
        </div>
        <div class="w-100 cart-list-items my-4">
          <list-view :borderBottom="false"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import listView from "../carts/list-view";
import { VueTelInput } from "vue-tel-input";
export default {
  name: "delivery",
  components: { VueTelInput, listView },
  data() {
    return {
      delivery: {
        residence: null,
        state: null,
        country: null
      },
      phoneNumber: {
        placeholder: "78xxxxxxx",
        required: true,
        inputId: "phoneNumber",
        validCharactersOnly: true,
        maxLen: 15,
        autocomplete: "off",
        enabledCountryCode: false,
        disabledFetchingCountry: false
      },
      locations: [
        { value: null, text: "Please select location", disabled: true },
        { value: "0", text: "Home/Residence" },
        { value: "1", text: "Business" },
        { value: "2", text: "Apartment" },
        { value: "3", text: "Funeral Home" },
        { value: "4", text: "Other" }
      ],
      states: [
        { value: null, text: "Please select state", disabled: true },
        { value: "Kigali", text: "Kigali" },
        { value: "New York", text: "New York" },
        { value: "Bujumbura", text: "Bujumbura" },
        { value: "Nairobi", text: "Nairobi" },
        { value: "Other", text: "Other" }
      ],
      countries: [
        { value: null, text: "Please select country", disabled: true },
        { value: "Rwanda", text: "Rwanda" },
        { value: "Burundi", text: "Burundi" },
        { value: "Canada", text: "Canada" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.delivery-component {
  .delivery-items {
    .sign-button {
      border: 2px solid black;
    }
  }
  .submitCoupon {
    color: blue;
    border: 2px solid rgb(0, 124, 173);
    &:hover {
      color: white;
      background-color: rgb(0, 124, 173) !important;
    }
  }
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
