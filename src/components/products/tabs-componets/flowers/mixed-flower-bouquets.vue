<template>
  <div class="mixed-flower-bouquets w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Bouquet of Flowers</p>
      <p class="text-justify fa-14 pb-4">
        .Our mixed flower bouquets range from elegant arrangements of lilies to
        festive rainbows of roses. Each bouquet is designed to pack a punch of
        color while still complementing any area of the home or office
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
    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Flowers
      </a>
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
        Roses
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower Delivery RW
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower And Chocolate
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Orange Lilies
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="text-justify fa-13 pb-2">
        Shopping for a bouquet of flowers to impress? Our mixed flower bouquets
        range from elegant arrangements of lilies to festive rainbows of roses.
        Each bouquet is designed to pack a punch of color while complementing
        any area of the home or office. Order bouquet delivery for birthdays,
        anniversaries, and more!
      </p>
      <p class=" fa-14 py-4 font-weight-bold">
        What’s in a bouquet of flowers?
      </p>
      <p class="text-justify fa-13 pb-2">
        It depends! When you order a bouquet of flowers from S.U-Bouquets, the
        options are limitless! Choose from mixed bouquets with spring tulips and
        calla lilies, vibrant sunflowers accented by purple monte and dianthus,
        and more. Our flower bouquets are sure to include beautiful blooms your
        loved one will love to display in their home or office
      </p>
      <p class="text-justify fa-13 pb-2">
        Some of our most popular flower bouquets include:
      </p>
      <ul>
        <li class="fa-14 pb-3 font-italic">
          Smiles & Sunshine with roses and Peruvian lilies
        </li>
        <li class="fa-14 pb-3 font-italic">
          Sweet Spring with pink Asiatic lilies, orange sunset mini callas,
          yellow striped tulips, and more
        </li>
        <li class="fa-14 pb-3 font-italic">
          Premium Joyful Bouquet with Stargazer lilies and blue iris
        </li>
      </ul>
      <p class="fa-14 font-weight-bold py-4">
        How long does a bouquet of flowers last?
      </p>
      <p class=" fa-13 py-2">
        All of our flower bouquets are picked fresh from our trusted growers,
        and assembled shortly after by our team of professional florists before
        they’re shipped overnight. We guarantee that our flower bouquets will
        stay fresh for at least seven days. It's because of these standards that
        S.U-Bouquets has become a preferred source for fast, fresh and beautiful
        flower bouquets.
      </p>
      <p class="fa-14  py-3 font-weight-bold">
        Which flower delivery service is best?
      </p>
      <p class="fa-13 pb-2">
        Looking for the best flower delivery service to deliver a bouquet of
        flowers to your loved one? Look no further than S.U-Bouquets. Our
        expansive selection of flower bouquets and gifts is second-to-none, and
        our commitment to customer satisfaction is unwavering!
      </p>
      <p class="fa-13 pb-2">
        When you send flowers with us, you can rest assured that the recipient
        is delighted with their delivery of vibrant birthday flowers, romantic
        roses, or bright get well flowers. That’s because our flower bouquets
        are picked fresh by the best growers in the world, designed by
        passionate florists, and shipped overnight to ensure fast delivery. No
        matter what occasion you’re shopping for, flower bouquets are sure to
        convey the right message and brighten your loved one’s day!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "mixed-flower-bouquets",
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
