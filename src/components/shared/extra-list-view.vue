<template>
  <div class="extra-list-view position-fixed">
    <div
      class="header-content-container border-left shadow bg-white position-absolute"
    >
      <div
        class="header position-relative w-100 border-bottom d-flex justify-content-between align-items-center px-3 py-2"
      >
        <div>
          <i class="mr-2"></i>
          <span class="font-weight-bold">{{ title }}</span>
        </div>
        <span class="fa fa-times back-btn" @click="close"></span>
      </div>
      <div class="different-content">
        <login v-if="title == 'Login'" />
        <checkout v-if="title == 'checkout'" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import checkout from "./checkout-form";
import login from "../../views/login";
export default {
  props: ["title"],
  components: { login, checkout },
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
  z-index: 20;
  background: rgba(255, 107, 96, 0.04);
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
  height: calc(100vh - 40px);
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
</style>
