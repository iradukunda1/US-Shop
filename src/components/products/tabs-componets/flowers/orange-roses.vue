<template>
  <div class="orange-roses w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Orange Roses</p>
      <p class="text-justify fa-14 pb-4">
        Shop S.U-Bouquets enormous selection of orange rose bouquets that are
        ideal for fall celebrating and decorating. From holiday centerpieces to
        unique birthday arrangements, we have everything you need to kick off
        fall with style.
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
        18 Red Roses
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Rose Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Colorful Roses
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Orange Rose
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        White Flower Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Small Spray Roses
      </a>
    </div>

    <div class="footer-content mt-4">
      <p class="h3 mb-0 pb-1 font-weight-bold">
        Send Orange Roses
      </p>
      <p class="text-justify fa-13 pb-2">
        Red, white, and pink roses are always great options to tell that special
        someone “I love you.” But, if you’re trying to show your creative side,
        you could send orange roses instead! These beautiful flowers have all
        the elegance of traditional roses, but with an added pop of fun.
      </p>
      <p class=" fa-13 text-justify">
        Add them to a mix of other colorful flowers to create a vibrant
        arrangement that will brighten someone’s day. When they’re paired with a
        fresh fruit basket, orange roses are great for moms, significant others,
        daughters off at college, or anyone else you think could use a ray of
        sunshine in their life!
      </p>
      <p class="py-3 font-weight-bold fa-14">
        What does an orange rose represent?
      </p>
      <p class="fa-13 pb-2 text-justify">
        Orange roses blend the passion and intensity of red roses with the
        friendliness and joyfulness of yellow flora like sunflowers. That means
        they’re perfect for a romantic partner, but still can also be a great
        option for a friend or family member. Sending bright orange roses says
        that you’re enthusiastic about the relationship — whatever that might
        be! The warm colors of orange roses are sentimental yet bright, making
        them the perfect way to communicate the joy you feel when thinking of
        your special someone. With that sweet message packed into your bouquet,
        they’re guaranteed to appreciate your orange rose delivery.
      </p>
      <p class="py-3 font-weight-bold fa-14">
        What occasions should you send orange roses?
      </p>
      <p class="fa-13 pb-2 text-justify">
        Orange roses are perfect for almost any occasion because they combine
        the timelesses of traditional roses with the vibrant hues found in
        gorgeous orange rose bouquets. Trying to show your significant other how
        much you care, but think red roses would be a bit much? Send orange
        roses for a less intimidating romantic gesture! They also make a
        memorable gift for important life events like graduations, new jobs,
        promotions, or new babies! The joyfulness of orange rose bouquets makes
        them perfect for just about any occasion.
      </p>
      <p class="py-3 font-weight-bold fa-14">
        How do you care for orange roses?
      </p>
      <p class="fa-13 pb-2 text-justify">
        Caring for orange roses is just like tending to any other flower
        bouquet. The arrangement should be put in fresh water that’s been
        treated with some flower food. To make sure they last, their stems
        should be slightly snipped! You’ll also want to make sure that they get
        plenty of sunlight. This will keep them vibrant for longer. Plus,
        keeping your bright orange roses in the sun will bring out their warm,
        joyful hues.
      </p>
      <p class="fa-13 pb-2 text-justify">
        If orange roses sound like the perfect way to convey your message, order
        easy and reliable flower delivery with FTD!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "orange-roses",
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
