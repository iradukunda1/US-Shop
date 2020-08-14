<template>
  <div class="flowers-by-mail w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Mail Flowers</p>
      <p class="text-justify fa-14 pb-4">
        When you need to send flowers by mail, look to S.U-Bouquets for the
        freshest, most amazing floral gift selection available. Whether you need
        a beautiful birthday bouquet or just a thoughtful way to say “thank
        you,” we have just the right flowers to help you say it.
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
        Next Day Delivery Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flowers For Every Month
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Roses Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower Delivery Today
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Delivery Flower Tomorrow
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Florists Open On Sunday
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Last Minute Flowers Near Me
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Same Day Gift Baskets Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Luxury Flowers Delivery The Same Day
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Flower On Monday
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold h3 py-4">
        Order Flowers by Mail from S.U-Bouquets
      </p>
      <p class="text-justify fa-13 pb-2">
        Sending mail order flowers and plants doesn’t have to be a daunting
        proposition; not when you have S.U-Bouquets to take care of all the
        details. Whether you want to send a bouquet of roses for Valentine’s
        Day, a thoughtful sympathy gift, or a beautiful flowering plant just to
        say you care, we have lots of options to pick from. While many other
        places selling flowers online may say their flowers are the freshest,
        but S.U-Bouquets guarantees it.
      </p>
      <p class="text-justify fa-13">
        Next time you need to send birthday flowers, look no further than
        S.U-Bouquets. We have so many wonderful flowers and arrangements from
        which to choose. Send a birthday surprise them with a rainbow assortment
        tulips in a gorgeous colored vase. We also have a unique selection of
        floral gifts that make incredibly beautiful wedding flowers, from
        amazing roses in just about any color you would like to graceful orchids
        and lilies, whatever the occasion we have the perfect flowers. Out of
        town wedding? You can still send them well wishes with a fantastic gift
        of mail order wedding flowers.
      </p>
      <p class="font-weight-bold fa-14 py-4">
        Flower Delivery Made Easy
      </p>
      <p class="text-justify fa-13 pb-2">
        Why does S.U-Bouquets have the best mail order flowers around? Because we
        carry only the highest quality flowers available. Our flowers are
        delivered direct from the growers so you know they are the freshest
        available. The difference shows. Now you can feel confident when you
        send flowers by mail from S.U-Bouquets. Even if you need to send flowers
        as early as next day, it’s no problem for us. We ship to just about
        everywhere within the United States.
      </p>
      <p class="text-justify fa-13">
        Next time you need a special gift for an anniversary, birthday or
        graduation, take advantage of all the unbelievable deals we offer.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "flowers-by-mail",
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
