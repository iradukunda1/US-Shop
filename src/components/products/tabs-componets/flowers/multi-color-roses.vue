<template>
  <div class="multi-color-roses w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Multicolor Roses</p>
      <p class="text-justify fa-14 pb-4">
        The bright colors of our assorted rose bouquets are perfect for any
        occasion.
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
        18 Red Roses
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Rose Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Colorful Roses
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Orange Rose
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
        Small Spray Roses
      </a>
    </div>

    <div class="footer-content mt-4">
      <p class="h3 mb-0 pb-1 font-weight-bold">
        Multi-Colored Roses Delivered
      </p>
      <p class="text-justify fa-13 pb-2">
        Roses come in such a great variety of shades and hues, and when you
        gather all of them together, they make a radiant bouquet. Multi-color
        roses are a classic way to show affection and admiration to those
        closest to you. With five brilliant hues, these colorful roses are great
        ways to celebrate birthdays, anniversaries, as housewarming flowers, or
        show hopes for new opportunities. What better way is there to show your
        devotion and love than an order of gorgeous roses?
      </p>
      <p class=" fa-13 text-justify">
        In a bouquet of multi-colored roses, each rose color has its own special
        meaning—white roses are for innocence, different shades of pink show
        appreciation and admiration, orange means enthusiasm, and yellow roses
        symbolize a happy friendship. By bundling all of these colors together,
        a vase of multi-color roses communicates all of these emotions and
        ideas. While it is well known that a red rose symbolizes love and
        beauty, combinations of different colors can signify entirely different
        concepts. For example, pairing the classic red rose with white roses
        demonstrates a desire for unity. When yellow roses are mixed into red
        roses, the sender is communicating joy. Any celebration can be
        brightened by these bouquets of roses, since they convey the best
        emotions of any relationship.
      </p>
      <p class="fa-13 pb-2 text-justify">
        Roses of all colors are at their most beautiful in the spring, summer,
        and fall, but they make an exquisite surprise present for everyone at
        any time of the year. With their delicate fragrance and bright petals,
        multi-color roses are an exquisite way to bring elegance and beauty to
        your loved ones' lives. Order a dozen to show commitment to friendship,
        or 24 to let them know that they are always on your mind. A gift of
        monthly roses will be a continual reminder of your love and affection.
        With proper care, a vase of roses should last for at least a week. A
        bunch of roses are a classic gift that anyone will appreciate, so order
        a dozen or two online today!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "multi-color-roses",
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
