<template>
  <div class="cardLoader">
    <div class="row">
      <div class="col-md-3" v-for="loop in loopCount" v-bind:key="loop">
        <vcl-instagram
          :width="250"
          :height="280"
          style="padding: 20px"
        ></vcl-instagram>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { VclInstagram } from "vue-content-loading";
export default {
  name: "cardLoader",
  props: ["loopCount"],
  components: { VclInstagram }
};
</script>
<style></style>
