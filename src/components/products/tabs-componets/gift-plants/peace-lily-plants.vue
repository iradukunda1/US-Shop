<template>
  <div class="peace-lily-plants w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Peace Lilies</p>
      <p class="text-justify fa-14 pb-4">
        Whether you need a beautiful birthday, sympathy or a simple gift to
        remind someone you’re thinking of them, the serene peace lily is the
        perfect choice.
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
        Potted Plant Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Lily Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Stargazer Lily
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Calla Lily Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        White Lilies
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Peruvian Lily Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Pink Lilies
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Orange Lilies
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="h3 pb-2">Buy Peace Lily Plants from S.U-Bouquets</p>
      <p class="text-justify fa-13 pb-2">
        Facing the loss of a loved one can be one of the most difficult things
        to go through. When someone you know is dealing with this difficult
        experience, you want to say and do the right thing to help ease their
        suffering. This small gesture of sending a peace lily goes a long way,
        bringing a quiet moment of serenity amidst the chaos. A simple peace
        lily plant is a natural choice at this time. Its calming beauty makes it
        the ideal gift for expressing thoughts of sympathy and condolences.
        Living plants are the perfect alternative to flowers, in that with the
        proper care they can last for months or even longer.
      </p>
      <p class="text-justify fa-13">
        Although these plants are often the first choice as condolence gifts,
        the Japanese peace lily is a fabulous gift for any time. These hardy
        plants thrive in just about any conditions and take very little care to
        keep them healthy, making them a wonderful option for someone who enjoys
        the beauty of plants without all the work. All these gorgeous plants
        really need is water once a week and a little indirect sunshine. It’s
        that easy. These lush, green beauties also help clean the air by
        removing all kinds of harmful toxins such as formaldehyde, acetone and
        ammonia. The versatile peace lily owes its name to the flower’s striking
        resemblance to white truce flags.
      </p>
      <p class="text-justify fa-13">
        S.U-Bouquets carries a wide variety of great house plants and gift ideas
        for every occasion. Plants are a good way to congratulate, celebrate or
        memorialize a loved one. Whether you need to send white lilies or any
        kind flowering plant gift to someone you love, S.U-Bouquets makes it quick
        and easy. With our online store you can shop whenever and wherever it’s
        convenient for you. We can even deliver your gift as quickly as the next
        day. Our staff of knowledgeable customer service representatives to help
        with any questions you might have.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "peace-lily-plants",
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
