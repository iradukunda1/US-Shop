<template>
  <div class="create-account">
    <form class="form-signup" @submit.prevent="createAccount">
      <img
        class="mb-4"
        src="../assets/create-account.svg"
        alt
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Create an account</h1>
      <div class="row">
        <div class="col-md-6 mb-3">
          <input
            type="text"
            class="form-control"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            v-model="user.first_name"
            required
          />
          <div class="invalid-feedback  d-block" v-if="error.firstName">
            {{ error.firstName }}
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <input
            type="text"
            class="form-control"
            v-model="user.last_name"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
          />
          <div class="invalid-feedback d-block" v-if="error.lastName">
            {{ error.lastName }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md mb-3">
          <input
            type="email"
            name="email"
            class="form-control"
            v-model="user.email"
            id="emailId"
            placeholder="Email address"
            required
          />
          <div class="invalid-feedback d-block" v-if="error.email">
            {{
              error.email.includes("Email is required")
                ? "Invalid Email Address"
                : error.email
            }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md mb-3">
          <input
            type="text"
            class="form-control"
            v-model="user.username"
            id="username"
            name="userName"
            placeholder="user name"
            required
          />
          <div class="invalid-feedback d-block" v-if="error.username">
            {{ error.username }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md mb-3">
          <input
            class="form-control"
            id="password"
            placeholder="password"
            v-model="user.password"
            required
            name="password"
            type="password"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md mb-3">
          <input
            name="password_confirmation"
            class="form-control"
            id="conf-password"
            type="password"
            placeholder="Confirm password"
            v-model="user.password_confirmation"
            required
          />
          <div
            class="invalid-feedback d-block"
            v-if="error.password_confirmation"
          >
            {{
              error.password_confirmation.includes("matching password")
                ? "Confrimation password must be identical with your password"
                : "Please fill the confrimation box too"
            }}
          </div>
        </div>
      </div>
      <p>
        By creating an account, you agree to our
        <a href="#">Privacy Policy</a> and <a href="#">Terms of Use.</a>
      </p>
      <button class="btn btn-lg bg-button btn-block text-white" type="submit">
        <i class="fa fa-spinner fa-spin mr-1" v-if="showLoader"></i>
        <span v-else>Sign Up</span>
      </button>
    </form>
  </div>
</template>
<script>
/* eslint-disable */
import { successToaster } from "./shared/service/ErrorHandler.js";

export default {
  name: "CreateAccount",
  data() {
    return {
      showLoader: false,
      user: {
        password: "",
        email: null
      },
      error: {}
    };
  },
  methods: {
    createAccount() {
      this.$emit("closeSignUp");
      // this.showLoader = true;
      // this.loader(true, {
      //   context: "Creating your account...",
      //   area: "app"
      // });
      // this.$store
      //   .dispatch("createUser", this.user)
      //   .then(res => {
      //     this.user = {};
      //     this.loader(false);
      //     this.showLoader = false;
      //     successToaster("User Registration", `${res.message}`);
      //   })
      // .catch(err => {
      //   console.log(err);
      //   this.loader(false);
      //   this.showLoader = false;
      //   this.error = err.errors;
      //   // errorToaster(
      //   //   "Registration Failed",
      //   //   err.message || "You Seem to be offline"
      //   // );
      // });
    },
    ValidateEmail(email) {
      if (
        /^(([^<>()[]\.,;:\s@\"]+(.[^<>()[]\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ) {
        this.error.email = "";
      } else {
        this.error.email = "Invalid Email Address";
      }
    }
  },
  wacth: {
    user: {
      email() {
        if (this.user.email) this.ValidateEmail(this.user.email);
      }
    }
  }
};
</script>

<style>
.form-signup {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: auto;
}
</style>
