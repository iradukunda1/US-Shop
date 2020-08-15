<template>
  <div class="pink-roses w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Pink Roses</p>
      <p class="text-justify fa-14 pb-4">
        Whether you want to say "get well", "happy Valentine's Day", "happy
        Mother's Day", or just "I love you", pink roses are a symbol of elegance
        and grace appropriate for many occasions. Send someone you love pink
        roses today.
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
        Roses Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        A Dozen Roses
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Long Stem Rose In A Box
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Yellow Roses Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        White Roses Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Red Roses
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        2 Dozen Red Roses
      </a>
    </div>

    <div class="footer-content mt-4">
      <p class="h3 mb-0 pb-1 font-weight-bold">
        Buy Pink Roses Online with S.U-Bouquets
      </p>
      <p class="text-justify fa-13 pb-2">
        Thinking of a gift that’s romantic? A gift that’s chic? Or a gift that’s
        glamorous and totally whimsical? Here’s a bouquet for you: pink roses!
        Sweet, fresh and 100% girly, pink roses make for a beautiful fragrant
        alternative to red roses. Looking for pink rose bouquets? Shop our
        amazing selection of glamorous hand-tied pink bouquets, fresh modern
        flower arrangements and sweet potted roses. Whatever you order, you’ll
        turn a simple flower delivery into an outstanding floral surprise with
        one of our statement-making floral gifts.
      </p>
      <p class=" fa-13 text-justify pb-2">
        When you want an easy-to-maintain, long-lasting floral gift, consider
        one of our many miniature potted rose bushes. Their blooms may be
        petite, but these fragrant wonders pack a beautiful punch. Delivered
        with pink flowers in bud form so the stunning pink petals can be enjoyed
        immediately, each of our potted roses is available with a choice of
        stunning decorative pots.
      </p>
      <p class="fa-13 pb-2 text-justify">
        When it comes to flower shopping, finding a bouquet that lives up to a
        bubbly personality can be difficult. Not so at S.U-Bouquets. We feature a
        host of traditional, modern or vibrant pink bouquets and flower
        arrangements. Inspiration abounds at S.U-Bouquets. Combine pink roses with
        pink lilies for a sophisticated and feminine gift. And of course if
        you’re thinking of making a more subtle statement, we can help with that
        too.
      </p>
      <p class="fa-13 pb-5 text-justify">
        You won’t disappoint when you send roses to her! Whoever said you had to
        buy red roses? Surprise your sweetie with pink roses for Valentine’s
        Day! Flirty and totally romantic, you’ll find many fragrant pink rose
        bouquets here at S.U-Bouquets. And finally of course pink roses are simply
        ideal for Mother’s day. Shop our amazing range of simple pink roses,
        elaborate rose bouquets, vibrant and modern mixed bouquets and you’re
        guaranteed to give Mom something to smile about!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "pink-roses",
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
