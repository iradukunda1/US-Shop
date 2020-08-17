<template>
  <div class="web-layout-content">
    <transition name="fade" mode="out-in">
      <global-search v-if="resources.trigger.triggerSearchFormModal" />
      <delivery-address-modal v-if="resources.trigger.triggerDeliveryAddress" />
    </transition>
    <transition name="slide">
      <extra-list-view v-if="view || accessories.details" :title="view" />
    </transition>
    <web-nav></web-nav>
    <web-content></web-content>
    <web-footer></web-footer>
  </div>
</template>

<script>
import extraListView from "../components/shared/extra-list-view";
import webNav from "./webNav";
import webFooter from "./webFooter";
import webContent from "./webContent";
import { mapGetters } from "vuex";
import DeliveryAddressModal from "@/components/products/address/delivery-address-modal";
import GlobalSearch from "@/components/shared/global-search";

export default {
  name: "webLayout",
  components: {
    GlobalSearch,
    DeliveryAddressModal,
    webFooter,
    webContent,
    webNav,
    extraListView
  },
  computed: {
    ...mapGetters({
      resources: "resources",
      view: "view",
      accessories: "accessories"
    })
  }
};
</script>

<style lang="scss">
html {
  height: 100vh;
  width: 100%;
}
.web-layout-content {
  display: grid;
  padding: 0;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 95px 1fr auto;
  grid-template-areas:
    "navbar"
    "content"
    "footer ";
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;

  .web-nav-layout {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
    border-bottom: 1px #d7d9de70 solid;
    grid-area: navbar;
    overflow: visible;
  }
  .web-content {
    position: relative;
    grid-area: content;
    background: white;
    min-height: 36vh;
  }
  .footer-classic {
    grid-area: footer;
  }
  .dropdown-toggle::after {
    display: none !important;
  }
  .bg-default {
    background: rgba(192, 0, 139, 0.93);
  }
  .bg-button {
    background: rgb(0, 124, 173);
  }
}
</style>
