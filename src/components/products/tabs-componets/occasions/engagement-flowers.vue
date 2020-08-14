<template>
  <div class="engagement-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Engagement Flowers</p>
      <p class="text-justify fa-14">
        It doesn’t matter if you’re popping the question, sending congratulation
        wishes, or decorating for your own engagement party. S.U-Bouquets has
        everything you need in one place to celebrate your engagement from the
        very beginning.
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
    <div class="footer-content mt-4">
      <p class="font-weight-bold mb-0 pb-2 h4">
        Engagement Flowers Online
      </p>
      <p class="text-justify fa-13">
        Engagement bouquet flowers from S.U-Bouquets are a wonderful way to
        express your happiness for the couple during this special,
        once-in-a-lifetime event. When you’re ready to propose, let S.U-Bouquets
        create a beautiful backdrop for this important moment with romantic
        flowers. Your partner is sure to say yes when a gorgeous bouquet helps
        deliver the message. From romantic roses, sweet stargazer lilies, or
        even a lovely heart shaped bamboo, however you choose to say it we can
        help you do it. Engagement flowers and bouquet delivery is available
        through S.U-Bouquets so you can customize your order with an assortment of
        your sweetheart’s favorite blooms. If you’re looking for red roses to
        make the moment as romantic as possible, we can help you out with that
        as well.
      </p>
      <p class="text-justify fa-13">
        Even if the engagement has already happened, you can still share the
        excitement with friends and family by throwing an amazing engagement
        party! The right engagement party flowers are easy and inexpensive way
        to decorate the special gathering. Choose from mixed bouquets or stick
        with traditional red roses to add a bit of romance. And once the
        engagement celebration settles down and the wedding planning picks up,
        make planning easier on yourself when you order wedding flowers online.
        S.U-Bouquets can offer you a wide assortment of wedding flowers for the
        bride, bridal party, groom, and his groomsmen. Then down the road, let
        us help you with anniversary flowers! We will be there for every step of
        the way. Contact us for more information.
      </p>
      <p class="text-justify fa-13">
        And let’s not forget another special occasion that occurs once a year!
        Get birthday presents for girlfriends from S.U-Bouquets as well! Birthday
        flowers and goodie baskets are sure to bring a smile to her face,
        especially when it is delivered straight to her door. Shop for birthday
        gifts for daughters, wives, and mothers as well to treat all of your
        special ladies to a sweet surprise.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "engagement-flowers",
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
