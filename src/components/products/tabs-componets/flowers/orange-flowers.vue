<template>
  <div class="orange-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Orange Flower Arrangements</p>
      <p class="text-justify fa-14 pb-5">
        Big bright and beautiful, these lovely bouquets in orange make a perfect
        floral gift for a birthday, anniversary, any celebratory occasion, or
        just because.
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
        Lavender Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Purple Flower Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Pretty Pink Tulips
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Yellow Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Colorful Bouquets Of Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        White Flower Arrangement
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Pink Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Buy White Tulip Online
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Purpel Iris Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Red Flower
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3 py-4 font-weight-bold">
        Orange Flowers Delivered
      </p>
      <p class="text-justify fa-13 pb-2">
        S.U-Bouquets makes it easy to send fresh orange flowers online to
        celebrate any special occasion. Orange is the color of sunrises, sunsets
        and warm sunny days. Over time, orange flowers have come to symbolize
        energy, confidence and fiery passion, which is why orange roses are a
        good gift when new relationships start to heat up. S.U-Bouquets has
        fresh orange flowers in shades that range from pale peach to exotic
        coral. S.U-Bouquets is your trusted source for exotic orange flowers
        that will surprise and delight.
      </p>
      <p class="text-justify fa-13">
        When you want to buy orange flower arrangements as gifts or to treat
        yourself, S.U-Bouquets has a huge selection of fresh roses, lilies, and
        daisies. Who wouldn’t love to receive a dozen long-stemmed peach roses
        or an elegant bouquet of spicy Asiatic lilies? Also long-stemmed and
        graceful, bright orange tulips will outshine even your prettiest cut
        glass vase. Sending a gift to someone with a green thumb? Look for a
        tropical orange bromeliad or potted hibiscus plant. While everyone loves
        orange roses, S.U-Bouquets also has other types of orange flowers to fit
        almost any
      </p>
      <p class="text-justify fa-13">
        Beautiful orange flowers make lovely gifts for any occasion. Count on
        S.U-Bouquets for a wide selection, easy online ordering, and fast, fresh
        delivery. Besides our fresh bouquets, S.U-Bouquets also has a huge
        selection of live plants and potted gardens. If someone you know loves
        the color orange, one of the prettiest gifts you can send is a potted
        garden nestled in a rustic basket and filled with orange and yellow
        tulip bulbs. It’s never been easier to send orange flower bouquets
        online. S.U-Bouquets has a huge selection of colorful flowers and
        plants, fresh from the fields.
      </p>
      <p class="text-justify fa-13 pb-4 ">
        Trust S.U-Bouquets to deliver long-stemmed orange lilies that will
        arrive fresh from the fields and ready to burst into bloom. Lilies have
        been cultivated since ancient times and are one of the most popular
        flowers in the world. With its sweet scent, showy flowers and rainbow of
        pretty colors, the lily is a symbol of love and purity in Christian
        tradition. Orange lilies and orange roses both symbolize desire,
        enthusiasm and passion. When you send a gift of fresh, long-stemmed
        orange roses from S.U-Bouquets, your warm feelings come through loud and
        clear.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "orange-flowers",
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
