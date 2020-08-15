<template>
  <div class="blue-bouquets w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Blue Flowers</p>
      <p class="text-justify fa-14 pb-5">
        From vibrant and contrasting, to subtle accents, blue flowers make an
        impression. Find the blue flower bouquet that expresses what you want to
        say from the S.U-Bouquets’ blue flower collection.
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
        Bonsai Tree Delivery
      </a>
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
        Indoor Bonsai Trees
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Bonsai Flower
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3 py-4 font-weight-bold">
        The Freshest Blue Flowers
      </p>
      <p class="text-justify fa-13 pb-2">
        Nothing says have a great day like a gift of fresh flowers. Send fresh
        blue flowers online from S.U-Bouquets selection of bouquets and plants.
        There are many blue wildflowers and also several cultivated plants with
        blue flowers that make wonderful gifts. Who wouldn’t love a bouquet of
        blue iris with lovely gold or cream streaks on their petals? Iris are
        long-stemmed, graceful and perfect for a tall glass vase. For a less
        formal gift, look for flowering blue hyacinth bulbs in a pretty potted
        garden or rustic basket. Send blue flower bouquets online from
        S.U-Bouquets and you’ll know that they will arrive fresh from the fields
        and ready to bloom. S.U-Bouquets has different types of blue flowers and
        fresh bouquets that are perfect for banishing the blues. Order online
        from S.U-Bouquets for quick flower delivery across America.
      </p>
      <p class="text-justify fa-13 mb-0">
        Elegant, long-stemmed blue iris flowers make a thoughtful gift for
        anyone on your list. In Greek, iris means "rainbow" and the plant’s name
        probably reflects the fact that irises are grown in many colors,
        producing blue flowers, purple flowers, white flowers, yellow flowers,
        pink flowers, and orange, brown and red, and even black. The elegant
        iris is the birthday flower of February. If you’re going to give someone
        a birthday bouquet of iris, you might want to know that different flower
        petal colors have different meanings. Blue iris stands for faith and
        hope, purple iris denotes wisdom and compliments, yellow iris stands for
        passion, and white iris symbolizes purity. Delight a special someone
        with a gift of exotic blue flowers from S.U-Bouquets. Delivered fresh from
        the fields across the U.S. Order a bouquet today.
      </p>
      <p class="text-justify fa-14 font-weight-bold py-3">
        What occasions do you send tulips?
      </p>
      <p class="text-justify fa-13">
        Tulip deliveries make a great gift for events such as:
      </p>
      <ul>
        <li class="fa-13 pb-2">
          Easter — since they symbolize rebirth and come in playful pastel
          colors, they are ideal for this holiday.
        </li>
        <li class="fa-13 pb-2">
          Birthdays — these fun and festive blooms mirror the colorful look of
          balloons!
        </li>
        <li class="fa-13 pb-2">
          Baby showers — nothing livens up the decor quite like flower
          arrangements of gorgeous pink tulips.
        </li>
        <li class="fa-13 pb-2">
          Bridal showers — white tulips are a fun way to say congrats to the
          bride-to-be!
        </li>
      </ul>
      <p class="fa-13 pt-3">
        No matter the fun occasion, tulip arrangements are an excellent choice
        for a flower delivery you can send today!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "blue-bouquets",
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
