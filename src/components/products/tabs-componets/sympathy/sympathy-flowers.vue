<template>
  <div class="sympathy-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h2 ">Sympathy Flowers</p>
      <p class="text-justify fa-14">
        Sending sympathy flowers to someone who has suffered a loss is a kind
        gesture. It will remind them that you are there for them in their time
        of need. When choosing a bouquet to express your condolences, you want
        the peace of mind that you are receiving high-quality blooms that will
        be a beautiful sentiment instead of a burden. SU-Bouquets is dedicated to
        excellence and has a variety of sympathy flowers for delivery for all
        budgets, and can be easily ordered online.
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
    <div class="row mx-0 w-100  button-collection justify-content-center">
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
        Mixed Funeral Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Funeral Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Same Day Sympathy Flower
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
        Funeral Flower
      </a>
    </div>
    <div class="footer-content my-4 py-4">
      <p class="font-weight-bold fa-14 pb-2">
        What are the best flowers to send for a death?
      </p>
      <p class="text-justify fa-13">
        Do you want to send sympathy flowers but are not sure where to start?
        Typically, funeral flowers are comprised of white, blue, purple, or pink
        blooms, or any combination of these hues. These colors are popular for
        condolence flowers and funeral standing sprays because they can
        represent peace, honor, respect, and love. However, there are many
        options to choose from for your bouquet. The most important thing is
        that you get the tone right. Be sure to select your arrangement based on
        the recipient’s taste.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        What kind of flowers are appropriate for sympathy?
      </p>
      <p class="text-justify fa-13 pt-2">
        Popular choices for sympathy flowers include lilies, roses, orchids,
        carnations, and hyacinths. Soft and feminine lavender roses are an
        elegant touch while orchids are simple and sophisticated.
      </p>
      <p class="text-justify fa-13 pt-2">
        SU-Bouquets has a variety of beautifully arranged sympathy flowers for
        delivery so that you don’t have to stress about your decision. Whichever
        you choose, you can rest assured that your condolences will be greatly
        appreciated and your arrangement on full display.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        When should you send sympathy flowers?
      </p>
      <p class="text-justify fa-13">
        You should send sympathy flowers when someone you care for has lost a
        loved one. You can order sympathy flowers for delivery for just about
        anyone. If you want to show kindness to a colleague, acquaintance, or
        friend-of-a-friend, there’s no reason you can’t do that with one of our
        respectful flower arrangements.
      </p>
      <p class="text-justify fa-13">
        Flowers aren’t the only option if you want to offer your condolences. We
        also have sympathy gift baskets filled with a variety of delicious
        treats. From dried fruits and nuts to comfort foods like Mrs. Field’s
        cookies, you can’t go wrong with one of these thoughtful packages. Our
        baskets also make a great gift to the host of the after-funeral
        reception. You might consider sending both flowers and a gift basket for
        an impactful and generous condolence package.
      </p>
      <p class="text-justify fa-13">
        We understand that sympathy flowers often must be sent in a rush. To
        accommodate our customers, we offer speedy delivery at affordable rates.
        Order online today to send a breathtaking sympathy flower delivery that
        will arrive as soon as you need it.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "sympathy-flowers",
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
.sympathy-flowers {
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
