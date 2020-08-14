<template>
  <div class="birthday-for-mom w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="font-weight-bold h3">Birthday Flowers for Mom</p>
      <p class="text-justify fa-14">
        Surprise Mom this year with a fresh bouquet of flowers for her birthday.
        From fragrant lilies to classic roses and exotic orchids, we make
        choosing flowers for any Mom’s birthday easy. And our 7-day freshness
        guarantee makes sure her birthday floral arrangement lasts long after
        the candles are blown out.
      </p>
    </div>
    <div
      class="birth-product-container row justify-content-center w-100 mx-0"
      v-if="products.length"
    >
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
    <nav aria-label="..." v-if="products.length">
      <ul class="pagination row mx-0 w-100 justify-content-center my-4">
        <li class="page-item  active">
          <span class="page-link rounded-circle mx-2"> 1</span>
        </li>
        <li class="page-item">
          <span class="page-link rounded-circle mx-2 cursor-pointer">2</span>
        </li>
        <li class="page-item">
          <span class="page-link border-0 cursor-pointer"
            ><i class="fa fa fa-angle-double-right"></i
          ></span>
        </li>
      </ul>
    </nav>
    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Birthday Flowers Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Birthday Gift Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Birthday Gift Online
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Birthday Gift For Her
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Happy Birthday Rose
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Same Day Delivery Birthday Gifts
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Birthday Plants
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Birthday Delivery
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold h3 pb-2">Sending Birthday Flowers to Mom</p>
      <p class="text-justify fa-13">
        When it comes to birthdays, mom always deserves the best and of course
        every mom deserves a bunch of beautiful flowers on her birthday. The
        good news? Whether you’re in town to spoil mom or not, sending flowers
        just got even easier. That’s because here at ProFlowers we have added
        even more beautiful perfect-for-mom flowers to our already outstanding
        collection.
      </p>
      <p class="text-justify fa-13 pt-2">
        Shop birthday flowers for mom and discover mixed bouquets and flower
        arrangements to suit every taste. Our beautiful selection is guaranteed
        to impress. For the mom who loves vibrant color we have bold mixed
        bouquets of carnations, asters and daisies. And, for the mom who likes
        something simple, we offer a wide range of one-flower bouquets featuring
        everything from Dendrobium orchids to roses or lilies.
      </p>
      <p class="text-justify fa-13">
        If you’re not sure mom wants a bouquet, we’re ready with all kinds of
        great gift ideas. Everything from chocolate gift packages to spa gift
        baskets, gift ideas for her have never been so easy to find. How about a
        cute cookie arrangement to please her sweet side. Why not think outside
        of the gift box and try a gift basket? Our mix of gift baskets are
        guaranteed to make mom feel truly special. Discover great flower gifts
        for mom at ProFlowers. Alongside our many pretty bouquets we offer
        potted plants, orchids and other great birthday gift ideas. What’s more,
        if you really want to sweep mom off her feet, we can even help you pull
        off a two-days-of-gifts or even a three-months-of-flowers extravaganza!
        How’s that for one of a kind floral gift?
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";
export default {
  name: "birthday-for-mom",
  components: { EmptyResults, cardTemplate },
  data() {
    return {
      products: products.products,
    };
  },
  mounted() {
    this.$emit("itemsLength", this.products.length);
  },
};
</script>

<style scoped lang="scss">
</style>
