<template>
  <div class="delivery-timer-component w-100 bg-grey border-bottom">
    <div class="delivery-timer-container justify-content-center d-flex p-4">
      <p class="font-weight-bold font-italic mt-3 pt-4 mb-0">Start here</p>
      <i class="fa fa-directions mt-3 pt-4 mx-2 fa-15"></i>
      <div class="delivery-zip">
        <label for="delivery-zip" class="font-italic">Delivery-Zip</label>
        <input
          type="text"
          id="delivery-zip"
          placeholder="ie:.12345"
          class="form-control"
        />
      </div>
      <div class="delivery-date mx-2">
        <label for="delivery-zip" class="font-italic">Delivery-Date</label>
        <input
          type="date"
          id="delivery-date"
          placeholder="ie:.12/07/2020"
          class="form-control cursor-pointer"
        />
      </div>
      <button class="btn text-white bg-default h-25">
        Shop Now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "delivery-timer-component"
};
</script>

<style lang="scss" scoped>
.delivery-timer-component {
  .delivery-timer-container {
    button {
      margin-top: 2rem;
      &:hover {
        background: black;
      }
    }
  }
}
</style>
