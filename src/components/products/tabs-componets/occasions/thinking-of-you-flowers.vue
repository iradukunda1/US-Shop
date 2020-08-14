<template>
  <div class="thinking-of-you-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Thinking of You Flowers</p>
      <p class="text-justify fa-14">
        Sometimes, when they’re near or far, all you want to do is let them know
        that you’re thinking of them. When times like this come about, turn to
        S.U-Bouquets to help you send a message of love through beautiful Think of
        You flower bouquets and bright flowering plants.
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
        Flesh New Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Unique Flower Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Romantic Flower Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Appreciation Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Best Floral Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sweetest Day Delivery
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold mb-0 pb-0 h4">Thinking of You Flowers</p>
      <p class="text-justify fa-13">
        If they live far away and you want them to know they’re always on your
        mind, send thinking of you flowers or plants as a wonderful way to say
        hello. Our popular Blue Canterbury Bells Garden is great to send a
        friend or family member to say hello. For something a bit more romantic,
        we recommend colorful roses or multi-colored tulips. When you’re trying
        to show them immeasurable appreciation for what they’ve done, send thank
        you flowers like carnations, sunflowers, or a mixed bouquet. If you send
        a teacup orchid that has been hand selected by our growers, it will
        arrive fresh and look incredible so they can enjoy it longer. Summer
        Stargazer Lilies are another great bouquet to say thank you. Send well
        wishes with get well flowers that are easy to maintain and beautiful to
        look at.
      </p>
      <p class="text-justify fa-13">
        When words simply are not enough, thinking of you flowers delivered is
        the ultimate romantic gesture. Choose his or her favorite flower or
        color or both to show how much you care. Or a romantic bouquet of roses
        is considered one of the most passionate flowers to give. She’ll love
        this gesture. If you’re on a budget you can still send just because
        flowers online with S.U-Bouquets vast selection of stunning flowering
        bouquet and plants for under $30. You don’t need a special occasion to
        make someone feel special. Our amazing deals make it easy to treat your
        loved ones to gorgeous floral arrangements without busting the budget.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "thinking-of-you-flowers",
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
