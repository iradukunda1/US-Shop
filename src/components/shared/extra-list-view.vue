<template>
  <div class="extra-list-view position-fixed">
    <div
      class="header-content-container border-left shadow bg-white position-absolute"
    >
      <div
        class="header position-relative w-100 border-bottom row justify-content-between px-4 py-3"
      >
        <span class="font-weight-bold">{{ title.toUpperCase() }}</span>
        <span class="fa fa-times back-btn" @click="close"></span>
      </div>
      <div class="different-content ">
        <login v-if="title.toLowerCase() == 'login'" />
        <checkout v-if="title.toLowerCase() == 'checkout'" />
        <forget-password v-if="title.toLowerCase() == 'forgot password'" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import checkout from "./checkout-form";
import login from "../../views/login";
import forgetPassword from "@/components/forms/forget-password";
export default {
  props: ["title"],
  components: { login, checkout, forgetPassword },
  name: "extra-list-view",
  methods: {
    close() {
      this.$store.dispatch("setView");
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.extra-list-view {
  width: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.02);
  font-family: "Roboto", sans-serif;
  .header-content-container {
    right: 0;
    top: 0;
    bottom: 0;
    width: 35%;
    .header {
      background: #f3f1f1;
      margin: auto;
      height: 50px;
      .back-btn {
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
.different-content {
  height: calc(100vh - 60px);
  overflow-y: overlay;
}
.different-content::-webkit-scrollbar {
  width: 9px;
  background-color: transparent;
}
.different-content::-webkit-scrollbar-thumb {
  background-color: rgba(87, 81, 231, 0.74);
  border-radius: 35px;
}
.different-content::-webkit-scrollbar-track {
  background-color: transparent;
}
@media screen and (max-width: 768px) {
  .extra-list-view {
    .header-content-container {
      width: 50%;
    }
  }
}
@media (min-width: 375px) and (max-width: 425px) {
  .extra-list-view {
    .header-content-container {
      width: 80%;
    }
  }
}
@media screen and(max-width: 375px) {
  .extra-list-view {
    .header-content-container {
      width: 90%;
    }
  }
}
@media screen and( max-width: 320px) {
  .extra-list-view {
    .header-content-container {
      width: 100%;
    }
  }
}
</style>
