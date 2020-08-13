<template>
  <div class="profile-component-container w-100">
    <p class="help row mx-0  w-100 justify-content-end pr-4 pt-3">
      <span class="chat-link-container"
        ><i class="fas fa-comment-dots pr-3"></i>
        <a href="javascript:;;" class="fa-12">Click to Chat</a></span
      ><span class="fa-12 pl-3 pt-1 contact-link-container"
        ><a href="javascript:;;">Need Help? +250780633340</a>
      </span>
    </p>
    <div
      class="my-profile-container row mx-0 w-100 justify-content-between px-5"
    >
      <div class="navigation-side-bar w-20">
        <p class="font-weight-bold fa-14 side-bar-header">MY ACCOUNT</p>
        <ul class="sidebar-list-container list-unstyled">
          <li
            :class="{ 'visited-tab': $route.query.tab == 'profile' }"
            @click="
              $router.push({ name: 'My-Profile', query: { tab: 'profile' } })
            "
          >
            Profile
          </li>
          <li
            :class="{ 'visited-tab': $route.query.tab == 'orders' }"
            @click="
              $router.push({ name: 'My-Profile', query: { tab: 'orders' } })
            "
          >
            Orders
          </li>
          <li
            :class="{ 'visited-tab': $route.query.tab == 'addresses' }"
            @click="
              $router.push({ name: 'My-Profile', query: { tab: 'addresses' } })
            "
          >
            Address Book
          </li>
          <li
            :class="{ 'visited-tab': $route.query.tab == 'reminder' }"
            @click="
              $router.push({ name: 'My-Profile', query: { tab: 'reminder' } })
            "
          >
            Reminders
          </li>
        </ul>
      </div>
      <div class="my-content-container w-80">
        <p class="my-content-title">
          <span
            class="text-info pr-1 fa-14 cursor-pointer"
            @click="$router.push({ name: 'Account' })"
            >MY ACCOUNT</span
          >
          /
          <span class="text-muted pl-1 fa-14">{{
            $route.query.tab.toUpperCase()
          }}</span>
        </p>
        <div class="my-content-componets">
          <profile v-if="$route.query.tab == 'profile'" />
          <reminders v-if="$route.query.tab == 'reminder'" />
          <addresses v-if="$route.query.tab == 'addresses'" />
          <orders v-if="$route.query.tab == 'orders'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import profile from "@/components/account/profile";
import reminders from "@/components/account/reminders";
import addresses from "@/components/account/addresses-book";
import orders from "@/components/products/orders/orders";
export default {
  name: "profile-components",
  components: { profile, reminders, addresses, orders },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.profile-component-container {
  .my-profile-container {
    .navigation-side-bar {
      ul {
        li {
          width: fit-content;
          margin: 0.5rem 0;
          color: rgb(0, 124, 173);
          cursor: pointer;
          font-size: 90%;
          font-weight: 550;
          opacity: 0.6;
          &:hover {
            opacity: 1;
            color: blue;
          }
        }
        .visited-tab {
          padding: 0 0 0 0.5rem;
          border-left: 2px solid rgb(0, 124, 173);
        }
      }
    }
  }
}
</style>
