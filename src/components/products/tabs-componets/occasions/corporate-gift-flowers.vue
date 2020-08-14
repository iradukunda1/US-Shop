<template>
  <div class="corporate-gift-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Business Flowers</p>
      <p class="text-justify fa-14">
        Corporate gifts can be perfectly appropriate, and still perfectly
        thoughtful. Our bouquets, treats, and personalized gifts will show your
        genuine appreciation for anyone in your workplace.
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
        Office Desk Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower For Teachers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Administrative Assistant Day Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Plant As Corporate Gift
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Professional Gift Basket Ideas
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Holiday Corporate Gift Ideas
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold mb-0 pb-2 h4">Corporate Gifts</p>
      <p class="text-justify fa-13">
        Looking for some great corporate gifts? Whether your client has a sleek
        design taste that you can complement with an orchid gift or your boss's
        style reflects the elegant brilliance of a lush tropical evergreen,
        ProFlowers has the right choices for your corporate gifting
        opportunities. When you need a little guidance in finding just the right
        corporate gift for a specific person or occasion, let ProFlowers help
        you select and send something perfect for all of your important business
        clients. Whether it’s a selection from our gorgeous selection of flowers
        and plants or a gift basket loaded with all kinds of delicious gourmet
        items, trust us to deliver your gifts nationwide and on-time.
      </p>
      <p class="fa-13">
        Looking for the perfect gift for a desk or office, ProFlowers offers a
        selection of low light plants which can thrive indoors.
      </p>
      <p class="fa-13">
        At ProFlower we know that when it comes to corporate gifts, quality and
        timing are at the top of your list. Know that when you order your
        corporate gifts from ProFlowers, your colleagues and partners will
        receive the freshest flowers and highest quality gourmet food items
        available. All of our flowers and gift baskets come with freshness
        guarantees, so rest assured they will be incredible.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "corporate-gift-flowers",
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
