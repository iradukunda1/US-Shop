<template>
  <div>
    <form id="productCU" @submit.prevent="createAddress">
      <h4 class="text-center">Create Address</h4>
      <div
        class="alert alert-danger"
        role="alert"
        v-for="(index, error) in errorMessage"
        :key="index"
      >
        {{ error }}
      </div>
      <div class="form-group">
        <label for="firstName"
          >First-Name<span class="text-danger">*</span></label
        >
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="address.firstName"
          required
        />
      </div>
      <div class="form-group">
        <label for="lastName"
          >Last Name<span class="text-danger">*</span></label
        >
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="address.lastName"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail<span class="text-danger">*</span></label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="address.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="country">Country<span class="text-danger">*</span></label>
        <input
          type="text"
          class="form-control"
          id="country"
          v-model="address.country"
          required
        />
      </div>
      <div class="form-group">
        <label for="city">City</label>
        <input
          type="text"
          class="form-control"
          id="city"
          v-model="address.city"
          required
        />
      </div>
      <div class="form-group">
        <label for="district">District<span class="text-danger">*</span></label>
        <input
          type="text"
          class="form-control"
          id="district"
          v-model="address.district"
          required
        />
      </div>
      <div class="form-group">
        <label for="zip-code"
          >Postal / Zip Code<span class="text-danger">*</span></label
        >
        <input
          type="text"
          class="form-control"
          id="zip-code"
          v-model="address.zipCode"
          required
        />
      </div>
      <div class="form-group">
        <label for="address"
          >Address / Location<span class="text-danger">*</span></label
        >
        <input
          type="text"
          class="form-control"
          id="address"
          name="address"
          v-model="address.addresses"
          required
        />
      </div>
      <div class="form-group">
        <label for="phone"
          >Phone Number<span class="text-danger">*</span></label
        >
        <input
          type="tel"
          class="form-control"
          id="phone"
          name="phone"
          v-model="address.phoneNumber"
          required
        />
      </div>
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your data with anyone else.</small
      >
      <br />
    </form>
    <button type="submit" class="btn btn-primary mx-auto">
      <i class="fa fa-spinner fa-spin mr-1" v-if="showLoader"></i>Save Address
    </button>
  </div>
</template>
<script>
  /* eslint-disable */
import {
  errorToaster,
  successToaster
} from "../../shared/service/ErrorHandler";

export default {
  data() {
    return {
      address: {
        phoneNumber: ""
      },
      errorMessage: [],
      showLoader: false
    };
  },
  methods: {
    createAddress() {
      if (this.address.firstName.length < 5) {
        this.errorMessage.push(
          "FirstName should contains more than 5 character"
        );
      }
      if (this.ValidateEmail(this.address.email) === false) {
        this.errorMessage.push("Please provide a valid Email address");
      }
      if (this.address.phoneNumber.length < 10) {
        this.errorMessage.push("Please provide valid phone number");
      }
      if (this.errorMessage.length === 0) {
          this.loader(true,{
              context:"creating address...",
              area:"app"
          })
        this.$store.dispatch("createAddress", this.address)
          .then(response => {
              this.loader(false)
            successToaster(
              "address created Successfully",
              "User address created Successfully"
            );
          })
          .catch(error => {
              this.loader(false)
              this.errorMessage.push(error)
            errorToaster(
              "address created Failed",
              "Please try again after sometime"
            );
          });
      }
    },
    ValidateEmail(mail) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
      return false;
    }
  }
};
</script>
