<template>
  <div class="order-status w-100 ">
    <discount-ads />
    <div class="order-status-content px-5 mx-5">
      <div class="order-status-header border-bottom pt-4">
        <p class="order-status-title mb-0 h3">Track your order</p>
        <p class="fa-14 mb-0 pt-3 pb-2">
          Delivery Hours
        </p>
        <p class="mb-0 fa-14 pb-2">
          <span class="font-weight-bold">Residential: 9AM - 8PM</span>

          (as late as 9PM during holidays),

          <span class="font-weight-bold"
            >Business: 9AM - 6PM, Funeral: Before Time of Service</span
          >
        </p>
      </div>
      <div class="order-status-context row w-100 mx-0 justify-content-center">
        <div class="w-35 order-track-form bg-grey p-4 border rounded-0 my-4">
          <form @submit.prevent>
            <p class="fa-15 font-weight-bold">Order Status</p>
            <div class="w-100 mb-2 order-number-area">
              <label class="fa-12 fa">ORDER NUMBER</label>
              <div class="h-50px order-number">
                <input
                  placeholder="Order or Suborder"
                  type="text"
                  class="form-control  rounded-0  h-100"
                />
              </div>
            </div>
            <div class="w-100 mb-2 recipient-lastName-area">
              <label class="fa-12 fa">RECIPIENT LAST NAME</label>
              <div class="h-50px recipient-lastName">
                <input
                  placeholder="Recipient Last Name"
                  type="text"
                  class="form-control  rounded-0  h-100"
                />
              </div>
            </div>
            <div
              class="track-order-button p-3 mt-3 mb-4 bg-button text-white rounded-0 w-100 font-weight-bold fa-14 btn"
            >
              TRACK ORDER
            </div>
            <p class="fa-16 font-weight-bold pt-3 border-top">
              Registered Customer
            </p>
            <p class="fa-14 text-justify">
              Sign in to see your order status and account details.
            </p>
            <p class="fa-13 text-info font-weight-bold">
              <span
                class="cursor-pointer"
                @click="$store.dispatch('setView', 'login')"
              >
                Sign in</span
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import discountAds from "@/components/shared/discount-ads.vue";
export default {
  name: "order-status",
  components: { discountAds },
};
</script>
