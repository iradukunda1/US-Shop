<template>
  <div class="birthday-for-friend w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="font-weight-bold h3">Birthday Flowers for Friends</p>
      <p class="text-justify fa-14">
        Order indulgent birthday gifts for him when you run out of time and
        ideas. ProFlowers knows guys, and we’ve lined up fun and sophisticated
        birthday keepsakes, tools and decadent food baskets. Order today for
        same day, overnight, two day and scheduled delivery nationwide!
      </p>
    </div>
    <div
      class="birth-product-container row justify-content-center w-100 mx-0"
      v-if="products.length"
    >
      <div
        class="my-2 mx-2"
        v-for="(product, index) in products"
        :key="index"
        style="height: 20rem"
      >
        <card-template :item="product" :showOptions="false" />
      </div>
    </div>
    <empty-results v-if="!products.length" />
    <div class="footer-content mt-4">
      <p class="font-weight-bold h3 pb-2">
        Birthday Gift Ideas for Him
      </p>
      <p class="text-justify fa-13">
        Celebrating another cycle around the sun should be done in style no
        matter what age the man in your life is turning. Finding a thoughtful
        gift that embodies the joy he brings into the world may seem like an
        impossible task, but when you shop ProFlowers’ sprawling inventory of
        lush plants and decadent desserts, he’ll be smiling from ear to ear. Our
        collection of timeless birthday gifts for him will impress year after
        year
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";
export default {
  name: "birthday-for-mom",
  components: { EmptyResults, cardTemplate },
  data() {
    return {
      products: products.products
    };
  },
  mounted() {
    this.$emit("itemsLength", this.products.length);
  }
};
</script>

<style scoped lang="scss"></style>
