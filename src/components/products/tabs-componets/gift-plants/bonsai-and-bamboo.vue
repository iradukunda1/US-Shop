<template>
  <div class="bonsai-and-bamboo w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Bonsai Tree</p>
      <p class="text-justify fa-14 pb-4">
        Not looking for flowers? No problem. We have bonsai trees for sale,
        tropical plants and bamboo that are easy to care for, long lasting and
        make memorable gifts in every season.
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
        Zen Flower Arrangement
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Zen Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Indoor Bonsai Trees
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Outdoor Bonsai Trees
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Bonsai Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Blue Flower Delivery
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="h3 pb-2">Send Bonsai Tree Gifts Nationwide</p>
      <p class="text-justify fa-13 pb-2">
        100% Satisfaction Guarantee. Fast shipping and easy online ordering,
        S.U-Bouquets is proud to offer a handsome selection of some of the most
        popular bonsai trees and other exotic plants. Each of our trees is
        carefully selected and packaged, and includes detailed care instructions
        to help you care for your beautiful new tree.
      </p>
      <p class="text-justify fa-13 py-4">
        Bonsai is an art, and a science. Beyond the beauty, fresh scent and
        uniqueness of this gift, when you give a bonsai tree you are giving a
        piece of history. Along with our award- winning roses and other
        incredible flower bouquets and arrangements, S.U-Bouquets also offers an
        elegant assortment of fresh flowering and exotic plants. These make
        fantastic gifts for all the hard to shop for folks in your life. When it
        comes to finding unique gift ideas for guys - a bonsai plant is really
        tough to beat. They’re great for brightening up a tired office and add a
        sense of calm and peace to his hectic work day. And with our low prices,
        they are a great option for the thrifty gifter. What sets our bonsai
        trees for sale apart from other online florists? We believe it’s the
        freshness of our plants and our unbeatable customer service. If you
        every have any questions or need a little extra help picking the right
        gift, our friendly customer service specialists are always available.
      </p>
      <p class="text-justify fa-13">
        We are the flower and plant specialists, but we also carry a great
        selection of creative gift ideas for every occasion. From beautiful
        bouquets of brilliant blooms to gift baskets filled with all kinds of
        delicious goodies and tempting chocolate confections, S.U-Bouquets are
        your gifting specialists. Shop us first for something wonderful for all
        the important people in your life.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "bonsai-and-bamboo",
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
