<template>
  <div class="gift-for-parent w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Sister Flowers</p>
      <p class="text-justify fa-14">
        For Sister's Day flowers, no one beats S.U-Bouquets. Send the best to your
        sister, sister in-law, or someone who has been like a sister, flowers
        fresh from the fields.
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
        Flower For New Mom
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Delivery Gift For Girlfriends
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Gift For Sister
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flowers For A Little Girl
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Gift For Live
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Special Gift For Mom
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Hostess Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flowers For Girlfriends
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Gift Baskets For Women
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flowers For Mom
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Gift For Mother In Law
      </a>
    </div>
    <div class="footer-content mt-5">
      <p class="font-weight-bold mb-0 pb-4 h4">
        Gifts for Sisters
      </p>
      <p class="text-justify fa-13">
        For any woman in your life who has been ?like a sister? to you, National
        Sister’s Day is an opportunity to show her how much you love and
        appreciate her friendship over the years. S.U-Bouquets has some great
        ideas for spreading the love on Sister’s Day. If your sister loves
        flowers, what could be better than a beautiful bouquet of her favorite
        flowers? Whether she prefers the sweet scent of roses or dazzling lilies
        or the simple elegance of a regal orchid, you will find them all here.
        Our designers are hard at work creating a huge selection of unique
        bouquets and arrangements to match every taste, budget and occasion. You
        can be sure you will find just the right display to suit your sister’s
        unique personality and style.
      </p>
      <p class="fa-13 pt-3">
        When words can’t express your true feelings, let an amazing bouquet
        speak for you. S.U-Bouquets gifts are always the right choice to convey
        your sentiments. In addition to flowers, we also offer all kinds of
        delicious gourmet gifts, chocolate creations and creative gift baskets.
        A thoughtful gift delivered on Sister's Day is sure to deliver a big
        surprise as well! Just imagine the look on her face when she opens the
        door and receives her Sister's Day flowers. Sister’s Day is the ideal
        day to thank all those important women in your life and celebrate the
        special memories you have made and shared together. So whether it's a
        birth sister or someone who feels like a sister, treat her to a
        beautiful gift and say thank you for being a part of my life all these
        years.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "sister-flowers",
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
