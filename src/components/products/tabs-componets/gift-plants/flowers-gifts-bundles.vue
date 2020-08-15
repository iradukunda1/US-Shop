<template>
  <div class="flowers-gifts-bundles w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Flowers & Gift Bundles</p>
      <p class="text-justify fa-14 pb-4">
        If you are looking to wow someone for their birthday, anniversary, or
        some other occasion, look no further than S.U-Bouquets. We have a large
        selection of Flowers & Gift bundles to accommodate any budget or style.
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
    <div class="footer-content my-4">
      <p class="font-weight-bold py-3 fa-14">
        Flowers & Gift Packages
      </p>
      <p class="text-justify fa-13 pb-5">
        Ordering one of our flower and gift packages is a perfect way to send a
        message to someone. Whether you want to send chocolates and roses to
        your sweetheart, or a bouquet of yellow and white daisies with a card to
        your daughter, S.U-Bouquets has a flower and gift combo for anyone. On top
        of our large selection of flowers and gifts we have nationwide delivery
        and same day shipping options so you never have to miss a big milestone
        or special day in someone’s life. Our florist network is vast and can
        deliver a flower and gift bundle the same day as your order if you
        really need a fast option or a big moment slipped your mind. No matter
        the occasion or the need, S.U-Bouquets makes it easy to send flowers and
        gifts so order your flowers and gifts online today!
      </p>
      <p class="font-weight-bold py-3 fa-14">
        Best Selling Gifts Delivered
      </p>
      <p class="text-justify fa-13">
        From flowers to baskets of treats, pick the product that you’re loving,
        and we have the rest covered. Flowers are designed with your special
        moments in mind, as our goal is to inspire meaningful connections and
        delight your gift recipients. When selecting what type of delectable
        treats to offer, we choose only the best berries and baskets for your
        loved ones. Best selling gifts delivered come right from our florists,
        farm or suppliers, and shipped with care right to their doorstep. With
        S.U-Bouquets, you can count on us to make their occasion or day even
        more memorable with our collection of best sellers.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "flowers-gifts-bundles",
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
