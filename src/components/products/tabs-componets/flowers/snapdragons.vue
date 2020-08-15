<template>
  <div class="snapdragons w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Snapdragons from S.U-Bouquets</p>
      <p class="text-justify fa-14 pb-5">
        Snapdragons add dimension, beautify, texture, and height to any bouquet.
        Whether they’re in a bouquet on their own or paired with others,
        snapdragons ruffled blooms complement a variety of florals. Get your
        snapdragon bouquets delivered from a florist or our farms to their
        doorstep from S.U-Bouquets today.
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
      <p class="fa-14 py-4 font-weight-bold">
        Send Snapdragon Bouquets to Make Their Day
      </p>
      <p class="text-justify fa-13 pb-2">
        Eye-catching and beautiful, snapdragon flowers stand about the rest.
        Quite literally, actually. This tall, spear-like flower is known for
        adding gorgeous height and dimension to a variety of bouquets. From
        their elegant flower shape to the array of colors this flower comes in,
        get snapdragons delivered right to their door, home, or office from our
        collection.
      </p>
      <p class="font-weight-bold fa-14 pb-2 mb-0">
        Snapdragon Flower Meaning
      </p>
      <p class=" fa-13 py-3">
        Snapdragons have always been a symbol of grace, strength, and charm.
        While this flower may appear in many of our bouquets (can you blame
        us?), it’s anything but ordinary. This stunning flower has been
        associated with mafic since ancient Greece and comes in many shades.
        Purple snapdragons are associated with spirituality, and yellow
        snapdragons are associated with happiness. For romance, send a red
        snapdragon bouquet to your beloved to capture passion and positive
        energy. White snapdragons symbolize purity, grace, and innocence when
        they’re in bloom. You can find all of these colors in our assortment of
        snapdragons for sale.
      </p>
      <p class="font-weight-bold fa-13 pb-2 mb-0">
        Snapdragons Delivered from S.U-Bouquets
      </p>
      <p class="fa-13 pt-3">
        There’s nothing quite like opening your door to find a gorgeous bouquet
        waiting for you. Bring them happiness by sending a snapdragon bouquet
        right to them. With our collection of snapdragons online, we make it
        easy to delight your loved ones, whether they’re near or far. Our
        selection of snapdragon bouquets comes freshly arranged either by one of
        our local florists or from one of our many farms with high-quality
        flowers. Send a snapdragon flower arrangement from S.U-Bouquets right to
        their door today!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "snapdragons",
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
