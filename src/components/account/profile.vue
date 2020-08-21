<template>
  <div class="user-profile w-100">
    <div class="profile-header">
      <p class="profile-title mb-0 font-weight-bold fa-15">Profile</p>
      <p class="fa-14">
        Manage your profile, password, billimg address and email prefences.
      </p>
    </div>
    <div class="contact-info-container">
      <p
        class="contact-header row mx-0 w-100 justify-content-between border-bottom pb-3"
      >
        <span class="font-weight-bold fa-14">CONTACT INFO</span>
        <span
          class="text-info font-weight-bold cursor-pointer fa-14"
          @click="editContact = !editContact"
          >Edit</span
        >
      </p>
      <div class="contact-context" v-if="!editContact">
        <p class="mb-0 font-weight-bold fa-14">Name</p>
        <p class="fa-14 text-black-50 font-weight-bold">
          {{ user.firstName + " " + user.lastName }}
        </p>
        <p class="mb-0 font-weight-bold fa-14">Email</p>
        <p class="fa-14 text-black-50 font-weight-bold">{{ user.email }}</p>
      </div>
      <div class="contact-form w-100" v-if="editContact">
        <form @submit.prevent class="w-40 update-contact-form">
          <div class="w-100 mb-2 user-firstName-area">
            <label class="fa-12 fa">First Name</label>
            <div class=" h-50px user-firstName">
              <input
                placeholder="First Name"
                type="text"
                v-model="saved.firstName"
                class="form-control  rounded-0  h-100"
              />
            </div>
          </div>
          <div class="w-100 mb-2 user-lastName-area">
            <label class="fa-12 fa">Last Name</label>
            <div class="h-50px user-lastName">
              <input
                placeholder="user Last Name"
                type="text"
                v-model="saved.lastName"
                class="form-control  rounded-0  h-100"
              />
            </div>
          </div>
          <div class="w-100 mb-2 contact-PhoneNumber-area">
            <label class="fa-12 fa"> Phone </label>
            <div class="h-50px  user-PhoneNumber">
              <vue-tel-input
                id="phoneNumber"
                class="form-control rounded-0  h-100"
                v-bind="phoneNumber"
                v-model="saved.phoneNumber"
              />
            </div>
          </div>
          <div class="row mx-0 button-collection justify-content-between my-4">
            <div
              class="fa-14 action-button text-center font-weight-bold fa text-white bg-button rounded-0 btn py-2 px-4"
            >
              UPDATE
            </div>
            <div
              class="fa-14 border action-button rounded-0 hover-button text-center text-primary font-weight-bold rounded-0 btn py-2 px-4"
              @click="editContact = !editContact"
            >
              CANCEL
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="password-container pt-2">
      <p
        class="password-header row mx-0 w-100 justify-content-between border-bottom pb-3"
      >
        <span class="font-weight-bold fa-14">PASSWORD</span>
        <span
          class="text-info font-weight-bold cursor-pointer fa-14"
          @click="editPassword = !editPassword"
          >Edit</span
        >
      </p>
      <p class="fa-14 pr-4">
        Must contain 8-18 characters, 1 lower, 1 upper and 1 special character.
        Can not be same as email address
      </p>
      <p class="font-weight-bold fa-15" v-if="!editPassword">.........</p>
      <div class="password-form w-100" v-if="editPassword">
        <form @submit.prevent class="w-40 update-password-form-container">
          <div class="w-100 mb-2 current-password-area">
            <label class="fa-12 fa">Current Password</label>
            <div class="h-50px current-password">
              <input
                placeholder="current Password"
                type="password"
                v-model="saved.current_password"
                class="form-control  rounded-0  h-100"
              />
            </div>
          </div>
          <div class="w-100 mb-2 new-password-area">
            <label class="fa-12 fa">New Password</label>
            <div class="h-50px new-password">
              <input
                placeholder="New Password"
                type="password"
                v-model="saved.password"
                class="form-control  rounded-0  h-100"
              />
            </div>
          </div>
          <div class="w-100 mb-2 confirm-password-area">
            <label class="fa-12 fa">Confirm Password</label>
            <div class="h-50px confirm-password">
              <input
                placeholder="Confirm Password"
                type="password"
                v-model="saved.confirm_password"
                class="form-control  rounded-0  h-100"
              />
            </div>
          </div>
          <div class="row mx-0 button-collection justify-content-between my-4">
            <div
              class="fa-14 action-button text-center font-weight-bold fa text-white bg-button rounded-0  btn py-2 px-4"
            >
              UPDATE
            </div>
            <div
              class="fa-14 border action-button hover-button rounded-0 text-center text-primary font-weight-bold rounded-0  btn py-2 px-4"
              @click="editPassword = !editPassword"
            >
              CANCEL
            </div>
          </div>
        </form>
      </div>
      <p
        class="billing-header row mx-0 w-100 justify-content-between border-bottom pb-3"
      >
        <span class="font-weight-bold fa-14">BILLING & PAYMENT</span>
      </p>
      <div
        class="add-billing p-3 bg-white border-2px rounded-0 my-4 text-primary font-weight-bold fa-14 btn"
      >
        ADD PAYMENT CARD
      </div>
      <p
        class="prefence-header row mx-0 w-100 justify-content-between border-bottom pb-3"
      >
        <span class="font-weight-bold fa-14">EMAIL PREFENCES</span>
      </p>
      <p class="fa-14 row mx-0 w-100 fa-14 font-weight-bold text-black-50 pb-4">
        <span>Edit your email preference</span
        ><span class="text-info cursor-pointer ml-2">here</span>
      </p>
    </div>
  </div>
</template>
<script>
import { VueTelInput } from "vue-tel-input";
export default {
  name: "profile",
  components: { VueTelInput },
  data() {
    return {
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
      user: {
        firstName: "Jhon",
        lastName: "Doe",
        email: "jhon@bouquet.org",
        phoneNumber: "078853367"
      },
      saved: {},
      editContact: false,
      editPassword: false
    };
  },
  mounted() {
    this.saved = { ...this.user };
  }
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .user-profile {
    .update-contact-form {
      width: 50% !important;
    }
    .update-password-form-container {
      width: 50% !important;
    }
  }
}
@media screen and (max-width: 425px) {
  .user-profile {
  }
}
@media screen and( max-width: 320px) {
  .user-profile {
  }
}
</style>
