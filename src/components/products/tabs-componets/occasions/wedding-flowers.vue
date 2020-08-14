<template>
  <div class="wedding-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Wedding Gifts</p>
      <p class="text-justify fa-14">
        S.U-Bouquet’s extensive selection of wedding gifts can be shipped to any
        state in the U.S. Surprise brides, grooms and engaged couples with
        enchanting romantic flowers, gourmet gifts and personalized gifts from
        S.U-Bouquets.
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
        Wedding Flower Gifts
      </p>
      <p class="text-justify fa-13">
        Send unique wedding gifts like orchids, lucky plants and gourmet wedding
        gift baskets to the happy bride and groom. We also deliver wedding
        anniversary gifts. Explore S.U-Bouquets’ extensive selection of wedding
        gift ideas that are sure to surprise and delight your favorite couple.
        Send fast and fresh flowers and gourmet gifts today!
      </p>
      <p class="fa-13">
        Many of our flowers can live for years with the right care. The stunning
        orchid for example, continues to re-bloom for decades with just a little
        attention. The Amaryllis also blooms for eight weeks and then fades,
        leaving lovely fronds behind. All of our easy-care plants come with
        instructions to ensure they continue to thrive. Order romantic
        flowersonline for engagement parties, wedding venues, or a special
        anniversary celebration. S.U-Bouquets’ extensive variety ensures you’ll
        find the right selection for your particular style. Choose from wedding
        gift ideas like orchids, wreaths, bouquets and even hand-decorated bride
        and groom chocolate strawberries. Need something beautiful for an
        engagement party? We offer engagement flower delivery nationwide.
        Engagement flowers honor the devoted couple’s commitment to one another.
        Send a traditional wedding gift or a contemporary update on a
        traditional idea. Explore S.U-Bouquets’ unique wedding gift ideas to spark
        your own creative gift-giving. And maybe she’s turning 30 this year as
        well? Shop 30th birthday gifts from S.U-Bouquets and have the perfect
        birthday gift to surprise her on her birthday.
      </p>
     
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "wedding-flowers",
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
