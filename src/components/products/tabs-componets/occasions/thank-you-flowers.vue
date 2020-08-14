<template>
  <div class="thank-you-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Thank You Flowers</p>
      <p class="text-justify fa-14">
        Let’s say you were invited to a lovely dinner party or maybe someone did
        you a huge favor and you are looking for the ideal gift to say thank
        you, but you’re not sure what a simple, kind, and thoughtful way to do
        this is. S.U-Bouquets has the answer: a flower or gift delivery. By
        sending someone a radiant bouquet delivered straight to their door, you
        show them that you truly care and are grateful for their kindness. Plus,
        throwing in a tasty delivery of chocolates or cookies is sure to make
        them smile. Check out our gorgeous selection of flower bouquets, and
        impress someone you want to thank today!
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
        New Flowers Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Unique Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Love Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Best Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Think of You Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sweetest Day Delivery
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="fa-14 font-weight-bold pb-3">
        What is a good thank you gift?
      </p>
      <p class="text-justify fa-13">
        The best thank you gifts show that you are grateful and are beautiful or
        useful to the recipient. This is why flowers make such a gracious and
        elegant choice for hostess gift ideas if you were invited to dinner, or
        teacher appreciation flowers for the educator in your life who truly
        made a difference. Flowers are an excellent choice because they are
        genuine, beautiful, and a sure bet no matter who you want to send them
        to.
      </p>
      <p class="fa-14 font-weight-bold pb-3">
        What types of flowers mean gratitude?
      </p>
      <p class="fa-14 py-4">
        Almost any type of flower can mean gratitude as long as you include a
        heartfelt note explaining your gift! However, different flowers do come
        with their own connotations.
      </p>
      <ul>
        <li class="fa-14 pb-3">
          Daisies are a great way to playfully and happily say thank you for a
          fun favor or a nice evening.
        </li>

        <li class="fa-14 pb-3">
          Sunflowers are a great way to thank a teacher for their service.
        </li>

        <li class="fa-14 pb-3">
          Carnations are a great gift for employees to say thanks for a job well
          done.
        </li>

        <li class="fa-14 pb-3">
          Roses are a romantic and passionate way to thank someone for a lovely
          date.
        </li>

        <li class="fa-14 pb-3">
          Lilies are a classy and elegant way to thank a host or hostess for
          inviting you to an event.
        </li>
      </ul>
      <p class="text-justify fa-13 pb-2">
        Of course, no matter which gorgeous S.U-Bouquets blooms you choose, your
        message of thanks will be appreciated!
      </p>
      <p class="fa-14 font-weight-bold pb-3">
        What color flowers say “thank you”?
      </p>
      <p class="text-justify fa-13">
        Any flower you choose can be used to say thank you! A thank you bouquet
        or appreciation flowers can come in any number of colors depending on
        the situation. For something happy and light, like flowers for a teacher
        or a thank you floral arrangement for someone who did you a favor,
        yellow flowers or a multicolor bouquet are a great choice.
      </p>
      <p class="text-justify fa-13 pb-2">
        For something classy like a thank you for hosting a dinner party,
        consider a radiant bouquet of purple lilies that are as regal as they
        come. Flowers that mean thank you can come in all shapes, sizes, and
        colors, so feel free to get creative when you order flower delivery from
        S.U-Bouquets today!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "thank-you-flowers",
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
