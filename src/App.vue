<template>
  <div id="app">
    <loading v-if="context.area == 'app'" />
    <modal-alert
      :message="modal.message"
      :title="modal.title"
      :action="modal.action"
      :actionName="modal.actionName"
    />
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import loading from "@/components/accessories/loading.vue";
import modalAlert from "@/components/accessories/modal-alert.vue";
export default {
  name: "App",
  components: { loading, modalAlert },
  computed: {
    ...mapGetters({
      context: "loading",
      modal: "alertModal",
    }),
  },
  created() {
    Array.prototype.firstThree = function() {
      return this.slice(0, 3);
    };
    Array.prototype.firstEight = function() {
      return this.slice(0, 8);
    };
    String.prototype.slugify = function() {
      return this.replace(/[ ]/g, "-").toLowerCase();
    };
    String.prototype.abbreviate = function() {
      const firstName = this.split(" ")[0]
        .slice(0, 1)
        .toUpperCase();
      const secondName = this.split(" ")[1]
        .slice(0, 1)
        .toUpperCase();
      return firstName + secondName;
    };
    this.$axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              this.$store.dispatch("logout");
              break;
            case 404:
              this.$router.push("*");
              break;
          }
        }
        return Promise.reject(error);
      }
    );
    // this.$axios.interceptors.response.use(undefined, function (err) {
    //   return new Promise(function (resolve, reject) {
    //     if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
    //       this.$store.dispatch(logout)
    //     }
    //     throw err;
    //   });
    // });
  },
};
</script>
<style></style>
<style lang="scss">
.cursor-pointer {
  cursor: pointer !important;
}
.bg-grey {
  background: rgb(248, 248, 248) !important;
}
.c-default {
  color: rgba(192, 0, 139, 0.93) !important;
}
.w-95 {
  width: 95% !important;
}
.w-90 {
  width: 90% !important;
}
.w-80 {
  width: 80% !important;
}
.w-70 {
  width: 70% !important;
}
.w-60 {
  width: 60% !important;
}
.w-45 {
  width: 45% !important;
}
.w-40 {
  width: 40% !important;
}
.w-30 {
  width: 30% !important;
}
.w-20 {
  width: 20% !important;
}
.h-50px {
  height: 50px !important;
}
.h-90px{
  height: 90px !important;
}
.g-text {
  color: #ced847 !important;
}
.fa-12 {
  font-size: 12px !important;
}
.fa-13 {
  font-size: 13px !important;
}
.fa-14 {
  font-size: 14px !important;
}
.fa-15 {
  font-size: 1.3rem !important;
}
.fa-16 {
  font-size: 16px !important;
}
.border-2px {
  border: 2px solid rgb(0, 124, 173) !important;
}
.hover-button {
  &:hover {
    background-color: rgb(0, 124, 173) !important;
    color: white !important;
  }
}
.pointer-events{
  pointer-events:none !important;
  opacity: 0.4 !important;
}
</style>
