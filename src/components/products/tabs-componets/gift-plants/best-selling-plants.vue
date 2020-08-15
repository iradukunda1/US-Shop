<template>
  <div class="best-selling-plants w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">House Plants & Plant Best Sellers</p>
      <p class="text-justify fa-14 pb-4">
        House plants make an excellent gift, whether for a special occasion or
        for no reason at all: They’re long lasting and easy to care for, and
        with our wide assortment you’re sure to find one perfect for anyone on
        your list
      </p>
    </div>
    <div class="birth-product-container row justify-content-around w-100 mx-0">
      <div
        class="my-2 mx-2"
        v-for="(product, index) in products.firstEight()"
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
        Potted Garden Plants
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Green Potted Plants
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Potted Plants Online
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Money Tree Plants Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Mini Rose for Sale
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Potted Flowers Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Succulent Plant Delivery
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3 pb-2">House Plants</p>
      <p class="text-justify fa-13 pb-2">
        House plants are a great way to bring life, light, and style into any
        room. Whether you’re shopping for a friend or yourself, our expansive
        selection of indoor house plants is sure to impress! Incorporate sleek,
        modern design into your home decor with a lush indoor plant complete
        with a mid-century stand. Or, opt for more vibrancy and color with one
        of our flowering house plants. No matter the style or occasion, our
        inventory of house plants is sure to include lush plants and gorgeous
        blooms you and your loved ones will admire.
      </p>
      <p class="fa-14 font-weight-bold mt-5 py-2">
        What plants are good for inside the house?
      </p>
      <p class="text-justify fa-13">
        When it comes to shopping for indoor house plants, you’ll want to choose
        a variety that can thrive with minimal exposure to direct sunlight.
        Green plants such as snake plants and pothos both do well in low light,
        plus they add a touch of color to take any room from drab to fab.
        Looking for office plants to dress up your desk space? Our house plant
        delivery includes smaller plants that fit perfectly on any desktop! From
        miniature Bonsai trees to Macramé Hanging Plants, household plants make
        excellent gifts for family, friends, coworkers, or even yourself.
      </p>
      <p class="fa-14 font-weight-bold mt-5 py-2">
        What is the easiest house plant to take care of?
      </p>
      <p class="text-justify fa-13">
        Peace lilies, snake plants, and pothos plants are some of the easiest
        house plants to care for because they don’t require a ton of water or
        light. These varieties are long-lasting, beautiful gift ideas whether or
        not the recipient is a master gardener! When you order house plant
        delivery from S.U-Bouquets, your order also comes with care tips to help
        you preserve the life of your house plant for as long as possible. And
        if you’re looking to expand on your green thumb abilities, succulents
        are a great place to start. Similar to house plants, succulents are
        relatively low maintenance, they just need a bit more sunlight than
        indoor house plants. While they can survive in indoor conditions, you
        may want to take your succulent outside every once in a while to let it
        soak up some sunshine.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "best-selling-plants",
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

<style scoped lang="scss">
</style>
