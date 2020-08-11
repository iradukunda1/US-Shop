<template>
  <div class="sympathy-plants w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Sympathy Plants</p>
      <p class="text-justify fa-14">
        Show Condolence with Funeral Plants - Sending a sympathy plant to
        someone is a great way to share in their grief and show support. The
        dark green colors of most sympathy plants convey profound respect, while
        white flowering blooms symbolize purity, innocence, and re-birth.
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
    <div class="row mx-0 w-100 justify-content-center button-collection">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Funeral Flower Arrangement
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Condolence Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sympathy Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Dog Sympathy Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Casket Spray
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Wreath For Funeral
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sympathy Gift Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sorry Flower
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3">Sympathy Plants</p>
      <p class="text-justify fa-13 pb-2">
        Finding the words to express your condolences to a loved one is never
        easy, but your care and support is just what they need to get through a
        difficult time. Sympathy plants bring light and life into any room,
        making them the perfect gift to lift your loved one’s spirits. From
        gorgeous ivory peace lilies to thriving succulent gardens, our selection
        is sure to include a gift that they’ll cherish.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        What are the best plants to send for sympathy?
      </p>
      <p class="text-justify fa-13">
        The best plants to give for sympathy gifts ultimately depends on the
        individual receiving them—if they love colorful flowering plants, cheer
        them up with a sympathy plant delivery filled with their favorite
        blooms. Or, you can shop from our selection of traditional sympathy
        flowers to find arrangements that honor their loss in a more
        conventional way.
      </p>
      <div class="popular-sympath-container pb-2">
        <p class="mb-0 fa-13">
          Some of our most popular plants to give for sympathy include:
        </p>
        <p class="mb-0 fa-13">
          <span class="pr-4">· </span>Sympathy Peace Lily with Angel
        </p>
        <p class="mb-0 fa-13">
          <span class="pr-4">·</span>The FTD® Living Spirit Dishgarden
        </p>
        <p class="mb-0 fa-13">
          <span class="pr-4">·</span> Peaceful White Garden with Angel
        </p>
        <p class="mb-0 fa-13"><span class="pr-4">·</span>Potted White Azalea</p>
      </div>
      <p class="font-weight-bold fa-14 py-3">
        What other gifts pair well with a sympathy plant?
      </p>
      <p class="text-justify fa-13">
        When a loved one is lost, you need love and care from family and friends
        more than ever. To show your unconditional support for the grieving
        individual, pair your sympathy plant delivery with any of our other
        flowers and gifts. Fruit and snack gift baskets are a great choice to
        make sure the family is eating nutritiously as they go through
        bereavement together, but a few chocolate treats wouldn’t hurt either.
        No matter which gift you choose to complement your sympathy plant, just
        be sure to include a heartfelt note with your order to offer your loved
        ones love and light as they go through this difficult time. Each of our
        gift orders include a personal message so you can send your support
        right to your loved one’s doorstep.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        What sympathy plants last the longest?
      </p>
      <p class="text-justify fa-13">
        Whether you choose a vibrant bouquet of flowers or opt for one of our
        lush sympathy plants, all of our flower and plant gifts come with a
        7-day guarantee. But with the proper care, you can make your blooms last
        well beyond the week. If you’re shopping for sympathy plants for the
        home that will last even longer, a house plant, succulent garden, or
        wreath would all be excellent choices!
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "sympathy-plants",
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
.sympathy-plants {
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
