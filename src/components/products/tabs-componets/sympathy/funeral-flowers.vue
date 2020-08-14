<template>
  <div class="funeral-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Funeral Flowers</p>
      <p class="text-justify fa-14">
        For a floral tribute that blooms with breathtaking beauty, look no
        further. Send funeral flowers with S.U-Flowers' unbeatable selection of
        freshly arranged flowers for funerals and memorial services.
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
    <div class="row mx-0 w-100 justify-content-center button-collection">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sympathy Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Funeral Wreaths
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Mixed Funeral Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Funeral Plants
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Same day Sympathy Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sympathy Plants
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3">Funeral Flowers</p>
      <p class="text-justify fa-13 pb-2">
        When someone passes, sending an arrangement of flowers is a timeless and
        thoughtful gesture. If you’re looking for a way to celebrate the life of
        the person who has passed, or a way to console and offer comfort to
        their family, an elegant bouquet of flowers is often the right choice.
        Receiving a bouquet of vivacious white funeral flowers will show that
        you are thinking of them, and remind them of the beauty life has to
        offer.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        What flowers are appropriate for funerals?
      </p>
      <p class="text-justify fa-13 mb-0">
        Flowers like white roses, chrysanthemums, lilies and daisies are
        appropriate, respectful, and beautiful options. Whether you choose a
        large standing spray to sit beside the deceased during a viewing, or you
        choose to send a funeral flower delivery from across the country to
        remind someone you’re there for them, these flowers are the perfect way
        to pay your respects and offer your sympathy.
      </p>
      <p class="text-justify fa-13 pb-4">
        Funeral rose bouquets often symbolize love and passion, which many will
        surely feel as they remember fondly the life of the deceased. Daisies
        are a perennial symbol for happiness, fun, whimsy, and the simple joys
        of life. As guests reflect on the life of the deceased, daisies will
        remind them of all the small joys that made the time they shared so
        beautiful. White lillies add a note of grace, their divine shape hinting
        at hope for the journey the deceased’s soul has embarked on.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        What color flowers do you give for a funeral?
      </p>
      <p class="text-justify fa-13 pb-3">
        For a vibrant celebration of life, red roses or pink lilies make an
        excellent choice. The deep crimson will remind funeral guests of life’s
        enduring passions, and pink funeral arrangements of delicate lilies
        bring thoughts of peaceful slumber. Be sure that you know what the theme
        and mood of the funeral will be so that you can select the most
        thoughtful and meaningful bouquet to send. The family of the one who has
        passed on will certainly appreciate your dedication.
      </p>
      <p class="text-justify fa-13 pb-4">
        With countless sympathy baskets and standing sprays to choose from,
        S.U-Flowers makes funeral flower arrangement selection easy for any
        funeral, memorial, or celebration of life.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        How much are flower arrangements for funerals?
      </p>
      <p class="text-justify fa-13 pb-4">
        S.U-Flowers offers flowers for every budget, from affordable bouquets
        starting at $50 to luxurious arrangements at $300. Whether you were
        close to the deceased or are paying your respects for a passed
        acquaintance, we have options to show your support at every price point.
        Choose our simple and sweet Eternal Affection Arrangement for a loving
        acknowledgement, or splurge on the Blessings of the Earth Eisel to truly
        show your deep admiration and love. Choose the perfect funeral floral
        arrangement today with S.U-Flowers.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "funeral-flowers",
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
