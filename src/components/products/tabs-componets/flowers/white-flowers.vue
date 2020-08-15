<template>
  <div class="red-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">White Flowers</p>
      <p class="text-justify fa-14 pb-5">
        The clean and elegant look of white flowers make them a perfect choice
        as a gift for formal occasion, as well as being a popular choice for
        men.
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
        White Flower Arrangements at S.U-Bouquets
      </p>
      <p class="text-justify fa-13 pb-2">
        White is the color of innocence, purity and reverence, and therefore can
        be consider a great color for zen flowers. Send white flower bouquets
        online from S.U-Bouquets wide selection of bouquets and live plants. White
        flowers are a popular choice for weddings because they traditionally
        symbolize purity and innocence. White flowers can also be combined with
        other flower colors and will complement any style or color of wedding
        dress. When you have white flower arrangements delivered from
        S.U-Bouquets, you can trust that they will arrive fresh and ready to
        bloom. Order gifts today. In addition to being traditional flowers for
        weddings and sympathy bouquets, you can find white flowers in many types
        of floral arrangements - from elegant bouquets of long-stemmed calla
        lilies, roses and iris to more casual potted gardens of blooming white
        gardenia or miniature roses in a rustic basket.
      </p>
      <p class="text-justify fa-13">
        You can count on S.U-Bouquets to deliver fresh white flower house plants
        that will delight just about anyone on their special day. When you want
        to send a fresh bouquet of white roses, lilies, gardenias or orchids, of
        course you think about S.U-Bouquets first. If someone you know would enjoy
        nurturing a pretty plant, look for a potted white azalea, miniature
        white rose basket, or elegant white orchid. Let dad know that you’re
        thinking of him on his special day with a gift of fresh Father’s day
        flowers or a plant from S.U-Bouquets.
      </p>
      <p class="text-justify fa-13">
        Sending a bouquet of fresh white lily flowers is a traditional way to
        express your sympathy for someone who is grieving. Although white
        lilies, both Asiatic and peace lilies, are traditional sympathy flowers,
        white roses, iris and dendrobium orchids are also appropriate to send to
        a funeral home or the family residence. But not all lilies are serious
        flowers. Delicate and fragrant, lily of the valley is the birthday
        flower of May and a cheerful reminder of spring. Delight a special
        someone with a gift of white rose flowers from S.U-Bouquets.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "white-flowers",
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
