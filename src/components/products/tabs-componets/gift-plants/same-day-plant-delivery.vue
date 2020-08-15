<template>
  <div class="same-day-plant-delivery w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Same Day Plant Delivery</p>
      <p class="text-justify fa-14 pb-4">
        When you want nothing but the best, look no further than our premium
        line-up of best-selling plants for same-day delivery. Choose from
        customer favorites including flowering hydrangeas, orchids and peace
        lilies as well as lush palms, rubber plants and even mixed baskets.
        Order by 2PM in the recipient’s time zone for same day delivery
        Monday-Friday. (Saturday, Sunday and Holiday cutoff times may vary.)
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
        Same Day Flowers of The Day
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Same Day Delivery Get Well Gift
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Just Because Flowers Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Mixed Day Flowers Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Same Day Spring Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Same Day Fall Flowers
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3 mb-0 pb-2">Best Selling Same-Day Plants</p>
      <p class="text-justify fa-13 pb-2">
        One look at S.U-Bouquet’s unbeatable selection of same-day plant delivery
        options and you'll understand why they’re one of our customer’s top
        picks. All of our same-day plants are beautifully hand-arranged using
        the best products and with the utmost attention to detail. And every
        arrangement is checked for quality before it’s hand-delivered to your
        loved one. This guarantees your plant arrives looking fresh and ready to
        enjoy. What’s our secret? We've partnered with professional neighborhood
        florists across the country so that you can rest assured your gift will
        be stunning. It’s old-fashioned personalized service with a smile. The
        truth is, some special occasions just wouldn’t be the same if your plant
        gift wasn’t hand-delivered with all the care and attention your special
        friend or loved one deserves.
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
  name: "same-day-plant-delivery",
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
