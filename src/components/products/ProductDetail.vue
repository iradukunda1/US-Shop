<template>
  <div class="product-details w-100 h-100 position-relative">
    <discount-ads />
    <div class="product-detail-container" v-if="product.id && !processing">
      <div class="images-views">
        <div class="images-container d-inline-flex w-75" style="height: 35rem;">
          <img
            class="profile-image w-100 h-100 d-block"
            :src="product.images_urls[0]"
          />
          <div class="image-discount-desc  position-absolute d-flex w-100">
            <div class="d-block">
              <div
                class="back-button text-white p-2 m-2"
                @click="$router.go(-1)"
              >
                <i class="fa fa-angle-left"></i> BACK
              </div>
              <div class="images-list-container mt-5">
                <ul class="images-list pl-0">
                  <li
                    v-for="(image, index) in product.images_urls"
                    :key="index"
                    class="image-list "
                  >
                    <span
                      class="profile d-block m-2"
                      :style="{
                        backgroundImage: 'url(' + image + ')'
                      }"
                    ></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="cart-container ml-auto">
              <div
                class="cart-card-container mt-3 bg-white border-left border-top border-bottom"
              >
                <div class="cart-content px-4 py-3">
                  <p class="h3">{{ product.name }}</p>
                  <p class="d-flex pt-2">
                    <span class="fa-12 pr-2">price</span>
                    {{ product.price + product.currency }}
                    <span
                      class="pl-2 text-danger fa-14"
                      style="text-decoration: line-through"
                      >{{ product.price + 4 }}FRW</span
                    >
                  </p>
                  <p class="fa-14 d-flex">
                    Or 4 payments of
                    <span class="font-weight-bold px-2">$13.20</span> by after
                    <span class="font-weight-bold pl-1"
                      >pay <i class="fa text-info fa-chain-broken"></i
                    ></span>
                  </p>
                  <p class="h4 g-text py-2 fa">AFTER DISCOUNT</p>
                  <div class="option-price">
                    <p class="font-weight-bold fa-13">SELECT AN OPTION</p>
                    <div
                      class="option-lists"
                      v-for="(product, index) in products"
                      :key="index"
                    >
                      <div class="d-flex rounded option-list my-2">
                        <span
                          class="cart-profile d-block"
                          :style="{
                            backgroundImage:
                              'url(' + product.images_urls[0] + ')'
                          }"
                        ></span>
                        <div class="option-list-desc ml-3">
                          <p class="font-weight-bold fa-13 mb-0">
                            {{ product.quality }}
                          </p>
                          <p class="fa-14 mb-0">{{ product.option }}</p>
                          <p class="mb-0">
                            <span class="font-weight-bold fa-14">{{
                              product.price + product.currency
                            }}</span
                            ><span
                              class="text-muted fa-13 ml-2"
                              style="text-decoration: line-through"
                              >{{ product.price + 10 + product.currency }}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="submit-cart">
                    <div
                      class="bg-button text-white fa fa-14 mt-4 rounded-0 w-100 btn p-2"
                    >
                      ADD TO CART
                    </div>
                    <p class="d-block pt-4">
                      <span class="fa">Delivering to:</span><br />
                      12345 on Sunday, July 26
                      <span class="text-info cursor-pointer pl-2">Edit</span>
                    </p>
                    <p class="mb-0 py-2">
                      <i class="fa fa-star text-info pr-1"></i>Arranged &
                      Delivered By Florist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-description d-flex mx-0 mt-5">
        <div class="col-md-5">
          <p class="description text-justify pb-4">{{ product.description }}</p>
          <div class="d-flex justify-content-between">
            <ul class="pl-3">
              <p class="font-weight-bold f-12">DETAILS</p>
              <li class="fa-12 pb-2">
                Better bouquet is approximately 11"H x 14"W
              </li>
              <li class="fa-12 pb-2">
                The vase shown may be substituted with an available one of a
                similar look, feel and value.
              </li>
            </ul>
            <ul>
              <p class="font-weight-bold f-12">STEMS</p>
              <li class="fa-12 pb-2">Carnation</li>
              <li class="fa-12 pb-2">Rose</li>
              <li class="fa-12 pb-2">Sunflower</li>
            </ul>
          </div>
          <p class="fa-13">ITEM {{ "   " + product.code }}</p>
        </div>
        <div class="col-md-7 px-0">
          <div class="d-flex pb-4">
            <p class="mb-0 rounded-circle bg-car-green px-2 py-3 my-auto mx-5">
              <i class="fa pt-2 mt-1 px-3 fa-truck-moving"></i>
            </p>
            <div class="px-1">
              <p class="font-weight-bold">FRESH & SAFE DELIVERY</p>
              <p class="text-justify fa-14">
                The health and safety of our customers, florists and growers is
                top priority. During this time, we will not require a signature
                for delivery. All orders will no longer be hand delivered, but
                be left at the front door with no contact and (as always) ready
                to delight.
              </p>
            </div>
          </div>
          <div class="d-flex pb-4">
            <p class="mb-0 rounded-circle bg-car-green px-2 py-3 my-auto mx-5">
              <i class="fa fa-cannabis pt-2 px-3"></i>
            </p>
            <div class="px-1">
              <p class="font-weight-bold">FRESHNESS FIRST</p>
              <p class="text-justify fa-14">
                Our bouquets are made of fresh cut flowers. To ensure your
                bouquet is fresh and high quality, occasionally our expert
                florists may make substitutions of color or flower variety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

