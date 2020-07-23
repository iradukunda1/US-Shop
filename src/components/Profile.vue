<template>
  <div class="row py-5 px-4" v-if="!processing">
    <div class="col-xl-12 col-md-12 col-sm-10 mx-auto">
      <div class="bg-white rounded overflow-hidden">
        <div class="px-4 pt-0 pb-4">
          <div class="media align-items-end profile-header">
            <div class="profile mr-3">
              <img
                src="/img/profile/avatar_user.png"
                alt="..."
                width="130"
                class="rounded mb-2 img-thumbnail"
              /><a href="#" class="btn btn-dark btn-sm btn-block"
                >Edit profile</a
              >
            </div>
            <div class="media-body mb-5 text-black">
              <h4 class="mt-0 mb-0">
                {{ user.firstName || "Tsapal" }} {{ user.lastName || "Rwanda" }}
              </h4>
              <p class="small mb-4">
                {{ user.email || "Tsapal2020@gmail.com" }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-light p-4 d-flex justify-content-end text-center">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <h5 class="font-weight-bold mb-0 d-block">241</h5>
              <small class="text-muted">
                <i class="fa fa-picture-o mr-1"></i>Photos</small
              >
            </li>
            <li class="list-inline-item">
              <h5 class="font-weight-bold mb-0 d-block">84K</h5>
              <small class="text-muted">
                <i class="fa fa-user-circle-o mr-1"></i>Followers</small
              >
            </li>
          </ul>
        </div>

        <div class="py-4 px-4">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h5 class="mb-0">Recent Loves</h5>
            <a href="#" class="btn btn-link text-muted">Show all</a>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-2 pr-lg-1">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg"
                alt=""
                class="img-fluid rounded shadow-sm"
              />
            </div>

            <div class="col-lg-6 mb-2 pl-lg-1">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/dose-juice-1184444-unsplash_bmbutn.jpg"
                alt=""
                class="img-fluid rounded shadow-sm"
              />
            </div>

            <div class="col-lg-6 pr-lg-1 mb-2">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1556294926/cody-davis-253925-unsplash_hsetv7.jpg"
                alt=""
                class="img-fluid rounded shadow-sm"
              />
            </div>

            <div class="col-lg-6 pl-lg-1">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/tim-foster-734470-unsplash_xqde00.jpg"
                alt=""
                class="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
          <div class="py-4">
            <h5 class="mb-3">Recent reviews</h5>
            <div class="p-4 bg-light rounded shadow-sm">
              <p class="font-italic mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <ul class="list-inline small text-muted mt-3 mb-0">
                <li class="list-inline-item">
                  <i class="fa fa-comment-o mr-2"></i>12 Comments
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-heart-o mr-2"></i>200 Likes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
import { mapGetters } from "vuex";
import { errorToaster } from "./shared/service/ErrorHandler";
export default {
  data() {
    return {
      profiles: {}
    };
  },
  methods: {
    async getUser() {
      this.loader(true, {
        context: "initializing user profile....",
        area: "app"
      }),
      await  this.$store
          .dispatch("fetchUser",this.user.id)
          .then(res => {
            this.loader(false);
          })
          .catch(err => {
            this.loader(false);
            errorToaster(
              "error while fetching",
              `${err.message} || sorry you seems to be offline`
            );
          });
    }
  },
  computed: {
    ...mapGetters(["auth","resources"]),

    user() {
      return this.auth.user;
    }
  },
  mounted() {
    this.getUser();
  }
};
</script>
