<template>
  <div class="congratulation-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Congratulations Flowers</p>
      <p class="text-justify fa-14">
        She takes her curtain call, he graduates, they get married, and there
        are flowers in their hands. With a bouquet of congratulations flowers,
        any event is more colorful and memorable.
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
      <p class="font-weight-bold mb-0 pb-0 h4">
        Send Congratulations Flowers with S.U-Bouquets
      </p>
      <p class="fa-14 font-weight-bold py-3">
        What should I get for a congratulations gift?
      </p>
      <p class="text-justify fa-13">
        She takes her curtain call, he graduates, they get married, and there
        are flowers in their hands. With a bouquet of congratulations flowers,
        any event is more colorful and memorable. Our selection of
        congratulation flowers includes bright mixed bouquets, elegant orchids,
        and beautiful blooms that can be paired with gourmet treats and
        thoughtful gifts.
      </p>
      <p class="fa-14 font-weight-bold py-4">
        What should I get for a congratulations gift?
      </p>
      <p class="text-justify fa-13 pb-2">
        Sending a congratulations bouquet of flowers is a meaningful way to
        convey your joy over a notable life milestone like graduating from
        college, getting married, buying a first home or welcoming a new baby to
        the family. Whether you’re shopping for engagement flowers, a present
        for new parents, or even retirement gifts, our inventory is sure to have
        just what you’re looking for.
      </p>
      <p class="text-justify fa-13">
        No matter which congratulations flowers you choose, be sure to include a
        personal note (included with your order) to tell your loved one you’re
        overjoyed at their recent accomplishment.
      </p>
      <p class="fa-14 font-weight-bold py-4">
        What flowers are best for congratulations?
      </p>
      <p class="text-justify fa-13 pb-2">
        When you think about it, almost all of life’s big events are celebrated
        with flowers. S.U-Bouquets has a huge selection of fresh flowers and
        thoughtful gifts to convey your congratulations on the birth of a new
        baby, a wedding or engagement, school graduation, new job, new home, and
        many other special life events. Celebrate the birth of a precious new
        family member by sending new baby flowers from S.U-Bouquets.
      </p>
      <p class="text-justify fa-13 pb-2">
        Along with a variety of traditional flowers and plants, S.U-Bouquets has
        all kinds of unique gift ideas to pair with your congrats flowers,
        including baby girl and baby boy gift sets with all the essentials like
        booties, a layette set, washcloths, a receiving blanket and a plush baby
        bear - all packed in a keepsake basket and tied up with a pink or blue
        ribbon. If you’re purchasing graduation flowers for the accomplished
        academic in your life, consider including a gourmet gift basket with
        your order to wean them off of their college ramen diet with sweet and
        savory snacks they’ll love.
      </p>
      <p class="fa-14 font-weight-bold py-4">
        Which flower means congratulations?
      </p>
      <p class="text-justify fa-13 pb-2">
        Looking for a congratulations bouquet that shouts your proud praises
        from the rooftops? Check out these flowers that hold sentiments of
        congrats, no matter what the occasion is.
      </p>
      <ul>
        <li class="fa-14 pb-3">
          Irises symbolize accomplishment and admiration
        </li>

        <li class="fa-14 pb-3">Orchids represent pride and maturity</li>

        <li class="fa-14 pb-3">Daffodils signify new beginnings</li>
      </ul>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "congratulation-flowers",
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
