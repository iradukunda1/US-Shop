<template>
  <div class="red-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Red Flower Arrangements</p>
      <p class="text-justify fa-14 pb-5">
        From our popular red and white velvet roses to our assorted tulips
        bouquet, red flowers speak of love. Send your love with a fresh bouquet
        of fresh red flowers from S.U-Bouquets today.
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
        Red Flowers from S.U-Bouquets
      </p>
      <p class="pb-3 font-weight-bold fa-14">
        Red Flower Bouquet Delivery
      </p>
      <p class="text-justify fa-13 pb-2">
        Brighten up someone’s day by ordering a gorgeous red flower bouquet.
        S.U-Bouquets makes it easy to send red flowers anywhere across the
        country to that special someone on your mind. Red flowers exude love,
        romance, and timeless charm. They’re beautiful signs of affection that
        look just as exquisite as they smell. From classic long-stemmed red
        roses to sprawling arrangements featuring daisies, carnations, and
        alstroemerias, our collection of red flower bouquets are a beauty to
        behold.
      </p>
      <p class="py-3 font-weight-bold fa-14">
        How Long do Red Flower Arrangements Last?
      </p>
      <p class="text-justify fa-13">
        Though we’d like for fresh-cut flowers to live forever, most flower
        arrangements last up to two weeks before losing their freshness. With
        proper care and attentive watering and replacing, red flower bouquets
        can survive well beyond Valentine’s Day and anniversary date
        celebrations. Use this life-guide to see how long you can expect your
        flower arrangement to last based on flower type.
      </p>
      <p class="fa-14 font-weight-bold pb-3">7-10 days:</p>
      <ul class="mb-3">
        <li class="fa-13 pb-3">Tulips</li>
        <li class="fa-13 pb-3">Daisies</li>
        <li class="fa-13 pb-3">Irises</li>
        <li class="fa-13 pb-3">Hydrangeas</li>
        <li class="fa-13 pb-3">Lilies</li>
        <li class="fa-13 pb-3">Sunflowers</li>
        <li class="fa-13 pb-3">Roses</li>
      </ul>
      <p class="fa-14 font-weight-bold pb-3">10-14 days:</p>
      <ul class="mb-3">
        <li class="fa-13 pb-3">Alstroemerias</li>
        <li class="fa-13 pb-3">Dahlias</li>
        <li class="fa-13 pb-3">Gerberas</li>
        <li class="fa-13 pb-3">Birds of Paradise</li>
      </ul>
      <p class="fa-14 font-weight-bold pb-3">14+ days:</p>
      <ul class="mb-3">
        <li class="fa-13 pb-3">Carnations</li>
        <li class="fa-13 pb-3">Orchids</li>
        <li class="fa-13 pb-3">Freesias</li>
        <li class="fa-13 pb-3">Chrysanthemums</li>
      </ul>
      <p class="text-justify fa-13 pb-2">
        To ensure your fresh-cut colorful flowers enjoy many days of blooming
        life, we recommend re-cutting stems every time you replace the vase
        water. This should be about every other day. We also recommend feeding
        your flowers the included flower food to give your pretty blossoms the
        nutrients they need. Finally, keep your red flowers out of direct
        sunlight to preserve their vibrant coloring.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        What do Red Flowers Signify?
      </p>
      <p class="text-justify fa-13 pb-4">
        Whether you plan on ordering a bouquet of red flowers as a sweet
        anniversary present or a bouquet of long-stem roses as thoughtful thank
        you flowers, the significance of the red flower always rings true. Red
        flowers are most commonly associated with elements of love, passion,
        desire, courage, and respect.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        Flowers for Every Occasion
      </p>
      <p class="text-justify fa-13 pb-4">
        No matter who’s next on your to-buy list or what occasion you have
        coming up on your calendar, choosing S.U-Bouquets for your red flower
        delivery ensures you’re getting the most bang for your buck. From
        graduations and baby showers to recitals and retirement parties, our
        vast collection of beautiful arrangements are the bright and colorful
        piece that tie everything all together!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "red-flowers",
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
