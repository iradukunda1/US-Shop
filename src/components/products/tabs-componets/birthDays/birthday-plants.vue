<template>
  <div class="birthday-plants w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="font-weight-bold fa-14">Birthday Plants</p>
      <p class="text-justify fa-14">
        Their birthday may be only one day a year, but our plants will last much
        longer. Whether it’s a fragrant gardenia, an exotic orchid or a lucky
        bamboo, any of these plants will make their day truly special.
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
      <p class="font-weight-bold fa-15 pb-2">Birthday Plants</p>
      <p class="text-justify fa-13">
        Birthdays only come once a year, which is why you need to make sure
        their special day is one to remember. The best way to help your loved
        one celebrate another trip around the sun is with birthday plants that
        will light up the room. Whether you choose a lucky bamboo plant,
        gardenias, roses, or exotic orchids, our selection of happy birthday
        plants will bring a smile to any guest of honor.
      </p>
      <p class="font-weight-bold fa-14 pb-2">
        What are the best plants to get for a birthday?
      </p>
      <p class="text-justify fa-13 pt-2">
        The best plants to get for a birthday are ones that radiate joy and
        happiness. What better way to brighten up one’s big day than with a
        vibrant sunflower bouquet? Or, choose an elegant hanging spider plant
        that is easy to take care of and will add a splash of green to any room.
        At SU-Bouquets, our birthday plant delivery is second to none. We have
        plenty of happy birthday flowers and happy birthday gift baskets that
        are suitable for any birthday guy or gal in your life. We even have a
        variety of same-day delivery options to choose from, so you don’t show
        up to the party empty-handed!
      </p>
      <p class="font-weight-bold fa-14 pb-2">
        What gifts pair well with birthday plants?
      </p>
      <p class="text-justify fa-13 pt-2">
        If you’re getting birthday plants delivered straight to the doorstep of
        your best friend or family member, you might as well tack on a second
        gift that pairs well with it! Flowers are a great way to show your love
        and appreciation for those closest to you in life. But if you want to
        make their birthday even more special, send along one of our birthday
        gift baskets filled with delectable chocolates, juicy fruits, and salty
        nuts to give their taste buds a party, too. Aside from flowering plants,
        you can send your birthday wishes with our mouth-watering cakes, classic
        chocolate chip cookies, and one-of-a-kind cake pops! With gifts like
        these, the party never has to end.
      </p>
      <p class="font-weight-bold fa-14 pb-2">
        Why is a birhtday plant the perfect gift?
      </p>
      <p class="text-justify fa-13 pt-2">
        The last thing you want is a shot-in-the-dark gift that the recipient
        will forget about or return. Instead, give the gift of life with a
        bouquet of flowers that will add charm to any table, desk, or counter. A
        birthday plant is a perfect gift because they’re unique, thoughtful, and
        spread beauty wherever they’re placed. Whether it’s for an aunt with a
        green thumb or a friend who wants to add decor to their new apartment, a
        birthday plant will go a long way.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "birthday-plants",
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
.birthday-plants {
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
