<template>
  <div class="login bg-white px-5 w-100 ">
    <div class="row">
      <div class="col">
        <createAccount v-if="isSignUp" @closeSignUp="toggleForm"></createAccount>
        <form class="form-signin" @submit.prevent="login" v-if="!isSignUp">
          <img
            class="mb-4"
            src="../assets/login-img.png"
            alt
            width="72"
            height="72"
          />
          <h3 class="mb-3 font-weight-normal">Please sign in</h3>
          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            class="form-control mb-3"
            v-model="user.email"
            placeholder="Email address"
            required
            autocomplete="email"
          />
          <label for="password">Password</label>
          <div class="row m-0 h-100">
            <input
              id="password"
              v-model="user.password"
              class="form-control"
              style="width:85%"
              placeholder="Password"
              required
              autocomplete="current-password"
              :type="passwordVisible ? 'text' : 'password'"
            />
            <div
              style="width:15%; cursor:pointer"
              class="form-control bg-light h-100 rounded-0"
              @click="togglePasswordVisibility"
            >
              <i
                :class="{
                  'fa fa-eye-slash': !passwordVisible,
                  'fa fa-eye': passwordVisible,
                }"
              ></i>
            </div>
          </div>
          <p class="text-muted mb-0">
            <a href="javascript:;;">Forget password ?</a>
          </p>
          <div class="py-2 d-block" v-if="error">
            <p class="mb-0 text-danger">
              <i class="fa fa-angry" v-if="error.message"></i>
              {{ error.message }}
            </p>
          </div>
          <button class="btn text-white bg-button btn-block" type="submit">
            <i class="fa fa-spinner fa-spin mr-1" v-if="showLoader"></i>
            <span v-else>Log In</span>
          </button>
        </form>
        <p class="mt-3 text-muted">
          <span v-if="isSignUp" class="px-4">
            Already a member?
            <a href="javascript:;;" @click="toggleForm">Sign in</a>
          </span>
          <span v-if="!isSignUp" class="px-4">
            New to US-Bouquets?
            <a href="javascript:;;" @click="toggleForm">Create an Account</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
import CreateAccount from "@/components/CreateAccount";
import { encryptUser } from "../components/shared/service/authService";
import {
  successToaster,
  errorToaster,
} from "../components/shared/service/ErrorHandler.js";

import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "login",
  components: { CreateAccount },
  data() {
    return {
      user: {},
      passwordVisible: false,
      showLoader: false,
      isSignUp: false,
      error: {},
      offline: {
        message: "You Seem to be offline",
      },
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    toggleForm() {
      this.isSignUp = !this.isSignUp;
    },

    login() {
      // this.showLoader = true;
      // this.$store
      //   .dispatch("login", this.user)
      //   .then((res) => {
      //     this.loader(false);
      //     this.showLoader = false;
      //     this.user = {};
      //     successToaster("Login success", "You logged in successfully");
      //   })
      //   .catch((err) => {
      //     this.loader(false);
      //     this.showLoader = false;
      //     if (!err.success) this.error = err;
      //     else {
      //       this.error = this.offline;
      //       errorToaster("Login Error", `${this.offline.message}`);
      //     }
      //   });
    },
  },
};
</script>
<style>
.login {
  position: relative;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
