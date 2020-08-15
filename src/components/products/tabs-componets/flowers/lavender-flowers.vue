<template>
  <div class="lavender-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Larevender Flowers</p>
      <p class="text-justify fa-14 pb-5">
        Send Lavender Bouquet. Perhaps as an accent, or maybe in a full bloom,
        lavender flowers make a wonderful expression of love to their recipient.
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
  </div>
    <div class="footer-content mt-4">
      <p class="h3 py-4 font-weight-bold">
        Lavender Flowers and Bouquets for any Occasion
      </p>
      <p class="text-justify fa-13 pb-2">
        Mysterious and regal, the color purple comes from the combination of
        cool blue and fiery red. In nature, you can find flowers in many shades
        of purple -- from delicate lavenders and violets to dark purples and
        burgundies. Some of the most popular cut flowers in this color palette
        are lavender carnations, purple irises and orchids. You can also buy
        potted blue hydrangea plants that will add a pop of lavender blue color
        to indoor rooms. S.U-Bouquets makes it easy for you to have lavender
        flower arrangements delivered for just about any special occasion.
      </p>
      <p class="text-justify fa-13">
        Send lavender flower bouquets online and brighten someone’s day.
        S.U-Bouquets offers easy ordering, great personal service, and fast
        delivery in the U.S. Fragrant and colorful, a pretty bouquet of lavender
        or light purple carnations is an appropriate gift for almost any
        occasion. For a dramatic effect, order a carnation bouquet that is a mix
        of light and dark shades in the same color palette. In addition to their
        bright colors, carnations are known for their dainty ruffled petals and
        a spicy fragrance reminiscent of sweet cloves. Sending elegant lavender
        lily flowers is a lovely way to tell someone you care.
      </p>
      <p class="text-justify fa-13">
        Looking for gifts of lavender flowering house plants? Trust S.U-Bouquets
        to deliver purple teacup orchids or flowering baskets. It’s easy to
        bring spring color and freshness indoors when you give someone a pretty
        potted garden as a gift. For people who love the color lavender and
        other shades of purple, a pretty lavender azalea plant, star hyacinth
        bulb garden, or sophisticated orchid plant is a guaranteed crowd
        pleaser. There are many types of lavender flowers and you can find the
        most popular ones in colorful bouquets from S.U-Bouquets. Elegant lavender
        dendrobium orchids symbolize feelings of enduring love and rare beauty
      </p>

    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "lavender-flowers",
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
