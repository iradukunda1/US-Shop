<template>
  <div class="product-details w-100 h-100 position-relative">
    <discount-ads />
    <div class="product-detail-container" v-if="product.id && !processing">
      <div class="images-views">
        <div class="images-container d-inline-flex w-75" style="height: 40rem;">
          <img
            class="profile-image w-100 h-100 d-block"
            :src="product.images_urls[clickedIndex]"
          />
          <div class="image-discount-desc position-absolute d-flex w-100">
            <div class="d-block ml-5 mt-5 images-list-back-button">
              <div
                class="back-button text-white p-2 fa-13 m-2"
                @click="$router.go(-1)"
              >
                <i class="fa fa-angle-left"></i> BACK
              </div>
              <div class="images-list-container mt-5 pt-5">
                <ul class="images-list pl-0">
                  <li
                    v-for="(image, index) in product.images_urls"
                    :key="index"
                    class="image-list"
                  >
                    <span
                      class="profile d-block m-2"
                      :class="{ 'visited-profile': clickedIndex == index }"
                      @click="clickedIndex = index"
                      :style="{
                        backgroundImage: 'url(' + image + ')'
                      }"
                    ></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-container">
          <div
            class="cart-card-container mt-3 bg-white border-left border-top border-bottom"
          >
            <div class="cart-content my-4">
              <div v-if="!deliveryForm" class="px-4 py-3">
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
                  <span class="font-weight-bold pl-1">
                    pay
                    <i class="fa text-info fa-chain-broken"></i>
                  </span>
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
                          backgroundImage: 'url(' + product.images_urls[2] + ')'
                        }"
                      ></span>
                      <div class="option-list-desc ml-3">
                        <p class="font-weight-bold fa-13 mb-0">
                          {{ product.quality }}
                        </p>
                        <p class="fa-14 mb-0">{{ product.option }}</p>
                        <p class="mb-0">
                          <span class="font-weight-bold fa-14">
                            {{ product.price + product.currency }}
                          </span>
                          <span
                            class="text-muted fa-13 ml-2"
                            style="text-decoration: line-through"
                            >{{ product.price + 10 + product.currency }}</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="submit-cart">
                  <div
                    class="bg-button text-white fa fa-14 mt-4 rounded-0 w-100 btn p-2"
                    v-if="!$route.query.editId"
                    @click="addToCart"
                  >
                    ADD TO CART
                  </div>
                  <div
                    class="bg-button text-white font-weight-bold fa-14 mt-4 rounded-0 w-100 btn p-2"
                    v-if="$route.query.editId"
                    @click="deliveryForm = !deliveryForm"
                  >
                    UPDATE CART
                  </div>
                  <p class="d-block pt-4">
                    <span class="fa">Delivering to:</span>
                    <br />12345 on Sunday, July 26
                    <span
                      class="text-info cursor-pointer pl-2"
                      @click="deliveryForm = !deliveryForm"
                      >Edit</span
                    >
                  </p>
                  <p class="mb-0 py-2">
                    <i class="fa fa-star text-info pr-1"></i>Arranged &
                    Delivered By Florist
                  </p>
                </div>
              </div>
              <div
                class="delivery-location px-4 py-4"
                v-if="deliveryForm && !deliveryDate"
              >
                <div class="delivery-header d-flex px-3">
                  <div class="header-content">
                    <p class="mb-0">Enter Location to</p>
                    <p>Estimate Delivery</p>
                  </div>
                  <i
                    class="fa fa-times cursor-pointer ml-auto fa-15"
                    @click="deliveryForm = !deliveryForm"
                  ></i>
                </div>
                <form @submit.prevent>
                  <div class="mt-3 d-block">
                    <label for="deliveryZip" class="col-md fa fa-12"
                      >DELIVERY ADDRESS</label
                    >
                    <div class="col-md-12">
                      <input
                        id="deliveryZip"
                        v-model="location.address"
                        class="form-control rounded-0 fa-12 py-4"
                        placeholder="delivery address ie:.KK 74"
                        required
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="w-100 mt-2">
                    <label class="col-md fa-12 fa">LOCATION TYPE</label>
                    <div class="col-md-12" style="height: 50px">
                      <b-form-select
                        id="locationType"
                        v-model="location.location"
                        class="form-control cursor-pointer rounded-0 h-100"
                        :options="locations"
                      ></b-form-select>
                    </div>
                  </div>
                  <div
                    class="bg-button text-white fa-14 mt-5 fa rounded-0 col-md-12 btn py-2 px-4"
                    @click="deliveryDate = !deliveryDate"
                  >
                    CONTINUE TO DELIVERY DATE
                  </div>
                </form>
              </div>
              <div class="delivery-date px-4 my-3" v-if="deliveryDate">
                <div class="delivery-header-date px-2 border-bottom">
                  <div class="d-flex">
                    <p
                      class="mb-0 fa-12 cursor-pointer"
                      @click="deliveryDate = !deliveryDate"
                    >
                      <i class="fa fa-angle-left pr-2"></i>
                      <span class="font-weight-bold">BACK</span>
                    </p>
                    <i
                      class="fa fa-times cursor-pointer ml-auto fa-15"
                      @click="
                        (deliveryDate = !deliveryDate),
                          (deliveryForm = !deliveryForm)
                      "
                    ></i>
                  </div>
                  <div class="header-content px-4 mx-auto">
                    <p class="px-4 fa-15 text-center">
                      Select a delivery date
                    </p>
                    <p class="justify-content-between row">
                      <span class="cursor-pointer text-info">
                        <i class="fa fa-angle-left pr-1"></i> May
                      </span>
                      <span class="mx-5s px-2">July</span>
                      <span class="cursor-pointer text-info">
                        August
                        <i class="fa fa-angle-right pl-1"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  class="delivery-dates-lists mt-4 mb-3"
                  v-for="(date, index) in deliveryMonths"
                  :key="index"
                >
                  <delivery-dates :date="date" />
                </div>
                <p
                  class="mx-4 my-3 fa-13 text-info cursor-pointer mb-0"
                  style="text-align: right"
                >
                  NEXT MONTH
                  <i class="fa fa-angle-right"></i>
                </p>
                <div
                  class="bg-button text-white fa-14 font-weight-bold rounded-0 col-md-12 btn py-2 px-4"
                  @click="checkout"
                >
                  CONFIRM DATE & CONTINUE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-description row my-5 mx-0">
        <div class="col-md-5">
          <p class="description-title fa-16 mb-0 pb-2 font-weight-bold">
           PRODUCT DESCRIPTION
          </p>
          <p class="description text-justify pb-4 fa-13">{{ product.description }}</p>
          <div class="d-flex justify-content-between">
            <ul class="pl-3">
              <p class="font-weight-bold ">DETAILS</p>
              <li class="fa-12 pb-2">
                Better bouquet is approximately 11"H x 14"W
              </li>
              <li class="fa-12 pb-2">
                The vase shown may be substituted with an available one of a
                similar look, feel and value.
              </li>
            </ul>
            <ul>
              <p class="font-weight-bold ">STEMS</p>
              <li class="fa-12 pb-2">Carnation</li>
              <li class="fa-12 pb-2">Rose</li>
              <li class="fa-12 pb-2">Sunflower</li>
            </ul>
          </div>
          <p class="fa-13">ITEM {{ " " + product.code }}</p>
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
import deliveryDates from "../shared/delivery-dates";
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
    discountAds,
    deliveryDates
  },
  data() {
    return {
      deliveryForm: false,
      deliveryDate: false,
      clickedIndex: "0",
      location: {
        location: null
      },
      locations: [
        { value: null, text: "Please select location", disabled: true },
        { value: "0", text: "Home/Residence" },
        { value: "1", text: "Business" },
        { value: "2", text: "Apartment" },
        { value: "3", text: "Funeral Home" },
        { value: "4", text: "Other" }
      ],
      loading: false,
      deliveryMonths: [
        {
          dates: "Mon ,Jul 01",
          type: "Standard delivery"
        },
        {
          dates: "Tue ,Jul 02",
          type: "Standard delivery"
        },
        {
          dates: "Wen ,Jul 03",
          type: "Standard delivery"
        },
        {
          dates: "Thru ,Jul 04",
          type: "Standard delivery"
        },
        {
          dates: "Fri ,Jul 05",
          type: "Standard delivery"
        },
        {
          dates: "Tue ,Jul 06",
          type: "Standard delivery"
        },
        {
          dates: "Sat ,Jul 07",
          type: "Standard delivery"
        },
        {
          dates: "Sun ,Jul 08",
          type: "Standard delivery"
        },
        {
          dates: "Thru ,Jul 09",
          type: "Standard delivery"
        },
        {
          dates: "Wen ,Jul 10",
          type: "Standard delivery"
        },
        {
          dates: "Tue ,Jul 11",
          type: "Standard delivery"
        }
      ],
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
    ...mapMutations(["ADD_CART_LOCAL"]),

    addToCart() {
      this.deliveryForm = !this.deliveryForm;
      const data = _.find(this.$store.getters.cartProducts, this.product);
      // if (data) {
      //   infoToaster(
      //           "Already Added",
      //           `Your Product <b> ${this.product} </b> is Already Added`
      //   );
      // } else {
      //   successToaster(
      //           "Added Successfully",
      //           `The Product <b> ${this.product} </b> was Added Successfully`
      //   );
      this.ADD_CART_LOCAL(this.product);
    },
    checkout() {
      this.$store.dispatch("setView", "checkout");
      this.$store.dispatch("setAccessories", ["details"]);
    },
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
  }
};
</script>

