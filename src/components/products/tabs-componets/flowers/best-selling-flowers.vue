<template>
  <div class="best-selling-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Send Flowers</p>
      <p class="text-justify fa-14 pb-4">
        Let’s be honest, with today’s busy schedules, going out and shopping for
        flowers can be a headache. Sending flowers and bouquets to your those
        you love is easier than ever with online ordering and delivery through
        S.U-Bouquets! We make sending the right message simple with a wide
        variety of expertly arranged flowers that are sure to please. Send
        flowers to your special someone by ordering your flowers online today!
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
    <div class="row mx-0 w-100 button-collection ">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Same Day Flower Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Cheap Flower Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Tropical Flower Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Roses
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower Delivery Usa
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flowers And Chocolate
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flowers Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Preserved Roses
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="fa-14 font-weight-bold mt-5 pb-2">
        How much does it cost to send someone flowers?
      </p>
      <p class="text-justify fa-13 pb-2">
        Depending on the bouquet of flowers you choose and the day you need
        them, the price of sending flowers can vary significantly. S.U-Bouquets
        strives to make online flower ordering and delivery affordable for every
        budget. We often have sales on many of our bouquets, meaning you can
        score a high-quality flower arrangement for less than $30!
      </p>
      <p class="text-justify fa-13 pb-2">
        Need to order birthday flowers last minute for a celebration that
        slipped your mind? S.U-Bouquets offers same-day delivery so they’ll
        never know the difference, and it will only cost you an extra $4.99.
      </p>
      <p class="fa-14 font-weight-bold mt-5 pb-2">
        What occasions should I send flowers?
      </p>
      <p class="text-justify fa-13">
        There is truly no limit to the occasions in which you could send
        flowers. However, some of the most popular reasons to send flowers
        include anniversaries, graduations, birthdays, and other occasions you’d
        want to offer your well-wishes. A thoughtfully selected bouquet is a
        great way to say congratulations as well as send your love to someone
        who is grieving.
      </p>
      <p class="text-justify fa-13">
        However, you don’t always need a reason. Afterall, there’s something to
        be said for just-because gifts. Whatever the occasion, we have the
        perfect bouquet for your needs! From bright and beautiful sunflowers to
        romantic red roses, our floral arrangements always make the right
        impression.
      </p>
      <p class="fa-14 font-weight-bold mt-5 py-2">
        Who should I send flowers to?
      </p>
      <p class="text-justify fa-13">
        You can send flowers to virtually anyone; your friends, family, and even
        your boss will appreciate a beautiful bouquet. When looking at flowers
        online, keep in mind the person you’re sending them to and why. You want
        to choose something that matches their personality and is also best
        suited for the circumstances.
      </p>
      <p class="text-justify fa-13 mb-5">
        What are you waiting for? Show that special someone you’re thinking of
        them by ordering flowers online now!
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "best-selling-flowers",
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

<style scoped lang="scss">
.best-selling-flowers {
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
