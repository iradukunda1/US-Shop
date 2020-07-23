<template>
  <div class="admin-navbar bg-dark d-block">
    <div class="d-flex">
      <div class="logo-box">
        <div
          @click="$router.push({ name: 'Home' })"
          class="logo"
          style="cursor:pointer"
        >
          <img
            class="tsapal-logo border-dark cursor-pointer bg-light"
            alt="Tsapal-Logo"
            height="80"
            width="252"
            src="/img/logos/logo.jpg"
          />
        </div>
      </div>
      <div class="d-flex ml-auto align-items-center my-3 pr-3">
        <div class="app-search d-sm-block">
          <div class="app-search-box">
            <div class="input-group d-inline-flex">
              <input
                class="form-control rounded-pill bg-light"
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>
        </div>

        <div class="dropdown mx-3 notification-list">
          <template
            aria-expanded="false"
            aria-haspopup="false"
            class="dropdown-toggle d-flex "
            data-toggle="dropdown"
            href="#"
            role="button"
          >
            <span class="notification-icon d-block">
              <span class="badge badge-danger rounded-circle ml-3 align-top"
                >9</span
              ></span
            >
          </template>
          <div class="dropdown-menu dropdown-menu-right dropdown-lg">
            <!--                                <div class="dropdown-item noti-title">-->
            <!--                                    <h5 class="m-0">-->
            <!--                                                <span class="float-right">-->
            <!--                                                    <a class="text-dark" href="#">-->
            <!--                                                        <small>Clear All</small>-->
            <!--                                                    </a>-->
            <!--                                                </span>Notification-->
            <!--                                    </h5>-->
            <!--                                </div>-->
            <router-link
              class="dropdown-item text-center text-primary notify-item notify-all"
              to="#"
            >
              View all
              <i class="ti-arrow-right"></i>
            </router-link>
          </div>
        </div>

        <div class="dropdown notification-list">
          <span
            aria-expanded="false"
            aria-haspopup="false"
            class="dropdown-toggle mr-0"
            data-toggle="dropdown"
            role="button"
          >
            <span
              class="rounded-circle user-image d-flex border-dark bg-light"
              :style="{
                backgroundImage:
                  'url(' +
                  (user.profile || '/img/profile/avatar_user.png') +
                  ')'
              }"
            ></span>
          </span>
          <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Welcome Admin</h6>
            </div>
            <router-link
              class="dropdown-item notify-item"
              :to="{ name: 'admin profile' }"
            >
              <i class="fe-user"></i>
              <span>My Account</span>
            </router-link>
            <div class="dropdown-divider"></div>
            <div
              class="dropdown-item notify-item"
              @click.prevent="logout"
              style="cursor:pointer"
            >
              <i class="fe-log-out"></i>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      user: {}
    };
  },
  methods: {
    logout() {
      Promise.all([this.$store.dispatch("logout")]).then(() => {
        this.$router.replace({ name: "Home" });
      });
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang="scss">
.admin-navbar {
  .notification-icon {
    background-image: url("/img/icons/notify.png");
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .user-image {
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
