<template>
  <div class="birthday-for-wife w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="font-weight-bold h3">Birthday Flowers for Your Wife</p>
      <p class="text-justify fa-14">
        A vibrant bouquet is the perfect birthday gift for any friend. Like a
        surprise celebration, it’ll bring a smile to your friend’s face and
        brighten their day (but unlike a party, these gifts are guaranteed to
        last 7 days!)
      </p>
    </div>
    <div
      class="birth-product-container row justify-content-center w-100 mx-0"
      v-if="products.length"
    >
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
      <p class="font-weight-bold h3 pb-2">
        Birthday Flowers and Gifts for Your Wife
      </p>
      <p class="text-justify fa-13">
        The one you’ve vowed to share your life with, the one who’s there for
        you through thick and thin, your wife, will have a birthday every year.
        How will you choose to celebrate the amazing woman she is when her next
        birthday comes along? With that in mind, S.U-Flowers has designed a
        collection of thoughtful gifts for that special lady in your life.
        Above, you’ll find an assortment of birthday flower bouquets we feel
        will hit the mark with your wife. Each represents an opportunity for you
        make an impression and a lasting memory.
      </p>
      <p class="text-justify fa-13 pt-2">
        Flowers are just the beginning of all the incredible gifts you will find
        here. From beautifully designed spa gift baskets and wine gift baskets
        to indulgent chocolate gift basketsand truffles, you know you will find
        the perfect gift for your special spouse. Whether your wife is a true
        romantic, outdoor lover or gourmet foodie, there’s something here for
        all of them. Just take a look at our incredible selection. We know you
        won’t be disappointed.
      </p>
      <p class="text-justify fa-13 pt-2">
        And speaking of romance, what could be more romantic than a bouquet of
        amazing long-stemmed roses. And you can trust that all of our flowers
        will arrive looking just as fresh and lovely as you expect. That’s
        because we choose only the best blooms to create our unique floral
        arrangements, and we deliver them at that peak of freshness right to
        their front door.
      </p>
      <p class="text-justify fa-13 pt-2">
        When choosing to send your wife a gift from S.U-Flowers, you should know
        that we stand behind a 100% satisfaction guarantee. Your gift may be
        delivered direct to your home, or if you choose to, surprise her at work
        by sending it to her office. Show her what a great husband you are, by
        selecting a birthday gift of beauty, fragrance, and class. Next time you
        want a gift that is sure to take her breath away, make S.U-Flowers your
        first and last stop.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "birthday-for-wife",
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
