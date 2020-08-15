<template>
  <div class="best-selling-gifts w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Best Selling Gifts</p>
      <p class="text-justify fa-14 pb-4">
        It’s no wonder these gifts are best sellers! Loved by all, our most
        popular gifts are perfect for every special person in your life. With
        gorgeous flowers and delicious treats, our collection of best selling
        gifts are curated to delight for any occasion.
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
        Make Their Day With a Gift
      </p>
      <p class="text-justify fa-13 pb-5">
        Flowers, gifts, and goodies! Check out the gifts that have reached our
        ‘best seller’ status. When picking out a gift for your loved ones, our
        collection of the most popular items on our website are perfect for
        celebrating all of their special occasions. From birthdays, just because
        and everything in between, our selection of best selling gifts is
        guaranteed to delight. We carefully curated each item to offer you a
        wide variety of best selling gifts online for an smooth shopping
        experience. Our floral bouquets are always one-of-a-kind, so it’s a
        fantastic choice to send a message of love. Whether they are cut fresh
        at the farm or designed by an expert local florist, your bouquet always
        has freshness and quality in mind. Pair your beauty of a bouquet with a
        basket or box of chocolate to make the sentiment memorable.
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
        S.U-Bouquets, you can count on us to make their occasion or day even more
        memorable with our collection of best sellers.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "best-selling-gifts",
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
