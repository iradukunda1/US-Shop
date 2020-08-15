<template>
  <div class="potted-rose-plants w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Colorful Flower Delivery</p>
      <p class="text-justify fa-14 pb-4">
        When you send potted roses, you send a living gift that can last for
        years. Our potted roses come in all shapes and sizes, yet they have one
        thing in common: they deliver lasting smiles.
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
        Potted Plant Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        18 Rose Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Multicolor Rose Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Colorful Roses
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Orange Rose Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Spray Roses Bunch
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="h3 pb-2">Potted Roses</p>
      <p class="font-weight-bold py-3 fa-14">
        Potted Roses Delivered Throughout the US
      </p>
      <p class="text-justify fa-13 pb-5">
        S.U-Bouquets' Potted Roses are just too cute! Our miniature roses,
        artistically arranged in stylish vases or creative pots, are the
        prettiest potted roses around. With a variety of pot and basket styles
        to choose from, our potted roses make a wonderful gift idea for every
        occasion. Whether you’re looking for a light and colorful expression of
        love or a lovely gift to simply brighten a loved one’s day, roses are
        the perfect choice. For something really spectacular, pair your flower
        gift with a box of rich and creamy truffles or chocolate dipped
        strawberries delivered.
      </p>
      <p class="text-justify fa-13">
        Send potted roses to all your rose loving friends and family. They will
        appreciate the beauty and color of this gift that keeps giving. All of
        our amazing rose and other potted plants come with helpful instructions
        to guide the recipient in the proper watering, sun exposure and overall
        maintenance of their new plant. These potted roses are grown to last.
        S.U-Bouquets’ potted roses are fresh and arrive bright and beautifully,
        truly a notch above the rest. Send S.U-Bouquets' Potted Roses they're sure
        to brighten up the home. For a really romantic gift option, send one of
        our unique assortments of 18 roses. Regardless of whether you choose a
        bouquet of roses, a gorgeous potted variety or something completely
        different, your recipient is sure to love any of our incredibly fresh
        flowers.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "potted-rose-plants",
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
