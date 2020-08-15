<template>
  <div class="lilies w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Lilies</p>
      <p class="text-justify fa-14 pb-4">
        Known for their vibrance, fragrance, and versatility, lilies are a
        popular choice for flower arrangements, no matter the occasion. We carry
        a variety of lilies including stargazer and Peruvian lily bouquets, so
        you can find an arrangement that best suits the recipient’s style and
        your special message. Ordering a lily bouquet with S.U-Bouquets is easy
        and sure to brighten anyone’s day. Shop our beautiful selection now!
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
        Stargazer Lily
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Call Lily Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Peace Lily Delivery
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
        Peruvian Lilies
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
    <div class="footer-content mt-4">
      <p class=" fa-14 py-4 font-weight-bold">
        What does a lily flower symbolize?
      </p>
      <p class="text-justify fa-13 pb-2">
        The lily flower symbolizes humility, devotion, femininity, love, purity,
        and much more. The diverse symbolism for this beautiful bloom is likely
        due to the many varieties in which it grows. Certain varieties are often
        used to communicate specific sentiments, including:
      </p>
      <ul>
        <li class="fa-14 pb-3">Peruvian white lilies: friendship</li>
        <li class="fa-14 pb-3">White stargazer lilies: sympathy</li>
        <li class="fa-14 pb-3">Pink stargazer lilies: wealth and prosperity</li>
        <li class="fa-14 pb-3">Peace lilies: Hope or innocence</li>
      </ul>
      <p class="fa-13">
        Lilies are also considered the flower to give for a 30th wedding
        anniversary, which isn’t surprising since they pair beautifully with a
        nice set of pearls, the “gemstone” for this special celebration. As you
        can see, lilies are flowers that can really represent anything you want
        them to. Lily arrangements are popular choices for romantic gestures,
        holidays like Easter, and everything in between.
      </p>
      <p class=" fa-14 py-3 font-weight-bold">
        What is special about lilies?
      </p>
      <p class=" fa-14 py-2">
        In addition to their beautiful varieties (there are almost 100 species
        of lilies), lilies are special for several reasons:
      </p>
      <ul>
        <li class="fa-14 pb-2">They’re long-lasting</li>
        <li class="fa-14 pb-2">They have a distinct fragrance</li>
        <li class="fa-14 pb-2">They’re available in nearly every color</li>
        <li class="fa-14 pb-2">
          They’re easily paired with many other flowers
        </li>
        <li class="fa-14 pb-2">They’re appropriate for most occasions</li>
        <li class="fa-14 pb-2">
          They’re partially edible — you can eat the lily bulb
        </li>
      </ul>
      <p class="fa-13">
        Impressed by this beautiful flower? So have many civilizations
        throughout history! Ordering your special someone an arrangement of
        these unique blooms is sure to impress.
      </p>
      <p class="fa-14 py-3 font-weight-bold">
        What seasons do lilies bloom in?
      </p>
      <p class="fa-13 pb-2">
        Typically, lilies bloom in summer and fall. However, we work with
        high-quality growers to bring you lily flower arrangements all year
        round
      </p>
      <p class="fa-13 pb-2">
        Whether you decide to order a celebratory bouquet featuring our orange
        lilies or want to stick with the more traditional white lily flowers,
        you can rest assured that your arrangement will always arrive at your
        loved one’s doorstep fresh and vibrant so they’ll be proud to display
        them. S.U-Bouquets makes it easy to show someone you’re thinking of them
        with a beautiful, artfully arranged lily bouquet that can be ordered in
        just a few minutes.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "lilies",
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
