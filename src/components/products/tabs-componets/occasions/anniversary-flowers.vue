<template>
  <div class="anniversary-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="font-weight-bold fa-14">Anniversary Flowers</p>
      <p class="text-justify fa-14">
        Mark the milestones with anniversary flowers or personalized gift that
        shows you still choose them.
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
    <div class="footer-content mt-4">
      <p class="font-weight-bold fa-14 pb-2">
        Anniversary Flowers and Romantic Gifts
      </p>
      <p class="text-justify fa-13">
        Happy Anniversary! It’s amazing how these two simple words can describe
        a lifetime of memories and love shared between two people. With this in
        mind, we at SU-Bouquets created an exceptional and unique gift line for
        anniversary flowers and gifts. From beautiful engagement flowers,
        wedding flowers or anniversary flower, we’re there for you all the way
        to help celebrate your special love. A gorgeous bouquet of fresh and
        fragrant flowers can say so much on an anniversary. This is why we
        created our unique collection of anniversary blooms to be the best of
        the best. Choose from romantic red roses and baby’s breath to elegant
        white roses and sweet scented lilies. Whatever your style, you will find
        it here. We even have lovely anniversary cards with living flowers
        inside--a smaller yet just as romantic gesture to pair with your other
        anniversary gifts
      </p>
      <p class="text-justify fa-13 pt-4">
        Ladies, don’t forget to send anniversary gifts to your husband! Your
        husband goes the extra mile on your special day, so you should too. Send
        him a masculine bouquet of white orchids or romantic red roses. If
        flowers aren’t his style, choose one of our many handsome plant gift
        options. SU-Bouquets also carries all kinds of creative gourmet food and
        gift baskets. After all, what’s the old saying about food being the way
        to a man’s heart? Our gourmet food line includes everything from our
        luscious hand-dipped chocolate covered strawberries to our delicate and
        rich chocolate truffles, cookies and cakes or how about a combination of
        flowers and chocolate. Or choose from one of our gift baskets. We offer
        anything from fresh organic fruit to superior wine and spa baskets.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "anniversary-flowers",
  components: { cardTemplate },
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
