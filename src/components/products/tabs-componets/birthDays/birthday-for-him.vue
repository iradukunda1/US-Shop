<template>
  <div class="birthday-for-him w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="font-weight-bold h4">Birthday Gifts for Him</p>
      <p class="fa-16 mb-0 py-2 text-justify">
        Order indulgent birthday gifts for him when you run out of time and
        ideas. S.U-Flowers knows guys, and we’ve lined up fun and sophisticated
        birthday keepsakes, tools and decadent food baskets. Order today for
        same day, overnight, two day and scheduled delivery nationwide!
      </p>
    </div>
    <div
      class="birth-product-container row justify-content-center w-100 mx-0"
      v-if="products.length"
    >
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
    <div class="footer-content mt-4">
      <p class="font-weight-bold h4 pb-2">
        Birthday Gift Ideas for Him
      </p>
      <p class="text-justify fa-14">
        You’d give your daughter the world if you could, but our beautiful
        blooms make a wonderful second choice. Find birthday flowers for your
        daughter and help her celebrate turning another year older. S.U-Flowers
        offers beautiful floral arrangements that will make her birthday
        festivities that much sweeter.
      </p>
      <p class="font-weight-bold fa-14 mb-0 py-2">
        What to Get your Husband for His Birthday?
      </p>
      <p class="text-justify fa-14">
        Finding gifts for husbands should be an easy process, but when the days
        are ticking and gift-giving crunchtime kicks in, you may find yourself
        panicking. Ease your woes by browsing through our stock of flowers,
        plants, gifts and sweet treats that are not only beautiful but equally
        thoughtful.
      </p>
      <p class="text-justify fa-14">
        Some of our most popular birthday
        <span class="text-info cursor-pointer">gifts for husbands</span> include
        our:
      </p>
      <ul>
        <li class="pb-3 fa-14">29-inch Oversized Teak Succulent Centerpiece</li>
        <li class="pb-3 fa-14">Hand-dipped Sports Strawberries</li>
        <li class="pb-3 fa-14">Modern Lucky Bamboo</li>
        <li class="pb-3 fa-14">Lush Tropical Peace Lily</li>
        <li class="pb-3 fa-14">
          Happy Birthday Chocolate Mousse Torte with Belgian Chocolate Plaque
        </li>
      </ul>
      <p class="font-weight-bold fa-14 mb-0 py-2">
        What are the Best Anniversary Gifts for Him?
      </p>
      <p class="text-justify fa-14 pb-3">
        An anniversary is the perfect occasion to shower each other with gifts,
        celebrating the many years you’ve spent together and the many years you
        look forward to down the road. S.U-Flowers has a number of special
        anniversary gifts for him that make the day extra special.
      </p>
      <p class="text-justify fa-14">
        Our Simple Beer Snacks Basket gives him something to chew on while he
        sips on his favorite IPA. Our Timeless Treasure Watch Box is a
        personalizable present that makes a great home for his collection of
        watches. For the man with a green thumb, our Deluxe White Dendrobium
        Orchids beautifully tap into his sensitive side.
      </p>
      <p class="text-justify fa-14">
        Whether you’re looking for precious birthday flowers or personalizable
        presents, finding the ultimate gifts for him is easy with S.U-Flowers.
      </p>
      <p class="font-weight-bold fa-14 mb-0 py-2">
        Romantic Birthday Gifts for Him
      </p>
      <p class="text-justify fa-14">
        Finding good birthday gifts for men that speak to his passions while
        expressing your gratitude can be complicated. However, nothing says “I
        love everything about you” quite like a bouquet of flowers. Embrace the
        things that make him the man of your dreams by finding a gift that
        encompasses his unique vibrancy. From our delicate Hand-dipped Milk and
        Dark Strawberries to our You Are My Happily Ever After Canvas, you’re
        bound to find a romantic birthday arrangement for him that you’ll both
        fall in love with.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "birthday-for-him",
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
