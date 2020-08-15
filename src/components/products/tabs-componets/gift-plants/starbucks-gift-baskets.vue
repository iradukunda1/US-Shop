<template>
  <div class="starbucks-gift-baskets w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Starbucks Gift Baskets</p>
      <p class="text-justify fa-14 pb-4">
        Have a coffee fan on your gift list? Our selection of gift baskets
        filled with rich Starbucks coffees, teas and flavorful baked goods are
        the ideal choice.
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
        Spa Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flowers Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Cheap Gift Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Starbucks Coffee Gift Set
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Get Well Care Package
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Holiday Gift Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Thank You Baskets
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="h3 pb-2">Starbucks Coffee Gift Baskets</p>
      <p class="text-justify fa-13">
        From their early days as a tiny storefront shop in Seattle’s famous Pike
        Place Market, Starbucks has focused on doing one thing really, really
        well ? creating the perfect cup of coffee. Their commitment to the craft
        of coffee making is evident in all the delicious products they sell. At
        S.U-Bouquets, we understand that commitment. It’s something we strive to
        do every day with the high quality flowers, plants and gourmet food
        items we offer our customers. Knowing the standards to which they hold
        their coffee products, S.U-Bouquets is delighted to offer a variety of
        Starbucks gifts and Starbucks coffee gift baskets in our online gift
        store.
      </p>
      <p class="text-justify fa-13">
        When you send someone a Starbucks gift basket, you know that you are
        giving the gold standard by which all other coffees are measured.
        Starbucks has spent the last 40-plus years crafting some of the very
        best coffees around. It’s easy to taste the difference all that hard
        work and dedication has made. You will want to share that amazing flavor
        with your fellow connoisseurs. Give a Starbucks gift basket along with
        our selection of other birthday gifts for daughters, and she will be
        delighted when these items are shipped straight to her doorstep.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        Coffee Gifts
      </p>
      <p class="text-justify fa-13 pb-2">
        Along with the incredibly good coffee, these beautiful coffee gift
        baskets come loaded all kinds of appetizing treats. An amazing cup of
        coffee and crispy biscotti, what other excuse do you need to slow-down,
        relax and savor the day? You will find we offer a tempting variety of
        incredibly good snacks and gourmet foods that pair perfectly with this
        great coffee.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "starbucks-gift-baskets",
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
