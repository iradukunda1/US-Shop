<template>
  <div class="housewarning-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Housewarming Plants, Flowers, and Gifts</p>
      <p class="text-justify fa-14">
        What better way to christen a new home than with the gift of a charming
        bouquet or potted plant? Our housewarming flowers will not only brighten
        their new space, but the fragrant blooms will have it feeling like home
        in no time.
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
      <p class="font-weight-bold mb-0 pb-2 h4">
        Say Thank You with Beautiful Housewarming Gifts
      </p>
      <p class="text-justify fa-13">
        Celebrate, commemorate and decorate those are the intentions behind
        great housewarming gifts. You want to celebrate the new home and the
        many memories that the family will soon create there. Commemorate all
        the hard work it took to get there and share a special gift to add
        warmth and beauty to their new space. S.U-Bouquets offers an exceptional
        variety of housewarming gift idea for every style and budget. From
        beautiful bouquets and centerpieces to high quality wreaths for every
        season, S.U-Bouquets is your first and last stop for all your important
        gifting needs.
      </p>
      <p class="fa-13">
        Fresh wreaths make traditional housewarming gifts that look amazing and
        add incredible color and fragrance to the home. Each of our unique
        wreaths is carefully handmade and delivered straight to your front door.
        Our wreaths selection includes both live and dried types, for both
        indoors and outdoors. While we offer the very popular Christmas wreath
        variety, we also create plethora of other themes, ranging from warm
        orange and red fall wreaths, to those creatively made of succulents or
        lavender, each adding the perfect dash of style to your front door.
        Flowers are always good housewarming gifts that also deliver beauty and
        freshness to any room. S.U-Bouquets chooses only the highest quality
        blooms to create our gorgeous assortment of floral bouquets and
        centerpieces. Arrangements of brightly hued daisies or elegant orchid
        plants are just a few of the hundreds of housewarming gift options you
        will find. We also carry some delicious gourmet foods, elegant fruit
        gift baskets and decadent chocolate treats. You can trust that
        S.U-Bouquets has the perfect gift for all your special occasions.
      </p>
     
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "housewarning-flowers",
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
