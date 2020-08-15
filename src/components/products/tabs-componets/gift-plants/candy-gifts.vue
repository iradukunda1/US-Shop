<template>
  <div class="candy-gifts w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Candy Bouquet Delivery</p>
      <p class="text-justify fa-14 pb-4">
        Lavish loved ones with candy bouquets that drain will-power but boost
        happiness levels! Filled with premium chocolate and other sweets,
        S.U-Bouquets’ candy gift baskets pamper deserving dads, grandmas, teachers
        and more! Order for maximum happiness today!
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
        Candy Bouquet Online
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Candy Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Camarel Apples For Sale
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sugar Free Gift
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Nut Gift Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Cheese Bouquet Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Baskets Gourmet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Online Food Gift
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="h3 pb-2">Yummy Candy Bouquets from S.U-Bouquets!</p>
      <p class="font-weight-bold fa-14 pb-5 pt-2">Candy Bouquet Delivery</p>
      <p class="text-justify fa-13">
        Surprise loved ones with decadent candy bouquets that are filled with
        salty pretzels, rich chocolates, and delicious treats to hit every taste
        bud with astounding flavors. Candy arrangements are the perfect gift for
        moms, dads, grandparents, friends, teachers, coworkers, and so much
        more. With a gift like this, your loved ones will be forever thankful
        and satisfied!
      </p>
      <p class="font-weight-bold fa-14 py-3">
        Send Candy Bouquets
      </p>
      <p class="text-justify fa-13">
        At S.U-Bouquets, you can get candy bouquet delivery for any special
        occasion. Do you have a little sibling who is notorious for sneaking
        candy bars into the shopping cart when mom isn’t looking? Send a candy
        bouquet while you’re away at college to satisfy their sugar cravings. Or
        maybe your friend or coworker just graduated from a graduate program.
        Our candy bouquet delivery can be sent straight to their doorstep (or
        dorm!) so they know how proud you are of their accomplishments!
      </p>
      <p class="font-weight-bold fa-14 py-3">
        Gourmet Food Gifts Delivered
      </p>
      <p class="text-justify fa-13 pb-2">
        S.U-Bouquets knows there are many personalities in your life, which is why
        we have numerous mouth-watering gourmet food gifts you can get delivered
        when you’re far away from a loved one. From juicy fruit assortments to
        savory meats and cheese baskets, we have gourmet gift baskets for you.
        From the health conscious to the chocoholics, our selection of gift
        baskets will light up of the faces on any of your closest friends and
        relatives!
      </p>
      <p class="font-weight-bold fa-14 py-3">
        Gourmet Food Gifts for Every Occasion
      </p>
      <p class="text-justify fa-13 pb-2">
        There doesn’t have to be a special occasion to send a gourmet food gift
        to those closest to you! But if you are looking for the perfect gift to
        send your gratitude, we have you covered. Get birthday cupcakes
        delivered straight to the office for a hardworking co-worker or to your
        best friend’s front porch as they celebrate another trip around the sun!
        Or maybe a loved one has gotten sick or injured. At S.U-Bouquets, we have
        get well gift baskets with teas, cookies, crackers, and soups to lift
        the spirits of your friend or family member who’s under the weather. Our
        selection of gourmet food gifts contains both healthy and indulgent
        snacks great for any budget to put a smile on someone's face!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "candy-gifts",
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
