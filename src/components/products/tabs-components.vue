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
  </div>
</template>

<script>
import birthDayCollection from "../products/birthDays/birth-day-collection";
import sameDayBirthDayFlower from "../products/birthDays/same-day-birthday";
import birthdayFlowers from "../products/birthDays/birthday-flowers";
import BirthdayRoses from "@/components/products/birthDays/birthday-roses";
import BirthdayPlants from "@/components/products/birthDays/birthday-plants";
import BirthdayDelivery from "@/components/products/birthDays/birthday-delivery";

export default {
  name: "tabs-components",
  components: {
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
    }
  },
  computed() {
    this.$emit("itemsLength", this.result);
  }
};
</script>

<style scoped></style>
