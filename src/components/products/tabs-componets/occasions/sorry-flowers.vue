<template>
  <div class="sorry-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Apology Flowers</p>
      <p class="text-justify fa-14">
        Say it like you mean it – “I'm Sorry” – with a selection from our
        Collection of I'm Sorry flowers. Apology flowers make apologies easy,
        but nonetheless sincere.
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
        Funeral Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sympathy Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sympathy Plants
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
        >Pet Sympathy Flowers
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
        Funeral Wreath
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sympathy Delivery
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold mb-0 pb-2 h4">
        Saying "I'm Sorry" with Flowers
      </p>
      <p class="text-justify fa-13">
        If you need a thoughtful and generous way to say, ?I’m Sorry? S.U-Bouquets
        has dozens of gorgeous apology flowers and bouquets. Whether you choose
        the beautiful vase of Stargazer Lilies or maybe a stunning mixed flower
        arrangement, featuring different tones of pink and purple, you just
        can’t go wrong!
      </p>
      <p class="text-justify fa-13">
        With so many color and design possibilities, choosing the best apology
        flowers you are sure to find the right bouquet to win her over. There
        are absolutely striking shades of red, pink, orange, yellow, blue,
        purple, indigo, violet, and even white, cream and blush, too. Of course
        you wouldn’t send brown flowers, but how about a little something in the
        rich shade of chocolate? We’re talking about hand-dipped, gourmet
        chocolate berries and cookies. They are absolutely mouthwatering good.
        She won’t be able to resist forgiving you.
      </p>
      <p class="text-justify fa-13">
        Saying sorry with flowers has come a long way; you can now pair your
        arrangement with a chocolate gifts, gift baskets or even send a special
        wreath! Rocky Mountain Chocolate Factory has delicious treats and
        S.U-Bouquets offers these tasty bite-sized wonders for a fantastic price;
        so if you’ve hurt someone’s feelings, send a sweet apology across those
        miles and say, "I love you!"
      </p>
      <p class="text-justify fa-13 py-4">
        If you’re not one to say sorry with flowers, we have plenty of other
        gift ideas for you. A farm fresh fruit gift basket filled with all kinds
        of tasty fruit and treats is the perfect choice. With fruits and
        chocolates flowing, you will be back in your special someone’s good
        graces before you know it!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "sorry-flowers",
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
