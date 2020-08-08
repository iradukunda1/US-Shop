<template>
  <div class="tabs-components-container">
    <birthDayCollection
      class="mb-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'all-Birthday'"
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
        result.length !== 0 && this.$route.params.params == 'birthday-flowers'
      "
    />
    <birthday-roses
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'birthday-roses'
      "
    />
    <birthday-plants
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'birthday-plants'
      "
    />
    <birthday-delivery
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'birthday-delivery'
      "
    />
    <anniversary-flowers
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'anniversary-flowers'
      "
    />
    <new-baby-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'new-baby-flowers'
      "
    />
    <just-because-gifts
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'just-because-gifts'
      "
    />
    <get-well-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'get-well-flowers'
      "
    />
    <romantic-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'romantic-flowers'
      "
    />
    <sympathy-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'sympathy-flowers'
      "
    />
    <same-day-sympathy-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'same-day-sympathy-flowers'
      "
    />
    <sympathy-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'sympathy-plants'
      "
    />
    <sympathy-flowers-gifts
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'sympathy-flowers-gifts'
      "
    />
    <summer-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'summer-flowers'
      "
    />
    <best-selling-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'best-selling-flowers'
      "
    />
    <new-flowers-limited
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'new-flowers'"
    />
    <limited-edition-collection
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'limited-edition-collection'
      "
    />
    <best-selling-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'best-selling-plants'
      "
    />
    <new-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'new-plants'"
    />
    <same-day-plant-delivery
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'same-day-plant-delivery'
      "
    />
  </div>
</template>

<script>
import birthDayCollection from "@/components/products/tabs-componets/birthDays/birth-day-collection";
import sameDayBirthDayFlower from "@/components/products/tabs-componets/birthDays/same-day-birthday";
import birthdayFlowers from "@/components/products/tabs-componets/birthDays/birthday-flowers";
import BirthdayRoses from "@/components/products/tabs-componets/birthDays/birthday-roses";
import BirthdayPlants from "@/components/products/tabs-componets/birthDays/birthday-plants";
import BirthdayDelivery from "@/components/products/tabs-componets/birthDays/birthday-delivery";
import AnniversaryFlowers from "@/components/products/tabs-componets/occasions/anniversary-flowers";
import NewBabyFlowers from "@/components/products/tabs-componets/occasions/new-baby-flowers";
import JustBecauseGifts from "@/components/products/tabs-componets/occasions/just-because-gifts";
import GetWellFlowers from "@/components/products/tabs-componets/occasions/get-well-flowers";
import RomanticFlowers from "@/components/products/tabs-componets/occasions/romantic-flowers";
import SympathyFlowers from "@/components/products/tabs-componets/sympathy/sympathy-flowers";
import SameDaySympathyFlowers from "@/components/products/tabs-componets/sympathy/same-day-sympathy-flowers";
import SympathyPlants from "@/components/products/tabs-componets/sympathy/sympathy-plants";
import SympathyFlowersGifts from "@/components/products/tabs-componets/sympathy/sympathy-flowers-gifts";
import SummerFlowers from "@/components/products/tabs-componets/flowers/summer-flowers";
import BestSellingFlowers from "@/components/products/tabs-componets/flowers/best-selling-flowers";
import NewFlowersLimited from "@/components/products/tabs-componets/flowers/new-flowers-limited";
import LimitedEditionCollection from "@/components/products/tabs-componets/flowers/limited-edition-collection";
import BestSellingPlants from "@/components/products/tabs-componets/gift-plants/best-selling-plants";
import NewPlants from "@/components/products/tabs-componets/gift-plants/new-plants";
import SameDayPlantDelivery from "@/components/products/tabs-componets/gift-plants/same-day-plant-delivery";

export default {
  name: "tabs-components",
  components: {
    SameDayPlantDelivery,
    NewPlants,
    BestSellingPlants,
    LimitedEditionCollection,
    NewFlowersLimited,
    BestSellingFlowers,
    SummerFlowers,
    SympathyFlowersGifts,
    SympathyPlants,
    SameDaySympathyFlowers,
    SympathyFlowers,
    RomanticFlowers,
    GetWellFlowers,
    JustBecauseGifts,
    NewBabyFlowers,
    AnniversaryFlowers,
    BirthdayDelivery,
    BirthdayPlants,
    BirthdayRoses,
    birthDayCollection,
    sameDayBirthDayFlower,
    birthdayFlowers
  },
  data() {
    return {
      result: "0"
    };
  },
  methods: {
    resultLength(length) {
      this.result = length;
      this.$emit("itemsLength", length);
    }
  }
};
</script>

<style scoped></style>
