<template>
  <div class="delivery-timer-component w-100 bg-grey border-bottom">
    <div class="delivery-timer-container justify-content-center row mx-0 p-4">
      <div class="d-flex mb-3">
        <p
          class="font-weight-bold font-italic mt-3 pt-4 mb-0 start-here-text w-30"
        >
          Start here
        </p>
        <i class="fa fa-angle-double-right mt-3 pt-4 mx-2 fa-15"></i>
        <div class="delivery-zip">
          <label for="delivery-address" class="font-italic"
            >Delivery-Address</label
          >
          <input
            type="text"
            id="delivery-address"
            placeholder="KK-st 764"
            class="form-control"
          />
        </div>
      </div>
      <div class="delivery-date mx-2">
        <label for="delivery-date" class="font-italic">Delivery-Date</label>
        <input
          type="date"
          id="delivery-date"
          placeholder="ie:.12/07/2020"
          class="form-control cursor-pointer"
        />
      </div>
      <button class="btn text-white bg-default h-25" @click="shopNow()">
        Shop Now
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "delivery-timer-component",
  data() {
    return {};
  },
  methods: {
    shopNow() {
      if (this.$route.name !== "Shop the SU-Flower") {
        this.$router.push({
          name: "Shop the SU-Flower",
          params: { params: "all-flowers" }
        });
      } else {
        return false;
      }
    }
  },
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
@media screen and( max-width: 320px) {
  .delivery-timer-component {
    .start-here-text {
      font-size: 66% !important;
    }
  }
}
</style>
