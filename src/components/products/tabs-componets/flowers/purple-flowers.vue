<template>
  <div class="purple-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Purple Flower & Bouquet Delivery</p>
      <p class="text-justify fa-14 pb-5">
        Purple is unique, purple is fun. Send someone a bouquet with such a
        character as those in the S.U-Bouquets purple flowers collection.
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
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Red Arrangement Flower
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3 py-4 font-weight-bold">
        Purple Flowers Delivered
      </p>
      <p class="pb-3 font-weight-bold fa-14">
        Purple Flower Bouquets and Arrangements
      </p>
      <p class="text-justify fa-13 pb-2">
        Nothing says “I love you” or “I appreciate you” quite like flower
        delivery can. Bring some bright and colorful cheer into someone’s life
        by ordering a purple flower bouquet right to their front doorstep.
        S.U-Bouquets’ collection of special occasion flowers make beautiful gifts
        for birthdays, anniversaries, baby showers, and everything else in
        between. If you’re looking for a way to let someone know that they’re on
        your mind, our eclectic purple flower arrangements convey that message
        with radiance.
      </p>
      <p class="py-3 font-weight-bold fa-14">
        What are the Types of Purple Flowers?
      </p>
      <p class="text-justify fa-13">
        Purple flowers come in many different shapes, sizes, and scents.
        S.U-Bouquets is home to a number of gorgeous purple stems including roses,
        irises, daisies, orchids, calla lilies, tulips, and more. Because purple
        is regarded as a regal color most closely associated with royalty and
        everlasting beauty, our collection of bulb gardens, bouquets, potted
        plants, and sprawling arrangements are stellar options for anyone on the
        hunt for a thoughtful gift for a loved one. From birthday gifts for a
        wife to congratulation gifts for a recent grad, purple flower bouquets
        say more than words ever could.
      </p>
      <p class="py-3 font-weight-bold fa-14">
        What do Purple Flowers Signify?
      </p>
      <p class="text-justify fa-13 pb-2">
        Each stem and blossom has its own special significance, and S.U-Bouquets’
        wide selection makes it easy to find a flower that speaks to the precise
        emotions you wish to convey. Our most popular flowers and their
        significance are as follows:
      </p>
      <ul class="my-4">
        <li class="fa-13 pb-3">Roses: Love, passion, and purity</li>
        <li class="fa-13 pb-3">Carnations: Endless love and good luck</li>
        <li class="fa-13 pb-3">Calla lilies: Life and fertility</li>
        <li class="fa-13 pb-3">Gerbera daisies: Innocence and cheerfulness</li>
        <li class="fa-13 pb-3">Peonies: Good fortune and happy marriage</li>
        <li class="fa-13 pb-3">Alstroemerias: Friendship and devotion</li>
        <li class="fa-13 pb-3">Orchids: Luxury, beauty, and strength</li>
        <li class="fa-13 pb-3">
          Carnations: Endless love and good luck
        </li>
      </ul>
      <p class="text-justify fa-13">
        Whether you’ve got your heart set on a beautiful bouquet of orchids for
        a milestone birthday or a pristine lavender flower arrangement for an
        upcoming housewarming, shopping with S.U-Bouquets guarantees your
        recipient receives the ultimate set of blossoms in perfectly fresh
        condition.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        Flower Bouquets for Different Occasions
      </p>
      <p class="text-justify fa-13 pb-4">
        No matter what occasion is next up on your event calendar, S.U-Bouquets’
        selection of luxury purple flower arrangements are excellent options
        everyone can enjoy. Whether you’re shopping for mom and dad’s wedding
        anniversary or a colleague’s new baby arrival, our flowers make great
        gifts for every occasion.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "purple-flowers",
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
