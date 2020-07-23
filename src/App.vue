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
      modal: "alertModal"
    })
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
      response => {
        return response;
      },
      error => {
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
  }
};
</script>
<style lang="scss">
.cursor-pointer {
  cursor: pointer;
}
.bg-grey {
  background: rgb(245, 245, 245);
}
.c-default {
  color: rgba(192, 0, 139, 0.93);
}
.fa-15 {
  font-size: 1.3rem;
}
.fa-12 {
  font-size: 12px;
}
</style>
