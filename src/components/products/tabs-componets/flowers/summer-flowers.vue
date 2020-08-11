<template>
  <div class="summer-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Summer Flower Bouquets & Arrangements</p>
      <p class="text-justify fa-14 pb-4">
        Summer flower bouquets are here and it's time to celebrate. Our flower
        arrangements are a gift of living color, fresh from the fields, where
        summer flowers are in bloom!
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
    <empty-results v-if="!products.length"/>
    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Affordable Flowers Online
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Spring Flower Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Tropical Flower Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Winter Flower Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Bright Flower Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Holiday Flower Delivery
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="fa-14 font-weight-bold mt-5 pb-2">
        Which flowers grow in summer?
      </p>
      <p class="text-justify fa-13 pb-2">
        Summer is a magical time for vacationers, sunshine lovers, and flowers
        alike! Seasonal summer flowers include:
      </p>
      <ul class="mt-4 pt-3 pb-5 mb-4">
        <li class="pb-4 fa-13">Lilies</li>
        <li class="pb-4 fa-13">Roses</li>
        <li class="pb-4 fa-13">Marigolds</li>
        <li class="pb-4 fa-13">Zinnias</li>
        <li class="pb-4 fa-13">Sunflowers</li>
        <li class="pb-4 fa-13">Carnations</li>
        <li class="pb-4 fa-13">Begonias</li>
        <li class="pb-4 fa-13">Asters</li>
        <li class="pb-4 fa-13">Gladiolus</li>
      </ul>
      <p class="text-justify fa-13">
        Find all these bright blooms and more in our inventory of summer flower
        bouquets. Plus, enjoy seasonal plants such as thriving succulents and
        houseplants that your loved ones will adore.
      </p>
      <p class="text-justify fa-13">
        Our bouquets of summer flower arrangements arrive fresh and ready to
        enjoy. Make S.U-Bouquets your florist of choice for the freshest flowers
        around. All of our bouquets come with a guarantee to stay fresh for at
        least 7 days. This promise means better summer flowers for them and
        better values for you.
      </p>
      <p class="fa-14 font-weight-bold mt-5 py-2">
        Is a rose a summer flower?
      </p>
      <p class="text-justify fa-13">
        Roses bloom from mid-spring through the fall, making them the ideal
        flower to choose for your home decor, birthday gifts, or any summer
        festivities you might have on the calendar. At S.U-Bouquets, we have roses
        available in nearly every color, including:
      </p>
      <ul class="mt-4 pt-3">
        <li class="pb-4 fa-13">Classic red</li>
        <li class="pb-4 fa-13">Bright blue</li>
        <li class="pb-4 fa-13">Cheerful yellow</li>
        <li class="pb-4 fa-13">Fiery orange</li>
        <li class="pb-4 fa-13">Sweet pink</li>
        <li class="pb-4 fa-13">Luxurious lavender</li>
        <li class="pb-4 fa-13">Elegant white</li>
      </ul>
      <p class="text-justify fa-13 pb-2">
        With all these varieties, you can create a summer flower bouquet that
        perfectly suits any event this season.
      </p>
      <p class="text-justify fa-13 mb-5">
        From wild mixed bouquets to pink peonies and more, we have plenty of
        summer flower arrangements to welcome the sunny season. Plus, check out
        our summer gifts like our meat and cheese basket and cake pops to help
        you prep for summer fun and celebrations! No matter which of our summer
        flowers and gifts you choose, you can rest assured that we carefully
        curate and deliver each order straight to the door.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "summer-flowers",
  components: {EmptyResults, cardTemplate },
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
.summer-flowers {
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
