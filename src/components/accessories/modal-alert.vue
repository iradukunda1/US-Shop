<template>
  <b-modal
    id="modal-alert"
    hide-footer
    @close="closeModal"
    no-close-on-backdrop
    no-close-on-esc
    :title="title"
  >
    <div class="modal-alert">
      <b-row>
        <b-col>
          <p class="notice" v-html="message"></p>
        </b-col>
      </b-row>
      <b-row align-h="between">
        <b-col cols="4"
          ><b-button variant="danger" @click="closeModal" class="footer-btn"
            >Cancel</b-button
          ></b-col
        >
        <b-col cols="4">
          <b-button
            variant="primary"
            style="float: right"
            class="footer-btn"
            @click="action"
            >{{ actionName }}</b-button
          ></b-col
        >
      </b-row>
    </div>
  </b-modal>
</template>
<script>
export default {
  props: {
    title: String,
    message: String,
    actionName: String,
    action: Function
  },
  methods: {
    closeModal() {
      this.modalAlert(false);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
