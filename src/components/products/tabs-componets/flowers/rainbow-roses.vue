<template>
  <div class="rainbow-roses w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Rainbow Rose Delivery</p>
      <p class="text-justify fa-14 pb-4">
        Sometimes a red rose is the perfect way to say “I love you,” and
        sometimes a yellow rose can be great to send cheer. White roses can tell
        the bride she’s lovely, and pink roses can make your friend smile from
        ear to ear. But when you’re just so filled with joy that you want to
        send all the good vibes you can, rainbow roses are the perfect choice!
        With radiant and lovely shades of every color under the sun, rainbow
        roses, or kaleidoscope roses as they are sometimes known, can truly
        spark happiness in the heart of any recipient.
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
      <p class="fa-14 py-3 font-weight-bold">
        Can you grow rainbow roses?
      </p>
      <p class="text-justify fa-13 pb-2">
        Sadly, rainbow roses are not actually grown. They’re artistically
        crafted with a dyeing process! If you’re trying to create your very own
        bouquet of different color roses, there are a few ways to do it. Your
        first option would be to grow roses in a variety of hues and then pick
        them and arrange them into a gorgeous bouquet of multiple colors! From
        white to pink, crimson, and yellow, when all arranged together you’ll
        get a true rainbow of colors.
      </p>
      <p class=" fa-13 text-justify pb-2">
        If you want to create rainbow roses in the style of S.U-Bouquets’ very own
        unicorn rose bouquet, start with a simple white rose bouquet. Then, pick
        up some dye from your local craft store—food coloring or clothing dye
        will both work! Carefully paint each petal in the shade you desire.
        It’ll take some time, but the results will be eye catching. Of course,
        if you need them quicker, S.U-Bouquets is happy to help with a fast
        rainbow roses delivery, unicorn roses, or two dozen roses to show your
        love!
      </p>
      <p class="fa-14 py-3 font-weight-bold">
        What is the meaning behind rainbow roses?
      </p>
      <p class="text-justify fa-13 pb-2">
        Rainbow rose bouquets have a wide variety of meanings. As we all know,
        red long stem roses mean passionate love. Yellow roses are a sign of
        innocence, happiness, and celebration. White spray roses are a great
        choice for momentous or solemn occasions, like weddings, graduations,
        celebrations of life, and memorials. Pink roses are playful and fun, and
        make a great gift for the ladies in your life that you admire.
      </p>
      <p class=" fa-13 text-justify pb-2">
        When you combine these meanings, you get a fun, exciting, and zany
        combination that proclaims all your feelings for the recipient! If you
        opt for unicorn roses, you get that fun and exciting sentiment taken to
        the max. Pick out two dozen roses for a gorgeous rainbow arrangement
        today!
      </p>
      <p class="fa-14 py-3 font-weight-bold">
        What occasion do you send kaleidoscope roses?
      </p>
      <p class="text-justify fa-13 pb-2">
        Kaleidoscope roses are perfect for birthdays, graduations, new jobs,
        promotions, or even just as a way to show someone you’re thinking of
        them. They might not be the first choice to tell a special someone that
        you love them, but hey, if you have a fun and playful relationship then
        go right ahead! Because of their variety of colors, the options are
        truly endless.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "rainbow-roses",
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
