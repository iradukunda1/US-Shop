<template>
  <div class="gift-for-parent w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Flowers for Parents</p>
      <p class="text-justify fa-14">
        When you need the ideal gift idea for an ideal couple of parents,
        S.U-Bouquets has just what you need. From beautiful birthday cakes to
        amazing anniversary ideas, you will find just the right way to create a
        spectacular gift.
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
    <nav aria-label="...">
      <ul class="pagination row mx-0 w-100 justify-content-center my-4">
        <li class="page-item  active">
          <span class="page-link rounded-circle mx-2"> 1</span>
        </li>
        <li class="page-item">
          <span class="page-link rounded-circle mx-2 cursor-pointer">2</span>
        </li>
        <li class="page-item">
          <span class="page-link border-0 cursor-pointer"
            ><i class="fa fa fa-angle-double-right"></i
          ></span>
        </li>
      </ul>
    </nav>
    <div class="footer-content mt-4">
      <p class="font-weight-bold mb-0 pb-2 h4">
        Gifts for Parents You Will Love to Give
      </p>
      <p class="text-justify fa-13">
        Being a parent is no easy job. But we’ve made it so easy to say thank
        you for all their hard work with a beautiful gift they’re sure to love.
        Our selection fabulous gift ideas for parents are perfect for Christmas,
        anniversaries, or whatever you’re celebrating.
      </p>
      <p class="fa-13">
        Cake pops in adorable baby and building block designs or a whole bouquet
        of hand decorated cookies in the shapes of baby bottles and onesies, are
        ideal desserts for your next baby shower or welcome home baby gift. Want
        a really special gift that new parents will cherish for many years to
        come? A plush puppy accompanied by an evergreen cypress plant that will
        grow through the years, right along with baby is just one of many gifts
        for new parents you will find in the S.U-Bouquets store.
      </p>
      <p class="fa-14 font-weight-bold mb-0 py-4">Anniversary Gifts for Parents</p>
      <p class="fa-13">
        Need some creative Anniversary gift ideas for mom and dad? Well, we’ve
        got them! Help mom and dad celebrate their golden anniversary with one
        of our 50th anniversary gifts for parents. Give them a champagne and
        pancakes gift basket to take it easy on their big day. A trio of
        cheesecake and assorted dipped berries will remind them of the sweet
        times of yesterday. Send mom and dad some romance with a box of gourmet
        dipped berries with a dozen red roses. If your parents are full-on
        foodies our elegant cabernet and chardonnays wine basket paired with a
        selection of smoked sausage and rich chocolate truffles will delight.
      </p>
      <p class="fa-13 pt-2">
        Wedding gifts for parents are a wonderful way to show your appreciation
        for all that they’ve done to help with your special day.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "gift-for-parent",
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
