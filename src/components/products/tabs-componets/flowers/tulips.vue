<template>
  <div class="tulips w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Tulips</p>
      <p class="text-justify fa-14 pb-5">
        Tulips are a timeless and playful bloom, and the ideal gift for a
        variety of situations. With their wide variety of colorful blossoms, you
        can usually be sure that there’s a tulip for whatever occasion you could
        dream of. Say thank you to a loved one for something they did for you,
        remind a college student away from home that you’re thinking of them, or
        just brighten your best friend’s day with a radiant bouquet! The options
        are endless with this springtime favorite.
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
        sunFlower Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Orchid Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Iris Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Daisy Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Carnations
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Chrysanthemum Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Azalea Plant For Sale
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="fa-14 py-4 font-weight-bold">
        When should you plant tulips?
      </p>
      <p class="text-justify fa-13 pb-2">
        Tulips are a classic springtime flower, but in order to see their lovely
        pastel hues, be sure to plant them in the fall. They do well in colder
        climates—as you might know, they are a point of national pride in the
        Netherlands— but, before the winter freeze, their bulbs must be
        established in the earth. Because the varieties of tulips bloom at
        different times and at their own rates, if you plant different types in
        your bulb gardens, your flowerbed could have these lovely little blooms
        from early winter until late spring!
      </p>
      <p class="fa-14 py-4 font-weight-bold">
        What does a tulip flower symbolize?
      </p>
      <p class="text-justify fa-13 mb-0">
        Tulips are a timeless symbol of joy and rebirth. This is because they
        bloom in the spring, and are such a sharp contrast with the grays and
        white of bitter winter. Tulip flower arrangements have historically been
        used to symbolize the coming of warmer days and the end of the long and
        cold winter season. Today, you can send a tulip delivery in the spring
        or summertime as a way to commemorate any event of the season! From
        April baby showers to May graduations, and June weddings to new jobs in
        August, tulip bouquets are a surefire way to spread joy.
      </p>
      <p class="text-justify fa-14 font-weight-bold py-3">
        What occasions do you send tulips?
      </p>
      <p class="text-justify fa-13">
        Tulip deliveries make a great gift for events such as:
      </p>
      <ul>
        <li class="fa-13 pb-2">
          Easter — since they symbolize rebirth and come in playful pastel
          colors, they are ideal for this holiday.
        </li>
        <li class="fa-13 pb-2">
          Birthdays — these fun and festive blooms mirror the colorful look of
          balloons!
        </li>
        <li class="fa-13 pb-2">
          Baby showers — nothing livens up the decor quite like flower
          arrangements of gorgeous pink tulips.
        </li>
        <li class="fa-13 pb-2">
          Bridal showers — white tulips are a fun way to say congrats to the
          bride-to-be!
        </li>
      </ul>
      <p class="fa-13 pt-3">
        No matter the fun occasion, tulip arrangements are an excellent choice
        for a flower delivery you can send today!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "tulips",
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
