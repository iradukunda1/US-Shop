<template>
  <div class="calla-lilies w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Calla Lilies</p>
      <p class="text-justify fa-14 pb-4">
        Why do Calla lilies intrigue so? Is it their sleek bloom made up of one,
        seamless rolled petal? Is it the graceful upward-reaching leaves? Send
        Calla lilies that always demand attention, no matter the reason. Order
        today!
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
        Money Tree Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Order Rose Plants Online
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Succulents
      </a>
      <a
          class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
          href="javascript:;;"
      >
        Indoor Plant Online
      </a>
      <a
          class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
          href="javascript:;;"
      >
       Peruvian Lily Bouquets
      </a>
      <a
          class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
          href="javascript:;;"
      >
       Pink Lily Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Orange Colored Lilies
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="h3 pb-2">Calla Lilies</p>
      <p class="text-justify fa-13 pb-2">
        With their delicate bell shape and vibrant color varietals, Calla lily
        bouquets make for an especially beautiful and meaningful gift for anyone
        on your gift list. Our Calla lily flower arrangements are meticulously
        designed and feature Calla lilies complemented by multicolored Stargazer
        lilies, stunning Tiger lilies, and lush greenery to make the perfect
        gift for a loved one, or even yourself!
      </p>
      <p class="font-weight-bold fa-14 py-3">What do Calla lilies symbolize?</p>
      <p class="text-justify fa-13 mb-0">
        Calla lilies have many meanings depending on the color and individual
        sending them—but the most common meaning for Calla lilies is purity and
        holiness, which makes a white Calla lily bouquet a great choice for new
        baby flowers, religious celebrations, and sympathy gifts.
      </p>
      <p class="text-justify fa-13 mb-0">
        Each Calla lily color holds their own meaning, which means they’re an
        excellent option for just about any occasion, or even just-because! To
        help you choose the best Calla lily bouquet for your order, here are
        some of the different meanings Calla lily flowers hold:
      </p>
      <p class="fa-13 mb-0">
        . <span class="font-weight-bold pl-3">Pink Calla lilies </span>symbolize
        appreciation and admiration
      </p>
      <p class="fa-13 mb-0">
        .
        <span class="font-weight-bold pl-3"> Purple Calla lilies</span>represent
        charm and passion
      </p>
      <p class="fa-13 mb-0">
        .
        <span class="font-weight-bold pl-3"> Yellow Calla lilies </span>express
        gratitude
      </p>
      <p class="font-weight-bold fa-14 py-3">
        What other flowers pair well with Calla lilies?
      </p>
      <p class="text-justify fa-13 mb-0">
        Calla lilies are a great foundational flower, which is why they’re
        included in many of our flower bouquets. If you’re going for a more
        subdued look, a Calla lily bouquet with blush tulips would make for a
        fantastic centerpiece. Or, for a bolder statement, our Deluxe Smiles &
        Sunshine Calla lily arrangement with multi-colored roses would be a
        bright and stylish choice. From Calla lily delivery to sweets and gifts,
        S.U-Bouquets has all of your gifting needs covered.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        What occasions are the best to gift Calla lilies?
      </p>
      <p class="text-justify fa-13 mb-0">
        Calla lilies are great for any special occasion, or even just to
        brighten up a room when there’s no occasion at all! From birthdays and
        anniversaries to thanks and sympathies, our selection of Calla lily
        arrangements is sure to get your message across just beautifully. Plus,
        buy Calla lilies from S.U-Bouquets and you can count on fresh flowers for
        seven days—so you and your loved ones can enjoy a gift that keeps on
        giving.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "calla-lilies",
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
