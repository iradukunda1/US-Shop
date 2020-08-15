<template>
  <div class="hydrangeas w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Hydrangeas</p>
      <p class="text-justify fa-14 pb-4">
        Hydrangeas pack a huge visual punch in any bouquet or arrangement with
        its body of individual flowers clustered into a large, impressive pom
        pon of color, texture, and light fragrance. Incorporate fullness and
        interest with stunning hydrangeas from S.U-Bouquets in shades of creamy
        white, green, blues that range from periwinkle to lavender, and even
        vivid pink and rosy hues.
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
    <div class="footer-content mt-4">
      <p class="font-weight-bold fa-14 py-4">
        Beautiful Hydrangea Bouquets Send a Sentimental Message
      </p>
      <p class="text-justify fa-13 pb-2">
        Hydrangeas’ delicate, star-shaped flowers come in a variety of colors
        that can be stylishly incorporated into any bouquet to accentuate any
        occasion. The masses of delicate flowers that congregate into the
        substantial bloom are associated with a number of symbolic significances
        including a united family, the bonds of friendship, gratitude, and
        abundance. This makes a hydrangea bouquet the perfect gift to send to
        make a friend smile, wish your mom a “Happy Birthday,” or say “Thank
        You.” Hydrangea flowers are also the traditional flower to celebrate the
        fourth wedding anniversary. Whatever the occasion, an exquisite
        hydrangea bouquet delivered from S.U-Bouquets is a sure way to brighten up
        anyone’s day. Finding the right words isn’t always easy, but S.U-Bouquets
        makes it easy to find the perfect way to say more with flowers.
      </p>
      <p class="fa-14 font-weight-bold py-3">
        Hydrangea Arrangements Add a Beautiful Touch
      </p>
      <p class="text-justify fa-13 pt-2">
        Hydrangeas are hearty flowers that maintain their beauty and freshness
        so you can enjoy your arrangement longer. Their substantial size blooms
        make an impressive addition to any arrangement when you want to make a
        striking floral statement. Peruse our wide array or hydrangea
        arrangements that can be delivered to your door to embellish your décor
        and add splendor to any occasion. Highlight the table of your dinner
        party with a hydrangea arrangement as a graceful centerpiece.
        Incorporate soft pink or blue hydrangea arrangements to add interest to
        your baby or wedding shower. The luxurious body of hydrangea flowers are
        the perfect backdrop to combine with any flower or color you want to
        accent in a delightful hydrangea arrangement.
      </p>
      <p class="fa-14 font-weight-bold py-3">
        Hydrangeas Delivered Right to Your Door
      </p>
      <p class="text-justify fa-13 pt-2">
        Hydrangeas are hearty flowers that maintain their beauty and freshness
        so you can enjoy your arrangement longer. Their substantial size blooms
        make an impressive addition to any arrangement when you want to make a
        striking floral statement. Peruse our wide array or hydrangea
        arrangements that can be delivered to your door to embellish your décor
        and add splendor to any occasion. Highlight the table of your dinner
        party with a hydrangea arrangement as a graceful centerpiece.
        Incorporate soft pink or blue hydrangea arrangements to add interest to
        your baby or wedding shower. The luxurious body of hydrangea flowers are
        the perfect backdrop to combine with any flower or color you want to
        accent in a delightful hydrangea arrangement.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "hydrangeas",
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
