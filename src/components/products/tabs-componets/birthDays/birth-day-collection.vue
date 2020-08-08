<template>
  <div class="birth-day-collection w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="font-weight-bold fa-14">Birthday Collection</p>
      <p class="text-justify fa-14">
        Sending birthday flowers is a special way to remind your family and
        friends how happy you are that they are in your life. S.U-Bouquets
        brilliant collection of Happy Birthday flowers are specially designed to
        celebrate the joy and delight of the special day and is sure to put a
        smile on any birthday boy or girl’s face!
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
    <div class="footer-content mt-4">
      <p class="font-weight-bold fa-14 pb-2">Birthday Collection</p>
      <p class="text-justify fa-13">
        S.U-Bouquet birthday collection of blooms offers dozens of ways to say
        “happy birthday” with brightly colored fresh flowers. Our birthday
        collection features creatively crafted bouquets featuring romantic
        blends of different flowers, colors, and textures so you can find the
        perfect way to say happy birthday to your mom, best friend, daughter, or
        that special someone. Whether the birthday boy or girl likes
        traditional, romantic, wild, or whimsical, S.U-Bouquets’ birthday
        collection has it all. Each bouquet comes in a beautiful vase that has
        been carefully packaged by our team so it arrives perfectly ready for
        display. There’s no better way to celebrate another glorious year of
        life than by sending a fresh bouquet of birthday flowers, artfully
        designed and delivered by S.U-Bouquet.
      </p>
      <p class="font-weight-bold fa-14 pb-2">
        Birthday Gift Baskets and Treats
      </p>
      <p class="text-justify fa-13">
        Your special delivery birthday surprise doesn’t have to end with
        flowers. Add an artistically designed birthday gift basket filled with
        yummy birthday treats to accompany their sunny bouquet of flowers.
        Choose the ultimate in chocolaty birthday love with a cuddly birthday
        teddy bear bearing gifts of decadent chocolate brownie pops, luscious
        strawberries hand-dipped in Belgian chocolate, and a personalized
        birthday card. Send a tin of Mrs. Field’s cookies, festively decorated
        chocolate strawberries, birthday cupcakes, cakepops, chocolate covered
        Oreos, or a giant Mrs. Field’s cookie cake. S.U-Bouquets’ birthday
        collection includes countless ways to say “happy birthday” in a
        deliciously memorable way and deliver birthday joy right their doorstep.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "../../../shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "birth-day-collection",
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

<style scoped></style>
