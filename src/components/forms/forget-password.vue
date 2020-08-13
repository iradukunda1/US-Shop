<template>
  <div class="forgot-password-form px-5 pt-5 w-100 ">
    <div class="row">
      <div class="col">
        <form class="form-signin" @submit.prevent>
          <p class="fa-14 font-weight-bold">Forgot Password?</p>
          <p class="mb-0 fa-14 font-weight-normal text-justify">
            Enter your email address and we will send you an email with
            instructions to reset your password. If you do not receive the email
            within a few minutes, check your junk folder.
          </p>
          <input
            type="email"
            class="form-control my-4 rounded-0"
            placeholder="Email"
            required
            autocomplete="email"
          />
          <div
            class="reset-button p-3 bg-button text-white rounded-0 w-100 font-weight-bold fa-14 btn"
          >
            RESET PASSWORD
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "forget-password",
  data() {
    return {
      email: "",
    };
  },
};
</script>
<style lang="scss" scoped></style>
