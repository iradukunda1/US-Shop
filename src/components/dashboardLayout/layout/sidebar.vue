<template>
  <div class="right-side-menu-sidebar border-right">
    <div class="silkscreen-menu">
      <div class="px-4 pt-3 pb-4 mx-5 cursor-pointer" @click="$router.push('/admin')">
        <span class="small">HOME</span>
      </div>
      <div class="side-menu pl-2">
        <div class="product-management">
          <div
            v-b-toggle.collapse-1
            class="d-flex"
            style="cursor:pointer"
            @click="productOpt = !productOpt"
          >
            <i class="fa fa-shopping-cart mr-1 p-1"></i>
            <div class="d-flex">
              <p>Product Management</p>
              <span class="pl-2">
                <i class="fa fa-angle-right" v-show="productOpt"></i>
                <i class="fa fa-angle-up" v-show="!productOpt"></i>
              </span>
            </div>
          </div>
          <b-collapse visible id="collapse-1" class="pl-3 ml-3">
            <p>
              <router-link
                :to="{ name: 'Create product' }"
                style="cursor: pointer"
                >Product Edit
              </router-link>
            </p>
            <p>
              <router-link :to="{ name: 'Products-list' }"
                >Products</router-link
              >
            </p>
          </b-collapse>
        </div>
        <div class="logo-management ">
          <div
            style="cursor: pointer"
            class="d-flex"
            @click="logoOption = !logoOption"
            v-b-toggle.collapse-2
          >
            <i class="fa fa-shopping-cart mr-1 p-1"></i>
            <div class="d-flex">
              <p>Logo Management</p>
              <span class="pl-2 ml-4">
                <i class="fa fa-angle-right" v-show="logoOption"></i>
                <i class="fa fa-angle-up" v-show="!logoOption"></i>
              </span>
            </div>
          </div>
          <b-collapse visible id="collapse-2" class="pl-3 ml-3">
            <p>
              <router-link
                :to="{ name: 'Logo Setting' }"
                style="cursor:pointer;"
                >Logo Manage
              </router-link>
            </p>
          </b-collapse>
        </div>
        <div class="slider-image ">
          <div
            style="cursor: pointer"
            @click="sliderOption = !sliderOption"
            class="d-flex"
            v-b-toggle.collapse-3
          >
            <i class="fa fa-shopping-cart mr-1 p-1"></i>
            <div class="d-flex">
              <p>Slider Image</p>
              <span class="ml-5 pl-4">
                <i class="fa fa-angle-right" v-show="sliderOption"></i>
                <i class="fa fa-angle-up" v-show="!sliderOption"></i>
              </span>
            </div>
          </div>
          <b-collapse visible id="collapse-3" class="pl-3 ml-3">
            <p>
              <router-link :to="{ name: 'Image Slides' }"
                >Manage Slider Image</router-link
              >
            </p>
            <p>
              <router-link to="#">Manage Banner Image</router-link>
            </p>
          </b-collapse>
        </div>
        <div class="category-management">
          <div
            style="cursor: pointer"
            @click="categoryOption = !categoryOption"
            v-b-toggle.collapse-4
            class="d-flex"
          >
            <i class="fa fa-shopping-cart mr-1 p-1"></i>
            <div class="d-flex">
              <p>Category Management</p>
              <span class="ml-1">
                <i class="fa fa-angle-right" v-show="categoryOption"></i>
                <i class="fa fa-angle-up" v-show="!categoryOption"></i>
              </span>
            </div>
          </div>
          <b-collapse visible id="collapse-4" class="pl-3 ml-3">
            <p>
              <router-link :to="{ name: 'Categories' }"
                >Category List</router-link
              >
            </p>
            <p>
              <router-link :to="{ name: 'Sub-categories' }"
                >Sub Category List</router-link
              >
            </p>
          </b-collapse>
        </div>
        <div class="order-management">
          <div
            style="cursor: pointer"
            @click="orderOption = !orderOption"
            class="d-flex"
            v-b-toggle.collapse-5
          >
            <i class="fa fa-shopping-cart p-1 mr-1"></i>
            <div class="d-flex">
              <p>Order Management</p>
              <span class="ml-2">
                <i class="fa fa-angle-right" v-show="orderOption"></i>
                <i class="fa fa-angle-up" v-show="!orderOption"></i>
              </span>
            </div>
          </div>
          <b-collapse visible id="collapse-5" class="ml-3 pl-3">
            <p>
              <router-link :to="{ name: 'Orders' }">Orders</router-link>
            </p>
            <p>
              <router-link :to="{ name: 'Sellers' }">Sellers</router-link>
            </p>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      productOpt: false,
      logoOption: false,
      sliderOption: false,
      categoryOption: false,
      orderOption: false
    };
  },
  mounted() {
    // this.fetchingAllData();
  },
  methods: {
    fetchingAllData() {
      this.loader(true, {
        area: "app",
        context: "initializing admin Dashboard"
      });
      Promise.all([
        this.$store.dispatch("fetchProducts"),
        this.$store.dispatch("fetchOrders")
      ])
        .then(() => {
          this.loader(false);
        })
        .catch(() => {
          this.loader(false);
        });
    }
  }
};
</script>

<style scoped lang="scss">
a {
  color: #2c3e50;
  font-family: "Roboto", sans-serif;
  font-size: 14px;

  &.router-link-exact-active {
    color: #007bff;
  }
}
</style>
