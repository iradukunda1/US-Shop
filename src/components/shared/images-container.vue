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
  </div>
</template>

<script>
export default {
  name: "images-container"
};
</script>

<style scoped></style>
