<template>
  <div class="my-account-component w-100 px-5 pb-5">
    <p class="help row mx-0  w-100 justify-content-end pr-4 pt-3">
      <span class="chat-link-container"
        ><i class="fas fa-comment-dots pr-3"></i>
        <a href="javascript:;;" class="fa-12">Click to Chat</a></span
      >
    </p>
    <div class="header-container w-75 mx-auto">
      <p class="title-container row mx-0 w-100 justify-content-between pr-5">
        <span class="h4 font-weight-bold">My Account</span>
        <span>Hello, John</span>
      </p>
      <p class="body-text-container">
        Your account will provide you with access to details of previous orders,
        delivery addresses, and email reminders for selected occasions
      </p>
    </div>
    <div class="direct-container pt-4 w-70 mx-auto pb-5">
      <div class="profile-container border-bottom">
        <div
          class="profile-link row w-100 mx-0 justify-content-between p-4 cursor-pointer"
          @click="
            $router.push({ name: 'My-Profile', query: { tab: 'profile' } }),
              $store.dispatch('setResources', [
                'trigger',
                { AccountOptionsContainer: true },
              ])
          "
        >
          <i class="fas fa-user-alt py-3 fa-15 text-info mr-5"></i>
          <div class="profile-header mr-auto">
            <p class="mb-0 font-weight-bold fa-16 profile-title">Profile</p>
            <p class="mb-0 profile-context">
              Manage your profile details, billing address and email
              preferences.
            </p>
          </div>
          <i class="fas fa-angle-right py-3"></i>
        </div>
      </div>
      <div class="order-container  border-bottom">
        <div
          class="order-link row w-100 mx-0 justify-content-between p-4 cursor-pointer"
          @click="
            $router.push({ name: 'My-Profile', query: { tab: 'orders' } })
          "
        >
          <i class="fas fa-feather-alt py-3 fa-15 text-info mr-5"></i>
          <div class="order-header mr-auto">
            <p class="mb-0 font-weight-bold fa-16 order-title">Orders</p>
            <p class="mb-0 order-context">
              Review the details and status of your orders.
            </p>
          </div>
          <i class="fas fa-angle-right py-3"></i>
        </div>
      </div>
      <div class="addresses-container  border-bottom">
        <div
          class="address-link row w-100 mx-0 justify-content-between p-4 cursor-pointer"
          @click="
            $router.push({ name: 'My-Profile', query: { tab: 'addresses' } })
          "
        >
          <i class="fas fa-address-card py-3 fa-15 text-info mr-5"></i>
          <div class="address-header mr-auto">
            <p class="mb-0 font-weight-bold fa-16 address-title">
              Address Book
            </p>
            <p class="mb-0 address-context">
              Manage your saved delivery addresses.
            </p>
          </div>
          <i class="fas fa-angle-right py-3"></i>
        </div>
      </div>
      <div
        class="reminders-container row w-100 mx-0 justify-content-between border-bottom"
      >
        <div
          class="reminder-link row w-100 mx-0 justify-content-between p-4 cursor-pointer"
          @click="
            $router.push({ name: 'My-Profile', query: { tab: 'reminder' } })
          "
        >
          <i class="fas fa-calendar-alt py-3 fa-15 text-info mr-5"></i>
          <div class="reminder-header mr-auto">
            <p class="mb-0 font-weight-bold fa-16 reminder-title">Reminders</p>
            <p class="mb-0 reminder-context">
              Save and update your reminders for those special occasions.
            </p>
          </div>
          <i class="fas fa-angle-right py-3"></i>
        </div>
      </div>
      <div
        class="customer-service-container row w-100 mx-0 justify-content-between border-bottom"
      >
        <div
          class="customer-service-link row w-100 mx-0 justify-content-between p-4 cursor-pointer"
          @click="$router.push({ name: 'Customer-Service' })"
        >
          <i class="fas fa-comment-dots py-3 fa-15 text-info mr-5"></i>
          <div class="customer-header mr-auto">
            <p class="mb-0 font-weight-bold fa-16 reminder-title">
              Customer Service
            </p>
            <p class="mb-0 customer-context">
              Chat with us 24 hours a day, 7 days a week.
            </p>
          </div>
          <i class="fas fa-angle-right py-3"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-account",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
