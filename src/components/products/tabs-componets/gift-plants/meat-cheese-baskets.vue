<template>
  <div class="meat-cheese-baskets w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Meat and Cheese Gift Baskets</p>
      <p class="text-justify fa-14 pb-4">
        A classic food pairing, you can’t go wrong with meat and cheese gifts.
        Charcuterie gifts have so many different delicious combinations, so our
        assorted baskets are a great gift for the special people in your life.
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
    <div class="footer-content my-4">
      <p class="font-weight-bold fa-14 py-3">
        sMeat and Cheese Gifts & Baskets
      </p>
      <p class="text-justify fa-13">
        A party stable, meat and cheese gifts definitely deliver the wow factor.
        Whether it’s from the aesthetic way they are arranged a butcher board or
        how each always has a unique taste, this gift will always be a classic.
        People have been pairing them together for years. From quick snacks
        right out of the fridge to a complete assortment as an appetizer, you
        can find charcuterie delight in this unique collection. Artisanal meats
        and cheeses are having a surge in popularity, as restaurants all over
        are adding a delectable assortment of these pairings to their menus. Why
        not send the charcuterie board to their home with our meat and cheese
        baskets?
      </p>
      <p class="font-weight-bold fa-14 py-3">
        How to Make a Charcuterie Board
      </p>
      <p class="text-justify fa-13 pb-2">
        With many of our meat and cheese gifts online, we have everything you
        need to make a one-of-a-kind charcuterie board right in their home. Many
        of our gifts arrive with an assortment of meats like summer sausage,
        salami, and even smoked salmon. Perfectly paired cheeses include classic
        cheddar, merlot mixed cheeses, and different spreads. To set up the
        board, many of our gifts come with crafted cutting boards or wooden
        blocks to layout your array of savory snacks. But everyone knows no
        charcuterie board isn’t complete without pairings! Our gift baskets come
        with olives, crackers, dried fruits, nuts, jellies, and more. Simply
        slice and arranged your goodies in the manner you please, and your board
        is ready to enjoy!
      </p>
      <p class="font-weight-bold py-3 fa-14">
        Send a Meat and Cheese Gift to Them
      </p>
      <p class="text-justify fa-13">
        When should you send a meat and cheese gift to your loved ones? Why for
        any reason or no reason at all! Getting a meat and cheese gift delivered
        is such a meaningful way to let your loved ones know how much you care
        for them. Each of our baskets is designed with the highest quality of
        ingredients. Whether you want to bring them comfort during difficult
        times or celebrate how much they mean to you, know you’ll get an
        expertly crafted and paired gift.
      </p>
      <p class="text-justify fa-13 pt-4">
        With S.U-Bouquets, ever item is delivered with care. We ensure that every
        gift arrives fresh and ready to delight you or your loved ones. No
        matter the occasion, ever gift from us is special. We offer everything
        from unique bouquets and farm-fresh flowers to sweet treats and savory
        goods. We guarantee gifts that are high quality and fresh as can be once
        they arrive.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";

export default {
  name: "meat-cheese-baskets",
  components: { EmptyResults, cardTemplate },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.$emit("itemsLength", this.products.length);
  }
};
</script>

<style scoped></style>
