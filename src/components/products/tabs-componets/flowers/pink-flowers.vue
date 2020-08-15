<template>
  <div class="pink-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Pink Flowers Delivered</p>
      <p class="text-justify fa-14 pb-5">
        From roses to lilies, flowers look great in pink. Find the pink flower
        bouquet that expresses your sentiments, from the S.U-Bouquets pink flowers
        collection.
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
    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Lavender Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Purple Flower Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Light Pink Tulips
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Yellow Flower Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Colorful Flower Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Orange Flower Arrangement
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        White Flower Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        White Tulip Flower Arrangement
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Purpel Iris Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Red Arrangement Flower
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3 py-4 font-weight-bold">
        Pink Flowers Delivered
      </p>
      <p class="pb-3 font-weight-bold fa-14">
        Pink Flower Bouquets and Arrangements
      </p>
      <p class="text-justify fa-13 pb-2">
        Pink flower bouquets are a beautifully spirited way to express
        gratitude, affection, and warm benevolence. Their sprawling blooms and
        diverse shapes ensure each and every arrangement is a special gesture.
        S.U-Bouquets’ collection of pink flower bouquets are gorgeous combinations
        of blush pinks, fuschias, magentas, and corals. Our fresh cut stems and
        potted blooms are the perfect ideas for any occasion.
      </p>
      <p class="py-3 font-weight-bold fa-14">
        What are the Types of Pink Flowers?
      </p>
      <p class="text-justify fa-13 pb-2">
        A single flower is worth more than a thousand words, so a bouquet full
        of fresh-cut flowers speaks volumes. Pink flowers are representative of
        many charming characteristics. They embody admiration, adoration, love,
        femininity, grace, and elegance. Curious to know what our most popular
        pink flower stems signify? Use this helpful guide before making your
        final pink flower arrangement selection.
      </p>
      <ul class="mb-2">
        <li class="fa-13 pb-3">Roses: Love, passion, and purity</li>
        <li class="fa-13 pb-3">Carnations: Endless love and good luck</li>
        <li class="fa-13 pb-3">Calla lilies: Life and fertility</li>
        <li class="fa-13 pb-3">Gerbera daisies: Innocence and cheerfulness</li>
        <li class="fa-13 pb-3">Peonies: Good fortune and happy marriage</li>
        <li class="fa-13 pb-3">Alstroemerias: Friendship and devotion</li>
        <li class="fa-13 pb-3">Orchids: Luxury, beauty, and strength</li>
      </ul>
      <p class="text-justify fa-13">
        Whether you’re looking for an arrangement of pink roses for a thoughtful
        anniversary gift for her, or a vibrant bouquet of pink lilies to
        celebrate the birth of a new baby, S.U-Bouquets has everything you’ll need
        to ring the right feeling in.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        When to Send Pink Flowers
      </p>
      <p class="text-justify fa-13 pb-4">
        Pink flowers are stellar choices for a number of different occasions.
        From wedding anniversaries to birthday surprises, there’s always a good
        reason to order pink floral arrangements. A beautiful bunch of daisies
        makes for a thoughtful graduation gift while a potted mini bush of pink
        roses is an excellent gift for a green thumb celebrating a milestone
        birthday. No matter what special occasion is next on your calendar,
        choose S.U-Bouquets’ pink flower arrangements to make the day special!
        From pink and white flower bouquest.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "pink-flowers",
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
