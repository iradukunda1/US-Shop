<template>
  <div class="chocolate-gifts w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Send the Gift of Chocolate from S.U-Bouquets</p>
      <p class="text-justify fa-14 pb-4">
        Chocolate is everyone’s favorite love language, no matter the occasion.
        Show your love with delicious, gourmet chocolate gift baskets and
        assorted chocolate treat specialties delivered in beautifully wrapped
        packaging from S.U-Bouquets.
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
      <p class="font-weight-bold fa-14 pb-5 pt-2">
        Chocolate Gift Baskets Overflowing with Chocolate Goodness
      </p>
      <p class="text-justify fa-13">
        Sending chocolate to your sweetheart is the best way to sweeten up
        anyone’s day. S.U-Bouquets’ online selection of chocolate gift baskets
        offers beautifully assorted artisan chocolate creations guaranteed to
        temp and delight any chocolate lover! Choose plump, fresh strawberries
        that have been hand-dipped in luscious Belgian white, dark, or milk
        chocolate. These popular chocolate treats are also available with a mix
        of chocolate and sea salted caramel for those who like their chocolate
        with a little twist. If your loved one prefers cherries to strawberries,
        indulge in delightfully sweet chocolate dipped Maraschino cherries.
        Other varietal chocolate gift baskets include decadent assortments of
        chocolate covered nuts, caramels, trays of dried fruit dipped in
        chocolate, and other snack favorites that have been drenched in
        chocolate luxury that nobody will be able to resist.
      </p>
      <p class="text-justify fa-13">
        Our online chocolate gift basket also includes luxury chocolate
        confections from famed Godiva and Ghirardelli chocolatiers. For that
        special someone who loves a little variety in their chocolate, the
        Godiva chocolate tower combines a mouth-watering combination of Godiva
        chocolate covered almonds, pretzels, cookies, and their signature
        chocolate truffles. If that still doesn’t sound like enough to tempt
        your chocolate lover, then take it to the next level with Godiva’s
        chocolate overload basket. This giant chocolate gift basket includes
        Godiva favorites like assorted chocolate bars, chocolate truffles,
        chocolate-covered almonds and cashews, chocolate covered biscuits and
        pretzels, cocoa pouches, and so much more. It’s all the Godiva chocolate
        covered love you can handle in one beautiful gift basket. Order the
        ultimate combination of chocolate covered treats online from S.U-Bouquets
        and deliver chocolate sweetness to your sweetheart.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        Online Chocolate Covered Baked Sweets
      </p>
      <p class="text-justify fa-13">
        Whether you’re shopping for a holiday, birthday, anniversary, or special
        occasion, S.U-Bouquets’ online collection of chocolate gift baskets isn’t
        limited to chocolate covered fruits and candies. We also take everyone’s
        favorite baked goods to the next level of chocolate perfection by
        dipping them in luxurious Belgian chocolate. Your sweetheart can savor
        the sweetness of chocolate covered Oreo cookies, chocolate dipped cake
        pops, chocolate covered cheesecake bites, and chocolate covered mini
        donuts all elegantly arranged in a beautifully delicious gift basket.
      </p>
      <p class="fa-14 font-weight-bold py-3">
        Online Chocolate Gift Baskets Deliver Sweetness to Your Sweetheart
      </p>
      <p class="text-justify fa-13 pb-3">
        Imagine the look of joy on your loved one’s face when greeted by a
        sinfully delicious chocolate gift basket of their favorite confections
        delivered by S.U-Bouquets. Chocolate delivery wherever you need it is as
        easy as the click of a button when you shop online at S.U-Bouquets. All
        you need to do to have your chocolate gift basket delivered as early as
        the same or next day is to choose your online chocolate gift and select
        the desired delivery date and location. Chocolate delivery is available
        to businesses and residences, with both day and evening delivery options
        available. Order early to get your preferred delivery date and let
        S.U-Bouquets deliver that sweet, special joy that only chocolate can give!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "chocolate-gifts",
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
