<template>
  <div class="all-plants w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Decorative Plants</p>
      <p class="text-justify fa-14 pb-4">
        House plants make an excellent gift, whether for a special occasion or
        for no reason at all. They’re long lasting and easy to care for, and
        with our wide assortment you’re sure to find one perfect for anyone on
        your list.
      </p>
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
    <div class="footer-content mt-4">
      <p class="h3 pb-2">Send Plants to Anyone with S.U-Bouquets</p>
      <p class="text-justify fa-13 pb-2">
        Nothing brightens a home or office quite like fresh plants. People order
        plants online every day to relieve stress, purify the air, sleep better,
        improve concentration and productivity, make an aesthetic addition, and
        to add life to a space. From beginners to plant lovers, we have a wide
        variety of plants available for delivery.
      </p>
      <p class="fa-14 font-weight-bold mt-5 py-2">
        Don’t Know Which Plant to Send?
      </p>
      <p class="text-justify fa-13 py-4">
        If you’re sending to a beginner or someone who has just moved into their
        new apartment or home, send the pothos plant. They do well in a variety
        of light conditions and are champions at removing toxins from the air.
        They also come in a variety of sizes so your recipient can have a small
        pothos in the office and a larger one in the bedroom.
      </p>
      <p class="text-justify fa-13">
        Another easy-to-care for indoor plant that we have available for
        delivery is the rubber tree. It’s a popular houseplant because of its
        waxy leaves and larger-than-life appearance. Put them in a bright room
        shielded by a sheer curtain and it will be golden.
      </p>
      <p class="fa-14 font-weight-bold mt-5 py-2">
        Send a Plant Today
      </p>
      <p class="text-justify fa-13 py-4">
        From tiny succulents to big floor plants, whatever plant you send will
        sure make a statement and add some life to any space.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "all-plants",
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

<style scoped></style>