import discountAds from "../shared/discount-ads";
import { mapGetters, mapMutations } from "vuex";
import CardTemplate from "../shared/CardTemplate";
import {
  infoToaster,
  successToaster,
  errorToaster
} from "../../components/shared/service/ErrorHandler.js";
import _ from "lodash";

export default {
  name: "productDetail",
  components: {
    CardTemplate,
    discountAds
  },
  data() {
    return {
      loading: false,
      products: [
        {
          id: "2ghfg-12324-356tuiyuds-dfghj-ghfgu78i",
          images_urls: ["/img/10.jpg", "/img/4.jpg", "/img/17.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "The grail of love",
          price: "150",
          currency: "FRW",
          code: "#KH-45",
          option: "Beauty Louis",
          offerPrice: "100$",
          quality: "GOOD"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghjyiu7-@klj8i",
          images_urls: ["/img/1.jpg", "/img/13.jpg", "/img/14.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Floeur de lotus",
          price: "100",
          currency: "FRW",
          code: "DE#-56RT",
          option: "Simple & sweet",
          quality: "BEST",
          offerPrice: "80$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghjbnv765-yiutyuu78i",
          images_urls: ["/img/3.jpg", "/img/12.jpg", "/img/8.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Spray of the sun",
          price: "300",
          currency: "FRW",
          code: "#POQU-34R",
          option: "Full & lush",
          quality: "BETTER",
          offerPrice: "200$"
        }
      ]
    };
  },
  methods: {
    fetchProduct() {
      const productId = this.$route.params.id;
      this.loader(true, {
        context: "fetching  product details....",
        area: "app"
      }),
        this.$store
          .dispatch("fetchProduct", productId)
          .then(() => {
            this.loader(false);
          })
          .catch(() => {
            this.loader(false);
            errorToaster(
              "Error while fetching",
              "sorry you seems to be offline"
            );
          });
    },

    ...mapMutations(["ADD_CART_LOCAL"]),

    addToCart(product) {
      const data = _.find(this.$store.getters.cartProducts, product);
      if (data) {
        infoToaster(
          "Already Added",
          `Your Product <b> ${product.name} </b> is Already Added`
        );
      } else {
        successToaster(
          "Added Successfully",
          `The Product <b> ${product.name} </b> was Added Successfully`
        );
        this.ADD_CART_LOCAL(product);
      }
    }
  },
  computed: {
    ...mapGetters(["resources"]),

    product() {
      return this.resources.product;
    }
  },
  mounted() {
    // this.fetchProduct();
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.product-details {
  .image-discount-desc {
    .back-button {
      border: 2px solid rgb(0, 124, 173);
      cursor: pointer;
      &:hover {
        color: white;
        background: rgb(0, 124, 173);
      }
    }
  }
  .cart-container {
    .cart-card-container {
      width: 25rem;
      min-height: 40rem;
      .cart-content {
        height: calc(100vh - 58px);
        overflow-y: overlay;
      }
      .cart-content::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
      }
      .cart-content::-webkit-scrollbar-thumb {
        background-color: rgba(0, 1, 53, 0.74);
        border-radius: 35px;
      }
      .cart-content::-webkit-scrollbar-track {
        background-color: transparent;
      }
    }
  }
  .images-list-container {
    li {
      list-style: none;
      cursor: pointer;
      .profile {
        width: 60px;
        height: 60px;
        border: 2px solid lightcyan;
        background-color: black;
        background-size: cover;
      }
      &:hover {
        color: gray;
      }
    }
  }
  .option-list {
    border: 2px solid gray;
    cursor: pointer;
    &:hover {
      border: 2px solid rgb(0, 124, 173);
    }
    .cart-profile {
      width: 70px;
      height: 70px;
      background-color: black;
      background-size: cover;
    }
  }
  .product-description {
    width: 54rem;
  }
  .bg-car-green {
    width: 100px;
    height: 100px;
    border: transparent;
    background: #ced847;
    text-align: center;
    i {
      font-size: 46px;
    }
  }
}
</style>
