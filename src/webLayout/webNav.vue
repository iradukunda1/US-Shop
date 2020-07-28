<template>
  <main class="main web-nav-layout border-bottom d-block w-100">
    <div class="navbar-header d-flex position-relative mb-0 px-3 w-100">
      <div
        class="header-log d-block mt-3"
        @mouseover="
          (showHelp = false),
            (showSympathy = false),
            (showFlower = false),
            (showBirthDay = false),
            (showOccasion = false),
            (showGift = false)
        "
      >
        <div class="mb-0">
          <span class="c-default mr-2 h3">S.U</span>
          <span class="text-info h4 mt-1">BOUQUETS</span>
        </div>
        <span class="small ml-5">an FTD company</span>
      </div>
      <div class="header-content d-flex ml-auto mt-3 ">
        <div
          class="nav-item"
          @click="$router.push('/')"
          @mouseover="
            (showSympathy = !showSympathy),
              (showFlower = false),
              (showBirthDay = false),
              (showOccasion = false),
              (showGift = false),
              (showHelp = false)
          "
        >
          <p
            class="p-3 cursor-pointer mb-0"
            :class="{ 'bottom-line': showSympathy }"
          >
            SYMPATHY
          </p>
        </div>
        <div
          class="nav-item "
          @mouseover="
            (showFlower = !showFlower),
              (showSympathy = false),
              (showBirthDay = false),
              (showOccasion = false),
              (showGift = false),
              (showHelp = false)
          "
        >
          <p
            class="p-3 cursor-pointer mb-0"
            :class="{ 'bottom-line': showFlower }"
          >
            FLOWER
          </p>
        </div>
        <div class="nav-item ">
          <p
            class="p-3 cursor-pointer mb-0"
            @mouseover="
              (showBirthDay = !showBirthDay),
                (showSympathy = false),
                (showFlower = false),
                (showOccasion = false),
                (showGift = false),
                (showHelp = false)
            "
            :class="{ 'bottom-line': showBirthDay }"
          >
            BIRTH-DAY
          </p>
        </div>
        <div
          class="nav-item "
          @mouseover="
            (showOccasion = !showOccasion),
              (showSympathy = false),
              (showFlower = false),
              (showBirthDay = false),
              (showGift = false),
              (showHelp = false)
          "
        >
          <p
            class="p-3 cursor-pointer mb-0"
            :class="{ 'bottom-line': showOccasion }"
          >
            ALL OCCASION
          </p>
        </div>
        <div class="nav-item">
          <p
            class="p-3 cursor-pointer mb-0"
            :class="{ 'bottom-line': showGift }"
            @mouseover="
              (showGift = !showGift),
                (showSympathy = false),
                (showFlower = false),
                (showBirthDay = false),
                (showOccasion = false),
                (showHelp = false)
            "
          >
            PLANTS & GIFTS
          </p>
        </div>
      </div>
      <div
        class="header-options ml-auto mt-3"
        @mouseover="
          (showSympathy = false),
            (showFlower = false),
            (showBirthDay = false),
            (showOccasion = false),
            (showGift = false),
            (showHelp = showHelp == true ? true : false)
        "
      >
        <ul class="d-flex mb-0 pt-1">
          <li
            class="web-navbar-help d-block mr-4"
            @mouseover="
              (showHelp = !showHelp),
                (showSympathy = false),
                (showFlower = false),
                (showBirthDay = false),
                (showOccasion = false),
                (showGift = false)
            "
          >
            <i class="fas px-1 fa-question-circle  fa-15"></i>&nbsp;
            <p class="mb-0 fa-12" :class="{ 'border-bottom': showHelp }">
              HELP
            </p>
          </li>
          <li class="web-navbar-search d-block mr-0">
            <i class="fas fa-search fa-15 ml-3"></i>&nbsp;
            <p class="mb-0 fa-12">SEARCH</p>
          </li>
          <li class="web-navbar-cart d-block  mx-4" id="popover-container">
            <div class="mb-0  cart-container" id="cart-popover">
              <i class="fas fa-cart-plus fa-15"></i>
              <span
                class="badge badge-primary position-absolute cart-length-badge"
                >{{ cartProducts.length }}</span
              >&nbsp;
              <p class="mb-0 fa-12">CART</p>
            </div>
          </li>
          <li class="web-navbar-account d-block mr-0" @click="view('Login')">
            <i class="fas fa-user-circle fa-15 ml-3"></i>&nbsp;
            <p class="mb-0 fa-12">ACCOUNT</p>
          </li>
          <!--          <b-popover-->
          <!--            target="cart-popover"-->
          <!--            triggers="hover"-->
          <!--            placement="bottom-right"-->
          <!--            container="popover-container"-->
          <!--            ref="popover"-->
          <!--          >-->
          <!--            <template v-slot:title class="px-5">-->
          <!--              <div class="text-dark pl-3">Your Cart List Product</div>-->
          <!--            </template>-->
          <!--            <div>-->
          <!--              <div class="justify-content-center align-items-center">-->
          <!--                <h3 class="mb-0 mx-5">Oops!</h3>-->
          <!--                <h4 class="mb-0">No Products Found</h4>-->
          <!--                <p class="mx-5">Your cart is empty</p>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </b-popover>-->
        </ul>
      </div>
    </div>
    <div>
      <div
        class=" bg-white  position-relative sympathy-tab rounded-0 jumbotron border-top w-100"
        @mouseleave="showSympathy = !showSympathy"
        v-if="showSympathy"
      >
        <div class="row mx-0 w-100 justify-content-center">
          <ul>
            <p class="font-weight-bold fa-14 ">Sympathy Flowers</p>
            <li>All Sympathy Flowers</li>
            <li>Same Day Sympathy Flower Delivery</li>
          </ul>
          <ul class="mr-5">
            <p class="font-weight-bold fa-14 ">Sympathy Plants & Gifts</p>
            <li>Sympathy Plants</li>
            <li>Sympathy Gifts</li>
          </ul>
          <ul class="border-left">
            <p class="font-weight-bold fa-14 ">Funeral Flowers & Sprays</p>
            <li>Funeral Flowers</li>
            <li>Funeral Sprays</li>
          </ul>
        </div>
      </div>
      <div
        class=" bg-white  position-relative flower-tab rounded-0 px-2 pt-5 border-top"
        @mouseleave="showFlower = !showFlower"
        v-if="showFlower"
      >
        <div class="row mx-0 w-100 justify-content-center">
          <ul>
            <p class="font-weight-bold fa-14">Featured Flowers Summer</p>
            <li v-for="featFlo in Featured_Flowers" :key="featFlo">
              {{ featFlo }}
            </li>
            <p class="font-weight-bold fa-14">Flowers by Delivery Type</p>
            <li v-for="deliType in Flowers_by_Delivery" :key="deliType">
              {{ deliType }}
            </li>
          </ul>
          <ul>
            <p class="font-weight-bold fa-14">Shop by Flower Type</p>
            <li v-for="type in shop_by_type" :key="type">{{ type }}</li>
          </ul>
          <ul>
            <p class="font-weight-bold fa-14">Shop Flowers by Color</p>
            <li v-for="color in shop_by_color" :key="color">
              {{ color }}
            </li>
          </ul>
          <ul class="border-left">
            <p class="font-weight-bold fa-14">Shop Roses by Color</p>
            <li v-for="rose in shop_by_roses" :key="rose">
              {{ rose }}
            </li>
          </ul>
        </div>
      </div>
      <div
        class=" bg-white  position-relative birthday-tab rounded-0 jumbotron border-top"
        v-if="showBirthDay"
        @mouseleave="showBirthDay = !showBirthDay"
      >
        <div class="row mx-0 w-100 justify-content-between px-5">
          <ul>
            <p class="font-weight-bold fa-14">Featured Birthday</p>
            <li>All Birthday</li>
            <li>Same Day Birthday Flower Delivery</li>
          </ul>
          <ul>
            <p class="font-weight-bold fa-14">Birthday Flowers</p>
            <li>All Birthday Flowers</li>
            <li>Birthday Roses</li>
          </ul>
          <ul>
            <p class="font-weight-bold fa-14">Birthday Plants & Gifts</p>
            <li>Birthday Plants</li>
            <li>Birthday Gifts</li>
          </ul>
          <ul class="border-left">
            <p class="font-weight-bold fa-14">Shop Birthday by Recipient</p>
            <li v-for="birthday in shop_by_birthday" :key="birthday">
              {{ birthday }}
            </li>
          </ul>
        </div>
      </div>
      <div
        class=" bg-white occasion-tab position-relative rounded-0 jumbotron border-top"
        v-if="showOccasion"
        @mouseleave="showOccasion = !showOccasion"
      >
        <div class="row mx-0 w-100 justify-content-center">
          <ul>
            <p class="font-weight-bold fa-14">All Occasions</p>
            <li>Just Because</li>
            <li>Get Well</li>
            <li>Anniversary</li>
            <li>Love & Romance</li>
          </ul>
          <ul>
            <li>Thinking of You</li>
            <li>Congratulations</li>
            <li>Thank You Baby</li>
            <li>Engagement</li>
          </ul>
          <ul>
            <li>I'm Sorry</li>
            <li>Wedding Gifts</li>
            <li>Retirement</li>
            <li>Housewarming</li>
            <li>Corporate Gifting</li>
          </ul>
          <ul class="border-left">
            <p class="font-weight-bold fa-14">Upcoming Occasions</p>
            <li>Graduation</li>
            <li>Parents Day</li>
            <li>Friendship Day</li>
            <li>Sister's Day</li>
          </ul>
        </div>
      </div>
      <div
        class=" bg-white  plants-gifts-tab position-relative rounded-0 jumbotron border-top"
        @mouseleave="showGift = !showGift"
        v-if="showGift"
      >
        <div class="row mx-0 w-100 justify-content-center">
          <ul>
            <p class="font-weight-bold fa-14">Featured Plants</p>
            <li v-for="featPlant in Featured_plants" :key="featPlant">
              {{ featPlant }}
            </li>
            <p class="font-weight-bold fa-14">Shop Plants</p>
            <li v-for="shopPlant in shop_plants" :key="shopPlant">
              {{ shopPlant }}
            </li>
          </ul>
          <ul>
            <p class="font-weight-bold fa-14">Flowering Plants</p>
            <li v-for="floPlant in flowering_plants" :key="floPlant">
              {{ floPlant }}
            </li>
          </ul>
          <ul class="mr-5">
            <p class="font-weight-bold fa-14">Shop Gifts</p>
            <li>Best Selling Gifts</li>
            <li>Flowers & Gifts Bundles</li>
            <p class="font-weight-bold fa-14">Gift Baskets</p>
            <li v-for="giftBasket in gift_baskets" :key="giftBasket">
              {{ giftBasket }}
            </li>
          </ul>
          <ul class="border-left">
            <p class="font-weight-bold fa-14">Gourmet Food Gifts</p>
            <li v-for="gourmetFood in gourmet_foods" :key="gourmetFood">
              {{ gourmetFood }}
            </li>
          </ul>
        </div>
      </div>
      <div
        class=" bg-white  help-tab position-relative rounded-0 jumbotron border-top"
        @mouseleave="showHelp = !showHelp"
        v-if="showHelp"
      >
        <div class="row mx-0 w-100 justify-content-center">
          <ul>
            <p class="font-weight-bold fa-14 menu-option">Customer service</p>
            <p class="font-weight-bold fa-14  menu-option">About Us</p>
            <p class="font-weight-bold fa-14 menu-option">Flower Guides</p>
            <p class="font-weight-bold fa-14 menu-option">Plant Guides</p>
          </ul>
          <ul class="contact-container">
            <p class="font-weight-bold fa-14 fa">CONTACT US</p>
            <p class="fa-12">
              We're here for you 24 hours a day, 7 days a week.
            </p>
            <li>
              <i class="fas fa-plane-departure"></i
              ><a href="javascript;;" class="font-weight-bold"
                >Track Your Order</a
              >
            </li>
            <li>
              <i class="fas fa-phone"></i
              ><a href="javascript;;" class="font-weight-bold">0789334672321</a>
            </li>
            <li>
              <i class="fas fa-envelope"></i
              ><a href="javascript;;" class="font-weight-bold">Email Us</a>
            </li>
            <li>
              <i class="fas fa-comment-dots"></i
              ><a href="javascript;;" class="font-weight-bold">Chat</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
