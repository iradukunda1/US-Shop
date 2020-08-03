<template>
  <div class="web-layout-content">
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

export default {
  name: "webLayout",
  components: {
    webFooter,
    webContent,
    webNav,
    extraListView
  },
  computed: {
    ...mapGetters({
      view: "view",
      accessories: "accessories"
    })
  }
};
</script>

<style lang="scss">
.web-layout-content {
  display: grid;
  width: 100%;
  padding: 0;
  height: 100%;
  grid-template-columns: auto;
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
    min-height: 306px;
  }
  .footer-classic {
    background-color: white;
    grid-area: footer;
    width: 100%;
    transition: all 1s !important;
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
