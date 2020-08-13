<template>
  <div class="address-book-list w-100">
    <div class="address-header">
      <p class="address-title mb-0 font-weight-bold fa-15">Address Book</p>
      <p class="fa-14  border-bottom pb-3">
        Add delivery addresses below for easy checkout.
      </p>
    </div>
    <div class="addresses-content w-100">
      <p class="font-weight-bold fa-14">Saved Address</p>
      <div
        class="addresses-lists"
        v-for="(address, index) in addresses"
        :key="index"
      >
        <div
          class="address-list border rounded-0 row w-100 mx-0 p-3 mb-3"
          v-if="!updateAddress"
        >
          <ul class="list-unstyled">
            <p class="font-weight-bold fa-14">Delivery Address</p>
            <li class="fa-14">
              {{ address.firstName + " " + address.lastName }}
            </li>
            <li class="fa-14">{{ address.streetAddress }}</li>
            <li class="fa-14">{{ address.apartment }}</li>
            <li class="fa-14">
              {{ address.city + ", " + address.state + ", " + address.zipCode }}
            </li>
          </ul>
          <div class="phone-number-area ml-5 pl-5">
            <p class="font-weight-bold fa-14 mb-0">Phone</p>
            <p class="fa-14">{{ address.phoneNumber }}</p>
          </div>
          <p
            class="font-weight-bold fa-14 mb-0 action-area mt-auto ml-auto text-info"
            :class="{'pointer-events':addNewAddress}"
          >
            <span class="cursor-pointer">Remove</span
            ><span class="px-2 cursor-pointer" @click="editAddress(address)"
              >Edit</span
            >
          </p>
        </div>
      </div>
      <div class="new-addres-form" v-if="addNewAddress || updateAddress">
        <form @submit.prevent class="w-40 create-address-form">
          <div class="w-100 mb-2 recipient-firstName-area">
            <label class="fa-12 fa">First Name</label>
            <div class="h-50px recipient-firstName">
              <input
                placeholder="First Name"
                type="text"
                v-model="delivery.firstName"
                class="form-control  rounded-0  h-100"
              />
            </div>
          </div>
          <div class="w-100 mb-2 recipient-lastName-area">
            <label class="fa-12 fa">Last Name</label>
            <div class="h-50px recipient-lastName">
              <input
                placeholder="Last Name"
                type="text"
                v-model="delivery.lastName"
                class="form-control  rounded-0  h-100"
              />
            </div>
          </div>
          <div class="w-100 mb-2 street-address-area">
            <label class="fa-12 fa">Street Address</label>
            <div class="h-50px street-address">
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
            <div class="h-50px apartment">
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
            <div class="h-50px city-input">
              <input
                placeholder="City"
                type="text"
                v-model="delivery.city"
                class="form-control  rounded-0  h-100"
              />
            </div>
          </div>
          <div class="w-100 mb-5 state-zip-area">
            <div class="h-50px d-flex state-zip-inputs">
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
                  v-model="delivery.zipCode"
                  class="form-control  rounded-0  h-100"
                />
              </div>
            </div>
          </div>
          <div class="w-100 mb-2 country-area">
            <label class="fa-12 fa" for="deliveryCountry">COUNTRY</label>
            <div class="w-80 h-50px country-input">
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
            <label class="fa-12 fa">Phone Number</label>
            <div class="h-50px d-flex delivery-PhoneNumber">
              <vue-tel-input
                id="phoneNumber"
                class="form-control rounded-0  h-100"
                v-bind="phoneNumber"
                v-model="delivery.phoneNumber"
              />
            </div>
          </div>
          <div class="row mx-0 button-collection justify-content-between my-5">
            <div
              class="fa-14 action-button text-center font-weight-bold text-white bg-button rounded-0 btn py-2"
            >
              SAVE ADDRESS
            </div>
            <div
              class="fa-14 border action-button rounded-0 hover-button text-center text-primary font-weight-bold rounded-0 btn py-2 px-4"
              @click="
                (addNewAddress = false),
                  (delivery = {}),
                  (updateAddress = false)
              "
            >
              CANCEL
            </div>
          </div>
        </form>
      </div>
      <div
        v-if="!addNewAddress"
        :class="{'pointer-events':updateAddress}"
        class="add-new-address p-3 bg-white border-2px hover-button rounded-0 my-4 text-primary font-weight-bold fa-14 btn"
        @click="addNewAddress = !addNewAddress"
      >
        ADD NEW ADDRESS
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { VueTelInput } from "vue-tel-input";
import addresses from "@/components/products/address/lists";
export default {
  name: "addresses-book",
  components: { addresses, VueTelInput },
  data() {
    return {
      addNewAddress: false,
      updateAddress: false,
      delivery: {
        state: null,
        country: null,
      },
      addresses: [
        {
          country: "Rwanda",
          city: "Kigali",
          streetAddress: "KK-145",
          email: "user@gmail.com",
          phoneNumber: "+923335586757",
          apartment: "Lando",
          firstName: "Mugisha",
          lastName: "Emmy",
          zipCode: "67894",
          state: "New York",
        },
        {
          country: "Burundi",
          city: "Bujumbura",
          streetAddress: "KK-145",
          email: "user@gmail.com",
          phoneNumber: "(250) 706-3334",
          apartment: "Remera-Corna",
          firstName: "Jhon",
          lastName: "Doe",
          zipCode: "12345",
          state: "Schenectady",
        },
      ],
      phoneNumber: {
        placeholder: "78xxxxxxx",
        required: true,
        inputId: "phoneNumber",
        validCharactersOnly: true,
        maxLen: 15,
        autocomplete: "off",
        enabledCountryCode: false,
        disabledFetchingCountry: false,
      },
      states: [
        { value: null, text: "Please select state", disabled: true },
        { value: "Kigali", text: "Kigali" },
        { value: "New York", text: "New York" },
        { value: "Bujumbura", text: "Bujumbura" },
        { value: "Nairobi", text: "Nairobi" },
        { value: "Other", text: "Other" },
        { value: "Schenectady", text: "Schenectady" }
      ],
      countries: [
        { value: null, text: "Please select country", disabled: true },
        { value: "Rwanda", text: "Rwanda" },
        { value: "Burundi", text: "Burundi" },
        { value: "Canada", text: "Canada" },
      ],
    };
  },
  methods: {
    editAddress(address) {
      this.updateAddress = !this.updateAddress;
      this.delivery ={ ...address };
    },
  },
};
</script>
