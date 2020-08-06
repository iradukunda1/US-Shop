<template>
  <div class="romantic-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Love Flowers & Gifts</p>
      <p class="text-justify fa-14">
        While some romantic moments simply can’t be planned, others can be
        delivered to her doorstep on your day of choice. Our romantic flowers
        and personalized gifts will remind her that celebrating your feelings
        for each other doesn’t require a special occasion.
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
    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flesh New Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Unique Flower Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Appreciation Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Best Floral Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower For You
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sweetest Day Delivery
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3">Romantic Flowers Make Memories</p>
      <p class="text-justify fa-13 pb-2">
        Want to make your significant other smile, laugh, cry and feel happy all
        at the same time, but not sure how to do it? You want it to be a moment
        she will remember forever. Well, SU-Bouquets is here to help. You’re in
        great hands. No matter what the occasion, a birthday, flowers for
        engagement, an anniversary or Valentine's Day, SU-Bouquets has you
        covered in the romantic flowers and gifts department! Choose from tons
        of gorgeous bouquets of romantic flowers, including incredible roses
        that any girl would go gaga over! We also have lots of other beautiful
        flowers as well. If you’ve never outright asked her what her favorite
        flower or color is, today is the day! Choosing the most romantic
        flowers, besides roses, is an ever-changing thing, depending on who you
        ask. The right choice is the flower she loves the most! And remember,
        it’s the presentation of the flowers that counts!
      </p>
      <p class="font-weight-bold fa-14 py-4 mb-0">
        Send the Best Gifts & Flowers of Love
      </p>
      <p class="text-justify fa-13">
        Having romantic flowers delivered is easy when you enlist the help of
        SU-Bouquets. Perhaps it's a pretty vase of blue Iris, a striking display
        of pink and white Stargazer lilies, or a bouquet of whimsical white
        orchids in a clear green vase. With so many beautiful flowers to choose
        from, you will definitely have your work cut out for you. Just think of
        it as sending romance in a vase. Then again, you may opt to send the
        mouth-watering chocolate-covered berries assortment, or the
        chocolate-dipped berries and cookies gift, or maybe the tasty Mrs.
        Fields’ Gourmet Cookies Basket. For a real treat, choose the juicy
        Merlot wine basket for two! Same day birthday flowers with SU-Bouquets
        and your loved one is sure to be delighted by your surprise gesture of
        love.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "romantic-flowers",
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

<style scoped lang="scss">
.romantic-flowers {
  .button-collection {
    a {
      color: black;
      border: 2px solid black;

      &:hover {
        color: white;
        border: 2px solid rgb(0, 124, 173);
        background: rgb(0, 124, 173);
      }
    }
  }
}
</style>
