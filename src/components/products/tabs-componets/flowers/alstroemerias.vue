<template>
  <div class="alstroemerias w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Alstroemeria Flower Delivery</p>
      <p class="text-justify fa-14 pb-4">
        Get Gorgeous Alstroemeria Flowers Delivered Anytime! Buy Alstroemeria or
        a Huge Peruvian Lily Bouquet for yourself, for someone special. It's
        just the thing to brighten anyone's day.
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
      <p class="font-weight-bold h3 py-4">
        Alstroemeria Flower Bouquets at S.U-Bouquets
      </p>
      <p class="text-justify fa-13 pb-2">
        Did you know that Alstroemeria flowers, also known as Peruvian lilies
        are some of the longest-lasting flowers in any mixed bouquet you’ll ever
        receive (or send!)? That’s right ? so no matter what color you pick to
        be part of your perfect perennial package, throw a few stems of this
        blooming beauty in for a lush background and full on touches and tints!
      </p>
      <p class="text-justify fa-13">
        Beautifully spotted and marked perennials, Alstroemeria are beautiful
        lilies with deep, thick roots. They grow up to three-feet-tall on
        strong, branched stems. Each trumpet-shaped flower is near an inch or
        two in diameter. The flowers come in stunning shades of pink, rose,
        purple, and many more, and can be spotted or even streaked with
        contrasting colors. You can buy Alstroemeria stems in a striking variety
        of colors as well. A bouquet with pink lilies can signify femininity,
        youth, acceptance, romance and prosperity.
      </p>
      <p class="text-justify fa-13 pb-2">
        From the Alstroemeria’s bold purplish hues to the more popular deep pink
        and maroon reddish tones, to the luscious white creamy mix so often
        found in weddings and Christening ceremonies, the flower’s blooms (or
        "petals") stay on the flower long after full bloom so you can enjoy them
        a long time. These pretty petals look great on their own or as a filler
        flower for other arrangements. For example, set six stems among a few
        large sunflowers or a bunch of yellow daisies for a spring feel.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "alstroemerias",
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
