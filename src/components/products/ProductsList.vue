<template>
  <div class="products-list w-100 position-relative h-100">
    <div class="product-list-container">
      <div
        class="w-100 row mx-0 same-day-birthday-image"
        v-if="this.$route.params.params == 'same-day-birthday-flower'"
      >
        <img
          src="/img/same-day-birthDay.png"
          class="w-100"
          alt="same-day-birthday-image"
        />
      </div>
      <div
        class="w-100 row mx-0 birthday-flowers-cover"
        v-if="this.$route.params.params == 'birthday-flowers'"
      >
        <img
          src="/img/birthday-flowers-cover.png"
          class="w-100"
          alt="birthday-flowers-cover"
        />
      </div>
      <delivery-timer />
      <div
        class="header-options row mx-0 w-100 justify-content-between py-3 px-5 border-bottom"
      >
        <p class="mb-0 fa-14 cursor-pointer" @click="showFilter = !showFilter">
          <i class="fas fa-list pr-2"></i
          ><span v-if="!showFilter">Show Filters</span
          ><span v-if="showFilter">Hide Filters</span>
        </p>
        <p class="mb-0 fa-14 font-weight-bold">{{ result }} Results</p>
        <div class="sort-container d-flex fa-14">
          <span>Sort By: </span>
          <p class="mb-0 ml-1 cursor-pointer">
            Featured <i class="fas fa-angle-down pl-2"></i>
          </p>
        </div>
      </div>
      <div class="row w-100 mx-0 products-list-body">
        <transition name="showFilters">
          <div
            class="slide-filter bg-white mb-5 pb-5 w-25 pt-3"
            v-if="showFilter"
          >
            <ul class="list-unstyled mb-0 px-5 pt-4">
              <li class="border-bottom py-3">
                <p
                  class="row mx-0 w-100 justify-content-between my-2 fa-13 cursor-pointer show-hide-list"
                  @click="filterPrice = !filterPrice"
                >
                  <span class="font-weight-bold fa-14">Price</span>
                  <i class="fas fa-plus text-black-50" v-if="!filterPrice"></i>
                  <i class="fas fa-minus text-black-50" v-if="filterPrice"></i>
                </p>
                <div class="prices-filter w-100 my-3" v-if="filterPrice">
                  <div
                    class="prices-lists w-100 mb-2"
                    v-for="(price, index) in prices"
                    :key="index"
                  >
                    <div class="row mx-0 w-100 justify-content-start">
                      <b-form-checkbox></b-form-checkbox>
                      <span class="fa-12 font-weight-bold text-black-50 pt-1">{{
                        price
                      }}</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="border-bottom py-3">
                <p
                  class="my-2 fa-13 cursor-pointer row mx-0 w-100 justify-content-between show-hide-list"
                  @click="filterOccasion = !filterOccasion"
                >
                  <span class="font-weight-bold fa-14"> OCCASION</span>
                  <i
                    class="fas fa-plus text-black-50"
                    v-if="!filterOccasion"
                  ></i>
                  <i
                    class="fas fa-minus text-black-50"
                    v-if="filterOccasion"
                  ></i>
                </p>
                <div class="occasion-filter w-100 my-3" v-if="filterOccasion">
                  <div
                    class="prices-lists w-100 mb-2"
                    v-for="(occasion, index) in occasions"
                    :key="index"
                  >
                    <div class="row mx-0 w-100 justify-content-start">
                      <b-form-checkbox></b-form-checkbox>
                      <span class="fa-12 font-weight-bold text-black-50 pt-1">{{
                        occasion
                      }}</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="border-bottom py-3">
                <p
                  class="my-2  fa-13 cursor-pointer row mx-0 w-100 justify-content-between show-hide-list"
                  @click="filterFlowerType = !filterFlowerType"
                >
                  <span class="font-weight-bold fa-14"> FLOWER TYPE </span>
                  <i
                    class="fas fa-plus text-black-50"
                    v-if="!filterFlowerType"
                  ></i>
                  <i
                    class="fas fa-minus text-black-50"
                    v-if="filterFlowerType"
                  ></i>
                </p>
                <div
                  class="flower-type-filter w-100 my-3"
                  v-if="filterFlowerType"
                >
                  <div
                    class="prices-lists w-100 mb-2"
                    v-for="(flower, index) in flowerTypes"
                    :key="index"
                  >
                    <div class="row mx-0 w-100 justify-content-start">
                      <b-form-checkbox></b-form-checkbox>
                      <span class="fa-12 font-weight-bold text-black-50 pt-1">{{
                        flower
                      }}</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="border-bottom py-3">
                <p
                  class="my-2 row mx-0 w-100 justify-content-between fa-13  cursor-pointer show-hide-list"
                  @click="filterColor = !filterColor"
                >
                  <span class="font-weight-bold fa-14"> COLOR</span>
                  <i class="fas fa-plus text-black-50" v-if="!filterColor"></i>
                  <i class="fas fa-minus text-black-50" v-if="filterColor"></i>
                </p>
                <div
                  class="color-filter w-100 my-3 row mx-0 w-100 justify-content-around"
                  v-if="filterColor"
                >
                  <div
                    class="prices-lists m-2 cursor-pointer"
                    v-for="(color, index) in colors"
                    :key="index"
                  >
                    <div
                      class="border rounded color-profile"
                      :style="{ backgroundColor: color }"
                    ></div>
                  </div>
                </div>
              </li>
              <li class="border-bottom py-3">
                <p
                  class="my-2 row mx-0 w-100 justify-content-between fa-13 cursor-pointer show-hide-list"
                  @click="filterGiftType = !filterGiftType"
                >
                  <span class="font-weight-bold fa-14"> GIFT TYPE</span>
                  <i
                    class="fas fa-plus text-black-50"
                    v-if="!filterGiftType"
                  ></i>
                  <i
                    class="fas fa-minus text-black-50"
                    v-if="filterGiftType"
                  ></i>
                </p>
                <div class="gift-type-filter w-100 my-3" v-if="filterGiftType">
                  <div
                    class="prices-lists w-100 mb-2"
                    v-for="(gift, index) in giftTypes"
                    :key="index"
                  >
                    <div class="row mx-0 w-100 justify-content-start">
                      <b-form-checkbox></b-form-checkbox>
                      <span class="fa-12 font-weight-bold text-black-50 pt-1">{{
                        gift
                      }}</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="border-bottom py-3">
                <p
                  class="my-2 row mx-0 w-100 justify-content-between fa-13 cursor-pointer show-hide-list"
                  @click="filterPlantType = !filterPlantType"
                >
                  <span class="font-weight-bold fa-14"> PLANT TYPE</span>
                  <i
                    class="fas fa-plus text-black-50"
                    v-if="!filterPlantType"
                  ></i>
                  <i
                    class="fas fa-minus text-black-50"
                    v-if="filterPlantType"
                  ></i>
                </p>
                <div
                  class="plant-type-filter w-100 my-3"
                  v-if="filterPlantType"
                >
                  <div
                    class="prices-lists w-100 mb-2"
                    v-for="(plant, index) in plantTypes"
                    :key="index"
                  >
                    <div class="row mx-0 w-100 justify-content-start">
                      <b-form-checkbox></b-form-checkbox>
                      <span class="fa-12 font-weight-bold text-black-50 pt-1">{{
                        plant
                      }}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="reset-filter-action w-100  d-flex px-5 pt-4">
              <p
                class="text-info cursor-pointer font-weight-bold fa-14 text-center w-100"
              >
                Reset Filter
              </p>
            </div>
          </div>
        </transition>
        <div class="body-components" :class="showFilter ? 'w-75' : 'w-100'">
          <birthDayCollection
            class="mb-4"
            @itemsLength="resultLength"
            v-if="
              result.length !== 0 && this.$route.params.params == 'all-Birthday'
            "
          />
          <sameDayBirthDayFlower
            class="mb-4"
            @itemsLength="resultLength"
            v-if="
              result.length !== 0 &&
                this.$route.params.params == 'same-day-birthday-flower'
            "
          />
          <birthdayFlowers
            class="mb-4"
            @itemsLength="resultLength"
            v-if="
              result.length !== 0 &&
                this.$route.params.params == 'birthday-flowers'
            "
          />
          <div
            class="empty-result bg-grey mx-auto w-95 mb-5 py-5"
            v-if="result.length === 0"
          >
            <p class="fa-15 text-center w-100 py-4">
              We're sorry, there are no results available for your combination
              of filters
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import deliveryTimer from "../shared/delivery-timer";
import birthDayCollection from "../products/birthDays/birth-day-collection";
import sameDayBirthDayFlower from "../products/birthDays/same-day-birthday";
import birthdayFlowers from "../products/birthDays/birthday-flowers";
export default {
  name: "Shop the SU-Flower",
  props: ["products_list", "loading"],
  components: {
    deliveryTimer,
    birthDayCollection,
    sameDayBirthDayFlower,
    birthdayFlowers
  },
  data() {
    return {
      showFilter: false,
      filterPrice: false,
      filterOccasion: false,
      filterFlowerType: false,
      filterColor: false,
      filterGiftType: false,
      filterPlantType: false,
      result: "0",
      prices: ["Under $40", "$40-$50", " $50-$75", "Over $75"],
      occasions: [
        "I'm Sorry",
        "Wedding Gifts",
        "Retirement",
        "Housewarming",
        "Corporate Gifting",
        "Graduation",
        "Parents Day",
        "Friendship Day"
      ],
      flowerTypes: [
        "Carnation",
        "Daisy",
        "Daisies",
        "Hydrangea",
        "Iris",
        "Lily",
        "Lilies",
        "Orchid",
        "Rose",
        "Roses",
        "Sunflower",
        "Tulip"
      ],
      colors: [
        "rgb(46, 149, 166)",
        "rgb(17, 5, 80)",
        "rgb(33, 37, 41)",
        "rgb(0, 123, 255)",
        "rgb(250, 183, 42)",
        "rgb(13, 52, 90)",
        "rgba(255, 177, 232)",
        "rgb(250, 79, 65)",
        "rgb(27, 52, 90)",
        "rgb(145, 18, 43)",
        "rgb(79, 15, 235)",
        "rgb(245,241,241)"
      ],
      giftTypes: [
        "Mrs. Fields Cookies",
        "Chocolates & Sweets",
        "Other",
        "Cake Pops & Cakes",
        " Fruit & Snack Baskets",
        "Shari's Berries"
      ],
      plantTypes: [
        "Flowering",
        "Green",
        "Bonsai & Bamboo",
        "Airplants",
        "Orchids & Exotics",
        "Planter Gardens & Bulbs"
      ]
    };
  },
  methods: {
    resultLength(length) {
      this.result = length;
    }
  },
  mounted() {}
};
</script>
<style></style>
<style lang="scss" scoped>
.showFilters-enter-active {
  transition: all 500ms ease;
}
.showFilters-leave-active {
  //transition: 500ms ease;
}
.showFilters-enter {
  transform: translateX(-500px);
}
.showFilters-leave-to {
  transform: translateX(-200px);
}
.products-list {
  .slide-filter {
  }
  .color-profile {
    width: 30px;
    height: 30px;
  }
  .show-hide-list {
    i {
      transition: 300ms all;
      &::before {
        transform: rotate(360deg);
      }

      &::after {
        transform: rotate(360deg);
      }
      &:hover {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
