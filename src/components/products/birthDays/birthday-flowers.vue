<template>
  <div class="birthday-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="font-weight-bold fa-14">Birthday Flowers</p>
      <p class="text-justify fa-14">
        Birthday Flowers Delivery - A birthday delivery of fresh, fragrant
        flowers or a sweet, thoughtful gift is an easy and personal way to let
        someone know you remembered their special day. Our wide variety of
        birthday flower bouquets and gifts is always the right choice for every
        birthday on your list.
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
    <nav aria-label="...">
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
        Birthday Roses
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
      <p class="font-weight-bold fa-14 pb-2">Birthday Flowers</p>
      <p class="text-justify fa-13">
        Happy birthday flowers are the perfect gift to celebrate another year of
        smiles, milestones, and laughs! Our wide variety of birthday flower
        delivery bouquets and gifts is always the right choice for every
        birthday on your list. From mixed arrangements to birthday flowers
        paired with gifts and goodies, ProFlowers has your birthday shopping
        covered.
      </p>
      <p class="font-weight-bold fa-14 pb-2">
        We Help You Send the Right Message
      </p>
      <p class="text-justify fa-13">
        Trust ProFlowers to help you deliver some birthday love to that special
        someone. We've even got birthday flower cards with living flowers
        inside. Sending happy birthday flower bouquets lets your favorite
        birthday guys and gals know how much they mean to you. Whether you’re
        shopping for Mother’s Day flowers delivered on Sunday or holiday gifts —
        order flowers online with us, and you’re sure to make their day!
      </p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import products from "@/components/products/controllers/products";
import cardTemplate from "@/components/shared/CardTemplate";

export default {
  name: "birthday-flowers",
  components: { cardTemplate },
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
.birthday-flowers {
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
