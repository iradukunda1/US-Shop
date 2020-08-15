<template>
  <div class="all-gourmet-food-gifts w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Flowers & Food Delivery</p>
      <p class="text-justify fa-14 pb-4">
        From charcuterie and cheese baskets to smooth and creamy chocolate
        assortments, shop S.U-Bouquets for the most amazing variety of gourmet
        gift baskets and treats suitable for any occasion.
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
      <p class="h3 pb-2">Choose Gourmet Food Delivery from S.U-Bouquets</p>
      <p class="text-justify fa-13">
        If you have a big holiday or family celebration coming up S.U-Bouquets
        has a wonderful selection of gourmet food delivery products available to
        help keep the party going. From yummy chocolate creations and
        scrumptious baked goods to all kinds of fruit and cheese baskets, we’ve
        got all the makings of a fabulous time.
      </p>
      <p class="text-justify fa-13">
        S.U-Bouquets knows how busy you are, especially around holidays and
        special occasions. That’s why we’ve made our online gift shop so easy to
        use. Shop anytime and anywhere it’s convenient for you. You can have an
        amazing gourmet foods delivery ordered in a snap. And if you’re ordering
        last-minute, we can deliver your gift as soon as the next day.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        Gourmet Food Home Delivery is so Convenient!
      </p>
      <p class="text-justify fa-13 pb-2">
        The holidays are so hectic with all the parties and shopping to attend
        to. Cross one more thing off your to-do list with S.U-Bouquets. We have
        all kinds of fantastic Christmas food gifts that will make you look like
        a pro. Have a gourmet food basket delivered right to their home or
        office. Send a basket of our famous hand-dipped chocolate strawberries
        or cherries to a special business associate, or a box of moist chocolate
        chip cookies to your trusty babysitter. Whomever you’re thinking of, we
        have the perfect gift idea. And sending food gifts for Christmas is a
        great idea since you never have to worry about picking the wrong size or
        color.
      </p>
      <p class="text-justify fa-13 pb-2">
        Show long-distance friends and family how much you care with a
        beautifully designed gourmet food gift delivery. Choose from fine meats
        and cheeses or something sweet from our sampling of chocolate and
        dessert items. Whichever way you go, you can feel confident you’re
        sending something that will taste spectacular.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "all-gourmet-food-gifts",
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
