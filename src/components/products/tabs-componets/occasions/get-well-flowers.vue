<template>
  <div class="get-well-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Get Well Flowers</p>
      <p class="text-justify fa-14">
        When a loved one is under the weather, any gesture letting them know you
        care can mean the world. A bright, fragrant “Get Well” bouquet of
        flowers or gift works wonders for lifting spirits and improving their
        outlook.
      </p>
    </div>
    <div class="birth-product-container row justify-content-center w-100 mx-0">
      <div
        class="my-2 mx-2"
        v-for="(product, index) in products"
        :key="index"
        style="height: 20rem"
      >
        <card-template :item="product" :showOptions="false" />
      </div>
      <empty-results v-if="!products.length"/>
    </div>
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
      <p class="h3 pb-3">Sending Get Well Flowers Just Got Easier</p>
      <p class="font-weight-bold fa-14 pb-5">Get Well Flowers</p>
      <p class="text-justify fa-13">
        When a loved one is under the weather, any gesture letting them know you
        care can mean the world. A bright, fragrant bouquet of get well flowers
        or a thoughtful gift works wonders for lifting spirits and improving
        their outlook. Our selection of get well soon flowers includes mixed
        bouquets, plants, and more to wish your loved one a quick recovery!
      </p>
      <p class="font-weight-bold fa-14 py-3">
        What are the best get well flowers?
      </p>
      <p class="text-justify fa-13 pt-2">
        When choosing get well flowers for your loved one, it’s important to
        think of flowers that make them smile. Perhaps they love bold pink
        larkspur and coral roses, or maybe a bouquet of sunflowers will inspire
        hope during this tough time. Here are some of our most popular get well
        flowers to help you select the ideal option for the recipient:
      </p>
      <ul class="mt-4 pt-3 pb-5">
        <li class="pb-4 fa-13">Lush Tropical Peace Lily</li>
        <li class="pb-4 fa-13">100 Blooms of Poms</li>
        <li class="pb-4 fa-13">Joyful Bouquet</li>
      </ul>
      <p class="fa-14 mt-3 pb-3">
        No matter which get well flowers you choose, you can count on us to make
        sure each bloom and every lush stem is fresh and perfectly placed upon
        delivery. Our flowers are picked directly from the fields of the best
        growers in the industry, and each arrangement is curated by our team of
        professional florists.
      </p>
      <p class="font-weight-bold fa-14 pb-2">
        Which flowers represent healing?
      </p>
      <p class="text-justify fa-13 py-4">
        Any bloom or mixed bouquet of get well flowers is sure to bring a smile
        to your loved one’s face, but these flowers are known to represent
        sentiments of healing and health:
      </p>
      <ul class="pt-4 mt-2 mb-5">
        <li class="pb-4 fa-13">White roses symbolize new beginnings</li>
        <li class="pb-4 fa-13">
          SunflowRed roses represent love and admirationers
        </li>
        <li class="pb-4 fa-13">Yellow roses stand for friendship and joy</li>
      </ul>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "get-well-flowers",
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
.get-well-flowers {
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
