<template>
  <div class="all-gift-baskets w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Gift Basket Delivery</p>
      <p class="text-justify fa-14 pb-4">
        We offer gourmet gift baskets for every special occasion! Choose from
        our wide variety of unique gift baskets, including: holiday gift
        baskets, fruit baskets, spa gift baskets, snack gift baskets, baby gift
        baskets, and more.
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
        Spa Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flowers Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Cheap Gift Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Starbucks Coffee Gift Set
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Get Well Care Package
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Holiday Gift Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Thank You Baskets
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="h3 pb-2">Unique Gift Baskets at S.U-Bouquets</p>
      <p class="text-justify fa-13 pb-2">
        You don’t need a special occasion to make someone feel special. Not when
        S.U-Bouquets has such great prices on all the very best gift baskets. Our
        fantastic deals make it easy to treat your loved ones to gorgeous gift
        baskets without busting the budget.
      </p>
      <p class="text-justify fa-13 pb-2">
        From our quick and easy ordering to the huge selection of thoughtful
        gift options, there is a lot to love about S.U-Bouquets. Gift baskets are
        the perfect choice for snackers, chocoholics, coffee lovers and wine
        enthusiasts - there is something here for everyone. Gift giving is so
        much easier with S.U-Bouquets at your fingertips. Looking for gourmet food
        gift baskets? Choose from S.U-Bouquets’ delicious selection of fancy
        cookies, nuts, chocolates, wine and cheese baskets, and so much more.
      </p>
      <p class="font-weight-bold py-3 fa-14">
        Business and Corporate Gift Baskets
      </p>
      <p class="text-justify fa-13">
        When you send a delectable food gift basket from S.U-Bouquets to someone
        you love, it’s bound to be a big hit. Everything’s coming up yummy when
        you send a gift basket filled with rich cookies, fresh organic fruits,
        fancy nuts, elegant wines and imported cheeses, even luscious chocolate
        strawberries for delivery. Healthy gift baskets are another great gift
        option available for those who are watching their calories. S.U-Bouquets
        also has gourmet coffee and tea baskets that are guaranteed to surprise
        and delight. Sending gift food baskets has never been easier!
      </p>
      <p class="font-weight-bold py-3 fa-14">
        Holiday Gift Baskets
      </p>
      <p class="text-justify fa-13">
        Who can resist gourmet cookies, chocolates, fruits, nuts and snacks?
        Order gourmet gifts from S.U-Bouquets today and surrender to temptation.
        If you bring a fruitcake to a holiday party, chances are you’ll never be
        invited back. Happily, our gourmet food baskets make a welcome gift on
        just about any occasion. S.U-Bouquets huge selection of gift baskets can
        include fresh fruits, cookies, chocolates, nuts, and many more savory
        delights. Birthday gift baskets from S.U-Bouquets make a wonderful gift.
        Choose from gourmet foods, wines, coffees and more.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "all-gift-baskets",
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