<style lang="scss" scoped>
.product-details {
  .image-discount-desc {
    .back-button {
      border: 2px solid rgb(231, 201, 0);
      cursor: pointer;
      &:hover {
        border: 2px solid rgb(0, 124, 173);
        color: white;
        background: rgb(0, 124, 173);
      }
    }
  }
  .cart-container {
    position: absolute;
    top: 4.5%;
    right: 0;
    width: 35%;
    .cart-card-container {
      min-height: 40rem;
      .cart-content {
        height: calc(100vh - 10px);
        overflow-y: overlay;
      }
      .cart-content::-webkit-scrollbar {
        width: 5px;
        background-color: transparent;
      }
      .cart-content::-webkit-scrollbar-thumb {
        background-color: rgba(222, 4, 169, 0.74);
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
      .visited-profile {
        border-right: 5px solid rgb(0, 123, 255);
        border-right-style: outset;
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
    width: 65%;
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

@media screen and (max-width: 768px) {
  .product-details {
    .cart-container {
      width: 41% !important;
      .cart-card-container {
        min-height: 38.8rem !important;
        .cart-content {
          height: calc(100vh - 2px) !important;
        }
      }
    }
    .image-discount-desc {
      .images-list-back-button {
        margin-left: 1.5rem !important;
      }
    }
    .product-description {
      width: 100% !important;
      padding: 1rem !important;
    }
  }
}
@media screen and (max-width: 425px) {
  .product-details {
    .images-container {
      width: 100% !important;
      height: 30rem !important;
    }
    .image-discount-desc {
      .images-list-back-button {
        margin-left: 0.5rem !important;
      }
      .back-button {
        font-size: 65% !important;
      }
    }
    .images-list-container li .profile {
      width: 50px;
      height: 50px;
    }
    .cart-container {
      position: relative !important;
      width: 80% !important;
      margin: 2rem auto;
      .cart-card-container .cart-content {
        margin: 0 !important;
        height: calc(100vh - 40px) !important;
      }
    }
    .product-description {
      width: 90% !important;
      padding: 0 !important;
      margin: 5rem auto !important;
    }
  }
}
@media screen and( max-width: 320px) {
  .product-details {
    .images-container {
      height: 25rem !important;
    }
    .image-discount-desc .images-list-back-button {
      margin-top: 0.5rem !important;
    }
  }
}
</style>
