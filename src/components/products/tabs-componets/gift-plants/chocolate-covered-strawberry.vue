<template>
  <div  class="chocolate-covered-strawberry w-100 position-relative pt-2 pl-5 pr-5"
  >
    <div class="header-content">
      <p class="pb-2 h2">Chocolate Covered Strawberries</p>
      <p class="text-justify fa-14 pb-4">
        Have you ever had the urge to send someone a sweet, luxurious,
        irresistible treat that they’re sure to enjoy? S.U-Bouquets makes it easy.
        We offer some of the most delectable chocolate covered strawberries
        around, delivered straight to your recipient’s door. They’re fresh,
        they’re sweet, and they can’t be beat. Show someone how much you care by
        sending them chocolate covered strawberries today!
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
        Fruit Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Fruit And Chocolate Covered Strawberries
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Cheap Chocolate Covered Strawberries Under 20
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Cheap Fruit Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Organic Edible Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Fruit For Month Club
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Wedding Chocolate Covered Strawberries
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="font-weight-bold fa-14 pb-5 pt-2">
        Can you mail chocolate covered strawberries?
      </p>
      <p class="text-justify fa-13">
        You sure can! With S.U-Bouquets, sending a special occasion food delivery
        like chocolate covered strawberries is simple. Just follow these easy
        steps:
      </p>
      <ul class="my-4">
        <li class="pb-3 fa-13">Pick the tastiest looking batch on the page</li>
        <li class="pb-3 fa-13">
          Be sure you enter your email to save on your first order!
        </li>
        <li class="pb-3 fa-13">Choose your shipping options</li>
        <li class="pb-3 fa-13">
          Send your delicious chocolate covered strawberries!
        </li>
      </ul>
      <p class="font-weight-bold fa-14 py-3">
        What are the best flowers to send with chocolate covered strawberries?
      </p>
      <p class="text-justify fa-13">
        Roses are the perfect flowers to accompany a chocolate covered
        strawberry delivery. Roses and chocolate are a timeless pair, and a
        romantic and thoughtful way to show that special someone you’re thinking
        about them. However, these tasty morsels don’t have to only be a
        romantic gesture! You could send a thoughtful delivery to someone you
        care about by pairing with almost any flower we offer!
      </p>
      <ul>
        <li class="fa-13 pb-3">
          Pair the strawberries with sunflowers for a gorgeous and delicious
          summertime treat
        </li>
        <li class="fa-13 pb-3">
          Choose your favorite daisies for a playful and whimsical flower
          delivery
        </li>
        <li class="fa-13 pb-3">
          Send along some colorful tulips to celebrate the joys of springtime
        </li>
        <li class="fa-13 pb-3">
          Double down and pair with chocolate dipped pretzel gifts for a
          non-stop chocolate treat!
        </li>
      </ul>
      <p class=" fa-13 py-3">
        Whatever flower you choose to pair your chocolate strawberries with,
        they’re sure to please.
      </p>
      <p class="fa-14 font-weight-bold pb-3">
        Where to buy the best strawberries for delivery?
      </p>
      <p class="text-justify fa-13 pb-2">
        We can’t help but suggest S.U-Bouquets — with our signature selection of
        irresistible chocolate covered berries and pretzels, along with gorgeous
        love flowers to pair them with, you won’t be disappointed. Plus, our
        top-tier delivery logistics ensure that the strawberries arrive fresh
        and on-time, so whoever you send them to is able to enjoy them at the
        height of flavorfulness.
      </p>
      <p class="fa-13 py-3">
        S.U-Bouquets chocolate covered strawberries come in a variety of colors
        and flavors, so there’s sure to be something for everyone on our
        catalog! Choose from:
      </p>
      <ul class="text-justify fa-13 pb-2">
        <li class="fa-13 pb-3">Belgian milk chocolate covered strawberries</li>

        <li class="fa-13 pb-3">Strawberries coated in rich dark chocolate</li>

        <li class="fa-13 pb-3">
          Holiday-themed strawberries in festive colors
        </li>

        <li class="fa-13 pb-3">Congrats! Strawberries for a celebration</li>
      </ul>
      <p class="fa-13 py-3">
        No matter the recipient or occasion, our strawberries make a memorable
        and delectable gift.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "chocolate-covered-strawberry",
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
