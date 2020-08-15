<template>
  <div class="gerbera-daisies w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Gerbera Daises</p>
      <p class="text-justify fa-14 pb-4">
        Bouquets & Arrangements - There’s nothing quite as cheerful as sending
        daisies: When you gather up a bunch and arrange them in a colorful
        bouquet, it’s like delivering a box of sunshine.
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
        Carnation Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Chrysanthemum Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Buy Azaleas
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Tulip Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        sunFlower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        sunFlower Arrangement
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Orchid Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Irises Bouquets
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold fa-14 py-4">
        Send Gerbera Daisy Flower Arrangements with S.U-Bouquets
      </p>
      <p class="text-justify fa-13 pb-2">
        Let S.U-Bouquets be your headquarters for brightly colored gerbera daisy
        flower arrangements. Large selection, easy online ordering and fast
        delivery. What is it about gerbera daisies that can bring a smile to
        even the crankiest among us? Gerbera daisies are close cousins to
        sunflowers and can be found in many bright colors, including neon pink,
        snowy white, sunny yellow, precious peach, luscious lavender and regal
        red. The center of the flower can be almost any color and often a single
        flower will have petals of different colors, which adds even more fun to
        any flirty bouquet of daisies.
      </p>
      <p class="text-justify fa-13 pt-2">
        Looking for a gift that radiates happiness and good cheer? Send a fresh
        arrangement of yellow, white and pink daisies from S.U-Bouquets. Did you
        know that gerbera daisies are the fifth most popular flower for
        gift-giving, trailing only roses, carnations, chrysanthemums and tulips?
        It’s hard to find a holiday or special event that wouldn’t be made more
        fun with a few bouquets of gerbera daisies spread around the room.
        Here’s another fun fact about gerbera daisies. In addition to their
        popularity as a cut flower, gerberas are also a welcome addition to
        gardens because of their ability to attract bees, butterflies and birds
        to the garden while at the same time keeping wild deer out of the
        garden. Who knew? A gift of gerbera daisy blooms is a sweet way to say
        thanks, have a happy day, and much more. Daisies symbolize childhood
        innocence, simplicity and joy, making them a wonderful gift on just
        about any occasion. Sending a cheerful arrangement of gerbera daisies is
        a thoughtful way to say thank you, good luck and happy birthday, and
        almost any heartfelt sentiment. Honor your mom on her special day with a
        joyful arrangement of fresh Mother's Day daisies from S.U-Bouquets.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "gerbera-daisies",
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