/* eslint-disable */
import { mapState, mapGetters, mapMutations } from "vuex";
import {
  getLoggedInUser,
  isLoggedIn
} from "../components/shared/service/authService";

export default {
  data() {
    return {
      showSympathy: false,
      showFlower: false,
      showBirthDay: false,
      showOccasion: false,
      showGift: false,
      hideModal: false,
      showHelp: false,
      totalValue: 0.0,
      logo: "/assets/images/logo.jpg",
      search: null,
      Featured_Flowers: [
        "Summer Flowers",
        "Best Selling Flowers",
        "New Flowers Limited",
        "Edition Collection "
      ],
      Flowers_by_Delivery: [
        "Same Day Flower",
        " Delivery Flowers",
        "Shipped in Gift Box",
        " Florist Delivered"
      ],
      shop_by_type: [
        " All Flowers",
        "Alstroemerias ",
        "Carnations",
        "Daisies ",
        "Gerberas",
        " Hydrangeas",
        "Irises",
        " Lilies",
        " Mixed Flower",
        " Bouquets",
        " Orchids",
        " Peonies",
        " Roses",
        " Snapdragons",
        " Sunflowers ",
        "Tulips"
      ],
      shop_by_color: [
        " Blue Bouquets",
        "Lavender Bouquets",
        "Multi-Color Bouquets",
        "Orange Bouquets",
        "Pink Bouquets",
        "Purple Bouquets",
        "Red Bouquets",
        "White Bouquets",
        "Yellow Bouquets"
      ],
      shop_by_roses: [
        " All Roses",
        "Blue Roses",
        "Multi-Color Roses",
        "Orange Roses",
        "Pink Roses",
        "Purple Roses",
        " Rainbow Roses",
        " Red Roses",
        " White Roses"
      ],
      shop_by_birthday: [
        "Birthday for Mom",
        "Birthday for Friend",
        "Birthday for Wife",
        " Birthday for Daughter",
        "Birthday for Him"
      ],
      Featured_plants: [
        "Best Selling ",
        "Plants New",
        "Plants Same",
        "Day Plant Delivery"
      ],
      shop_plants: [
        "All Plants ",
        "Bonsai & Bamboo",
        "Green Plants",
        " Office Plants",
        "Succulents & Cacti"
      ],
      flowering_plants: [
        "All Flowering Plants",
        "Azalea Plants",
        "Bulbs & Indoor",
        " Gardens",
        "Calla ",
        "Lilies",
        " Orchids",
        " Peace",
        " Lily Plants",
        " Potted Rose Plants"
      ],
      gift_baskets: [
        "All Gift Baskets",
        "Fruit Gift Baskets",
        " Meat & Cheese Baskets",
        " Span Gift Baskets",
        " Starbucks Gift Baskets"
      ],
      gourmet_foods: [
        "All Gourmet",
        "Food Gifts ",
        "Candy Gifts",
        " Chocolate ",
        "Covered Strawberries",
        " Chocolate Gifts",
        "Desserts & Baked Goods",
        " Godiva Chocolates",
        " Mrs Fields Cookies"
      ]
    };
  },
  computed: {
    ...mapState(["cartProducts", "loggedUser"]),

    ...mapGetters(["auth"]),

    user() {
      return this.auth;
    },

    cartProducts() {
      return this.$store.getters.cartProducts;
    },
    products() {
      return [
        ...new Set(this.cartProducts.map(v => JSON.stringify(v)))
      ].map(v => JSON.parse(v));
    }
  },
  watch: {
    cartProducts() {
      this.totalValue = 0;
      this.cartProducts.forEach(product => {
        this.totalValue += parseFloat(product.price);
      });
      this.$store.state.resources.totalPrice = this.totalValue;
    }
  },
  mounted() {},
  methods: {
    view(data) {
      if (this.user.token) {
        this.$router.push("/Me");
        this.$store.dispatch("setResources", ["user", this.user]);
      } else {
        this.$store.dispatch("setView", data);
        this.$store.dispatch("setAccessories", ["details"]);
      }
    },
    /* Initially loading the cart products from local storage */
    QtyProduct(product) {
      return this.cartProducts.filter(v => v.id === product.id).length;
    },
    ...mapMutations(["SET_CART_PRODUCTS", "ADD_LOGGED_USER"]),

    getLocalProducts() {
      const products = JSON.parse(localStorage.getItem("iki-cart"));
      if (products) {
        this.SET_CART_PRODUCTS(products);
      }
    },

    loc_logout() {
      this.$store.dispatch("logout");
      // Promise.all([
      //   localStorage.removeItem("_auth" && "iki-cart"),
      //   this.$store.dispatch("logout"),
      // ]).then(() => {
      //   this.$router.replace({ name: "Home" });
      // });
    }
  },
  created() {
    this.getLocalProducts();
    //
    // const loggedUser = getLoggedInUser();
    //
    // this.ADD_LOGGED_USER(loggedUser);
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/webNav";
</style>
