<template>
  <div class="birthday-roses w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="font-weight-bold fa-14">Happy Birthday Roses</p>
      <p class="text-justify fa-14">
        Happy birthday to you… we hope it’s full of blooms! Our birthday roses
        feature beautiful bouquets, floral arrangements, and even potted rose
        plants. With roses featured in a rainbow of colors, there is sure to be
        a bouquet to deliver smiles and satisfaction to your special someone..
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
    <empty-results v-if="!products.length"/>
    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Happy Birthday Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Happy Birthday Gift
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Online Happy Birthday Gift
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Birthday delivery For Her
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Unique Birthday Gifts Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower For Mothers Birthday
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Birthday Plant
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold fa-14 pb-2">Birthday Roses Online</p>
      <p class="text-justify fa-13">
        Whether you want to say "I love you," "You’re a great friend," or "Enjoy
        your special day," SU-Bouquets can help you say it with a bouquet of
        beautiful celebration roses. This collection of online birthday roses is
        like no other. From one dozen rainbow roses, to pink pearl bouquets of
        roses, and even potted rose baskets, we’ve got the best assortment of
        happy birthday roses online.
      </p>
      <p class="text-justify fa-13 pt-2">
        When you send birthday flowers with SU-Bouquets, you’ll love the shopping
        experience just as much as the recipient will love receiving their
        bouquet gift. We give you a variety of colors, quantities, and types of
        rose bouquets from which to choose. Or if their special day lands in the
        winter, gift them with the Serenity bouquet that comes with white
        lilies, roses, and a hint of soft green hydrangea to create the most
        beautiful winter wonderland arrangement. With our large collection of
        roses, you can get the perfect birthday gift ideas from SU-Bouquets.
      </p>
      <p class="text-justify fa-13">
        What could be better for those birthday folks with a green thumb than
        potted roses for their thriving garden? For the best in birthday rose
        delivery, choose SU-Bouquets. Next time you need a special gift for an
        anniversary, birthday or graduation, take advantage of our flower
        delivery coupons for great deals for all occasions.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "birthday-roses",
  components: {EmptyResults, cardTemplate },
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

<style scoped lang="scss">
.birthday-roses {
  .button-collection {
    a {
      color: black;
      border: 2px solid black;
      &:hover {
        color: white;
        border: 2px solid rgb(0, 124, 173);
        background: rgb(0, 124, 173);
      }
    }
  }
}
</style>
