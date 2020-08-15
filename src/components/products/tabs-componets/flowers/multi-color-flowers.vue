<template>
  <div class="multi-color-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Mixed Colored Flowers & Bouquets</p>
    </div>
    <div class="birth-product-container row justify-content-around w-100 mx-0">
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
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
name: "multi-color-flowers",
  components: { EmptyResults, cardTemplate },
  data() {
    return {
      products: products.products
    };
  },
  mounted() {
    this.$emit("itemsLength", this.products.length);
  }
}
</script>

<style scoped>

</style>