<template>
  <div class="carnations w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Carnations</p>
      <p class="text-justify fa-14 pb-4">
        Some say carnations get their name from "coronation," which makes sense
        as anyone looks regal with carnations. Our carnation bouquets help you
        express love, luck, and so much more.
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
        Mom Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Azalea Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
       Tulip Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
       sunFlower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Orchid Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
       Irises
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
     Daises
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold h3 py-4">
        Send Carnation Flower Arrangements with S.U-Bouquets
      </p>
      <p class="text-justify fa-13 pb-2">
        Sending colorful carnation flower arrangements from S.U-Bouquets lets you
        share a little springtime joy any time of year. Did you know that
        carnations have been the official flower of Mother’s Day since 1914?
        Some floral historians believe that carnations are native to the
        Mediterranean basin, while others trace them back to the Far East.
        However they arrived, carnations have been cultivated (and loved) for
        many years. Here are our top three reasons for sending a beautiful
        carnation gift to someone you love. First, they come in a rainbow of
        colors, from soft pastel pink, yellow, peach and white to sultry red and
        passionate purple. Second, many varieties of carnations smell as good as
        they look, with a fragrance reminiscent of sweet cloves. And finally,
        carnations have plenty of staying power to delight your gift recipients
        longer than many cut flowers. Colorful, fragrant and long-lasting,
        what’s not to love about carnations? S.U-Bouquets offers a huge selection
        of colorful carnation arrangements and bouquets for every gifting
        opportunity.
      </p>
      <p class="text-justify fa-13 pt-2">
        A gift of pink carnations says "I’ll always remember you" to someone
        special. They make great birthday, graduation or get-well gifts.
        Carnation boutonnieres, congratulations, housewarming and Mother's Day
        are also perfect occasions for sending a lovely carnation bouquet to
        express your affection for someone special. Order your thoughtful
        carnation gifts from S.U-Bouquets. We choose only the freshest flowers and
        deliver them right to your home or office, often even the next day. You
        probably know that red roses are a symbol of deep passion and fiery
        love. That’s why red roses are a traditional gift for Valentine’s Day,
        romantic birthday celebrations, and wedding anniversaries. But did you
        know that fragrant red carnations are also a traditional symbol of love
        and romance? Light red carnations say to someone "I admire and care for
        you"? and dark red carnations symbolize deeper sentiments of romantic
        love and affection. Next time you want to express your true feelings,
        consider sending fresh, fragrant red carnations. And trust S.U-Bouquets to
        deliver them quickly and easily, and for less.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "carnations",
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
