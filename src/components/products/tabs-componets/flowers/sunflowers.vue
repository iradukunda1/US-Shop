<template>
  <div class="sunflowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Sunflower Bouquets & Arrangements</p>
      <p class="text-justify fa-14 pb-5">
        Showy, sturdy, and sure to please, the magnificent blooms on our
        sunflower bouquets bring good cheer to any setting. Send sunflowers and
        really brighten a room or, better, a heart.
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
      Gerbera Daisies
    </a>
    <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
    >
      Carnation Flower
    </a>
      <a
          class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
          href="javascript:;;"
      >
        Chrysanthemum Flower
      </a>
    <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
    >
      Buy Azalea
    </a>
    <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
    >
      Tulip Flower
    </a>
  </div>
    <div class="footer-content mt-4">
      <p class="h3 py-4 font-weight-bold">
        Sunflowers Bouquets & Flower Arrangements
      </p>
      <p class="text-justify fa-13 pb-2">
        With brilliant petals known as “rays,” sunflowers are a flower that can
        bring cheer and happiness into anyone’s life. Our selection of sunflower
        arrangements are as inviting as the warm summer sun and make great gifts
        for birthdays, anniversaries, or just a random Thursday. If you want to
        add joy to a special someone’s day, a sunflower bouquet will do the
        trick. The unique splendor of this vibrant flower has been adorned by
        people for centuries, making the sunflower a crowd favorite. What
        flowers go well with sunflowers?
      </p>
      <p class="text-justify fa-13 mb-0">
        The brilliant yellow and size of the sunflower make it the focal point
        of any mixed flower bouquet. To create perfect sunflower floral
        arrangements, you need flowers that will complement the sunflower, not
        compete. To create a sophisticated sunflower bouquet, choose flowers of
        different shades of yellow, such as daisies, carnations, and
        chrysanthemums to highlight the beauty of the sunflower.
      </p>
      <p class="text-justify fa-13 mb-0">
        Or, create bold sunflower floral arrangements with red flowers like
        roses, tulips, and lilies. Red and pink summer flowers will bring out
        the richness of both contrasting colors to create an eye-popping
        bouquet, while soft-hued flowers will mute the vibrancy of the
        sunflower’s yellow petals for a more subtle arrangement. What is the
        spiritual meaning of a sunflower?
      </p>
      <p class="text-justify fa-13 mb-0">
        As with all flowering plants, fresh sunflower arrangements require
        tender, love, and care. To increase the longevity of your sunflower
        bouquet, follow these steps:
      </p>
      <ul>
        <li class="fa-13 pb-2">
          Remove leaves below the waterline to reduce bacteria growth
        </li>
        <li class="fa-13 pb-2">
          Cut 2-3 cm off the stems of the sunflower stalks to increase water
          consumption
        </li>
        <li class="fa-13 pb-2">
          Add sugar or flower food to the water to promote growth
        </li>
        <li class="fa-13 pb-2">
          Change the water every few days, using room temperature water
        </li>
        <li class="fa-13 pb-2">
          Place your sunflowers out of direct sunlight and away from drafts and
          areas prone to cold or hot air
        </li>
      </ul>
      <p class="font-weight-bold fa-13 pb-2 mb-0">
        Order Sunflowers and Delivered to Your Door for Any Occasion
      </p>
      <p class="fa-13 pt-3">
        Sunflower bouquets are perfect just because flowers or celebration
        flowers for major life events like anniversaries, holidays, and
        birthdays. With proper care, you or a loved one will be able to enjoy
        the unrelenting beauty of sunflower flower arrangements for weeks to
        come!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "sunflowers",
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
