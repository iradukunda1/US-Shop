<template>
  <div
    class="limited-edition-collection w-100 position-relative pt-2 pl-5 pr-5"
  >
    <div class="header-content">
      <p class="pb-2 h2">Here’s to Her Collection</p>
      <p class="text-justify fa-14 pb-4">
        Fresh from the farm & abundant with blooms, our collection is designed
        to celebrate amazing woman. We’ve teamed up with our favorite female
        bloggers to create a line of bouquets to celebrate every moment.
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
    <empty-results v-if="!products.length"/>
    <div class="footer-content mt-4">
      <p class="text-justify fa-13 pb-2">
        Fresh bouquets are a gift that always brings a smile. Our brand-new
        collection is partnered with different influencers and bloggers to make
        a gorgeous collection of bouquets designed to celebrate life’s special
        moments. Each bouquet has a variety of flowers, colors and texture that
        is inspired by amazing women who do amazing things every day. We love
        delighting everyone through fresh flowers, and this collection
        exemplifies that goal!
      </p>
      <p class="text-justify fa-13">
        With this exciting new partnership, working with different creators and
        influencers in communities across the country to bring everyone closer
        together. We are excited to send love to everyone in your life, whether
        they are near or far from you. What better way to celebrate them than
        with a bouquet designed specially to delight them? Each bouquet was
        carefully designed, curated and freshly cut to wow your gift recipient.
      </p>
      <p class="text-justify fa-13">
        Whether their style is farmhouse chic, rustic, classic or charming, a
        fresh flower bouquet from our Here’s to Her collection is sure to make
        them feel special. The bouquets are cut right from the farm and
        delivered right to their door. It has never been easier to pick out the
        perfect gift. Simply shop for a bouquet you think they’ll love, and we
        have the rest covered. With us, we guarantee a one of a kind and
        thoughtful experience.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "limited-edition-collection",
  components: {EmptyResults, cardTemplate },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.$emit("itemsLength", this.products.length);
  }
};
</script>

<style scoped></style>
