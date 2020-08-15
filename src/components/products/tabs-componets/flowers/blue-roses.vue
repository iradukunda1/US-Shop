<template>
  <div class="blue-roses w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Blue Roses</p>
      <p class="text-justify fa-14 pb-4">
        Blue roses are beautiful and vibrant, just like the smile they’ll bring
        to their recipient’s face. Order an affordable blue rose bouquet from
        S.U-Bouquets and show someone just how special you think they are!
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
    <div class="footer-content mt-4">
      <p class="fa-14 py-4 font-weight-bold">
        What is the Meaning of Blue Roses?
      </p>
      <p class="text-justify fa-13 pb-2">
        Blue roses can have several meanings and be used to communicate a
        variety of sentiments including:
      </p>
      <ul>
        <li class="fa-13 pb-3">Peacefulness</li>
        <li class="fa-13 pb-3">
          Sensitivity or empathy
        </li>
        <li class="fa-13 pb-3">
          Creativity
        </li>
        <li class="fa-13 pb-3">
          Mystery
        </li>
        <li class="fa-13 pb-3">
          Excitement
        </li>
      </ul>
      <p class=" fa-13 py-2">
        Their diversity makes blue rose bouquets an excellent choice as baby
        shower flower arrangements, romantic gestures for the lover with an
        appreciation for the extraordinary, Father’s Day, and more.
      </p>
      <p class="fa-13 pb-2 mb-0">
        In addition to blue roses, we offer a range of blue flower bouquets that
        have similar meanings.
      </p>
      <p class="fa-14 py-4 font-weight-bold">
        How Quickly Can I Have a Blue Rose Bouquet Delivered?
      </p>
      <p class="fa-13 pb-2">
        Typically, when you place your blue rose delivery, you can get it as
        soon as the next day. However, if you need a rushed gift for a new mom
        or a bouquet of birthday roses for a surprise party, we won’t leave you
        hanging. Many of our flower arrangements are available for same-day
        delivery for an additional fee; just make sure to get your order in
        before 2pm (or 1pm on weekends).
      </p>
      <p class="fa-14 py-3 font-weight-bold">How to Care for Blue Roses</p>
      <p class="fa-13 pb-2">
        Caring for blue roses is fairly straightforward:
      </p>
      <ul>
        <li class="fa-13 pb-3">
          When your blue rose bouquet first arrives, you will want to take off
          any wrapping, cut the stems at a diagonal angle, and place them in
          cool water with any flower food provided.
        </li>
        <li class="fa-13 pb-3">
          Every two days, change out the water completely, refilling the vase
          with cool water.
        </li>
        <li class="fa-13 pb-3">
          At night, you can store your blue roses flower arrangement in the
          fridge to keep it fresh for longer.
        </li>
      </ul>
      <p class="fa-13 text-justify pt-3">
        Typically, our blue rose flower arrangements last about a week, but with
        these tips you can help them last as long as possible.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        What Types of Flowers are Naturally Blue?
      </p>
      <p class="fa-13 pb-4">
        Many flowers naturally bloom blue, including:
      </p>
      <ul>
        <li class="fa-13 pb-3">Irises</li>
        <li class="fa-13 pb-3">Hydrangeas</li>
        <li class="fa-13 pb-3">Delphiniums</li>
        <li class="fa-13 pb-3">Morning glories</li>
        <li class="fa-13 pb-3">Grape hyacinths</li>
        <li class="fa-13 pb-3">Cornflowers</li>
        <li class="fa-13 pb-3">Forget-me-nots</li>
      </ul>
      <p class="fa-13 py-4">
        While roses are not naturally blue, you would never know it by looking
        at a stunning bouquet of blue roses from S.U-Bouquets. Our navy blue rose
        bouquets are carefully dyed this radiant hue for a unique and beautiful,
        yet natural-looking bouquet.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "blue-roses",
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
