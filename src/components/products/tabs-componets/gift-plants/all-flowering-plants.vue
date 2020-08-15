<template>
  <div class="all-flowering-plants w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Potted Flowers</p>
      <p class="text-justify fa-14 pb-4">
        Not only are our potted flowers and flowering plants perfectly packaged,
        they’re ideal gifts for anyone from a colleague to a spouse. They also
        come with a 14-day freshness guarantee so you really can’t go wrong.
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
        Potted Plant Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Money Tree Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Rose Plants Online
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Succulents Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Indoor Plant Sale
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Potted Gardens
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Green Plants
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Potted Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Rose Plant Online
      </a>
    </div>
    <div class="footer-content my-5">
      <p class="h3 pb-2">Plant Delivery</p>
      <p class="text-justify fa-13 pb-2">
        Looking for a gift that makes a loved one smile for days — even weeks
        after they receive their present? Potted plant delivery is just the
        thing you’ve been searching for. No matter what occasion you’re
        celebrating, our selection of flowering plants, bold blooms, and
        gorgeous greens are perfect for gift-giving. From our colorful flowering
        market garden to lilies and vibrant blooms, our selection comes with a
        14-day freshness guarantee — so you really can’t go wrong with
        S.U-Bouquets plant delivery!
      </p>
      <p class="fa-14 font-weight-bold  py-3">
        Flowering Plants for Delivery
      </p>
      <p class="text-justify fa-13 py-4">
        You have so many wonderful choices when you consider the S.U-Bouquets'
        Flowering Plants Collection.
      </p>
      <ul class="mb-4">
        <li class="fa-13 pb-3">Orchids</li>
        <li class="fa-13 pb-3">Azaleas</li>
        <li class="fa-13 pb-3">Hydrangeas</li>
        <li class="fa-13 pb-3">Peace Lilies</li>
      </ul>
      <p class="text-justify fa-13">
        These are just some of the blooming plants that we carry, and there's no
        doubt that your loved one will adore whichever one you choose. Bright
        and cheery, these flowering plants will endure with only minimal care,
        so brighten someone's day with a S.U-Bouquets Blooming Plant. Plus, all of
        our potted plant delivery options include simple care instructions, so
        whether the recipient’s a gal with a green thumb — or just the opposite
        — they’ll be able to enjoy this special gift for many days ahead. From
        Mother’s Day gifts delivered on Sunday, to flowers “just because,”
        S.U-Bouquets is your one-stop-shop for gift-giving!
      </p>
      <p class="fa-14 font-weight-bold  py-3">
        Most Popular Potted Plants for Delivery
      </p>
      <p class="text-justify fa-13">
        Overwhelmed by the variety of flowering plants in our selection?
      </p>
      <p class="text-justify fa-13 py-4">
        Here are some of our most popular options for plant delivery:
      </p>
      <ul>
        <li class="fa-13 pb-3">Potted Pink Roses</li>
        <li class="fa-13 pb-3">New Beginnings Bulb Garden</li>
        <li class="fa-13 pb-3">Sunshine & Joy Garden</li>
        <li class="fa-13 pb-3">Azalea Bonsai</li>
      </ul>
      <p class="fa-14 font-weight-bold  py-3">
        How Long Do Flowering Plants Last?
      </p>
      <p class="text-justify fa-13">
        Our flowering plants and potted plants for delivery have a 14-day
        freshness guarantee! Simply follow the easy care instructions, and you
        can enjoy fresh flowers for up to two weeks — or longer, if you’re a
        real gardening extraordinaire!
      </p>
      <p class="fa-14 font-weight-bold  py-3">
        When Should I Order Potted Plant Delivery?

      </p>
      <p class="text-justify fa-13">
        Potted plants are perfect for any occasion! And truth be told, you don’t
        need a special occasion to make someone feel special. Not when we have
        such great prices on all the very best flowering plants. Our fantastic
        deals make it easy to treat your loved ones to gorgeous plants without
        busting the budget. And make sure not to forget their birthday this
        year! Our selection of happy birthday flowers for wives and birthday
        gifts for mom will leave her heart full when she receives her special
        gift of flowers or even a fruit basket delivered straight to her
        doorstep. We also offer age-specific 30th birthday gift ideas for your
        loved ones or friends as well. So whether they’re turning 18 again or
        you’re looking for 60th birthday gift ideas, S.U-Bouquets has got you
        covered.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "all-flowering-plants",
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
