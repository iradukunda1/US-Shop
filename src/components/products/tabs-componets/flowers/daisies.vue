<template>
  <div class="daisies w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Daisy Bouquets from S.U-Bouquets</p>
      <p class="text-justify fa-14 pb-4">
        Sweet yet simple, daisies bring smiles for days! These gorgeous flowers
        make a subtle statement in any bouquet they’re placed in, with their
        iconic petal shape and accented center. For the perfect way to brighten
        their mood, send them a gorgeous bouquet of daisies today.
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
        Send Daisy Flower Bouquets to their Door
      </p>
      <p class="text-justify fa-13 pb-2">
        Make their daisy with a whole bouquet of these gorgeous beauties.
        There’s something about this sweet bloom that just radiates happiness.
        It may be their bright colors or how these sun-kissed blooms always put
        their best petal forward. Daisy flowers bring a smile to everyone’s face
        as soon as they arrive at their doorstep, home, or office. The best way
        to brighten someone’s day is with our collection of daisies online.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        Make Them Happy with a Daisy Bouquet
      </p>
      <p class="text-justify fa-13 pt-2">
        Like most flowers, daisy bouquets have different meanings based on their
        unique colors. The shared meaning among all daisy flower is innocence,
        purity, and true love. This flower has such a powerful impact, its move
        from the blooming gardens to our vocabulary, with daisy flower saying
        like “oppy daisy” or “whoops-a-daisy” when someone makes a mistake or
        trips up.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        Daisy Bouquets Delivered
      </p>
      <p class="text-justify fa-13 pt-2">
        Unsure what bouquet to send them? We have a vast collection of daisies
        for sale, so there’s plenty of options to choose from to find their
        favorite bouquet. If they like everything colorful, pick out a bouquet
        of bright and bold gerbera daisies to delight them. If they love an
        array of texture, our mixed daisy bouquets come with plenty of blooms
        that complement each other. Daisy may be their favorite flower, and who
        can blame them?! Get a bouquet of daisies delivered right to their door
        to make it super special. For occasions like birthday, anniversaries,
        and everything in between, send a thoughtful gesture with a daisy
        bouquet from S.U-Bouquets.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "daisies",
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
