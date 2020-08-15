<template>
  <div class="irises w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Iris Flowers</p>
      <p class="text-justify fa-14 pb-4">
        Nothing says spring like a fresh iris bouquet. Irises bring out the
        purples, blues, and pinks of spring, while a white iris flower
        arrangement brings a touch of elegance to any room. The iris earned its
        name from the Greek Goddess Iris, a messenger who was known to use the
        rainbow as a bridge from heaven and earth. An iris bouquet is sure to
        cheer someone up or add a burst of color to their day. Find a beautiful
        iris arrangement at FTD.com.
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
        Daisy Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Carnation
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Chrysanthemum Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Azaleas Plants For Sale
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Tulip
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        sunFlower Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Orchid Flowers
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class=" fa-14 py-4">
        Iris Flowers
      </p>
      <p class="text-justify fa-13 pb-2">
        If you're looking for a way to show someone you care, send a beautiful
        bouquet of vibrant and colorful iris flowers. Derived from the Greek
        word meaning "rainbow", irises are found in soft blue and purple tones,
        yellows hues, white and a small variety of other colors. However, the
        most popular iris color used in these flower bouquets is blue. Maybe
        this is because not many flowers are actually found in a "true blue",
        meaning they do not have to be manipulated to produce this color. Iris
        flowers produce their blue hues naturally and abundantly.
      </p>
      <p class="text-justify fa-13 pt-2">
        Send iris flower arrangements online for birthdays, 25th wedding
        anniversary or any special occasion that deserves a bright bouquet.
        Associated with meanings of faith, hope and wisdom, this elegant flower
        also bears more distinctive meanings based on its color and what part of
        the world it is being used in. Looking to surprise your wife with a
        bright bouquet? Blue flowers represent royalty, so there’s no better way
        to make her feel like queen for a day. If you need a bouquet for a
        sympathy occasion or get well occasion, elegant white irises are ideal.
        Purple irises —the most popular color for these flowers—signify wisdom,
        royalty, or a compliment. Yellow irises symbolize passion, making them
        perfect for an anniversary or just because gifts. For a full meaning of
        the iris flower and its colors, visit our flower guide.
      </p>
      <p class="text-justify fa-13 pt-2">
        S.U-Bouquets takes special pride in skillfully arranging and packaging
        your iris bouquet with care. Our flowers are delivered fresh from the
        fields, so when your iris flowers arrive they're in bud form, ready to
        open up and come to life with a majestic display of color and beauty.
        Blue iris flower bouquets are perfectly beautiful to send alone, but
        they also make great bouquet companions with other flowers like lilies
        and tulips. See how bright red tulips against the blue iris hues for a
        bouquet that really shines. Or blue irises paired with yellow stargazer
        lilies delivers a spectacular gift filled with color and fragrance.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "irises",
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
