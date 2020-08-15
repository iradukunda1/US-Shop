<template>
  <div class="azalea-plants w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Azalea Plant Delivery</p>
      <p class="text-justify fa-14 pb-4">
        Full and colorful, Azalea plants make great housewarming gifts, a warm
        addition to office décor, or just a great gift in general for someone
        who appreciates natural beauty. Order one today at S.U-Bouquets the flower
        Pros.
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
        Tulip Flowers
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
        Iri Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Gerbera Daisies
      </a>
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
        Chrysanthemum Flowers
      </a>
    </div>
    <div class="footer-content my-5">
      <p class="h3 pb-2">Sending Azalea Plants with S.U-Bouquets</p>
      <p class="text-justify fa-13 pb-2">
        Known today in many a gardening club (and in the majority of climates,
        too!) as the "Royalty of the Garden," the breath-taking Azalea has made
        its mark quite clear - it’s the eye-catching centerpiece or focal point
        of numerous gardens across the country, as well as a house favorite of
        countless florists (although you won’t hear them admit it out loud)!
        These delightful and easy-to-care-for flowering house plants are found
        country-wide in many outdoor and indoor garden designs.
      </p>
      <p class="text-justify fa-13 pb-2">
        Popular with outdoor gardeners and landscape architects alike, the
        "re-blooming trait" is being bred into other Azalea species more
        commonly in the 21st century, mostly for autumn blooming purposes in
        colder areas too! Blooms usually last for up to two weeks, and in warm
        climates like the Deep South, some potted Azaleas even will then bloom
        again later in the fall! This means, you can send a blooming Azalea
        plant to a loved one anywhere in the U.S. and rest assured your lovely
        gift will provide long-term love!
      </p>
      <p class="text-justify fa-13 pb-2">
        Many flower and plant lovers wonder if they can take a floral gift and
        use it in their personal garden. The answer is a resounding, "Yes!" If
        you receive, for example, an Azalea Bonsai, as a gift, you can
        definitely "strut its stuff" by featuring it in your home garden!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "azalea-plants",
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
