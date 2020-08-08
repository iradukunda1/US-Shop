<template>
  <div class="images-container">
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
    <div
      class="w-100 row mx-0 birthday-plants"
      v-if="this.$route.params.params == 'birthday-plants'"
    >
      <img src="/img/birthday-plant.png" class="w-100" alt="birthday-plants" />
    </div>
    <div
      class="w-100 row mx-0 anniversary-flowers"
      v-if="this.$route.params.params == 'anniversary-flowers'"
    >
      <img
        src="/img/anniversary-flowers.png"
        class="w-100"
        alt="anniversary-flowers"
      />
    </div>
    <div
      class="w-100 row mx-0 new-baby-flowers"
      v-if="this.$route.params.params == 'new-baby-flowers'"
    >
      <img
        src="/img/new-baby-flowers.png"
        class="w-100"
        alt="new-baby-flowers"
      />
    </div>
    <div
      class="w-100 row mx-0 just-because-gifts"
      v-if="this.$route.params.params == 'just-because-gifts'"
    >
      <img src="/img/just-because.png" class="w-100" alt="just-because-gifts" />
    </div>
    <div
      class="w-100 row mx-0 get-well-flowers"
      v-if="this.$route.params.params == 'get-well-flowers'"
    >
      <img
        src="/img/get-well-flower.png"
        class="w-100"
        alt="get-well-flowers"
      />
    </div>
    <div
      class="w-100 row mx-0 romantic-flowers"
      v-if="this.$route.params.params == 'romantic-flowers'"
    >
      <img
        src="/img/romantic-flowers.png"
        class="w-100"
        alt="romantic-flowers"
      />
    </div>
    <div
      class="w-100 row mx-0 sympathy-flowers"
      v-if="this.$route.params.params == 'sympathy-flowers'"
    >
      <img
        src="/img/sympathy-flowers.png"
        class="w-100"
        alt="sympathy-flowers"
      />
    </div>
    <div
      class="w-100 row mx-0 same-day-sympathy-flowers"
      v-if="this.$route.params.params == 'same-day-sympathy-flowers'"
    >
      <img
        src="/img/same-day-sympathy-flower.png"
        class="w-100"
        alt="same-day-sympathy-flowers"
      />
    </div>
    <div
      class="w-100 row mx-0 sympathy-plants"
      v-if="this.$route.params.params == 'sympathy-plants'"
    >
      <img src="/img/sympathy-plant.png" class="w-100" alt="sympathy-plants" />
    </div>
    <div
      class="w-100 row mx-0 summer-flowers"
      v-if="this.$route.params.params == 'summer-flowers'"
    >
      <img src="/img/summer-flower.png" class="w-100" alt="summer-flowers" />
    </div>
    <div
      class="w-100 row mx-0 best-selling-flowers"
      v-if="this.$route.params.params == 'best-selling-flowers'"
    >
      <img
        src="/img/best-flower.png"
        class="w-100"
        alt="best-selling-flowers"
      />
    </div>
    <div
      class="w-100 row mx-0 best-selling-plants"
      v-if="this.$route.params.params == 'best-selling-plants'"
    >
      <img
        src="/img/best-selling-plant.png"
        class="w-100"
        alt="best-selling-plants"
      />
    </div>
    <div
      class="w-100 row mx-0 same-day-plant-delivery"
      v-if="this.$route.params.params == 'same-day-plant-delivery'"
    >
      <img
        src="/img/same-day-plant-delivery.png"
        class="w-100"
        alt="same-day-plant-delivery"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "images-container"
};
</script>

<style scoped></style>
