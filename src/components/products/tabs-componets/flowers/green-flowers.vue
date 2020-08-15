<template>
  <div class="green-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Green Flowers</p>
      <p class="text-justify fa-14 pb-5">
        Green flowers often fly under the radar but are still bright, beautiful
        blooms that are sure to be appreciated by any recipient. Fitting for any
        season or occasion, green flower bouquets are a vibrant way to bring
        life to any space. Whether you need green roses because they’re your
        special someone’s favorite color or a festive bouquet for St. Patrick’s
        Day, S.U-Bouquets has the perfect arrangement to send your well-wishes.
        Shop our high-end yet affordable selection now, including potted
        gardens, flower baskets, and more!
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
      <p class="fa-14 py-4 font-weight-bold">
        What plants have green flowers?
      </p>
      <p class="text-justify fa-13 pb-2">
        It might come to your surprise, but there are actually a lot of
        flowering plants that have green blooms, including:
      </p>
      <ul>
        <li class="fa-13 pb-3">Bells of Ireland</li>
        <li class="fa-13 pb-3">Hydrangea</li>
        <li class="fa-13 pb-3">Hypericum</li>
        <li class="fa-13 pb-3">Spider mum</li>
        <li class="fa-13 pb-3">Cockscomb</li>
        <li class="fa-13 pb-3">Scabiosa</li>
      </ul>
      <p class="text-justify fa-13 py-3">
        And that’s just to name a few! Whatever style of green flower bouquet or
        plant you’re looking for, you can rest assured that S.U-Bouquets has just
        what you need.
      </p>
      <p class="text-justify fa-14 font-weight-bold py-3">
        What do green flowers represent?
      </p>
      <p class="text-justify fa-13">
        Green flowers are often considered a symbol of fortune, health, and
        youth. For this reason, green plants and flowers are popular gifts for
        graduations, promotions, and housewarming gifts. An optimistic green
        flower delivery makes a great gift for someone who is in the hospital or
        anyone who needs an extra dose of cheer.
      </p>
      <p class="text-justify fa-13">
        Green flower bouquets can also symbolize new beginnings, perfect for
        your child who’s going away to college or a friend who just started a
        new job. You could even send green roses to show a new beau that you
        enjoyed your date. The possibilities are endless with a beautiful,
        vibrant bouquet of green flowers.
      </p>
      <p class="text-justify fa-14 font-weight-bold py-3">
        What are different kinds of green flowers?
      </p>
      <p class="fa-13 pt-3">
        While there are many green flowers, some of the most popular include:
      </p>
      <ul>
        <li class="fa-13 pb-3">Green roses</li>
        <li class="fa-13 pb-3">Green gerbera daisies</li>
        <li class="fa-13 pb-3">Green chrysanthemum</li>
        <li class="fa-13 pb-3">Green dahlia</li>
        <li class="fa-13 pb-3">Cymbidium orchid</li>
        <li class="fa-13 pb-3">Bells of Ireland</li>
        <li class="fa-13 pb-3">Green carnations</li>
        <li class="fa-13 pb-3">Hypercium berries</li>
        <li class="fa-13 pb-3">Green hydrangea</li>
        <li class="fa-13 pb-3">Green zinnia</li>
      </ul>
      <p class="text-justify fa-13">
        And, these flowers come in a variety of shades of green, from rich, dark
        hues to lime green, so they can be mixed together to create a
        monochromatic bouquet that makes an impression. Whichever green flower
        arrangement you choose to send, we’re sure they’ll be proudly displayed
        by the ones you loved.
      </p>
      <p class="text-justify fa-13">
        Order your green flower arrangement ahead of time for a special occasion
        or schedule a same-day delivery to get them there in time for a
        spur-of-the-moment celebration. S.U-Bouquets has you covered for fresh,
        timely flower delivery every day of the week!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "green-flowers",
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
