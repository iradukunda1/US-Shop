<template>
  <div class="yellow-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Yellow Flowers Delivery</p>
      <p class="text-justify fa-14 pb-5">
        The brilliance of yellow in a flowers bouquet is just the thing to lift
        one’s spirits, say “thank you” or “happy birthday”. Send what you want
        to say with a beautiful yellow flower bouquet from S.U-Bouquets.
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
        Light Pink Tulips
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Yellow Flower Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Colorful Flower Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Orange Flower Arrangement
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        White Flower Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        White Tulip Flower Arrangement
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Purpel Iris Bouquets
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3 py-4 font-weight-bold">
        Yellow Flowers from S.U-Bouquets
      </p>
      <p class="text-justify fa-13 pb-2">
        Nothing says have a lovely day like a bouquet of flowers. Send fresh
        yellow flowers online from S.U-Bouquets selection of pretty bouquets and
        plants. A bouquet of cheerful yellow flowers makes a wonderful gift. Who
        wouldn’t love a dozen long-stemmed yellow roses surrounded by delicate
        white baby’s breath? Yellow lilies are long-stemmed, graceful and
        perfect for a tall glass vase. For a less formal gift, look for a yellow
        miniature rose plant in a pretty basket. Send yellow flower bouquets
        online from S.U-Bouquets and you’ll know that they will arrive fresh from
        the fields and ready to bloom.
      </p>
      <p class="text-justify fa-13 pb-3">
        Another very popular flower is the yellow tulip. Nothing says spring
        quite as sweetly as a graceful bouquet of long-stemmed tulips. For a
        more dramatic touch, send tulips of all the same color. For a more
        casual gift, a bouquet of different colored tulips will brighten up
        almost any home or office.
      </p>
      <p class="text-justify fa-13 pb-3">
        You can count on S.U-Bouquets to deliver beautiful yellow flower plants
        that will delight just about anyone on their special day with easy
        online ordering. Did you know that S.U-Bouquets also has a huge selection
        of live plants and potted gardens? If someone you know loves the color
        blue and might enjoy nurturing a little potted garden, a blooming blue
        hyacinth plant would be perfect. You can also find blue hyacinth bulb
        gardens planted with pretty orange tulips for color contrast. Looking to
        buy yellow flower arrangements from a trusted floral retailer? Order
        online from S.U-Bouquets for fast, field fresh delivery across the U.S.
      </p>
      <p class="text-justify fa-13 pb-3">
        Celebrate the return of warm breezes and sunny days with gifts of
        brightly colored sunflowers, daisies, roses, carnations, lilies,
        gardenias and other popular spring flowers, delivered fresh from trusted
        S.U-Bouquets growers. Our Alstroemeria bouquets mix yellow and orange
        lilies for a bright and summery arrangement. And don’t forget to order a
        pretty bouquet or flowering plant for yourself while you’re at it!
      </p>
      <p class="text-justify fa-13 pb-3">
        Delight a special someone with a gift of yellow daisies from S.U-Bouquets.
        Delivered fresh from the fields across the U.S. Order a bouquet today.
        Daisies are close cousins to sunflowers and the three most popular
        varieties are the Shasta daisy, African daisy and gerbera daisy. There
        are many meanings assigned to the gentle daisy - from innocence,
        simplicity and joy to happiness, good luck and new beginnings.
        S.U-Bouquets has a wide selection of daisies and other cheerful yellow
        flowers. When you send exotic yellow flowers from S.U-Bouquets, you know
        your gift will arrive fresh from the fields and ready to burst into
        bloom.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "yellow-flowers",
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
