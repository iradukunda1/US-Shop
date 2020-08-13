<template>
  <div class="delivery-address-form w-100">
    <form @submit.prevent>
      <div class="w-100 mb-2" v-if="this.$route.params.params == 'delivery'">
        <label class="fa-12 fa">LOCATION TYPE</label>
        <div class="w-60 h-50px d-flex location-area">
          <b-form-select
            id="locationType"
            v-model="delivery.residence"
            class="form-control cursor-pointer location-input rounded-0  h-100"
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
        <div class="w-75 h-50px recipient-firstName">
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
        <div class="w-75 h-50px recipient-lastName">
          <input
            placeholder="Recipient Last Name"
            type="text"
            v-model="delivery.lastName"
            class="form-control  rounded-0  h-100"
          />
        </div>
      </div>
      <div
        class="w-100 mb-2 Company-businessName-area"
        v-if="this.$route.params.params == 'delivery'"
      >
        <label class="fa-12 fa">Company / Business Name</label>
        <div class="w-75 h-50px Company-businessName">
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
        <div class="w-75 h-50px street-address">
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
        <div class="w-75 h-50px apartment">
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
        <div class="w-75 h-50px city-input">
          <input
            placeholder="City"
            type="text"
            v-model="delivery.city"
            class="form-control  rounded-0  h-100"
          />
        </div>
      </div>
      <div class="w-100 mb-5 state-zip-area">
        <div class="w-75 h-50px d-flex state-zip-inputs">
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
        <div class="w-75 h-50px country-input">
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
        <div class="w-60 h-50px d-flex delivery-PhoneNumber">
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
      <div class="w-100 mb-2 my-4">
        <div class="w-75 subscription-area d-flex">
          <b-form-checkbox type="checkbox" />
          <p
            class="mb-0 pl-2 fa-13 text-black-50 pt-1"
            v-if="this.$route.params.params === 'delivery'"
          >
            Send annual reminder email
          </p>
          <p
            class="mb-0 pl-2 fa-13"
            v-if="this.$route.params.params === 'payment'"
          >
            Yes! I'm interested in receiving exclusive email offers and
            promotions from ProFlowers
          </p>
        </div>
      </div>
      <div
        class="w-100 confirmation-area"
        v-if="this.$route.params.params === 'delivery'"
      >
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
        v-if="this.$route.params.params == 'delivery'"
        class="bg-button w-50 text-white fa-14  continue-payment-button font-weight-bold rounded-0  btn py-2 px-4"
        @click="contPayments()"
      >
        CONTINUE TO PAYMENT
      </div>
      <div
        v-if="this.$route.params.params === 'payment'"
        class="bg-button w-50 text-white fa-14 review-button font-weight-bold rounded-0  btn py-2 px-4"
        @click="reviewOrder()"
      >
        REVIEW ORDER
      </div>
    </form>
  </div>
</template>
<script>
/* eslint-disable */
import { VueTelInput } from "vue-tel-input";

export default {
  name: "delivery-address-form",
  components: { VueTelInput },
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
  },
  methods: {
    contPayments() {
      this.$store.dispatch("setResources", [
        "trigger",
        { triggerDeliveryAddress: true }
      ]);
    },
    reviewOrder() {
      this.$router.push({ name: "Purchase", params: { params: "review" } });
    }
  }
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 425px) {
  .delivery-address-form {
    .continue-payment-button {
      width: 80% !important;
      margin: 2rem 0 !important;
    }
    .review-button {
      width: 80% !important;
      margin: 2rem 0 !important;
    }
  }
}
@media screen and(max-width: 375px) {
  .delivery-address-form {
    .location-area,
    .delivery-PhoneNumber {
      width: 90% !important;
    }
    .recipient-firstName,
    .recipient-lastName,
    .Company-businessName,
    .street-address,
    .apartment,
    .city-input,
    .state-zip-inputs,
    .country-input,
    .subscription-area,
    .email-area {
      width: 95% !important;
    }
  }
}
@media screen and( max-width: 320px) {
  .delivery-address-form {
    .location-area,
    .delivery-PhoneNumber {
      width: 95% !important;
    }
    .recipient-firstName,
    .recipient-lastName,
    .Company-businessName,
    .street-address,
    .apartment,
    .city-input,
    .state-zip-inputs,
    .country-input,
    .subscription-area,
    .email-area {
      width: 100% !important;
    }
    .continue-payment-button {
      width: 90% !important;
      font-size: 70% !important;
    }
    .review-button {
      width: 90% !important;
      font-size: 70% !important;
    }
  }
}
</style>
